/*! For license information please see home.98a724e6f74fc4f07704.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    o = {
      713: (e, t, n) => {
        n.d(t, { ZP: () => Bc });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function o(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        };
        function a(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        }
        function c(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            s((r = r.apply(e, t || [])).next());
          });
        }
        function s(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        }
        function u(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }
        function l(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
              (!r && o in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        var d =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
        function f(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e;
        }
        function h(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        var p,
          A,
          m = function (e) {
            return e && e.Math == Math && e;
          },
          g =
            m("object" == typeof globalThis && globalThis) ||
            m("object" == typeof window && window) ||
            m("object" == typeof self && self) ||
            m("object" == typeof d && d) ||
            (function () {
              return this;
            })() ||
            Function("return this")(),
          y = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          },
          b = !y(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          }),
          v = !y(function () {
            var e = function () {}.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype");
          }),
          C = Function.prototype.call,
          w = v
            ? C.bind(C)
            : function () {
                return C.apply(C, arguments);
              },
          k = {}.propertyIsEnumerable,
          x = Object.getOwnPropertyDescriptor,
          S =
            x && !k.call({ 1: 2 }, 1)
              ? function (e) {
                  var t = x(this, e);
                  return !!t && t.enumerable;
                }
              : k,
          E = { f: S },
          _ = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
          },
          I = Function.prototype,
          B = I.bind,
          O = I.call,
          j = v && B.bind(O, O),
          T = v
            ? function (e) {
                return e && j(e);
              }
            : function (e) {
                return (
                  e &&
                  function () {
                    return O.apply(e, arguments);
                  }
                );
              },
          L = T({}.toString),
          R = T("".slice),
          F = function (e) {
            return R(L(e), 8, -1);
          },
          W = Object,
          G = T("".split),
          Z = y(function () {
            return !W("z").propertyIsEnumerable(0);
          })
            ? function (e) {
                return "String" == F(e) ? G(e, "") : W(e);
              }
            : W,
          P = TypeError,
          N = function (e) {
            if (null == e) throw P("Can't call method on " + e);
            return e;
          },
          D = function (e) {
            return Z(N(e));
          },
          K = function (e) {
            return "function" == typeof e;
          },
          U = function (e) {
            return "object" == typeof e ? null !== e : K(e);
          },
          X = function (e) {
            return K(e) ? e : void 0;
          },
          Y = function (e, t) {
            return arguments.length < 2 ? X(g[e]) : g[e] && g[e][t];
          },
          z = T({}.isPrototypeOf),
          H = Y("navigator", "userAgent") || "",
          J = g.process,
          M = g.Deno,
          V = (J && J.versions) || (M && M.version),
          Q = V && V.v8;
        Q && (A = (p = Q.split("."))[0] > 0 && p[0] < 4 ? 1 : +(p[0] + p[1])),
          !A &&
            H &&
            (!(p = H.match(/Edge\/(\d+)/)) || p[1] >= 74) &&
            (p = H.match(/Chrome\/(\d+)/)) &&
            (A = +p[1]);
        var q = A,
          $ =
            !!Object.getOwnPropertySymbols &&
            !y(function () {
              var e = Symbol();
              return (
                !String(e) ||
                !(Object(e) instanceof Symbol) ||
                (!Symbol.sham && q && q < 41)
              );
            }),
          ee = $ && !Symbol.sham && "symbol" == typeof Symbol.iterator,
          te = Object,
          ne = ee
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                var t = Y("Symbol");
                return K(t) && z(t.prototype, te(e));
              },
          re = String,
          oe = function (e) {
            try {
              return re(e);
            } catch (e) {
              return "Object";
            }
          },
          ie = TypeError,
          ae = function (e) {
            if (K(e)) return e;
            throw ie(oe(e) + " is not a function");
          },
          ce = function (e, t) {
            var n = e[t];
            return null == n ? void 0 : ae(n);
          },
          se = TypeError,
          ue = Object.defineProperty,
          le = function (e, t) {
            try {
              ue(g, e, { value: t, configurable: !0, writable: !0 });
            } catch (n) {
              g[e] = t;
            }
            return t;
          },
          de = g["__core-js_shared__"] || le("__core-js_shared__", {}),
          fe = h(function (e) {
            (e.exports = function (e, t) {
              return de[e] || (de[e] = void 0 !== t ? t : {});
            })("versions", []).push({
              version: "3.23.2",
              mode: "global",
              copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
              license:
                "https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",
              source: "https://github.com/zloirock/core-js",
            });
          }),
          he = Object,
          pe = function (e) {
            return he(N(e));
          },
          Ae = T({}.hasOwnProperty),
          me =
            Object.hasOwn ||
            function (e, t) {
              return Ae(pe(e), t);
            },
          ge = 0,
          ye = Math.random(),
          be = T((1).toString),
          ve = function (e) {
            return (
              "Symbol(" + (void 0 === e ? "" : e) + ")_" + be(++ge + ye, 36)
            );
          },
          Ce = fe("wks"),
          we = g.Symbol,
          ke = we && we.for,
          xe = ee ? we : (we && we.withoutSetter) || ve,
          Se = function (e) {
            if (!me(Ce, e) || (!$ && "string" != typeof Ce[e])) {
              var t = "Symbol." + e;
              $ && me(we, e)
                ? (Ce[e] = we[e])
                : (Ce[e] = ee && ke ? ke(t) : xe(t));
            }
            return Ce[e];
          },
          Ee = TypeError,
          _e = Se("toPrimitive"),
          Ie = function (e) {
            var t = (function (e, t) {
              if (!U(e) || ne(e)) return e;
              var n,
                r = ce(e, _e);
              if (r) {
                if (
                  (void 0 === t && (t = "default"),
                  (n = w(r, e, t)),
                  !U(n) || ne(n))
                )
                  return n;
                throw Ee("Can't convert object to primitive value");
              }
              return (
                void 0 === t && (t = "number"),
                (function (e, t) {
                  var n, r;
                  if (
                    "string" === t &&
                    K((n = e.toString)) &&
                    !U((r = w(n, e)))
                  )
                    return r;
                  if (K((n = e.valueOf)) && !U((r = w(n, e)))) return r;
                  if (
                    "string" !== t &&
                    K((n = e.toString)) &&
                    !U((r = w(n, e)))
                  )
                    return r;
                  throw se("Can't convert object to primitive value");
                })(e, t)
              );
            })(e, "string");
            return ne(t) ? t : t + "";
          },
          Be = g.document,
          Oe = U(Be) && U(Be.createElement),
          je = function (e) {
            return Oe ? Be.createElement(e) : {};
          },
          Te =
            !b &&
            !y(function () {
              return (
                7 !=
                Object.defineProperty(je("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            }),
          Le = Object.getOwnPropertyDescriptor,
          Re = {
            f: b
              ? Le
              : function (e, t) {
                  if (((e = D(e)), (t = Ie(t)), Te))
                    try {
                      return Le(e, t);
                    } catch (e) {}
                  if (me(e, t)) return _(!w(E.f, e, t), e[t]);
                },
          },
          Fe =
            b &&
            y(function () {
              return (
                42 !=
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            }),
          We = String,
          Ge = TypeError,
          Ze = function (e) {
            if (U(e)) return e;
            throw Ge(We(e) + " is not an object");
          },
          Pe = TypeError,
          Ne = Object.defineProperty,
          De = Object.getOwnPropertyDescriptor,
          Ke = {
            f: b
              ? Fe
                ? function (e, t, n) {
                    if (
                      (Ze(e),
                      (t = Ie(t)),
                      Ze(n),
                      "function" == typeof e &&
                        "prototype" === t &&
                        "value" in n &&
                        "writable" in n &&
                        !n.writable)
                    ) {
                      var r = De(e, t);
                      r &&
                        r.writable &&
                        ((e[t] = n.value),
                        (n = {
                          configurable:
                            "configurable" in n
                              ? n.configurable
                              : r.configurable,
                          enumerable:
                            "enumerable" in n ? n.enumerable : r.enumerable,
                          writable: !1,
                        }));
                    }
                    return Ne(e, t, n);
                  }
                : Ne
              : function (e, t, n) {
                  if ((Ze(e), (t = Ie(t)), Ze(n), Te))
                    try {
                      return Ne(e, t, n);
                    } catch (e) {}
                  if ("get" in n || "set" in n)
                    throw Pe("Accessors not supported");
                  return "value" in n && (e[t] = n.value), e;
                },
          },
          Ue = b
            ? function (e, t, n) {
                return Ke.f(e, t, _(1, n));
              }
            : function (e, t, n) {
                return (e[t] = n), e;
              },
          Xe = Function.prototype,
          Ye = b && Object.getOwnPropertyDescriptor,
          ze = me(Xe, "name"),
          He = {
            EXISTS: ze,
            PROPER: ze && "something" === function () {}.name,
            CONFIGURABLE: ze && (!b || (b && Ye(Xe, "name").configurable)),
          },
          Je = T(Function.toString);
        K(de.inspectSource) ||
          (de.inspectSource = function (e) {
            return Je(e);
          });
        var Me,
          Ve,
          Qe,
          qe = de.inspectSource,
          $e = g.WeakMap,
          et = K($e) && /native code/.test(qe($e)),
          tt = fe("keys"),
          nt = function (e) {
            return tt[e] || (tt[e] = ve(e));
          },
          rt = {},
          ot = g.TypeError,
          it = g.WeakMap;
        if (et || de.state) {
          var at = de.state || (de.state = new it()),
            ct = T(at.get),
            st = T(at.has),
            ut = T(at.set);
          (Me = function (e, t) {
            if (st(at, e)) throw new ot("Object already initialized");
            return (t.facade = e), ut(at, e, t), t;
          }),
            (Ve = function (e) {
              return ct(at, e) || {};
            }),
            (Qe = function (e) {
              return st(at, e);
            });
        } else {
          var lt = nt("state");
          (rt[lt] = !0),
            (Me = function (e, t) {
              if (me(e, lt)) throw new ot("Object already initialized");
              return (t.facade = e), Ue(e, lt, t), t;
            }),
            (Ve = function (e) {
              return me(e, lt) ? e[lt] : {};
            }),
            (Qe = function (e) {
              return me(e, lt);
            });
        }
        var dt = {
            set: Me,
            get: Ve,
            has: Qe,
            enforce: function (e) {
              return Qe(e) ? Ve(e) : Me(e, {});
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!U(t) || (n = Ve(t)).type !== e)
                  throw ot("Incompatible receiver, " + e + " required");
                return n;
              };
            },
          },
          ft = h(function (e) {
            var t = He.CONFIGURABLE,
              n = dt.enforce,
              r = dt.get,
              o = Object.defineProperty,
              i =
                b &&
                !y(function () {
                  return 8 !== o(function () {}, "length", { value: 8 }).length;
                }),
              a = String(String).split("String"),
              c = (e.exports = function (e, r, c) {
                "Symbol(" === String(r).slice(0, 7) &&
                  (r =
                    "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                  c && c.getter && (r = "get " + r),
                  c && c.setter && (r = "set " + r),
                  (!me(e, "name") || (t && e.name !== r)) &&
                    o(e, "name", { value: r, configurable: !0 }),
                  i &&
                    c &&
                    me(c, "arity") &&
                    e.length !== c.arity &&
                    o(e, "length", { value: c.arity });
                try {
                  c && me(c, "constructor") && c.constructor
                    ? b && o(e, "prototype", { writable: !1 })
                    : e.prototype && (e.prototype = void 0);
                } catch (e) {}
                var s = n(e);
                return (
                  me(s, "source") ||
                    (s.source = a.join("string" == typeof r ? r : "")),
                  e
                );
              });
            Function.prototype.toString = c(function () {
              return (K(this) && r(this).source) || qe(this);
            }, "toString");
          }),
          ht = function (e, t, n, r) {
            r || (r = {});
            var o = r.enumerable,
              i = void 0 !== r.name ? r.name : t;
            return (
              K(n) && ft(n, i, r),
              r.global
                ? o
                  ? (e[t] = n)
                  : le(t, n)
                : (r.unsafe ? e[t] && (o = !0) : delete e[t],
                  o
                    ? (e[t] = n)
                    : Ke.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !r.nonConfigurable,
                        writable: !r.nonWritable,
                      })),
              e
            );
          },
          pt = Math.ceil,
          At = Math.floor,
          mt =
            Math.trunc ||
            function (e) {
              var t = +e;
              return (t > 0 ? At : pt)(t);
            },
          gt = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : mt(t);
          },
          yt = Math.max,
          bt = Math.min,
          vt = function (e, t) {
            var n = gt(e);
            return n < 0 ? yt(n + t, 0) : bt(n, t);
          },
          Ct = Math.min,
          wt = function (e) {
            return e > 0 ? Ct(gt(e), 9007199254740991) : 0;
          },
          kt = function (e) {
            return wt(e.length);
          },
          xt = function (e) {
            return function (t, n, r) {
              var o,
                i = D(t),
                a = kt(i),
                c = vt(r, a);
              if (e && n != n) {
                for (; a > c; ) if ((o = i[c++]) != o) return !0;
              } else
                for (; a > c; c++)
                  if ((e || c in i) && i[c] === n) return e || c || 0;
              return !e && -1;
            };
          },
          St = { includes: xt(!0), indexOf: xt(!1) },
          Et = St.indexOf,
          _t = T([].push),
          It = function (e, t) {
            var n,
              r = D(e),
              o = 0,
              i = [];
            for (n in r) !me(rt, n) && me(r, n) && _t(i, n);
            for (; t.length > o; )
              me(r, (n = t[o++])) && (~Et(i, n) || _t(i, n));
            return i;
          },
          Bt = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ],
          Ot = Bt.concat("length", "prototype"),
          jt = {
            f:
              Object.getOwnPropertyNames ||
              function (e) {
                return It(e, Ot);
              },
          },
          Tt = { f: Object.getOwnPropertySymbols },
          Lt = T([].concat),
          Rt =
            Y("Reflect", "ownKeys") ||
            function (e) {
              var t = jt.f(Ze(e)),
                n = Tt.f;
              return n ? Lt(t, n(e)) : t;
            },
          Ft = function (e, t, n) {
            for (var r = Rt(t), o = Ke.f, i = Re.f, a = 0; a < r.length; a++) {
              var c = r[a];
              me(e, c) || (n && me(n, c)) || o(e, c, i(t, c));
            }
          },
          Wt = /#|\.prototype\./,
          Gt = function (e, t) {
            var n = Pt[Zt(e)];
            return n == Dt || (n != Nt && (K(t) ? y(t) : !!t));
          },
          Zt = (Gt.normalize = function (e) {
            return String(e).replace(Wt, ".").toLowerCase();
          }),
          Pt = (Gt.data = {}),
          Nt = (Gt.NATIVE = "N"),
          Dt = (Gt.POLYFILL = "P"),
          Kt = Gt,
          Ut = Re.f,
          Xt = function (e, t) {
            var n,
              r,
              o,
              i,
              a,
              c = e.target,
              s = e.global,
              u = e.stat;
            if ((n = s ? g : u ? g[c] || le(c, {}) : (g[c] || {}).prototype))
              for (r in t) {
                if (
                  ((i = t[r]),
                  (o = e.dontCallGetSet ? (a = Ut(n, r)) && a.value : n[r]),
                  !Kt(s ? r : c + (u ? "." : "#") + r, e.forced) &&
                    void 0 !== o)
                ) {
                  if (typeof i == typeof o) continue;
                  Ft(i, o);
                }
                (e.sham || (o && o.sham)) && Ue(i, "sham", !0), ht(n, r, i, e);
              }
          },
          Yt = {};
        Yt[Se("toStringTag")] = "z";
        var zt,
          Ht = "[object z]" === String(Yt),
          Jt = Se("toStringTag"),
          Mt = Object,
          Vt =
            "Arguments" ==
            F(
              (function () {
                return arguments;
              })()
            ),
          Qt = Ht
            ? F
            : function (e) {
                var t, n, r;
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (e, t) {
                      try {
                        return e[t];
                      } catch (e) {}
                    })((t = Mt(e)), Jt))
                  ? n
                  : Vt
                  ? F(t)
                  : "Object" == (r = F(t)) && K(t.callee)
                  ? "Arguments"
                  : r;
              },
          qt = String,
          $t = function (e) {
            if ("Symbol" === Qt(e))
              throw TypeError("Cannot convert a Symbol value to a string");
            return qt(e);
          },
          en = Se("match"),
          tn = TypeError,
          nn = function (e) {
            if (
              (function (e) {
                var t;
                return (
                  U(e) && (void 0 !== (t = e[en]) ? !!t : "RegExp" == F(e))
                );
              })(e)
            )
              throw tn("The method doesn't accept regular expressions");
            return e;
          },
          rn = Se("match"),
          on = function (e) {
            var t = /./;
            try {
              "/./"[e](t);
            } catch (n) {
              try {
                return (t[rn] = !1), "/./"[e](t);
              } catch (e) {}
            }
            return !1;
          },
          an = Re.f,
          cn = T("".startsWith),
          sn = T("".slice),
          un = Math.min,
          ln = on("startsWith"),
          dn = !(
            ln ||
            ((zt = an(String.prototype, "startsWith")), !zt || zt.writable)
          );
        Xt(
          { target: "String", proto: !0, forced: !dn && !ln },
          {
            startsWith: function (e) {
              var t = $t(N(this));
              nn(e);
              var n = wt(
                  un(arguments.length > 1 ? arguments[1] : void 0, t.length)
                ),
                r = $t(e);
              return cn ? cn(t, r, n) : sn(t, n, n + r.length) === r;
            },
          }
        );
        var fn = function (e, t) {
          return T(g[e].prototype[t]);
        };
        fn("String", "startsWith");
        var hn =
            Array.isArray ||
            function (e) {
              return "Array" == F(e);
            },
          pn = TypeError,
          An = function (e) {
            if (e > 9007199254740991)
              throw pn("Maximum allowed index exceeded");
            return e;
          },
          mn = function (e, t, n) {
            var r = Ie(t);
            r in e ? Ke.f(e, r, _(0, n)) : (e[r] = n);
          },
          gn = function () {},
          yn = [],
          bn = Y("Reflect", "construct"),
          vn = /^\s*(?:class|function)\b/,
          Cn = T(vn.exec),
          wn = !vn.exec(gn),
          kn = function (e) {
            if (!K(e)) return !1;
            try {
              return bn(gn, yn, e), !0;
            } catch (e) {
              return !1;
            }
          },
          xn = function (e) {
            if (!K(e)) return !1;
            switch (Qt(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return wn || !!Cn(vn, qe(e));
            } catch (e) {
              return !0;
            }
          };
        xn.sham = !0;
        var Sn =
            !bn ||
            y(function () {
              var e;
              return (
                kn(kn.call) ||
                !kn(Object) ||
                !kn(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? xn
              : kn,
          En = Se("species"),
          _n = Array,
          In = function (e, t) {
            return new ((function (e) {
              var t;
              return (
                hn(e) &&
                  ((t = e.constructor),
                  ((Sn(t) && (t === _n || hn(t.prototype))) ||
                    (U(t) && null === (t = t[En]))) &&
                    (t = void 0)),
                void 0 === t ? _n : t
              );
            })(e))(0 === t ? 0 : t);
          },
          Bn = Se("species"),
          On = Se("isConcatSpreadable"),
          jn =
            q >= 51 ||
            !y(function () {
              var e = [];
              return (e[On] = !1), e.concat()[0] !== e;
            }),
          Tn =
            q >= 51 ||
            !y(function () {
              var e = [];
              return (
                ((e.constructor = {})[Bn] = function () {
                  return { foo: 1 };
                }),
                1 !== e.concat(Boolean).foo
              );
            }),
          Ln = function (e) {
            if (!U(e)) return !1;
            var t = e[On];
            return void 0 !== t ? !!t : hn(e);
          };
        Xt(
          { target: "Array", proto: !0, arity: 1, forced: !jn || !Tn },
          {
            concat: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a = pe(this),
                c = In(a, 0),
                s = 0;
              for (t = -1, r = arguments.length; t < r; t++)
                if (Ln((i = -1 === t ? a : arguments[t])))
                  for (o = kt(i), An(s + o), n = 0; n < o; n++, s++)
                    n in i && mn(c, s, i[n]);
                else An(s + 1), mn(c, s++, i);
              return (c.length = s), c;
            },
          }
        );
        var Rn = Ht
          ? {}.toString
          : function () {
              return "[object " + Qt(this) + "]";
            };
        Ht || ht(Object.prototype, "toString", Rn, { unsafe: !0 });
        var Fn,
          Wn =
            Object.keys ||
            function (e) {
              return It(e, Bt);
            },
          Gn =
            b && !Fe
              ? Object.defineProperties
              : function (e, t) {
                  Ze(e);
                  for (var n, r = D(t), o = Wn(t), i = o.length, a = 0; i > a; )
                    Ke.f(e, (n = o[a++]), r[n]);
                  return e;
                },
          Zn = { f: Gn },
          Pn = Y("document", "documentElement"),
          Nn = nt("IE_PROTO"),
          Dn = function () {},
          Kn = function (e) {
            return "<script>" + e + "</script>";
          },
          Un = function (e) {
            e.write(Kn("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          Xn = function () {
            try {
              Fn = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            Xn =
              "undefined" != typeof document
                ? document.domain && Fn
                  ? Un(Fn)
                  : (((t = je("iframe")).style.display = "none"),
                    Pn.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(Kn("document.F=Object")),
                    e.close(),
                    e.F)
                : Un(Fn);
            for (var n = Bt.length; n--; ) delete Xn.prototype[Bt[n]];
            return Xn();
          };
        rt[Nn] = !0;
        var Yn =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((Dn.prototype = Ze(e)),
                    (n = new Dn()),
                    (Dn.prototype = null),
                    (n[Nn] = e))
                  : (n = Xn()),
                void 0 === t ? n : Zn.f(n, t)
              );
            },
          zn = Array,
          Hn = Math.max,
          Jn = jt.f,
          Mn =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [],
          Vn = {
            f: function (e) {
              return Mn && "Window" == F(e)
                ? (function (e) {
                    try {
                      return Jn(e);
                    } catch (e) {
                      return (function (e, t, n) {
                        for (
                          var r = kt(e),
                            o = vt(void 0, r),
                            i = vt(r, r),
                            a = zn(Hn(i - o, 0)),
                            c = 0;
                          o < i;
                          o++, c++
                        )
                          mn(a, c, e[o]);
                        return (a.length = c), a;
                      })(Mn);
                    }
                  })(e)
                : Jn(D(e));
            },
          },
          Qn = { f: Se },
          qn = g,
          $n = Ke.f,
          er = function (e) {
            var t = qn.Symbol || (qn.Symbol = {});
            me(t, e) || $n(t, e, { value: Qn.f(e) });
          },
          tr = function () {
            var e = Y("Symbol"),
              t = e && e.prototype,
              n = t && t.valueOf,
              r = Se("toPrimitive");
            t &&
              !t[r] &&
              ht(
                t,
                r,
                function (e) {
                  return w(n, this);
                },
                { arity: 1 }
              );
          },
          nr = Ke.f,
          rr = Se("toStringTag"),
          or = function (e, t, n) {
            e && !n && (e = e.prototype),
              e && !me(e, rr) && nr(e, rr, { configurable: !0, value: t });
          },
          ir = T(T.bind),
          ar = function (e, t) {
            return (
              ae(e),
              void 0 === t
                ? e
                : v
                ? ir(e, t)
                : function () {
                    return e.apply(t, arguments);
                  }
            );
          },
          cr = T([].push),
          sr = function (e) {
            var t = 1 == e,
              n = 2 == e,
              r = 3 == e,
              o = 4 == e,
              i = 6 == e,
              a = 7 == e,
              c = 5 == e || i;
            return function (s, u, l, d) {
              for (
                var f,
                  h,
                  p = pe(s),
                  A = Z(p),
                  m = ar(u, l),
                  g = kt(A),
                  y = 0,
                  b = d || In,
                  v = t ? b(s, g) : n || a ? b(s, 0) : void 0;
                g > y;
                y++
              )
                if ((c || y in A) && ((h = m((f = A[y]), y, p)), e))
                  if (t) v[y] = h;
                  else if (h)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return f;
                      case 6:
                        return y;
                      case 2:
                        cr(v, f);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        cr(v, f);
                    }
              return i ? -1 : r || o ? o : v;
            };
          },
          ur = [sr(0), sr(1), sr(2), sr(3), sr(4), sr(5), sr(6), sr(7)][0],
          lr = nt("hidden"),
          dr = dt.set,
          fr = dt.getterFor("Symbol"),
          hr = Object.prototype,
          pr = g.Symbol,
          Ar = pr && pr.prototype,
          mr = g.TypeError,
          gr = g.QObject,
          yr = Re.f,
          br = Ke.f,
          vr = Vn.f,
          Cr = E.f,
          wr = T([].push),
          kr = fe("symbols"),
          xr = fe("op-symbols"),
          Sr = fe("wks"),
          Er = !gr || !gr.prototype || !gr.prototype.findChild,
          _r =
            b &&
            y(function () {
              return (
                7 !=
                Yn(
                  br({}, "a", {
                    get: function () {
                      return br(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (e, t, n) {
                  var r = yr(hr, t);
                  r && delete hr[t], br(e, t, n), r && e !== hr && br(hr, t, r);
                }
              : br,
          Ir = function (e, t) {
            var n = (kr[e] = Yn(Ar));
            return (
              dr(n, { type: "Symbol", tag: e, description: t }),
              b || (n.description = t),
              n
            );
          },
          Br = function (e, t, n) {
            e === hr && Br(xr, t, n), Ze(e);
            var r = Ie(t);
            return (
              Ze(n),
              me(kr, r)
                ? (n.enumerable
                    ? (me(e, lr) && e[lr][r] && (e[lr][r] = !1),
                      (n = Yn(n, { enumerable: _(0, !1) })))
                    : (me(e, lr) || br(e, lr, _(1, {})), (e[lr][r] = !0)),
                  _r(e, r, n))
                : br(e, r, n)
            );
          },
          Or = function (e, t) {
            Ze(e);
            var n = D(t),
              r = Wn(n).concat(Rr(n));
            return (
              ur(r, function (t) {
                (b && !w(jr, n, t)) || Br(e, t, n[t]);
              }),
              e
            );
          },
          jr = function (e) {
            var t = Ie(e),
              n = w(Cr, this, t);
            return (
              !(this === hr && me(kr, t) && !me(xr, t)) &&
              (!(
                n ||
                !me(this, t) ||
                !me(kr, t) ||
                (me(this, lr) && this[lr][t])
              ) ||
                n)
            );
          },
          Tr = function (e, t) {
            var n = D(e),
              r = Ie(t);
            if (n !== hr || !me(kr, r) || me(xr, r)) {
              var o = yr(n, r);
              return (
                !o ||
                  !me(kr, r) ||
                  (me(n, lr) && n[lr][r]) ||
                  (o.enumerable = !0),
                o
              );
            }
          },
          Lr = function (e) {
            var t = vr(D(e)),
              n = [];
            return (
              ur(t, function (e) {
                me(kr, e) || me(rt, e) || wr(n, e);
              }),
              n
            );
          },
          Rr = function (e) {
            var t = e === hr,
              n = vr(t ? xr : D(e)),
              r = [];
            return (
              ur(n, function (e) {
                !me(kr, e) || (t && !me(hr, e)) || wr(r, kr[e]);
              }),
              r
            );
          };
        $ ||
          ((Ar = (pr = function () {
            if (z(Ar, this)) throw mr("Symbol is not a constructor");
            var e =
                arguments.length && void 0 !== arguments[0]
                  ? $t(arguments[0])
                  : void 0,
              t = ve(e),
              n = function (e) {
                this === hr && w(n, xr, e),
                  me(this, lr) && me(this[lr], t) && (this[lr][t] = !1),
                  _r(this, t, _(1, e));
              };
            return b && Er && _r(hr, t, { configurable: !0, set: n }), Ir(t, e);
          }).prototype),
          ht(Ar, "toString", function () {
            return fr(this).tag;
          }),
          ht(pr, "withoutSetter", function (e) {
            return Ir(ve(e), e);
          }),
          (E.f = jr),
          (Ke.f = Br),
          (Zn.f = Or),
          (Re.f = Tr),
          (jt.f = Vn.f = Lr),
          (Tt.f = Rr),
          (Qn.f = function (e) {
            return Ir(Se(e), e);
          }),
          b &&
            (br(Ar, "description", {
              configurable: !0,
              get: function () {
                return fr(this).description;
              },
            }),
            ht(hr, "propertyIsEnumerable", jr, { unsafe: !0 }))),
          Xt(
            { global: !0, constructor: !0, wrap: !0, forced: !$, sham: !$ },
            { Symbol: pr }
          ),
          ur(Wn(Sr), function (e) {
            er(e);
          }),
          Xt(
            { target: "Symbol", stat: !0, forced: !$ },
            {
              useSetter: function () {
                Er = !0;
              },
              useSimple: function () {
                Er = !1;
              },
            }
          ),
          Xt(
            { target: "Object", stat: !0, forced: !$, sham: !b },
            {
              create: function (e, t) {
                return void 0 === t ? Yn(e) : Or(Yn(e), t);
              },
              defineProperty: Br,
              defineProperties: Or,
              getOwnPropertyDescriptor: Tr,
            }
          ),
          Xt(
            { target: "Object", stat: !0, forced: !$ },
            { getOwnPropertyNames: Lr }
          ),
          tr(),
          or(pr, "Symbol"),
          (rt[lr] = !0);
        var Fr = $ && !!Symbol.for && !!Symbol.keyFor,
          Wr = fe("string-to-symbol-registry"),
          Gr = fe("symbol-to-string-registry");
        Xt(
          { target: "Symbol", stat: !0, forced: !Fr },
          {
            for: function (e) {
              var t = $t(e);
              if (me(Wr, t)) return Wr[t];
              var n = Y("Symbol")(t);
              return (Wr[t] = n), (Gr[n] = t), n;
            },
          }
        );
        var Zr = fe("symbol-to-string-registry");
        Xt(
          { target: "Symbol", stat: !0, forced: !Fr },
          {
            keyFor: function (e) {
              if (!ne(e)) throw TypeError(oe(e) + " is not a symbol");
              if (me(Zr, e)) return Zr[e];
            },
          }
        );
        var Pr = Function.prototype,
          Nr = Pr.apply,
          Dr = Pr.call,
          Kr =
            ("object" == typeof Reflect && Reflect.apply) ||
            (v
              ? Dr.bind(Nr)
              : function () {
                  return Dr.apply(Nr, arguments);
                }),
          Ur = T([].slice),
          Xr = Y("JSON", "stringify"),
          Yr = T(/./.exec),
          zr = T("".charAt),
          Hr = T("".charCodeAt),
          Jr = T("".replace),
          Mr = T((1).toString),
          Vr = /[\uD800-\uDFFF]/g,
          Qr = /^[\uD800-\uDBFF]$/,
          qr = /^[\uDC00-\uDFFF]$/,
          $r =
            !$ ||
            y(function () {
              var e = Y("Symbol")();
              return (
                "[null]" != Xr([e]) ||
                "{}" != Xr({ a: e }) ||
                "{}" != Xr(Object(e))
              );
            }),
          eo = y(function () {
            return (
              '"\\udf06\\ud834"' !== Xr("\udf06\ud834") ||
              '"\\udead"' !== Xr("\udead")
            );
          }),
          to = function (e, t) {
            var n = Ur(arguments),
              r = t;
            if ((U(t) || void 0 !== e) && !ne(e))
              return (
                hn(t) ||
                  (t = function (e, t) {
                    if ((K(r) && (t = w(r, this, e, t)), !ne(t))) return t;
                  }),
                (n[1] = t),
                Kr(Xr, null, n)
              );
          },
          no = function (e, t, n) {
            var r = zr(n, t - 1),
              o = zr(n, t + 1);
            return (Yr(Qr, e) && !Yr(qr, o)) || (Yr(qr, e) && !Yr(Qr, r))
              ? "\\u" + Mr(Hr(e, 0), 16)
              : e;
          };
        Xr &&
          Xt(
            { target: "JSON", stat: !0, arity: 3, forced: $r || eo },
            {
              stringify: function (e, t, n) {
                var r = Ur(arguments),
                  o = Kr($r ? to : Xr, null, r);
                return eo && "string" == typeof o ? Jr(o, Vr, no) : o;
              },
            }
          );
        var ro =
          !$ ||
          y(function () {
            Tt.f(1);
          });
        Xt(
          { target: "Object", stat: !0, forced: ro },
          {
            getOwnPropertySymbols: function (e) {
              var t = Tt.f;
              return t ? t(pe(e)) : [];
            },
          }
        ),
          er("asyncIterator");
        var oo = Ke.f,
          io = g.Symbol,
          ao = io && io.prototype;
        if (
          b &&
          K(io) &&
          (!("description" in ao) || void 0 !== io().description)
        ) {
          var co = {},
            so = function () {
              var e =
                  arguments.length < 1 || void 0 === arguments[0]
                    ? void 0
                    : $t(arguments[0]),
                t = z(ao, this) ? new io(e) : void 0 === e ? io() : io(e);
              return "" === e && (co[t] = !0), t;
            };
          Ft(so, io), (so.prototype = ao), (ao.constructor = so);
          var uo = "Symbol(test)" == String(io("test")),
            lo = T(ao.toString),
            fo = T(ao.valueOf),
            ho = /^Symbol\((.*)\)[^)]+$/,
            po = T("".replace),
            Ao = T("".slice);
          oo(ao, "description", {
            configurable: !0,
            get: function () {
              var e = fo(this),
                t = lo(e);
              if (me(co, e)) return "";
              var n = uo ? Ao(t, 7, -1) : po(t, ho, "$1");
              return "" === n ? void 0 : n;
            },
          }),
            Xt({ global: !0, constructor: !0, forced: !0 }, { Symbol: so });
        }
        er("hasInstance"),
          er("isConcatSpreadable"),
          er("iterator"),
          er("match"),
          er("matchAll"),
          er("replace"),
          er("search"),
          er("species"),
          er("split"),
          er("toPrimitive"),
          tr(),
          er("toStringTag"),
          or(Y("Symbol"), "Symbol"),
          er("unscopables"),
          or(g.JSON, "JSON", !0),
          or(Math, "Math", !0),
          Xt({ global: !0 }, { Reflect: {} }),
          or(g.Reflect, "Reflect", !0),
          qn.Symbol;
        var mo,
          go,
          yo,
          bo = T("".charAt),
          vo = T("".charCodeAt),
          Co = T("".slice),
          wo = function (e) {
            return function (t, n) {
              var r,
                o,
                i = $t(N(t)),
                a = gt(n),
                c = i.length;
              return a < 0 || a >= c
                ? e
                  ? ""
                  : void 0
                : (r = vo(i, a)) < 55296 ||
                  r > 56319 ||
                  a + 1 === c ||
                  (o = vo(i, a + 1)) < 56320 ||
                  o > 57343
                ? e
                  ? bo(i, a)
                  : r
                : e
                ? Co(i, a, a + 2)
                : o - 56320 + ((r - 55296) << 10) + 65536;
            };
          },
          ko = { codeAt: wo(!1), charAt: wo(!0) },
          xo = !y(function () {
            function e() {}
            return (
              (e.prototype.constructor = null),
              Object.getPrototypeOf(new e()) !== e.prototype
            );
          }),
          So = nt("IE_PROTO"),
          Eo = Object,
          _o = Eo.prototype,
          Io = xo
            ? Eo.getPrototypeOf
            : function (e) {
                var t = pe(e);
                if (me(t, So)) return t[So];
                var n = t.constructor;
                return K(n) && t instanceof n
                  ? n.prototype
                  : t instanceof Eo
                  ? _o
                  : null;
              },
          Bo = Se("iterator"),
          Oo = !1;
        [].keys &&
          ("next" in (yo = [].keys())
            ? (go = Io(Io(yo))) !== Object.prototype && (mo = go)
            : (Oo = !0));
        var jo =
          null == mo ||
          y(function () {
            var e = {};
            return mo[Bo].call(e) !== e;
          });
        jo && (mo = {}),
          K(mo[Bo]) ||
            ht(mo, Bo, function () {
              return this;
            });
        var To = { IteratorPrototype: mo, BUGGY_SAFARI_ITERATORS: Oo },
          Lo = {},
          Ro = To.IteratorPrototype,
          Fo = function () {
            return this;
          },
          Wo = String,
          Go = TypeError,
          Zo =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var e,
                    t = !1,
                    n = {};
                  try {
                    (e = T(
                      Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        "__proto__"
                      ).set
                    ))(n, []),
                      (t = n instanceof Array);
                  } catch (e) {}
                  return function (n, r) {
                    return (
                      Ze(n),
                      (function (e) {
                        if ("object" == typeof e || K(e)) return e;
                        throw Go("Can't set " + Wo(e) + " as a prototype");
                      })(r),
                      t ? e(n, r) : (n.__proto__ = r),
                      n
                    );
                  };
                })()
              : void 0),
          Po = He.PROPER,
          No = He.CONFIGURABLE,
          Do = To.IteratorPrototype,
          Ko = To.BUGGY_SAFARI_ITERATORS,
          Uo = Se("iterator"),
          Xo = function () {
            return this;
          },
          Yo = function (e, t, n, r, o, i, a) {
            !(function (e, t, n, r) {
              var o = t + " Iterator";
              (e.prototype = Yn(Ro, { next: _(1, n) })),
                or(e, o, !1),
                (Lo[o] = Fo);
            })(n, t, r);
            var c,
              s,
              u,
              l = function (e) {
                if (e === o && A) return A;
                if (!Ko && e in h) return h[e];
                switch (e) {
                  case "keys":
                  case "values":
                  case "entries":
                    return function () {
                      return new n(this, e);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              d = t + " Iterator",
              f = !1,
              h = e.prototype,
              p = h[Uo] || h["@@iterator"] || (o && h[o]),
              A = (!Ko && p) || l(o),
              m = ("Array" == t && h.entries) || p;
            if (
              (m &&
                (c = Io(m.call(new e()))) !== Object.prototype &&
                c.next &&
                (Io(c) !== Do && (Zo ? Zo(c, Do) : K(c[Uo]) || ht(c, Uo, Xo)),
                or(c, d, !0)),
              Po &&
                "values" == o &&
                p &&
                "values" !== p.name &&
                (No
                  ? Ue(h, "name", "values")
                  : ((f = !0),
                    (A = function () {
                      return w(p, this);
                    }))),
              o)
            )
              if (
                ((s = {
                  values: l("values"),
                  keys: i ? A : l("keys"),
                  entries: l("entries"),
                }),
                a)
              )
                for (u in s) (Ko || f || !(u in h)) && ht(h, u, s[u]);
              else Xt({ target: t, proto: !0, forced: Ko || f }, s);
            return h[Uo] !== A && ht(h, Uo, A, { name: o }), (Lo[t] = A), s;
          },
          zo = ko.charAt,
          Ho = dt.set,
          Jo = dt.getterFor("String Iterator");
        Yo(
          String,
          "String",
          function (e) {
            Ho(this, { type: "String Iterator", string: $t(e), index: 0 });
          },
          function () {
            var e,
              t = Jo(this),
              n = t.string,
              r = t.index;
            return r >= n.length
              ? { value: void 0, done: !0 }
              : ((e = zo(n, r)), (t.index += e.length), { value: e, done: !1 });
          }
        );
        var Mo = function (e, t, n) {
            var r, o;
            Ze(e);
            try {
              if (!(r = ce(e, "return"))) {
                if ("throw" === t) throw n;
                return n;
              }
              r = w(r, e);
            } catch (e) {
              (o = !0), (r = e);
            }
            if ("throw" === t) throw n;
            if (o) throw r;
            return Ze(r), n;
          },
          Vo = function (e, t, n, r) {
            try {
              return r ? t(Ze(n)[0], n[1]) : t(n);
            } catch (t) {
              Mo(e, "throw", t);
            }
          },
          Qo = Se("iterator"),
          qo = Array.prototype,
          $o = function (e) {
            return void 0 !== e && (Lo.Array === e || qo[Qo] === e);
          },
          ei = Se("iterator"),
          ti = function (e) {
            if (null != e) return ce(e, ei) || ce(e, "@@iterator") || Lo[Qt(e)];
          },
          ni = TypeError,
          ri = function (e, t) {
            var n = arguments.length < 2 ? ti(e) : t;
            if (ae(n)) return Ze(w(n, e));
            throw ni(oe(e) + " is not iterable");
          },
          oi = Array,
          ii = Se("iterator"),
          ai = !1;
        try {
          var ci = 0,
            si = {
              next: function () {
                return { done: !!ci++ };
              },
              return: function () {
                ai = !0;
              },
            };
          (si[ii] = function () {
            return this;
          }),
            Array.from(si, function () {
              throw 2;
            });
        } catch (r) {}
        var ui = function (e, t) {
            if (!t && !ai) return !1;
            var n = !1;
            try {
              var r = {};
              (r[ii] = function () {
                return {
                  next: function () {
                    return { done: (n = !0) };
                  },
                };
              }),
                e(r);
            } catch (e) {}
            return n;
          },
          li = !ui(function (e) {
            Array.from(e);
          });
        Xt(
          { target: "Array", stat: !0, forced: li },
          {
            from: function (e) {
              var t = pe(e),
                n = Sn(this),
                r = arguments.length,
                o = r > 1 ? arguments[1] : void 0,
                i = void 0 !== o;
              i && (o = ar(o, r > 2 ? arguments[2] : void 0));
              var a,
                c,
                s,
                u,
                l,
                d,
                f = ti(t),
                h = 0;
              if (!f || (this === oi && $o(f)))
                for (a = kt(t), c = n ? new this(a) : oi(a); a > h; h++)
                  (d = i ? o(t[h], h) : t[h]), mn(c, h, d);
              else
                for (
                  l = (u = ri(t, f)).next, c = n ? new this() : [];
                  !(s = w(l, u)).done;
                  h++
                )
                  (d = i ? Vo(u, o, [s.value, h], !0) : s.value), mn(c, h, d);
              return (c.length = h), c;
            },
          }
        ),
          qn.Array.from;
        var di,
          fi,
          hi,
          pi =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
          Ai = Ke.f,
          mi = dt.enforce,
          gi = dt.get,
          yi = g.Int8Array,
          bi = yi && yi.prototype,
          vi = g.Uint8ClampedArray,
          Ci = vi && vi.prototype,
          wi = yi && Io(yi),
          ki = bi && Io(bi),
          xi = Object.prototype,
          Si = g.TypeError,
          Ei = Se("toStringTag"),
          _i = ve("TYPED_ARRAY_TAG"),
          Ii = pi && !!Zo && "Opera" !== Qt(g.opera),
          Bi = !1,
          Oi = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8,
          },
          ji = { BigInt64Array: 8, BigUint64Array: 8 },
          Ti = function (e) {
            var t = Io(e);
            if (U(t)) {
              var n = gi(t);
              return n && me(n, "TypedArrayConstructor")
                ? n.TypedArrayConstructor
                : Ti(t);
            }
          },
          Li = function (e) {
            if (!U(e)) return !1;
            var t = Qt(e);
            return me(Oi, t) || me(ji, t);
          };
        for (di in Oi)
          (hi = (fi = g[di]) && fi.prototype)
            ? (mi(hi).TypedArrayConstructor = fi)
            : (Ii = !1);
        for (di in ji)
          (hi = (fi = g[di]) && fi.prototype) &&
            (mi(hi).TypedArrayConstructor = fi);
        if (
          (!Ii || !K(wi) || wi === Function.prototype) &&
          ((wi = function () {
            throw Si("Incorrect invocation");
          }),
          Ii)
        )
          for (di in Oi) g[di] && Zo(g[di], wi);
        if ((!Ii || !ki || ki === xi) && ((ki = wi.prototype), Ii))
          for (di in Oi) g[di] && Zo(g[di].prototype, ki);
        if ((Ii && Io(Ci) !== ki && Zo(Ci, ki), b && !me(ki, Ei)))
          for (di in ((Bi = !0),
          Ai(ki, Ei, {
            get: function () {
              return U(this) ? this[_i] : void 0;
            },
          }),
          Oi))
            g[di] && Ue(g[di], _i, di);
        var Ri = {
            NATIVE_ARRAY_BUFFER_VIEWS: Ii,
            TYPED_ARRAY_TAG: Bi && _i,
            aTypedArray: function (e) {
              if (Li(e)) return e;
              throw Si("Target is not a typed array");
            },
            aTypedArrayConstructor: function (e) {
              if (K(e) && (!Zo || z(wi, e))) return e;
              throw Si(oe(e) + " is not a typed array constructor");
            },
            exportTypedArrayMethod: function (e, t, n, r) {
              if (b) {
                if (n)
                  for (var o in Oi) {
                    var i = g[o];
                    if (i && me(i.prototype, e))
                      try {
                        delete i.prototype[e];
                      } catch (n) {
                        try {
                          i.prototype[e] = t;
                        } catch (e) {}
                      }
                  }
                (ki[e] && !n) || ht(ki, e, n ? t : (Ii && bi[e]) || t, r);
              }
            },
            exportTypedArrayStaticMethod: function (e, t, n) {
              var r, o;
              if (b) {
                if (Zo) {
                  if (n)
                    for (r in Oi)
                      if ((o = g[r]) && me(o, e))
                        try {
                          delete o[e];
                        } catch (e) {}
                  if (wi[e] && !n) return;
                  try {
                    return ht(wi, e, n ? t : (Ii && wi[e]) || t);
                  } catch (e) {}
                }
                for (r in Oi) !(o = g[r]) || (o[e] && !n) || ht(o, e, t);
              }
            },
            getTypedArrayConstructor: Ti,
            isView: function (e) {
              if (!U(e)) return !1;
              var t = Qt(e);
              return "DataView" === t || me(Oi, t) || me(ji, t);
            },
            isTypedArray: Li,
            TypedArray: wi,
            TypedArrayPrototype: ki,
          },
          Fi = TypeError,
          Wi = Se("species"),
          Gi = Ri.aTypedArrayConstructor,
          Zi = Ri.getTypedArrayConstructor,
          Pi = Ri.aTypedArray;
        (0, Ri.exportTypedArrayMethod)(
          "slice",
          function (e, t) {
            for (
              var n = Ur(Pi(this), e, t),
                r = Gi(
                  (function (e, t) {
                    var n,
                      r = Ze(e).constructor;
                    return void 0 === r || null == (n = Ze(r)[Wi])
                      ? t
                      : (function (e) {
                          if (Sn(e)) return e;
                          throw Fi(oe(e) + " is not a constructor");
                        })(n);
                  })(this, Zi(this))
                ),
                o = 0,
                i = n.length,
                a = new r(i);
              i > o;

            )
              a[o] = n[o++];
            return a;
          },
          y(function () {
            new Int8Array(1).slice();
          })
        );
        var Ni = Ke.f,
          Di = Se("unscopables"),
          Ki = Array.prototype;
        null == Ki[Di] && Ni(Ki, Di, { configurable: !0, value: Yn(null) });
        var Ui = function (e) {
            Ki[Di][e] = !0;
          },
          Xi = St.includes,
          Yi = y(function () {
            return !Array(1).includes();
          });
        Xt(
          { target: "Array", proto: !0, forced: Yi },
          {
            includes: function (e) {
              return Xi(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
          Ui("includes"),
          fn("Array", "includes");
        var zi = T("".indexOf);
        Xt(
          { target: "String", proto: !0, forced: !on("includes") },
          {
            includes: function (e) {
              return !!~zi(
                $t(N(this)),
                $t(nn(e)),
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
          }
        ),
          fn("String", "includes");
        var Hi = Ke.f,
          Ji = dt.set,
          Mi = dt.getterFor("Array Iterator");
        Yo(
          Array,
          "Array",
          function (e, t) {
            Ji(this, {
              type: "Array Iterator",
              target: D(e),
              index: 0,
              kind: t,
            });
          },
          function () {
            var e = Mi(this),
              t = e.target,
              n = e.kind,
              r = e.index++;
            return !t || r >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == n
              ? { value: r, done: !1 }
              : "values" == n
              ? { value: t[r], done: !1 }
              : { value: [r, t[r]], done: !1 };
          },
          "values"
        );
        var Vi = (Lo.Arguments = Lo.Array);
        if (
          (Ui("keys"), Ui("values"), Ui("entries"), b && "values" !== Vi.name)
        )
          try {
            Hi(Vi, "name", { value: "values" });
          } catch (r) {}
        var Qi = y(function () {
            if ("function" == typeof ArrayBuffer) {
              var e = new ArrayBuffer(8);
              Object.isExtensible(e) &&
                Object.defineProperty(e, "a", { value: 8 });
            }
          }),
          qi = Object.isExtensible,
          $i =
            y(function () {
              qi(1);
            }) || Qi
              ? function (e) {
                  return (
                    !!U(e) && (!Qi || "ArrayBuffer" != F(e)) && (!qi || qi(e))
                  );
                }
              : qi,
          ea = !y(function () {
            return Object.isExtensible(Object.preventExtensions({}));
          }),
          ta = h(function (e) {
            var t = Ke.f,
              n = !1,
              r = ve("meta"),
              o = 0,
              i = function (e) {
                t(e, r, { value: { objectID: "O" + o++, weakData: {} } });
              },
              a = (e.exports = {
                enable: function () {
                  (a.enable = function () {}), (n = !0);
                  var e = jt.f,
                    t = T([].splice),
                    o = {};
                  (o[r] = 1),
                    e(o).length &&
                      ((jt.f = function (n) {
                        for (var o = e(n), i = 0, a = o.length; i < a; i++)
                          if (o[i] === r) {
                            t(o, i, 1);
                            break;
                          }
                        return o;
                      }),
                      Xt(
                        { target: "Object", stat: !0, forced: !0 },
                        { getOwnPropertyNames: Vn.f }
                      ));
                },
                fastKey: function (e, t) {
                  if (!U(e))
                    return "symbol" == typeof e
                      ? e
                      : ("string" == typeof e ? "S" : "P") + e;
                  if (!me(e, r)) {
                    if (!$i(e)) return "F";
                    if (!t) return "E";
                    i(e);
                  }
                  return e[r].objectID;
                },
                getWeakData: function (e, t) {
                  if (!me(e, r)) {
                    if (!$i(e)) return !0;
                    if (!t) return !1;
                    i(e);
                  }
                  return e[r].weakData;
                },
                onFreeze: function (e) {
                  return ea && n && $i(e) && !me(e, r) && i(e), e;
                },
              });
            rt[r] = !0;
          });
        ta.enable, ta.fastKey, ta.getWeakData, ta.onFreeze;
        var na = TypeError,
          ra = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          oa = ra.prototype,
          ia = function (e, t, n) {
            var r,
              o,
              i,
              a,
              c,
              s,
              u,
              l = n && n.that,
              d = !(!n || !n.AS_ENTRIES),
              f = !(!n || !n.IS_ITERATOR),
              h = !(!n || !n.INTERRUPTED),
              p = ar(t, l),
              A = function (e) {
                return r && Mo(r, "normal", e), new ra(!0, e);
              },
              m = function (e) {
                return d
                  ? (Ze(e), h ? p(e[0], e[1], A) : p(e[0], e[1]))
                  : h
                  ? p(e, A)
                  : p(e);
              };
            if (f) r = e;
            else {
              if (!(o = ti(e))) throw na(oe(e) + " is not iterable");
              if ($o(o)) {
                for (i = 0, a = kt(e); a > i; i++)
                  if ((c = m(e[i])) && z(oa, c)) return c;
                return new ra(!1);
              }
              r = ri(e, o);
            }
            for (s = r.next; !(u = w(s, r)).done; ) {
              try {
                c = m(u.value);
              } catch (e) {
                Mo(r, "throw", e);
              }
              if ("object" == typeof c && c && z(oa, c)) return c;
            }
            return new ra(!1);
          },
          aa = TypeError,
          ca = function (e, t) {
            if (z(t, e)) return e;
            throw aa("Incorrect invocation");
          },
          sa = function (e, t, n) {
            for (var r in t) ht(e, r, t[r], n);
            return e;
          },
          ua = Se("species"),
          la = Ke.f,
          da = ta.fastKey,
          fa = dt.set,
          ha = dt.getterFor,
          pa = {
            getConstructor: function (e, t, n, r) {
              var o = e(function (e, o) {
                  ca(e, i),
                    fa(e, {
                      type: t,
                      index: Yn(null),
                      first: void 0,
                      last: void 0,
                      size: 0,
                    }),
                    b || (e.size = 0),
                    null != o && ia(o, e[r], { that: e, AS_ENTRIES: n });
                }),
                i = o.prototype,
                a = ha(t),
                c = function (e, t, n) {
                  var r,
                    o,
                    i = a(e),
                    c = s(e, t);
                  return (
                    c
                      ? (c.value = n)
                      : ((i.last = c =
                          {
                            index: (o = da(t, !0)),
                            key: t,
                            value: n,
                            previous: (r = i.last),
                            next: void 0,
                            removed: !1,
                          }),
                        i.first || (i.first = c),
                        r && (r.next = c),
                        b ? i.size++ : e.size++,
                        "F" !== o && (i.index[o] = c)),
                    e
                  );
                },
                s = function (e, t) {
                  var n,
                    r = a(e),
                    o = da(t);
                  if ("F" !== o) return r.index[o];
                  for (n = r.first; n; n = n.next) if (n.key == t) return n;
                };
              return (
                sa(i, {
                  clear: function () {
                    for (var e = a(this), t = e.index, n = e.first; n; )
                      (n.removed = !0),
                        n.previous && (n.previous = n.previous.next = void 0),
                        delete t[n.index],
                        (n = n.next);
                    (e.first = e.last = void 0),
                      b ? (e.size = 0) : (this.size = 0);
                  },
                  delete: function (e) {
                    var t = this,
                      n = a(t),
                      r = s(t, e);
                    if (r) {
                      var o = r.next,
                        i = r.previous;
                      delete n.index[r.index],
                        (r.removed = !0),
                        i && (i.next = o),
                        o && (o.previous = i),
                        n.first == r && (n.first = o),
                        n.last == r && (n.last = i),
                        b ? n.size-- : t.size--;
                    }
                    return !!r;
                  },
                  forEach: function (e) {
                    for (
                      var t,
                        n = a(this),
                        r = ar(e, arguments.length > 1 ? arguments[1] : void 0);
                      (t = t ? t.next : n.first);

                    )
                      for (r(t.value, t.key, this); t && t.removed; )
                        t = t.previous;
                  },
                  has: function (e) {
                    return !!s(this, e);
                  },
                }),
                sa(
                  i,
                  n
                    ? {
                        get: function (e) {
                          var t = s(this, e);
                          return t && t.value;
                        },
                        set: function (e, t) {
                          return c(this, 0 === e ? 0 : e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return c(this, (e = 0 === e ? 0 : e), e);
                        },
                      }
                ),
                b &&
                  la(i, "size", {
                    get: function () {
                      return a(this).size;
                    },
                  }),
                o
              );
            },
            setStrong: function (e, t, n) {
              var r = t + " Iterator",
                o = ha(t),
                i = ha(r);
              Yo(
                e,
                t,
                function (e, t) {
                  fa(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0,
                  });
                },
                function () {
                  for (
                    var e = i(this), t = e.kind, n = e.last;
                    n && n.removed;

                  )
                    n = n.previous;
                  return e.target && (e.last = n = n ? n.next : e.state.first)
                    ? "keys" == t
                      ? { value: n.key, done: !1 }
                      : "values" == t
                      ? { value: n.value, done: !1 }
                      : { value: [n.key, n.value], done: !1 }
                    : ((e.target = void 0), { value: void 0, done: !0 });
                },
                n ? "entries" : "values",
                !n,
                !0
              ),
                (function (e) {
                  var t = Y(e),
                    n = Ke.f;
                  b &&
                    t &&
                    !t[ua] &&
                    n(t, ua, {
                      configurable: !0,
                      get: function () {
                        return this;
                      },
                    });
                })(t);
            },
          };
        function Aa(e) {
          var t = this.constructor;
          return this.then(
            function (n) {
              return t.resolve(e()).then(function () {
                return n;
              });
            },
            function (n) {
              return t.resolve(e()).then(function () {
                return t.reject(n);
              });
            }
          );
        }
        function ma(e) {
          return new this(function (t, n) {
            if (!e || void 0 === e.length)
              return n(
                new TypeError(
                  typeof e +
                    " " +
                    e +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var o = r.length;
            function i(e, n) {
              if (n && ("object" == typeof n || "function" == typeof n)) {
                var a = n.then;
                if ("function" == typeof a)
                  return void a.call(
                    n,
                    function (t) {
                      i(e, t);
                    },
                    function (n) {
                      (r[e] = { status: "rejected", reason: n }),
                        0 == --o && t(r);
                    }
                  );
              }
              (r[e] = { status: "fulfilled", value: n }), 0 == --o && t(r);
            }
            for (var a = 0; a < r.length; a++) i(a, r[a]);
          });
        }
        !(function (e, t, n) {
          var r = -1 !== e.indexOf("Map"),
            o = -1 !== e.indexOf("Weak"),
            i = r ? "set" : "add",
            a = g[e],
            c = a && a.prototype,
            s = a,
            u = {},
            l = function (e) {
              var t = T(c[e]);
              ht(
                c,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(o && !U(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return o && !U(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(o && !U(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, n) {
                      return t(this, 0 === e ? 0 : e, n), this;
                    }
              );
            };
          if (
            Kt(
              e,
              !K(a) ||
                !(
                  o ||
                  (c.forEach &&
                    !y(function () {
                      new a().entries().next();
                    }))
                )
            )
          )
            (s = n.getConstructor(t, e, r, i)), ta.enable();
          else if (Kt(e, !0)) {
            var d = new s(),
              f = d[i](o ? {} : -0, 1) != d,
              h = y(function () {
                d.has(1);
              }),
              p = ui(function (e) {
                new a(e);
              }),
              A =
                !o &&
                y(function () {
                  for (var e = new a(), t = 5; t--; ) e[i](t, t);
                  return !e.has(-0);
                });
            p ||
              (((s = t(function (e, t) {
                ca(e, c);
                var n = (function (e, t, n) {
                  var r, o;
                  return (
                    Zo &&
                      K((r = t.constructor)) &&
                      r !== n &&
                      U((o = r.prototype)) &&
                      o !== n.prototype &&
                      Zo(e, o),
                    e
                  );
                })(new a(), e, s);
                return null != t && ia(t, n[i], { that: n, AS_ENTRIES: r }), n;
              })).prototype = c),
              (c.constructor = s)),
              (h || A) && (l("delete"), l("has"), r && l("get")),
              (A || f) && l(i),
              o && c.clear && delete c.clear;
          }
          (u[e] = s),
            Xt({ global: !0, constructor: !0, forced: s != a }, u),
            or(s, e),
            o || n.setStrong(s, e, r);
        })(
          "Set",
          function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          pa
        ),
          qn.Set;
        var ga = setTimeout;
        function ya(e) {
          return Boolean(e && void 0 !== e.length);
        }
        function ba() {}
        function va(e) {
          if (!(this instanceof va))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            Ea(e, this);
        }
        function Ca(e, t) {
          for (; 3 === e._state; ) e = e._value;
          0 !== e._state
            ? ((e._handled = !0),
              va._immediateFn(function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                  var r;
                  try {
                    r = n(e._value);
                  } catch (e) {
                    return void ka(t.promise, e);
                  }
                  wa(t.promise, r);
                } else (1 === e._state ? wa : ka)(t.promise, e._value);
              }))
            : e._deferreds.push(t);
        }
        function wa(e, t) {
          try {
            if (t === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
              var n = t.then;
              if (t instanceof va)
                return (e._state = 3), (e._value = t), void xa(e);
              if ("function" == typeof n)
                return void Ea(
                  ((r = n),
                  (o = t),
                  function () {
                    r.apply(o, arguments);
                  }),
                  e
                );
            }
            (e._state = 1), (e._value = t), xa(e);
          } catch (t) {
            ka(e, t);
          }
          var r, o;
        }
        function ka(e, t) {
          (e._state = 2), (e._value = t), xa(e);
        }
        function xa(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            va._immediateFn(function () {
              e._handled || va._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            Ca(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function Sa(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function Ea(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), wa(t, e));
              },
              function (e) {
                n || ((n = !0), ka(t, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), ka(t, e);
          }
        }
        (va.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (va.prototype.then = function (e, t) {
            var n = new this.constructor(ba);
            return Ca(this, new Sa(e, t, n)), n;
          }),
          (va.prototype.finally = Aa),
          (va.all = function (e) {
            return new va(function (t, n) {
              if (!ya(e))
                return n(new TypeError("Promise.all accepts an array"));
              var r = Array.prototype.slice.call(e);
              if (0 === r.length) return t([]);
              var o = r.length;
              function i(e, a) {
                try {
                  if (a && ("object" == typeof a || "function" == typeof a)) {
                    var c = a.then;
                    if ("function" == typeof c)
                      return void c.call(
                        a,
                        function (t) {
                          i(e, t);
                        },
                        n
                      );
                  }
                  (r[e] = a), 0 == --o && t(r);
                } catch (e) {
                  n(e);
                }
              }
              for (var a = 0; a < r.length; a++) i(a, r[a]);
            });
          }),
          (va.allSettled = ma),
          (va.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === va
              ? e
              : new va(function (t) {
                  t(e);
                });
          }),
          (va.reject = function (e) {
            return new va(function (t, n) {
              n(e);
            });
          }),
          (va.race = function (e) {
            return new va(function (t, n) {
              if (!ya(e))
                return n(new TypeError("Promise.race accepts an array"));
              for (var r = 0, o = e.length; r < o; r++)
                va.resolve(e[r]).then(t, n);
            });
          }),
          (va._immediateFn =
            ("function" == typeof setImmediate &&
              function (e) {
                setImmediate(e);
              }) ||
            function (e) {
              ga(e, 0);
            }),
          (va._unhandledRejectionFn = function (e) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", e);
          });
        var _a = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== n.g) return n.g;
          throw new Error("unable to locate global object");
        })();
        "function" != typeof _a.Promise
          ? (_a.Promise = va)
          : (_a.Promise.prototype.finally ||
              (_a.Promise.prototype.finally = Aa),
            _a.Promise.allSettled || (_a.Promise.allSettled = ma)),
          (function (e) {
            function t() {}
            function n(e, t) {
              if (
                ((e = void 0 === e ? "utf-8" : e),
                (t = void 0 === t ? { fatal: !1 } : t),
                -1 === o.indexOf(e.toLowerCase()))
              )
                throw new RangeError(
                  "Failed to construct 'TextDecoder': The encoding label provided ('" +
                    e +
                    "') is invalid."
                );
              if (t.fatal)
                throw Error(
                  "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
                );
            }
            function r(e) {
              for (
                var t = 0,
                  n = Math.min(65536, e.length + 1),
                  r = new Uint16Array(n),
                  o = [],
                  i = 0;
                ;

              ) {
                var a = t < e.length;
                if (!a || i >= n - 1) {
                  if (
                    (o.push(String.fromCharCode.apply(null, r.subarray(0, i))),
                    !a)
                  )
                    return o.join("");
                  (e = e.subarray(t)), (i = t = 0);
                }
                if (0 == (128 & (a = e[t++]))) r[i++] = a;
                else if (192 == (224 & a)) {
                  var c = 63 & e[t++];
                  r[i++] = ((31 & a) << 6) | c;
                } else if (224 == (240 & a)) {
                  c = 63 & e[t++];
                  var s = 63 & e[t++];
                  r[i++] = ((31 & a) << 12) | (c << 6) | s;
                } else
                  240 == (248 & a) &&
                    (65535 <
                      (a =
                        ((7 & a) << 18) |
                        ((c = 63 & e[t++]) << 12) |
                        ((s = 63 & e[t++]) << 6) |
                        (63 & e[t++])) &&
                      ((a -= 65536),
                      (r[i++] = ((a >>> 10) & 1023) | 55296),
                      (a = 56320 | (1023 & a))),
                    (r[i++] = a));
              }
            }
            if (e.TextEncoder && e.TextDecoder) return !1;
            var o = ["utf-8", "utf8", "unicode-1-1-utf-8"];
            Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }),
              (t.prototype.encode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                  throw Error(
                    "Failed to encode: the 'stream' option is unsupported."
                  );
                t = 0;
                for (
                  var n = e.length,
                    r = 0,
                    o = Math.max(32, n + (n >>> 1) + 7),
                    i = new Uint8Array((o >>> 3) << 3);
                  t < n;

                ) {
                  var a = e.charCodeAt(t++);
                  if (55296 <= a && 56319 >= a) {
                    if (t < n) {
                      var c = e.charCodeAt(t);
                      56320 == (64512 & c) &&
                        (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
                    }
                    if (55296 <= a && 56319 >= a) continue;
                  }
                  if (
                    (r + 4 > i.length &&
                      ((o += 8),
                      (o = ((o *= 1 + (t / e.length) * 2) >>> 3) << 3),
                      (c = new Uint8Array(o)).set(i),
                      (i = c)),
                    0 == (4294967168 & a))
                  )
                    i[r++] = a;
                  else {
                    if (0 == (4294965248 & a)) i[r++] = ((a >>> 6) & 31) | 192;
                    else if (0 == (4294901760 & a))
                      (i[r++] = ((a >>> 12) & 15) | 224),
                        (i[r++] = ((a >>> 6) & 63) | 128);
                    else {
                      if (0 != (4292870144 & a)) continue;
                      (i[r++] = ((a >>> 18) & 7) | 240),
                        (i[r++] = ((a >>> 12) & 63) | 128),
                        (i[r++] = ((a >>> 6) & 63) | 128);
                    }
                    i[r++] = (63 & a) | 128;
                  }
                }
                return i.slice ? i.slice(0, r) : i.subarray(0, r);
              }),
              Object.defineProperty(n.prototype, "encoding", {
                value: "utf-8",
              }),
              Object.defineProperty(n.prototype, "fatal", { value: !1 }),
              Object.defineProperty(n.prototype, "ignoreBOM", { value: !1 });
            var i = r;
            "function" == typeof Buffer && Buffer.from
              ? (i = function (e) {
                  return Buffer.from(
                    e.buffer,
                    e.byteOffset,
                    e.byteLength
                  ).toString("utf-8");
                })
              : "function" == typeof Blob &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                (i = function (e) {
                  try {
                    var t = URL.createObjectURL(
                        new Blob([e], { type: "text/plain;charset=UTF-8" })
                      ),
                      n = new XMLHttpRequest();
                    return n.open("GET", t, !1), n.send(), n.responseText;
                  } catch (t) {
                    return r(e);
                  } finally {
                    t && URL.revokeObjectURL(t);
                  }
                }),
              (n.prototype.decode = function (e, t) {
                if ((t = void 0 === t ? { stream: !1 } : t).stream)
                  throw Error(
                    "Failed to decode: the 'stream' option is unsupported."
                  );
                return (
                  (e =
                    e instanceof Uint8Array
                      ? e
                      : e.buffer instanceof ArrayBuffer
                      ? new Uint8Array(e.buffer)
                      : new Uint8Array(e)),
                  i(e)
                );
              }),
              (e.TextEncoder = t),
              (e.TextDecoder = n);
          })("undefined" != typeof window ? window : d),
          (function () {
            function e(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function t(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function n(e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            }
            function r(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && i(e, t);
            }
            function o(e) {
              return (
                (o = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                o(e)
              );
            }
            function i(e, t) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
                i(e, t)
              );
            }
            function a(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function c(e, t) {
              return !t || ("object" != typeof t && "function" != typeof t)
                ? a(e)
                : t;
            }
            function s(e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = o(e));

              );
              return e;
            }
            function u(e, t, n) {
              return (
                (u =
                  "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                        var r = s(e, t);
                        if (r) {
                          var o = Object.getOwnPropertyDescriptor(r, t);
                          return o.get ? o.get.call(n) : o.value;
                        }
                      }),
                u(e, t, n || e)
              );
            }
            var l = (function () {
                function t() {
                  e(this, t),
                    Object.defineProperty(this, "listeners", {
                      value: {},
                      writable: !0,
                      configurable: !0,
                    });
                }
                return (
                  n(t, [
                    {
                      key: "addEventListener",
                      value: function (e, t, n) {
                        e in this.listeners || (this.listeners[e] = []),
                          this.listeners[e].push({ callback: t, options: n });
                      },
                    },
                    {
                      key: "removeEventListener",
                      value: function (e, t) {
                        if (e in this.listeners)
                          for (
                            var n = this.listeners[e], r = 0, o = n.length;
                            r < o;
                            r++
                          )
                            if (n[r].callback === t) return void n.splice(r, 1);
                      },
                    },
                    {
                      key: "dispatchEvent",
                      value: function (e) {
                        if (e.type in this.listeners) {
                          for (
                            var t = this.listeners[e.type].slice(),
                              n = 0,
                              r = t.length;
                            n < r;
                            n++
                          ) {
                            var o = t[n];
                            try {
                              o.callback.call(this, e);
                            } catch (e) {
                              Promise.resolve().then(function () {
                                throw e;
                              });
                            }
                            o.options &&
                              o.options.once &&
                              this.removeEventListener(e.type, o.callback);
                          }
                          return !e.defaultPrevented;
                        }
                      },
                    },
                  ]),
                  t
                );
              })(),
              f = (function (t) {
                r(s, t);
                var i = (function (e) {
                  var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })();
                  return function () {
                    var n,
                      r = o(e);
                    if (t) {
                      var i = o(this).constructor;
                      n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return c(this, n);
                  };
                })(s);
                function s() {
                  var t;
                  return (
                    e(this, s),
                    (t = i.call(this)).listeners || l.call(a(t)),
                    Object.defineProperty(a(t), "aborted", {
                      value: !1,
                      writable: !0,
                      configurable: !0,
                    }),
                    Object.defineProperty(a(t), "onabort", {
                      value: null,
                      writable: !0,
                      configurable: !0,
                    }),
                    t
                  );
                }
                return (
                  n(s, [
                    {
                      key: "toString",
                      value: function () {
                        return "[object AbortSignal]";
                      },
                    },
                    {
                      key: "dispatchEvent",
                      value: function (e) {
                        "abort" === e.type &&
                          ((this.aborted = !0),
                          "function" == typeof this.onabort &&
                            this.onabort.call(this, e)),
                          u(o(s.prototype), "dispatchEvent", this).call(
                            this,
                            e
                          );
                      },
                    },
                  ]),
                  s
                );
              })(l),
              h = (function () {
                function t() {
                  e(this, t),
                    Object.defineProperty(this, "signal", {
                      value: new f(),
                      writable: !0,
                      configurable: !0,
                    });
                }
                return (
                  n(t, [
                    {
                      key: "abort",
                      value: function () {
                        var e;
                        try {
                          e = new Event("abort");
                        } catch (t) {
                          "undefined" != typeof document
                            ? document.createEvent
                              ? (e = document.createEvent("Event")).initEvent(
                                  "abort",
                                  !1,
                                  !1
                                )
                              : ((e = document.createEventObject()).type =
                                  "abort")
                            : (e = {
                                type: "abort",
                                bubbles: !1,
                                cancelable: !1,
                              });
                        }
                        this.signal.dispatchEvent(e);
                      },
                    },
                    {
                      key: "toString",
                      value: function () {
                        return "[object AbortController]";
                      },
                    },
                  ]),
                  t
                );
              })();
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              ((h.prototype[Symbol.toStringTag] = "AbortController"),
              (f.prototype[Symbol.toStringTag] = "AbortSignal")),
              (function (e) {
                (function (e) {
                  return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                    ? (console.log(
                        "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
                      ),
                      !0)
                    : ("function" == typeof e.Request &&
                        !e.Request.prototype.hasOwnProperty("signal")) ||
                        !e.AbortController;
                })(e) && ((e.AbortController = h), (e.AbortSignal = f));
              })("undefined" != typeof self ? self : d);
          })();
        var Ia = h(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e() {
              var e = this;
              (this.locked = new Map()),
                (this.addToLocked = function (t, n) {
                  var r = e.locked.get(t);
                  void 0 === r
                    ? void 0 === n
                      ? e.locked.set(t, [])
                      : e.locked.set(t, [n])
                    : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
                }),
                (this.isLocked = function (t) {
                  return e.locked.has(t);
                }),
                (this.lock = function (t) {
                  return new Promise(function (n, r) {
                    e.isLocked(t)
                      ? e.addToLocked(t, n)
                      : (e.addToLocked(t), n());
                  });
                }),
                (this.unlock = function (t) {
                  var n = e.locked.get(t);
                  if (void 0 !== n && 0 !== n.length) {
                    var r = n.pop();
                    e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
                  } else e.locked.delete(t);
                });
            }
            return (
              (e.getInstance = function () {
                return (
                  void 0 === e.instance && (e.instance = new e()), e.instance
                );
              }),
              e
            );
          })();
          t.default = function () {
            return n.getInstance();
          };
        });
        f(Ia);
        var Ba = h(function (e, t) {
            var n =
                (d && d.__awaiter) ||
                function (e, t, n, r) {
                  return new (n || (n = Promise))(function (o, i) {
                    function a(e) {
                      try {
                        s(r.next(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function c(e) {
                      try {
                        s(r.throw(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function s(e) {
                      e.done
                        ? o(e.value)
                        : new n(function (t) {
                            t(e.value);
                          }).then(a, c);
                    }
                    s((r = r.apply(e, t || [])).next());
                  });
                },
              r =
                (d && d.__generator) ||
                function (e, t) {
                  var n,
                    r,
                    o,
                    i,
                    a = {
                      label: 0,
                      sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (i = { next: c(0), throw: c(1), return: c(2) }),
                    "function" == typeof Symbol &&
                      (i[Symbol.iterator] = function () {
                        return this;
                      }),
                    i
                  );
                  function c(i) {
                    return function (c) {
                      return (function (i) {
                        if (n)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        for (; a; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (o =
                                  2 & i[0]
                                    ? r.return
                                    : i[0]
                                    ? r.throw ||
                                      ((o = r.return) && o.call(r), 0)
                                    : r.next) &&
                                !(o = o.call(r, i[1])).done)
                            )
                              return o;
                            switch (
                              ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                            ) {
                              case 0:
                              case 1:
                                o = i;
                                break;
                              case 4:
                                return a.label++, { value: i[1], done: !1 };
                              case 5:
                                a.label++, (r = i[1]), (i = [0]);
                                continue;
                              case 7:
                                (i = a.ops.pop()), a.trys.pop();
                                continue;
                              default:
                                if (
                                  !(
                                    (o =
                                      (o = a.trys).length > 0 &&
                                      o[o.length - 1]) ||
                                    (6 !== i[0] && 2 !== i[0])
                                  )
                                ) {
                                  a = 0;
                                  continue;
                                }
                                if (
                                  3 === i[0] &&
                                  (!o || (i[1] > o[0] && i[1] < o[3]))
                                ) {
                                  a.label = i[1];
                                  break;
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                  (a.label = o[1]), (o = i);
                                  break;
                                }
                                if (o && a.label < o[2]) {
                                  (a.label = o[2]), a.ops.push(i);
                                  break;
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue;
                            }
                            i = t.call(e, a);
                          } catch (e) {
                            (i = [6, e]), (r = 0);
                          } finally {
                            n = o = 0;
                          }
                        if (5 & i[0]) throw i[1];
                        return { value: i[0] ? i[1] : void 0, done: !0 };
                      })([i, c]);
                    };
                  }
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = "browser-tabs-lock-key";
            function i(e) {
              return new Promise(function (t) {
                return setTimeout(t, e);
              });
            }
            function a(e) {
              for (
                var t =
                    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
                  n = "",
                  r = 0;
                r < e;
                r++
              )
                n += t[Math.floor(Math.random() * t.length)];
              return n;
            }
            var c = (function () {
              function e() {
                (this.acquiredIatSet = new Set()),
                  (this.id = Date.now().toString() + a(15)),
                  (this.acquireLock = this.acquireLock.bind(this)),
                  (this.releaseLock = this.releaseLock.bind(this)),
                  (this.releaseLock__private__ =
                    this.releaseLock__private__.bind(this)),
                  (this.waitForSomethingToChange =
                    this.waitForSomethingToChange.bind(this)),
                  (this.refreshLockWhileAcquired =
                    this.refreshLockWhileAcquired.bind(this)),
                  void 0 === e.waiters && (e.waiters = []);
              }
              return (
                (e.prototype.acquireLock = function (t, c) {
                  return (
                    void 0 === c && (c = 5e3),
                    n(this, void 0, void 0, function () {
                      var n, s, u, l, d, f;
                      return r(this, function (r) {
                        switch (r.label) {
                          case 0:
                            (n = Date.now() + a(4)),
                              (s = Date.now() + c),
                              (u = o + "-" + t),
                              (l = window.localStorage),
                              (r.label = 1);
                          case 1:
                            return Date.now() < s ? [4, i(30)] : [3, 8];
                          case 2:
                            return (
                              r.sent(),
                              null !== l.getItem(u)
                                ? [3, 5]
                                : ((d = this.id + "-" + t + "-" + n),
                                  [4, i(Math.floor(25 * Math.random()))])
                            );
                          case 3:
                            return (
                              r.sent(),
                              l.setItem(
                                u,
                                JSON.stringify({
                                  id: this.id,
                                  iat: n,
                                  timeoutKey: d,
                                  timeAcquired: Date.now(),
                                  timeRefreshed: Date.now(),
                                })
                              ),
                              [4, i(30)]
                            );
                          case 4:
                            return (
                              r.sent(),
                              null !== (f = l.getItem(u)) &&
                              (f = JSON.parse(f)).id === this.id &&
                              f.iat === n
                                ? (this.acquiredIatSet.add(n),
                                  this.refreshLockWhileAcquired(u, n),
                                  [2, !0])
                                : [3, 7]
                            );
                          case 5:
                            return (
                              e.lockCorrector(),
                              [4, this.waitForSomethingToChange(s)]
                            );
                          case 6:
                            r.sent(), (r.label = 7);
                          case 7:
                            return (n = Date.now() + a(4)), [3, 1];
                          case 8:
                            return [2, !1];
                        }
                      });
                    })
                  );
                }),
                (e.prototype.refreshLockWhileAcquired = function (e, t) {
                  return n(this, void 0, void 0, function () {
                    var o = this;
                    return r(this, function (i) {
                      return (
                        setTimeout(function () {
                          return n(o, void 0, void 0, function () {
                            var n, o;
                            return r(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, Ia.default().lock(t)];
                                case 1:
                                  return (
                                    r.sent(),
                                    this.acquiredIatSet.has(t)
                                      ? ((n = window.localStorage),
                                        null === (o = n.getItem(e))
                                          ? (Ia.default().unlock(t), [2])
                                          : (((o =
                                              JSON.parse(o)).timeRefreshed =
                                              Date.now()),
                                            n.setItem(e, JSON.stringify(o)),
                                            Ia.default().unlock(t),
                                            this.refreshLockWhileAcquired(e, t),
                                            [2]))
                                      : (Ia.default().unlock(t), [2])
                                  );
                              }
                            });
                          });
                        }, 1e3),
                        [2]
                      );
                    });
                  });
                }),
                (e.prototype.waitForSomethingToChange = function (t) {
                  return n(this, void 0, void 0, function () {
                    return r(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [
                            4,
                            new Promise(function (n) {
                              var r = !1,
                                o = Date.now(),
                                i = !1;
                              function a() {
                                if (
                                  (i ||
                                    (window.removeEventListener("storage", a),
                                    e.removeFromWaiting(a),
                                    clearTimeout(c),
                                    (i = !0)),
                                  !r)
                                ) {
                                  r = !0;
                                  var t = 50 - (Date.now() - o);
                                  t > 0 ? setTimeout(n, t) : n();
                                }
                              }
                              window.addEventListener("storage", a),
                                e.addToWaiting(a);
                              var c = setTimeout(
                                a,
                                Math.max(0, t - Date.now())
                              );
                            }),
                          ];
                        case 1:
                          return n.sent(), [2];
                      }
                    });
                  });
                }),
                (e.addToWaiting = function (t) {
                  this.removeFromWaiting(t),
                    void 0 !== e.waiters && e.waiters.push(t);
                }),
                (e.removeFromWaiting = function (t) {
                  void 0 !== e.waiters &&
                    (e.waiters = e.waiters.filter(function (e) {
                      return e !== t;
                    }));
                }),
                (e.notifyWaiters = function () {
                  void 0 !== e.waiters &&
                    e.waiters.slice().forEach(function (e) {
                      return e();
                    });
                }),
                (e.prototype.releaseLock = function (e) {
                  return n(this, void 0, void 0, function () {
                    return r(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.releaseLock__private__(e)];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                }),
                (e.prototype.releaseLock__private__ = function (t) {
                  return n(this, void 0, void 0, function () {
                    var n, i, a;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (n = window.localStorage),
                            (i = o + "-" + t),
                            null === (a = n.getItem(i))
                              ? [2]
                              : (a = JSON.parse(a)).id !== this.id
                              ? [3, 2]
                              : [4, Ia.default().lock(a.iat)]
                          );
                        case 1:
                          r.sent(),
                            this.acquiredIatSet.delete(a.iat),
                            n.removeItem(i),
                            Ia.default().unlock(a.iat),
                            e.notifyWaiters(),
                            (r.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                (e.lockCorrector = function () {
                  for (
                    var t = Date.now() - 5e3,
                      n = window.localStorage,
                      r = Object.keys(n),
                      i = !1,
                      a = 0;
                    a < r.length;
                    a++
                  ) {
                    var c = r[a];
                    if (c.includes(o)) {
                      var s = n.getItem(c);
                      null !== s &&
                        ((void 0 === (s = JSON.parse(s)).timeRefreshed &&
                          s.timeAcquired < t) ||
                          (void 0 !== s.timeRefreshed &&
                            s.timeRefreshed < t)) &&
                        (n.removeItem(c), (i = !0));
                    }
                  }
                  i && e.notifyWaiters();
                }),
                (e.waiters = void 0),
                e
              );
            })();
            t.default = c;
          }),
          Oa = f(Ba),
          ja = { timeoutInSeconds: 60 },
          Ta = [
            "login_required",
            "consent_required",
            "interaction_required",
            "account_selection_required",
            "access_denied",
          ],
          La = { name: "auth0-spa-js", version: "1.22.2" },
          Ra = function () {
            return Date.now();
          },
          Fa = (function (e) {
            function t(n, r) {
              var o = e.call(this, r) || this;
              return (
                (o.error = n),
                (o.error_description = r),
                Object.setPrototypeOf(o, t.prototype),
                o
              );
            }
            return (
              o(t, e),
              (t.fromPayload = function (e) {
                return new t(e.error, e.error_description);
              }),
              t
            );
          })(Error),
          Wa = (function (e) {
            function t(n, r, o, i) {
              void 0 === i && (i = null);
              var a = e.call(this, n, r) || this;
              return (
                (a.state = o),
                (a.appState = i),
                Object.setPrototypeOf(a, t.prototype),
                a
              );
            }
            return o(t, e), t;
          })(Fa),
          Ga = (function (e) {
            function t() {
              var n = e.call(this, "timeout", "Timeout") || this;
              return Object.setPrototypeOf(n, t.prototype), n;
            }
            return o(t, e), t;
          })(Fa),
          Za = (function (e) {
            function t(n) {
              var r = e.call(this) || this;
              return (r.popup = n), Object.setPrototypeOf(r, t.prototype), r;
            }
            return o(t, e), t;
          })(Ga),
          Pa = (function (e) {
            function t(n) {
              var r = e.call(this, "cancelled", "Popup closed") || this;
              return (r.popup = n), Object.setPrototypeOf(r, t.prototype), r;
            }
            return o(t, e), t;
          })(Fa),
          Na = (function (e) {
            function t(n, r, o) {
              var i = e.call(this, n, r) || this;
              return (
                (i.mfa_token = o), Object.setPrototypeOf(i, t.prototype), i
              );
            }
            return o(t, e), t;
          })(Fa),
          Da = (function (e) {
            function t(n, r) {
              var o =
                e.call(
                  this,
                  "missing_refresh_token",
                  "Missing Refresh Token (audience: '"
                    .concat(Qa(n, ["default"]), "', scope: '")
                    .concat(Qa(r), "')")
                ) || this;
              return (
                (o.audience = n),
                (o.scope = r),
                Object.setPrototypeOf(o, t.prototype),
                o
              );
            }
            return o(t, e), t;
          })(Fa),
          Ka = function (e) {
            return new Promise(function (t, n) {
              var r,
                o = setInterval(function () {
                  e.popup &&
                    e.popup.closed &&
                    (clearInterval(o),
                    clearTimeout(i),
                    window.removeEventListener("message", r, !1),
                    n(new Pa(e.popup)));
                }, 1e3),
                i = setTimeout(function () {
                  clearInterval(o),
                    n(new Za(e.popup)),
                    window.removeEventListener("message", r, !1);
                }, 1e3 * (e.timeoutInSeconds || 60));
              (r = function (a) {
                if (a.data && "authorization_response" === a.data.type) {
                  if (
                    (clearTimeout(i),
                    clearInterval(o),
                    window.removeEventListener("message", r, !1),
                    e.popup.close(),
                    a.data.response.error)
                  )
                    return n(Fa.fromPayload(a.data.response));
                  t(a.data.response);
                }
              }),
                window.addEventListener("message", r);
            });
          },
          Ua = function () {
            return window.crypto || window.msCrypto;
          },
          Xa = function () {
            var e = Ua();
            return e.subtle || e.webkitSubtle;
          },
          Ya = function () {
            var e =
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",
              t = "";
            return (
              Array.from(Ua().getRandomValues(new Uint8Array(43))).forEach(
                function (n) {
                  return (t += e[n % e.length]);
                }
              ),
              t
            );
          },
          za = function (e) {
            return btoa(e);
          },
          Ha = function (e) {
            return Object.keys(e)
              .filter(function (t) {
                return void 0 !== e[t];
              })
              .map(function (t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
              })
              .join("&");
          },
          Ja = function (e) {
            return c(void 0, void 0, void 0, function () {
              var t;
              return s(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = Xa().digest(
                        { name: "SHA-256" },
                        new TextEncoder().encode(e)
                      )),
                      window.msCrypto
                        ? [
                            2,
                            new Promise(function (e, n) {
                              (t.oncomplete = function (t) {
                                e(t.target.result);
                              }),
                                (t.onerror = function (e) {
                                  n(e.error);
                                }),
                                (t.onabort = function () {
                                  n("The digest operation was aborted");
                                });
                            }),
                          ]
                        : [4, t]
                    );
                  case 1:
                    return [2, n.sent()];
                }
              });
            });
          },
          Ma = function (e) {
            return (function (e) {
              return decodeURIComponent(
                atob(e)
                  .split("")
                  .map(function (e) {
                    return (
                      "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    );
                  })
                  .join("")
              );
            })(e.replace(/_/g, "/").replace(/-/g, "+"));
          },
          Va = function (e) {
            var t = new Uint8Array(e);
            return (function (e) {
              var t = { "+": "-", "/": "_", "=": "" };
              return e.replace(/[+/=]/g, function (e) {
                return t[e];
              });
            })(
              window.btoa(
                String.fromCharCode.apply(String, l([], u(Array.from(t)), !1))
              )
            );
          };
        function Qa(e, t) {
          return void 0 === t && (t = []), e && !t.includes(e) ? e : "";
        }
        var qa = function (e, t) {
            return c(void 0, void 0, void 0, function () {
              var n, r;
              return s(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [
                      4,
                      ((i = e),
                      (a = t),
                      (a = a || {}),
                      new Promise(function (e, t) {
                        var n = new XMLHttpRequest(),
                          r = [],
                          o = [],
                          c = {},
                          s = function () {
                            return {
                              ok: 2 == ((n.status / 100) | 0),
                              statusText: n.statusText,
                              status: n.status,
                              url: n.responseURL,
                              text: function () {
                                return Promise.resolve(n.responseText);
                              },
                              json: function () {
                                return Promise.resolve(n.responseText).then(
                                  JSON.parse
                                );
                              },
                              blob: function () {
                                return Promise.resolve(new Blob([n.response]));
                              },
                              clone: s,
                              headers: {
                                keys: function () {
                                  return r;
                                },
                                entries: function () {
                                  return o;
                                },
                                get: function (e) {
                                  return c[e.toLowerCase()];
                                },
                                has: function (e) {
                                  return e.toLowerCase() in c;
                                },
                              },
                            };
                          };
                        for (var u in (n.open(a.method || "get", i, !0),
                        (n.onload = function () {
                          n
                            .getAllResponseHeaders()
                            .replace(
                              /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                              function (e, t, n) {
                                r.push((t = t.toLowerCase())),
                                  o.push([t, n]),
                                  (c[t] = c[t] ? c[t] + "," + n : n);
                              }
                            ),
                            e(s());
                        }),
                        (n.onerror = t),
                        (n.withCredentials = "include" == a.credentials),
                        a.headers))
                          n.setRequestHeader(u, a.headers[u]);
                        n.send(a.body || null);
                      })),
                    ];
                  case 1:
                    return (n = o.sent()), (r = { ok: n.ok }), [4, n.json()];
                  case 2:
                    return [2, ((r.json = o.sent()), r)];
                }
                var i, a;
              });
            });
          },
          $a = function (e, t, n) {
            return c(void 0, void 0, void 0, function () {
              var r, o;
              return s(this, function (i) {
                return (
                  (r = new AbortController()),
                  (t.signal = r.signal),
                  [
                    2,
                    Promise.race([
                      qa(e, t),
                      new Promise(function (e, t) {
                        o = setTimeout(function () {
                          r.abort(),
                            t(new Error("Timeout when executing 'fetch'"));
                        }, n);
                      }),
                    ]).finally(function () {
                      clearTimeout(o);
                    }),
                  ]
                );
              });
            });
          },
          ec = function (e, t, n, r, o, i, a) {
            return c(void 0, void 0, void 0, function () {
              return s(this, function (c) {
                return [
                  2,
                  ((s = {
                    auth: { audience: t, scope: n },
                    timeout: o,
                    fetchUrl: e,
                    fetchOptions: r,
                    useFormData: a,
                  }),
                  (u = i),
                  new Promise(function (e, t) {
                    var n = new MessageChannel();
                    (n.port1.onmessage = function (n) {
                      n.data.error ? t(new Error(n.data.error)) : e(n.data);
                    }),
                      u.postMessage(s, [n.port2]);
                  })),
                ];
                var s, u;
              });
            });
          },
          tc = function (e, t, n, r, o, i, a) {
            return (
              void 0 === a && (a = 1e4),
              c(void 0, void 0, void 0, function () {
                return s(this, function (c) {
                  return o ? [2, ec(e, t, n, r, a, o, i)] : [2, $a(e, r, a)];
                });
              })
            );
          };
        function nc(e, t, n, r, o, i, u) {
          return c(this, void 0, void 0, function () {
            var c, l, d, f, h, p, A, m, g;
            return s(this, function (s) {
              switch (s.label) {
                case 0:
                  (c = null), (d = 0), (s.label = 1);
                case 1:
                  if (!(d < 3)) return [3, 6];
                  s.label = 2;
                case 2:
                  return s.trys.push([2, 4, , 5]), [4, tc(e, n, r, o, i, u, t)];
                case 3:
                  return (l = s.sent()), (c = null), [3, 6];
                case 4:
                  return (f = s.sent()), (c = f), [3, 5];
                case 5:
                  return d++, [3, 1];
                case 6:
                  if (c)
                    throw ((c.message = c.message || "Failed to fetch"), c);
                  if (
                    ((h = l.json),
                    (p = h.error),
                    (A = h.error_description),
                    (m = a(h, ["error", "error_description"])),
                    !l.ok)
                  ) {
                    if (
                      ((g = A || "HTTP error. Unable to fetch ".concat(e)),
                      "mfa_required" === p)
                    )
                      throw new Na(p, g, m.mfa_token);
                    throw new Fa(p || "request_error", g);
                  }
                  return [2, m];
              }
            });
          });
        }
        function rc(e, t) {
          var n = e.baseUrl,
            r = e.timeout,
            o = e.audience,
            i = e.scope,
            u = e.auth0Client,
            l = e.useFormData,
            d = a(e, [
              "baseUrl",
              "timeout",
              "audience",
              "scope",
              "auth0Client",
              "useFormData",
            ]);
          return c(this, void 0, void 0, function () {
            var e;
            return s(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (e = l ? Ha(d) : JSON.stringify(d)),
                    [
                      4,
                      nc(
                        "".concat(n, "/oauth/token"),
                        r,
                        o || "default",
                        i,
                        {
                          method: "POST",
                          body: e,
                          headers: {
                            "Content-Type": l
                              ? "application/x-www-form-urlencoded"
                              : "application/json",
                            "Auth0-Client": btoa(JSON.stringify(u || La)),
                          },
                        },
                        t,
                        l
                      ),
                    ]
                  );
                case 1:
                  return [2, a.sent()];
              }
            });
          });
        }
        var oc = function (e) {
            return Array.from(new Set(e));
          },
          ic = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return oc(e.join(" ").trim().split(/\s+/)).join(" ");
          },
          ac = (function () {
            function e(e, t) {
              void 0 === t && (t = "@@auth0spajs@@"),
                (this.prefix = t),
                (this.client_id = e.client_id),
                (this.scope = e.scope),
                (this.audience = e.audience);
            }
            return (
              (e.prototype.toKey = function () {
                return ""
                  .concat(this.prefix, "::")
                  .concat(this.client_id, "::")
                  .concat(this.audience, "::")
                  .concat(this.scope);
              }),
              (e.fromKey = function (t) {
                var n = u(t.split("::"), 4),
                  r = n[0],
                  o = n[1],
                  i = n[2];
                return new e({ client_id: o, scope: n[3], audience: i }, r);
              }),
              (e.fromCacheEntry = function (t) {
                return new e({
                  scope: t.scope,
                  audience: t.audience,
                  client_id: t.client_id,
                });
              }),
              e
            );
          })(),
          cc = (function () {
            function e() {}
            return (
              (e.prototype.set = function (e, t) {
                localStorage.setItem(e, JSON.stringify(t));
              }),
              (e.prototype.get = function (e) {
                var t = window.localStorage.getItem(e);
                if (t)
                  try {
                    return JSON.parse(t);
                  } catch (e) {
                    return;
                  }
              }),
              (e.prototype.remove = function (e) {
                localStorage.removeItem(e);
              }),
              (e.prototype.allKeys = function () {
                return Object.keys(window.localStorage).filter(function (e) {
                  return e.startsWith("@@auth0spajs@@");
                });
              }),
              e
            );
          })(),
          sc = function () {
            var e;
            this.enclosedCache =
              ((e = {}),
              {
                set: function (t, n) {
                  e[t] = n;
                },
                get: function (t) {
                  var n = e[t];
                  if (n) return n;
                },
                remove: function (t) {
                  delete e[t];
                },
                allKeys: function () {
                  return Object.keys(e);
                },
              });
          },
          uc = (function () {
            function e(e, t, n) {
              (this.cache = e),
                (this.keyManifest = t),
                (this.nowProvider = n),
                (this.nowProvider = this.nowProvider || Ra);
            }
            return (
              (e.prototype.get = function (e, t) {
                var n;
                return (
                  void 0 === t && (t = 0),
                  c(this, void 0, void 0, function () {
                    var r, o, i, a, c;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, this.cache.get(e.toKey())];
                        case 1:
                          return (r = s.sent())
                            ? [3, 4]
                            : [4, this.getCacheKeys()];
                        case 2:
                          return (o = s.sent())
                            ? (i = this.matchExistingCacheKey(e, o))
                              ? [4, this.cache.get(i)]
                              : [3, 4]
                            : [2];
                        case 3:
                          (r = s.sent()), (s.label = 4);
                        case 4:
                          return r ? [4, this.nowProvider()] : [2];
                        case 5:
                          return (
                            (a = s.sent()),
                            (c = Math.floor(a / 1e3)),
                            r.expiresAt - t < c
                              ? r.body.refresh_token
                                ? ((r.body = {
                                    refresh_token: r.body.refresh_token,
                                  }),
                                  [4, this.cache.set(e.toKey(), r)])
                                : [3, 7]
                              : [3, 10]
                          );
                        case 6:
                          return s.sent(), [2, r.body];
                        case 7:
                          return [4, this.cache.remove(e.toKey())];
                        case 8:
                          return (
                            s.sent(),
                            [
                              4,
                              null === (n = this.keyManifest) || void 0 === n
                                ? void 0
                                : n.remove(e.toKey()),
                            ]
                          );
                        case 9:
                          return s.sent(), [2];
                        case 10:
                          return [2, r.body];
                      }
                    });
                  })
                );
              }),
              (e.prototype.set = function (e) {
                var t;
                return c(this, void 0, void 0, function () {
                  var n, r;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (n = new ac({
                            client_id: e.client_id,
                            scope: e.scope,
                            audience: e.audience,
                          })),
                          [4, this.wrapCacheEntry(e)]
                        );
                      case 1:
                        return (
                          (r = o.sent()), [4, this.cache.set(n.toKey(), r)]
                        );
                      case 2:
                        return (
                          o.sent(),
                          [
                            4,
                            null === (t = this.keyManifest) || void 0 === t
                              ? void 0
                              : t.add(n.toKey()),
                          ]
                        );
                      case 3:
                        return o.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.clear = function (e) {
                var t;
                return c(this, void 0, void 0, function () {
                  var n,
                    r = this;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [4, this.getCacheKeys()];
                      case 1:
                        return (n = o.sent())
                          ? [
                              4,
                              n
                                .filter(function (t) {
                                  return !e || t.includes(e);
                                })
                                .reduce(function (e, t) {
                                  return c(r, void 0, void 0, function () {
                                    return s(this, function (n) {
                                      switch (n.label) {
                                        case 0:
                                          return [4, e];
                                        case 1:
                                          return (
                                            n.sent(), [4, this.cache.remove(t)]
                                          );
                                        case 2:
                                          return n.sent(), [2];
                                      }
                                    });
                                  });
                                }, Promise.resolve()),
                            ]
                          : [2];
                      case 2:
                        return (
                          o.sent(),
                          [
                            4,
                            null === (t = this.keyManifest) || void 0 === t
                              ? void 0
                              : t.clear(),
                          ]
                        );
                      case 3:
                        return o.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.clearSync = function (e) {
                var t = this,
                  n = this.cache.allKeys();
                n &&
                  n
                    .filter(function (t) {
                      return !e || t.includes(e);
                    })
                    .forEach(function (e) {
                      t.cache.remove(e);
                    });
              }),
              (e.prototype.wrapCacheEntry = function (e) {
                return c(this, void 0, void 0, function () {
                  var t, n, r;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [4, this.nowProvider()];
                      case 1:
                        return (
                          (t = o.sent()),
                          (n = Math.floor(t / 1e3) + e.expires_in),
                          (r = Math.min(n, e.decodedToken.claims.exp)),
                          [2, { body: e, expiresAt: r }]
                        );
                    }
                  });
                });
              }),
              (e.prototype.getCacheKeys = function () {
                var e;
                return c(this, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return this.keyManifest
                          ? [4, this.keyManifest.get()]
                          : [3, 2];
                      case 1:
                        return (
                          (t =
                            null === (e = n.sent()) || void 0 === e
                              ? void 0
                              : e.keys),
                          [3, 4]
                        );
                      case 2:
                        return [4, this.cache.allKeys()];
                      case 3:
                        (t = n.sent()), (n.label = 4);
                      case 4:
                        return [2, t];
                    }
                  });
                });
              }),
              (e.prototype.matchExistingCacheKey = function (e, t) {
                return t.filter(function (t) {
                  var n = ac.fromKey(t),
                    r = new Set(n.scope && n.scope.split(" ")),
                    o = e.scope.split(" "),
                    i =
                      n.scope &&
                      o.reduce(function (e, t) {
                        return e && r.has(t);
                      }, !0);
                  return (
                    "@@auth0spajs@@" === n.prefix &&
                    n.client_id === e.client_id &&
                    n.audience === e.audience &&
                    i
                  );
                })[0];
              }),
              e
            );
          })(),
          lc = (function () {
            function e(e, t) {
              (this.storage = e),
                (this.clientId = t),
                (this.storageKey = ""
                  .concat("a0.spajs.txs", ".")
                  .concat(this.clientId)),
                (this.transaction = this.storage.get(this.storageKey));
            }
            return (
              (e.prototype.create = function (e) {
                (this.transaction = e),
                  this.storage.save(this.storageKey, e, { daysUntilExpire: 1 });
              }),
              (e.prototype.get = function () {
                return this.transaction;
              }),
              (e.prototype.remove = function () {
                delete this.transaction, this.storage.remove(this.storageKey);
              }),
              e
            );
          })(),
          dc = function (e) {
            return "number" == typeof e;
          },
          fc = [
            "iss",
            "aud",
            "exp",
            "nbf",
            "iat",
            "jti",
            "azp",
            "nonce",
            "auth_time",
            "at_hash",
            "c_hash",
            "acr",
            "amr",
            "sub_jwk",
            "cnf",
            "sip_from_tag",
            "sip_date",
            "sip_callid",
            "sip_cseq_num",
            "sip_via_branch",
            "orig",
            "dest",
            "mky",
            "events",
            "toe",
            "txn",
            "rph",
            "sid",
            "vot",
            "vtm",
          ],
          hc = function (e) {
            if (!e.id_token)
              throw new Error("ID token is required but missing");
            var t = (function (e) {
              var t = e.split("."),
                n = u(t, 3),
                r = n[0],
                o = n[1],
                i = n[2];
              if (3 !== t.length || !r || !o || !i)
                throw new Error("ID token could not be decoded");
              var a = JSON.parse(Ma(o)),
                c = { __raw: e },
                s = {};
              return (
                Object.keys(a).forEach(function (e) {
                  (c[e] = a[e]), fc.includes(e) || (s[e] = a[e]);
                }),
                {
                  encoded: { header: r, payload: o, signature: i },
                  header: JSON.parse(Ma(r)),
                  claims: c,
                  user: s,
                }
              );
            })(e.id_token);
            if (!t.claims.iss)
              throw new Error(
                "Issuer (iss) claim must be a string present in the ID token"
              );
            if (t.claims.iss !== e.iss)
              throw new Error(
                'Issuer (iss) claim mismatch in the ID token; expected "'
                  .concat(e.iss, '", found "')
                  .concat(t.claims.iss, '"')
              );
            if (!t.user.sub)
              throw new Error(
                "Subject (sub) claim must be a string present in the ID token"
              );
            if ("RS256" !== t.header.alg)
              throw new Error(
                'Signature algorithm of "'.concat(
                  t.header.alg,
                  '" is not supported. Expected the ID token to be signed with "RS256".'
                )
              );
            if (
              !t.claims.aud ||
              ("string" != typeof t.claims.aud && !Array.isArray(t.claims.aud))
            )
              throw new Error(
                "Audience (aud) claim must be a string or array of strings present in the ID token"
              );
            if (Array.isArray(t.claims.aud)) {
              if (!t.claims.aud.includes(e.aud))
                throw new Error(
                  'Audience (aud) claim mismatch in the ID token; expected "'
                    .concat(e.aud, '" but was not one of "')
                    .concat(t.claims.aud.join(", "), '"')
                );
              if (t.claims.aud.length > 1) {
                if (!t.claims.azp)
                  throw new Error(
                    "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
                  );
                if (t.claims.azp !== e.aud)
                  throw new Error(
                    'Authorized Party (azp) claim mismatch in the ID token; expected "'
                      .concat(e.aud, '", found "')
                      .concat(t.claims.azp, '"')
                  );
              }
            } else if (t.claims.aud !== e.aud)
              throw new Error(
                'Audience (aud) claim mismatch in the ID token; expected "'
                  .concat(e.aud, '" but found "')
                  .concat(t.claims.aud, '"')
              );
            if (e.nonce) {
              if (!t.claims.nonce)
                throw new Error(
                  "Nonce (nonce) claim must be a string present in the ID token"
                );
              if (t.claims.nonce !== e.nonce)
                throw new Error(
                  'Nonce (nonce) claim mismatch in the ID token; expected "'
                    .concat(e.nonce, '", found "')
                    .concat(t.claims.nonce, '"')
                );
            }
            if (e.max_age && !dc(t.claims.auth_time))
              throw new Error(
                "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
              );
            if (!dc(t.claims.exp))
              throw new Error(
                "Expiration Time (exp) claim must be a number present in the ID token"
              );
            if (!dc(t.claims.iat))
              throw new Error(
                "Issued At (iat) claim must be a number present in the ID token"
              );
            var n = e.leeway || 60,
              r = new Date(e.now || Date.now()),
              o = new Date(0),
              i = new Date(0),
              a = new Date(0);
            if (
              (a.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
              o.setUTCSeconds(t.claims.exp + n),
              i.setUTCSeconds(t.claims.nbf - n),
              r > o)
            )
              throw new Error(
                "Expiration Time (exp) claim error in the ID token; current time ("
                  .concat(r, ") is after expiration time (")
                  .concat(o, ")")
              );
            if (dc(t.claims.nbf) && r < i)
              throw new Error(
                "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time ("
                  .concat(r, ") is before ")
                  .concat(i)
              );
            if (dc(t.claims.auth_time) && r > a)
              throw new Error(
                "Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time ("
                  .concat(r, ") is after last auth at ")
                  .concat(a)
              );
            if (e.organizationId) {
              if (!t.claims.org_id)
                throw new Error(
                  "Organization ID (org_id) claim must be a string present in the ID token"
                );
              if (e.organizationId !== t.claims.org_id)
                throw new Error(
                  'Organization ID (org_id) claim mismatch in the ID token; expected "'
                    .concat(e.organizationId, '", found "')
                    .concat(t.claims.org_id, '"')
                );
            }
            return t;
          },
          pc = h(function (e, t) {
            var n =
              (d && d.__assign) ||
              function () {
                return (
                  (n =
                    Object.assign ||
                    function (e) {
                      for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }),
                  n.apply(this, arguments)
                );
              };
            function r(e, t) {
              if (!t) return "";
              var n = "; " + e;
              return !0 === t ? n : n + "=" + t;
            }
            function o(e, t, n) {
              return (
                encodeURIComponent(e)
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/\(/g, "%28")
                  .replace(/\)/g, "%29") +
                "=" +
                encodeURIComponent(t).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                ) +
                (function (e) {
                  if ("number" == typeof e.expires) {
                    var t = new Date();
                    t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                      (e.expires = t);
                  }
                  return (
                    r("Expires", e.expires ? e.expires.toUTCString() : "") +
                    r("Domain", e.domain) +
                    r("Path", e.path) +
                    r("Secure", e.secure) +
                    r("SameSite", e.sameSite)
                  );
                })(n)
              );
            }
            function i(e) {
              for (
                var t = {},
                  n = e ? e.split("; ") : [],
                  r = /(%[\dA-F]{2})+/gi,
                  o = 0;
                o < n.length;
                o++
              ) {
                var i = n[o].split("="),
                  a = i.slice(1).join("=");
                '"' === a.charAt(0) && (a = a.slice(1, -1));
                try {
                  t[i[0].replace(r, decodeURIComponent)] = a.replace(
                    r,
                    decodeURIComponent
                  );
                } catch (e) {}
              }
              return t;
            }
            function a() {
              return i(document.cookie);
            }
            function c(e, t, r) {
              document.cookie = o(e, t, n({ path: "/" }, r));
            }
            (t.__esModule = !0),
              (t.encode = o),
              (t.parse = i),
              (t.getAll = a),
              (t.get = function (e) {
                return a()[e];
              }),
              (t.set = c),
              (t.remove = function (e, t) {
                c(e, "", n(n({}, t), { expires: -1 }));
              });
          });
        f(pc), pc.encode, pc.parse, pc.getAll;
        var Ac,
          mc = pc.get,
          gc = pc.set,
          yc = pc.remove,
          bc = {
            get: function (e) {
              var t = mc(e);
              if (void 0 !== t) return JSON.parse(t);
            },
            save: function (e, t, n) {
              var r = {};
              "https:" === window.location.protocol &&
                (r = { secure: !0, sameSite: "none" }),
                (null == n ? void 0 : n.daysUntilExpire) &&
                  (r.expires = n.daysUntilExpire),
                (null == n ? void 0 : n.cookieDomain) &&
                  (r.domain = n.cookieDomain),
                gc(e, JSON.stringify(t), r);
            },
            remove: function (e) {
              yc(e);
            },
          },
          vc = {
            get: function (e) {
              return bc.get(e) || bc.get("".concat("_legacy_").concat(e));
            },
            save: function (e, t, n) {
              var r = {};
              "https:" === window.location.protocol && (r = { secure: !0 }),
                (null == n ? void 0 : n.daysUntilExpire) &&
                  (r.expires = n.daysUntilExpire),
                gc("".concat("_legacy_").concat(e), JSON.stringify(t), r),
                bc.save(e, t, n);
            },
            remove: function (e) {
              bc.remove(e), bc.remove("".concat("_legacy_").concat(e));
            },
          },
          Cc = {
            get: function (e) {
              if ("undefined" != typeof sessionStorage) {
                var t = sessionStorage.getItem(e);
                if (void 0 !== t) return JSON.parse(t);
              }
            },
            save: function (e, t) {
              sessionStorage.setItem(e, JSON.stringify(t));
            },
            remove: function (e) {
              sessionStorage.removeItem(e);
            },
          },
          wc = function (e) {
            return (
              (Ac =
                Ac ||
                (function (e, t, n) {
                  var r = (function (e, t) {
                      var n = atob(
                        "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9LHQoZSxyKX07ZnVuY3Rpb24gZShlLHIpe2lmKCJmdW5jdGlvbiIhPXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKCJDbGFzcyBleHRlbmRzIHZhbHVlICIrU3RyaW5nKHIpKyIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX12YXIgcj1mdW5jdGlvbigpe3JldHVybiByPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIG4odCxlLHIsbil7cmV0dXJuIG5ldyhyfHwocj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYyl7ZnVuY3Rpb24gaSh0KXt0cnl7cyhuLm5leHQodCkpfWNhdGNoKHQpe2ModCl9fWZ1bmN0aW9uIGEodCl7dHJ5e3Mobi50aHJvdyh0KSl9Y2F0Y2godCl7Yyh0KX19ZnVuY3Rpb24gcyh0KXt2YXIgZTt0LmRvbmU/byh0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiByP2U6bmV3IHIoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4oaSxhKX1zKChuPW4uYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbyh0LGUpe3ZhciByLG4sbyxjLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoY1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxjO2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihyKXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO2k7KXRyeXtpZihyPTEsbiYmKG89MiZjWzBdP24ucmV0dXJuOmNbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixjWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihjPVsyJmNbMF0sby52YWx1ZV0pLGNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1jO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpjWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKyssbj1jWzFdLGM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpjPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1pLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1jWzBdJiYyIT09Y1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09Y1swXSYmKCFvfHxjWzFdPm9bMF0mJmNbMV08b1szXSkpe2kubGFiZWw9Y1sxXTticmVha31pZig2PT09Y1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1jO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2goYyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfWM9ZS5jYWxsKHQsaSl9Y2F0Y2godCl7Yz1bNix0XSxuPTB9ZmluYWxseXtyPW89MH1pZig1JmNbMF0pdGhyb3cgY1sxXTtyZXR1cm57dmFsdWU6Y1swXT9jWzFdOnZvaWQgMCxkb25lOiEwfX0oW2MsYV0pfX19ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksdCYmIWUuaW5jbHVkZXModCk/dDoiIn12YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbil7dmFyIG89dC5jYWxsKHRoaXMsbil8fHRoaXM7cmV0dXJuIG8uZXJyb3I9ZSxvLmVycm9yX2Rlc2NyaXB0aW9uPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyLmZyb21QYXlsb2FkPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0LmVycm9yLHQuZXJyb3JfZGVzY3JpcHRpb24pfSxyfShFcnJvcik7IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSxuLG8sYyl7dm9pZCAwPT09YyYmKGM9bnVsbCk7dmFyIGk9dC5jYWxsKHRoaXMsZSxuKXx8dGhpcztyZXR1cm4gaS5zdGF0ZT1vLGkuYXBwU3RhdGU9YyxPYmplY3Quc2V0UHJvdG90eXBlT2YoaSxyLnByb3RvdHlwZSksaX1lKHIsdCl9KGkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShmdW5jdGlvbih0KXtmdW5jdGlvbiByKCl7dmFyIGU9dC5jYWxsKHRoaXMsInRpbWVvdXQiLCJUaW1lb3V0Iil8fHRoaXM7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLHIucHJvdG90eXBlKSxlfXJldHVybiBlKHIsdCkscn0oaSkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMsImNhbmNlbGxlZCIsIlBvcHVwIGNsb3NlZCIpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShpKSxmdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbixvKXt2YXIgYz10LmNhbGwodGhpcyxlLG4pfHx0aGlzO3JldHVybiBjLm1mYV90b2tlbj1vLE9iamVjdC5zZXRQcm90b3R5cGVPZihjLHIucHJvdG90eXBlKSxjfWUocix0KX0oaSk7dmFyIGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihlLG4pe3ZhciBvPXQuY2FsbCh0aGlzLCJtaXNzaW5nX3JlZnJlc2hfdG9rZW4iLCJNaXNzaW5nIFJlZnJlc2ggVG9rZW4gKGF1ZGllbmNlOiAnIi5jb25jYXQoYyhlLFsiZGVmYXVsdCJdKSwiJywgc2NvcGU6ICciKS5jb25jYXQoYyhuKSwiJykiKSl8fHRoaXM7cmV0dXJuIG8uYXVkaWVuY2U9ZSxvLnNjb3BlPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyfShpKSxzPXt9LHU9ZnVuY3Rpb24odCxlKXtyZXR1cm4iIi5jb25jYXQodCwifCIpLmNvbmNhdChlKX07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YSxjPWUudGltZW91dCxpPWUuYXV0aCxmPWUuZmV0Y2hVcmwsbD1lLmZldGNoT3B0aW9ucyxwPWUudXNlRm9ybURhdGEsaD1mdW5jdGlvbih0LGUpe3ZhciByPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighcilyZXR1cm4gdDt2YXIgbixvLGM9ci5jYWxsKHQpLGk9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEobj1jLm5leHQoKSkuZG9uZTspaS5wdXNoKG4udmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJihyPWMucmV0dXJuKSYmci5jYWxsKGMpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gaX0odC5wb3J0cywxKVswXTtyZXR1cm4gbih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4seSx2LGIsZCx3LE8sXztyZXR1cm4gbyh0aGlzLChmdW5jdGlvbihvKXtzd2l0Y2goby5sYWJlbCl7Y2FzZSAwOm49KGU9aXx8e30pLmF1ZGllbmNlLHk9ZS5zY29wZSxvLmxhYmVsPTE7Y2FzZSAxOmlmKG8udHJ5cy5wdXNoKFsxLDcsLDhdKSwhKHY9cD8obT1sLmJvZHksaz1uZXcgVVJMU2VhcmNoUGFyYW1zKG0pLFA9e30say5mb3JFYWNoKChmdW5jdGlvbih0LGUpe1BbZV09dH0pKSxQKTpKU09OLnBhcnNlKGwuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXYuZ3JhbnRfdHlwZSl7aWYoYj1mdW5jdGlvbih0LGUpe3JldHVybiBzW3UodCxlKV19KG4seSksIWIpdGhyb3cgbmV3IGEobix5KTtsLmJvZHk9cD9uZXcgVVJMU2VhcmNoUGFyYW1zKHIocih7fSx2KSx7cmVmcmVzaF90b2tlbjpifSkpLnRvU3RyaW5nKCk6SlNPTi5zdHJpbmdpZnkocihyKHt9LHYpLHtyZWZyZXNoX3Rva2VuOmJ9KSl9ZD12b2lkIDAsImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixsLnNpZ25hbD1kLnNpZ25hbCksdz12b2lkIDAsby5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gby50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKGc9YyxuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCxnKX0pKSksZmV0Y2goZixyKHt9LGwpKV0pXTtjYXNlIDM6cmV0dXJuIHc9by5zZW50KCksWzMsNV07Y2FzZSA0OnJldHVybiBPPW8uc2VudCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOk8ubWVzc2FnZX0pLFsyXTtjYXNlIDU6cmV0dXJuIHc/WzQsdy5qc29uKCldOihkJiZkLmFib3J0KCksaC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KSxbMl0pO2Nhc2UgNjpyZXR1cm4odD1vLnNlbnQoKSkucmVmcmVzaF90b2tlbj8oZnVuY3Rpb24odCxlLHIpe3NbdShlLHIpXT10fSh0LnJlZnJlc2hfdG9rZW4sbix5KSxkZWxldGUgdC5yZWZyZXNoX3Rva2VuKTpmdW5jdGlvbih0LGUpe2RlbGV0ZSBzW3UodCxlKV19KG4seSksaC5wb3N0TWVzc2FnZSh7b2s6dy5vayxqc29uOnR9KSxbMyw4XTtjYXNlIDc6cmV0dXJuIF89by5zZW50KCksaC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3JfZGVzY3JpcHRpb246Xy5tZXNzYWdlfX0pLFszLDhdO2Nhc2UgODpyZXR1cm5bMl19dmFyIGcsbSxrLFB9KSl9KSl9KSl9KCk7Cgo="
                      );
                      return n;
                    })(),
                    o = r.indexOf("\n", 10) + 1,
                    i = r.substring(o) + "",
                    a = new Blob([i], { type: "application/javascript" });
                  return URL.createObjectURL(a);
                })()),
              new Worker(Ac, e)
            );
          },
          kc = {},
          xc = (function () {
            function e(e, t) {
              (this.cache = e),
                (this.clientId = t),
                (this.manifestKey = this.createManifestKeyFrom(this.clientId));
            }
            return (
              (e.prototype.add = function (e) {
                var t;
                return c(this, void 0, void 0, function () {
                  var n, r;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (r = Set.bind), [4, this.cache.get(this.manifestKey)]
                        );
                      case 1:
                        return (
                          (n = new (r.apply(Set, [
                            void 0,
                            (null === (t = o.sent()) || void 0 === t
                              ? void 0
                              : t.keys) || [],
                          ]))()).add(e),
                          [
                            4,
                            this.cache.set(this.manifestKey, {
                              keys: l([], u(n), !1),
                            }),
                          ]
                        );
                      case 2:
                        return o.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.remove = function (e) {
                return c(this, void 0, void 0, function () {
                  var t, n;
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.cache.get(this.manifestKey)];
                      case 1:
                        return (t = r.sent())
                          ? ((n = new Set(t.keys)).delete(e),
                            n.size > 0
                              ? [
                                  4,
                                  this.cache.set(this.manifestKey, {
                                    keys: l([], u(n), !1),
                                  }),
                                ]
                              : [3, 3])
                          : [3, 5];
                      case 2:
                      case 4:
                        return [2, r.sent()];
                      case 3:
                        return [4, this.cache.remove(this.manifestKey)];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.get = function () {
                return this.cache.get(this.manifestKey);
              }),
              (e.prototype.clear = function () {
                return this.cache.remove(this.manifestKey);
              }),
              (e.prototype.createManifestKeyFrom = function (e) {
                return "".concat("@@auth0spajs@@", "::").concat(e);
              }),
              e
            );
          })(),
          Sc = new Oa(),
          Ec = {
            memory: function () {
              return new sc().enclosedCache;
            },
            localstorage: function () {
              return new cc();
            },
          },
          _c = function (e) {
            return Ec[e];
          },
          Ic = (function () {
            function e(e) {
              var t, n, r, o;
              if (
                ((this.options = e),
                "undefined" != typeof window &&
                  (function () {
                    if (!Ua())
                      throw new Error(
                        "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
                      );
                    if (void 0 === Xa())
                      throw new Error(
                        "\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    "
                      );
                  })(),
                e.cache &&
                  e.cacheLocation &&
                  console.warn(
                    "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
                  ),
                e.cache)
              )
                r = e.cache;
              else {
                if (
                  ((this.cacheLocation = e.cacheLocation || "memory"),
                  !_c(this.cacheLocation))
                )
                  throw new Error(
                    'Invalid cache location "'.concat(this.cacheLocation, '"')
                  );
                r = _c(this.cacheLocation)();
              }
              (this.httpTimeoutMs = e.httpTimeoutInSeconds
                ? 1e3 * e.httpTimeoutInSeconds
                : 1e4),
                (this.cookieStorage = !1 === e.legacySameSiteCookie ? bc : vc),
                (this.orgHintCookieName =
                  ((o = this.options.client_id),
                  "auth0.".concat(o, ".organization_hint"))),
                (this.isAuthenticatedCookieName = (function (e) {
                  return "auth0.".concat(e, ".is.authenticated");
                })(this.options.client_id)),
                (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
              var i,
                c = e.useCookiesForTransactions ? this.cookieStorage : Cc;
              (this.scope = this.options.scope),
                (this.transactionManager = new lc(c, this.options.client_id)),
                (this.nowProvider = this.options.nowProvider || Ra),
                (this.cacheManager = new uc(
                  r,
                  r.allKeys ? null : new xc(r, this.options.client_id),
                  this.nowProvider
                )),
                (this.domainUrl =
                  ((i = this.options.domain),
                  /^https?:\/\//.test(i) ? i : "https://".concat(i))),
                (this.tokenIssuer = (function (e, t) {
                  return e
                    ? e.startsWith("https://")
                      ? e
                      : "https://".concat(e, "/")
                    : "".concat(t, "/");
                })(this.options.issuer, this.domainUrl)),
                (this.defaultScope = ic(
                  "openid",
                  void 0 !==
                    (null ===
                      (n =
                        null === (t = this.options) || void 0 === t
                          ? void 0
                          : t.advancedOptions) || void 0 === n
                      ? void 0
                      : n.defaultScope)
                    ? this.options.advancedOptions.defaultScope
                    : "openid profile email"
                )),
                this.options.useRefreshTokens &&
                  (this.scope = ic(this.scope, "offline_access")),
                "undefined" != typeof window &&
                  window.Worker &&
                  this.options.useRefreshTokens &&
                  "memory" === this.cacheLocation &&
                  !/Trident.*rv:11\.0/.test(navigator.userAgent) &&
                  (this.worker = new wc()),
                (this.customOptions = (function (e) {
                  return (
                    e.advancedOptions,
                    e.audience,
                    e.auth0Client,
                    e.authorizeTimeoutInSeconds,
                    e.cacheLocation,
                    e.cache,
                    e.client_id,
                    e.domain,
                    e.issuer,
                    e.leeway,
                    e.max_age,
                    e.nowProvider,
                    e.redirect_uri,
                    e.scope,
                    e.useRefreshTokens,
                    e.useRefreshTokensFallback,
                    e.useCookiesForTransactions,
                    e.useFormData,
                    a(e, [
                      "advancedOptions",
                      "audience",
                      "auth0Client",
                      "authorizeTimeoutInSeconds",
                      "cacheLocation",
                      "cache",
                      "client_id",
                      "domain",
                      "issuer",
                      "leeway",
                      "max_age",
                      "nowProvider",
                      "redirect_uri",
                      "scope",
                      "useRefreshTokens",
                      "useRefreshTokensFallback",
                      "useCookiesForTransactions",
                      "useFormData",
                    ])
                  );
                })(e)),
                (this.useRefreshTokensFallback =
                  !1 !== this.options.useRefreshTokensFallback);
            }
            return (
              (e.prototype._url = function (e) {
                var t = encodeURIComponent(
                  btoa(JSON.stringify(this.options.auth0Client || La))
                );
                return ""
                  .concat(this.domainUrl)
                  .concat(e, "&auth0Client=")
                  .concat(t);
              }),
              (e.prototype._getParams = function (e, t, n, r, o) {
                var c = this.options;
                c.useRefreshTokens,
                  c.useCookiesForTransactions,
                  c.useFormData,
                  c.auth0Client,
                  c.cacheLocation,
                  c.advancedOptions,
                  c.detailedResponse,
                  c.nowProvider,
                  c.authorizeTimeoutInSeconds,
                  c.legacySameSiteCookie,
                  c.sessionCheckExpiryDays,
                  c.domain,
                  c.leeway,
                  c.httpTimeoutInSeconds;
                var s = a(c, [
                  "useRefreshTokens",
                  "useCookiesForTransactions",
                  "useFormData",
                  "auth0Client",
                  "cacheLocation",
                  "advancedOptions",
                  "detailedResponse",
                  "nowProvider",
                  "authorizeTimeoutInSeconds",
                  "legacySameSiteCookie",
                  "sessionCheckExpiryDays",
                  "domain",
                  "leeway",
                  "httpTimeoutInSeconds",
                ]);
                return i(i(i({}, s), e), {
                  scope: ic(this.defaultScope, this.scope, e.scope),
                  response_type: "code",
                  response_mode: "query",
                  state: t,
                  nonce: n,
                  redirect_uri: o || this.options.redirect_uri,
                  code_challenge: r,
                  code_challenge_method: "S256",
                });
              }),
              (e.prototype._authorizeUrl = function (e) {
                return this._url("/authorize?".concat(Ha(e)));
              }),
              (e.prototype._verifyIdToken = function (e, t, n) {
                return c(this, void 0, void 0, function () {
                  var r;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [4, this.nowProvider()];
                      case 1:
                        return (
                          (r = o.sent()),
                          [
                            2,
                            hc({
                              iss: this.tokenIssuer,
                              aud: this.options.client_id,
                              id_token: e,
                              nonce: t,
                              organizationId: n,
                              leeway: this.options.leeway,
                              max_age: this._parseNumber(this.options.max_age),
                              now: r,
                            }),
                          ]
                        );
                    }
                  });
                });
              }),
              (e.prototype._parseNumber = function (e) {
                return "string" != typeof e ? e : parseInt(e, 10) || void 0;
              }),
              (e.prototype._processOrgIdHint = function (e) {
                e
                  ? this.cookieStorage.save(this.orgHintCookieName, e, {
                      daysUntilExpire: this.sessionCheckExpiryDays,
                      cookieDomain: this.options.cookieDomain,
                    })
                  : this.cookieStorage.remove(this.orgHintCookieName);
              }),
              (e.prototype.buildAuthorizeUrl = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t, n, r, o, c, u, l, d, f, h, p, A;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return (
                            (t = e.redirect_uri),
                            (n = e.appState),
                            (r = a(e, ["redirect_uri", "appState"])),
                            (o = za(Ya())),
                            (c = za(Ya())),
                            (u = Ya()),
                            [4, Ja(u)]
                          );
                        case 1:
                          return (
                            (l = s.sent()),
                            (d = Va(l)),
                            (f = e.fragment ? "#".concat(e.fragment) : ""),
                            (h = this._getParams(r, o, c, d, t)),
                            (p = this._authorizeUrl(h)),
                            (A = e.organization || this.options.organization),
                            this.transactionManager.create(
                              i(
                                {
                                  nonce: c,
                                  code_verifier: u,
                                  appState: n,
                                  scope: h.scope,
                                  audience: h.audience || "default",
                                  redirect_uri: h.redirect_uri,
                                  state: o,
                                },
                                A && { organizationId: A }
                              )
                            ),
                            [2, p + f]
                          );
                      }
                    });
                  })
                );
              }),
              (e.prototype.loginWithPopup = function (e, t) {
                return c(this, void 0, void 0, function () {
                  var n, r, o, c, u, l, d, f, h, p, A, m, g;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          ((e = e || {}),
                          !(t = t || {}).popup &&
                            ((t.popup = (function (e) {
                              var t =
                                  window.screenX +
                                  (window.innerWidth - 400) / 2,
                                n =
                                  window.screenY +
                                  (window.innerHeight - 600) / 2;
                              return window.open(
                                "",
                                "auth0:authorize:popup",
                                "left="
                                  .concat(t, ",top=")
                                  .concat(n, ",width=")
                                  .concat(400, ",height=")
                                  .concat(
                                    600,
                                    ",resizable,scrollbars=yes,status=1"
                                  )
                              );
                            })()),
                            !t.popup))
                        )
                          throw new Error(
                            "Unable to open a popup for loginWithPopup - window.open returned `null`"
                          );
                        return (
                          (n = a(e, [])),
                          (r = za(Ya())),
                          (o = za(Ya())),
                          (c = Ya()),
                          [4, Ja(c)]
                        );
                      case 1:
                        return (
                          (u = s.sent()),
                          (l = Va(u)),
                          (d = this._getParams(
                            n,
                            r,
                            o,
                            l,
                            this.options.redirect_uri || window.location.origin
                          )),
                          (f = this._authorizeUrl(
                            i(i({}, d), { response_mode: "web_message" })
                          )),
                          (t.popup.location.href = f),
                          [
                            4,
                            Ka(
                              i(i({}, t), {
                                timeoutInSeconds:
                                  t.timeoutInSeconds ||
                                  this.options.authorizeTimeoutInSeconds ||
                                  60,
                              })
                            ),
                          ]
                        );
                      case 2:
                        if (((h = s.sent()), r !== h.state))
                          throw new Error("Invalid state");
                        return [
                          4,
                          rc(
                            {
                              audience: d.audience,
                              scope: d.scope,
                              baseUrl: this.domainUrl,
                              client_id: this.options.client_id,
                              code_verifier: c,
                              code: h.code,
                              grant_type: "authorization_code",
                              redirect_uri: d.redirect_uri,
                              auth0Client: this.options.auth0Client,
                              useFormData: this.options.useFormData,
                              timeout: this.httpTimeoutMs,
                            },
                            this.worker
                          ),
                        ];
                      case 3:
                        return (
                          (p = s.sent()),
                          (A = e.organization || this.options.organization),
                          [4, this._verifyIdToken(p.id_token, o, A)]
                        );
                      case 4:
                        return (
                          (m = s.sent()),
                          (g = i(i({}, p), {
                            decodedToken: m,
                            scope: d.scope,
                            audience: d.audience || "default",
                            client_id: this.options.client_id,
                          })),
                          [4, this.cacheManager.set(g)]
                        );
                      case 5:
                        return (
                          s.sent(),
                          this.cookieStorage.save(
                            this.isAuthenticatedCookieName,
                            !0,
                            {
                              daysUntilExpire: this.sessionCheckExpiryDays,
                              cookieDomain: this.options.cookieDomain,
                            }
                          ),
                          this._processOrgIdHint(m.claims.org_id),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.getUser = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t, n, r;
                    return s(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (t =
                              e.audience || this.options.audience || "default"),
                            (n = ic(this.defaultScope, this.scope, e.scope)),
                            [
                              4,
                              this.cacheManager.get(
                                new ac({
                                  client_id: this.options.client_id,
                                  audience: t,
                                  scope: n,
                                })
                              ),
                            ]
                          );
                        case 1:
                          return [
                            2,
                            (r = o.sent()) &&
                              r.decodedToken &&
                              r.decodedToken.user,
                          ];
                      }
                    });
                  })
                );
              }),
              (e.prototype.getIdTokenClaims = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t, n, r;
                    return s(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (t =
                              e.audience || this.options.audience || "default"),
                            (n = ic(this.defaultScope, this.scope, e.scope)),
                            [
                              4,
                              this.cacheManager.get(
                                new ac({
                                  client_id: this.options.client_id,
                                  audience: t,
                                  scope: n,
                                })
                              ),
                            ]
                          );
                        case 1:
                          return [
                            2,
                            (r = o.sent()) &&
                              r.decodedToken &&
                              r.decodedToken.claims,
                          ];
                      }
                    });
                  })
                );
              }),
              (e.prototype.loginWithRedirect = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t, n, r;
                    return s(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (t = e.redirectMethod),
                            (n = a(e, ["redirectMethod"])),
                            [4, this.buildAuthorizeUrl(n)]
                          );
                        case 1:
                          return (
                            (r = o.sent()),
                            window.location[t || "assign"](r),
                            [2]
                          );
                      }
                    });
                  })
                );
              }),
              (e.prototype.handleRedirectCallback = function (e) {
                return (
                  void 0 === e && (e = window.location.href),
                  c(this, void 0, void 0, function () {
                    var t, n, r, o, a, c, l, d, f, h;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (0 === (t = e.split("?").slice(1)).length)
                            throw new Error(
                              "There are no query params available for parsing."
                            );
                          if (
                            ((n = (function (e) {
                              e.indexOf("#") > -1 &&
                                (e = e.substr(0, e.indexOf("#")));
                              var t = e.split("&"),
                                n = {};
                              return (
                                t.forEach(function (e) {
                                  var t = u(e.split("="), 2),
                                    r = t[0],
                                    o = t[1];
                                  n[r] = decodeURIComponent(o);
                                }),
                                n.expires_in &&
                                  (n.expires_in = parseInt(n.expires_in)),
                                n
                              );
                            })(t.join(""))),
                            (r = n.state),
                            (o = n.code),
                            (a = n.error),
                            (c = n.error_description),
                            !(l = this.transactionManager.get()))
                          )
                            throw new Error("Invalid state");
                          if ((this.transactionManager.remove(), a))
                            throw new Wa(a, c, r, l.appState);
                          if (!l.code_verifier || (l.state && l.state !== r))
                            throw new Error("Invalid state");
                          return (
                            (d = {
                              audience: l.audience,
                              scope: l.scope,
                              baseUrl: this.domainUrl,
                              client_id: this.options.client_id,
                              code_verifier: l.code_verifier,
                              grant_type: "authorization_code",
                              code: o,
                              auth0Client: this.options.auth0Client,
                              useFormData: this.options.useFormData,
                              timeout: this.httpTimeoutMs,
                            }),
                            void 0 !== l.redirect_uri &&
                              (d.redirect_uri = l.redirect_uri),
                            [4, rc(d, this.worker)]
                          );
                        case 1:
                          return (
                            (f = s.sent()),
                            [
                              4,
                              this._verifyIdToken(
                                f.id_token,
                                l.nonce,
                                l.organizationId
                              ),
                            ]
                          );
                        case 2:
                          return (
                            (h = s.sent()),
                            [
                              4,
                              this.cacheManager.set(
                                i(
                                  i(
                                    i(i({}, f), {
                                      decodedToken: h,
                                      audience: l.audience,
                                      scope: l.scope,
                                    }),
                                    f.scope
                                      ? { oauthTokenScope: f.scope }
                                      : null
                                  ),
                                  { client_id: this.options.client_id }
                                )
                              ),
                            ]
                          );
                        case 3:
                          return (
                            s.sent(),
                            this.cookieStorage.save(
                              this.isAuthenticatedCookieName,
                              !0,
                              {
                                daysUntilExpire: this.sessionCheckExpiryDays,
                                cookieDomain: this.options.cookieDomain,
                              }
                            ),
                            this._processOrgIdHint(h.claims.org_id),
                            [2, { appState: l.appState }]
                          );
                      }
                    });
                  })
                );
              }),
              (e.prototype.checkSession = function (e) {
                return c(this, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (
                          !this.cookieStorage.get(
                            this.isAuthenticatedCookieName
                          )
                        ) {
                          if (!this.cookieStorage.get("auth0.is.authenticated"))
                            return [2];
                          this.cookieStorage.save(
                            this.isAuthenticatedCookieName,
                            !0,
                            {
                              daysUntilExpire: this.sessionCheckExpiryDays,
                              cookieDomain: this.options.cookieDomain,
                            }
                          ),
                            this.cookieStorage.remove("auth0.is.authenticated");
                        }
                        n.label = 1;
                      case 1:
                        return (
                          n.trys.push([1, 3, , 4]),
                          [4, this.getTokenSilently(e)]
                        );
                      case 2:
                        return n.sent(), [3, 4];
                      case 3:
                        if (((t = n.sent()), !Ta.includes(t.error))) throw t;
                        return [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.getTokenSilently = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t,
                      n,
                      r,
                      o = this;
                    return s(this, function (c) {
                      return (
                        (t = i(
                          i(
                            {
                              audience: this.options.audience,
                              ignoreCache: !1,
                            },
                            e
                          ),
                          { scope: ic(this.defaultScope, this.scope, e.scope) }
                        )),
                        (n = t.ignoreCache),
                        (r = a(t, ["ignoreCache"])),
                        [
                          2,
                          ((s = function () {
                            return o._getTokenSilently(
                              i({ ignoreCache: n }, r)
                            );
                          }),
                          (u = ""
                            .concat(this.options.client_id, "::")
                            .concat(r.audience, "::")
                            .concat(r.scope)),
                          (l = kc[u]),
                          l ||
                            ((l = s().finally(function () {
                              delete kc[u], (l = null);
                            })),
                            (kc[u] = l)),
                          l),
                        ]
                      );
                      var s, u, l;
                    });
                  })
                );
              }),
              (e.prototype._getTokenSilently = function (e) {
                return (
                  void 0 === e && (e = {}),
                  c(this, void 0, void 0, function () {
                    var t, n, r, o, u, l, d, f, h;
                    return s(this, function (p) {
                      switch (p.label) {
                        case 0:
                          return (
                            (t = e.ignoreCache),
                            (n = a(e, ["ignoreCache"])),
                            t
                              ? [3, 2]
                              : [
                                  4,
                                  this._getEntryFromCache({
                                    scope: n.scope,
                                    audience: n.audience || "default",
                                    client_id: this.options.client_id,
                                    getDetailedEntry: e.detailedResponse,
                                  }),
                                ]
                          );
                        case 1:
                          if ((r = p.sent())) return [2, r];
                          p.label = 2;
                        case 2:
                          return [
                            4,
                            ((A = function () {
                              return Sc.acquireLock(
                                "auth0.lock.getTokenSilently",
                                5e3
                              );
                            }),
                            (m = 10),
                            void 0 === m && (m = 3),
                            c(void 0, void 0, void 0, function () {
                              var e;
                              return s(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    (e = 0), (t.label = 1);
                                  case 1:
                                    return e < m ? [4, A()] : [3, 4];
                                  case 2:
                                    if (t.sent()) return [2, !0];
                                    t.label = 3;
                                  case 3:
                                    return e++, [3, 1];
                                  case 4:
                                    return [2, !1];
                                }
                              });
                            })),
                          ];
                        case 3:
                          if (!p.sent()) return [3, 15];
                          p.label = 4;
                        case 4:
                          return (
                            p.trys.push([4, , 12, 14]),
                            t
                              ? [3, 6]
                              : [
                                  4,
                                  this._getEntryFromCache({
                                    scope: n.scope,
                                    audience: n.audience || "default",
                                    client_id: this.options.client_id,
                                    getDetailedEntry: e.detailedResponse,
                                  }),
                                ]
                          );
                        case 5:
                          if ((r = p.sent())) return [2, r];
                          p.label = 6;
                        case 6:
                          return this.options.useRefreshTokens
                            ? [4, this._getTokenUsingRefreshToken(n)]
                            : [3, 8];
                        case 7:
                          return (u = p.sent()), [3, 10];
                        case 8:
                          return [4, this._getTokenFromIFrame(n)];
                        case 9:
                          (u = p.sent()), (p.label = 10);
                        case 10:
                          return (
                            (o = u),
                            [
                              4,
                              this.cacheManager.set(
                                i({ client_id: this.options.client_id }, o)
                              ),
                            ]
                          );
                        case 11:
                          return (
                            p.sent(),
                            this.cookieStorage.save(
                              this.isAuthenticatedCookieName,
                              !0,
                              {
                                daysUntilExpire: this.sessionCheckExpiryDays,
                                cookieDomain: this.options.cookieDomain,
                              }
                            ),
                            e.detailedResponse
                              ? ((l = o.id_token),
                                (d = o.access_token),
                                (f = o.oauthTokenScope),
                                (h = o.expires_in),
                                [
                                  2,
                                  i(
                                    i(
                                      { id_token: l, access_token: d },
                                      f ? { scope: f } : null
                                    ),
                                    { expires_in: h }
                                  ),
                                ])
                              : [2, o.access_token]
                          );
                        case 12:
                          return [
                            4,
                            Sc.releaseLock("auth0.lock.getTokenSilently"),
                          ];
                        case 13:
                          return p.sent(), [7];
                        case 14:
                          return [3, 16];
                        case 15:
                          throw new Ga();
                        case 16:
                          return [2];
                      }
                      var A, m;
                    });
                  })
                );
              }),
              (e.prototype.getTokenWithPopup = function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  void 0 === t && (t = {}),
                  c(this, void 0, void 0, function () {
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (e.audience = e.audience || this.options.audience),
                            (e.scope = ic(
                              this.defaultScope,
                              this.scope,
                              e.scope
                            )),
                            (t = i(i({}, ja), t)),
                            [4, this.loginWithPopup(e, t)]
                          );
                        case 1:
                          return (
                            n.sent(),
                            [
                              4,
                              this.cacheManager.get(
                                new ac({
                                  scope: e.scope,
                                  audience: e.audience || "default",
                                  client_id: this.options.client_id,
                                })
                              ),
                            ]
                          );
                        case 2:
                          return [2, n.sent().access_token];
                      }
                    });
                  })
                );
              }),
              (e.prototype.isAuthenticated = function () {
                return c(this, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.getUser()];
                      case 1:
                        return [2, !!e.sent()];
                    }
                  });
                });
              }),
              (e.prototype.buildLogoutUrl = function (e) {
                void 0 === e && (e = {}),
                  null !== e.client_id
                    ? (e.client_id = e.client_id || this.options.client_id)
                    : delete e.client_id;
                var t = e.federated,
                  n = a(e, ["federated"]),
                  r = t ? "&federated" : "";
                return this._url("/v2/logout?".concat(Ha(n))) + r;
              }),
              (e.prototype.logout = function (e) {
                var t = this;
                void 0 === e && (e = {});
                var n = e.localOnly,
                  r = a(e, ["localOnly"]);
                if (n && r.federated)
                  throw new Error(
                    "It is invalid to set both the `federated` and `localOnly` options to `true`"
                  );
                var o = function () {
                  if (
                    (t.cookieStorage.remove(t.orgHintCookieName),
                    t.cookieStorage.remove(t.isAuthenticatedCookieName),
                    !n)
                  ) {
                    var e = t.buildLogoutUrl(r);
                    window.location.assign(e);
                  }
                };
                if (this.options.cache)
                  return this.cacheManager.clear().then(function () {
                    return o();
                  });
                this.cacheManager.clearSync(), o();
              }),
              (e.prototype._getTokenFromIFrame = function (e) {
                return c(this, void 0, void 0, function () {
                  var t, n, r, o, c, u, l, d, f, h, p, A, m, g, y, b, v;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          (t = za(Ya())), (n = za(Ya())), (r = Ya()), [4, Ja(r)]
                        );
                      case 1:
                        (o = s.sent()),
                          (c = Va(o)),
                          (u = a(e, ["detailedResponse"])),
                          (l = this._getParams(
                            u,
                            t,
                            n,
                            c,
                            e.redirect_uri ||
                              this.options.redirect_uri ||
                              window.location.origin
                          )),
                          (d = this.cookieStorage.get(
                            this.orgHintCookieName
                          )) &&
                            !l.organization &&
                            (l.organization = d),
                          (f = this._authorizeUrl(
                            i(i({}, l), {
                              prompt: "none",
                              response_mode: "web_message",
                            })
                          )),
                          (s.label = 2);
                      case 2:
                        if (
                          (s.trys.push([2, 6, , 7]), window.crossOriginIsolated)
                        )
                          throw new Fa(
                            "login_required",
                            "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
                          );
                        return (
                          (h =
                            e.timeoutInSeconds ||
                            this.options.authorizeTimeoutInSeconds),
                          [
                            4,
                            ((C = f),
                            (w = this.domainUrl),
                            (k = h),
                            void 0 === k && (k = 60),
                            new Promise(function (e, t) {
                              var n = window.document.createElement("iframe");
                              n.setAttribute("width", "0"),
                                n.setAttribute("height", "0"),
                                (n.style.display = "none");
                              var r,
                                o = function () {
                                  window.document.body.contains(n) &&
                                    (window.document.body.removeChild(n),
                                    window.removeEventListener(
                                      "message",
                                      r,
                                      !1
                                    ));
                                },
                                i = setTimeout(function () {
                                  t(new Ga()), o();
                                }, 1e3 * k);
                              (r = function (n) {
                                if (
                                  n.origin == w &&
                                  n.data &&
                                  "authorization_response" === n.data.type
                                ) {
                                  var a = n.source;
                                  a && a.close(),
                                    n.data.response.error
                                      ? t(Fa.fromPayload(n.data.response))
                                      : e(n.data.response),
                                    clearTimeout(i),
                                    window.removeEventListener(
                                      "message",
                                      r,
                                      !1
                                    ),
                                    setTimeout(o, 2e3);
                                }
                              }),
                                window.addEventListener("message", r, !1),
                                window.document.body.appendChild(n),
                                n.setAttribute("src", C);
                            })),
                          ]
                        );
                      case 3:
                        if (((p = s.sent()), t !== p.state))
                          throw new Error("Invalid state");
                        return (
                          (A = e.scope),
                          (m = e.audience),
                          (g = a(e, [
                            "scope",
                            "audience",
                            "redirect_uri",
                            "ignoreCache",
                            "timeoutInSeconds",
                            "detailedResponse",
                          ])),
                          [
                            4,
                            rc(
                              i(i(i({}, this.customOptions), g), {
                                scope: A,
                                audience: m,
                                baseUrl: this.domainUrl,
                                client_id: this.options.client_id,
                                code_verifier: r,
                                code: p.code,
                                grant_type: "authorization_code",
                                redirect_uri: l.redirect_uri,
                                auth0Client: this.options.auth0Client,
                                useFormData: this.options.useFormData,
                                timeout: g.timeout || this.httpTimeoutMs,
                              }),
                              this.worker
                            ),
                          ]
                        );
                      case 4:
                        return (
                          (y = s.sent()),
                          [4, this._verifyIdToken(y.id_token, n)]
                        );
                      case 5:
                        return (
                          (b = s.sent()),
                          this._processOrgIdHint(b.claims.org_id),
                          [
                            2,
                            i(i({}, y), {
                              decodedToken: b,
                              scope: l.scope,
                              oauthTokenScope: y.scope,
                              audience: l.audience || "default",
                            }),
                          ]
                        );
                      case 6:
                        throw (
                          ("login_required" === (v = s.sent()).error &&
                            this.logout({ localOnly: !0 }),
                          v)
                        );
                      case 7:
                        return [2];
                    }
                    var C, w, k;
                  });
                });
              }),
              (e.prototype._getTokenUsingRefreshToken = function (e) {
                return c(this, void 0, void 0, function () {
                  var t, n, r, o, c, u, l, d, f;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          (e.scope = ic(
                            this.defaultScope,
                            this.options.scope,
                            e.scope
                          )),
                          [
                            4,
                            this.cacheManager.get(
                              new ac({
                                scope: e.scope,
                                audience: e.audience || "default",
                                client_id: this.options.client_id,
                              })
                            ),
                          ]
                        );
                      case 1:
                        return ((t = s.sent()) && t.refresh_token) ||
                          this.worker
                          ? [3, 4]
                          : this.useRefreshTokensFallback
                          ? [4, this._getTokenFromIFrame(e)]
                          : [3, 3];
                      case 2:
                        return [2, s.sent()];
                      case 3:
                        throw new Da(e.audience || "default", e.scope);
                      case 4:
                        (n =
                          e.redirect_uri ||
                          this.options.redirect_uri ||
                          window.location.origin),
                          (o = e.scope),
                          (c = e.audience),
                          (u = a(e, [
                            "scope",
                            "audience",
                            "ignoreCache",
                            "timeoutInSeconds",
                            "detailedResponse",
                          ])),
                          (l =
                            "number" == typeof e.timeoutInSeconds
                              ? 1e3 * e.timeoutInSeconds
                              : null),
                          (s.label = 5);
                      case 5:
                        return (
                          s.trys.push([5, 7, , 10]),
                          [
                            4,
                            rc(
                              i(
                                i(
                                  i(i(i({}, this.customOptions), u), {
                                    audience: c,
                                    scope: o,
                                    baseUrl: this.domainUrl,
                                    client_id: this.options.client_id,
                                    grant_type: "refresh_token",
                                    refresh_token: t && t.refresh_token,
                                    redirect_uri: n,
                                  }),
                                  l && { timeout: l }
                                ),
                                {
                                  auth0Client: this.options.auth0Client,
                                  useFormData: this.options.useFormData,
                                  timeout: this.httpTimeoutMs,
                                }
                              ),
                              this.worker
                            ),
                          ]
                        );
                      case 6:
                        return (r = s.sent()), [3, 10];
                      case 7:
                        return ((d = s.sent()).message.indexOf(
                          "Missing Refresh Token"
                        ) > -1 ||
                          (d.message &&
                            d.message.indexOf("invalid refresh token") > -1)) &&
                          this.useRefreshTokensFallback
                          ? [4, this._getTokenFromIFrame(e)]
                          : [3, 9];
                      case 8:
                        return [2, s.sent()];
                      case 9:
                        throw d;
                      case 10:
                        return [4, this._verifyIdToken(r.id_token)];
                      case 11:
                        return (
                          (f = s.sent()),
                          [
                            2,
                            i(i({}, r), {
                              decodedToken: f,
                              scope: e.scope,
                              oauthTokenScope: r.scope,
                              audience: e.audience || "default",
                            }),
                          ]
                        );
                    }
                  });
                });
              }),
              (e.prototype._getEntryFromCache = function (e) {
                var t = e.scope,
                  n = e.audience,
                  r = e.client_id,
                  o = e.getDetailedEntry,
                  a = void 0 !== o && o;
                return c(this, void 0, void 0, function () {
                  var e, o, c, u, l;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [
                          4,
                          this.cacheManager.get(
                            new ac({ scope: t, audience: n, client_id: r }),
                            60
                          ),
                        ];
                      case 1:
                        return (e = s.sent()) && e.access_token
                          ? a
                            ? ((o = e.id_token),
                              (c = e.access_token),
                              (u = e.oauthTokenScope),
                              (l = e.expires_in),
                              [
                                2,
                                i(
                                  i(
                                    { id_token: o, access_token: c },
                                    u ? { scope: u } : null
                                  ),
                                  { expires_in: l }
                                ),
                              ])
                            : [2, e.access_token]
                          : [2];
                    }
                  });
                });
              }),
              e
            );
          })();
        function Bc(e) {
          return c(this, void 0, void 0, function () {
            var t;
            return s(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, (t = new Ic(e)).checkSession()];
                case 1:
                  return n.sent(), [2, t];
              }
            });
          });
        }
      },
      553: (e, t, n) => {
        n.a(
          e,
          async (e, t) => {
            try {
              var r = n(713);
              function i(e) {
                return (
                  (i =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        }),
                  i(e)
                );
              }
              function a() {
                a = function () {
                  return e;
                };
                var e = {},
                  t = Object.prototype,
                  n = t.hasOwnProperty,
                  r = "function" == typeof Symbol ? Symbol : {},
                  o = r.iterator || "@@iterator",
                  c = r.asyncIterator || "@@asyncIterator",
                  s = r.toStringTag || "@@toStringTag";
                function u(e, t, n) {
                  return (
                    Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    e[t]
                  );
                }
                try {
                  u({}, "");
                } catch (e) {
                  u = function (e, t, n) {
                    return (e[t] = n);
                  };
                }
                function l(e, t, n, r) {
                  var o = t && t.prototype instanceof h ? t : h,
                    i = Object.create(o.prototype),
                    a = new S(r || []);
                  return (
                    (i._invoke = (function (e, t, n) {
                      var r = "suspendedStart";
                      return function (o, i) {
                        if ("executing" === r)
                          throw new Error("Generator is already running");
                        if ("completed" === r) {
                          if ("throw" === o) throw i;
                          return { value: void 0, done: !0 };
                        }
                        for (n.method = o, n.arg = i; ; ) {
                          var a = n.delegate;
                          if (a) {
                            var c = w(a, n);
                            if (c) {
                              if (c === f) continue;
                              return c;
                            }
                          }
                          if ("next" === n.method) n.sent = n._sent = n.arg;
                          else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                              throw ((r = "completed"), n.arg);
                            n.dispatchException(n.arg);
                          } else
                            "return" === n.method && n.abrupt("return", n.arg);
                          r = "executing";
                          var s = d(e, t, n);
                          if ("normal" === s.type) {
                            if (
                              ((r = n.done ? "completed" : "suspendedYield"),
                              s.arg === f)
                            )
                              continue;
                            return { value: s.arg, done: n.done };
                          }
                          "throw" === s.type &&
                            ((r = "completed"),
                            (n.method = "throw"),
                            (n.arg = s.arg));
                        }
                      };
                    })(e, n, a)),
                    i
                  );
                }
                function d(e, t, n) {
                  try {
                    return { type: "normal", arg: e.call(t, n) };
                  } catch (e) {
                    return { type: "throw", arg: e };
                  }
                }
                e.wrap = l;
                var f = {};
                function h() {}
                function p() {}
                function A() {}
                var m = {};
                u(m, o, function () {
                  return this;
                });
                var g = Object.getPrototypeOf,
                  y = g && g(g(E([])));
                y && y !== t && n.call(y, o) && (m = y);
                var b = (A.prototype = h.prototype = Object.create(m));
                function v(e) {
                  ["next", "throw", "return"].forEach(function (t) {
                    u(e, t, function (e) {
                      return this._invoke(t, e);
                    });
                  });
                }
                function C(e, t) {
                  function r(o, a, c, s) {
                    var u = d(e[o], e, a);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        f = l.value;
                      return f && "object" == i(f) && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, c, s);
                            },
                            function (e) {
                              r("throw", e, c, s);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return r("throw", e, c, s);
                            }
                          );
                    }
                    s(u.arg);
                  }
                  var o;
                  this._invoke = function (e, n) {
                    function i() {
                      return new t(function (t, o) {
                        r(e, n, t, o);
                      });
                    }
                    return (o = o ? o.then(i, i) : i());
                  };
                }
                function w(e, t) {
                  var n = e.iterator[t.method];
                  if (void 0 === n) {
                    if (((t.delegate = null), "throw" === t.method)) {
                      if (
                        e.iterator.return &&
                        ((t.method = "return"),
                        (t.arg = void 0),
                        w(e, t),
                        "throw" === t.method)
                      )
                        return f;
                      (t.method = "throw"),
                        (t.arg = new TypeError(
                          "The iterator does not provide a 'throw' method"
                        ));
                    }
                    return f;
                  }
                  var r = d(n, e.iterator, t.arg);
                  if ("throw" === r.type)
                    return (
                      (t.method = "throw"),
                      (t.arg = r.arg),
                      (t.delegate = null),
                      f
                    );
                  var o = r.arg;
                  return o
                    ? o.done
                      ? ((t[e.resultName] = o.value),
                        (t.next = e.nextLoc),
                        "return" !== t.method &&
                          ((t.method = "next"), (t.arg = void 0)),
                        (t.delegate = null),
                        f)
                      : o
                    : ((t.method = "throw"),
                      (t.arg = new TypeError(
                        "iterator result is not an object"
                      )),
                      (t.delegate = null),
                      f);
                }
                function k(e) {
                  var t = { tryLoc: e[0] };
                  1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
                }
                function x(e) {
                  var t = e.completion || {};
                  (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function S(e) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    e.forEach(k, this),
                    this.reset(!0);
                }
                function E(e) {
                  if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                      var r = -1,
                        i = function t() {
                          for (; ++r < e.length; )
                            if (n.call(e, r))
                              return (t.value = e[r]), (t.done = !1), t;
                          return (t.value = void 0), (t.done = !0), t;
                        };
                      return (i.next = i);
                    }
                  }
                  return { next: _ };
                }
                function _() {
                  return { value: void 0, done: !0 };
                }
                return (
                  (p.prototype = A),
                  u(b, "constructor", A),
                  u(A, "constructor", p),
                  (p.displayName = u(A, s, "GeneratorFunction")),
                  (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                      !!t &&
                      (t === p ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (e.mark = function (e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, A)
                        : ((e.__proto__ = A), u(e, s, "GeneratorFunction")),
                      (e.prototype = Object.create(b)),
                      e
                    );
                  }),
                  (e.awrap = function (e) {
                    return { __await: e };
                  }),
                  v(C.prototype),
                  u(C.prototype, c, function () {
                    return this;
                  }),
                  (e.AsyncIterator = C),
                  (e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new C(l(t, n, r, o), i);
                    return e.isGeneratorFunction(n)
                      ? a
                      : a.next().then(function (e) {
                          return e.done ? e.value : a.next();
                        });
                  }),
                  v(b),
                  u(b, s, "Generator"),
                  u(b, o, function () {
                    return this;
                  }),
                  u(b, "toString", function () {
                    return "[object Generator]";
                  }),
                  (e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                      t.reverse(),
                      function n() {
                        for (; t.length; ) {
                          var r = t.pop();
                          if (r in e) return (n.value = r), (n.done = !1), n;
                        }
                        return (n.done = !0), n;
                      }
                    );
                  }),
                  (e.values = E),
                  (S.prototype = {
                    constructor: S,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = void 0),
                        this.tryEntries.forEach(x),
                        !e)
                      )
                        for (var t in this)
                          "t" === t.charAt(0) &&
                            n.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = void 0);
                    },
                    stop: function () {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var t = this;
                      function r(n, r) {
                        return (
                          (a.type = "throw"),
                          (a.arg = e),
                          (t.next = n),
                          r && ((t.method = "next"), (t.arg = void 0)),
                          !!r
                        );
                      }
                      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                          a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                          var c = n.call(i, "catchLoc"),
                            s = n.call(i, "finallyLoc");
                          if (c && s) {
                            if (this.prev < i.catchLoc)
                              return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                              return r(i.finallyLoc);
                          } else if (c) {
                            if (this.prev < i.catchLoc)
                              return r(i.catchLoc, !0);
                          } else {
                            if (!s)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < i.finallyLoc)
                              return r(i.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (
                          o.tryLoc <= this.prev &&
                          n.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var i = o;
                          break;
                        }
                      }
                      i &&
                        ("break" === e || "continue" === e) &&
                        i.tryLoc <= t &&
                        t <= i.finallyLoc &&
                        (i = null);
                      var a = i ? i.completion : {};
                      return (
                        (a.type = e),
                        (a.arg = t),
                        i
                          ? ((this.method = "next"),
                            (this.next = i.finallyLoc),
                            f)
                          : this.complete(a)
                      );
                    },
                    complete: function (e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        f
                      );
                    },
                    finish: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                          return (
                            this.complete(n.completion, n.afterLoc), x(n), f
                          );
                      }
                    },
                    catch: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                          var r = n.completion;
                          if ("throw" === r.type) {
                            var o = r.arg;
                            x(n);
                          }
                          return o;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, t, n) {
                      return (
                        (this.delegate = {
                          iterator: E(e),
                          resultName: t,
                          nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = void 0),
                        f
                      );
                    },
                  }),
                  e
                );
              }
              function c(e, t, n, r, o, i, a) {
                try {
                  var c = e[i](a),
                    s = c.value;
                } catch (e) {
                  return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
              }
              function s(e) {
                return function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                      c(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                      c(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                };
              }
              var o = await (0, r.ZP)({
                domain: "dev-7pb15gvh.us.auth0.com",
                client_id: "BuZchykLTy0CGolmecCGd974nKsq52wz",
                redirect_uri:
                  "https://paulecommercetesting.netlify.app/home.html",
              });
              document.getElementById("login").addEventListener(
                "click",
                s(
                  a().mark(function e() {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), o.loginWithRedirect();
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
                document
                  .getElementById("logout")
                  .addEventListener("click", function () {
                    o.logout();
                  }),
                t();
            } catch (u) {
              t(u);
            }
          },
          1
        );
      },
      311: (e, t, n) => {
        n.a(e, async (e, t) => {
          try {
            var r = n(553),
              o = (n(314), n(627), n(90)),
              i = n(614),
              a = n(111),
              c = n(527),
              s = e([r]);
            r = (s.then ? (await s)() : s)[0];
            var u = document.getElementById("banner-prev-btn"),
              l = document.getElementById("banner-next-btn"),
              d = [
                document.getElementById("banner1"),
                document.getElementById("banner2"),
                document.getElementById("banner3"),
              ],
              f = 2;
            l.addEventListener("click", function () {
              for (var e = 0; e < d.length; e++) d[e].style.opacity = 0;
              ++f >= d.length && (f = 0), (d[f].style.opacity = 1);
            }),
              u.addEventListener("click", function () {
                for (var e = 0; e < d.length; e++) d[e].style.opacity = 0;
                --f < 0 && (f = d.length - 1), (d[f].style.opacity = 1);
              }),
              (document.getElementById("watchImg").src = o),
              (document.getElementById("mouseImg").src = i),
              (document.getElementById("mouseImg1").src = a),
              (document.getElementById("watchImg1").src = c);
            var h = document.getElementById("card-wrapper"),
              p = document.getElementById("left-card-slide-btn");
            document
              .getElementById("right-card-slide-btn")
              .addEventListener("click", function () {
                h.scrollBy({ left: 300, behavior: "smooth" });
              }),
              p.addEventListener("click", function () {
                h.scrollBy({ left: -300, behavior: "smooth" });
              }),
              t();
          } catch (e) {
            t(e);
          }
        });
      },
      314: (e, t, n) => {
        var r = n(379),
          o = n.n(r),
          i = n(795),
          a = n.n(i),
          c = n(569),
          s = n.n(c),
          u = n(565),
          l = n.n(u),
          d = n(216),
          f = n.n(d),
          h = n(589),
          p = n.n(h),
          A = n(528),
          m = {};
        (m.styleTagTransform = p()),
          (m.setAttributes = l()),
          (m.insert = s().bind(null, "head")),
          (m.domAPI = a()),
          (m.insertStyleElement = f()),
          o()(A.Z, m),
          A.Z && A.Z.locals && A.Z.locals;
        const g = n.p + "image/logoText.png",
          y = n.p + "image/logoTextTransparent.png",
          b = n.p + "image/burgerOpen.png",
          v = n.p + "image/burgerClose.png",
          C = n.p + "image/magnifyingGlassWhite.png",
          w = n.p + "image/redditIcon.png",
          k = n.p + "image/twitterIcon.png",
          x = n.p + "image/facebookIcon.png",
          S = n.p + "image/instagramIcon.png";
        (document.getElementById("mobile-nav-logo").src = g),
          (document.getElementById("nav-logo").src = y);
        var E = document.getElementById("open-icon");
        (E.src = b), (document.getElementById("close-icon").src = v);
        var _ = document.getElementById("close-burger-btn");
        document
          .getElementById("open-burger-btn")
          .addEventListener("click", function () {
            var e = document.getElementById("burger-menu");
            (e.style.display = "none") &&
              ((e.style.display = "flex"),
              (E.style.display = "none"),
              console.log("im burger menu btn"));
          }),
          _.addEventListener("click", function () {
            (document.getElementById("burger-menu").style.display = "none"),
              (E.style.display = "block");
          }),
          (document.getElementById("searchIcon").src = C),
          (document.getElementById("redditIcon").src = w),
          (document.getElementById("twitterIcon").src = k),
          (document.getElementById("facebookIcon").src = x),
          (document.getElementById("instagramIcon").src = S);
      },
      242: (e, t, n) => {
        n.d(t, { Z: () => p });
        var r = n(537),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          c = n(667),
          s = n.n(c),
          u = new URL(n(634), n.b),
          l = new URL(n(724), n.b),
          d = a()(o()),
          f = s()(u),
          h = s()(l);
        d.push([
          e.id,
          ':root{font-family:"Roboto Slab",serif}@media(min-width: 100px){.scrolling-banner{position:relative;height:25vh;width:100%}.scrolling-banner div{z-index:-1;position:absolute;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:0 1.5rem;font-size:5vw;letter-spacing:1rem;transition:opacity 400ms ease-in-out}.scrolling-banner .banner1{color:#fff;background-color:#eda7ff}.scrolling-banner .banner2{color:#000;background-color:#a7fcff}.scrolling-banner .banner3{color:#707070;background-color:#cdfccc}button[data-bannerBtn]{left:auto;top:0;position:absolute;text-align:left;background-color:rgba(0,0,0,0);color:rgba(109,109,109,.356);z-index:3;height:100%;margin-left:0;width:49vw;border:none}button[data-bannerBtn] .left-arrow,button[data-bannerBtn] .right-arrow{position:relative;background-color:#c9c6c6;border-radius:50%;height:50px;width:50px;margin-top:15vh;margin-bottom:0;opacity:.2;left:5%}button[data-bannerBtn] .right-arrow{left:58%}button[data-bannerBtn] .left-arrow::before,button[data-bannerBtn] .right-arrow::before{content:"";position:absolute;background-image:url(' +
            f +
            ");height:100%;width:100%;background-position:right;background-size:cover;top:0;opacity:.4;overflow:visible;transform:scale(0.5)}button[data-bannerBtn] .right-arrow::before{background-image:url(" +
            h +
            ")}button[data-bannerBtn]:active{background-color:rgba(0,0,0,.068)}button[data-bannerBtn=next]{top:0;right:0;text-align:right}.card-slider-btn-container{display:none}.card-wrapper{cursor:pointer;overflow:scroll;padding:.8rem;padding-bottom:1.5rem;text-shadow:2px 2px rgba(0,0,0,.164);margin-top:0;display:flex;justify-content:left;align-items:center;color:#04024a}.card-wrapper .cardNoShow{display:none}.card-wrapper .card{margin-right:.5rem;height:30vh;min-width:40vw;border:1px solid #61015a;border-radius:5%;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:.5rem;box-shadow:5px 3px 10px rgba(0,0,0,.26)}.card-wrapper .card p{text-decoration:none;font-size:.8rem;color:#61015a}.card-wrapper .card p span{color:#04024a;text-decoration:line-through;margin-right:1rem}.card-wrapper .card .card-img{min-height:4rem;max-width:50%}}@media(min-width: 600px){.scrolling-banner{height:35vh}button[data-bannerBtn]{opacity:0}.cards-slider{background-color:#fff;display:flex;justify-content:center;align-items:center}.cards-slider .card-wrapper{overflow-x:scroll;width:50%;scroll-behavior:smooth;scrollbar-width:none;position:relative;display:flex;justify-content:flex-start;align-items:center;left:0;flex-wrap:nowrap}.cards-slider .card-wrapper .cardNoShow{display:flex}.cards-slider .card-wrapper .card{background-color:#d0d0d0;margin-right:.5rem;height:30vh;min-width:10vw;max-width:10vw;border:1px solid #61015a;border-radius:5%;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:.5rem;box-shadow:5px 3px 10px rgba(0,0,0,.26)}.cards-slider .card-wrapper .card p{text-decoration:none;font-size:.8rem;color:#61015a}.cards-slider .card-wrapper .card p span{color:#04024a;text-decoration:line-through;margin-right:1rem}.cards-slider .card-wrapper .card .card-img{min-height:4rem;max-width:50%}.card-slider-btn-container{display:block;transform:translateY(-18rem);width:100vw;height:110px;position:relative}.card-slider-btn-container .card-slide-btn{border-radius:50%;background-color:rgba(0,0,0,.151);position:absolute;background-image:url(" +
            f +
            ");height:200px;width:200px;background-position:center;background-size:70%;background-repeat:no-repeat;top:0;left:-2rem;opacity:.2;transform:scale(0.5)}.card-slider-btn-container #right-card-slide-btn{background-image:url(" +
            h +
            ");right:-2rem;left:auto}.card-slider-btn-container .card-slide-btn:hover{background-color:rgba(0,0,0,.151)}.card-slider-btn-container .card-slide-btn:active{scale:.6}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/scss/_colors.scss",
              "webpack://./src/scss/home.scss",
            ],
            names: [],
            mappings:
              "AASA,MACE,+BAFS,CCNX,yBACE,kBACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,sBACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,aAAA,CACA,mBAAA,CACA,oCAAA,CAGF,2BACE,UAAA,CACA,wBAAA,CAEF,2BACE,UAAA,CACA,wBAAA,CAEF,2BACE,aAAA,CACA,wBAAA,CAGJ,uBACE,SAAA,CACA,KAAA,CACA,iBAAA,CACA,eAAA,CACA,8BAAA,CACA,4BAAA,CACA,SAAA,CACA,WAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,uEAEE,iBAAA,CACA,wBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,eAAA,CACA,UAAA,CACA,OAAA,CAEF,oCACE,QAAA,CAEF,uFAEE,UAAA,CACA,iBAAA,CACA,wDAAA,CACA,WAAA,CACA,UAAA,CACA,yBAAA,CACA,qBAAA,CACA,KAAA,CACA,UAAA,CACA,gBAAA,CACA,oBAAA,CAEF,4CACE,wDAAA,CAGJ,8BACE,iCAAA,CAEF,4BACE,KAAA,CACA,OAAA,CACA,gBAAA,CAIF,2BACE,YAAA,CAEF,cACE,cAAA,CACA,eAAA,CACA,aAAA,CACA,qBAAA,CACA,oCAAA,CACA,YAAA,CACA,YAAA,CACA,oBAAA,CACA,kBAAA,CACA,aDnGO,CCoGP,0BACE,YAAA,CAEF,oBACE,kBAAA,CACA,WAAA,CACA,cAAA,CACA,wBAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CACA,SAAA,CACA,uCAAA,CACA,sBACE,oBAAA,CACA,eAAA,CACA,aDzHO,CC0HP,2BACE,aDxHC,CCyHD,4BAAA,CACA,iBAAA,CAGJ,8BACE,eAAA,CACA,aAAA,CAAA,CAMR,yBAEE,kBACE,WAAA,CAEF,uBACE,SAAA,CAIF,cACE,qBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,4BACE,iBAAA,CACA,SAAA,CACA,sBAAA,CACA,oBAAA,CACA,iBAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,MAAA,CACA,gBAAA,CACA,wCACE,YAAA,CAEF,kCACE,wBDxKK,CCyKL,kBAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CACA,wBAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CACA,SAAA,CACA,uCAAA,CACA,oCACE,oBAAA,CACA,eAAA,CACA,aDtLK,CCuLL,yCACE,aDrLD,CCsLC,4BAAA,CACA,iBAAA,CAGJ,4CACE,eAAA,CACA,aAAA,CAOR,2BACE,aAAA,CACA,4BAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,2CACE,iBAAA,CACA,iCAAA,CACA,iBAAA,CACA,wDAAA,CACA,YAAA,CACA,WAAA,CACA,0BAAA,CACA,mBAAA,CACA,2BAAA,CACA,KAAA,CACA,UAAA,CACA,UAAA,CACA,oBAAA,CAEF,iDACE,wDAAA,CACA,WAAA,CACA,SAAA,CAEF,iDACE,iCAAA,CAEF,kDACE,QAAA,CAAA",
            sourcesContent: [
              '$darkBackground: #a3a3a3;\r\n$background: #d0d0d0;\r\n$lightBackground: #e4e4e4;\r\n$lightDetails: #61015a;\r\n$ultraLightDetails: #8f0085;\r\n$darkDetails: #411548;\r\n$fontMain: #04024a;\r\n\r\n$mainFont: "Roboto Slab", serif;\r\n:root {\r\n  font-family: $mainFont;\r\n}\r\n',
              '@use "./colors" as c;\n//===========MAIN BANNER===========//\n@media (min-width: 100px) {\n  .scrolling-banner {\n    position: relative;\n    height: 25vh;\n    width: 100%;\n    div {\n      z-index: -1;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%;\n      width: 100%;\n      padding: 0 1.5rem;\n      font-size: 5vw;\n      letter-spacing: 1rem;\n      transition: opacity 400ms ease-in-out;\n    }\n\n    .banner1 {\n      color: white;\n      background-color: rgb(237, 167, 255);\n    }\n    .banner2 {\n      color: black;\n      background-color: rgb(167, 252, 255);\n    }\n    .banner3 {\n      color: rgb(112, 112, 112);\n      background-color: rgb(205, 252, 204);\n    }\n  }\n  button[data-bannerBtn] {\n    left: auto;\n    top: 0;\n    position: absolute;\n    text-align: left;\n    background-color: transparent;\n    color: rgba(109, 109, 109, 0.356);\n    z-index: 3;\n    height: 100%;\n    margin-left: 0;\n    width: 49vw;\n    border: none;\n    .left-arrow,\n    .right-arrow {\n      position: relative;\n      background-color: rgb(201, 198, 198);\n      border-radius: 50%;\n      height: 50px;\n      width: 50px;\n      margin-top: 15vh;\n      margin-bottom: 0;\n      opacity: 0.2;\n      left: 5%;\n    }\n    .right-arrow {\n      left: 58%;\n    }\n    .left-arrow::before,\n    .right-arrow::before {\n      content: "";\n      position: absolute;\n      background-image: url(/src/assets/icons/arrowLeft.png);\n      height: 100%;\n      width: 100%;\n      background-position: right;\n      background-size: cover;\n      top: 0;\n      opacity: 0.4;\n      overflow: visible;\n      transform: scale(0.5);\n    }\n    .right-arrow::before {\n      background-image: url(/src/assets/icons/arrowRight.png);\n    }\n  }\n  button[data-bannerBtn]:active {\n    background-color: rgba(0, 0, 0, 0.068);\n  }\n  button[data-bannerBtn="next"] {\n    top: 0;\n    right: 0;\n    text-align: right;\n  }\n  //===========MAIN BANNER===========//\n  //===========CARDs SLIDER===========//\n  .card-slider-btn-container {\n    display: none;\n  }\n  .card-wrapper {\n    cursor: pointer;\n    overflow: scroll;\n    padding: 0.8rem;\n    padding-bottom: 1.5rem;\n    text-shadow: 2px 2px rgba(0, 0, 0, 0.164);\n    margin-top: 0;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    color: c.$fontMain;\n    .cardNoShow {\n      display: none;\n    }\n    .card {\n      margin-right: 0.5rem;\n      height: 30vh;\n      min-width: 40vw;\n      border: 1px solid c.$lightDetails;\n      border-radius: 5%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      gap: 0.5rem;\n      box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.26);\n      p {\n        text-decoration: none;\n        font-size: 0.8rem;\n        color: c.$lightDetails;\n        span {\n          color: c.$fontMain;\n          text-decoration: line-through;\n          margin-right: 1rem;\n        }\n      }\n      .card-img {\n        min-height: 4rem;\n        max-width: 50%;\n      }\n    }\n  }\n  //===========CARDs SLIDER===========//\n}\n@media (min-width: 600px) {\n  //=======SCROLLING BANNER=====//\n  .scrolling-banner {\n    height: 35vh;\n  }\n  button[data-bannerBtn] {\n    opacity: 0;\n  }\n  //=======SCROLLING BANNER=====//\n  //=======CARDs SLIDER=====//\n  .cards-slider {\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .card-wrapper {\n      overflow-x: scroll;\n      width: 50%; \n      scroll-behavior: smooth;\n      scrollbar-width: none;\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      left: 0;\n      flex-wrap: nowrap;\n      .cardNoShow {\n        display: flex;\n      }\n      .card {\n        background-color: c.$background;\n        margin-right: 0.5rem;\n        height: 30vh;\n        min-width: 10vw;\n        max-width: 10vw;\n        border: 1px solid c.$lightDetails;\n        border-radius: 5%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 0.5rem;\n        box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.26);\n        p {\n          text-decoration: none;\n          font-size: 0.8rem;\n          color: c.$lightDetails;\n          span {\n            color: c.$fontMain;\n            text-decoration: line-through;\n            margin-right: 1rem;\n          }\n        }\n        .card-img {\n          min-height: 4rem;\n          max-width: 50%;\n        }\n      }\n    }\n  }\n  //=======CARDs SLIDER=====//\n  //=======SLIDER BUTTONs=====//\n  .card-slider-btn-container {\n    display: block;\n    transform: translateY(-18rem);\n    width: 100vw;\n    height: 110px;\n    position: relative;\n    .card-slide-btn {\n      border-radius: 50%;\n      background-color: rgba(0, 0, 0, 0.151);\n      position: absolute;\n      background-image: url(/src/assets/icons/arrowLeft.png);\n      height: 200px;\n      width: 200px;\n      background-position: center;\n      background-size: 70%;\n      background-repeat: no-repeat;\n      top: 0;\n      left: -2rem;\n      opacity: 0.2;\n      transform: scale(0.5);\n    }\n    #right-card-slide-btn {\n      background-image: url(/src/assets/icons/arrowRight.png);\n      right: -2rem;\n      left: auto;\n    }\n    .card-slide-btn:hover {\n      background-color: rgba(0, 0, 0, 0.151);\n    }\n    .card-slide-btn:active {\n      scale: (0.6);\n    }\n  }\n  //=======SLIDER BUTTONs=====//\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const p = d;
      },
      528: (e, t, n) => {
        n.d(t, { Z: () => f });
        var r = n(537),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          c = n(667),
          s = n.n(c),
          u = new URL(n(946), n.b),
          l = a()(o()),
          d = s()(u);
        l.push([
          e.id,
          ':root{font-family:"Roboto Slab",serif}*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}.button{color:#fff;background-color:#8f0085;cursor:pointer;border:none;border-radius:5px;font-weight:bold;text-decoration:none;text-transform:capitalize;transition:background-color .15s ease-in-out;height:1.2rem;width:90%}.button:hover{background-color:#411548}.button:active{background-color:#8f0085;transform:scale(0.95)}.icons{height:1.3rem}body{background-color:#e4e4e4}@media(min-width: 100px){.nav-bar{display:none}.mobile-nav{z-index:98;padding:.8rem 1rem;background-color:#d0d0d0;height:4rem;width:100%;position:fixed;top:0;left:0;display:flex;flex-direction:row}.mobile-nav .burger-menu-link-container{display:none;position:fixed;flex-direction:column;margin-top:3rem;right:0}.mobile-nav .burger-menu-link-container .close-icon{list-style:none}.mobile-nav .burger-menu-link-container .burger-item{list-style:none;background-color:#d0d0d0;padding:1.2rem 2rem}.mobile-nav .burger-menu-link-container .burger-link{text-decoration:none;color:#04024a;font-weight:bold}.mobile-nav .burger-menu-link-container .burger-link:hover{color:#61015a}#open-icon,#close-icon{cursor:pointer;height:3rem;position:fixed;top:.5rem;right:1.5rem;z-index:99}}.cart-btn-search{display:none}.search-container{background-color:#d0d0d0;padding:.2rem .3rem;width:100%;display:flex;flex-direction:row;margin-top:4rem;justify-content:center;align-items:center}.search-container #search-bar{padding:0 1rem;height:2.5rem;width:85%;font-size:1rem;border-radius:.2rem 0 0 .2rem;border:none}.search-container #search-btn{border-radius:0 .2rem .2rem 0;border:none;height:2.5rem;width:15%;display:flex;justify-content:center;align-items:center}#page-container{position:relative;min-height:calc(100vh + 10rem)}.footer-container{display:flex;padding:2rem 0;position:absolute;bottom:0;width:100%;background-color:#d0d0d0;font-size:.8rem;justify-content:space-around;align-items:center;color:#61015a;flex-wrap:wrap}.footer-container ul{margin:0 1rem;padding-bottom:2rem}.footer-contacts-list{margin-bottom:2rem;list-style:none}.footer-contacts-list .fc-link{text-decoration:none;color:#61015a}.footer-contacts-list .fc-link img{height:1rem;margin-right:.5rem}.footer-contacts-list .fc-link:hover{text-decoration:underline;color:#411548}.footer-contacts-address{margin-top:-2rem;list-style:none}.footer-contacts-address strong{color:#411548}.copyright{color:#000;text-align:right;background-color:#a8a8a8;padding:.5rem;bottom:0;right:0;left:0;position:absolute;font-size:.7rem;display:block}.copyright a{color:#000}@media(min-width: 600px){.mobile-nav{display:none}.nav-bar{padding:.3rem 2rem;height:4rem;background-color:#d0d0d0;display:flex;align-items:center;margin-bottom:-4rem}.nav-bar .nav-logo{max-width:8rem;flex-grow:1}.nav-bar .nav-link-container{flex-grow:13;font-size:1.3rem;display:flex;justify-content:center;align-items:center;gap:4rem}.nav-bar .nav-link-container a{position:relative;color:#04024a;text-decoration:none;height:2rem}.nav-bar .nav-link-container a::before{content:"";position:absolute;bottom:0;background-color:#411548;height:.1rem;width:100%;transition:transform ease-in-out 350ms;transform:scale(0)}.nav-bar .nav-link-container a:hover::before{transform:scale(1)}.nav-bar .nav-login-container{flex-grow:0;display:flex;justify-content:right;align-items:center}.nav-bar .nav-login-container .button{border-radius:10px;margin-left:.7rem;font-size:1.2rem;width:6rem;background-color:#411548;height:2rem;box-shadow:3px 3px 10px rgba(0,0,0,.534)}.nav-bar .nav-login-container .button:hover{background-color:#61015a}.search-container{background-color:#04024a;padding:.4rem .3rem}.search-container #search-bar{width:60%}.search-container #search-btn{width:5%;margin-right:1rem}.search-container .cart-btn-search{width:10%;height:2.5rem;margin-right:-2rem;font-size:1.5rem;display:flex;justify-content:center;align-items:center}.search-container .cart-btn-search .cart-img-search{margin-left:.6rem;background-image:url(' +
            d +
            ");background-position:right;background-size:100%;background-repeat:no-repeat;width:30px;height:30px}.footer-container{font-size:1.5rem;justify-content:center;gap:15rem}.footer-contacts-list .fc-link img{height:1.5rem;margin-right:.7rem}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/scss/_colors.scss",
              "webpack://./src/scss/_resets.scss",
              "webpack://./src/scss/main.scss",
            ],
            names: [],
            mappings:
              "AASA,MACE,+BAFS,CCPX,qBAGE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,QACE,UAAA,CACA,wBDPkB,CCQlB,cAAA,CACA,WAAA,CACA,iBAdO,CAeP,gBAAA,CACA,oBAAA,CACA,yBAAA,CACA,4CAAA,CACA,aAAA,CACA,SAAA,CACA,cACE,wBDjBU,CCmBZ,eACE,wBDrBgB,CCsBhB,qBAAA,CAIJ,OACE,aAAA,CC5BF,KACE,wBFFgB,CEOlB,yBAEE,SACE,YAAA,CAEF,YACE,UAAA,CACA,kBAAA,CACA,wBFhBS,CEiBT,WAAA,CACA,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,kBAAA,CACA,wCACE,YAAA,CACA,cAAA,CACA,qBAAA,CACA,eAAA,CACA,OAAA,CACA,oDACE,eAAA,CAEF,qDACE,eAAA,CACA,wBFnCK,CEoCL,mBAAA,CAEF,qDACE,oBAAA,CACA,aFnCG,CEoCH,gBAAA,CAEF,2DACE,aF1CO,CE8Cb,uBAEE,cAAA,CACA,WAAA,CACA,cAAA,CACA,SAAA,CACA,YAAA,CACA,UAAA,CAAA,CAKJ,iBACE,YAAA,CAEF,kBACE,wBFhEW,CEiEX,mBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,8BACE,cAAA,CACA,aAAA,CACA,SAAA,CACA,cAAA,CACA,6BAAA,CACA,WAAA,CAEF,8BACE,6BAAA,CACA,WAAA,CACA,aAAA,CACA,SAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAKJ,gBACE,iBAAA,CACA,8BAAA,CAEF,kBACE,YAAA,CACA,cAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,wBFtGW,CEuGX,eAAA,CACA,4BAAA,CACA,kBAAA,CACA,aFxGa,CEyGb,cAAA,CACA,qBACE,aAAA,CACA,mBAAA,CAIJ,sBACE,kBAAA,CACA,eAAA,CACA,+BACE,oBAAA,CACA,aFrHW,CEsHX,mCACE,WAAA,CACA,kBAAA,CAGJ,qCACE,yBAAA,CACA,aF3HU,CE+Hd,yBACE,gBAAA,CACA,eAAA,CACA,gCACE,aFnIU,CEuId,WACE,UAAA,CACA,gBAAA,CACA,wBAAA,CACA,aAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA,CACA,aACE,UAAA,CAMJ,yBACE,YACE,YAAA,CAGF,SACE,kBAAA,CACA,WAAA,CACA,wBFrKS,CEsKT,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,mBACE,cAAA,CACA,WAAA,CAEF,6BACE,YAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,QAAA,CACA,+BACE,iBAAA,CACA,aFjLG,CEkLH,oBAAA,CACA,WAAA,CAEF,uCACE,UAAA,CACA,iBAAA,CACA,QAAA,CACA,wBF1LM,CE2LN,YAAA,CACA,UAAA,CACA,sCAAA,CACA,kBAAA,CAEF,6CACE,kBAAA,CAGJ,8BACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sCACE,kBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,wBF9MM,CE+MN,WAAA,CACA,wCAAA,CAEF,4CACE,wBFrNO,CE0Nb,kBACE,wBFxNO,CEyNP,mBAAA,CACA,8BACE,SAAA,CAEF,8BACE,QAAA,CACA,iBAAA,CAEF,mCACE,SAAA,CACA,aAAA,CACA,kBAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,oDACE,iBAAA,CACA,wDAAA,CACA,yBAAA,CACA,oBAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CAKN,kBACE,gBAAA,CACA,sBAAA,CACA,SAAA,CAIE,mCACE,aAAA,CACA,kBAAA,CAAA",
            sourcesContent: [
              '$darkBackground: #a3a3a3;\r\n$background: #d0d0d0;\r\n$lightBackground: #e4e4e4;\r\n$lightDetails: #61015a;\r\n$ultraLightDetails: #8f0085;\r\n$darkDetails: #411548;\r\n$fontMain: #04024a;\r\n\r\n$mainFont: "Roboto Slab", serif;\r\n:root {\r\n  font-family: $mainFont;\r\n}\r\n',
              "$radius: 5px;\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  background-color: c.$ultraLightDetails;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: $radius;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: background-color 0.15s ease-in-out;\r\n  height: 1.2rem;\r\n  width: 90%;\r\n  &:hover {\r\n    background-color: c.$darkDetails;\r\n  }\r\n  &:active {\r\n    background-color: c.$ultraLightDetails;\r\n    transform: scale(0.95);\r\n  }\r\n}\r\n//====icons common property====//\r\n.icons {\r\n  height: 1.3rem;\r\n}\r\n//==============END=============//\r\n",
              '@use "colors.scss" as c;\r\n@import "resets.scss";\r\n\r\nbody {\r\n  background-color: c.$lightBackground;\r\n}\r\n\r\n//=======MEDIA QUERIES========//\r\n//====360x640 to 600+=====//\r\n@media (min-width: 100px) {\r\n  //=======MOBILE NAV BAR=======//\r\n  .nav-bar {\r\n    display: none;\r\n  }\r\n  .mobile-nav {\r\n    z-index: 98;\r\n    padding: 0.8rem 1rem;\r\n    background-color: c.$background;\r\n    height: 4rem;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    .burger-menu-link-container {\r\n      display: none;\r\n      position: fixed;\r\n      flex-direction: column;\r\n      margin-top: 3rem;\r\n      right: 0;\r\n      .close-icon {\r\n        list-style: none;\r\n      }\r\n      .burger-item {\r\n        list-style: none;\r\n        background-color: c.$background;\r\n        padding: 1.2rem 2rem;\r\n      }\r\n      .burger-link {\r\n        text-decoration: none;\r\n        color: c.$fontMain;\r\n        font-weight: bold;\r\n      }\r\n      .burger-link:hover {\r\n        color: c.$lightDetails;\r\n      }\r\n    }\r\n  }\r\n  #open-icon,\r\n  #close-icon {\r\n    cursor: pointer;\r\n    height: 3rem;\r\n    position: fixed;\r\n    top: 0.5rem;\r\n    right: 1.5rem;\r\n    z-index: 99;\r\n  }\r\n}\r\n//=======MOBILE NAV BAR=======//\r\n//=======SEARCH BAR=======//\r\n.cart-btn-search {\r\n  display: none;\r\n}\r\n.search-container {\r\n  background-color: c.$background;\r\n  padding: 0.2rem 0.3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 4rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  #search-bar {\r\n    padding: 0 1rem;\r\n    height: 2.5rem;\r\n    width: 85%;\r\n    font-size: 1rem;\r\n    border-radius: 0.2rem 0 0 0.2rem;\r\n    border: none;\r\n  }\r\n  #search-btn {\r\n    border-radius: 0 0.2rem 0.2rem 0;\r\n    border: none;\r\n    height: 2.5rem;\r\n    width: 15%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n//=======SEARCH BAR=======//\r\n//=======FOOTER=======//\r\n#page-container {\r\n  position: relative;\r\n  min-height: calc(100vh + 10rem);\r\n}\r\n.footer-container {\r\n  display: flex;\r\n  padding: 2rem 0;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: c.$background;\r\n  font-size: 0.8rem;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  color: c.$lightDetails;\r\n  flex-wrap: wrap;\r\n  ul {\r\n    margin: 0 1rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n}\r\n//=====contacts list\r\n.footer-contacts-list {\r\n  margin-bottom: 2rem;\r\n  list-style: none;\r\n  .fc-link {\r\n    text-decoration: none;\r\n    color: c.$lightDetails;\r\n    img {\r\n      height: 1rem;\r\n      margin-right: 0.5rem;\r\n    }\r\n  }\r\n  .fc-link:hover {\r\n    text-decoration: underline;\r\n    color: c.$darkDetails;\r\n  }\r\n}\r\n//=====contacts address\r\n.footer-contacts-address {\r\n  margin-top: -2rem;\r\n  list-style: none;\r\n  strong {\r\n    color: c.$darkDetails;\r\n  }\r\n}\r\n//=====copyright\r\n.copyright {\r\n  color: black;\r\n  text-align: right;\r\n  background-color: #a8a8a8;\r\n  padding: 0.5rem;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  font-size: 0.7rem;\r\n  display: block;\r\n  a {\r\n    color: black;\r\n  }\r\n}\r\n//=======FOOTER=======//\r\n\r\n//====600++=====//\r\n@media (min-width: 600px) {\r\n  .mobile-nav {\r\n    display: none;\r\n  }\r\n  //===========DESKTOP NAV BAR=======//\r\n  .nav-bar {\r\n    padding: 0.3rem 2rem;\r\n    height: 4rem;\r\n    background-color: c.$background;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: -4rem;\r\n    .nav-logo {\r\n      max-width: 8rem;\r\n      flex-grow: 1;\r\n    }\r\n    .nav-link-container {\r\n      flex-grow: 13;\r\n      font-size: 1.3rem;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 4rem;\r\n      a {\r\n        position: relative;\r\n        color: c.$fontMain;\r\n        text-decoration: none;\r\n        height: 2rem;\r\n      }\r\n      a::before {\r\n        content: "";\r\n        position: absolute;\r\n        bottom: -0;\r\n        background-color: c.$darkDetails;\r\n        height: 0.1rem;\r\n        width: 100%;\r\n        transition: transform ease-in-out 350ms;\r\n        transform: scale(0);\r\n      }\r\n      a:hover::before {\r\n        transform: scale(1);\r\n      }\r\n    }\r\n    .nav-login-container {\r\n      flex-grow: 0;\r\n      display: flex;\r\n      justify-content: right;\r\n      align-items: center;\r\n      .button {\r\n        border-radius: 10px;\r\n        margin-left: 0.7rem;\r\n        font-size: 1.2rem;\r\n        width: 6rem;\r\n        background-color: c.$darkDetails;\r\n        height: 2rem;\r\n        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.534);\r\n      }\r\n      .button:hover {\r\n        background-color: c.$lightDetails;\r\n      }\r\n    }\r\n  }\r\n  //=======SEARCH BAR======//\r\n  .search-container {\r\n    background-color: c.$fontMain;\r\n    padding: 0.4rem 0.3rem;\r\n    #search-bar {\r\n      width: 60%; ////////\r\n    }\r\n    #search-btn {\r\n      width: 5%;\r\n      margin-right: 1rem;\r\n    }\r\n    .cart-btn-search {\r\n      width: 10%;\r\n      height: 2.5rem;\r\n      margin-right: -2rem;\r\n      font-size: 1.5rem;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      .cart-img-search {\r\n        margin-left: 0.6rem;\r\n        background-image: url(../assets/icons/cartIcon.png);\r\n        background-position: right;\r\n        background-size: 100%;\r\n        background-repeat: no-repeat;\r\n        width: 30px;\r\n        height: 30px;\r\n      }\r\n    }\r\n  }\r\n  //========== FOOTER ========//\r\n  .footer-container {\r\n    font-size: 1.5rem;\r\n    justify-content: center;\r\n    gap: 15rem;\r\n  }\r\n  .footer-contacts-list {\r\n    .fc-link {\r\n      img {\r\n        height: 1.5rem;\r\n        margin-right: 0.7rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        const f = l;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              i = "/*# ".concat(o, " */"),
              a = n.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(n.sourceRoot || "")
                  .concat(e, " */");
              });
            return [t].concat(a).concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      627: (e, t, n) => {
        var r = n(379),
          o = n.n(r),
          i = n(795),
          a = n.n(i),
          c = n(569),
          s = n.n(c),
          u = n(565),
          l = n.n(u),
          d = n(216),
          f = n.n(d),
          h = n(589),
          p = n.n(h),
          A = n(242),
          m = {};
        (m.styleTagTransform = p()),
          (m.setAttributes = l()),
          (m.insert = s().bind(null, "head")),
          (m.domAPI = a()),
          (m.insertStyleElement = f()),
          o()(A.Z, m),
          A.Z && A.Z.locals && A.Z.locals;
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              l = i[u] || 0,
              d = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var f = n(d),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(h);
            else {
              var p = o(h, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: p, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              t[c].references--;
            }
            for (var s = r(e, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      634: (e, t, n) => {
        e.exports = n.p + "image/arrowLeft.png";
      },
      724: (e, t, n) => {
        e.exports = n.p + "image/arrowRight.png";
      },
      946: (e, t, n) => {
        e.exports = n.p + "image/cartIcon.png";
      },
      614: (e, t, n) => {
        e.exports = n.p + "image/mouse.jpg";
      },
      111: (e, t, n) => {
        e.exports = n.p + "image/mouse2.png";
      },
      90: (e, t, n) => {
        e.exports = n.p + "image/watch.jpg";
      },
      527: (e, t, n) => {
        e.exports = n.p + "image/watch2.jpg";
      },
    },
    i = {};
  function a(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { id: e, exports: {} });
    return o[e](n, n.exports, a), n.exports;
  }
  (a.m = o),
    (e =
      "function" == typeof Symbol
        ? Symbol("webpack queues")
        : "__webpack_queues__"),
    (t =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (r = (e) => {
      e &&
        !e.d &&
        ((e.d = 1),
        e.forEach((e) => e.r--),
        e.forEach((e) => (e.r-- ? e.r++ : e())));
    }),
    (a.a = (o, i, a) => {
      var c;
      a && ((c = []).d = 1), c && (c.moduleId = o.id);
      var s,
        u,
        l,
        d = new Set(),
        f = o.exports,
        h = new Promise((e, t) => {
          (l = t), (u = e);
        });
      (h[t] = f),
        (h[e] = (e) => (c && e(c), d.forEach(e), h.catch((e) => {}))),
        (h.moduleId = o.id),
        (o.exports = h),
        i(
          (o) => {
            var i;
            s = ((o) =>
              o.map((o) => {
                if (null !== o && "object" == typeof o) {
                  if (o[e]) return o;
                  if (o.then) {
                    var i = [];
                    (i.d = 0),
                      o.then(
                        (e) => {
                          (a[t] = e), r(i);
                        },
                        (e) => {
                          (a[n] = e), r(i);
                        }
                      );
                    var a = {};
                    return (a[e] = (e) => e(i)), a;
                  }
                }
                var c = {};
                return (c[e] = (e) => {}), (c[t] = o), c;
              }))(o);
            var a = () =>
                s.map((e) => {
                  if (e[n]) throw e[n];
                  return e[t];
                }),
              u = new Promise((t) => {
                (i = () => t(a)).r = 0;
                var n = (e) =>
                  e !== c &&
                  !d.has(e) &&
                  (d.add(e), e && !e.d && (i.r++, e.push(i)));
                s.map((t) => t[e](n));
              });
            return i.r ? u : a();
          },
          (e) => (e ? l((h[n] = e)) : u(f), r(c))
        ),
        c && (c.d = 0);
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (a.b = document.baseURI || self.location.href),
    (a.nc = void 0),
    a(311);
})();
//# sourceMappingURL=home.98a724e6f74fc4f07704.js.map
