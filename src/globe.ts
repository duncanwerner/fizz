
import { Sphere, SphereOptions } from './sphere';
import { Point2, Point3, Light, Threshold, Arc } from './types';
import { Utils } from './utils';
import { landmass, GetLandmassShading } from './landmass';

import { PathBuilder } from './paths';

export interface GlobeOptions extends SphereOptions {

  /** axial tilt */
  theta?: number;

  /** rotation about the axis when rendering a globe */
  alpha?: number;

  /** number of steps for long shading */
  longitudinal_steps?: number;

  /** draw landmass outlines */
  earth_outline?: boolean;

  /** fill landmass */
  earth_fill?: boolean;

}

/**
 * globe uses longitudinal rendering
 */
export class Globe extends Sphere {

  /** axial tilt */
  public theta = Utils.Radians(130);

  /** rotation about the axis when rendering a globe */
  public alpha = Utils.Radians(-14);
  
  /** number of steps for long shading */
  public longitudinal_steps = 64;
  
  /** draw landmass outlines */
  public earth_outline = true;
  
  /** fill landmass */
  public earth_fill = true;
      
  constructor(options: GlobeOptions = {}) {
    super(options);

    // these need proper zero handling
    if (typeof options.theta === 'number') { this.theta = options.theta; }
    if (typeof options.alpha === 'number') { this.alpha = options.alpha; }

    if (options.longitudinal_steps) { this.longitudinal_steps = options.longitudinal_steps; }
    if (typeof options.earth_outline === 'boolean') { this.earth_outline = options.earth_outline; }
    if (typeof options.earth_fill === 'boolean') { this.earth_fill = options.earth_fill; }
  }

  /** 
   * returns the point on the visible sphere representing this lat/long
   * coordinate; or undefined if the point is not visible.
   */
  public PointToSphere(long: number, lat: number) {

    // we're offsetting when we do the shading, for convenience, so
    // we need to do that here as well

    long -= 180;

    const in_bounds = (λ: number, λ1: number, λ2: number) => {
      return (λ >= λ1 && λ <= λ2)
        || (λ + Math.PI * 2 >= λ1 && λ + Math.PI * 2 <= λ2)
        || (λ - Math.PI * 2 >= λ1 && λ - Math.PI * 2 <= λ2);
    };

    const p = lat / 180 * Math.PI;

    let λ1 = 0;
    let λ2 = 0;
    let c = 0;

    const theta = this.theta;

    if (theta > Math.PI / 2) {
      if (theta - p > Math.PI / 2) {
        return undefined;
      }
      c = (Math.PI - p < theta - Math.PI / 2) ? 1 : Math.cos(p) * Math.cos(theta);
      λ1 = 0 - c * Math.PI / 2;         //   0 +/- 90 => range (-90,  90)
      λ2 = Math.PI + c * Math.PI / 2;   // 180 +/- 90 => range ( 90, 270)

    }
    else if (theta >= 0) {
      if (p > Math.PI / 2 + theta) {
        return undefined;
      }
      c = (p < (Math.PI / 2 - theta)) ? 1 : Math.cos(p) * Math.cos(theta);
      λ1 = 0 - c * Math.PI / 2;           // range (-90, 0)
      λ2 = Math.PI + c * Math.PI / 2;     // range (180, 270)

    }
    /* not doing negative anymore
    else {
      if (p > Math.PI / 2 - this.theta) {
        return undefined;
      }
      c = (p > (Math.PI / 2 + this.theta)) ? Math.cos(p) * Math.cos(this.theta) : 1;
      λ1 = Math.PI - Math.PI / 2 * c;     // range (90, 180)
      λ2 = Math.PI * 2 + Math.PI / 2 * c; // range (360, 450)

    }
    */

    const λ = Math.PI * 2 - (this.alpha + long / 180 * Math.PI);

    if (c !== 1 && !in_bounds(λ, λ1, λ2)) {
      return undefined;
    }

    const center = {
      y: this.center.y - Math.cos(p) * this.r * Math.sin(theta),
      x: this.center.x
    };

    const rx = this.r * Math.sin(p);
    const ry = Math.cos(theta) * rx;

    return {
      x: rx * Math.cos(λ) + center.x,
      y: ry * Math.sin(λ) + center.y,
    };

  }

  /** 
   * visible earth outlines
   */
  public RenderEarthOutlines() {

    const path = new PathBuilder();

    for (const outline of landmass) {

      let drawing = false;

      for (const lat_long of outline) {
        const point = this.PointToSphere(...lat_long);
        if (point) {
          if (drawing) {
            path.Line(point);
          }
          else {
            path.Move(point);
            drawing = true;
          }
        }
        else {
          drawing = false;
        }
      }

    }

    return path.ToGroup('landmass-outline');

  }

  public Render(light: Light) {

    const group = new PathBuilder();

    // polygons

    if (this.earth_outline) {
      const globe = this.RenderEarthOutlines();
      group.Append(globe);
    }

    // clamp theta
    
    this.theta = Math.max(0, Math.min(Math.PI, this.theta));

    // FIXME: add a special case rendering. don't force it to draw flat ellipses.

    let rotation = this.theta;

    if (rotation === Math.PI / 2) rotation *= .999;
    if (rotation === Math.PI) rotation *= .999;
    if (rotation === 0) rotation = Math.PI * .001;

    const alpha = this.alpha

    // for filling earth landmasses

    const landmass_path = new PathBuilder();

    // this holds the longitudinal shading arcs, they're variable-width depending on light

    const shading = new PathBuilder();

    // angle step

    const step = Math.PI / this.longitudinal_steps;

    if (rotation > Math.PI / 2) {

      for (let i = 0; i < this.longitudinal_steps; i++) {
        const p = i * step;

        const center = {
          y: this.center.y - Math.cos(p) * this.r * Math.sin(rotation),
          x: this.center.x
        };

        // for whatever reason we can't seem to render arcs with ry < 0,
        // so we need to flip it upside down. that just makes everything
        // more complicated... we have to consider both the logical arc
        // and the rendered arc

        const rx = this.r * Math.sin(p);
        const ry = Math.cos(rotation) * rx;

        if (rotation - p > Math.PI / 2) {
          continue; // not visible
        }

        const c = (Math.PI - p < rotation - Math.PI / 2) ? 1 : Math.cos(p) * Math.cos(rotation);

        // these are _logical_, we rotate below

        const λ1 = 0 - c * Math.PI / 2;         //   0 +/- 90 => range (-90,  90)
        const λ2 = Math.PI + c * Math.PI / 2;   // 180 +/- 90 => range ( 90, 270)

        // flip b, rotate 180

        shading.Append(...this.ShadeArc(light, 
          { rx, ry: -ry, λ1: λ1 + Math.PI, λ2: λ2 + Math.PI, center }));

        if (this.earth_fill) {
          const extents = GetLandmassShading(p / Math.PI * 180);
          for (const extent of extents) {

            // extents are in (0, π) (as radians). if we shift with our alpha parameter
            // then the range is (-180, 540), but remember that the earth loops around...

            const shifted = [
              extent[0] + alpha,
              extent[1] + alpha,
              extent[0] + alpha - Math.PI * 2,
              extent[1] + alpha - Math.PI * 2,
            ];

            let arc: Point2[][] = [];

            if ((c === 1) || (shifted[0] >= λ1 && shifted[1] <= λ2) || (shifted[2] >= λ1 && shifted[3] <= λ2)) {
              arc = Utils.EllipticalArc(rx, -ry, Math.PI + shifted[0], Math.PI + shifted[1]);
            }
            else if ((shifted[0] >= λ1 && shifted[0] <= λ2) || (shifted[2] >= λ1 && shifted[2] <= λ2)) {
              arc = Utils.EllipticalArc(rx, -ry, Math.PI + shifted[0], Math.PI + λ2);
            }
            else if ((shifted[1] >= λ1 && shifted[1] <= λ2) || (shifted[3] >= λ1 && shifted[3] <= λ2)) {
              arc = Utils.EllipticalArc(rx, -ry, Math.PI + λ1, Math.PI + shifted[1]);
            }

            arc.map((segment) => Utils.Offset(center, ...segment)).map(curve => landmass_path.Curve(...curve));

          }
        }

      }

    }
    else if (rotation >= 0) {

      for (let i = 0; i < this.longitudinal_steps; i++) {
        const p = i * step;

        const center = {
          y: this.center.y - Math.cos(p) * this.r * Math.sin(rotation),
          x: this.center.x
        };

        const rx = this.r * Math.sin(p);
        const ry = Math.cos(rotation) * rx;

        if (p > Math.PI / 2 + rotation) {
          continue; // not visible
        }

        const c = (p < (Math.PI / 2 - rotation)) ? 1 : Math.cos(p) * Math.cos(rotation);
        const λ1 = 0 - c * Math.PI / 2;         // range (-90, 90)
        const λ2 = Math.PI + c * Math.PI / 2;   // range (90, 270)

        shading.Append(...this.ShadeArc(light, { rx, ry, λ1, λ2, center }));

        if (this.earth_fill) {
          const extents = GetLandmassShading(p / Math.PI * 180);
          for (const extent of extents) {

            // vis a vis the version above, these are reversed (because we rotate those 180o)

            // extents are in (0, 360) (as radians). if we shift with our alpha parameter
            // then the range is (-180, 540), but remember that the earth loops around...

            const shifted = [
              extent[0] + alpha,
              extent[1] + alpha,
              extent[0] + alpha - Math.PI * 2,
              extent[1] + alpha - Math.PI * 2,
            ];

            let arc: Point2[][] = [];

            if ((c === 1) || (shifted[0] >= λ1 && shifted[1] <= λ2) || (shifted[2] >= λ1 && shifted[3] <= λ2)) {
              arc = Utils.EllipticalArc(rx, ry, Math.PI - shifted[1], Math.PI - shifted[0]);
            }
            else if ((shifted[0] >= λ1 && shifted[0] <= λ2) || (shifted[2] >= λ1 && shifted[2] <= λ2)) {
              arc = Utils.EllipticalArc(rx, ry, Math.PI - λ2, Math.PI - shifted[0]);
            }
            else if ((shifted[1] >= λ1 && shifted[1] <= λ2) || (shifted[3] >= λ1 && shifted[3] <= λ2)) {
              arc = Utils.EllipticalArc(rx, ry, Math.PI - shifted[1], Math.PI - λ1);
            }

            arc.map((segment) => Utils.Offset(center, ...segment)).map(curve => landmass_path.Curve(...curve));

          }
        }

      }

    }

    if (landmass_path.length) {
      group.Append(landmass_path.ToGroup('landmass-shading'));
    }

    if (shading.length) {
      group.Append(shading.ToGroup('shading'));
    }

    // we add outline last, so it's rendered on top

    group.Append({
      type: 'circle',
      class_name: 'outline',
      r: this.r,
      center: this.center,
    });

    return group.ToGroup('shape sphere globe');

  }

}