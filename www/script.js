
class Example {

  MouseDown(event, move, end) {
    if (event.buttons > 1) { return; }
    event.stopPropagation();
    event.preventDefault();

    this.mask_move = move;
    this.mask_end = end;
    this.mask.style.display = 'block';
    if (move) move(event);
  }

  DismissMask(event) {
    if (this.mask_end) {
      this.mask_end(event);
    }
    this.mask_move = this.mask_end = undefined;
    this.mask.style.display = 'none';
  }

  InitMask() {
    this.mask = document.querySelector('.mask');

    this.mask.addEventListener('mouseup', (event) => {
      this.DismissMask(event);
    });

    this.mask.addEventListener('mousemove', (event) => {
      if (event.buttons === 0) {
        this.DismissMask(event);
      }
      else if (this.mask_move) { 
        this.mask_move(event); 
      }
    });

  }

  UpdateLightControls() {
    this.controls['intensity'].value = this.fizz.light.intensity;
    this.controls['shadow'].value = this.fizz.light.shadow;
    this.controls['light-x'].value = this.fizz.light.center.x;
    this.controls['light-y'].value = this.fizz.light.center.y;
    this.controls['light-z'].value = this.fizz.light.center.z;
  }
  
  UpdateKnobs() {
    let value = (180 + (this.globe.alpha * 180 / Math.PI)) / 360;
    let rect = this.horizontal_knob.parentElement.getBoundingClientRect();
    const x = Math.round(rect.width * value);
    this.horizontal_knob.style.left = `${(x - 10).toString()}px`;

    value = (this.globe.theta * 180 / Math.PI) / 180;
    rect = this.vertical_knob.parentElement.getBoundingClientRect();
    const y = Math.round(rect.height * (1 - value));
    this.vertical_knob.style.top = `${(y - 10).toString()}px`;
  }

  UpdateControls() {
    this.controls['render-target'].value = this.render_target;
    
    this.UpdateLightControls();

    this.controls['sphere-x'].value = this.globe.center.x;
    this.controls['sphere-y'].value = this.globe.center.y;
    this.controls['sphere-z'].value = this.globe.center.z;
    this.controls['sphere-r'].value = this.globe.r;
    this.controls['sphere-alpha'].value = Math.round(this.globe.alpha / Math.PI * 180);
    this.controls['sphere-theta'].value = Math.round(this.globe.theta / Math.PI * 180);
    this.controls['sphere-long-steps'].value = this.globe.longitudinal_steps;

    this.UpdateKnobs();

    this.controls['earth-options'].value = 
      (this.globe.earth_outline ? 1 : 0) +
      (this.globe.earth_fill ? 2 : 0);

    this.controls['line-threshold'].value = this.globe.threshold.line;
    this.controls['dash-threshold'].value = this.globe.threshold.dash;
  }

  Spin() {
    if (!this.spinning) { return; }

    const delay = 25;
    if (this.spin_timeout) { return; }
    const start = performance.now();
    this.spin_timeout = setTimeout(() => {
      this.spin_timeout = undefined;
      const millis = performance.now() - start;

      let value = this.globe.alpha / Math.PI * 180 + .75 * millis / delay;
      if (value > 180) { value -= 360; }     
      this.globe.alpha = Math.PI / 180 * value;
      this.DelayedRender();
      Promise.resolve().then(() => this.Spin());
    }, 25);
  }

  Render() {
    if (this.render_target === 'SVG') {
      this.fizz.RenderSVG(this.svg_options);
    }
    else {
      this.fizz.RenderCanvas(this.canvas_options);
    }
  }

  DelayedRender() {
    if (this.timeout) { return; }
    this.timeout = requestAnimationFrame(() => {
      this.Render();
      this.timeout = undefined;
    });
  }

  constructor() {

    this.InitMask();

    const canvas = document.querySelector('.render canvas');
    if ((window.devicePixelRatio || 1) !== 1) {

      const width = canvas.width;
      const height = canvas.height;
  
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
  
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
  
      const context = canvas.getContext('2d');
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
 
    }

    this.canvas_options = { 
      clear: true, 
      node: canvas,
      style: {
        base: { stroke: '#666', fill: 'none', stroke_width: 1, },
        'light-source': { stroke: 'red', },
        'shading-stroke': { stroke_width: .5, },
        'landmass-outline': { stroke_width: .75, },
        'shading-fill': { fill: '#666', stroke: 'none', }
      },
    };

    const svg = document.querySelector('.render svg');
    this.svg_options = { clear: true, node: svg };

    const render = document.querySelector('.render');
    render.addEventListener('mousedown', (event) => {
      const rect = render.getBoundingClientRect();
      this.MouseDown(event, (event) => {
        const x = Math.min(400, Math.max(0, event.clientX - rect.left));
        const y = Math.min(400, Math.max(0, event.clientY - rect.top));
        this.fizz.light.center.x = x;
        this.fizz.light.center.y = y;
        this.UpdateLightControls();
        this.svg_options.render_light_source = true;
        this.canvas_options.render_light_source = true;
        this.DelayedRender();
      }, () => {
        this.svg_options.render_light_source = false;
        this.canvas_options.render_light_source = false;
        this.DelayedRender();
      });
    });

    this.vertical_knob = document.querySelector('.vertical-slider .knob');
    this.vertical_knob.parentElement.addEventListener('mousedown', (event) => {
      const rect = this.vertical_knob.parentElement.getBoundingClientRect();
      this.MouseDown(event, (event) => {
        const y = Math.min(rect.height, Math.max(0, event.clientY - rect.top));
        const percent = y / rect.height;
        this.vertical_knob.style.top = `${(y - 10).toString()}px`;
        this.globe.theta = (Math.PI * (1-percent));
        this.controls['sphere-theta'].value = Math.round(this.globe.theta * 180 / Math.PI);
        this.DelayedRender();
      });
    });

    this.horizontal_knob = document.querySelector('.horizontal-slider .knob');
    this.horizontal_knob.parentElement.addEventListener('mousedown', (event) => {
      const rect = this.horizontal_knob.parentElement.getBoundingClientRect();
      this.MouseDown(event, (event) => {
        const x = Math.min(rect.width, Math.max(0, event.clientX - rect.left));
        const percent = x / rect.width;
        this.horizontal_knob.style.left = `${(x - 10).toString()}px`;
        this.globe.alpha = (Math.PI * 2 * percent) - Math.PI;
        this.controls['sphere-alpha'].value = Math.round(this.globe.alpha * 180 / Math.PI);
        this.DelayedRender();
      });
    });

    const rect = render.getBoundingClientRect();
    this.fizz = new Fizz({ width: rect.width, height: rect.height });
    this.globe = this.fizz.AddGlobe();

    // init random, but be sane

    this.globe.alpha = Math.PI * 2 * Math.random() - Math.PI;
    this.globe.theta = Math.PI / 2 + (Math.random() - 0.5) * Math.PI / 2;

    this.render_target = 'Canvas';

    const controls = document.querySelectorAll('.controls [id]');
    this.controls = {};
    Array.prototype.forEach.call(controls, (element) => {
      this.controls[element.id] = element;
    });
    
    this.spinning = false;

    const resolve = (target, parent = this) => {
      const list = target.split('.');
      return list.length === 1 ? parent[list[0]] : resolve(list.slice(1).join('.'), parent[list[0]]);
    }

    this.UpdateControls();
    document.querySelector('.controls').addEventListener('input', (event) => {
      if (!event.target || !event.target.id) { return; }

      event.stopPropagation();
      event.preventDefault();

      const target = event.target.getAttribute('data-target');
      const property = event.target.getAttribute('data-property');

      if (target && property) {
        if (event.target.getAttribute('data-transform') === 'radians') {
          resolve(target)[property] = event.target.value / 180 * Math.PI;
          this.UpdateKnobs();
        }
        else {
          resolve(target)[property] = event.target.value;
        }
      }
      else {
        switch(event.target.id) {
          case 'spin':
            this.spinning = event.target.checked;
            if (this.spinning) { this.Spin(); }
            return;

          case 'earth-options':
            this.globe.earth_fill = !!(event.target.value & 0x01);
            this.globe.earth_outline = !!(event.target.value & 0x02);
            break;

          case 'render-target':
            this.render_target = event.target.value;
            if (this.render_target === 'SVG') {
              svg.style.zIndex = 2;
              canvas.style.zIndex = 1;
            }
            else {
              svg.style.zIndex = 1;
              canvas.style.zIndex = 2;
            }
            break;

          default:
            console.info('unhandled', event.target.id);
            return;
        }
      }

      this.DelayedRender();

    });


    this.Render();

    // this.Spin();


  }

}

document.addEventListener('DOMContentLoaded', () => {
  new Example();
})
