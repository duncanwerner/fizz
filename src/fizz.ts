
import { Light, Size } from './types';
import { Shape } from './shape';
import { Globe } from './globe';
import { Sphere } from './sphere';
import { SVGRenderer } from './svg-renderer';
import { CanvasRenderer } from './canvas-renderer';
import { RenderOptions } from './remderer';

export class Fizz {

  public svg_renderer = new SVGRenderer();
  public canvas_renderer = new CanvasRenderer();

  public light: Light = {
    center: { x: 0, y: 0, z: 400 },
    intensity: 1.25e5, 
    shadow: 3,
  };

  public shapes: Shape[] = [];

  constructor (public size: Size = {width: 100, height: 100}) {
    this.light.center = {
      x: this.size.width / 4 * .5,
      y: this.size.height / 4 * .5,
      z: (this.size.width + this.size.height) / 2, // mean
    };
  }

  public RenderSVG(options?: RenderOptions) {
    this.svg_renderer.Render(this.size, this.shapes, this.light, options);
  }

  public RenderCanvas(options?: RenderOptions) {
    this.canvas_renderer.Render(this.size, this.shapes, this.light, options);
  }

  /**
   * utility function for web
   */
  public AddGlobe() {
    const globe = new Globe({
      center: {x: 200, y: 200, z: 0}, 
      r: 100,
    });
    this.shapes.push(globe);
  }

  /**
   * utility function for web
   */
  public AddSphere() {
    const sphere = new Sphere({
      center: {x: 200, y: 200, z: 0}, 
      r: 100,
    });
    this.shapes.push(sphere);
  }


}