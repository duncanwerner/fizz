
import { Point2, Point3, Light, Threshold, Arc } from './types';
import { Shape } from './shape';
import { Utils } from './utils';
import { PathComponent, PathBuilder } from './paths';

export interface SphereOptions {
  threshold?: Threshold;
  shading_step?: number;
  center?: Point3;
  r?: number;
}

export class Sphere extends Shape {

  public threshold: Threshold = {
    line: 0.45,
    dash: 0.325,
  };

  public shading_step = 4;

  public center: Point3 = { x: 0, y: 0, z: 0 };

  public r = 50;

  constructor(options: SphereOptions = {}) {
    super();

    if (options.center) { this.center = options.center; }
    if (options.threshold) { this.threshold = options.threshold; }
    
    // technically this is not correct because 0 is falsy, but at the same
    // time we want to reject 0 for these values anyway, so its ok for now

    if (options.r) { this.r = options.r; }
    if (options.shading_step) { this.shading_step = options.shading_step; }

  }

  /** get z coordinate of sphere at (x,y) */
  public HeightAtPoint(point: Point2) {

    // FIXME: we should add a small amount of randomness here just effect

    const { x, y } = point;

    // what is the point z on the sphere at (x, y)?

    const adjacent = Math.sqrt((this.center.x - x) * (this.center.x - x) + (this.center.y - y) * (this.center.y - y));
    const angle = Math.acos(adjacent / this.r);
    const z = this.r * Math.sin(angle);

    // and raise up to center

    return z + this.center.z;

  }

  /** calculate light. FIXME: render should take a function, not a light source */
  public LightAtPoint(point: Point2, light: Light) {

    const z = this.HeightAtPoint(point);
    const { x, y } = point;

    // now distance to the light source

    const distance = Math.sqrt(
      (light.center.x - x) * (light.center.x - x) +
      (light.center.y - y) * (light.center.y - y) +
      (light.center.z - z) * (light.center.z - z));

    // then we need some function for intensity as a function of distance...
    // this is an inverse square function? we want to exaggerate, though,
    // so that might be a little too sensitive

    const intensity = light.intensity / (distance * distance);
    const light_value = light.shadow * Math.max(0, 1 - intensity);

    return light_value;

  }

  /** 
   * general routine for shading an elliptical arc. we integrate the arc 
   * based on some formula and then for each point, we calculate lighting
   * (actually we calculate shading).
   * 
   * then we build up a composite curve, where the line is thickened for
   * darker areas, and "dashed" for lighter areas. we use outlines for the
   * thickening, but (atm) we are cheating on the dashes -- they are just
   * stroked segments of varying lengths.
   */
  public ShadeArc(light: Light, arc: Arc) {

    const components: PathComponent[] = [];

    const r = arc.rx; // this is an artifact of our starting with circles. FIXME

    // integrate. we can scale the integration. in fact we
    // have to, otherwise dashes get scaled and don't look right.

    const count = Math.ceil(r * 2); // FIXME: parameter?

    const angle_step = Math.PI * 2 / count;
    let points: Array<{ a: number, point: Point2, shade: number }> = [];

    for (let i = 0; i <= count; i++) {

      const a = arc.λ1 + angle_step * i;
      if (a > arc.λ2) { break; }

      const point = Utils.PointOnArc(arc, a);
      let shade = this.LightAtPoint(point, light);

      points.push({ a, point, shade });

    }

    /** 
     * subroutine takes a forward and backwards path, and creates
     * a composite shape outline.
     */
    const render_segments = (path: PathBuilder, forward: Point2[][], back: Point2[][]) => {

      back.reverse();

      let curve = forward[0];
      path.Curve(...curve); // four-point curve, includes move

      const first_point = curve[0]; // we arc back at the end

      for (curve of forward.slice(1)) {
        path.Curve(...curve.slice(1));
      }

      let last_point = curve[3];

      curve = back[0];
      const next_point = curve[0];

      // you could get this from the spacing, it's a parameter

      let length = Math.sqrt(
        (next_point.x - last_point.x) * (next_point.x - last_point.x) +
        (next_point.y - last_point.y) * (next_point.y - last_point.y));

      path.Arc(curve[0]); // not actual arc atm
      path.Curve(...curve.slice(1));

      for (curve of back.slice(1)) {
        path.Curve(...curve.slice(1));
      }

      last_point = curve[3];

      length = Math.sqrt(
        (first_point.x - last_point.x) * (first_point.x - last_point.x) +
        (first_point.y - last_point.y) * (first_point.y - last_point.y));

      path.Arc(first_point); // not actual arc atm

    };

    const dashes = new PathBuilder();
    const path = new PathBuilder();

    // here we organize points into groups. each segment is either not rendered,
    // rendered as a dash (partial line), or built into a shape. we composite
    // shapes by adding contiguous paths.

    // since each shape has two lines, and we want to fill the shape, we need
    // to go forward on one side and backwards on the other side.

    let forward: Point2[][] = [];
    let back: Point2[][] = [];

    for (let i = 1; i < points.length; i++) {

      const a = points[i - 1];
      const b = points[i];

      if (a.shade >= this.threshold.line || b.shade >= this.threshold.line) {

        // composite segment

        const arc_segment = Utils.ConstructArcSegment(arc.center, arc.rx, arc.ry, a.a, b.a, a.shade, b.shade);
        forward.push(...arc_segment.forward);
        back.push(...arc_segment.back);
      }
      else {

        // render and flush any line we've constructed

        if (forward.length) {
          render_segments(path, forward, back);
          forward = [];
          back = [];
        }

        // now maybe add dash

        if (a.shade >= this.threshold.dash && b.shade >= this.threshold.dash) {
          const average = (a.shade + b.shade) / 2 * 1;
          Utils.EllipticalArc(arc.rx, arc.ry, a.a, a.a + (b.a - a.a) * average).map((curve) =>
            dashes.Curve(...Utils.Offset(arc.center, ...curve)));
        }

      }

    }

    // render any trailing segment

    if (forward.length) {
      render_segments(path, forward, back);
    }

    if (path.length) {
      components.push(path.ToGroup('shading-fill'));
    }

    if (dashes.length) {
      components.push(dashes.ToGroup('shading-stroke'));
    }

    return components;

  }

  public Render(light: Light) {

    const group = new PathBuilder();

    // shading

    const shading = new PathBuilder();

    for (let r = this.r - this.shading_step; r >= this.shading_step; r -= this.shading_step) {
      shading.Append(...this.ShadeArc(light, {
        center: this.center,
        rx: r,
        ry: r,
        λ1: 0,
        λ2: Math.PI * 2,
      }));
    }

    if (shading.length) {
      group.Append(shading.ToGroup('shading'));
    }

    // outline

    group.Append({
      type: 'circle',
      class_name: 'outline',
      center: {...this.center},
      r: this.r,
    });

    return group.ToGroup('shape sphere');

  }



}