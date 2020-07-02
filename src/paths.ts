
import { Point2 } from './types';

/**
 * abstracting rendering so we can switch from svg to canvas (maybe)
 * 
 * I'm kind of mixing up concepts of paths and groups, could probably
 * use some cleaning up. 
 */

export interface Circle {
  type: 'circle';
  class_name?: string;
  center: Point2;
  r: number;
}

export interface Move {
  type: 'move';
  point: Point2;
}

/** cubic bezier, assuming we start at current position */
export interface Bezier3 {
  type: 'bezier3';
  class_name?: string;
  Q1: Point2;
  Q2: Point2;
  P2: Point2;
}

/** line -> point */
export interface Line {
  type: 'line';
  class_name?: string;
  point: Point2;
}

/** group, for parent styles */
export interface Group {
  type: 'group';
  class_name?: string;
  components: PathComponent[];
}

/** discriminated union */
export type PathComponent
  = Circle
  | Bezier3
  | Line
  | Move
  | Group
  ;

/**
 * utility for constructing paths; fluent interface
 */
export class PathBuilder {

  public components: PathComponent[] = [];

  public get length() { return this.components.length; }

  /** move -> point */
  public Move(point: Point2) {
    this.components.push({
      type: 'move', point
    });
    return this; // fluent
  }

  /** line -> point */
  public Line(...points: Point2[]) {
    for (const point of points) {
      this.components.push({
        type: 'line', point
      });
    }
    return this; // fluent
  }

  /** PLACEHOLDER, DOES NOT ARC */
  public Arc(point: Point2) {
    return this.Line(point);
  }

  public Append(...components: PathComponent[]) {
    this.components.push(...components);
    return this;
  }

  /** 
   * add a cubic bezier. if you pass in four points we add an implicit move 
   * operation, otherwise we start at current position.
   */
  public Curve(...points: Point2[]) {

    // don't worry about munging this array, we created it via the spread
    if (points.length === 4) {
      this.components.push({ type: 'move', point: points.shift() as Point2 });
    }

    this.components.push(
      { type: 'bezier3', Q1: points[0], Q2: points[1], P2: points[2] });

    return this; // fluent
  }

  public ToGroup(class_name?: string): Group {
    return {
      type: 'group',
      class_name,
      components: this.components, // copy?
    }
  }

}


