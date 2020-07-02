
import { RenderOptions, default_render_options, Renderer } from './remderer';
import { Size, Light } from './types';
import { Shape } from './shape';
import { Group } from './paths';

/**
 * create element with namespace, plus optionally assign class/classes
 * 
 * this used to be in utils, we don't do SVG anywhere but here now
 */
const SVGElement = (tag: string, class_list?: string | string[]) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  if (class_list) {
    if (typeof class_list === 'string') {
      class_list = [class_list];
    }
    element.setAttribute('class', class_list.join(' ').trim());
  }
  return element;
}

/**
 * split out renderer so we can swap
 */
export class SVGRenderer extends Renderer {

  private RenderGroup(target: SVGElement, path: Group) {

    // create a group
    const g = SVGElement('g', path.class_name);

    const d: string[] = [];
    for (const element of path.components) {
      switch (element.type) {
        case 'move':
          d.push(`M${element.point.x},${element.point.y}`);
          break;

        case 'line':
          d.push(`L${element.point.x},${element.point.y}`);
          break;

        case 'bezier3':
          d.push(`C${element.Q1.x},${element.Q1.y} ${element.Q2.x},${element.Q2.y} ${element.P2.x},${element.P2.y}`);
          break;

        // special case
        case 'group':
          this.RenderGroup(g, element);
          break;

        // special case
        case 'circle':
          {
            const circle = SVGElement('circle', element.class_name);
            circle.setAttribute('cx', element.center.x.toString());
            circle.setAttribute('cy', element.center.y.toString());
            circle.setAttribute('r', element.r.toString());
            g.appendChild(circle);
          }
          break;

        default:
          throw new Error('unhandled path component'); // never, atm

      }
    }

    if (d.length) {
      const path = SVGElement('path');
      path.setAttribute('d', d.join(' '));
      g.appendChild(path);
    }

    target.appendChild(g);

  }

  public Render(
    size: Size,
    shapes: Shape[],
    light: Light,
    options: RenderOptions = {}) {

    options = {
      ...default_render_options,
      ...options,
    };

    if (!options.node) throw new Error('missing svg node');
    const node = options.node as SVGElement;

    if (options.clear) {
      options.node.textContent = '';
    }

    if (options.render_light_source) {
      this.RenderGroup(node, this.RenderLightSource(light));
    }

    for (const shape of shapes) {
      this.RenderGroup(node, shape.Render(light));
    }

  }

}


