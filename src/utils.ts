
import { Point2, Arc } from './types';

export class Utils {

  /**
   * convenience method for arcs that are larger than π/4
   */
  public static EllipticalArc(a: number, b: number, λ1: number, λ2: number): Point2[][] {
    const arcs: Point2[][] = [];

    λ1 = this.EllipseAngleToT(λ1, a, b);
    λ2 = this.EllipseAngleToT(λ2, a, b);

    // simple case
    if (λ2 - λ1 < Math.PI / 4) {
      return [this.EllipticalArcSegment(a, b, λ1, λ2)];
    }

    const count = Math.ceil((λ2 - λ1) / (Math.PI / 4));
    const step = (λ2 - λ1) / count;

    let start = λ1;
    for (let i = 1; i <= count; i++) {
      const end = λ1 + i * step;
      arcs.push(this.EllipticalArcSegment(a, b, start, end));
      start = end;
    }

    return arcs;
  }

  public static PointOnArc(arc: Arc, λ: number) {

    return {
      x: arc.rx * Math.cos(λ) + arc.center.x, 
      y: arc.ry * Math.sin(λ) + arc.center.y, 
    };

  }

  public static PointOnArc2(arc: Arc, λ: number) {

    const η = Math.atan2(Math.sin(λ)/arc.ry, Math.cos(λ)/arc.rx);
    const P = {
      x: arc.rx * Math.cos(η) + arc.center.x,
      y: arc.ry * Math.sin(η) + arc.center.y,
    };
    return P;

  }

  public static EllipseAngleToT(angle: number, a: number, b: number) {
    return Math.atan2(Math.sin(angle) * b, Math.cos(angle) * a);
  }

  /**
   * returns a cubic bezier approximating the elliptical arc. to simplify,
   * (at least for now), we assume that center is at origin and the ellipse
   * is not rotated (Θ = 0).
   * 
   * the angle subtended by the arc should be < π/2 (or is that π/4?).
   * caller should split if necessary.
   * 
   * based on
   * http://www.spaceroots.org/documents/ellipse/elliptical-arc.pdf
   * 
   * @param a semi-major axis
   * @param b semi-minor axis
   * @param λ1 start angle
   * @param λ2 end angle
   */
  private static EllipticalArcSegment(a: number, b: number, λ1: number, λ2: number): Point2[] {

    const η1 = Math.atan2(Math.sin(λ1)/b, Math.cos(λ1)/a);
    const η2 = Math.atan2(Math.sin(λ2)/b, Math.cos(λ2)/a);

    const P1 = {
      x: a * Math.cos(η1),
      y: b * Math.sin(η1),
    };

    const P2 = {
      x: a * Math.cos(η2),
      y: b * Math.sin(η2),
    };

    const α = Math.sin(η2 - η1) * (Math.sqrt(4 + 3 * Math.pow(Math.tan((η2 - η1)/2),2)) - 1) / 3;

    // prime character is invalid for symbol, shame, I was doing well up til now

    const Eprime1 = {
      x: -a * Math.sin(η1),
      y:  b * Math.cos(η1),
    };

    const Eprime2 = {
      x: -a * Math.sin(η2),
      y:  b * Math.cos(η2),
    };

    const Q1 = {
      x: P1.x + α * Eprime1.x,
      y: P1.y + α * Eprime1.y,
    };

    const Q2 = {
      x: P2.x - α * Eprime2.x,
      y: P2.y - α * Eprime2.y,
    };

    return [ 
      P1, 
      Q1, 
      Q2, 
      P2, 
    ];

  }

  /** translate */
  public static Radians(degrees: number) { return Math.PI * degrees / 180; }

  /** translate */
  public static Degrees(radians: number) { return  Math.round(180 * radians / Math.PI); }

  /** line intersection (TODO: use line struct) */
  public static LineIntersection(a1: Point2, a2: Point2, b1: Point2, b2: Point2) {

    // FIXME: check det = 0

    const t = ((a1.x - b1.x) * (b1.y - b2.y) - (a1.y - b1.y) * (b1.x - b2.x)) /
      ((a1.x - a2.x) * (b1.y - b2.y) - (a1.y - a2.y) * (b1.x - b2.x));

    return {x: a1.x + t * (a2.x - a1.x), y: a1.y + t * (a2.y - a1.y)};

  }

  /**
   * offset bezier by [x], via Tiller and Hanson method
   * https://math.stackexchange.com/questions/465782/control-points-of-offset-bezier-curve/467038#467038
   * 
   * this version has a start and end offset; they're scaled to the control points
   * by line length (not sure how good of an approximation that is).
   * 
   * we only have offsets at the ends, so if you want the line to change sizes more 
   * than once, split it into segments.
   */
  public static OffsetBezier2(curve: Point2[], offset_start: number, offset_end: number, reverse = false) {

    const points: Point2[] = [];
    const result: Point2[] = [];

    let total_length = 0;
    const lengths = curve.slice(1).map((b, index) => {
      const a = curve[index];
      const length = Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
      total_length += length;
      return length;
    })

    const offset_delta = offset_end - offset_start;
    const offsets: number[] = [offset_start];

    let aggregate = 0;
    for (const length of lengths) {
      aggregate += length;
      offsets.push(offset_start + aggregate / total_length * offset_delta); 
    }

    for (let i = 0; i < curve.length - 1; i++) {

      const a = Math.atan2(curve[i + 1].x - curve[i].x, curve[i + 1].y - curve[i].y);
      
      points.push({
        x: curve[i].x + Math.cos(a) * offsets[i],
        y: curve[i].y - Math.sin(a) * offsets[i],
      },

      {
        x: curve[i + 1].x + Math.cos(a) * offsets[i + 1],
        y: curve[i + 1].y - Math.sin(a) * offsets[i + 1],
      });

    }

    // start
    result.push(points[0]);

    // control points...
    result.push(this.LineIntersection(points[0], points[1], points[2], points[3]));
    result.push(this.LineIntersection(points[2], points[3], points[4], points[5]));

    // end
    result.push(points[5]);

    if (reverse) { result.reverse(); }

    return result;

  }

  /**
   * offset bezier by [x], via Tiller and Hanson method
   */
  public static OffsetBezier(curve: Point2[], offset: number, reverse = false) {

    const points: Point2[] = [];
    const result: Point2[] = [];

    // intermediate step

    for (let i = 0; i < curve.length - 1; i++) {

      // normal

      const a = Math.atan2(curve[i + 1].x - curve[i].x, curve[i + 1].y - curve[i].y);
      
      points.push({
        x: curve[i].x + Math.cos(a) * offset, 
        y: curve[i].y - Math.sin(a) * offset,
      },

      {
        x: curve[i + 1].x + Math.cos(a) * offset, 
        y: curve[i + 1].y - Math.sin(a) * offset,
      });

    }

    // start
    result.push(points[0]);

    // control points...
    result.push(this.LineIntersection(points[0], points[1], points[2], points[3]));
    result.push(this.LineIntersection(points[2], points[3], points[4], points[5]));

    // end
    result.push(points[5]);

    if (reverse) { result.reverse(); }

    return result;

  }

  /** render point(s) as text, for svg */
  public static RenderPoints(...points: Point2[]) {
    return points.map(point => `${point.x},${point.y}`).join(' ');
  }

  /**
   * given a bezier curve and widths (at the ends), we want to construct
   * the outline. because we construct paths from multiple segments, here
   * we are returning the forward and backward paths (curves in the backward
   * path are in reverse order though). caller can concatenate once all the 
   * subpaths are accumulated.
   */
  public static ConstructArcSegment(center: Point2, r1: number, r2: number, a1: number, a2: number, w1: number, w2: number) {

    const forward: Point2[][] = [];
    const back: Point2[][] = [];

    // const arc = this.CreateArc(a1, a2);
    const arc = this.EllipticalArc(r1, r2, a1, a2);

    // thankfully we always split into uniform segments

    let width_step = (w2 - w1) / arc.length;
    
    for (let i = 0; i < arc.length; i++) {
      let segment = arc[i];

      let start_offset = (w1 + i * width_step) / 2;
      let end_offset = (w1 + (i + 1) * width_step) / 2;

      segment = this.Offset(center, ...segment);

      forward.push(this.OffsetBezier2(segment, start_offset, end_offset, false));
      back.push(this.OffsetBezier2(segment, -start_offset, -end_offset, true));

    }

    return { forward, back };

  }

  /** because we use unit arcs */
  public static ScaleOffset(scale: number, offset: Point2, ...points: Point2[]) {
    return points.map((point) => {
      return {
        x: point.x * scale + offset.x,
        y: point.y * scale + offset.y,
      };
    });
  }

  /** we no longer use unit arcs */
  public static Offset(offset: Point2, ...points: Point2[]) {
    return points.map((point) => {
      return {
        x: point.x + offset.x,
        y: point.y + offset.y,
      };
    });
  }

}

