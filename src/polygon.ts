
type Point = [number, number];

/**
 * based on 
 * https://www.geeksforgeeks.org/how-to-check-if-a-given-point-lies-inside-a-polygon/
 * 
 * this used to use structures but since our data is in arrays it's easier
 * to just use arrays. it makes this impossible to read, though.
 */
export class Polygon {

  public static PointOnSegment(p: Point, q: Point, r: Point): boolean {
    return (q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) &&
            q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]));
  }

  public static GetOrientation(p: Point, q: Point, r: Point) {
    const val = (q[1] - p[1]) * (r[0] - q[0]) -
                (q[0] - p[0]) * (r[1] - q[1]);

    if (val === 0) { return 0; }    
    return (val > 0) ? 1 : 2;
  }

  public static Intersection(p1: Point, q1: Point, p2: Point, q2: Point) {

    const o1 = this.GetOrientation(p1, q1, p2);
    const o2 = this.GetOrientation(p1, q1, q2);
    const o3 = this.GetOrientation(p2, q2, p1);
    const o4 = this.GetOrientation(p2, q2, q1);

    return (o1 !== o2 && o3 !== o4)
      || (o1 === 0 && this.PointOnSegment(p1, p2, q1)) 
      || (o2 === 0 && this.PointOnSegment(p1, q2, q1)) 
      || (o3 === 0 && this.PointOnSegment(p2, p1, q2)) 
      || (o4 === 0 && this.PointOnSegment(p2, q1, q2)); 
      
  }

  public static PointInsidePolygon(polygon: Point[], p: Point) {

    if (polygon.length < 3) return false;

    const extreme: Point = [Number.MAX_SAFE_INTEGER, p[1]];

    let count = 0;
    let i = 0;

    do {
      const next = (i + 1) % polygon.length;
      if (this.Intersection(polygon[i], polygon[next], p, extreme)) {
        if (this.GetOrientation(polygon[i], p, polygon[next]) === 0)
          return this.PointOnSegment(polygon[i], p, polygon[next]);
        count++;
      }
      i = next;
    } 
    while (i !== 0);

    return !!(count & 1);
    
  }


}




