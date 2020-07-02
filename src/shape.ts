
import { Light } from './types';
import { Group } from './paths';

export abstract class Shape {
  public abstract Render(light: Light): Group;
}
