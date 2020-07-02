
import { Light, Size } from './types';
import { PathBuilder } from './paths';
import { Shape } from './shape';

/**
 * we can style svg with css, but for canvas we have to be more explicit
 * (actually we could still use svg styling... something to think about)
 */
export interface CanvasRenderingStyle {
  stroke?: string;
  fill?: string;
  stroke_width?: number;
}

/** options slightly different for svg, canvas */
export interface RenderOptions {
  render_light_source?: boolean,
  clear?: boolean,
  node?: SVGElement|HTMLCanvasElement,
  style?: {[index: string]: CanvasRenderingStyle};
}

export const default_render_options: RenderOptions = {
  clear: true,
};

export abstract class Renderer {

  public abstract Render(
    size: Size,
    shapes: Shape[],
    light: Light,
    options?: RenderOptions): void;

  /**
   * this renders a symbol for the light, it has nothing to do with actual lighting
   */
  public RenderLightSource(light: Light) {

    const path = new PathBuilder();

    const r = 10;
    const len = Math.sqrt(200) / 2;

    path.Move({x: light.center.x - len, y: light.center.y - len})
        .Line({x: light.center.x + len, y: light.center.y + len})
        .Move({x: light.center.x - len, y: light.center.y + len})
        .Line({x: light.center.x + len, y: light.center.y - len});

    path.Append({
      type: 'circle',
      class_name: 'light-source',
      center: light.center,
      r,
    })

    return path.ToGroup('light-source');

  }

}
