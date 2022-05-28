// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__read = __read;
exports.__rest = __rest;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;

/******************************************************************************
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

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
},{}],"node_modules/hey-listen/dist/hey-listen.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.invariant = void 0;

var warning = function () {};

exports.warning = warning;

var invariant = function () {};

exports.invariant = invariant;

if ("development" !== 'production') {
  exports.warning = warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };

  exports.invariant = invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}
},{}],"node_modules/popmotion/dist/es/utils/clamp.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = void 0;

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

exports.clamp = clamp;
},{}],"node_modules/popmotion/dist/es/animations/utils/find-spring.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcAngularFreq = calcAngularFreq;
exports.findSpring = findSpring;
exports.minDuration = exports.minDamping = exports.maxDuration = exports.maxDamping = void 0;

var _heyListen = require("hey-listen");

var _clamp = require("../../utils/clamp.mjs");

const safeMin = 0.001;
const minDuration = 0.01;
exports.minDuration = minDuration;
const maxDuration = 10.0;
exports.maxDuration = maxDuration;
const minDamping = 0.05;
exports.minDamping = minDamping;
const maxDamping = 1;
exports.maxDamping = maxDamping;

function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  (0, _heyListen.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = (0, _clamp.clamp)(minDamping, maxDamping, dampingRatio);
  duration = (0, _clamp.clamp)(minDuration, maxDuration, duration / 1000);

  if (dampingRatio < 1) {
    envelope = undampedFreq => {
      const exponentialDecay = undampedFreq * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };

    derivative = undampedFreq => {
      const exponentialDecay = undampedFreq * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
      const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq => {
      const a = Math.exp(-undampedFreq * duration);
      const b = (undampedFreq - velocity) * duration + 1;
      return -safeMin + a * b;
    };

    derivative = undampedFreq => {
      const a = Math.exp(-undampedFreq * duration);
      const b = (velocity - undampedFreq) * (duration * duration);
      return a * b;
    };
  }

  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1000;

  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}

const rootIterations = 12;

function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;

  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }

  return result;
}

function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
},{"hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","../../utils/clamp.mjs":"node_modules/popmotion/dist/es/utils/clamp.mjs"}],"node_modules/popmotion/dist/es/animations/generators/spring.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spring = spring;

var _tslib = require("tslib");

var _findSpring = require("../utils/find-spring.mjs");

const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];

function isSpringType(options, keys) {
  return keys.some(key => options[key] !== undefined);
}

function getSpringOptions(options) {
  let springOptions = Object.assign({
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false
  }, options);

  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = (0, _findSpring.findSpring)(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), {
      velocity: 0.0,
      mass: 1.0
    });
    springOptions.isResolvedFromDuration = true;
  }

  return springOptions;
}

function spring(_a) {
  var {
    from = 0.0,
    to = 1.0,
    restSpeed = 2,
    restDelta
  } = _a,
      options = (0, _tslib.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = {
    done: false,
    value: from
  };
  let {
    stiffness,
    damping,
    mass,
    velocity,
    duration,
    isResolvedFromDuration
  } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;

  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;

    if (restDelta === undefined) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }

    if (dampingRatio < 1) {
      const angularFreq = (0, _findSpring.calcAngularFreq)(undampedAngularFreq, dampingRatio);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };

      resolveVelocity = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = t => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }

  createSpring();
  return {
    next: t => {
      const current = resolveSpring(t);

      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1000;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }

      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}

spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";

const zero = _t => 0;
},{"tslib":"node_modules/tslib/tslib.es6.js","../utils/find-spring.mjs":"node_modules/popmotion/dist/es/animations/utils/find-spring.mjs"}],"node_modules/popmotion/dist/es/utils/progress.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progress = void 0;

const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

exports.progress = progress;
},{}],"node_modules/popmotion/dist/es/utils/mix.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mix = void 0;

const mix = (from, to, progress) => -progress * from + progress * to + from;

exports.mix = mix;
},{}],"node_modules/style-value-types/dist/es/utils.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatRegex = exports.colorRegex = exports.clamp = void 0;
exports.isString = isString;
exports.singleColorRegex = exports.sanitize = void 0;

const clamp = (min, max) => v => Math.max(Math.min(v, max), min);

exports.clamp = clamp;

const sanitize = v => v % 1 ? Number(v.toFixed(5)) : v;

exports.sanitize = sanitize;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
exports.floatRegex = floatRegex;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
exports.colorRegex = colorRegex;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
exports.singleColorRegex = singleColorRegex;

function isString(v) {
  return typeof v === 'string';
}
},{}],"node_modules/style-value-types/dist/es/numbers/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scale = exports.number = exports.alpha = void 0;

var _utils = require("../utils.mjs");

const number = {
  test: v => typeof v === 'number',
  parse: parseFloat,
  transform: v => v
};
exports.number = number;
const alpha = Object.assign(Object.assign({}, number), {
  transform: (0, _utils.clamp)(0, 1)
});
exports.alpha = alpha;
const scale = Object.assign(Object.assign({}, number), {
  default: 1
});
exports.scale = scale;
},{"../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs"}],"node_modules/style-value-types/dist/es/numbers/units.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vw = exports.vh = exports.px = exports.progressPercentage = exports.percent = exports.degrees = void 0;

var _utils = require("../utils.mjs");

const createUnitType = unit => ({
  test: v => (0, _utils.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});

const degrees = createUnitType('deg');
exports.degrees = degrees;
const percent = createUnitType('%');
exports.percent = percent;
const px = createUnitType('px');
exports.px = px;
const vh = createUnitType('vh');
exports.vh = vh;
const vw = createUnitType('vw');
exports.vw = vw;
const progressPercentage = Object.assign(Object.assign({}, percent), {
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
});
exports.progressPercentage = progressPercentage;
},{"../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs"}],"node_modules/style-value-types/dist/es/color/utils.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitColor = exports.isColorString = void 0;

var _utils = require("../utils.mjs");

const isColorString = (type, testProp) => v => {
  return Boolean((0, _utils.isString)(v) && _utils.singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};

exports.isColorString = isColorString;

const splitColor = (aName, bName, cName) => v => {
  if (!(0, _utils.isString)(v)) return v;
  const [a, b, c, alpha] = v.match(_utils.floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha !== undefined ? parseFloat(alpha) : 1
  };
};

exports.splitColor = splitColor;
},{"../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs"}],"node_modules/style-value-types/dist/es/color/hsla.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsla = void 0;

var _index = require("../numbers/index.mjs");

var _units = require("../numbers/units.mjs");

var _utils = require("../utils.mjs");

var _utils2 = require("./utils.mjs");

const hsla = {
  test: (0, _utils2.isColorString)('hsl', 'hue'),
  parse: (0, _utils2.splitColor)('hue', 'saturation', 'lightness'),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return 'hsla(' + Math.round(hue) + ', ' + _units.percent.transform((0, _utils.sanitize)(saturation)) + ', ' + _units.percent.transform((0, _utils.sanitize)(lightness)) + ', ' + (0, _utils.sanitize)(_index.alpha.transform(alpha$1)) + ')';
  }
};
exports.hsla = hsla;
},{"../numbers/index.mjs":"node_modules/style-value-types/dist/es/numbers/index.mjs","../numbers/units.mjs":"node_modules/style-value-types/dist/es/numbers/units.mjs","../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs","./utils.mjs":"node_modules/style-value-types/dist/es/color/utils.mjs"}],"node_modules/style-value-types/dist/es/color/rgba.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgba = exports.rgbUnit = void 0;

var _index = require("../numbers/index.mjs");

var _utils = require("../utils.mjs");

var _utils2 = require("./utils.mjs");

const clampRgbUnit = (0, _utils.clamp)(0, 255);
const rgbUnit = Object.assign(Object.assign({}, _index.number), {
  transform: v => Math.round(clampRgbUnit(v))
});
exports.rgbUnit = rgbUnit;
const rgba = {
  test: (0, _utils2.isColorString)('rgb', 'red'),
  parse: (0, _utils2.splitColor)('red', 'green', 'blue'),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => 'rgba(' + rgbUnit.transform(red) + ', ' + rgbUnit.transform(green) + ', ' + rgbUnit.transform(blue) + ', ' + (0, _utils.sanitize)(_index.alpha.transform(alpha$1)) + ')'
};
exports.rgba = rgba;
},{"../numbers/index.mjs":"node_modules/style-value-types/dist/es/numbers/index.mjs","../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs","./utils.mjs":"node_modules/style-value-types/dist/es/color/utils.mjs"}],"node_modules/style-value-types/dist/es/color/hex.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hex = void 0;

var _rgba = require("./rgba.mjs");

var _utils = require("./utils.mjs");

function parseHex(v) {
  let r = '';
  let g = '';
  let b = '';
  let a = '';

  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}

const hex = {
  test: (0, _utils.isColorString)('#'),
  parse: parseHex,
  transform: _rgba.rgba.transform
};
exports.hex = hex;
},{"./rgba.mjs":"node_modules/style-value-types/dist/es/color/rgba.mjs","./utils.mjs":"node_modules/style-value-types/dist/es/color/utils.mjs"}],"node_modules/style-value-types/dist/es/color/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = void 0;

var _utils = require("../utils.mjs");

var _hex = require("./hex.mjs");

var _hsla = require("./hsla.mjs");

var _rgba = require("./rgba.mjs");

const color = {
  test: v => _rgba.rgba.test(v) || _hex.hex.test(v) || _hsla.hsla.test(v),
  parse: v => {
    if (_rgba.rgba.test(v)) {
      return _rgba.rgba.parse(v);
    } else if (_hsla.hsla.test(v)) {
      return _hsla.hsla.parse(v);
    } else {
      return _hex.hex.parse(v);
    }
  },
  transform: v => {
    return (0, _utils.isString)(v) ? v : v.hasOwnProperty('red') ? _rgba.rgba.transform(v) : _hsla.hsla.transform(v);
  }
};
exports.color = color;
},{"../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs","./hex.mjs":"node_modules/style-value-types/dist/es/color/hex.mjs","./hsla.mjs":"node_modules/style-value-types/dist/es/color/hsla.mjs","./rgba.mjs":"node_modules/style-value-types/dist/es/color/rgba.mjs"}],"node_modules/style-value-types/dist/es/complex/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complex = void 0;

var _index = require("../color/index.mjs");

var _index2 = require("../numbers/index.mjs");

var _utils = require("../utils.mjs");

const colorToken = '${c}';
const numberToken = '${n}';

function test(v) {
  var _a, _b, _c, _d;

  return isNaN(v) && (0, _utils.isString)(v) && ((_b = (_a = v.match(_utils.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}

function analyse(v) {
  if (typeof v === 'number') v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(_utils.colorRegex);

  if (colors) {
    numColors = colors.length;
    v = v.replace(_utils.colorRegex, colorToken);
    values.push(...colors.map(_index.color.parse));
  }

  const numbers = v.match(_utils.floatRegex);

  if (numbers) {
    v = v.replace(_utils.floatRegex, numberToken);
    values.push(...numbers.map(_index2.number.parse));
  }

  return {
    values,
    numColors,
    tokenised: v
  };
}

function parse(v) {
  return analyse(v).values;
}

function createTransformer(v) {
  const {
    values,
    numColors,
    tokenised
  } = analyse(v);
  const numValues = values.length;
  return v => {
    let output = tokenised;

    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _index.color.transform(v[i]) : (0, _utils.sanitize)(v[i]));
    }

    return output;
  };
}

const convertNumbersToZero = v => typeof v === 'number' ? 0 : v;

function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}

const complex = {
  test,
  parse,
  createTransformer,
  getAnimatableNone
};
exports.complex = complex;
},{"../color/index.mjs":"node_modules/style-value-types/dist/es/color/index.mjs","../numbers/index.mjs":"node_modules/style-value-types/dist/es/numbers/index.mjs","../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs"}],"node_modules/style-value-types/dist/es/complex/filter.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = void 0;

var _index = require("./index.mjs");

var _utils = require("../utils.mjs");

const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split('(');
  if (name === 'drop-shadow') return v;
  const [number] = value.match(_utils.floatRegex) || [];
  if (!number) return v;
  const unit = value.replace(number, '');
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + '(' + defaultValue + unit + ')';
}

const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, _index.complex), {
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(' ') : v;
  }
});
exports.filter = filter;
},{"./index.mjs":"node_modules/style-value-types/dist/es/complex/index.mjs","../utils.mjs":"node_modules/style-value-types/dist/es/utils.mjs"}],"node_modules/style-value-types/dist/es/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function () {
    return _index.alpha;
  }
});
Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function () {
    return _index2.color;
  }
});
Object.defineProperty(exports, "complex", {
  enumerable: true,
  get: function () {
    return _index3.complex;
  }
});
Object.defineProperty(exports, "degrees", {
  enumerable: true,
  get: function () {
    return _units.degrees;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function () {
    return _filter.filter;
  }
});
Object.defineProperty(exports, "hex", {
  enumerable: true,
  get: function () {
    return _hex.hex;
  }
});
Object.defineProperty(exports, "hsla", {
  enumerable: true,
  get: function () {
    return _hsla.hsla;
  }
});
Object.defineProperty(exports, "number", {
  enumerable: true,
  get: function () {
    return _index.number;
  }
});
Object.defineProperty(exports, "percent", {
  enumerable: true,
  get: function () {
    return _units.percent;
  }
});
Object.defineProperty(exports, "progressPercentage", {
  enumerable: true,
  get: function () {
    return _units.progressPercentage;
  }
});
Object.defineProperty(exports, "px", {
  enumerable: true,
  get: function () {
    return _units.px;
  }
});
Object.defineProperty(exports, "rgbUnit", {
  enumerable: true,
  get: function () {
    return _rgba.rgbUnit;
  }
});
Object.defineProperty(exports, "rgba", {
  enumerable: true,
  get: function () {
    return _rgba.rgba;
  }
});
Object.defineProperty(exports, "scale", {
  enumerable: true,
  get: function () {
    return _index.scale;
  }
});
Object.defineProperty(exports, "vh", {
  enumerable: true,
  get: function () {
    return _units.vh;
  }
});
Object.defineProperty(exports, "vw", {
  enumerable: true,
  get: function () {
    return _units.vw;
  }
});

var _index = require("./numbers/index.mjs");

var _units = require("./numbers/units.mjs");

var _hsla = require("./color/hsla.mjs");

var _rgba = require("./color/rgba.mjs");

var _hex = require("./color/hex.mjs");

var _index2 = require("./color/index.mjs");

var _index3 = require("./complex/index.mjs");

var _filter = require("./complex/filter.mjs");
},{"./numbers/index.mjs":"node_modules/style-value-types/dist/es/numbers/index.mjs","./numbers/units.mjs":"node_modules/style-value-types/dist/es/numbers/units.mjs","./color/hsla.mjs":"node_modules/style-value-types/dist/es/color/hsla.mjs","./color/rgba.mjs":"node_modules/style-value-types/dist/es/color/rgba.mjs","./color/hex.mjs":"node_modules/style-value-types/dist/es/color/hex.mjs","./color/index.mjs":"node_modules/style-value-types/dist/es/color/index.mjs","./complex/index.mjs":"node_modules/style-value-types/dist/es/complex/index.mjs","./complex/filter.mjs":"node_modules/style-value-types/dist/es/complex/filter.mjs"}],"node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslaToRgba = hslaToRgba;

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha
  };
}
},{}],"node_modules/popmotion/dist/es/utils/mix-color.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixLinearColor = exports.mixColor = void 0;

var _mix = require("./mix.mjs");

var _styleValueTypes = require("style-value-types");

var _heyListen = require("hey-listen");

var _hslaToRgba = require("./hsla-to-rgba.mjs");

const mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};

exports.mixLinearColor = mixLinearColor;
const colorTypes = [_styleValueTypes.hex, _styleValueTypes.rgba, _styleValueTypes.hsla];

const getColorType = v => colorTypes.find(type => type.test(v));

const notAnimatable = color => `'${color}' is not an animatable color. Use the equivalent color code instead.`;

const mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  (0, _heyListen.invariant)(!!fromColorType, notAnimatable(from));
  (0, _heyListen.invariant)(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);

  if (fromColorType === _styleValueTypes.hsla) {
    fromColor = (0, _hslaToRgba.hslaToRgba)(fromColor);
    fromColorType = _styleValueTypes.rgba;
  }

  if (toColorType === _styleValueTypes.hsla) {
    toColor = (0, _hslaToRgba.hslaToRgba)(toColor);
    toColorType = _styleValueTypes.rgba;
  }

  const blended = Object.assign({}, fromColor);
  return v => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = (0, _mix.mix)(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

exports.mixColor = mixColor;
},{"./mix.mjs":"node_modules/popmotion/dist/es/utils/mix.mjs","style-value-types":"node_modules/style-value-types/dist/es/index.mjs","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","./hsla-to-rgba.mjs":"node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs"}],"node_modules/popmotion/dist/es/utils/inc.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroPoint = exports.isNum = void 0;
const zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};
exports.zeroPoint = zeroPoint;

const isNum = v => typeof v === 'number';

exports.isNum = isNum;
},{}],"node_modules/popmotion/dist/es/utils/pipe.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = void 0;

const combineFunctions = (a, b) => v => b(a(v));

const pipe = (...transformers) => transformers.reduce(combineFunctions);

exports.pipe = pipe;
},{}],"node_modules/popmotion/dist/es/utils/mix-complex.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixObject = exports.mixComplex = exports.mixArray = void 0;

var _styleValueTypes = require("style-value-types");

var _mix = require("./mix.mjs");

var _mixColor = require("./mix-color.mjs");

var _inc = require("./inc.mjs");

var _pipe = require("./pipe.mjs");

var _heyListen = require("hey-listen");

function getMixer(origin, target) {
  if ((0, _inc.isNum)(origin)) {
    return v => (0, _mix.mix)(origin, target, v);
  } else if (_styleValueTypes.color.test(origin)) {
    return (0, _mixColor.mixColor)(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}

const mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return v => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

exports.mixArray = mixArray;

const mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};

  for (const key in output) {
    if (origin[key] !== undefined && target[key] !== undefined) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }

  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }

    return output;
  };
};

exports.mixObject = mixObject;

function analyse(value) {
  const parsed = _styleValueTypes.complex.parse(value);

  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;

  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== undefined) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }

  return {
    parsed,
    numNumbers,
    numRGB,
    numHSL
  };
}

const mixComplex = (origin, target) => {
  const template = _styleValueTypes.complex.createTransformer(target);

  const originStats = analyse(origin);
  const targetStats = analyse(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;

  if (canInterpolate) {
    return (0, _pipe.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    (0, _heyListen.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return p => `${p > 0 ? target : origin}`;
  }
};

exports.mixComplex = mixComplex;
},{"style-value-types":"node_modules/style-value-types/dist/es/index.mjs","./mix.mjs":"node_modules/popmotion/dist/es/utils/mix.mjs","./mix-color.mjs":"node_modules/popmotion/dist/es/utils/mix-color.mjs","./inc.mjs":"node_modules/popmotion/dist/es/utils/inc.mjs","./pipe.mjs":"node_modules/popmotion/dist/es/utils/pipe.mjs","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/es/utils/interpolate.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;

var _progress = require("./progress.mjs");

var _mix = require("./mix.mjs");

var _mixColor = require("./mix-color.mjs");

var _mixComplex = require("./mix-complex.mjs");

var _styleValueTypes = require("style-value-types");

var _clamp = require("./clamp.mjs");

var _pipe = require("./pipe.mjs");

var _heyListen = require("hey-listen");

const mixNumber = (from, to) => p => (0, _mix.mix)(from, to, p);

function detectMixerFactory(v) {
  if (typeof v === 'number') {
    return mixNumber;
  } else if (typeof v === 'string') {
    if (_styleValueTypes.color.test(v)) {
      return _mixColor.mixColor;
    } else {
      return _mixComplex.mixComplex;
    }
  } else if (Array.isArray(v)) {
    return _mixComplex.mixArray;
  } else if (typeof v === 'object') {
    return _mixComplex.mixObject;
  }
}

function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;

  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);

    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = (0, _pipe.pipe)(easingFunction, mixer);
    }

    mixers.push(mixer);
  }

  return mixers;
}

function fastInterpolate([from, to], [mixer]) {
  return v => mixer((0, _progress.progress)(from, to, v));
}

function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return v => {
    let mixerIndex = 0;
    let foundMixerIndex = false;

    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }

    if (!foundMixerIndex) {
      let i = 1;

      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }

      mixerIndex = i - 1;
    }

    const progressInRange = (0, _progress.progress)(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}

function interpolate(input, output, {
  clamp: isClamp = true,
  ease,
  mixer
} = {}) {
  const inputLength = input.length;
  (0, _heyListen.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
  (0, _heyListen.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');

  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }

  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? v => interpolator((0, _clamp.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}
},{"./progress.mjs":"node_modules/popmotion/dist/es/utils/progress.mjs","./mix.mjs":"node_modules/popmotion/dist/es/utils/mix.mjs","./mix-color.mjs":"node_modules/popmotion/dist/es/utils/mix-color.mjs","./mix-complex.mjs":"node_modules/popmotion/dist/es/utils/mix-complex.mjs","style-value-types":"node_modules/style-value-types/dist/es/index.mjs","./clamp.mjs":"node_modules/popmotion/dist/es/utils/clamp.mjs","./pipe.mjs":"node_modules/popmotion/dist/es/utils/pipe.mjs","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/es/easing/utils.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseEasing = exports.mirrorEasing = exports.createExpoIn = exports.createBackIn = exports.createAnticipate = void 0;

const reverseEasing = easing => p => 1 - easing(1 - p);

exports.reverseEasing = reverseEasing;

const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

exports.mirrorEasing = mirrorEasing;

const createExpoIn = power => p => Math.pow(p, power);

exports.createExpoIn = createExpoIn;

const createBackIn = power => p => p * p * ((power + 1) * p - power);

exports.createBackIn = createBackIn;

const createAnticipate = power => {
  const backEasing = createBackIn(power);
  return p => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

exports.createAnticipate = createAnticipate;
},{}],"node_modules/popmotion/dist/es/easing/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = exports.easeOut = exports.easeInOut = exports.easeIn = exports.circOut = exports.circInOut = exports.circIn = exports.bounceOut = exports.bounceInOut = exports.bounceIn = exports.backOut = exports.backInOut = exports.backIn = exports.anticipate = void 0;

var _utils = require("./utils.mjs");

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;

const linear = p => p;

exports.linear = linear;
const easeIn = (0, _utils.createExpoIn)(2);
exports.easeIn = easeIn;
const easeOut = (0, _utils.reverseEasing)(easeIn);
exports.easeOut = easeOut;
const easeInOut = (0, _utils.mirrorEasing)(easeIn);
exports.easeInOut = easeInOut;

const circIn = p => 1 - Math.sin(Math.acos(p));

exports.circIn = circIn;
const circOut = (0, _utils.reverseEasing)(circIn);
exports.circOut = circOut;
const circInOut = (0, _utils.mirrorEasing)(circOut);
exports.circInOut = circInOut;
const backIn = (0, _utils.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
exports.backIn = backIn;
const backOut = (0, _utils.reverseEasing)(backIn);
exports.backOut = backOut;
const backInOut = (0, _utils.mirrorEasing)(backIn);
exports.backInOut = backInOut;
const anticipate = (0, _utils.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
exports.anticipate = anticipate;
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;

const bounceOut = p => {
  if (p === 1 || p === 0) return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};

exports.bounceOut = bounceOut;
const bounceIn = (0, _utils.reverseEasing)(bounceOut);
exports.bounceIn = bounceIn;

const bounceInOut = p => p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;

exports.bounceInOut = bounceInOut;
},{"./utils.mjs":"node_modules/popmotion/dist/es/easing/utils.mjs"}],"node_modules/popmotion/dist/es/animations/generators/keyframes.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertOffsetToTimes = convertOffsetToTimes;
exports.defaultEasing = defaultEasing;
exports.defaultOffset = defaultOffset;
exports.keyframes = keyframes;

var _interpolate = require("../../utils/interpolate.mjs");

var _index = require("../../easing/index.mjs");

function defaultEasing(values, easing) {
  return values.map(() => easing || _index.easeInOut).splice(0, values.length - 1);
}

function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

function keyframes({
  from = 0,
  to = 1,
  ease,
  offset,
  duration = 300
}) {
  const state = {
    done: false,
    value: from
  };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);

  function createInterpolator() {
    return (0, _interpolate.interpolate)(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }

  let interpolator = createInterpolator();
  return {
    next: t => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}
},{"../../utils/interpolate.mjs":"node_modules/popmotion/dist/es/utils/interpolate.mjs","../../easing/index.mjs":"node_modules/popmotion/dist/es/easing/index.mjs"}],"node_modules/popmotion/dist/es/animations/generators/decay.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decay = decay;

function decay({
  velocity = 0,
  from = 0,
  power = 0.8,
  timeConstant = 350,
  restDelta = 0.5,
  modifyTarget
}) {
  const state = {
    done: false,
    value: from
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - from;
  return {
    next: t => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {}
  };
}
},{}],"node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAnimationFromOptions = detectAnimationFromOptions;

var _spring = require("../generators/spring.mjs");

var _keyframes = require("../generators/keyframes.mjs");

var _decay = require("../generators/decay.mjs");

const types = {
  keyframes: _keyframes.keyframes,
  spring: _spring.spring,
  decay: _decay.decay
};

function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return _keyframes.keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }

  const keys = new Set(Object.keys(config));

  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return _keyframes.keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return _spring.spring;
  }

  return _keyframes.keyframes;
}
},{"../generators/spring.mjs":"node_modules/popmotion/dist/es/animations/generators/spring.mjs","../generators/keyframes.mjs":"node_modules/popmotion/dist/es/animations/generators/keyframes.mjs","../generators/decay.mjs":"node_modules/popmotion/dist/es/animations/generators/decay.mjs"}],"node_modules/framesync/dist/es/on-next-frame.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onNextFrame = exports.defaultTimestep = void 0;
const defaultTimestep = 1 / 60 * 1000;
exports.defaultTimestep = defaultTimestep;
const getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
const onNextFrame = typeof window !== "undefined" ? callback => window.requestAnimationFrame(callback) : callback => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
exports.onNextFrame = onNextFrame;
},{}],"node_modules/framesync/dist/es/create-render-step.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRenderStep = createRenderStep;

function createRenderStep(runNextFrame) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);

      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
      }

      return callback;
    },
    cancel: callback => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: frameData => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }

      isProcessing = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;

      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);

          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }

      isProcessing = false;

      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/framesync/dist/es/index.mjs":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFrameData = exports.flushSync = exports.default = exports.cancelSync = void 0;

var _onNextFrame = require("./on-next-frame.mjs");

var _createRenderStep = require("./create-render-step.mjs");

const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
  delta: 0,
  timestamp: 0
};
const stepsOrder = ["read", "update", "preRender", "render", "postRender"];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = (0, _createRenderStep.createRenderStep)(() => runNextFrame = true);
  return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];

  acc[key] = (process, keepAlive = false, immediate = false) => {
    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };

  return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
exports.cancelSync = cancelSync;
const flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);

  return acc;
}, {});
exports.flushSync = flushSync;

const processStep = stepId => steps[stepId].process(frame);

const processFrame = timestamp => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? _onNextFrame.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (runNextFrame) {
    useDefaultElapsed = false;
    (0, _onNextFrame.onNextFrame)(processFrame);
  }
};

const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) (0, _onNextFrame.onNextFrame)(processFrame);
};

const getFrameData = () => frame;

exports.getFrameData = getFrameData;
var _default = sync;
exports.default = _default;
},{"./on-next-frame.mjs":"node_modules/framesync/dist/es/on-next-frame.mjs","./create-render-step.mjs":"node_modules/framesync/dist/es/create-render-step.mjs","process":"../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"node_modules/popmotion/dist/es/animations/utils/elapsed.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasRepeatDelayElapsed = hasRepeatDelayElapsed;
exports.loopElapsed = loopElapsed;
exports.reverseElapsed = reverseElapsed;

function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}

function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}

function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
},{}],"node_modules/popmotion/dist/es/animations/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;

var _tslib = require("tslib");

var _detectAnimationFromOptions = require("./utils/detect-animation-from-options.mjs");

var _framesync = _interopRequireWildcard(require("framesync"));

var _interpolate = require("../utils/interpolate.mjs");

var _elapsed = require("./utils/elapsed.mjs");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const framesync = update => {
  const passTimestamp = ({
    delta
  }) => update(delta);

  return {
    start: () => _framesync.default.update(passTimestamp, true),
    stop: () => _framesync.cancelSync.update(passTimestamp)
  };
};

function animate(_a) {
  var _b, _c;

  var {
    from,
    autoplay = true,
    driver = framesync,
    elapsed = 0,
    repeat: repeatMax = 0,
    repeatType = "loop",
    repeatDelay = 0,
    onPlay,
    onStop,
    onComplete,
    onRepeat,
    onUpdate
  } = _a,
      options = (0, _tslib.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let {
    to
  } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = (0, _detectAnimationFromOptions.detectAnimationFromOptions)(options);

  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = (0, _interpolate.interpolate)([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }

  const animation = animator(Object.assign(Object.assign({}, options), {
    from,
    to
  }));

  function repeat() {
    repeatCount++;

    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = (0, _elapsed.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = (0, _elapsed.loopElapsed)(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror") animation.flipTarget();
    }

    isComplete = false;
    onRepeat && onRepeat();
  }

  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }

  function update(delta) {
    if (!isForwardPlayback) delta = -delta;
    elapsed += delta;

    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber) latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }

    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);

    if (isComplete) {
      if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;

      if (repeatCount < repeatMax) {
        (0, _elapsed.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }

  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }

  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}
},{"tslib":"node_modules/tslib/tslib.es6.js","./utils/detect-animation-from-options.mjs":"node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs","framesync":"node_modules/framesync/dist/es/index.mjs","../utils/interpolate.mjs":"node_modules/popmotion/dist/es/utils/interpolate.mjs","./utils/elapsed.mjs":"node_modules/popmotion/dist/es/animations/utils/elapsed.mjs"}],"node_modules/popmotion/dist/es/utils/velocity-per-second.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.velocityPerSecond = velocityPerSecond;

function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
},{}],"node_modules/popmotion/dist/es/animations/inertia.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inertia = inertia;

var _index = require("./index.mjs");

var _velocityPerSecond = require("../utils/velocity-per-second.mjs");

var _framesync = require("framesync");

function inertia({
  from = 0,
  velocity = 0,
  min,
  max,
  power = 0.8,
  timeConstant = 750,
  bounceStiffness = 500,
  bounceDamping = 10,
  restDelta = 1,
  modifyTarget,
  driver,
  onUpdate,
  onComplete,
  onStop
}) {
  let currentAnimation;

  function isOutOfBounds(v) {
    return min !== undefined && v < min || max !== undefined && v > max;
  }

  function boundaryNearest(v) {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }

  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = (0, _index.animate)(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: v => {
        var _a;

        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }

  function startSpring(options) {
    startAnimation(Object.assign({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta
    }, options));
  }

  if (isOutOfBounds(from)) {
    startSpring({
      from,
      velocity,
      to: boundaryNearest(from)
    });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;

    const checkBoundary = v => {
      prev = current;
      current = v;
      velocity = (0, _velocityPerSecond.velocityPerSecond)(v - prev, (0, _framesync.getFrameData)().delta);

      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({
          from: v,
          to: boundary,
          velocity
        });
      }
    };

    startAnimation({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
    });
  }

  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}
},{"./index.mjs":"node_modules/popmotion/dist/es/animations/index.mjs","../utils/velocity-per-second.mjs":"node_modules/popmotion/dist/es/utils/velocity-per-second.mjs","framesync":"node_modules/framesync/dist/es/index.mjs"}],"node_modules/popmotion/dist/es/utils/radians-to-degrees.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radiansToDegrees = void 0;

const radiansToDegrees = radians => radians * 180 / Math.PI;

exports.radiansToDegrees = radiansToDegrees;
},{}],"node_modules/popmotion/dist/es/utils/angle.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angle = void 0;

var _radiansToDegrees = require("./radians-to-degrees.mjs");

var _inc = require("./inc.mjs");

const angle = (a, b = _inc.zeroPoint) => (0, _radiansToDegrees.radiansToDegrees)(Math.atan2(b.y - a.y, b.x - a.x));

exports.angle = angle;
},{"./radians-to-degrees.mjs":"node_modules/popmotion/dist/es/utils/radians-to-degrees.mjs","./inc.mjs":"node_modules/popmotion/dist/es/utils/inc.mjs"}],"node_modules/popmotion/dist/es/utils/apply-offset.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyOffset = void 0;

const applyOffset = (from, to) => {
  let hasReceivedFrom = true;

  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }

  return v => {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
};

exports.applyOffset = applyOffset;
},{}],"node_modules/popmotion/dist/es/utils/attract.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAttractor = exports.attractExpo = exports.attract = void 0;

const identity = v => v;

const createAttractor = (alterDisplacement = identity) => (constant, origin, v) => {
  const displacement = origin - v;
  const springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
  return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};

exports.createAttractor = createAttractor;
const attract = createAttractor();
exports.attract = attract;
const attractExpo = createAttractor(Math.sqrt);
exports.attractExpo = attractExpo;
},{}],"node_modules/popmotion/dist/es/utils/degrees-to-radians.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.degreesToRadians = void 0;

const degreesToRadians = degrees => degrees * Math.PI / 180;

exports.degreesToRadians = degreesToRadians;
},{}],"node_modules/popmotion/dist/es/utils/is-point.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPoint = void 0;

const isPoint = point => point.hasOwnProperty('x') && point.hasOwnProperty('y');

exports.isPoint = isPoint;
},{}],"node_modules/popmotion/dist/es/utils/is-point-3d.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPoint3D = void 0;

var _isPoint = require("./is-point.mjs");

const isPoint3D = point => (0, _isPoint.isPoint)(point) && point.hasOwnProperty('z');

exports.isPoint3D = isPoint3D;
},{"./is-point.mjs":"node_modules/popmotion/dist/es/utils/is-point.mjs"}],"node_modules/popmotion/dist/es/utils/distance.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distance = distance;

var _isPoint = require("./is-point.mjs");

var _isPoint3d = require("./is-point-3d.mjs");

var _inc = require("./inc.mjs");

const distance1D = (a, b) => Math.abs(a - b);

function distance(a, b) {
  if ((0, _inc.isNum)(a) && (0, _inc.isNum)(b)) {
    return distance1D(a, b);
  } else if ((0, _isPoint.isPoint)(a) && (0, _isPoint.isPoint)(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = (0, _isPoint3d.isPoint3D)(a) && (0, _isPoint3d.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}
},{"./is-point.mjs":"node_modules/popmotion/dist/es/utils/is-point.mjs","./is-point-3d.mjs":"node_modules/popmotion/dist/es/utils/is-point-3d.mjs","./inc.mjs":"node_modules/popmotion/dist/es/utils/inc.mjs"}],"node_modules/popmotion/dist/es/utils/point-from-vector.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointFromVector = void 0;

var _degreesToRadians = require("./degrees-to-radians.mjs");

const pointFromVector = (origin, angle, distance) => {
  angle = (0, _degreesToRadians.degreesToRadians)(angle);
  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};

exports.pointFromVector = pointFromVector;
},{"./degrees-to-radians.mjs":"node_modules/popmotion/dist/es/utils/degrees-to-radians.mjs"}],"node_modules/popmotion/dist/es/utils/to-decimal.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDecimal = void 0;

const toDecimal = (num, precision = 2) => {
  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};

exports.toDecimal = toDecimal;
},{}],"node_modules/popmotion/dist/es/utils/smooth-frame.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoothFrame = void 0;

var _toDecimal = require("./to-decimal.mjs");

const smoothFrame = (prevValue, nextValue, duration, smoothing = 0) => (0, _toDecimal.toDecimal)(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));

exports.smoothFrame = smoothFrame;
},{"./to-decimal.mjs":"node_modules/popmotion/dist/es/utils/to-decimal.mjs"}],"node_modules/popmotion/dist/es/utils/smooth.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smooth = void 0;

var _smoothFrame = require("./smooth-frame.mjs");

var _framesync = require("framesync");

const smooth = (strength = 50) => {
  let previousValue = 0;
  let lastUpdated = 0;
  return v => {
    const currentFramestamp = (0, _framesync.getFrameData)().timestamp;
    const timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    const newValue = timeDelta ? (0, _smoothFrame.smoothFrame)(previousValue, v, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

exports.smooth = smooth;
},{"./smooth-frame.mjs":"node_modules/popmotion/dist/es/utils/smooth-frame.mjs","framesync":"node_modules/framesync/dist/es/index.mjs"}],"node_modules/popmotion/dist/es/utils/snap.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snap = void 0;

const snap = points => {
  if (typeof points === 'number') {
    return v => Math.round(v / points) * points;
  } else {
    let i = 0;
    const numPoints = points.length;
    return v => {
      let lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        const point = points[i];
        const distance = Math.abs(point - v);
        if (distance === 0) return point;
        if (distance > lastDistance) return points[i - 1];
        if (i === numPoints - 1) return point;
        lastDistance = distance;
      }
    };
  }
};

exports.snap = snap;
},{}],"node_modules/popmotion/dist/es/utils/velocity-per-frame.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.velocityPerFrame = velocityPerFrame;

function velocityPerFrame(xps, frameDuration) {
  return xps / (1000 / frameDuration);
}
},{}],"node_modules/popmotion/dist/es/utils/wrap.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = void 0;

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

exports.wrap = wrap;
},{}],"node_modules/popmotion/dist/es/easing/cubic-bezier.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicBezier = cubicBezier;

var _index = require("./index.mjs");

const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;

const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;

const c = a1 => 3.0 * a1;

const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);

const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);

  return currentT;
}

const newtonIterations = 8;
const newtonMinSlope = 0.001;

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return _index.linear;
  const sampleValues = new Float32Array(kSplineTableSize);

  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
},{"./index.mjs":"node_modules/popmotion/dist/es/easing/index.mjs"}],"node_modules/popmotion/dist/es/easing/steps.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.steps = void 0;

var _clamp = require("../utils/clamp.mjs");

const steps = (steps, direction = 'end') => progress => {
  progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
  const expanded = progress * steps;
  const rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
  return (0, _clamp.clamp)(0, 1, rounded / steps);
};

exports.steps = steps;
},{"../utils/clamp.mjs":"node_modules/popmotion/dist/es/utils/clamp.mjs"}],"node_modules/popmotion/dist/es/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "angle", {
  enumerable: true,
  get: function () {
    return _angle.angle;
  }
});
Object.defineProperty(exports, "animate", {
  enumerable: true,
  get: function () {
    return _index.animate;
  }
});
Object.defineProperty(exports, "anticipate", {
  enumerable: true,
  get: function () {
    return _index2.anticipate;
  }
});
Object.defineProperty(exports, "applyOffset", {
  enumerable: true,
  get: function () {
    return _applyOffset.applyOffset;
  }
});
Object.defineProperty(exports, "attract", {
  enumerable: true,
  get: function () {
    return _attract.attract;
  }
});
Object.defineProperty(exports, "attractExpo", {
  enumerable: true,
  get: function () {
    return _attract.attractExpo;
  }
});
Object.defineProperty(exports, "backIn", {
  enumerable: true,
  get: function () {
    return _index2.backIn;
  }
});
Object.defineProperty(exports, "backInOut", {
  enumerable: true,
  get: function () {
    return _index2.backInOut;
  }
});
Object.defineProperty(exports, "backOut", {
  enumerable: true,
  get: function () {
    return _index2.backOut;
  }
});
Object.defineProperty(exports, "bounceIn", {
  enumerable: true,
  get: function () {
    return _index2.bounceIn;
  }
});
Object.defineProperty(exports, "bounceInOut", {
  enumerable: true,
  get: function () {
    return _index2.bounceInOut;
  }
});
Object.defineProperty(exports, "bounceOut", {
  enumerable: true,
  get: function () {
    return _index2.bounceOut;
  }
});
Object.defineProperty(exports, "circIn", {
  enumerable: true,
  get: function () {
    return _index2.circIn;
  }
});
Object.defineProperty(exports, "circInOut", {
  enumerable: true,
  get: function () {
    return _index2.circInOut;
  }
});
Object.defineProperty(exports, "circOut", {
  enumerable: true,
  get: function () {
    return _index2.circOut;
  }
});
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function () {
    return _clamp.clamp;
  }
});
Object.defineProperty(exports, "createAnticipate", {
  enumerable: true,
  get: function () {
    return _utils.createAnticipate;
  }
});
Object.defineProperty(exports, "createAttractor", {
  enumerable: true,
  get: function () {
    return _attract.createAttractor;
  }
});
Object.defineProperty(exports, "createBackIn", {
  enumerable: true,
  get: function () {
    return _utils.createBackIn;
  }
});
Object.defineProperty(exports, "createExpoIn", {
  enumerable: true,
  get: function () {
    return _utils.createExpoIn;
  }
});
Object.defineProperty(exports, "cubicBezier", {
  enumerable: true,
  get: function () {
    return _cubicBezier.cubicBezier;
  }
});
Object.defineProperty(exports, "decay", {
  enumerable: true,
  get: function () {
    return _decay.decay;
  }
});
Object.defineProperty(exports, "degreesToRadians", {
  enumerable: true,
  get: function () {
    return _degreesToRadians.degreesToRadians;
  }
});
Object.defineProperty(exports, "distance", {
  enumerable: true,
  get: function () {
    return _distance.distance;
  }
});
Object.defineProperty(exports, "easeIn", {
  enumerable: true,
  get: function () {
    return _index2.easeIn;
  }
});
Object.defineProperty(exports, "easeInOut", {
  enumerable: true,
  get: function () {
    return _index2.easeInOut;
  }
});
Object.defineProperty(exports, "easeOut", {
  enumerable: true,
  get: function () {
    return _index2.easeOut;
  }
});
Object.defineProperty(exports, "inertia", {
  enumerable: true,
  get: function () {
    return _inertia.inertia;
  }
});
Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function () {
    return _interpolate.interpolate;
  }
});
Object.defineProperty(exports, "isPoint", {
  enumerable: true,
  get: function () {
    return _isPoint.isPoint;
  }
});
Object.defineProperty(exports, "isPoint3D", {
  enumerable: true,
  get: function () {
    return _isPoint3d.isPoint3D;
  }
});
Object.defineProperty(exports, "keyframes", {
  enumerable: true,
  get: function () {
    return _keyframes.keyframes;
  }
});
Object.defineProperty(exports, "linear", {
  enumerable: true,
  get: function () {
    return _index2.linear;
  }
});
Object.defineProperty(exports, "mirrorEasing", {
  enumerable: true,
  get: function () {
    return _utils.mirrorEasing;
  }
});
Object.defineProperty(exports, "mix", {
  enumerable: true,
  get: function () {
    return _mix.mix;
  }
});
Object.defineProperty(exports, "mixColor", {
  enumerable: true,
  get: function () {
    return _mixColor.mixColor;
  }
});
Object.defineProperty(exports, "mixComplex", {
  enumerable: true,
  get: function () {
    return _mixComplex.mixComplex;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "pointFromVector", {
  enumerable: true,
  get: function () {
    return _pointFromVector.pointFromVector;
  }
});
Object.defineProperty(exports, "progress", {
  enumerable: true,
  get: function () {
    return _progress.progress;
  }
});
Object.defineProperty(exports, "radiansToDegrees", {
  enumerable: true,
  get: function () {
    return _radiansToDegrees.radiansToDegrees;
  }
});
Object.defineProperty(exports, "reverseEasing", {
  enumerable: true,
  get: function () {
    return _utils.reverseEasing;
  }
});
Object.defineProperty(exports, "smooth", {
  enumerable: true,
  get: function () {
    return _smooth.smooth;
  }
});
Object.defineProperty(exports, "smoothFrame", {
  enumerable: true,
  get: function () {
    return _smoothFrame.smoothFrame;
  }
});
Object.defineProperty(exports, "snap", {
  enumerable: true,
  get: function () {
    return _snap.snap;
  }
});
Object.defineProperty(exports, "spring", {
  enumerable: true,
  get: function () {
    return _spring.spring;
  }
});
Object.defineProperty(exports, "steps", {
  enumerable: true,
  get: function () {
    return _steps.steps;
  }
});
Object.defineProperty(exports, "toDecimal", {
  enumerable: true,
  get: function () {
    return _toDecimal.toDecimal;
  }
});
Object.defineProperty(exports, "velocityPerFrame", {
  enumerable: true,
  get: function () {
    return _velocityPerFrame.velocityPerFrame;
  }
});
Object.defineProperty(exports, "velocityPerSecond", {
  enumerable: true,
  get: function () {
    return _velocityPerSecond.velocityPerSecond;
  }
});
Object.defineProperty(exports, "wrap", {
  enumerable: true,
  get: function () {
    return _wrap.wrap;
  }
});

var _index = require("./animations/index.mjs");

var _inertia = require("./animations/inertia.mjs");

var _decay = require("./animations/generators/decay.mjs");

var _spring = require("./animations/generators/spring.mjs");

var _keyframes = require("./animations/generators/keyframes.mjs");

var _angle = require("./utils/angle.mjs");

var _applyOffset = require("./utils/apply-offset.mjs");

var _attract = require("./utils/attract.mjs");

var _clamp = require("./utils/clamp.mjs");

var _degreesToRadians = require("./utils/degrees-to-radians.mjs");

var _distance = require("./utils/distance.mjs");

var _interpolate = require("./utils/interpolate.mjs");

var _isPoint3d = require("./utils/is-point-3d.mjs");

var _isPoint = require("./utils/is-point.mjs");

var _mixColor = require("./utils/mix-color.mjs");

var _mixComplex = require("./utils/mix-complex.mjs");

var _mix = require("./utils/mix.mjs");

var _pipe = require("./utils/pipe.mjs");

var _pointFromVector = require("./utils/point-from-vector.mjs");

var _progress = require("./utils/progress.mjs");

var _radiansToDegrees = require("./utils/radians-to-degrees.mjs");

var _smoothFrame = require("./utils/smooth-frame.mjs");

var _smooth = require("./utils/smooth.mjs");

var _snap = require("./utils/snap.mjs");

var _toDecimal = require("./utils/to-decimal.mjs");

var _velocityPerFrame = require("./utils/velocity-per-frame.mjs");

var _velocityPerSecond = require("./utils/velocity-per-second.mjs");

var _wrap = require("./utils/wrap.mjs");

var _index2 = require("./easing/index.mjs");

var _cubicBezier = require("./easing/cubic-bezier.mjs");

var _steps = require("./easing/steps.mjs");

var _utils = require("./easing/utils.mjs");
},{"./animations/index.mjs":"node_modules/popmotion/dist/es/animations/index.mjs","./animations/inertia.mjs":"node_modules/popmotion/dist/es/animations/inertia.mjs","./animations/generators/decay.mjs":"node_modules/popmotion/dist/es/animations/generators/decay.mjs","./animations/generators/spring.mjs":"node_modules/popmotion/dist/es/animations/generators/spring.mjs","./animations/generators/keyframes.mjs":"node_modules/popmotion/dist/es/animations/generators/keyframes.mjs","./utils/angle.mjs":"node_modules/popmotion/dist/es/utils/angle.mjs","./utils/apply-offset.mjs":"node_modules/popmotion/dist/es/utils/apply-offset.mjs","./utils/attract.mjs":"node_modules/popmotion/dist/es/utils/attract.mjs","./utils/clamp.mjs":"node_modules/popmotion/dist/es/utils/clamp.mjs","./utils/degrees-to-radians.mjs":"node_modules/popmotion/dist/es/utils/degrees-to-radians.mjs","./utils/distance.mjs":"node_modules/popmotion/dist/es/utils/distance.mjs","./utils/interpolate.mjs":"node_modules/popmotion/dist/es/utils/interpolate.mjs","./utils/is-point-3d.mjs":"node_modules/popmotion/dist/es/utils/is-point-3d.mjs","./utils/is-point.mjs":"node_modules/popmotion/dist/es/utils/is-point.mjs","./utils/mix-color.mjs":"node_modules/popmotion/dist/es/utils/mix-color.mjs","./utils/mix-complex.mjs":"node_modules/popmotion/dist/es/utils/mix-complex.mjs","./utils/mix.mjs":"node_modules/popmotion/dist/es/utils/mix.mjs","./utils/pipe.mjs":"node_modules/popmotion/dist/es/utils/pipe.mjs","./utils/point-from-vector.mjs":"node_modules/popmotion/dist/es/utils/point-from-vector.mjs","./utils/progress.mjs":"node_modules/popmotion/dist/es/utils/progress.mjs","./utils/radians-to-degrees.mjs":"node_modules/popmotion/dist/es/utils/radians-to-degrees.mjs","./utils/smooth-frame.mjs":"node_modules/popmotion/dist/es/utils/smooth-frame.mjs","./utils/smooth.mjs":"node_modules/popmotion/dist/es/utils/smooth.mjs","./utils/snap.mjs":"node_modules/popmotion/dist/es/utils/snap.mjs","./utils/to-decimal.mjs":"node_modules/popmotion/dist/es/utils/to-decimal.mjs","./utils/velocity-per-frame.mjs":"node_modules/popmotion/dist/es/utils/velocity-per-frame.mjs","./utils/velocity-per-second.mjs":"node_modules/popmotion/dist/es/utils/velocity-per-second.mjs","./utils/wrap.mjs":"node_modules/popmotion/dist/es/utils/wrap.mjs","./easing/index.mjs":"node_modules/popmotion/dist/es/easing/index.mjs","./easing/cubic-bezier.mjs":"node_modules/popmotion/dist/es/easing/cubic-bezier.mjs","./easing/steps.mjs":"node_modules/popmotion/dist/es/easing/steps.mjs","./easing/utils.mjs":"node_modules/popmotion/dist/es/easing/utils.mjs"}],"animation.js":[function(require,module,exports) {
"use strict";

var _popmotion = _interopRequireDefault(require("popmotion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styler = _popmotion.default.styler,
    spring = _popmotion.default.spring,
    listen = _popmotion.default.listen,
    pointer = _popmotion.default.pointer,
    value = _popmotion.default.value;
var ball = document.querySelector(".box");
var divStyler = styler(ball);
var ballXY = value({
  x: 0,
  y: 0
}, divStyler.set);
listen(ball, "mousedown touchstart").start(function (e) {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});
listen(document, "mouseup").start(function () {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: {
      x: 0,
      y: 0
    },
    stiffness: 200
  }).start(ballXY);
});
},{"popmotion":"node_modules/popmotion/dist/es/index.mjs"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50254" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","animation.js"], null)
//# sourceMappingURL=/animation.7bfd2d21.js.map