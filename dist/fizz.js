!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return i})),n.d(e,"__assign",(function(){return o})),n.d(e,"__rest",(function(){return a})),n.d(e,"__decorate",(function(){return s})),n.d(e,"__param",(function(){return h})),n.d(e,"__metadata",(function(){return u})),n.d(e,"__awaiter",(function(){return c})),n.d(e,"__generator",(function(){return l})),n.d(e,"__createBinding",(function(){return p})),n.d(e,"__exportStar",(function(){return f})),n.d(e,"__values",(function(){return d})),n.d(e,"__read",(function(){return y})),n.d(e,"__spread",(function(){return v})),n.d(e,"__spreadArrays",(function(){return _})),n.d(e,"__await",(function(){return M})),n.d(e,"__asyncGenerator",(function(){return g})),n.d(e,"__asyncDelegator",(function(){return P})),n.d(e,"__asyncValues",(function(){return m})),n.d(e,"__makeTemplateObject",(function(){return x})),n.d(e,"__importStar",(function(){return b})),n.d(e,"__importDefault",(function(){return w})),n.d(e,"__classPrivateFieldGet",(function(){return I})),n.d(e,"__classPrivateFieldSet",(function(){return S}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function s(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a}function h(t,e){return function(n,r){e(n,r,t)}}function u(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function c(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{h(r.next(t))}catch(t){o(t)}}function s(t){try{h(r.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}h((r=r.apply(t,e||[])).next())}))}function l(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}function f(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function _(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function M(t){return this instanceof M?(this.v=t,this):new M(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=i[t](e)).value instanceof M?Promise.resolve(n.value.v).then(h,u):c(o[0][2],n)}catch(t){c(o[0][3],t)}var n}function h(t){s("next",t)}function u(t){s("throw",t)}function c(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function P(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:M(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,i,(e=t[n](e)).done,e.value)}))}}}function x(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function b(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function w(t){return t&&t.__esModule?t:{default:t}}function I(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function S(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PathBuilder=void 0;var r=function(){function t(){this.components=[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.components.length},enumerable:!1,configurable:!0}),t.prototype.Move=function(t){return this.components.push({type:"move",point:t}),this},t.prototype.Line=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0,r=t;n<r.length;n++){var i=r[n];this.components.push({type:"line",point:i})}return this},t.prototype.Arc=function(t){return this.Line(t)},t.prototype.Append=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(t=this.components).push.apply(t,e),this},t.prototype.Curve=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 4===t.length&&this.components.push({type:"move",point:t.shift()}),this.components.push({type:"bezier3",Q1:t[0],Q2:t[1],P2:t[2]}),this},t.prototype.ToGroup=function(t){return{type:"group",class_name:t,components:this.components}},t}();e.PathBuilder=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sphere=void 0;var r=n(0),i=n(8),o=n(3),a=n(1),s=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.threshold={line:.45,dash:.325},n.shading_step=4,n.center={x:0,y:0,z:0},n.r=50,e.center&&(n.center=e.center),e.threshold&&(n.threshold=e.threshold),e.r&&(n.r=e.r),e.shading_step&&(n.shading_step=e.shading_step),n}return r.__extends(e,t),e.prototype.HeightAtPoint=function(t){var e=t.x,n=t.y,r=Math.sqrt((this.center.x-e)*(this.center.x-e)+(this.center.y-n)*(this.center.y-n)),i=Math.acos(r/this.r);return this.r*Math.sin(i)+this.center.z},e.prototype.LightAtPoint=function(t,e){var n=this.HeightAtPoint(t),r=t.x,i=t.y,o=Math.sqrt((e.center.x-r)*(e.center.x-r)+(e.center.y-i)*(e.center.y-i)+(e.center.z-n)*(e.center.z-n)),a=e.intensity/(o*o);return e.shadow*Math.max(0,1-a)},e.prototype.ShadeArc=function(t,e){for(var n=[],i=e.rx,s=Math.ceil(2*i),h=2*Math.PI/s,u=[],c=0;c<=s;c++){if((M=e.λ1+h*c)>e.λ2)break;var l=o.Utils.PointOnArc(e,M),p=this.LightAtPoint(l,t);u.push({a:M,point:l,shade:p})}var f=function(t,e,n){n.reverse();var r=e[0];t.Curve.apply(t,r);for(var i=r[0],o=0,a=e.slice(1);o<a.length;o++)r=a[o],t.Curve.apply(t,r.slice(1));var s=r[3],h=(r=n[0])[0];Math.sqrt((h.x-s.x)*(h.x-s.x)+(h.y-s.y)*(h.y-s.y));t.Arc(r[0]),t.Curve.apply(t,r.slice(1));for(var u=0,c=n.slice(1);u<c.length;u++)r=c[u],t.Curve.apply(t,r.slice(1));s=r[3],Math.sqrt((i.x-s.x)*(i.x-s.x)+(i.y-s.y)*(i.y-s.y)),t.Arc(i)},d=new a.PathBuilder,y=new a.PathBuilder,v=[],_=[];for(c=1;c<u.length;c++){var M=u[c-1],g=u[c];if(M.shade>=this.threshold.line||g.shade>=this.threshold.line){var P=o.Utils.ConstructArcSegment(e.center,e.rx,e.ry,M.a,g.a,M.shade,g.shade);v.push.apply(v,P.forward),_.push.apply(_,P.back)}else if(v.length&&(f(y,v,_),v=[],_=[]),M.shade>=this.threshold.dash&&g.shade>=this.threshold.dash){var m=(M.shade+g.shade)/2*1;o.Utils.EllipticalArc(e.rx,e.ry,M.a,M.a+(g.a-M.a)*m).map((function(t){return d.Curve.apply(d,o.Utils.Offset.apply(o.Utils,r.__spreadArrays([e.center],t)))}))}}return v.length&&f(y,v,_),y.length&&n.push(y.ToGroup("shading-fill")),d.length&&n.push(d.ToGroup("shading-stroke")),n},e.prototype.Render=function(t){for(var e=new a.PathBuilder,n=new a.PathBuilder,i=this.r-this.shading_step;i>=this.shading_step;i-=this.shading_step)n.Append.apply(n,this.ShadeArc(t,{center:this.center,rx:i,ry:i,"λ1":0,"λ2":2*Math.PI}));return n.length&&e.Append(n.ToGroup("shading")),e.Append({type:"circle",class_name:"outline",center:r.__assign({},this.center),r:this.r}),e.ToGroup("shape sphere")},e}(i.Shape);e.Sphere=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Utils=void 0;var r=n(0),i=function(){function t(){}return t.EllipticalArc=function(t,e,n,r){var i=[];if(n=this.EllipseAngleToT(n,t,e),(r=this.EllipseAngleToT(r,t,e))-n<Math.PI/4)return[this.EllipticalArcSegment(t,e,n,r)];for(var o=Math.ceil((r-n)/(Math.PI/4)),a=(r-n)/o,s=n,h=1;h<=o;h++){var u=n+h*a;i.push(this.EllipticalArcSegment(t,e,s,u)),s=u}return i},t.PointOnArc=function(t,e){return{x:t.rx*Math.cos(e)+t.center.x,y:t.ry*Math.sin(e)+t.center.y}},t.PointOnArc2=function(t,e){var n=Math.atan2(Math.sin(e)/t.ry,Math.cos(e)/t.rx);return{x:t.rx*Math.cos(n)+t.center.x,y:t.ry*Math.sin(n)+t.center.y}},t.EllipseAngleToT=function(t,e,n){return Math.atan2(Math.sin(t)*n,Math.cos(t)*e)},t.EllipticalArcSegment=function(t,e,n,r){var i=Math.atan2(Math.sin(n)/e,Math.cos(n)/t),o=Math.atan2(Math.sin(r)/e,Math.cos(r)/t),a={x:t*Math.cos(i),y:e*Math.sin(i)},s={x:t*Math.cos(o),y:e*Math.sin(o)},h=Math.sin(o-i)*(Math.sqrt(4+3*Math.pow(Math.tan((o-i)/2),2))-1)/3,u=-t*Math.sin(i),c=e*Math.cos(i),l=-t*Math.sin(o),p=e*Math.cos(o);return[a,{x:a.x+h*u,y:a.y+h*c},{x:s.x-h*l,y:s.y-h*p},s]},t.Radians=function(t){return Math.PI*t/180},t.Degrees=function(t){return Math.round(180*t/Math.PI)},t.LineIntersection=function(t,e,n,r){var i=((t.x-n.x)*(n.y-r.y)-(t.y-n.y)*(n.x-r.x))/((t.x-e.x)*(n.y-r.y)-(t.y-e.y)*(n.x-r.x));return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}},t.OffsetBezier2=function(t,e,n,r){void 0===r&&(r=!1);for(var i=[],o=[],a=0,s=n-e,h=[e],u=0,c=0,l=t.slice(1).map((function(e,n){var r=t[n],i=Math.sqrt((e.x-r.x)*(e.x-r.x)+(e.y-r.y)*(e.y-r.y));return a+=i,i}));c<l.length;c++){u+=l[c],h.push(e+u/a*s)}for(var p=0;p<t.length-1;p++){var f=Math.atan2(t[p+1].x-t[p].x,t[p+1].y-t[p].y);i.push({x:t[p].x+Math.cos(f)*h[p],y:t[p].y-Math.sin(f)*h[p]},{x:t[p+1].x+Math.cos(f)*h[p+1],y:t[p+1].y-Math.sin(f)*h[p+1]})}return o.push(i[0]),o.push(this.LineIntersection(i[0],i[1],i[2],i[3])),o.push(this.LineIntersection(i[2],i[3],i[4],i[5])),o.push(i[5]),r&&o.reverse(),o},t.OffsetBezier=function(t,e,n){void 0===n&&(n=!1);for(var r=[],i=[],o=0;o<t.length-1;o++){var a=Math.atan2(t[o+1].x-t[o].x,t[o+1].y-t[o].y);r.push({x:t[o].x+Math.cos(a)*e,y:t[o].y-Math.sin(a)*e},{x:t[o+1].x+Math.cos(a)*e,y:t[o+1].y-Math.sin(a)*e})}return i.push(r[0]),i.push(this.LineIntersection(r[0],r[1],r[2],r[3])),i.push(this.LineIntersection(r[2],r[3],r[4],r[5])),i.push(r[5]),n&&i.reverse(),i},t.RenderPoints=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.map((function(t){return t.x+","+t.y})).join(" ")},t.ConstructArcSegment=function(t,e,n,i,o,a,s){for(var h=[],u=[],c=this.EllipticalArc(e,n,i,o),l=(s-a)/c.length,p=0;p<c.length;p++){var f=c[p],d=(a+p*l)/2,y=(a+(p+1)*l)/2;f=this.Offset.apply(this,r.__spreadArrays([t],f)),h.push(this.OffsetBezier2(f,d,y,!1)),u.push(this.OffsetBezier2(f,-d,-y,!0))}return{forward:h,back:u}},t.ScaleOffset=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return n.map((function(n){return{x:n.x*t+e.x,y:n.y*t+e.y}}))},t.Offset=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.map((function(e){return{x:e.x+t.x,y:e.y+t.y}}))},t}();e.Utils=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Renderer=e.default_render_options=void 0;var r=n(1);e.default_render_options={clear:!0};var i=function(){function t(){}return t.prototype.RenderLightSource=function(t){var e=new r.PathBuilder,n=Math.sqrt(200)/2;return e.Move({x:t.center.x-n,y:t.center.y-n}).Line({x:t.center.x+n,y:t.center.y+n}).Move({x:t.center.x-n,y:t.center.y+n}).Line({x:t.center.x+n,y:t.center.y-n}),e.Append({type:"circle",class_name:"light-source",center:t.center,r:10}),e.ToGroup("light-source")},t}();e.Renderer=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);self.Fizz=r.Fizz},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Fizz=void 0;var r=n(0),i=n(7),o=n(2),a=n(11),s=n(12),h=function(){function t(t){void 0===t&&(t={width:100,height:100}),this.size=t,this.svg_renderer=new a.SVGRenderer,this.canvas_renderer=new s.CanvasRenderer,this.light={center:{x:0,y:0,z:400},intensity:75e3,shadow:3},this.shapes=[],this.light.center={x:this.size.width/4*.5,y:this.size.height/4*.5,z:(this.size.width+this.size.height)/2}}return t.prototype.RenderSVG=function(t){this.svg_renderer.Render(this.size,this.shapes,this.light,t)},t.prototype.RenderCanvas=function(t){this.canvas_renderer.Render(this.size,this.shapes,this.light,t)},t.prototype.AddGlobe=function(t){void 0===t&&(t={});var e=new i.Globe(r.__assign({center:{x:200,y:200,z:0},r:100},t));return this.shapes.push(e),e},t.prototype.AddSphere=function(t){void 0===t&&(t={});var e=new o.Sphere(r.__assign({center:{x:200,y:200,z:0},r:100},t));return this.shapes.push(e),e},t}();e.Fizz=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Globe=void 0;var r=n(0),i=n(2),o=n(3),a=n(9),s=n(1),h=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this;return n.theta=o.Utils.Radians(130),n.alpha=o.Utils.Radians(-14),n.longitudinal_steps=64,n.earth_outline=!0,n.earth_fill=!0,"number"==typeof e.theta&&(n.theta=e.theta),"number"==typeof e.alpha&&(n.alpha=e.alpha),e.longitudinal_steps&&(n.longitudinal_steps=e.longitudinal_steps),"boolean"==typeof e.earth_outline&&(n.earth_outline=e.earth_outline),"boolean"==typeof e.earth_fill&&(n.earth_fill=e.earth_fill),n}return r.__extends(e,t),e.prototype.PointToSphere=function(t,e){t-=180;var n=e/180*Math.PI,r=0,i=0,o=0,a=this.theta;if(a>Math.PI/2){if(a-n>Math.PI/2)return;r=0-(o=Math.PI-n<a-Math.PI/2?1:Math.cos(n)*Math.cos(a))*Math.PI/2,i=Math.PI+o*Math.PI/2}else if(a>=0){if(n>Math.PI/2+a)return;r=0-(o=n<Math.PI/2-a?1:Math.cos(n)*Math.cos(a))*Math.PI/2,i=Math.PI+o*Math.PI/2}var s=2*Math.PI-(this.alpha+t/180*Math.PI);if(1===o||function(t,e,n){return t>=e&&t<=n||t+2*Math.PI>=e&&t+2*Math.PI<=n||t-2*Math.PI>=e&&t-2*Math.PI<=n}(s,r,i)){var h=this.center.y-Math.cos(n)*this.r*Math.sin(a),u=this.center.x,c=this.r*Math.sin(n),l=Math.cos(a)*c;return{x:c*Math.cos(s)+u,y:l*Math.sin(s)+h}}},e.prototype.RenderEarthOutlines=function(){for(var t=new s.PathBuilder,e=0,n=a.landmass;e<n.length;e++)for(var r=!1,i=0,o=n[e];i<o.length;i++){var h=o[i],u=this.PointToSphere.apply(this,h);u?r?t.Line(u):(t.Move(u),r=!0):r=!1}return t.ToGroup("landmass-outline")},e.prototype.Render=function(t){var e=new s.PathBuilder;if(this.earth_outline){var n=this.RenderEarthOutlines();e.Append(n)}this.theta=Math.max(0,Math.min(Math.PI,this.theta));var i=this.theta;i===Math.PI/2&&(i*=.999),i===Math.PI&&(i*=.999),0===i&&(i=.001*Math.PI);var h=this.alpha,u=new s.PathBuilder,c=new s.PathBuilder,l=Math.PI/this.longitudinal_steps;if(i>Math.PI/2)for(var p=function(e){var n=e*l,s={y:f.center.y-Math.cos(n)*f.r*Math.sin(i),x:f.center.x},p=f.r*Math.sin(n),d=Math.cos(i)*p;if(i-n>Math.PI/2)return"continue";var y=Math.PI-n<i-Math.PI/2?1:Math.cos(n)*Math.cos(i),v=0-y*Math.PI/2,_=Math.PI+y*Math.PI/2;if(c.Append.apply(c,f.ShadeArc(t,{rx:p,ry:-d,"λ1":v+Math.PI,"λ2":_+Math.PI,center:s})),f.earth_fill)for(var M=0,g=a.GetLandmassShading(n/Math.PI*180);M<g.length;M++){var P=g[M],m=[P[0]+h,P[1]+h,P[0]+h-2*Math.PI,P[1]+h-2*Math.PI],x=[];1===y||m[0]>=v&&m[1]<=_||m[2]>=v&&m[3]<=_?x=o.Utils.EllipticalArc(p,-d,Math.PI+m[0],Math.PI+m[1]):m[0]>=v&&m[0]<=_||m[2]>=v&&m[2]<=_?x=o.Utils.EllipticalArc(p,-d,Math.PI+m[0],Math.PI+_):(m[1]>=v&&m[1]<=_||m[3]>=v&&m[3]<=_)&&(x=o.Utils.EllipticalArc(p,-d,Math.PI+v,Math.PI+m[1])),x.map((function(t){return o.Utils.Offset.apply(o.Utils,r.__spreadArrays([s],t))})).map((function(t){return u.Curve.apply(u,t)}))}},f=this,d=0;d<this.longitudinal_steps;d++)p(d);else if(i>=0){var y=function(e){var n=e*l,s={y:v.center.y-Math.cos(n)*v.r*Math.sin(i),x:v.center.x},p=v.r*Math.sin(n),f=Math.cos(i)*p;if(n>Math.PI/2+i)return"continue";var d=n<Math.PI/2-i?1:Math.cos(n)*Math.cos(i),y=0-d*Math.PI/2,_=Math.PI+d*Math.PI/2;if(c.Append.apply(c,v.ShadeArc(t,{rx:p,ry:f,"λ1":y,"λ2":_,center:s})),v.earth_fill)for(var M=0,g=a.GetLandmassShading(n/Math.PI*180);M<g.length;M++){var P=g[M],m=[P[0]+h,P[1]+h,P[0]+h-2*Math.PI,P[1]+h-2*Math.PI],x=[];1===d||m[0]>=y&&m[1]<=_||m[2]>=y&&m[3]<=_?x=o.Utils.EllipticalArc(p,f,Math.PI-m[1],Math.PI-m[0]):m[0]>=y&&m[0]<=_||m[2]>=y&&m[2]<=_?x=o.Utils.EllipticalArc(p,f,Math.PI-_,Math.PI-m[0]):(m[1]>=y&&m[1]<=_||m[3]>=y&&m[3]<=_)&&(x=o.Utils.EllipticalArc(p,f,Math.PI-m[1],Math.PI-y)),x.map((function(t){return o.Utils.Offset.apply(o.Utils,r.__spreadArrays([s],t))})).map((function(t){return u.Curve.apply(u,t)}))}},v=this;for(d=0;d<this.longitudinal_steps;d++)y(d)}return u.length&&e.Append(u.ToGroup("landmass-shading")),c.length&&e.Append(c.ToGroup("shading")),e.Append({type:"circle",class_name:"outline",r:this.r,center:this.center}),e.ToGroup("shape sphere globe")},e}(i.Sphere);e.Globe=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Shape=void 0;var r=function(){};e.Shape=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GetLandmassShading=e.landmass=void 0;var r=n(10),i=[],o=[];e.landmass=[[[206,122.33],[211.07,116],[213.3,109.94],[218.57,106.03],[218.38,97.36],[220.28,91.28],[229.75,78.07],[221.41,78.29],[220.78,76.52],[218.07,74.48],[213.8,66.08],[213.38,62.04],[222.31,77.1],[233.88,72.27],[237.79,68.59],[234.88,64.69],[229.83,65.57],[228.98,64.73],[227.37,59.82],[250.57,68.12],[254.63,80.83],[257.07,80.93],[257.38,80.52],[258.64,75.5],[266.4,68.48],[269.56,67.49],[271.88,70.43],[272.67,74.49],[275.36,72.94],[276.87,78.6],[276.68,79.04],[276.11,79.28],[276.3,80.22],[276.75,79.96],[276.56,82.38],[277.05,82.04],[280.5,86.44],[277.25,85.56],[276.55,88.03],[279.47,92.77],[283.29,92.25],[282.68,90.91],[283.74,90.4],[282.53,89.58],[283.03,88.6],[278.44,80.08],[279.15,76.64],[281.08,78.25],[282.29,80.21],[285.35,79.72],[288,77.83],[284.21,71.22],[287.94,68.57],[288,68.6],[288.74,69.82],[300.09,61.89],[300.86,59.94],[299.36,59.63],[297.64,55.13],[301.24,52.55],[296.1,51.5],[300.45,49.51],[299.83,50.75],[299.84,50.82],[299.44,51.42],[303.59,50.57],[302.72,51.9],[302.96,52.12],[304.97,52.87],[304.12,55.13],[307.89,53.38],[306.37,50.11],[308.65,47.92],[315.01,45.12],[319.69,40.31],[320.43,44.25],[321.66,44.31],[323.19,41.66],[320.37,35.59],[318.47,37.21],[315.99,36.32],[313.68,35.16],[320.43,31.11],[332.73,30.38],[338.5,28.24],[340.91,28.61],[334.92,32.27],[335,39.2],[340.58,35.32],[341.69,32.15],[340.43,31.93],[344.49,29.68],[352.49,28.33],[355.9,25.35],[358.67,24.01],[366.1,25.61],[368.78,23.99],[319.11,17.34],[309.82,19],[308.23,18.4],[307.69,16.74],[297.49,16.63],[290.61,13.26],[285.38,13.37],[284.06,12.79],[258.59,16.61],[260.79,18.13],[254.13,18.01],[253.53,17.04],[252.25,17.02],[252.44,18.56],[253.69,19.64],[251.71,20.89],[249.66,16.97],[245.54,19.39],[236.64,19.73],[239.08,21],[237.57,21.46],[232.4,21.62],[232.29,21.34],[225.16,22.27],[221.46,21.23],[218.52,25.09],[216.81,24.69],[214.76,24.93],[214.95,25.52],[213.66,25.25],[211.67,23.33],[215.44,23.49],[217.75,21.65],[200.52,19.57],[194.37,21.1],[186.19,26.3],[183.33,30.4],[187.61,31.42],[191.44,33.88],[194.61,33.54],[197.17,30.74],[196.08,28.46],[196.04,27.66],[203.54,24.58],[203.45,24.88],[200.38,27.18],[200.91,27.54],[200.05,29.69],[199.62,29.91],[201.03,30.25],[207.36,29.93],[205.2,31.05],[199.88,30.97],[199.94,31.44],[200.26,32.2],[202.19,31.76],[202.85,32.2],[199.62,32.83],[199.15,34.61],[189.46,35.87],[189.93,35.46],[191.12,35.08],[190.83,34.56],[188.1,33.45],[186.87,34.75],[187.11,36.02],[176.39,40.19],[176.65,41.24],[173.41,42.02],[176.82,43.77],[169.68,46.56],[169.15,53.05],[171.1,53.62],[173.12,53.39],[178.7,51.26],[183.17,46.73],[186.38,46.75],[192.72,49.52],[191.46,52.64],[193.74,52.83],[196.74,50.32],[190.71,44.65],[191.74,44.4],[198.11,50.06],[198.89,52.03],[200.95,53.75],[202.49,51.99],[201.15,49.3],[204.15,49.28],[206.54,53.44],[214.39,53.25],[211.18,58.75],[198.36,57.7],[197.88,59.47],[188.5,55.87],[189.63,53.18],[189.49,52.79],[173.31,54.75],[168.56,58.21],[161.34,69.75],[160.58,75.18],[161.25,77.58],[162.08,79.09],[163.71,80.23],[165.04,82.46],[168.88,84.86],[182.72,83.77],[184.88,85.79],[187.22,85.99],[186.79,90.34],[190.56,95.97],[190.23,105.47],[193.05,115.74],[196.18,121.46],[196.92,124.65],[206,122.33],[206,122.33]],[[111.44,45.06],[113.41,44.75],[111.77,46],[111.77,46.07],[118.69,43.98],[118.13,42.88],[116.49,43.6],[114.48,42.7],[114.1,43.65],[114.04,41.9],[113.28,42.04],[108.57,42.18],[114.57,39.81],[120.91,38.84],[119.04,41.38],[119.53,41.59],[122.9,42.64],[121.94,42.77],[121.82,43.31],[124.3,42.48],[125.29,42.37],[125.59,41.84],[125.41,41.3],[124.75,41.38],[122.58,40.38],[122.97,39.95],[121.71,40.06],[123.02,38.38],[121.65,38.53],[120.78,35.69],[116.8,33.48],[114.09,29.59],[110.59,31.42],[108.79,28.81],[104.18,27.54],[99.54,29.42],[100.85,30.15],[100.61,31.83],[100.51,34.6],[98.7,35.56],[99.11,36.37],[99.33,38.41],[96.3,36.78],[85.98,32.83],[83.79,29.73],[86.02,28],[87.63,26.53],[92.02,23.6],[94.53,23.9],[94.57,23.59],[95.6,23.75],[96.08,21.63],[96.05,20.47],[99.61,19.73],[103.5,21.33],[105.9,22.76],[103.75,23.87],[104.54,24.37],[101.78,25.83],[112.52,27.74],[113.4,27.33],[113.39,27.23],[110.6,24.25],[110.62,24.18],[111.27,23.6],[116.34,23.81],[117.17,23.3],[110.5,21.34],[111.78,20.87],[110.82,20.4],[111.3,20.21],[109.74,19.84],[110.11,19.43],[102.09,17.29],[97.38,16.64],[92.88,17.67],[92.21,18.01],[91.83,17.28],[89.16,18.82],[92.76,20.05],[93.22,20.96],[92.06,21.98],[91.69,22.39],[88.11,21.59],[87.79,20.91],[86.11,20.22],[86.94,19.77],[84.28,18.1],[84.81,17.32],[85.92,16.37],[82.62,16.82],[82.26,18.46],[82.22,20.63],[80.29,21.42],[73.81,21.72],[73.19,21.56],[73.02,21.15],[75.97,21.21],[75.92,20.34],[77.6,20.64],[73.05,17.2],[70.79,18.11],[67.81,17.27],[64.31,17.23],[54.27,15.93],[52.31,18.03],[60.06,17.29],[60.43,18.73],[59.79,19.06],[65.44,20.05],[71.86,20.7],[72.16,20.95],[69.43,21.73],[70.4,21.96],[70.06,22.49],[69.48,22.4],[63.3,21.97],[48.4,19.77],[41.64,20.99],[22.72,18.59],[11.06,21.67],[16.58,23.75],[14.57,23.75],[10.29,24.54],[17.36,25.3],[17.42,26.18],[12.61,29.54],[15.96,29.89],[15.52,31.43],[20.94,31.31],[13.31,35.43],[16.05,35.66],[19.1,35.11],[18.12,34.75],[27.83,28.87],[28.89,30.18],[33.87,29.92],[33.36,30.35],[38.31,30.44],[42.27,33.16],[42.87,32.94],[47.84,35.37],[50.85,39.13],[53.79,42.3],[54.39,50.26],[64.16,61.59],[63.13,61.47],[62.78,61.95],[64.93,63.33],[66.24,65.62],[67.78,65.49],[65.67,61.75],[65.09,58.99],[66.42,61.44],[68.81,63.42],[72.94,69.36],[81.5,74.4],[83.61,73.92],[85.99,75.53],[90.7,76.75],[93.55,80.26],[95.61,82.43],[96.7,82.3],[98.47,82.54],[101.05,86.23],[98.22,93.14],[100.55,101.04],[102.97,105.27],[107.45,108.16],[104.04,132.27],[104.08,133.7],[103.49,134.62],[102.5,136.82],[104.04,136.98],[103.44,141.15],[104.17,143.63],[108.08,144.9],[110.27,145.35],[111.35,145.04],[113.34,144.63],[109.31,140.79],[112.69,137.21],[111.47,135.36],[113.17,133.67],[113.34,130.92],[116.56,129.1],[119.97,124.37],[128.41,119.87],[133.19,114.17],[136.37,113.08],[138.56,109.76],[141.63,100.78],[139.94,93.61],[133.56,91.17],[129.89,90.92],[128.12,89.29],[123.75,83.93],[119.97,83.01],[117.24,81.38],[117.85,80.79],[116.9,80.06],[117.65,79.02],[114.24,79.23],[110.12,78.93],[108.35,77.69],[102.27,80.15],[102.6,80.45],[101.42,81.66],[96.3,80.94],[95.6,75.16],[91.88,73.8],[89.69,73.89],[91.19,69.61],[91.08,68.3],[87.73,69.96],[81.32,69.32],[81.63,61.96],[88.41,60.66],[88.78,61.23],[92.41,60.31],[95.93,65.23],[96.7,65.47],[97.12,65.14],[97.12,59.81],[100.34,56.62],[103.22,54.85],[104.21,50.99],[106.28,48.84],[108.51,48.83],[108.23,48.05],[111.68,45.41]],[[309.58,101.89],[307.85,104.82],[304.23,104.36],[301.98,106.89],[301.81,107.2],[301.39,106.32],[297.9,109.91],[292.61,112.27],[292.42,116.24],[291.76,116.34],[293.22,123.3],[295.54,125.57],[300.79,123.84],[313.31,124.74],[314.35,125.13],[314.72,125.92],[316.53,125.74],[318.45,127.71],[324.06,128.78],[326.88,127.94],[328.82,125.64],[331.64,120.19],[331.26,115.24],[328.34,111.83],[327.46,109.78],[327.32,109.75],[323.91,106.24],[320.57,100.41],[318.09,106.52],[315.29,105.19],[314.65,104.27],[314.4,103.64],[314.38,101.88],[314.02,100.8],[310.93,100.72],[310,101.21],[309.58,101.89]],[[360,173.94],[347.31,173.02],[337.83,170.31],[340.03,168.66],[345.63,168.61],[346.01,167.92],[341.09,166.89],[341.61,165.5],[343.88,164.64],[343.24,163.51],[349.37,161.91],[322.58,157.73],[323.11,157.14],[263.4,156.39],[263.26,156.59],[263.82,157.03],[245.18,163.09],[245.85,157.68],[234.93,156.8],[226.52,156.65],[194.69,160.02],[194.23,160.12],[182.27,160.22],[175.88,161.21],[175.09,160.92],[174.87,161.24],[171.99,160.65],[165.8,161.33],[163.91,162.6],[161.68,163.73],[141.54,169.39],[118.58,172.13],[116.78,171.69],[102.46,169.67],[94.78,168.49],[97.74,167.88],[101.28,166.75],[117.86,164.33],[118.52,163.02],[117.24,161.46],[117.41,160.81],[114.93,158.64],[113.38,158.53],[113.67,158.17],[112.94,157.45],[115.93,156.83],[115.81,156.34],[116.18,155.88],[116.84,155.67],[119.7,154.63],[119.77,154.11],[121.16,153.99],[121.76,153.53],[116.74,154],[113.84,154.79],[110.65,157.28],[111.18,157.79],[111.19,159.12],[104.73,163.13],[104.3,163],[90.27,162.69],[86.46,162.59],[74.77,162.74],[78.14,164.63],[64.48,164.84],[65.31,164.46],[50.04,164.22],[50.29,164.61],[32.44,165.76],[29.52,166.6],[27.21,166.74],[27.17,166.97],[22.41,166.97],[23.06,168.33],[21.43,168.63],[29.78,169.97],[27.58,170.36],[29.1,170.81],[23.15,171.94],[24.93,172.46],[17.69,173.06],[13.37,172.69],[3.71,172.63],[13.68,173.98],[0,174.21]],[[124.62,19.08],[123.98,19.56],[126.36,20.09],[127.24,20.59],[124.98,23.19],[130.77,29.28],[135.8,28.99],[137.84,25.04],[141.86,24.34],[146.13,22.18],[157,19.51],[155.91,17.98],[155.55,16.8],[159.25,15.48],[158.44,14.93],[159.9,14.05],[157.97,12.46],[159.52,10.77],[159.19,10.3],[167.06,8.42],[159.95,8.2],[156.76,8.73],[153.02,7.87],[131.44,7.07],[130.82,7.37],[127.12,7.44],[116.94,8.32],[111.03,9.65],[105.32,11.75],[107.03,12.86],[108.98,13.43],[112.23,14.12],[119.83,14.46],[121.54,15.67],[120.54,15.91],[122.91,16.69],[121.82,17.23],[124.62,19.08]],[[307.49,56.47],[307.06,57.11],[308.22,57.5],[310.39,56.79],[310.75,57.43],[312.59,56.96],[313.38,56.17],[316.84,55.24],[317.14,55.51],[319.46,54.34],[320.21,51.88],[320.32,48.77],[319.72,48.29],[319.35,47.51],[322.01,46.93],[323.56,45.58],[319.79,44.82],[319.05,44.6],[318.2,46.06],[317.67,48.01],[318.7,48.63],[315.73,52.34],[311.83,54.71],[307.49,56.47]],[[172.44,33.8],[171.76,34.44],[174.73,35.22],[173.52,37.33],[172.83,38.17],[172.56,39.98],[179.32,38.52],[178.63,37.06],[175.74,33.85],[176.19,30.59],[172.04,32.2],[171.52,33.36],[172.44,33.8]],[[222.04,111.1],[224.53,115.35],[228.6,106.45],[226.81,103.35],[222.04,111.1]]];var a=function(t){t=Math.round(t),i.length||(i=e.landmass.map((function(t){for(var e={x:{max:t[0][0],min:t[0][0]},y:{max:t[1][0],min:t[1][0]}},n=0,r=t;n<r.length;n++){var i=r[n];e.x.max=Math.max(e.x.max,i[0]),e.x.min=Math.min(e.x.min,i[0]),e.y.max=Math.max(e.y.max,i[1]),e.y.min=Math.min(e.y.min,i[1])}return e.x.min=Math.round(e.x.min),e.x.max=Math.round(e.x.max),e.y.min=Math.round(e.y.min),e.y.max=Math.round(e.y.max),e})));for(var n=[],o=!1,a=-1,s=0,h=0;h<365;h++)if(o){if(i[s].x.max>=h&&r.Polygon.PointInsidePolygon(e.landmass[s],[h,t]))continue;o=!1,n.push([a*Math.PI/180,(h-1)*Math.PI/180])}else for(var u=0;u<e.landmass.length;u++)if(i[u].x.max>=h&&i[u].x.min<=h&&i[u].y.min<=t&&i[u].y.max>=t&&r.Polygon.PointInsidePolygon(e.landmass[u],[h,t])){o=!0,a=h,s=u;break}return n};e.GetLandmassShading=function(t){var e=o[t];return e||(e=a(t),o[t]=e,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Polygon=void 0;var r=function(){function t(){}return t.PointOnSegment=function(t,e,n){return e[0]<=Math.max(t[0],n[0])&&e[0]>=Math.min(t[0],n[0])&&e[1]<=Math.max(t[1],n[1])&&e[1]>=Math.min(t[1],n[1])},t.GetOrientation=function(t,e,n){var r=(e[1]-t[1])*(n[0]-e[0])-(e[0]-t[0])*(n[1]-e[1]);return 0===r?0:r>0?1:2},t.Intersection=function(t,e,n,r){var i=this.GetOrientation(t,e,n),o=this.GetOrientation(t,e,r),a=this.GetOrientation(n,r,t),s=this.GetOrientation(n,r,e);return i!==o&&a!==s||0===i&&this.PointOnSegment(t,n,e)||0===o&&this.PointOnSegment(t,r,e)||0===a&&this.PointOnSegment(n,t,r)||0===s&&this.PointOnSegment(n,e,r)},t.PointInsidePolygon=function(t,e){if(t.length<3)return!1;var n=[Number.MAX_SAFE_INTEGER,e[1]],r=0,i=0;do{var o=(i+1)%t.length;if(this.Intersection(t[i],t[o],e,n)){if(0===this.GetOrientation(t[i],e,t[o]))return this.PointOnSegment(t[i],e,t[o]);r++}i=o}while(0!==i);return!!(1&r)},t}();e.Polygon=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SVGRenderer=void 0;var r=n(0),i=n(4),o=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);return e&&("string"==typeof e&&(e=[e]),n.setAttribute("class",e.join(" ").trim())),n},a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.RenderGroup=function(t,e){for(var n=o("g",e.class_name),r=[],i=0,a=e.components;i<a.length;i++){var s=a[i];switch(s.type){case"move":r.push("M"+s.point.x+","+s.point.y);break;case"line":r.push("L"+s.point.x+","+s.point.y);break;case"bezier3":r.push("C"+s.Q1.x+","+s.Q1.y+" "+s.Q2.x+","+s.Q2.y+" "+s.P2.x+","+s.P2.y);break;case"group":this.RenderGroup(n,s);break;case"circle":var h=o("circle",s.class_name);h.setAttribute("cx",s.center.x.toString()),h.setAttribute("cy",s.center.y.toString()),h.setAttribute("r",s.r.toString()),n.appendChild(h);break;default:throw new Error("unhandled path component")}}if(r.length){var u=o("path");u.setAttribute("d",r.join(" ")),n.appendChild(u)}t.appendChild(n)},e.prototype.Render=function(t,e,n,o){if(void 0===o&&(o={}),!(o=r.__assign(r.__assign({},i.default_render_options),o)).node)throw new Error("missing svg node");var a=o.node;o.clear&&(o.node.textContent=""),o.render_light_source&&this.RenderGroup(a,this.RenderLightSource(n));for(var s=0,h=e;s<h.length;s++){var u=h[s];this.RenderGroup(a,u.Render(n))}},e}(i.Renderer);e.SVGRenderer=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasRenderer=void 0;var r=n(0),i=n(4),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.composite={},e.style_stack=[],e.styles={},e.PopStyle=function(){e.style_stack.pop(),e.ApplyStyle()},e}return r.__extends(e,t),e.prototype.PushStyle=function(t){var e={};if(t)for(var n=0,i=t.split(/\s+/);n<i.length;n++){var o=i[n];this.styles[o]&&(e=r.__assign(r.__assign({},e),this.styles[o]))}this.style_stack.push(e),this.ApplyStyle()},e.prototype.ApplyStyle=function(){this.composite={};for(var t=0,e=this.style_stack;t<e.length;t++){var n=e[t];n.stroke&&(this.composite.stroke=n.stroke),n.stroke_width&&(this.composite.stroke_width=n.stroke_width),n.fill&&(this.composite.fill=n.fill)}},e.prototype.RenderPath=function(t){this.composite.fill&&"none"!==this.composite.fill&&(t.fillStyle=this.composite.fill,t.fill()),this.composite.stroke&&"none"!==this.composite.stroke&&this.composite.stroke_width&&(t.strokeStyle=this.composite.stroke,t.lineWidth=this.composite.stroke_width,t.stroke())},e.prototype.RenderGroup=function(t,e){this.PushStyle(e.class_name);for(var n=!1,r=0,i=e.components;r<i.length;r++){var o=i[r];switch(o.type){case"move":n||(n=!0,t.beginPath()),t.moveTo(o.point.x,o.point.y);break;case"line":n||(n=!0,t.beginPath()),t.lineTo(o.point.x,o.point.y);break;case"bezier3":n||(n=!0,t.beginPath()),t.bezierCurveTo(o.Q1.x,o.Q1.y,o.Q2.x,o.Q2.y,o.P2.x,o.P2.y);break;case"group":n&&(n=!1,this.RenderPath(t)),this.RenderGroup(t,o);break;case"circle":n&&(n=!1,this.RenderPath(t)),this.PushStyle(o.class_name),t.beginPath(),t.ellipse(o.center.x,o.center.y,o.r,o.r,0,0,2*Math.PI),this.RenderPath(t),this.PopStyle();break;default:throw new Error("unhandled path component")}}n&&this.RenderPath(t),this.PopStyle()},e.prototype.Render=function(t,e,n,o){if(void 0===o&&(o={}),!(o=r.__assign(r.__assign({},i.default_render_options),o)).node)throw new Error("missing canvas node");var a=o.node.getContext("2d");if(!a)throw new Error("context failed");this.style_stack=[{stroke:"#000",fill:"none",stroke_width:1}],this.styles=o.style||{},this.styles.base&&this.style_stack.push(this.styles.base),o.clear&&(a.clearRect(0,0,t.width,t.height),this.styles.background&&(a.fillStyle=this.styles.background.fill||"",a.fillRect(0,0,t.width,t.height))),o.render_light_source&&this.RenderGroup(a,this.RenderLightSource(n));for(var s=0,h=e;s<h.length;s++){var u=h[s];this.RenderGroup(a,u.Render(n))}},e}(i.Renderer);e.CanvasRenderer=o}]);