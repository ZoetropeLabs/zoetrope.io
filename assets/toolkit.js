+ function () {
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require, exports, module) : t.Tether = e();
}(this, function (t, e, o) {
  "use strict";
  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function i(t) {
    var e = t.getBoundingClientRect(),
        o = {};for (var n in e) {
      o[n] = e[n];
    }if (t.ownerDocument !== document) {
      var r = t.ownerDocument.defaultView.frameElement;if (r) {
        var s = i(r);o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left;
      }
    }return o;
  }function r(t) {
    var e = getComputedStyle(t) || {},
        o = e.position,
        n = [];if ("fixed" === o) return [t];for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
      var r = void 0;try {
        r = getComputedStyle(i);
      } catch (s) {}if ("undefined" == typeof r || null === r) return n.push(i), n;var a = r,
          f = a.overflow,
          l = a.overflowX,
          h = a.overflowY;/(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i);
    }return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n;
  }function s() {
    A && document.body.removeChild(A), A = null;
  }function a(t) {
    var e = void 0;t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;var o = e.documentElement,
        n = i(t),
        r = P();return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n;
  }function f(t) {
    return t.offsetParent || document.documentElement;
  }function l() {
    var t = document.createElement("div");t.style.width = "100%", t.style.height = "200px";var e = document.createElement("div");h(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e);var o = t.offsetWidth;e.style.overflow = "scroll";var n = t.offsetWidth;o === n && (n = e.clientWidth), document.body.removeChild(e);var i = o - n;return { width: i, height: i };
  }function h() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var o in e) {
        ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }
    }), t;
  }function u(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          n = c(t).replace(o, " ");g(t, n);
    }
  }function d(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      u(t, e);var o = c(t) + (" " + e);g(t, o);
    }
  }function p(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);var o = c(t);return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
  }function c(t) {
    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
  }function g(t, e) {
    t.setAttribute("class", e);
  }function m(t, e, o) {
    o.forEach(function (o) {
      -1 === e.indexOf(o) && p(t, o) && u(t, o);
    }), e.forEach(function (e) {
      p(t, e) || d(t, e);
    });
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function v(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }function y(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];return t + o >= e && e >= t - o;
  }function b() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
  }function w() {
    for (var t = { top: 0, left: 0 }, e = arguments.length, o = Array(e), n = 0; e > n; n++) {
      o[n] = arguments[n];
    }return o.forEach(function (e) {
      var o = e.top,
          n = e.left;"string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n;
    }), t;
  }function C(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }function O(t, e) {
    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
      var t = e,
          o = a(e),
          n = o,
          i = getComputedStyle(e);if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
        var r = t.ownerDocument.defaultView;e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset;
      }$.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
      });
    }(), e;
  }var E = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }return function (e, o, n) {
      return o && t(e.prototype, o), n && t(e, n), e;
    };
  }(),
      x = void 0;"undefined" == typeof x && (x = { modules: [] });var A = null,
      T = function () {
    var t = 0;return function () {
      return ++t;
    };
  }(),
      S = {},
      P = function P() {
    var t = A;t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), A = t);var e = t.getAttribute("data-tether-id");return "undefined" == typeof S[e] && (S[e] = i(t), M(function () {
      delete S[e];
    })), S[e];
  },
      W = [],
      M = function M(t) {
    W.push(t);
  },
      _ = function _() {
    for (var t = void 0; t = W.pop();) {
      t();
    }
  },
      k = function () {
    function t() {
      n(this, t);
    }return E(t, [{ key: "on", value: function value(t, e, o) {
        var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];"undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: o, once: n });
      } }, { key: "once", value: function value(t, e, o) {
        this.on(t, e, o, !0);
      } }, { key: "off", value: function value(t, e) {
        if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) {
          this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
        }
      } }, { key: "trigger", value: function value(t) {
        if ("undefined" != typeof this.bindings && this.bindings[t]) {
          for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) {
            n[i - 1] = arguments[i];
          }for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                l = a;"undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      } }]), t;
  }();x.Utils = { getActualBoundingClientRect: i, getScrollParents: r, getBounds: a, getOffsetParent: f, extend: h, addClass: d, removeClass: u, hasClass: p, updateClasses: m, defer: M, flush: _, uniqueId: T, Evented: k, getScrollBarSize: l, removeUtilElements: s };var B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }return o;
    }return function (e, o) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      E = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }return function (e, o, n) {
      return o && t(e.prototype, o), n && t(e, n), e;
    };
  }(),
      z = function z(t, e, o) {
    for (var n = !0; n;) {
      var i = t,
          r = e,
          s = o;n = !1, null === i && (i = Function.prototype);var a = Object.getOwnPropertyDescriptor(i, r);if (void 0 !== a) {
        if ("value" in a) return a.value;var f = a.get;if (void 0 === f) return;return f.call(s);
      }var l = Object.getPrototypeOf(i);if (null === l) return;t = l, e = r, o = s, n = !0, a = l = void 0;
    }
  };if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");var j = x.Utils,
      r = j.getScrollParents,
      a = j.getBounds,
      f = j.getOffsetParent,
      h = j.extend,
      d = j.addClass,
      u = j.removeClass,
      m = j.updateClasses,
      M = j.defer,
      _ = j.flush,
      l = j.getScrollBarSize,
      s = j.removeUtilElements,
      Y = function () {
    if ("undefined" == typeof document) return "";for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
      var n = e[o];if (void 0 !== t.style[n]) return n;
    }
  }(),
      L = [],
      D = function D() {
    L.forEach(function (t) {
      t.position(!1);
    }), _();
  };!function () {
    var t = null,
        e = null,
        o = null,
        n = function i() {
      return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(i, 250))) : void ("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), D(), e = b() - t));
    };"undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, n);
    });
  }();var X = { center: "center", left: "right", right: "left" },
      F = { middle: "middle", top: "bottom", bottom: "top" },
      H = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
      N = function N(t, e) {
    var o = t.left,
        n = t.top;return "auto" === o && (o = X[e.left]), "auto" === n && (n = F[e.top]), { left: o, top: n };
  },
      U = function U(t) {
    var e = t.left,
        o = t.top;return "undefined" != typeof H[t.left] && (e = H[t.left]), "undefined" != typeof H[t.top] && (o = H[t.top]), { left: e, top: o };
  },
      V = function V(t) {
    var e = t.split(" "),
        o = B(e, 2),
        n = o[0],
        i = o[1];return { top: n, left: i };
  },
      R = V,
      q = function (t) {
    function e(t) {
      var o = this;n(this, e), z(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
        "undefined" != typeof t.initialize && t.initialize.call(o);
      }), this.position();
    }return v(e, t), E(e, [{ key: "getClass", value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      } }, { key: "setOptions", value: function value(t) {
        var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
            n = { offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" };this.options = h(n, t);var i = this.options,
            s = i.element,
            a = i.target,
            f = i.targetModifier;if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");"undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o);
      } }, { key: "getTargetBounds", value: function value() {
        if ("undefined" == typeof this.targetModifier) return a(this.target);if ("visible" === this.targetModifier) {
          if (this.target === document.body) return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };var t = a(this.target),
              e = { height: t.height, width: t.width, top: t.top, left: t.left };return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
        }if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              o = this.target;o === document.body ? (o = document.documentElement, t = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : t = a(o);var n = getComputedStyle(o),
              i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              r = 0;i && (r = 15);var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
              e = { width: 15, height: .975 * s * (s / o.scrollHeight), left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15 },
              f = 0;408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));var l = this.target.scrollTop / (o.scrollHeight - s);return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
        }
      } }, { key: "clearCache", value: function value() {
        this._cache = {};
      } }, { key: "cache", value: function value(t, e) {
        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      } }, { key: "enable", value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
          e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
        }), e && this.position();
      } }, { key: "disable", value: function value() {
        var t = this;u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.position);
        });
      } }, { key: "destroy", value: function value() {
        var t = this;this.disable(), L.forEach(function (e, o) {
          e === t && L.splice(o, 1);
        }), 0 === L.length && s();
      } }, { key: "updateAttachClasses", value: function value(t, e) {
        var o = this;t = t || this.attachment, e = e || this.targetAttachment;var n = ["left", "top", "bottom", "right", "middle", "center"];"undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);var i = this._addAttachClasses;t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);var r = [];n.forEach(function (t) {
          r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
        }), M(function () {
          "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
        });
      } }, { key: "position", value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];if (this.enabled) {
          this.clearCache();var o = N(this.targetAttachment, this.attachment);this.updateAttachClasses(this.attachment, o);var n = this.cache("element-bounds", function () {
            return a(t.element);
          }),
              i = n.width,
              r = n.height;if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
            var s = this.lastSize;i = s.width, r = s.height;
          } else this.lastSize = { width: i, height: r };var h = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
              u = h,
              d = C(U(this.attachment), { width: i, height: r }),
              p = C(U(o), u),
              c = C(this.offset, { width: i, height: r }),
              g = C(this.targetOffset, u);d = w(d, c), p = w(p, g);for (var m = h.left + p.left - d.left, v = h.top + p.top - d.top, y = 0; y < x.modules.length; ++y) {
            var b = x.modules[y],
                O = b.position.call(this, { left: m, top: v, targetAttachment: o, targetPos: h, elementPos: n, offset: d, targetOffset: p, manualOffset: c, manualTargetOffset: g, scrollbarSize: S, attachment: this.attachment });if (O === !1) return !1;"undefined" != typeof O && "object" == (typeof O === "undefined" ? "undefined" : _typeof(O)) && (v = O.top, m = O.left);
          }var E = { page: { top: v, left: m }, viewport: { top: v - pageYOffset, bottom: pageYOffset - v - r + innerHeight, left: m - pageXOffset, right: pageXOffset - m - i + innerWidth } },
              A = this.target.ownerDocument,
              T = A.defaultView,
              S = void 0;return A.body.scrollWidth > T.innerWidth && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), A.body.scrollHeight > T.innerHeight && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
            var e = t.cache("target-offsetparent", function () {
              return f(t.target);
            }),
                o = t.cache("target-offsetparent-bounds", function () {
              return a(e);
            }),
                n = getComputedStyle(e),
                i = o,
                r = {};if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
              r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
            }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
              var s = e.scrollTop,
                  l = e.scrollLeft;E.offset = { top: E.page.top - o.top + s - r.top, left: E.page.left - o.left + l - r.left };
            }
          }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0;
        }
      } }, { key: "move", value: function value(t) {
        var e = this;if ("undefined" != typeof this.element.parentNode) {
          var o = {};for (var n in t) {
            o[n] = {};for (var i in t[n]) {
              for (var r = !1, s = 0; s < this.history.length; ++s) {
                var a = this.history[s];if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
                  r = !0;break;
                }
              }r || (o[n][i] = !0);
            }
          }var l = { top: "", left: "", right: "", bottom: "" },
              u = function u(t, o) {
            var n = "undefined" != typeof e.options.optimizations,
                i = n ? e.options.optimizations.gpu : null;if (i !== !1) {
              var r = void 0,
                  s = void 0;t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[Y] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== Y && (l[Y] += " translateZ(0)");
            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
          },
              d = !1;if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", u(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", u(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
            l.position = "absolute";var n = e.cache("target-offsetparent", function () {
              return f(e.target);
            });f(e.element) !== n && M(function () {
              e.element.parentNode.removeChild(e.element), n.appendChild(e.element);
            }), u(o.offset, t.offset), d = !0;
          }() : (l.position = "absolute", u({ top: !0, left: !0 }, t.page)), !d) {
            for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
              if ("static" !== getComputedStyle(c).position) {
                p = !1;break;
              }c = c.parentNode;
            }p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
          }var g = {},
              m = !1;for (var i in l) {
            var v = l[i],
                b = this.element.style[i];b !== v && (m = !0, g[i] = v);
          }m && M(function () {
            h(e.element.style, g);
          });
        }
      } }]), e;
  }(k);q.modules = [], x.position = D;var I = h(q, x),
      B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }return o;
    }return function (e, o) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      j = x.Utils,
      a = j.getBounds,
      h = j.extend,
      m = j.updateClasses,
      M = j.defer,
      $ = ["left", "top", "right", "bottom"];x.modules.push({ position: function position(t) {
      var e = this,
          o = t.top,
          n = t.left,
          i = t.targetAttachment;if (!this.options.constraints) return !0;var r = this.cache("element-bounds", function () {
        return a(e.element);
      }),
          s = r.height,
          f = r.width;if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;f = l.width, s = l.height;
      }var u = this.cache("target-bounds", function () {
        return e.getTargetBounds();
      }),
          d = u.height,
          p = u.width,
          c = [this.getClass("pinned"), this.getClass("out-of-bounds")];this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            o = t.pinnedClass;e && c.push(e), o && c.push(o);
      }), c.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          c.push(t + "-" + e);
        });
      });var g = [],
          v = h({}, i),
          y = h({}, this.attachment);return this.options.constraints.forEach(function (t) {
        var r = t.to,
            a = t.attachment,
            l = t.pin;"undefined" == typeof a && (a = "");var h = void 0,
            u = void 0;if (a.indexOf(" ") >= 0) {
          var c = a.split(" "),
              m = B(c, 2);u = m[0], h = m[1];
        } else h = u = a;var b = O(e, r);("target" === u || "both" === u) && (o < b[1] && "top" === v.top && (o += d, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= d, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += d, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - d) >= b[1] && (o -= s - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= d, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - d) <= b[3] && (o += s - d, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === u || "both" === u) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
          return t.trim();
        }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];var w = [],
            C = [];o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && !function () {
          var t = void 0;t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function (e) {
            g.push(t + "-" + e);
          });
        }(), C.length && !function () {
          var t = void 0;t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function (e) {
            g.push(t + "-" + e);
          });
        }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", { attachment: y, targetAttachment: v }));
      }), M(function () {
        e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c);
      }), { top: o, left: n };
    } });var j = x.Utils,
      a = j.getBounds,
      m = j.updateClasses,
      M = j.defer;x.modules.push({ position: function position(t) {
      var e = this,
          o = t.top,
          n = t.left,
          i = this.cache("element-bounds", function () {
        return a(e.element);
      }),
          r = i.height,
          s = i.width,
          f = this.getTargetBounds(),
          l = o + r,
          h = n + s,
          u = [];o <= f.bottom && l >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];(e === n || e === h) && u.push(t);
      }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];(e === o || e === l) && u.push(t);
      });var d = [],
          p = [],
          c = ["left", "top", "right", "bottom"];return d.push(this.getClass("abutted")), c.forEach(function (t) {
        d.push(e.getClass("abutted") + "-" + t);
      }), u.length && p.push(this.getClass("abutted")), u.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t);
      }), M(function () {
        e.options.addTargetClasses !== !1 && m(e.target, p, d), m(e.element, p, d);
      }), !0;
    } });var B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }return o;
    }return function (e, o) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();return x.modules.push({ position: function position(t) {
      var e = t.top,
          o = t.left;if (this.options.shift) {
        var n = this.options.shift;"function" == typeof this.options.shift && (n = this.options.shift.call(this, { top: e, left: o }));var i = void 0,
            r = void 0;if ("string" == typeof n) {
          n = n.split(" "), n[1] = n[1] || n[0];var s = n,
              a = B(s, 2);i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10);
        } else i = n.top, r = n.left;return e += i, o += r, { top: e, left: o };
      }
    } }), I;
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
        }
      }

      this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.NEXT);
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.PREVIOUS);
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREVIOUS;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREVIOUS ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error("No method named \"" + action + "\"");
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.card > .show, .card > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if ($(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;
      this._element.setAttribute('aria-expanded', true);

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if (!$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();
      var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = this._element[offsetDimension] + "px";

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      this._element.setAttribute('aria-expanded', false);

      if (this._triggerArray.length) {
        $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);
        element.setAttribute('aria-expanded', isOpen);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUSIN_DATA_API: "focusin" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    BACKDROP: 'dropdown-backdrop',
    DISABLED: 'disabled',
    SHOW: 'show'
  };

  var Selector = {
    BACKDROP: '.dropdown-backdrop',
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    ROLE_MENU: '[role="menu"]',
    ROLE_LISTBOX: '[role="listbox"]',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = function () {
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return false;
      }

      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

        // if mobile we use a backdrop because click events don't delegate
        var dropdown = document.createElement('div');
        dropdown.className = ClassName.BACKDROP;
        $(dropdown).insertBefore(this);
        $(dropdown).on('click', Dropdown._clearMenus);
      }

      var relatedTarget = {
        relatedTarget: this
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return false;
      }

      this.focus();
      this.setAttribute('aria-expanded', true);

      $(parent).toggleClass(ClassName.SHOW);
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

      return false;
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle);
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Dropdown(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config].call(this);
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
        return;
      }

      var backdrop = $(Selector.BACKDROP)[0];
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'focusin') && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && event.which !== ESCAPE_KEYCODE || isActive && event.which === ESCAPE_KEYCODE) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.FOCUSIN_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this9 = this;

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this9.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this9._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this9._element)) {
            _this9._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this9._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this10 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this10._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._originalBodyPadding = null;
      this._scrollbarWidth = null;
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this11 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this11._config.focus) {
          _this11._element.focus();
        }
        _this11._isTransitioning = false;
        $(_this11._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this12 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this12._element !== event.target && !$(_this12._element).has(event.target).length) {
          _this12._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this13 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            _this13.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this14 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this14._handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this15 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', 'true');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this15._resetAdjustments();
        _this15._resetScrollbar();
        $(_this15._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this16 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this16._ignoreBackdropClick) {
            _this16._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this16._config.backdrop === 'static') {
            _this16._element.focus();
          } else {
            _this16.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this16._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._handleUpdate = function _handleUpdate() {
      this._adjustDialog();
    };

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

      this._originalBodyPadding = document.body.style.paddingRight || '';

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + "px";
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding;
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this17 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this17).is(':visible')) {
          _this17.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/* global Tether */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Tether dependency
   * Tether - http://tether.io/
   */
  if (typeof Tether === 'undefined') {
    throw new Error('Bootstrap tooltips require Tether (http://tether.io/)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tether';

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: '0 0',
    constraints: [],
    container: false
  };

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: 'string',
    constraints: 'array',
    container: '(string|element|boolean)'
  };

  var AttachmentMap = {
    TOP: 'bottom center',
    RIGHT: 'middle left',
    BOTTOM: 'top center',
    LEFT: 'middle right'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner'
  };

  var TetherClass = {
    element: false,
    enabled: false
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._isTransitioning = false;
      this._tether = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      this.cleanupTether();

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      this._tether = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this18 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        if (this._isTransitioning) {
          throw new Error('Tooltip is transitioning');
        }
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this).appendTo(container);

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._tether = new Tether({
          attachment: attachment,
          element: tip,
          target: this.element,
          classes: TetherClass,
          classPrefix: CLASS_PREFIX,
          offset: this.config.offset,
          constraints: this.config.constraints,
          addTargetClasses: false
        });

        Util.reflow(tip);
        this._tether.position();

        $(tip).addClass(ClassName.SHOW);

        var complete = function complete() {
          var prevHoverState = _this18._hoverState;
          _this18._hoverState = null;
          _this18._isTransitioning = false;

          $(_this18.element).trigger(_this18.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this18._leave(null, _this18);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
          return;
        }

        complete();
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this19 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      if (this._isTransitioning) {
        throw new Error('Tooltip is transitioning');
      }
      var complete = function complete() {
        if (_this19._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this19.element.removeAttribute('aria-describedby');
        $(_this19.element).trigger(_this19.constructor.Event.HIDDEN);
        _this19._isTransitioning = false;
        _this19.cleanupTether();

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);

      this.cleanupTether();
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    Tooltip.prototype.cleanupTether = function cleanupTether() {
      if (this._tether) {
        this._tether.destroy();
      }
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this20 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this20.element).on(_this20.constructor.Event.CLICK, _this20.config.selector, function (event) {
            return _this20.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this20.constructor.Event.MOUSEENTER : _this20.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this20.constructor.Event.MOUSELEAVE : _this20.constructor.Event.FOCUSOUT;

          $(_this20.element).on(eventIn, _this20.config.selector, function (event) {
            return _this20._enter(event);
          }).on(eventOut, _this20.config.selector, function (event) {
            return _this20._leave(event);
          });
        }

        $(_this20.element).closest('.modal').on('hide.bs.modal', function () {
          return _this20.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
  });

  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TITLE: '.popover-title',
    CONTENT: '.popover-content'
  };

  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
    }

    // overrides

    Popover.prototype.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    Popover.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Popover.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);

      this.cleanupTether();
    };

    // private

    Popover.prototype._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    // static

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",


      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)',
    children: 'string'
  };

  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    NAV_LINK: 'nav-link',
    NAV: 'nav',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    LIST_ITEM: '.list-item',
    LI: 'li',
    LI_DROPDOWN: 'li.dropdown',
    NAV_LINKS: '.nav-link',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this22 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.children ? this._config.target + " " + this._config.children : this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this22._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this23 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target && (target.offsetWidth || target.offsetHeight)) {
          // todo (fat): remove sketch reliance on jQuery position/offset
          return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this23._offsets.push(item[0]);
        _this23._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // todo (fat) this is kinda sus...
        // recursively add actives to tested nav-links
        var parents = $link.parents(Selector.LI);
        parents.each(function () {
          $(this).find('> .nav-link').addClass(ClassName.ACTIVE);
        });
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    LIST: 'ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)',
    FADE_CHILD: '> .nav-item .fade, > .fade',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> .nav-item > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this24 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.LIST)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this24._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this24._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeClass(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this25 = this;

      var active = $(container).find(Selector.ACTIVE_CHILD)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

      var complete = function complete() {
        return _this25._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery)

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+ function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);

    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

    this.$element = $(element);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;

    this.checkPosition();
  };

  Affix.VERSION = '3.3.6';

  Affix.RESET = 'affix affix-top affix-bottom';

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }

    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;

    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

    return false;
  };

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;

    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = Math.max($(document).height(), $(document.body).height());

    if ((typeof offset === "undefined" ? "undefined" : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');

      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');

      this.$element.trigger(e);

      if (e.isDefaultPrevented()) return;

      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  };

  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;

  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;

  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };

  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();

      data.offset = data.offset || {};

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;

      Plugin.call($spy, data);
    });
  });
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): enter.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Enter = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'enter';
  var DATA_KEY = 'bs.enter';
  var VERSION = 'v4.0.0-alpha.6';
  var DATA_API = '[data-transition="entrance"]';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Event = {
    SCROLL: "scroll" + EVENT_KEY,
    ENTER: "enter" + EVENT_KEY
  };

  var Default = {
    easing: 'cubic-bezier(.2,.7,.5,1)',
    duration: 1200,
    delay: 0
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Enter = function () {
    function Enter(element, config) {
      _classCallCheck(this, Enter);

      if (!Util.supportsTransitionEnd()) return;

      this._element = element;
      this._config = config;
      this._handler = null;
      this._listener = null;

      this._addEventListeners();
    }

    // getters

    // public

    Enter.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._element = null;
      this._config = null;
      this._handler = null;
      this._listener = null;
    };

    // private

    Enter.prototype._addEventListeners = function _addEventListeners() {
      var boundScrollHandler = $.proxy(this._checkForEnter, this);
      this._handler = function () {
        window.requestAnimationFrame(boundScrollHandler);
      };
      this._listener = $(window).on(Event.SCROLL, this._handler);
      this._checkForEnter();
    };

    Enter.prototype._removeEventListeners = function _removeEventListeners() {
      $(window).off(Event.SCROLL, this._handler);
    };

    Enter.prototype._checkForEnter = function _checkForEnter() {
      var windowHeight = window.innerHeight;
      var rect = this._element.getBoundingClientRect();

      if (windowHeight - rect.top >= 0) {
        setTimeout($.proxy(this._triggerEntrance, this), this._config.delay);
      }
    };

    Enter.prototype._triggerEntrance = function _triggerEntrance() {
      this._removeEventListeners();

      $(this._element).css({ '-webkit-transition': '-webkit-transform ' + this._config.duration + 'ms ' + this._config.easing,
        '-ms-transition': '-ms-transform ' + this._config.duration + 'ms ' + this._config.easing,
        'transition': 'transform ' + this._config.duration + 'ms ' + this._config.easing
      }).css({ '-webkit-transform': 'none',
        '-ms-transform': 'none',
        'transform': 'none'
      }).trigger(Event.ENTER);
    };

    // static

    Enter._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) == 'object' && config);

        if (!data) $this.data(DATA_KEY, data = new Enter(this, _config));
        if (typeof config == 'string') data[config]();
      });
    };

    _createClass(Enter, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Enter;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Enter._jQueryInterface;
  $.fn[NAME].Constructor = Enter;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Enter._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(function () {
    $(DATA_API).enter();
  });

  return Enter;
}(jQuery);

var heroscroll = function ($) {

  var elementSelector = ".scrolling-hero-text";
  var index = 0;

  var updateText = function updateText() {
    var elements = $(elementSelector + " ul li").length;
    var height = $(elementSelector + " ul li").first().height();

    index += 1;
    if (index == elements) {
      index = 0;
    }
    $(elementSelector + " ul").css("top", "-" + index * height + "px");
    setTimeout();
  };

  $(function () {
    if ($(elementSelector).length) {
      setInterval(updateText, 3000);
    }
  });
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): ImageGrid.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ImageGrid = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'imageGrid';
  var DATA_KEY = "bs.image-grid";
  var VERSION = 'v4.0.0-alpha.6';
  var DATA_API = '[data-grid="images"]';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    padding: 10,
    targetHeight: 300,
    display: 'inline-block'
  };

  var Event = {
    RESIZE: "resize" + EVENT_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ImageGrid = function () {
    function ImageGrid(element, config) {
      _classCallCheck(this, ImageGrid);

      this._cleanWhitespace(element);

      this._row = 0;
      this._rownum = 1;
      this._elements = [];
      this._element = element;
      this._albumWidth = $(element).width();
      this._images = $(element).children();
      this._config = $.extend({}, Default, config);

      $(window).on(Event.RESIZE, $.proxy(this._handleResize, this));

      this._processImages();
    }

    // public

    ImageGrid.prototype.dispose = function dispose() {
      $(window).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._row = null;
      this._rownum = null;
      this._elements = null;
      this._element = null;
      this._albumWidth = null;
      this._images = null;
      this._config = null;
    };

    // private

    ImageGrid.prototype._handleResize = function _handleResize() {
      this._row = 0;
      this._rownum = 1;
      this._elements = [];
      this._albumWidth = $(this._element).width();
      this._images = $(this._element).children();
      this._processImages();
    };

    ImageGrid.prototype._processImages = function _processImages() {
      var that = this;
      this._images.each(function (index) {
        var $this = $(this);
        var $img = $this.is('img') ? $this : $this.find('img');

        var w = typeof $img.data('width') !== 'undefined' ? $img.data('width') : $img.width();

        var h = typeof $img.data('height') !== 'undefined' ? $img.data('height') : $img.height();

        $img.data('width', w);
        $img.data('height', h);

        var idealW = Math.ceil(w / h * that._config.targetHeight);
        var idealH = Math.ceil(that._config.targetHeight);

        that._elements.push([this, idealW, idealH]);

        that._row += idealW + that._config.padding;

        if (that._row > that._albumWidth && that._elements.length) {
          that._resizeRow(that._row - that._config.padding);

          that._row = 0;
          that._elements = [];
          that._rownum += 1;
        }

        if (that._images.length - 1 == index && that._elements.length) {
          that._resizeRow(that._row);

          that._row = 0;
          that._elements = [];
          that._rownum += 1;
        }
      });
    };

    ImageGrid.prototype._resizeRow = function _resizeRow(row) {
      var imageExtras = this._config.padding * (this._elements.length - 1);
      var albumWidthAdjusted = this._albumWidth - imageExtras;
      var overPercent = albumWidthAdjusted / (row - imageExtras);
      var trackWidth = imageExtras;
      var lastRow = row < this._albumWidth;

      for (var i = 0; i < this._elements.length; i++) {
        var $obj = $(this._elements[i][0]);
        var fw = Math.floor(this._elements[i][1] * overPercent);
        var fh = Math.floor(this._elements[i][2] * overPercent);
        var isNotLast = i < this._elements.length - 1;

        trackWidth += fw;

        if (!isNotLast && trackWidth < this._albumWidth) {
          fw += this._albumWidth - trackWidth;
        }

        fw--;

        var $img = $obj.is('img') ? $obj : $obj.find('img');

        $img.width(fw);
        $img.height(fh);

        this._applyModifications($obj, isNotLast);
      }
    };

    ImageGrid.prototype._applyModifications = function _applyModifications($obj, isNotLast) {
      var css = {
        'margin-bottom': this._config.padding + 'px',
        'margin-right': isNotLast ? this._config.padding + 'px' : 0,
        'display': this._config.display,
        'vertical-align': 'bottom'
      };
      $obj.css(css);
    };

    ImageGrid.prototype._cleanWhitespace = function _cleanWhitespace(element) {
      var textNodes = $(element).contents().filter(function () {
        return this.nodeType == 3 && !/\S/.test(this.nodeValue);
      }).remove();
    };

    // static

    ImageGrid._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var config = $.extend({}, Default, $this.data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config);

        if (!data) $this.data(DATA_KEY, data = new ImageGrid(this, config));
        if (typeof config === 'string') data[config].call($this);
      });
    };

    return ImageGrid;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ImageGrid._jQueryInterface;
  $.fn[NAME].Constructor = ImageGrid;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Enter._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(function () {
    $(DATA_API).imageGrid();
  });

  return ImageGrid;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): ImageGrid.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var loaded = function ($) {

  $(function () {
    $('body').addClass('loaded');
  });
}(jQuery);
/*
 * Adds a stylised Google Map showing the Zoetrope office location
 * in place of a div with the ID 'map-canvas'.
 */

// Google Map for special section
var map;
var zoetrope_hq = new google.maps.LatLng(51.4602797, -2.6129449);
var map_id = 'map-canvas';
function initialize() {

  if (!document.getElementById(map_id)) {
    return;
  }

  var featureOpts = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#222222"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 45
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#283c4f"
    }, {
      "visibility": "on"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#ffffff" }]
  }];

  // Set some basic options.
  var mapOptions = {
    zoom: 8,
    center: zoetrope_hq,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, map_id]
    },
    mapTypeId: map_id,
    disableDefaultUI: true,
    zoomControl: true
  };

  // Just mobile settings
  var offset_zoetrope_hq = new google.maps.LatLng(51.452492, -2.577304);
  if ($(window).width() < 768) {
    mapOptions.draggable = false;
    mapOptions.center = offset_zoetrope_hq;
  }

  map = new google.maps.Map(document.getElementById(map_id), mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  // Add a marker to the map
  var zoetrope_icon = '/assets/img/map-marker.png';
  var marker = new MarkerWithLabel({
    position: zoetrope_hq,
    map: map,
    title: "Zoetrope",
    animation: google.maps.Animation.DROP,
    icon: zoetrope_icon,
    labelContent: "<span>Zoetrope</span></br>26B Oakfield Road</br>Bristol</br>BS8 2AT",
    labelAnchor: new google.maps.Point(100, -30),
    labelClass: "marker-label",
    labelStyle: { opacity: 0.75 }
  });

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(map_id, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

/**
 * @name MarkerWithLabel for V3
 * @version 1.1.9 [March 6, 2014]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global document,google */

/**
 * @param {Function} childCtor Child class.
 * @param {Function} parentCtor Parent class.
 * @private
 */
function inherits(childCtor, parentCtor) {
  /* @constructor */
  function tempCtor() {}
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /* @override */
  childCtor.prototype.constructor = childCtor;
}

/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;

  this.labelDiv_ = document.createElement("div");
  this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";

  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
  // Code is included here to ensure the veil is always exactly the same size as the label.
  this.eventDiv_ = document.createElement("div");
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;

  // This is needed for proper behavior on MSIE:
  this.eventDiv_.setAttribute("onselectstart", "return false;");
  this.eventDiv_.setAttribute("ondragstart", "return false;");

  // Get the DIV for the "X" to be displayed when the marker is raised.
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}

inherits(MarkerLabel_, google.maps.OverlayView);

/**
 * Returns the DIV for the cross used when dragging a marker when the
 * raiseOnDrag parameter set to true. One cross is shared with all markers.
 * @param {string} crossURL The URL of the cross image =.
 * @private
 */
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
    div = document.createElement("img");
    div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
    // Hopefully Google never changes the standard "X" attributes:
    div.style.marginLeft = "-8px";
    div.style.marginTop = "-9px";
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};

/**
 * Adds the DIV representing the label to the DOM. This method is called
 * automatically when the marker's <code>setMap</code> method is called.
 * @private
 */
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  // Constants:
  var cRaiseOffset = 20;
  var cDraggingCursor = "url(" + this.handCursorURL_ + ")";

  // Stops all processing of an event.
  //
  var cAbortEvent = function cAbortEvent(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  var cStopBounce = function cStopBounce() {
    me.marker_.setAnimation(null);
  };

  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  // One cross is shared with all markers, so only add it once:
  if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }

  this.listeners_ = [google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
    if (me.marker_.getDraggable() || me.marker_.getClickable()) {
      this.style.cursor = "pointer";
      google.maps.event.trigger(me.marker_, "mouseover", e);
    }
  }), google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
    if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
      this.style.cursor = me.marker_.getCursor();
      google.maps.event.trigger(me.marker_, "mouseout", e);
    }
  }), google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
    cDraggingLabel = false;
    if (me.marker_.getDraggable()) {
      cMouseIsDown = true;
      this.style.cursor = cDraggingCursor;
    }
    if (me.marker_.getDraggable() || me.marker_.getClickable()) {
      google.maps.event.trigger(me.marker_, "mousedown", e);
      cAbortEvent(e); // Prevent map pan when starting a drag on a label
    }
  }), google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
    var position;
    if (cMouseIsDown) {
      cMouseIsDown = false;
      me.eventDiv_.style.cursor = "pointer";
      google.maps.event.trigger(me.marker_, "mouseup", mEvent);
    }
    if (cDraggingLabel) {
      if (cRaiseEnabled) {
        // Lower the marker & label
        position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
        position.y += cRaiseOffset;
        me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
        // This is not the same bouncing style as when the marker portion is dragged,
        // but it will have to do:
        try {
          // Will fail if running Google Maps API earlier than V3.3
          me.marker_.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(cStopBounce, 1406);
        } catch (e) {}
      }
      me.crossDiv_.style.display = "none";
      me.marker_.setZIndex(cSavedZIndex);
      cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
      cDraggingLabel = false;
      mEvent.latLng = me.marker_.getPosition();
      google.maps.event.trigger(me.marker_, "dragend", mEvent);
    }
  }), google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
    var position;
    if (cMouseIsDown) {
      if (cDraggingLabel) {
        // Change the reported location from the mouse position to the marker position:
        mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
        position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
        if (cRaiseEnabled) {
          me.crossDiv_.style.left = position.x + "px";
          me.crossDiv_.style.top = position.y + "px";
          me.crossDiv_.style.display = "";
          position.y -= cRaiseOffset;
        }
        me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
        if (cRaiseEnabled) {
          // Don't raise the veil; this hack needed to make MSIE act properly
          me.eventDiv_.style.top = position.y + cRaiseOffset + "px";
        }
        google.maps.event.trigger(me.marker_, "drag", mEvent);
      } else {
        // Calculate offsets from the click point to the marker position:
        cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
        cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
        cSavedZIndex = me.marker_.getZIndex();
        cStartPosition = me.marker_.getPosition();
        cStartCenter = me.marker_.getMap().getCenter();
        cRaiseEnabled = me.marker_.get("raiseOnDrag");
        cDraggingLabel = true;
        me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, "dragstart", mEvent);
      }
    }
  }), google.maps.event.addDomListener(document, "keydown", function (e) {
    if (cDraggingLabel) {
      if (e.keyCode === 27) {
        // Esc key
        cRaiseEnabled = false;
        me.marker_.setPosition(cStartPosition);
        me.marker_.getMap().setCenter(cStartCenter);
        google.maps.event.trigger(document, "mouseup", e);
      }
    }
  }), google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
    if (me.marker_.getDraggable() || me.marker_.getClickable()) {
      if (cIgnoreClick) {
        // Ignore the click reported when a label drag ends
        cIgnoreClick = false;
      } else {
        google.maps.event.trigger(me.marker_, "click", e);
        cAbortEvent(e); // Prevent click from being passed on to map
      }
    }
  }), google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
    if (me.marker_.getDraggable() || me.marker_.getClickable()) {
      google.maps.event.trigger(me.marker_, "dblclick", e);
      cAbortEvent(e); // Prevent map zoom when double-clicking on a label
    }
  }), google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
    if (!cDraggingLabel) {
      cRaiseEnabled = this.get("raiseOnDrag");
    }
  }), google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
    if (!cDraggingLabel) {
      if (cRaiseEnabled) {
        me.setPosition(cRaiseOffset);
        // During a drag, the marker's z-index is temporarily set to 1000000 to
        // ensure it appears above all other markers. Also set the label's z-index
        // to 1000000 (plus or minus 1 depending on whether the label is supposed
        // to be above or below the marker).
        me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
      }
    }
  }), google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
    if (!cDraggingLabel) {
      if (cRaiseEnabled) {
        me.setPosition(0); // Also restores z-index of label
      }
    }
  }), google.maps.event.addListener(this.marker_, "position_changed", function () {
    me.setPosition();
  }), google.maps.event.addListener(this.marker_, "zindex_changed", function () {
    me.setZIndex();
  }), google.maps.event.addListener(this.marker_, "visible_changed", function () {
    me.setVisible();
  }), google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
    me.setVisible();
  }), google.maps.event.addListener(this.marker_, "title_changed", function () {
    me.setTitle();
  }), google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
    me.setContent();
  }), google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
    me.setAnchor();
  }), google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
    me.setStyles();
  }), google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
    me.setStyles();
  })];
};

/**
 * Removes the DIV for the label from the DOM. It also removes all event handlers.
 * This method is called automatically when the marker's <code>setMap(null)</code>
 * method is called.
 * @private
 */
MarkerLabel_.prototype.onRemove = function () {
  var i;
  this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  this.eventDiv_.parentNode.removeChild(this.eventDiv_);

  // Remove event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};

/**
 * Draws the label on the map.
 * @private
 */
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};

/**
 * Sets the content of the label.
 * The content can be plain text or an HTML DOM node.
 * @private
 */
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get("labelContent");
  if (typeof content.nodeType === "undefined") {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = ""; // Remove current content
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};

/**
 * Sets the content of the tool tip for the label. It is
 * always set to be the same as for the marker itself.
 * @private
 */
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || "";
};

/**
 * Sets the style of the label by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;

  // Apply style values from the style sheet defined in the labelClass parameter:
  this.labelDiv_.className = this.marker_.get("labelClass");
  this.eventDiv_.className = this.labelDiv_.className;

  // Clear existing inline style values:
  this.labelDiv_.style.cssText = "";
  this.eventDiv_.style.cssText = "";
  // Apply style values defined in the labelStyle parameter:
  labelStyle = this.marker_.get("labelStyle");
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  this.setMandatoryStyles();
};

/**
 * Sets the mandatory styles to the DIV representing the label as well as to the
 * associated event DIV. This includes setting the DIV position, z-index, and visibility.
 * @private
 */
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = "absolute";
  this.labelDiv_.style.overflow = "hidden";
  // Make sure the opacity setting causes the desired effect on MSIE:
  if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
    this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.labelDiv_.style.opacity * 100 + ")\"";
    this.labelDiv_.style.filter = "alpha(opacity=" + this.labelDiv_.style.opacity * 100 + ")";
  }

  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
  this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
  this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE

  this.setAnchor();
  this.setPosition(); // This also updates z-index, if necessary.
  this.setVisible();
};

/**
 * Sets the anchor point of the label.
 * @private
 */
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get("labelAnchor");
  this.labelDiv_.style.marginLeft = -anchor.x + "px";
  this.labelDiv_.style.marginTop = -anchor.y + "px";
  this.eventDiv_.style.marginLeft = -anchor.x + "px";
  this.eventDiv_.style.marginTop = -anchor.y + "px";
};

/**
 * Sets the position of the label. The z-index is also updated, if necessary.
 * @private
 */
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === "undefined") {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + "px";
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;

  this.setZIndex();
};

/**
 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
 * of the label is set to the vertical coordinate of the label. This is in keeping with the default
 * stacking order for Google Maps: markers to the south are in front of markers to the north.
 * @private
 */
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = this.marker_.get("labelInBackground") ? -1 : +1;
  if (typeof this.marker_.getZIndex() === "undefined") {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};

/**
 * Sets the visibility of the label. The label is visible only if the marker itself is
 * visible (i.e., its visible property is true) and the labelVisible property is true.
 * @private
 */
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get("labelVisible")) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
  } else {
    this.labelDiv_.style.display = "none";
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};

/**
 * @name MarkerWithLabelOptions
 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
 *  of the properties listed below. To change any of these additional properties after the labeled
 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
 *  <p>
 *  When any of these properties changes, a property changed event is fired. The names of these
 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
 *  is fired.
 *  <p>
 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
 *  that its top left corner is positioned at the anchor point of the associated marker. Use this
 *  property to change the anchor point of the label. For example, to center a 50px-wide label
 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
 *  (Note: x-values increase to the right and y-values increase to the top.)
 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the label. Style values defined here override those that may
 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
 *  label has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the label before the new style values are applied.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
 *  associated marker should appear in the background (i.e., in a plane below the marker).
 *  The default is <code>false</code>, which causes the label to appear in the foreground.
 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
 *  must be set to <code>false</code>.
 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
 *  so the value of this parameter is always forced to <code>false</code>.
 * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
 *  The URL of the cross image to be displayed while dragging a marker.
 * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
 *  The URL of the cursor to be displayed while dragging a marker.
 */
/**
 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
 * @constructor
 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
 */
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || "";
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || "markerLabels";
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  if (typeof opt_options.labelVisible === "undefined") {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === "undefined") {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === "undefined") {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === "undefined") {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === "undefined") {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
  opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
  opt_options.optimized = false; // Optimized rendering is not supported

  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker

  // Call the parent constructor. It calls Marker.setValues to initialize, so all
  // the new parameters are conveniently saved and can be accessed with get/set.
  // Marker.set triggers a property changed event (called "propertyname_changed")
  // that the marker label listens for in order to react to state changes.
  google.maps.Marker.apply(this, arguments);
}

inherits(MarkerWithLabel, google.maps.Marker);

/**
 * Overrides the standard Marker setMap function.
 * @param {Map} theMap The map to which the marker is to be added.
 * @private
 */
MarkerWithLabel.prototype.setMap = function (theMap) {

  // Call the inherited function...
  google.maps.Marker.prototype.setMap.apply(this, arguments);

  // ... then deal with the label:
  this.label.setMap(theMap);
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): stage.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Stage = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'stage';
  var DATA_KEY = 'bs.stage';
  var VERSION = 'v4.0.0-alpha.6';
  var DATA_API = '[data-toggle="stage"]';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Default = {
    easing: 'cubic-bezier(.2,.7,.5,1)',
    duration: 300,
    delay: 0,
    distance: 250,
    hiddenElements: '#sidebar'
  };

  var Event = {
    TOUCHMOVE: "touchmove" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    OPEN: "open" + EVENT_KEY,
    OPENED: "opened" + EVENT_KEY,
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    STAGE_OPEN: 'stage-open',
    HIDDEN: 'hidden'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Stage = function () {
    function Stage(element, config) {
      _classCallCheck(this, Stage);

      if (!Util.supportsTransitionEnd()) return;

      this._element = element;
      this._config = config;
    }

    // getters

    // private

    Stage.prototype._isOpen = function _isOpen() {
      return $(this._element).hasClass(ClassName.STAGE_OPEN);
    };

    Stage.prototype._complete = function _complete() {
      $(document.body).css('overflow', 'auto');

      if ('ontouchstart' in document.documentElement) {
        $(document).off(Event.TOUCHMOVE);
      }

      $(this._config.hiddenElements).addClass(ClassName.HIDDEN);

      $(this._element).removeClass(ClassName.STAGE_OPEN).css({
        '-webkit-transition': '',
        '-ms-transition': '',
        'transition': ''
      }).css({
        '-webkit-transform': '',
        '-ms-transform': '',
        'transform': ''
      }).trigger(Event.CLOSED);
    };

    // public

    Stage.prototype.toggle = function toggle() {
      if (this._isOpen()) {
        this.close();
      } else {
        this.open();
      }
    };

    Stage.prototype.open = function open() {
      var _this26 = this;

      $(document.body).css('overflow', 'hidden');

      if ('ontouchstart' in document.documentElement) {
        $(document).on(Event.TOUCHMOVE, function (e) {
          e.preventDefault();
        });
      }

      $(this._config.hiddenElements).removeClass(ClassName.HIDDEN);

      $(window).one(Event.KEYDOWN, $.proxy(function (e) {
        e.which == 27 && this.close();
      }, this));

      $(this._element).on(Event.CLICK, $.proxy(this.close, this)).trigger(Event.OPEN).addClass(ClassName.STAGE_OPEN);

      if (!Util.supportsTransitionEnd()) {
        $(this._element).css({
          'left': this._config.distance + 'px',
          'position': 'relative'
        }).trigger(Event.OPENED);
        return;
      }

      $(this._element).css({
        '-webkit-transition': '-webkit-transform ' + this._config.duration + 'ms ' + this._config.easing,
        '-ms-transition': '-ms-transform ' + this._config.duration + 'ms ' + this._config.easing,
        'transition': 'transform ' + this._config.duration + 'ms ' + this._config.easing
      });

      this._element.offsetWidth; // force reflow

      $(this._element).css({
        '-webkit-transform': 'translateX(' + this._config.distance + 'px)',
        '-ms-transform': 'translateX(' + this._config.distance + 'px)',
        'transform': 'translateX(' + this._config.distance + 'px)'
      }).one(Util.TRANSITION_END, function () {
        $(_this26._element).trigger(Event.OPENED);
      }).emulateTransitionEnd(this._config.duration);
    };

    Stage.prototype.close = function close() {
      $(window).off(Event.KEYDOWN);

      if (!Util.supportsTransitionEnd()) {
        $(this._element).trigger(Event.CLOSE).css({ 'left': '', 'position': '' }).off(Event.CLICK);

        return this._complete();
      }

      $(this._element).trigger(Event.CLOSE).off(Event.CLICK).css({
        '-webkit-transform': 'none',
        '-ms-transform': 'none',
        'transform': 'none'
      }).one(Util.TRANSITION_END, $.proxy(this._complete, this)).emulateTransitionEnd(this._config.duration);
    };

    // static

    Stage._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && config);

        if (!data) $this.data(DATA_KEY, data = new Stage(this, _config));
        if (typeof config === 'string') data[config]();
      });
    };

    _createClass(Stage, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Stage;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Stage._jQueryInterface;
  $.fn[NAME].Constructor = Stage;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Stage._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, DATA_API, function () {
    var config = $(this).data();
    var $target = $(this.getAttribute('data-target'));

    if (!$target.data(DATA_KEY)) {
      $target.stage(config);
    }

    $target.stage('toggle');
  });

  return Stage;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): zoom.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Zoom = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'zoom';
  var DATA_KEY = 'bs.zoom';
  var VERSION = 'v4.0.0-alpha.6';
  var DATA_API = '[data-action="zoom"]';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var ZOOM_OFFSET = 80;

  var Event = {
    CLICK: "click" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    KEYUP: "keyup" + EVENT_KEY,
    TOUCHSTART: "touchstart" + EVENT_KEY,
    TOUCHMOVE: "touchmove" + EVENT_KEY
  };

  var ClassName = {
    ZOOM_OVERLAY_OPEN: 'zoom-overlay-open',
    ZOOM_OVERLAY_TRANSITIONING: 'zoom-overlay-transitioning',
    ZOOM_OVERLAY: 'zoom-overlay',
    ZOOM_IMG_WRAP: 'zoom-img-wrap',
    ZOOM_IMG: 'zoom-img'
  };

  var Data = {
    ZOOM: 'zoom',
    ZOOM_OUT: 'zoom-out'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ZoomService = function () {
    function ZoomService(element, config) {
      _classCallCheck(this, ZoomService);

      this._activeZoom = null;
      this._initialScrollPosition = null;
      this._initialTouchPosition = null;
      this._touchMoveListener = null;

      this._$document = $(document);
      this._$window = $(window);
      this._$body = $(document.body);

      this._boundClick = $.proxy(this._clickHandler, this);
    }

    // getters

    ZoomService.prototype._zoom = function _zoom(e) {
      var target = e.target;

      if (!target || target.tagName !== 'IMG') return;

      if (this._$body.hasClass(ClassName.ZOOM_OVERLAY_OPEN)) return;

      if (e.metaKey || e.ctrlKey) {
        return window.open(e.target.getAttribute('data-original') || e.target.src, '_blank');
      }

      if (target.width >= $(window).width() - ZOOM_OFFSET) return;

      this._activeZoomClose(true);

      this._activeZoom = new Zoom(target);
      this._activeZoom.zoomImage();

      // todo(fat): probably worth throttling this
      this._$window.on(Event.SCROLL, $.proxy(this._scrollHandler, this));

      this._$document.on(Event.KEYUP, $.proxy(this._keyHandler, this));
      this._$document.on(Event.TOUCHSTART, $.proxy(this._touchStart, this));

      // we use a capturing phase here to prevent unintended js events
      // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
      if (document.addEventListener) {
        document.addEventListener('click', this._boundClick, true);
      } else {
        document.attachEvent('onclick', this._boundClick, true);
      }

      if ('bubbles' in e) {
        if (e.bubbles) e.stopPropagation();
      } else {
        // Internet Explorer before version 9
        e.cancelBubble = true;
      }
    };

    ZoomService.prototype._activeZoomClose = function _activeZoomClose(forceDispose) {
      if (!this._activeZoom) return;

      if (forceDispose) {
        this._activeZoom.dispose();
      } else {
        this._activeZoom.close();
      }

      this._$window.off(EVENT_KEY);
      this._$document.off(EVENT_KEY);

      document.removeEventListener('click', this._boundClick, true);

      this._activeZoom = null;
    };

    ZoomService.prototype._scrollHandler = function _scrollHandler(e) {
      if (this._initialScrollPosition === null) this._initialScrollPosition = $(window).scrollTop();
      var deltaY = this._initialScrollPosition - $(window).scrollTop();
      if (Math.abs(deltaY) >= 40) this._activeZoomClose();
    };

    ZoomService.prototype._keyHandler = function _keyHandler(e) {
      if (e.keyCode === 27) this._activeZoomClose();
    };

    ZoomService.prototype._clickHandler = function _clickHandler(e) {
      if (e.preventDefault) e.preventDefault();else event.returnValue = false;

      if ('bubbles' in e) {
        if (e.bubbles) e.stopPropagation();
      } else {
        // Internet Explorer before version 9
        e.cancelBubble = true;
      }

      this._activeZoomClose();
    };

    ZoomService.prototype._touchStart = function _touchStart(e) {
      this._initialTouchPosition = e.touches[0].pageY;
      $(e.target).on(Event.TOUCHMOVE, $.proxy(this._touchMove, this));
    };

    ZoomService.prototype._touchMove = function _touchMove(e) {
      if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
        this._activeZoomClose();
        $(e.target).off(Event.TOUCHMOVE);
      }
    };

    ZoomService.prototype.listen = function listen() {
      this._$body.on(Event.CLICK, DATA_API, $.proxy(this._zoom, this));
    };

    _createClass(ZoomService, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return ZoomService;
  }();

  var Zoom = function () {
    function Zoom(img) {
      _classCallCheck(this, Zoom);

      this._fullHeight = null;
      this._fullWidth = null;
      this._overlay = null;
      this._targetImageWrap = null;

      this._targetImage = img;

      this._$body = $(document.body);
    }

    Zoom.prototype.zoomImage = function zoomImage() {
      var img = document.createElement('img');
      img.onload = $.proxy(function () {
        this._fullHeight = Number(img.height);
        this._fullWidth = Number(img.width);
        this._zoomOriginal();
      }, this);
      img.src = this._targetImage.src;
    };

    Zoom.prototype._zoomOriginal = function _zoomOriginal() {
      this._targetImageWrap = document.createElement('div');
      this._targetImageWrap.className = ClassName.ZOOM_IMG_WRAP;

      this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage);
      this._targetImageWrap.appendChild(this._targetImage);

      $(this._targetImage).addClass(ClassName.ZOOM_IMG).attr('data-action', Data.ZOOM_OUT);

      this._overlay = document.createElement('div');
      this._overlay.className = ClassName.ZOOM_OVERLAY;

      document.body.appendChild(this._overlay);

      this._calculateZoom();
      this._triggerAnimation();
    };

    Zoom.prototype._calculateZoom = function _calculateZoom() {
      this._targetImage.offsetWidth; // repaint before animating

      var originalFullImageWidth = this._fullWidth;
      var originalFullImageHeight = this._fullHeight;

      var scrollTop = $(window).scrollTop();

      var maxScaleFactor = originalFullImageWidth / this._targetImage.width;

      var viewportHeight = $(window).height() - ZOOM_OFFSET;
      var viewportWidth = $(window).width() - ZOOM_OFFSET;

      var imageAspectRatio = originalFullImageWidth / originalFullImageHeight;
      var viewportAspectRatio = viewportWidth / viewportHeight;

      if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
        this._imgScaleFactor = maxScaleFactor;
      } else if (imageAspectRatio < viewportAspectRatio) {
        this._imgScaleFactor = viewportHeight / originalFullImageHeight * maxScaleFactor;
      } else {
        this._imgScaleFactor = viewportWidth / originalFullImageWidth * maxScaleFactor;
      }
    };

    Zoom.prototype._triggerAnimation = function _triggerAnimation() {
      this._targetImage.offsetWidth; // repaint before animating

      var imageOffset = $(this._targetImage).offset();
      var scrollTop = $(window).scrollTop();

      var viewportY = scrollTop + $(window).height() / 2;
      var viewportX = $(window).width() / 2;

      var imageCenterY = imageOffset.top + this._targetImage.height / 2;
      var imageCenterX = imageOffset.left + this._targetImage.width / 2;

      this._translateY = viewportY - imageCenterY;
      this._translateX = viewportX - imageCenterX;

      var targetTransform = 'scale(' + this._imgScaleFactor + ')';
      var imageWrapTransform = 'translate(' + this._translateX + 'px, ' + this._translateY + 'px)';

      if (!Util.supportsTransitionEnd()) {
        imageWrapTransform += ' translateZ(0)';
      }

      $(this._targetImage).css({
        '-webkit-transform': targetTransform,
        '-ms-transform': targetTransform,
        'transform': targetTransform
      });

      $(this._targetImageWrap).css({
        '-webkit-transform': imageWrapTransform,
        '-ms-transform': imageWrapTransform,
        'transform': imageWrapTransform
      });

      this._$body.addClass(ClassName.ZOOM_OVERLAY_OPEN);
    };

    Zoom.prototype.close = function close() {
      this._$body.removeClass(ClassName.ZOOM_OVERLAY_OPEN).addClass(ClassName.ZOOM_OVERLAY_TRANSITIONING);

      // we use setStyle here so that the correct vender prefix for transform is used
      $(this._targetImage).css({
        '-webkit-transform': '',
        '-ms-transform': '',
        'transform': ''
      });

      $(this._targetImageWrap).css({
        '-webkit-transform': '',
        '-ms-transform': '',
        'transform': ''
      });

      if (!Util.supportsTransitionEnd()) {
        return this.dispose();
      }

      $(this._targetImage).one(Util.TRANSITION_END, $.proxy(this.dispose, this)).emulateTransitionEnd(300);
    };

    Zoom.prototype.dispose = function dispose() {
      if (this._targetImageWrap && this._targetImageWrap.parentNode) {
        $(this._targetImage).removeClass(ClassName.ZOOM_IMG).attr('data-action', Data.ZOOM);

        this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap);
        this._overlay.parentNode.removeChild(this._overlay);

        this._$body.removeClass(ClassName.ZOOM_OVERLAY_TRANSITIONING);
      }
    };

    return Zoom;
  }();

  // wait for dom ready (incase script included before body)


  $(function () {
    new ZoomService().listen();
  });
}(jQuery);
}();
