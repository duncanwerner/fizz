
export interface Point2 {
  x: number;
  y: number;
}

export interface Point3 {
  x: number;
  y: number;
  z: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Size {
  width: number,
  height: number,
}

export interface Arc {
  center: Point2;
  rx: number;
  ry: number;
  λ1: number;
  λ2: number;
}

export interface Light {
  center: Point3;
  intensity: number;
  shadow: number;
}

export interface Threshold {

  /** 
   * threshold above which we draw solid lines (actually filled 
   * shapes, but you know what I mean) 
   */
  line: number;

  /** 
   * threshold above which we draw dashed lines 
   */
  dash: number;

}
