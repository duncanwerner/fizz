
import { RenderOptions, default_render_options, CanvasRenderingStyle, Renderer } from './remderer';

import { Size, Light } from './types';
import { Shape } from './shape';
import { Group } from './paths';

/**
 * canvas has essentially the same primitves as svg, so rendering is
 * basically the same, except that in svg we are expecting css, so to
 * support that we need to collect styles and stack them (imitating
 * the cascading part of css).
 */
export class CanvasRenderer extends Renderer {

  private composite: CanvasRenderingStyle = {};

  private style_stack: CanvasRenderingStyle[] = [];

  private styles: {[index: string]: CanvasRenderingStyle} = {};

  private PushStyle(name?: string) {
    let style = {};
    if (name) {
      const names = name.split(/\s+/);
      for (const name of names) {
        if (this.styles[name]) {
          style = { ...style, ...this.styles[name] };
        };
      }
    }
    this.style_stack.push(style);
    this.ApplyStyle();
  };

  private PopStyle = () => {
    this.style_stack.pop();
    this.ApplyStyle();
  };

  private ApplyStyle() {

    this.composite = {};
    for (const style of this.style_stack) {
      if (style.stroke) {
        this.composite.stroke = style.stroke;
      }
      if (style.stroke_width) {
        this.composite.stroke_width = style.stroke_width;
      }
      if (style.fill) {
        this.composite.fill = style.fill;
      }
    }

  }

  private RenderPath(context: CanvasRenderingContext2D) {

    if (this.composite.fill && this.composite.fill !== 'none') {
      context.fillStyle = this.composite.fill;
      context.fill();
    }

    if (this.composite.stroke && this.composite.stroke !== 'none' && this.composite.stroke_width) {
      context.strokeStyle = this.composite.stroke;
      context.lineWidth = this.composite.stroke_width;
      context.stroke();
    }

  }

  private RenderGroup(context: CanvasRenderingContext2D, group: Group){

    this.PushStyle(group.class_name);

    let path = false;

    for (const element of group.components) {
      switch (element.type) {
        case 'move':
          if (!path) {
            path = true;
            context.beginPath();
          }
          context.moveTo(element.point.x, element.point.y);
          break;

        case 'line':
          if (!path) {
            path = true;
            context.beginPath();
          }
          context.lineTo(element.point.x, element.point.y);
          break;

        case 'bezier3':
          if (!path) {
            path = true;
            context.beginPath();
          }
          context.bezierCurveTo(element.Q1.x, element.Q1.y, element.Q2.x, element.Q2.y, element.P2.x, element.P2.y);
          break;

        // special case
        case 'group':
          if (path) {
            path = false;
            this.RenderPath(context);
          }

          this.RenderGroup(context, element);
          break;

        // special case
        case 'circle':

          if (path) {
            path = false;
            this.RenderPath(context);
          }

          {
            this.PushStyle(element.class_name);
            context.beginPath();
            context.ellipse(element.center.x, element.center.y, element.r, element.r, 0, 0, Math.PI * 2);
            this.RenderPath(context);
            this.PopStyle();
          }
          break;

        default:
          throw new Error('unhandled path component'); // never, atm

      }
    }

    if (path) {
      this.RenderPath(context);
    }

    this.PopStyle();

  };

  public Render(
    size: Size,
    shapes: Shape[],
    light: Light,
    options: RenderOptions = {}) {

    options = {
      ...default_render_options,
      ...options,
    };

    if (!options.node) throw new Error('missing canvas node');

    const canvas = (options.node as HTMLCanvasElement);
    const context = canvas.getContext('2d');

    if (!context) throw new Error('context failed');

    // base style

    this.style_stack = [{
      stroke: '#000',
      fill: 'none',
      stroke_width: 1,
    }];
  
    // store reference

    this.styles = options.style || {};

    if (this.styles.base) {
      this.style_stack.push(this.styles.base);
    }

    if (options.clear) {
      context.clearRect(0, 0, size.width, size.height);
    }

    if (options.render_light_source) {
      this.RenderGroup(context, this.RenderLightSource(light));
    }

    for (const shape of shapes) {
      this.RenderGroup(context, shape.Render(light));
    }

  }
}

