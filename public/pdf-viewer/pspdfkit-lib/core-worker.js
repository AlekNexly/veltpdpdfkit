/*!
 * PSPDFKit for Web 2024.4.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.PSPDFKit = t() : e.PSPDFKit = t()
}(self, (() => (() => {
    var e = {
        19662: (e, t, r) => {
            var n = r(60614), o = r(66330), i = TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw i(o(e) + " is not a function")
            }
        }, 39483: (e, t, r) => {
            var n = r(4411), o = r(66330), i = TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw i(o(e) + " is not a constructor")
            }
        }, 96077: (e, t, r) => {
            var n = r(60614), o = String, i = TypeError;
            e.exports = function (e) {
                if ("object" == typeof e || n(e)) return e;
                throw i("Can't set " + o(e) + " as a prototype")
            }
        }, 51223: (e, t, r) => {
            var n = r(5112), o = r(70030), i = r(3070).f, a = n("unscopables"), s = Array.prototype;
            null == s[a] && i(s, a, {configurable: !0, value: o(null)}), e.exports = function (e) {
                s[a][e] = !0
            }
        }, 31530: (e, t, r) => {
            "use strict";
            var n = r(28710).charAt;
            e.exports = function (e, t, r) {
                return t + (r ? n(e, t).length : 1)
            }
        }, 25787: (e, t, r) => {
            var n = r(47976), o = TypeError;
            e.exports = function (e, t) {
                if (n(t, e)) return e;
                throw o("Incorrect invocation")
            }
        }, 19670: (e, t, r) => {
            var n = r(70111), o = String, i = TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw i(o(e) + " is not an object")
            }
        }, 23013: e => {
            e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        }, 7556: (e, t, r) => {
            var n = r(47293);
            e.exports = n((function () {
                if ("function" == typeof ArrayBuffer) {
                    var e = new ArrayBuffer(8);
                    Object.isExtensible(e) && Object.defineProperty(e, "a", {value: 8})
                }
            }))
        }, 90260: (e, t, r) => {
            "use strict";
            var n, o, i, a = r(23013), s = r(19781), c = r(17854), u = r(60614), f = r(70111), l = r(92597),
                p = r(70648), d = r(66330), h = r(68880), g = r(98052), m = r(3070).f, v = r(47976), y = r(79518),
                b = r(27674), w = r(5112), x = r(69711), O = r(29909), S = O.enforce, _ = O.get, I = c.Int8Array,
                E = I && I.prototype, A = c.Uint8ClampedArray, F = A && A.prototype, j = I && y(I), P = E && y(E),
                k = Object.prototype, R = c.TypeError, D = w("toStringTag"), T = x("TYPED_ARRAY_TAG"),
                C = "TypedArrayConstructor", U = a && !!b && "Opera" !== p(c.opera), L = !1, N = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                }, B = {BigInt64Array: 8, BigUint64Array: 8}, M = function (e) {
                    var t = y(e);
                    if (f(t)) {
                        var r = _(t);
                        return r && l(r, C) ? r.TypedArrayConstructor : M(t)
                    }
                }, $ = function (e) {
                    if (!f(e)) return !1;
                    var t = p(e);
                    return l(N, t) || l(B, t)
                };
            for (n in N) (i = (o = c[n]) && o.prototype) ? S(i).TypedArrayConstructor = o : U = !1;
            for (n in B) (i = (o = c[n]) && o.prototype) && (S(i).TypedArrayConstructor = o);
            if ((!U || !u(j) || j === Function.prototype) && (j = function () {
                throw R("Incorrect invocation")
            }, U)) for (n in N) c[n] && b(c[n], j);
            if ((!U || !P || P === k) && (P = j.prototype, U)) for (n in N) c[n] && b(c[n].prototype, P);
            if (U && y(F) !== P && b(F, P), s && !l(P, D)) for (n in L = !0, m(P, D, {
                get: function () {
                    return f(this) ? this[T] : void 0
                }
            }), N) c[n] && h(c[n], T, n);
            e.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: U, TYPED_ARRAY_TAG: L && T, aTypedArray: function (e) {
                    if ($(e)) return e;
                    throw R("Target is not a typed array")
                }, aTypedArrayConstructor: function (e) {
                    if (u(e) && (!b || v(j, e))) return e;
                    throw R(d(e) + " is not a typed array constructor")
                }, exportTypedArrayMethod: function (e, t, r, n) {
                    if (s) {
                        if (r) for (var o in N) {
                            var i = c[o];
                            if (i && l(i.prototype, e)) try {
                                delete i.prototype[e]
                            } catch (r) {
                                try {
                                    i.prototype[e] = t
                                } catch (e) {
                                }
                            }
                        }
                        P[e] && !r || g(P, e, r ? t : U && E[e] || t, n)
                    }
                }, exportTypedArrayStaticMethod: function (e, t, r) {
                    var n, o;
                    if (s) {
                        if (b) {
                            if (r) for (n in N) if ((o = c[n]) && l(o, e)) try {
                                delete o[e]
                            } catch (e) {
                            }
                            if (j[e] && !r) return;
                            try {
                                return g(j, e, r ? t : U && j[e] || t)
                            } catch (e) {
                            }
                        }
                        for (n in N) !(o = c[n]) || o[e] && !r || g(o, e, t)
                    }
                }, getTypedArrayConstructor: M, isView: function (e) {
                    if (!f(e)) return !1;
                    var t = p(e);
                    return "DataView" === t || l(N, t) || l(B, t)
                }, isTypedArray: $, TypedArray: j, TypedArrayPrototype: P
            }
        }, 21285: (e, t, r) => {
            "use strict";
            var n = r(47908), o = r(51400), i = r(26244);
            e.exports = function (e) {
                for (var t = n(this), r = i(t), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, r), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? r : o(c, r); u > s;) t[s++] = e;
                return t
            }
        }, 48457: (e, t, r) => {
            "use strict";
            var n = r(49974), o = r(46916), i = r(47908), a = r(53411), s = r(97659), c = r(4411), u = r(26244),
                f = r(86135), l = r(18554), p = r(71246), d = Array;
            e.exports = function (e) {
                var t = i(e), r = c(this), h = arguments.length, g = h > 1 ? arguments[1] : void 0, m = void 0 !== g;
                m && (g = n(g, h > 2 ? arguments[2] : void 0));
                var v, y, b, w, x, O, S = p(t), _ = 0;
                if (!S || this === d && s(S)) for (v = u(t), y = r ? new this(v) : d(v); v > _; _++) O = m ? g(t[_], _) : t[_], f(y, _, O); else for (x = (w = l(t, S)).next, y = r ? new this : []; !(b = o(x, w)).done; _++) O = m ? a(w, g, [b.value, _], !0) : b.value, f(y, _, O);
                return y.length = _, y
            }
        }, 41318: (e, t, r) => {
            var n = r(45656), o = r(51400), i = r(26244), a = function (e) {
                return function (t, r, a) {
                    var s, c = n(t), u = i(c), f = o(a, u);
                    if (e && r != r) {
                        for (; u > f;) if ((s = c[f++]) != s) return !0
                    } else for (; u > f; f++) if ((e || f in c) && c[f] === r) return e || f || 0;
                    return !e && -1
                }
            };
            e.exports = {includes: a(!0), indexOf: a(!1)}
        }, 42092: (e, t, r) => {
            var n = r(49974), o = r(1702), i = r(68361), a = r(47908), s = r(26244), c = r(65417), u = o([].push),
                f = function (e) {
                    var t = 1 == e, r = 2 == e, o = 3 == e, f = 4 == e, l = 6 == e, p = 7 == e, d = 5 == e || l;
                    return function (h, g, m, v) {
                        for (var y, b, w = a(h), x = i(w), O = n(g, m), S = s(x), _ = 0, I = v || c, E = t ? I(h, S) : r || p ? I(h, 0) : void 0; S > _; _++) if ((d || _ in x) && (b = O(y = x[_], _, w), e)) if (t) E[_] = b; else if (b) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return _;
                            case 2:
                                u(E, y)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                u(E, y)
                        }
                        return l ? -1 : o || f ? f : E
                    }
                };
            e.exports = {
                forEach: f(0),
                map: f(1),
                filter: f(2),
                some: f(3),
                every: f(4),
                find: f(5),
                findIndex: f(6),
                filterReject: f(7)
            }
        }, 9341: (e, t, r) => {
            "use strict";
            var n = r(47293);
            e.exports = function (e, t) {
                var r = [][e];
                return !!r && n((function () {
                    r.call(null, t || function () {
                        return 1
                    }, 1)
                }))
            }
        }, 41589: (e, t, r) => {
            var n = r(51400), o = r(26244), i = r(86135), a = Array, s = Math.max;
            e.exports = function (e, t, r) {
                for (var c = o(e), u = n(t, c), f = n(void 0 === r ? c : r, c), l = a(s(f - u, 0)), p = 0; u < f; u++, p++) i(l, p, e[u]);
                return l.length = p, l
            }
        }, 50206: (e, t, r) => {
            var n = r(1702);
            e.exports = n([].slice)
        }, 94362: (e, t, r) => {
            var n = r(41589), o = Math.floor, i = function (e, t) {
                var r = e.length, c = o(r / 2);
                return r < 8 ? a(e, t) : s(e, i(n(e, 0, c), t), i(n(e, c), t), t)
            }, a = function (e, t) {
                for (var r, n, o = e.length, i = 1; i < o;) {
                    for (n = i, r = e[i]; n && t(e[n - 1], r) > 0;) e[n] = e[--n];
                    n !== i++ && (e[n] = r)
                }
                return e
            }, s = function (e, t, r, n) {
                for (var o = t.length, i = r.length, a = 0, s = 0; a < o || s < i;) e[a + s] = a < o && s < i ? n(t[a], r[s]) <= 0 ? t[a++] : r[s++] : a < o ? t[a++] : r[s++];
                return e
            };
            e.exports = i
        }, 77475: (e, t, r) => {
            var n = r(43157), o = r(4411), i = r(70111), a = r(5112)("species"), s = Array;
            e.exports = function (e) {
                var t;
                return n(e) && (t = e.constructor, (o(t) && (t === s || n(t.prototype)) || i(t) && null === (t = t[a])) && (t = void 0)), void 0 === t ? s : t
            }
        }, 65417: (e, t, r) => {
            var n = r(77475);
            e.exports = function (e, t) {
                return new (n(e))(0 === t ? 0 : t)
            }
        }, 53411: (e, t, r) => {
            var n = r(19670), o = r(99212);
            e.exports = function (e, t, r, i) {
                try {
                    return i ? t(n(r)[0], r[1]) : t(r)
                } catch (t) {
                    o(e, "throw", t)
                }
            }
        }, 17072: (e, t, r) => {
            var n = r(5112)("iterator"), o = !1;
            try {
                var i = 0, a = {
                    next: function () {
                        return {done: !!i++}
                    }, return: function () {
                        o = !0
                    }
                };
                a[n] = function () {
                    return this
                }, Array.from(a, (function () {
                    throw 2
                }))
            } catch (e) {
            }
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var r = !1;
                try {
                    var i = {};
                    i[n] = function () {
                        return {
                            next: function () {
                                return {done: r = !0}
                            }
                        }
                    }, e(i)
                } catch (e) {
                }
                return r
            }
        }, 84326: (e, t, r) => {
            var n = r(1702), o = n({}.toString), i = n("".slice);
            e.exports = function (e) {
                return i(o(e), 8, -1)
            }
        }, 70648: (e, t, r) => {
            var n = r(51694), o = r(60614), i = r(84326), a = r(5112)("toStringTag"), s = Object,
                c = "Arguments" == i(function () {
                    return arguments
                }());
            e.exports = n ? i : function (e) {
                var t, r, n;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
                    try {
                        return e[t]
                    } catch (e) {
                    }
                }(t = s(e), a)) ? r : c ? i(t) : "Object" == (n = i(t)) && o(t.callee) ? "Arguments" : n
            }
        }, 29320: (e, t, r) => {
            "use strict";
            var n = r(1702), o = r(89190), i = r(62423).getWeakData, a = r(25787), s = r(19670), c = r(68554),
                u = r(70111), f = r(20408), l = r(42092), p = r(92597), d = r(29909), h = d.set, g = d.getterFor,
                m = l.find, v = l.findIndex, y = n([].splice), b = 0, w = function (e) {
                    return e.frozen || (e.frozen = new x)
                }, x = function () {
                    this.entries = []
                }, O = function (e, t) {
                    return m(e.entries, (function (e) {
                        return e[0] === t
                    }))
                };
            x.prototype = {
                get: function (e) {
                    var t = O(this, e);
                    if (t) return t[1]
                }, has: function (e) {
                    return !!O(this, e)
                }, set: function (e, t) {
                    var r = O(this, e);
                    r ? r[1] = t : this.entries.push([e, t])
                }, delete: function (e) {
                    var t = v(this.entries, (function (t) {
                        return t[0] === e
                    }));
                    return ~t && y(this.entries, t, 1), !!~t
                }
            }, e.exports = {
                getConstructor: function (e, t, r, n) {
                    var l = e((function (e, o) {
                        a(e, d), h(e, {type: t, id: b++, frozen: void 0}), c(o) || f(o, e[n], {that: e, AS_ENTRIES: r})
                    })), d = l.prototype, m = g(t), v = function (e, t, r) {
                        var n = m(e), o = i(s(t), !0);
                        return !0 === o ? w(n).set(t, r) : o[n.id] = r, e
                    };
                    return o(d, {
                        delete: function (e) {
                            var t = m(this);
                            if (!u(e)) return !1;
                            var r = i(e);
                            return !0 === r ? w(t).delete(e) : r && p(r, t.id) && delete r[t.id]
                        }, has: function (e) {
                            var t = m(this);
                            if (!u(e)) return !1;
                            var r = i(e);
                            return !0 === r ? w(t).has(e) : r && p(r, t.id)
                        }
                    }), o(d, r ? {
                        get: function (e) {
                            var t = m(this);
                            if (u(e)) {
                                var r = i(e);
                                return !0 === r ? w(t).get(e) : r ? r[t.id] : void 0
                            }
                        }, set: function (e, t) {
                            return v(this, e, t)
                        }
                    } : {
                        add: function (e) {
                            return v(this, e, !0)
                        }
                    }), l
                }
            }
        }, 77710: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(17854), i = r(1702), a = r(54705), s = r(98052), c = r(62423), u = r(20408),
                f = r(25787), l = r(60614), p = r(68554), d = r(70111), h = r(47293), g = r(17072), m = r(58003),
                v = r(79587);
            e.exports = function (e, t, r) {
                var y = -1 !== e.indexOf("Map"), b = -1 !== e.indexOf("Weak"), w = y ? "set" : "add", x = o[e],
                    O = x && x.prototype, S = x, _ = {}, I = function (e) {
                        var t = i(O[e]);
                        s(O, e, "add" == e ? function (e) {
                            return t(this, 0 === e ? 0 : e), this
                        } : "delete" == e ? function (e) {
                            return !(b && !d(e)) && t(this, 0 === e ? 0 : e)
                        } : "get" == e ? function (e) {
                            return b && !d(e) ? void 0 : t(this, 0 === e ? 0 : e)
                        } : "has" == e ? function (e) {
                            return !(b && !d(e)) && t(this, 0 === e ? 0 : e)
                        } : function (e, r) {
                            return t(this, 0 === e ? 0 : e, r), this
                        })
                    };
                if (a(e, !l(x) || !(b || O.forEach && !h((function () {
                    (new x).entries().next()
                }))))) S = r.getConstructor(t, e, y, w), c.enable(); else if (a(e, !0)) {
                    var E = new S, A = E[w](b ? {} : -0, 1) != E, F = h((function () {
                        E.has(1)
                    })), j = g((function (e) {
                        new x(e)
                    })), P = !b && h((function () {
                        for (var e = new x, t = 5; t--;) e[w](t, t);
                        return !e.has(-0)
                    }));
                    j || ((S = t((function (e, t) {
                        f(e, O);
                        var r = v(new x, e, S);
                        return p(t) || u(t, r[w], {that: r, AS_ENTRIES: y}), r
                    }))).prototype = O, O.constructor = S), (F || P) && (I("delete"), I("has"), y && I("get")), (P || A) && I(w), b && O.clear && delete O.clear
                }
                return _[e] = S, n({
                    global: !0,
                    constructor: !0,
                    forced: S != x
                }, _), m(S, e), b || r.setStrong(S, e, y), S
            }
        }, 99920: (e, t, r) => {
            var n = r(92597), o = r(53887), i = r(31236), a = r(3070);
            e.exports = function (e, t, r) {
                for (var s = o(t), c = a.f, u = i.f, f = 0; f < s.length; f++) {
                    var l = s[f];
                    n(e, l) || r && n(r, l) || c(e, l, u(t, l))
                }
            }
        }, 84964: (e, t, r) => {
            var n = r(5112)("match");
            e.exports = function (e) {
                var t = /./;
                try {
                    "/./"[e](t)
                } catch (r) {
                    try {
                        return t[n] = !1, "/./"[e](t)
                    } catch (e) {
                    }
                }
                return !1
            }
        }, 49920: (e, t, r) => {
            var n = r(47293);
            e.exports = !n((function () {
                function e() {
                }

                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        }, 76178: e => {
            e.exports = function (e, t) {
                return {value: e, done: t}
            }
        }, 68880: (e, t, r) => {
            var n = r(19781), o = r(3070), i = r(79114);
            e.exports = n ? function (e, t, r) {
                return o.f(e, t, i(1, r))
            } : function (e, t, r) {
                return e[t] = r, e
            }
        }, 79114: e => {
            e.exports = function (e, t) {
                return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
            }
        }, 86135: (e, t, r) => {
            "use strict";
            var n = r(34948), o = r(3070), i = r(79114);
            e.exports = function (e, t, r) {
                var a = n(t);
                a in e ? o.f(e, a, i(0, r)) : e[a] = r
            }
        }, 47045: (e, t, r) => {
            var n = r(56339), o = r(3070);
            e.exports = function (e, t, r) {
                return r.get && n(r.get, t, {getter: !0}), r.set && n(r.set, t, {setter: !0}), o.f(e, t, r)
            }
        }, 98052: (e, t, r) => {
            var n = r(60614), o = r(3070), i = r(56339), a = r(13072);
            e.exports = function (e, t, r, s) {
                s || (s = {});
                var c = s.enumerable, u = void 0 !== s.name ? s.name : t;
                if (n(r) && i(r, u, s), s.global) c ? e[t] = r : a(t, r); else {
                    try {
                        s.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (e) {
                    }
                    c ? e[t] = r : o.f(e, t, {
                        value: r,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        }, 89190: (e, t, r) => {
            var n = r(98052);
            e.exports = function (e, t, r) {
                for (var o in t) n(e, o, t[o], r);
                return e
            }
        }, 13072: (e, t, r) => {
            var n = r(17854), o = Object.defineProperty;
            e.exports = function (e, t) {
                try {
                    o(n, e, {value: t, configurable: !0, writable: !0})
                } catch (r) {
                    n[e] = t
                }
                return t
            }
        }, 85117: (e, t, r) => {
            "use strict";
            var n = r(66330), o = TypeError;
            e.exports = function (e, t) {
                if (!delete e[t]) throw o("Cannot delete property " + n(t) + " of " + n(e))
            }
        }, 19781: (e, t, r) => {
            var n = r(47293);
            e.exports = !n((function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        }, 4154: e => {
            var t = "object" == typeof document && document.all, r = void 0 === t && void 0 !== t;
            e.exports = {all: t, IS_HTMLDDA: r}
        }, 80317: (e, t, r) => {
            var n = r(17854), o = r(70111), i = n.document, a = o(i) && o(i.createElement);
            e.exports = function (e) {
                return a ? i.createElement(e) : {}
            }
        }, 7207: e => {
            var t = TypeError;
            e.exports = function (e) {
                if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                return e
            }
        }, 48324: e => {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, 98509: (e, t, r) => {
            var n = r(80317)("span").classList, o = n && n.constructor && n.constructor.prototype;
            e.exports = o === Object.prototype ? void 0 : o
        }, 68886: (e, t, r) => {
            var n = r(88113).match(/firefox\/(\d+)/i);
            e.exports = !!n && +n[1]
        }, 7871: (e, t, r) => {
            var n = r(83823), o = r(35268);
            e.exports = !n && !o && "object" == typeof window && "object" == typeof document
        }, 89363: e => {
            e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
        }, 83823: e => {
            e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
        }, 30256: (e, t, r) => {
            var n = r(88113);
            e.exports = /MSIE|Trident/.test(n)
        }, 71528: (e, t, r) => {
            var n = r(88113), o = r(17854);
            e.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble
        }, 6833: (e, t, r) => {
            var n = r(88113);
            e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
        }, 35268: (e, t, r) => {
            var n = r(84326), o = r(17854);
            e.exports = "process" == n(o.process)
        }, 71036: (e, t, r) => {
            var n = r(88113);
            e.exports = /web0s(?!.*chrome)/i.test(n)
        }, 88113: (e, t, r) => {
            var n = r(35005);
            e.exports = n("navigator", "userAgent") || ""
        }, 7392: (e, t, r) => {
            var n, o, i = r(17854), a = r(88113), s = i.process, c = i.Deno, u = s && s.versions || c && c.version,
                f = u && u.v8;
            f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), e.exports = o
        }, 98008: (e, t, r) => {
            var n = r(88113).match(/AppleWebKit\/(\d+)\./);
            e.exports = !!n && +n[1]
        }, 80748: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, 82109: (e, t, r) => {
            var n = r(17854), o = r(31236).f, i = r(68880), a = r(98052), s = r(13072), c = r(99920), u = r(54705);
            e.exports = function (e, t) {
                var r, f, l, p, d, h = e.target, g = e.global, m = e.stat;
                if (r = g ? n : m ? n[h] || s(h, {}) : (n[h] || {}).prototype) for (f in t) {
                    if (p = t[f], l = e.dontCallGetSet ? (d = o(r, f)) && d.value : r[f], !u(g ? f : h + (m ? "." : "#") + f, e.forced) && void 0 !== l) {
                        if (typeof p == typeof l) continue;
                        c(p, l)
                    }
                    (e.sham || l && l.sham) && i(p, "sham", !0), a(r, f, p, e)
                }
            }
        }, 47293: e => {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, 27007: (e, t, r) => {
            "use strict";
            r(74916);
            var n = r(21470), o = r(98052), i = r(22261), a = r(47293), s = r(5112), c = r(68880), u = s("species"),
                f = RegExp.prototype;
            e.exports = function (e, t, r, l) {
                var p = s(e), d = !a((function () {
                    var t = {};
                    return t[p] = function () {
                        return 7
                    }, 7 != ""[e](t)
                })), h = d && !a((function () {
                    var t = !1, r = /a/;
                    return "split" === e && ((r = {}).constructor = {}, r.constructor[u] = function () {
                        return r
                    }, r.flags = "", r[p] = /./[p]), r.exec = function () {
                        return t = !0, null
                    }, r[p](""), !t
                }));
                if (!d || !h || r) {
                    var g = n(/./[p]), m = t(p, ""[e], (function (e, t, r, o, a) {
                        var s = n(e), c = t.exec;
                        return c === i || c === f.exec ? d && !a ? {done: !0, value: g(t, r, o)} : {
                            done: !0,
                            value: s(r, t, o)
                        } : {done: !1}
                    }));
                    o(String.prototype, e, m[0]), o(f, p, m[1])
                }
                l && c(f[p], "sham", !0)
            }
        }, 6790: (e, t, r) => {
            "use strict";
            var n = r(43157), o = r(26244), i = r(7207), a = r(49974), s = function (e, t, r, c, u, f, l, p) {
                for (var d, h, g = u, m = 0, v = !!l && a(l, p); m < c;) m in r && (d = v ? v(r[m], m, t) : r[m], f > 0 && n(d) ? (h = o(d), g = s(e, t, d, h, g, f - 1) - 1) : (i(g + 1), e[g] = d), g++), m++;
                return g
            };
            e.exports = s
        }, 76677: (e, t, r) => {
            var n = r(47293);
            e.exports = !n((function () {
                return Object.isExtensible(Object.preventExtensions({}))
            }))
        }, 22104: (e, t, r) => {
            var n = r(34374), o = Function.prototype, i = o.apply, a = o.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function () {
                return a.apply(i, arguments)
            })
        }, 49974: (e, t, r) => {
            var n = r(21470), o = r(19662), i = r(34374), a = n(n.bind);
            e.exports = function (e, t) {
                return o(e), void 0 === t ? e : i ? a(e, t) : function () {
                    return e.apply(t, arguments)
                }
            }
        }, 34374: (e, t, r) => {
            var n = r(47293);
            e.exports = !n((function () {
                var e = function () {
                }.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        }, 46916: (e, t, r) => {
            var n = r(34374), o = Function.prototype.call;
            e.exports = n ? o.bind(o) : function () {
                return o.apply(o, arguments)
            }
        }, 76530: (e, t, r) => {
            var n = r(19781), o = r(92597), i = Function.prototype, a = n && Object.getOwnPropertyDescriptor,
                s = o(i, "name"), c = s && "something" === function () {
                }.name, u = s && (!n || n && a(i, "name").configurable);
            e.exports = {EXISTS: s, PROPER: c, CONFIGURABLE: u}
        }, 21470: (e, t, r) => {
            var n = r(84326), o = r(1702);
            e.exports = function (e) {
                if ("Function" === n(e)) return o(e)
            }
        }, 1702: (e, t, r) => {
            var n = r(34374), o = Function.prototype, i = o.call, a = n && o.bind.bind(i, i);
            e.exports = n ? a : function (e) {
                return function () {
                    return i.apply(e, arguments)
                }
            }
        }, 35005: (e, t, r) => {
            var n = r(17854), o = r(60614), i = function (e) {
                return o(e) ? e : void 0
            };
            e.exports = function (e, t) {
                return arguments.length < 2 ? i(n[e]) : n[e] && n[e][t]
            }
        }, 71246: (e, t, r) => {
            var n = r(70648), o = r(58173), i = r(68554), a = r(97497), s = r(5112)("iterator");
            e.exports = function (e) {
                if (!i(e)) return o(e, s) || o(e, "@@iterator") || a[n(e)]
            }
        }, 18554: (e, t, r) => {
            var n = r(46916), o = r(19662), i = r(19670), a = r(66330), s = r(71246), c = TypeError;
            e.exports = function (e, t) {
                var r = arguments.length < 2 ? s(e) : t;
                if (o(r)) return i(n(r, e));
                throw c(a(e) + " is not iterable")
            }
        }, 58173: (e, t, r) => {
            var n = r(19662), o = r(68554);
            e.exports = function (e, t) {
                var r = e[t];
                return o(r) ? void 0 : n(r)
            }
        }, 10647: (e, t, r) => {
            var n = r(1702), o = r(47908), i = Math.floor, a = n("".charAt), s = n("".replace), c = n("".slice),
                u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, f = /\$([$&'`]|\d{1,2})/g;
            e.exports = function (e, t, r, n, l, p) {
                var d = r + e.length, h = n.length, g = f;
                return void 0 !== l && (l = o(l), g = u), s(p, g, (function (o, s) {
                    var u;
                    switch (a(s, 0)) {
                        case"$":
                            return "$";
                        case"&":
                            return e;
                        case"`":
                            return c(t, 0, r);
                        case"'":
                            return c(t, d);
                        case"<":
                            u = l[c(s, 1, -1)];
                            break;
                        default:
                            var f = +s;
                            if (0 === f) return o;
                            if (f > h) {
                                var p = i(f / 10);
                                return 0 === p ? o : p <= h ? void 0 === n[p - 1] ? a(s, 1) : n[p - 1] + a(s, 1) : o
                            }
                            u = n[f - 1]
                    }
                    return void 0 === u ? "" : u
                }))
            }
        }, 17854: (e, t, r) => {
            var n = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function () {
                return this
            }() || Function("return this")()
        }, 92597: (e, t, r) => {
            var n = r(1702), o = r(47908), i = n({}.hasOwnProperty);
            e.exports = Object.hasOwn || function (e, t) {
                return i(o(e), t)
            }
        }, 3501: e => {
            e.exports = {}
        }, 842: (e, t, r) => {
            var n = r(17854);
            e.exports = function (e, t) {
                var r = n.console;
                r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t))
            }
        }, 60490: (e, t, r) => {
            var n = r(35005);
            e.exports = n("document", "documentElement")
        }, 64664: (e, t, r) => {
            var n = r(19781), o = r(47293), i = r(80317);
            e.exports = !n && !o((function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 68361: (e, t, r) => {
            var n = r(1702), o = r(47293), i = r(84326), a = Object, s = n("".split);
            e.exports = o((function () {
                return !a("z").propertyIsEnumerable(0)
            })) ? function (e) {
                return "String" == i(e) ? s(e, "") : a(e)
            } : a
        }, 79587: (e, t, r) => {
            var n = r(60614), o = r(70111), i = r(27674);
            e.exports = function (e, t, r) {
                var a, s;
                return i && n(a = t.constructor) && a !== r && o(s = a.prototype) && s !== r.prototype && i(e, s), e
            }
        }, 42788: (e, t, r) => {
            var n = r(1702), o = r(60614), i = r(5465), a = n(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function (e) {
                return a(e)
            }), e.exports = i.inspectSource
        }, 62423: (e, t, r) => {
            var n = r(82109), o = r(1702), i = r(3501), a = r(70111), s = r(92597), c = r(3070).f, u = r(8006),
                f = r(1156), l = r(52050), p = r(69711), d = r(76677), h = !1, g = p("meta"), m = 0, v = function (e) {
                    c(e, g, {value: {objectID: "O" + m++, weakData: {}}})
                }, y = e.exports = {
                    enable: function () {
                        y.enable = function () {
                        }, h = !0;
                        var e = u.f, t = o([].splice), r = {};
                        r[g] = 1, e(r).length && (u.f = function (r) {
                            for (var n = e(r), o = 0, i = n.length; o < i; o++) if (n[o] === g) {
                                t(n, o, 1);
                                break
                            }
                            return n
                        }, n({target: "Object", stat: !0, forced: !0}, {getOwnPropertyNames: f.f}))
                    }, fastKey: function (e, t) {
                        if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!s(e, g)) {
                            if (!l(e)) return "F";
                            if (!t) return "E";
                            v(e)
                        }
                        return e[g].objectID
                    }, getWeakData: function (e, t) {
                        if (!s(e, g)) {
                            if (!l(e)) return !0;
                            if (!t) return !1;
                            v(e)
                        }
                        return e[g].weakData
                    }, onFreeze: function (e) {
                        return d && h && l(e) && !s(e, g) && v(e), e
                    }
                };
            i[g] = !0
        }, 29909: (e, t, r) => {
            var n, o, i, a = r(94811), s = r(17854), c = r(70111), u = r(68880), f = r(92597), l = r(5465), p = r(6200),
                d = r(3501), h = "Object already initialized", g = s.TypeError, m = s.WeakMap;
            if (a || l.state) {
                var v = l.state || (l.state = new m);
                v.get = v.get, v.has = v.has, v.set = v.set, n = function (e, t) {
                    if (v.has(e)) throw g(h);
                    return t.facade = e, v.set(e, t), t
                }, o = function (e) {
                    return v.get(e) || {}
                }, i = function (e) {
                    return v.has(e)
                }
            } else {
                var y = p("state");
                d[y] = !0, n = function (e, t) {
                    if (f(e, y)) throw g(h);
                    return t.facade = e, u(e, y, t), t
                }, o = function (e) {
                    return f(e, y) ? e[y] : {}
                }, i = function (e) {
                    return f(e, y)
                }
            }
            e.exports = {
                set: n, get: o, has: i, enforce: function (e) {
                    return i(e) ? o(e) : n(e, {})
                }, getterFor: function (e) {
                    return function (t) {
                        var r;
                        if (!c(t) || (r = o(t)).type !== e) throw g("Incompatible receiver, " + e + " required");
                        return r
                    }
                }
            }
        }, 97659: (e, t, r) => {
            var n = r(5112), o = r(97497), i = n("iterator"), a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (o.Array === e || a[i] === e)
            }
        }, 43157: (e, t, r) => {
            var n = r(84326);
            e.exports = Array.isArray || function (e) {
                return "Array" == n(e)
            }
        }, 60614: (e, t, r) => {
            var n = r(4154), o = n.all;
            e.exports = n.IS_HTMLDDA ? function (e) {
                return "function" == typeof e || e === o
            } : function (e) {
                return "function" == typeof e
            }
        }, 4411: (e, t, r) => {
            var n = r(1702), o = r(47293), i = r(60614), a = r(70648), s = r(35005), c = r(42788), u = function () {
                }, f = [], l = s("Reflect", "construct"), p = /^\s*(?:class|function)\b/, d = n(p.exec), h = !p.exec(u),
                g = function (e) {
                    if (!i(e)) return !1;
                    try {
                        return l(u, f, e), !0
                    } catch (e) {
                        return !1
                    }
                }, m = function (e) {
                    if (!i(e)) return !1;
                    switch (a(e)) {
                        case"AsyncFunction":
                        case"GeneratorFunction":
                        case"AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return h || !!d(p, c(e))
                    } catch (e) {
                        return !0
                    }
                };
            m.sham = !0, e.exports = !l || o((function () {
                var e;
                return g(g.call) || !g(Object) || !g((function () {
                    e = !0
                })) || e
            })) ? m : g
        }, 45032: (e, t, r) => {
            var n = r(92597);
            e.exports = function (e) {
                return void 0 !== e && (n(e, "value") || n(e, "writable"))
            }
        }, 54705: (e, t, r) => {
            var n = r(47293), o = r(60614), i = /#|\.prototype\./, a = function (e, t) {
                var r = c[s(e)];
                return r == f || r != u && (o(t) ? n(t) : !!t)
            }, s = a.normalize = function (e) {
                return String(e).replace(i, ".").toLowerCase()
            }, c = a.data = {}, u = a.NATIVE = "N", f = a.POLYFILL = "P";
            e.exports = a
        }, 68554: e => {
            e.exports = function (e) {
                return null == e
            }
        }, 70111: (e, t, r) => {
            var n = r(60614), o = r(4154), i = o.all;
            e.exports = o.IS_HTMLDDA ? function (e) {
                return "object" == typeof e ? null !== e : n(e) || e === i
            } : function (e) {
                return "object" == typeof e ? null !== e : n(e)
            }
        }, 31913: e => {
            e.exports = !1
        }, 47850: (e, t, r) => {
            var n = r(70111), o = r(84326), i = r(5112)("match");
            e.exports = function (e) {
                var t;
                return n(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
            }
        }, 52190: (e, t, r) => {
            var n = r(35005), o = r(60614), i = r(47976), a = r(43307), s = Object;
            e.exports = a ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                var t = n("Symbol");
                return o(t) && i(t.prototype, s(e))
            }
        }, 20408: (e, t, r) => {
            var n = r(49974), o = r(46916), i = r(19670), a = r(66330), s = r(97659), c = r(26244), u = r(47976),
                f = r(18554), l = r(71246), p = r(99212), d = TypeError, h = function (e, t) {
                    this.stopped = e, this.result = t
                }, g = h.prototype;
            e.exports = function (e, t, r) {
                var m, v, y, b, w, x, O, S = r && r.that, _ = !(!r || !r.AS_ENTRIES), I = !(!r || !r.IS_RECORD),
                    E = !(!r || !r.IS_ITERATOR), A = !(!r || !r.INTERRUPTED), F = n(t, S), j = function (e) {
                        return m && p(m, "normal", e), new h(!0, e)
                    }, P = function (e) {
                        return _ ? (i(e), A ? F(e[0], e[1], j) : F(e[0], e[1])) : A ? F(e, j) : F(e)
                    };
                if (I) m = e.iterator; else if (E) m = e; else {
                    if (!(v = l(e))) throw d(a(e) + " is not iterable");
                    if (s(v)) {
                        for (y = 0, b = c(e); b > y; y++) if ((w = P(e[y])) && u(g, w)) return w;
                        return new h(!1)
                    }
                    m = f(e, v)
                }
                for (x = I ? e.next : m.next; !(O = o(x, m)).done;) {
                    try {
                        w = P(O.value)
                    } catch (e) {
                        p(m, "throw", e)
                    }
                    if ("object" == typeof w && w && u(g, w)) return w
                }
                return new h(!1)
            }
        }, 99212: (e, t, r) => {
            var n = r(46916), o = r(19670), i = r(58173);
            e.exports = function (e, t, r) {
                var a, s;
                o(e);
                try {
                    if (!(a = i(e, "return"))) {
                        if ("throw" === t) throw r;
                        return r
                    }
                    a = n(a, e)
                } catch (e) {
                    s = !0, a = e
                }
                if ("throw" === t) throw r;
                if (s) throw a;
                return o(a), r
            }
        }, 63061: (e, t, r) => {
            "use strict";
            var n = r(13383).IteratorPrototype, o = r(70030), i = r(79114), a = r(58003), s = r(97497),
                c = function () {
                    return this
                };
            e.exports = function (e, t, r, u) {
                var f = t + " Iterator";
                return e.prototype = o(n, {next: i(+!u, r)}), a(e, f, !1, !0), s[f] = c, e
            }
        }, 51656: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(46916), i = r(31913), a = r(76530), s = r(60614), c = r(63061), u = r(79518),
                f = r(27674), l = r(58003), p = r(68880), d = r(98052), h = r(5112), g = r(97497), m = r(13383),
                v = a.PROPER, y = a.CONFIGURABLE, b = m.IteratorPrototype, w = m.BUGGY_SAFARI_ITERATORS,
                x = h("iterator"), O = "keys", S = "values", _ = "entries", I = function () {
                    return this
                };
            e.exports = function (e, t, r, a, h, m, E) {
                c(r, t, a);
                var A, F, j, P = function (e) {
                        if (e === h && C) return C;
                        if (!w && e in D) return D[e];
                        switch (e) {
                            case O:
                            case S:
                            case _:
                                return function () {
                                    return new r(this, e)
                                }
                        }
                        return function () {
                            return new r(this)
                        }
                    }, k = t + " Iterator", R = !1, D = e.prototype, T = D[x] || D["@@iterator"] || h && D[h],
                    C = !w && T || P(h), U = "Array" == t && D.entries || T;
                if (U && (A = u(U.call(new e))) !== Object.prototype && A.next && (i || u(A) === b || (f ? f(A, b) : s(A[x]) || d(A, x, I)), l(A, k, !0, !0), i && (g[k] = I)), v && h == S && T && T.name !== S && (!i && y ? p(D, "name", S) : (R = !0, C = function () {
                    return o(T, this)
                })), h) if (F = {
                    values: P(S),
                    keys: m ? C : P(O),
                    entries: P(_)
                }, E) for (j in F) (w || R || !(j in D)) && d(D, j, F[j]); else n({
                    target: t,
                    proto: !0,
                    forced: w || R
                }, F);
                return i && !E || D[x] === C || d(D, x, C, {name: h}), g[t] = C, F
            }
        }, 13383: (e, t, r) => {
            "use strict";
            var n, o, i, a = r(47293), s = r(60614), c = r(70111), u = r(70030), f = r(79518), l = r(98052),
                p = r(5112), d = r(31913), h = p("iterator"), g = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : g = !0), !c(n) || a((function () {
                var e = {};
                return n[h].call(e) !== e
            })) ? n = {} : d && (n = u(n)), s(n[h]) || l(n, h, (function () {
                return this
            })), e.exports = {IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: g}
        }, 97497: e => {
            e.exports = {}
        }, 26244: (e, t, r) => {
            var n = r(17466);
            e.exports = function (e) {
                return n(e.length)
            }
        }, 56339: (e, t, r) => {
            var n = r(47293), o = r(60614), i = r(92597), a = r(19781), s = r(76530).CONFIGURABLE, c = r(42788),
                u = r(29909), f = u.enforce, l = u.get, p = Object.defineProperty, d = a && !n((function () {
                    return 8 !== p((function () {
                    }), "length", {value: 8}).length
                })), h = String(String).split("String"), g = e.exports = function (e, t, r) {
                    "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || s && e.name !== t) && (a ? p(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), d && r && i(r, "arity") && e.length !== r.arity && p(e, "length", {value: r.arity});
                    try {
                        r && i(r, "constructor") && r.constructor ? a && p(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
                    } catch (e) {
                    }
                    var n = f(e);
                    return i(n, "source") || (n.source = h.join("string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = g((function () {
                return o(this) && l(this).source || c(this)
            }), "toString")
        }, 74758: e => {
            var t = Math.ceil, r = Math.floor;
            e.exports = Math.trunc || function (e) {
                var n = +e;
                return (n > 0 ? r : t)(n)
            }
        }, 95948: (e, t, r) => {
            var n, o, i, a, s, c, u, f, l = r(17854), p = r(49974), d = r(31236).f, h = r(20261).set, g = r(6833),
                m = r(71528), v = r(71036), y = r(35268), b = l.MutationObserver || l.WebKitMutationObserver,
                w = l.document, x = l.process, O = l.Promise, S = d(l, "queueMicrotask"), _ = S && S.value;
            _ || (n = function () {
                var e, t;
                for (y && (e = x.domain) && e.exit(); o;) {
                    t = o.fn, o = o.next;
                    try {
                        t()
                    } catch (e) {
                        throw o ? a() : i = void 0, e
                    }
                }
                i = void 0, e && e.enter()
            }, g || y || v || !b || !w ? !m && O && O.resolve ? ((u = O.resolve(void 0)).constructor = O, f = p(u.then, u), a = function () {
                f(n)
            }) : y ? a = function () {
                x.nextTick(n)
            } : (h = p(h, l), a = function () {
                h(n)
            }) : (s = !0, c = w.createTextNode(""), new b(n).observe(c, {characterData: !0}), a = function () {
                c.data = s = !s
            })), e.exports = _ || function (e) {
                var t = {fn: e, next: void 0};
                i && (i.next = t), o || (o = t, a()), i = t
            }
        }, 78523: (e, t, r) => {
            "use strict";
            var n = r(19662), o = TypeError, i = function (e) {
                var t, r;
                this.promise = new e((function (e, n) {
                    if (void 0 !== t || void 0 !== r) throw o("Bad Promise constructor");
                    t = e, r = n
                })), this.resolve = n(t), this.reject = n(r)
            };
            e.exports.f = function (e) {
                return new i(e)
            }
        }, 3929: (e, t, r) => {
            var n = r(47850), o = TypeError;
            e.exports = function (e) {
                if (n(e)) throw o("The method doesn't accept regular expressions");
                return e
            }
        }, 2814: (e, t, r) => {
            var n = r(17854), o = r(47293), i = r(1702), a = r(41340), s = r(53111).trim, c = r(81361),
                u = i("".charAt), f = n.parseFloat, l = n.Symbol, p = l && l.iterator,
                d = 1 / f(c + "-0") != -1 / 0 || p && !o((function () {
                    f(Object(p))
                }));
            e.exports = d ? function (e) {
                var t = s(a(e)), r = f(t);
                return 0 === r && "-" == u(t, 0) ? -0 : r
            } : f
        }, 83009: (e, t, r) => {
            var n = r(17854), o = r(47293), i = r(1702), a = r(41340), s = r(53111).trim, c = r(81361), u = n.parseInt,
                f = n.Symbol, l = f && f.iterator, p = /^[+-]?0x/i, d = i(p.exec),
                h = 8 !== u(c + "08") || 22 !== u(c + "0x16") || l && !o((function () {
                    u(Object(l))
                }));
            e.exports = h ? function (e, t) {
                var r = s(a(e));
                return u(r, t >>> 0 || (d(p, r) ? 16 : 10))
            } : u
        }, 21574: (e, t, r) => {
            "use strict";
            var n = r(19781), o = r(1702), i = r(46916), a = r(47293), s = r(81956), c = r(25181), u = r(55296),
                f = r(47908), l = r(68361), p = Object.assign, d = Object.defineProperty, h = o([].concat);
            e.exports = !p || a((function () {
                if (n && 1 !== p({b: 1}, p(d({}, "a", {
                    enumerable: !0, get: function () {
                        d(this, "b", {value: 3, enumerable: !1})
                    }
                }), {b: 2})).b) return !0;
                var e = {}, t = {}, r = Symbol(), o = "abcdefghijklmnopqrst";
                return e[r] = 7, o.split("").forEach((function (e) {
                    t[e] = e
                })), 7 != p({}, e)[r] || s(p({}, t)).join("") != o
            })) ? function (e, t) {
                for (var r = f(e), o = arguments.length, a = 1, p = c.f, d = u.f; o > a;) for (var g, m = l(arguments[a++]), v = p ? h(s(m), p(m)) : s(m), y = v.length, b = 0; y > b;) g = v[b++], n && !i(d, m, g) || (r[g] = m[g]);
                return r
            } : p
        }, 70030: (e, t, r) => {
            var n, o = r(19670), i = r(36048), a = r(80748), s = r(3501), c = r(60490), u = r(80317), f = r(6200),
                l = f("IE_PROTO"), p = function () {
                }, d = function (e) {
                    return "<script>" + e + "</" + "script>"
                }, h = function (e) {
                    e.write(d("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }, g = function () {
                    try {
                        n = new ActiveXObject("htmlfile")
                    } catch (e) {
                    }
                    var e, t;
                    g = "undefined" != typeof document ? document.domain && n ? h(n) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F) : h(n);
                    for (var r = a.length; r--;) delete g.prototype[a[r]];
                    return g()
                };
            s[l] = !0, e.exports = Object.create || function (e, t) {
                var r;
                return null !== e ? (p.prototype = o(e), r = new p, p.prototype = null, r[l] = e) : r = g(), void 0 === t ? r : i.f(r, t)
            }
        }, 36048: (e, t, r) => {
            var n = r(19781), o = r(3353), i = r(3070), a = r(19670), s = r(45656), c = r(81956);
            t.f = n && !o ? Object.defineProperties : function (e, t) {
                a(e);
                for (var r, n = s(t), o = c(t), u = o.length, f = 0; u > f;) i.f(e, r = o[f++], n[r]);
                return e
            }
        }, 3070: (e, t, r) => {
            var n = r(19781), o = r(64664), i = r(3353), a = r(19670), s = r(34948), c = TypeError,
                u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = "enumerable", p = "configurable",
                d = "writable";
            t.f = n ? i ? function (e, t, r) {
                if (a(e), t = s(t), a(r), "function" == typeof e && "prototype" === t && "value" in r && d in r && !r.writable) {
                    var n = f(e, t);
                    n && n.writable && (e[t] = r.value, r = {
                        configurable: p in r ? r.configurable : n.configurable,
                        enumerable: l in r ? r.enumerable : n.enumerable,
                        writable: !1
                    })
                }
                return u(e, t, r)
            } : u : function (e, t, r) {
                if (a(e), t = s(t), a(r), o) try {
                    return u(e, t, r)
                } catch (e) {
                }
                if ("get" in r || "set" in r) throw c("Accessors not supported");
                return "value" in r && (e[t] = r.value), e
            }
        }, 31236: (e, t, r) => {
            var n = r(19781), o = r(46916), i = r(55296), a = r(79114), s = r(45656), c = r(34948), u = r(92597),
                f = r(64664), l = Object.getOwnPropertyDescriptor;
            t.f = n ? l : function (e, t) {
                if (e = s(e), t = c(t), f) try {
                    return l(e, t)
                } catch (e) {
                }
                if (u(e, t)) return a(!o(i.f, e, t), e[t])
            }
        }, 1156: (e, t, r) => {
            var n = r(84326), o = r(45656), i = r(8006).f, a = r(41589),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
                return s && "Window" == n(e) ? function (e) {
                    try {
                        return i(e)
                    } catch (e) {
                        return a(s)
                    }
                }(e) : i(o(e))
            }
        }, 8006: (e, t, r) => {
            var n = r(16324), o = r(80748).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return n(e, o)
            }
        }, 25181: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        }, 79518: (e, t, r) => {
            var n = r(92597), o = r(60614), i = r(47908), a = r(6200), s = r(49920), c = a("IE_PROTO"), u = Object,
                f = u.prototype;
            e.exports = s ? u.getPrototypeOf : function (e) {
                var t = i(e);
                if (n(t, c)) return t[c];
                var r = t.constructor;
                return o(r) && t instanceof r ? r.prototype : t instanceof u ? f : null
            }
        }, 52050: (e, t, r) => {
            var n = r(47293), o = r(70111), i = r(84326), a = r(7556), s = Object.isExtensible, c = n((function () {
                s(1)
            }));
            e.exports = c || a ? function (e) {
                return !!o(e) && ((!a || "ArrayBuffer" != i(e)) && (!s || s(e)))
            } : s
        }, 47976: (e, t, r) => {
            var n = r(1702);
            e.exports = n({}.isPrototypeOf)
        }, 16324: (e, t, r) => {
            var n = r(1702), o = r(92597), i = r(45656), a = r(41318).indexOf, s = r(3501), c = n([].push);
            e.exports = function (e, t) {
                var r, n = i(e), u = 0, f = [];
                for (r in n) !o(s, r) && o(n, r) && c(f, r);
                for (; t.length > u;) o(n, r = t[u++]) && (~a(f, r) || c(f, r));
                return f
            }
        }, 81956: (e, t, r) => {
            var n = r(16324), o = r(80748);
            e.exports = Object.keys || function (e) {
                return n(e, o)
            }
        }, 55296: (e, t) => {
            "use strict";
            var r = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, o = n && !r.call({1: 2}, 1);
            t.f = o ? function (e) {
                var t = n(this, e);
                return !!t && t.enumerable
            } : r
        }, 27674: (e, t, r) => {
            var n = r(1702), o = r(19670), i = r(96077);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e, t = !1, r = {};
                try {
                    (e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), t = r instanceof Array
                } catch (e) {
                }
                return function (r, n) {
                    return o(r), i(n), t ? e(r, n) : r.__proto__ = n, r
                }
            }() : void 0)
        }, 92140: (e, t, r) => {
            var n = r(46916), o = r(60614), i = r(70111), a = TypeError;
            e.exports = function (e, t) {
                var r, s;
                if ("string" === t && o(r = e.toString) && !i(s = n(r, e))) return s;
                if (o(r = e.valueOf) && !i(s = n(r, e))) return s;
                if ("string" !== t && o(r = e.toString) && !i(s = n(r, e))) return s;
                throw a("Can't convert object to primitive value")
            }
        }, 53887: (e, t, r) => {
            var n = r(35005), o = r(1702), i = r(8006), a = r(25181), s = r(19670), c = o([].concat);
            e.exports = n("Reflect", "ownKeys") || function (e) {
                var t = i.f(s(e)), r = a.f;
                return r ? c(t, r(e)) : t
            }
        }, 40857: (e, t, r) => {
            var n = r(17854);
            e.exports = n
        }, 12534: e => {
            e.exports = function (e) {
                try {
                    return {error: !1, value: e()}
                } catch (e) {
                    return {error: !0, value: e}
                }
            }
        }, 63702: (e, t, r) => {
            var n = r(17854), o = r(2492), i = r(60614), a = r(54705), s = r(42788), c = r(5112), u = r(7871),
                f = r(83823), l = r(31913), p = r(7392), d = o && o.prototype, h = c("species"), g = !1,
                m = i(n.PromiseRejectionEvent), v = a("Promise", (function () {
                    var e = s(o), t = e !== String(o);
                    if (!t && 66 === p) return !0;
                    if (l && (!d.catch || !d.finally)) return !0;
                    if (!p || p < 51 || !/native code/.test(e)) {
                        var r = new o((function (e) {
                            e(1)
                        })), n = function (e) {
                            e((function () {
                            }), (function () {
                            }))
                        };
                        if ((r.constructor = {})[h] = n, !(g = r.then((function () {
                        })) instanceof n)) return !0
                    }
                    return !t && (u || f) && !m
                }));
            e.exports = {CONSTRUCTOR: v, REJECTION_EVENT: m, SUBCLASSING: g}
        }, 2492: (e, t, r) => {
            var n = r(17854);
            e.exports = n.Promise
        }, 69478: (e, t, r) => {
            var n = r(19670), o = r(70111), i = r(78523);
            e.exports = function (e, t) {
                if (n(e), o(t) && t.constructor === e) return t;
                var r = i.f(e);
                return (0, r.resolve)(t), r.promise
            }
        }, 80612: (e, t, r) => {
            var n = r(2492), o = r(17072), i = r(63702).CONSTRUCTOR;
            e.exports = i || !o((function (e) {
                n.all(e).then(void 0, (function () {
                }))
            }))
        }, 2626: (e, t, r) => {
            var n = r(3070).f;
            e.exports = function (e, t, r) {
                r in e || n(e, r, {
                    configurable: !0, get: function () {
                        return t[r]
                    }, set: function (e) {
                        t[r] = e
                    }
                })
            }
        }, 18572: e => {
            var t = function () {
                this.head = null, this.tail = null
            };
            t.prototype = {
                add: function (e) {
                    var t = {item: e, next: null};
                    this.head ? this.tail.next = t : this.head = t, this.tail = t
                }, get: function () {
                    var e = this.head;
                    if (e) return this.head = e.next, this.tail === e && (this.tail = null), e.item
                }
            }, e.exports = t
        }, 97651: (e, t, r) => {
            var n = r(46916), o = r(19670), i = r(60614), a = r(84326), s = r(22261), c = TypeError;
            e.exports = function (e, t) {
                var r = e.exec;
                if (i(r)) {
                    var u = n(r, e, t);
                    return null !== u && o(u), u
                }
                if ("RegExp" === a(e)) return n(s, e, t);
                throw c("RegExp#exec called on incompatible receiver")
            }
        }, 22261: (e, t, r) => {
            "use strict";
            var n, o, i = r(46916), a = r(1702), s = r(41340), c = r(67066), u = r(52999), f = r(72309), l = r(70030),
                p = r(29909).get, d = r(9441), h = r(38173), g = f("native-string-replace", String.prototype.replace),
                m = RegExp.prototype.exec, v = m, y = a("".charAt), b = a("".indexOf), w = a("".replace),
                x = a("".slice),
                O = (o = /b*/g, i(m, n = /a/, "a"), i(m, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                S = u.BROKEN_CARET, _ = void 0 !== /()??/.exec("")[1];
            (O || _ || S || d || h) && (v = function (e) {
                var t, r, n, o, a, u, f, d = this, h = p(d), I = s(e), E = h.raw;
                if (E) return E.lastIndex = d.lastIndex, t = i(v, E, I), d.lastIndex = E.lastIndex, t;
                var A = h.groups, F = S && d.sticky, j = i(c, d), P = d.source, k = 0, R = I;
                if (F && (j = w(j, "y", ""), -1 === b(j, "g") && (j += "g"), R = x(I, d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== y(I, d.lastIndex - 1)) && (P = "(?: " + P + ")", R = " " + R, k++), r = new RegExp("^(?:" + P + ")", j)), _ && (r = new RegExp("^" + P + "$(?!\\s)", j)), O && (n = d.lastIndex), o = i(m, F ? r : d, R), F ? o ? (o.input = x(o.input, k), o[0] = x(o[0], k), o.index = d.lastIndex, d.lastIndex += o[0].length) : d.lastIndex = 0 : O && o && (d.lastIndex = d.global ? o.index + o[0].length : n), _ && o && o.length > 1 && i(g, o[0], r, (function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                })), o && A) for (o.groups = u = l(null), a = 0; a < A.length; a++) u[(f = A[a])[0]] = o[f[1]];
                return o
            }), e.exports = v
        }, 67066: (e, t, r) => {
            "use strict";
            var n = r(19670);
            e.exports = function () {
                var e = n(this), t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
            }
        }, 34706: (e, t, r) => {
            var n = r(46916), o = r(92597), i = r(47976), a = r(67066), s = RegExp.prototype;
            e.exports = function (e) {
                var t = e.flags;
                return void 0 !== t || "flags" in s || o(e, "flags") || !i(s, e) ? t : n(a, e)
            }
        }, 52999: (e, t, r) => {
            var n = r(47293), o = r(17854).RegExp, i = n((function () {
                var e = o("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })), a = i || n((function () {
                return !o("a", "y").sticky
            })), s = i || n((function () {
                var e = o("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }));
            e.exports = {BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i}
        }, 9441: (e, t, r) => {
            var n = r(47293), o = r(17854).RegExp;
            e.exports = n((function () {
                var e = o(".", "s");
                return !(e.dotAll && e.exec("\n") && "s" === e.flags)
            }))
        }, 38173: (e, t, r) => {
            var n = r(47293), o = r(17854).RegExp;
            e.exports = n((function () {
                var e = o("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }))
        }, 84488: (e, t, r) => {
            var n = r(68554), o = TypeError;
            e.exports = function (e) {
                if (n(e)) throw o("Can't call method on " + e);
                return e
            }
        }, 81150: e => {
            e.exports = Object.is || function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
        }, 17152: (e, t, r) => {
            "use strict";
            var n, o = r(17854), i = r(22104), a = r(60614), s = r(89363), c = r(88113), u = r(50206), f = r(48053),
                l = o.Function,
                p = /MSIE .\./.test(c) || s && ((n = o.Bun.version.split(".")).length < 3 || 0 == n[0] && (n[1] < 3 || 3 == n[1] && 0 == n[2]));
            e.exports = function (e, t) {
                var r = t ? 2 : 1;
                return p ? function (n, o) {
                    var s = f(arguments.length, 1) > r, c = a(n) ? n : l(n), p = s ? u(arguments, r) : [],
                        d = s ? function () {
                            i(c, this, p)
                        } : c;
                    return t ? e(d, o) : e(d)
                } : e
            }
        }, 96340: (e, t, r) => {
            "use strict";
            var n = r(35005), o = r(3070), i = r(5112), a = r(19781), s = i("species");
            e.exports = function (e) {
                var t = n(e), r = o.f;
                a && t && !t[s] && r(t, s, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        }, 58003: (e, t, r) => {
            var n = r(3070).f, o = r(92597), i = r(5112)("toStringTag");
            e.exports = function (e, t, r) {
                e && !r && (e = e.prototype), e && !o(e, i) && n(e, i, {configurable: !0, value: t})
            }
        }, 6200: (e, t, r) => {
            var n = r(72309), o = r(69711), i = n("keys");
            e.exports = function (e) {
                return i[e] || (i[e] = o(e))
            }
        }, 5465: (e, t, r) => {
            var n = r(17854), o = r(13072), i = "__core-js_shared__", a = n[i] || o(i, {});
            e.exports = a
        }, 72309: (e, t, r) => {
            var n = r(31913), o = r(5465);
            (e.exports = function (e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.27.1",
                mode: n ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }, 36707: (e, t, r) => {
            var n = r(19670), o = r(39483), i = r(68554), a = r(5112)("species");
            e.exports = function (e, t) {
                var r, s = n(e).constructor;
                return void 0 === s || i(r = n(s)[a]) ? t : o(r)
            }
        }, 28710: (e, t, r) => {
            var n = r(1702), o = r(19303), i = r(41340), a = r(84488), s = n("".charAt), c = n("".charCodeAt),
                u = n("".slice), f = function (e) {
                    return function (t, r) {
                        var n, f, l = i(a(t)), p = o(r), d = l.length;
                        return p < 0 || p >= d ? e ? "" : void 0 : (n = c(l, p)) < 55296 || n > 56319 || p + 1 === d || (f = c(l, p + 1)) < 56320 || f > 57343 ? e ? s(l, p) : n : e ? u(l, p, p + 2) : f - 56320 + (n - 55296 << 10) + 65536
                    }
                };
            e.exports = {codeAt: f(!1), charAt: f(!0)}
        }, 33197: (e, t, r) => {
            "use strict";
            var n = r(1702), o = 2147483647, i = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g,
                s = "Overflow: input needs wider integers to process", c = RangeError, u = n(a.exec), f = Math.floor,
                l = String.fromCharCode, p = n("".charCodeAt), d = n([].join), h = n([].push), g = n("".replace),
                m = n("".split), v = n("".toLowerCase), y = function (e) {
                    return e + 22 + 75 * (e < 26)
                }, b = function (e, t, r) {
                    var n = 0;
                    for (e = r ? f(e / 700) : e >> 1, e += f(e / t); e > 455;) e = f(e / 35), n += 36;
                    return f(n + 36 * e / (e + 38))
                }, w = function (e) {
                    var t = [];
                    e = function (e) {
                        for (var t = [], r = 0, n = e.length; r < n;) {
                            var o = p(e, r++);
                            if (o >= 55296 && o <= 56319 && r < n) {
                                var i = p(e, r++);
                                56320 == (64512 & i) ? h(t, ((1023 & o) << 10) + (1023 & i) + 65536) : (h(t, o), r--)
                            } else h(t, o)
                        }
                        return t
                    }(e);
                    var r, n, i = e.length, a = 128, u = 0, g = 72;
                    for (r = 0; r < e.length; r++) (n = e[r]) < 128 && h(t, l(n));
                    var m = t.length, v = m;
                    for (m && h(t, "-"); v < i;) {
                        var w = o;
                        for (r = 0; r < e.length; r++) (n = e[r]) >= a && n < w && (w = n);
                        var x = v + 1;
                        if (w - a > f((o - u) / x)) throw c(s);
                        for (u += (w - a) * x, a = w, r = 0; r < e.length; r++) {
                            if ((n = e[r]) < a && ++u > o) throw c(s);
                            if (n == a) {
                                for (var O = u, S = 36; ;) {
                                    var _ = S <= g ? 1 : S >= g + 26 ? 26 : S - g;
                                    if (O < _) break;
                                    var I = O - _, E = 36 - _;
                                    h(t, l(y(_ + I % E))), O = f(I / E), S += 36
                                }
                                h(t, l(y(O))), g = b(u, x, v == m), u = 0, v++
                            }
                        }
                        u++, a++
                    }
                    return d(t, "")
                };
            e.exports = function (e) {
                var t, r, n = [], o = m(g(v(e), a, "."), ".");
                for (t = 0; t < o.length; t++) r = o[t], h(n, u(i, r) ? "xn--" + w(r) : r);
                return d(n, ".")
            }
        }, 38415: (e, t, r) => {
            "use strict";
            var n = r(19303), o = r(41340), i = r(84488), a = RangeError;
            e.exports = function (e) {
                var t = o(i(this)), r = "", s = n(e);
                if (s < 0 || s == 1 / 0) throw a("Wrong number of repetitions");
                for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (r += t);
                return r
            }
        }, 10365: (e, t, r) => {
            "use strict";
            var n = r(53111).end, o = r(76091);
            e.exports = o("trimEnd") ? function () {
                return n(this)
            } : "".trimEnd
        }, 76091: (e, t, r) => {
            var n = r(76530).PROPER, o = r(47293), i = r(81361);
            e.exports = function (e) {
                return o((function () {
                    return !!i[e]() || "​᠎" !== "​᠎"[e]() || n && i[e].name !== e
                }))
            }
        }, 33217: (e, t, r) => {
            "use strict";
            var n = r(53111).start, o = r(76091);
            e.exports = o("trimStart") ? function () {
                return n(this)
            } : "".trimStart
        }, 53111: (e, t, r) => {
            var n = r(1702), o = r(84488), i = r(41340), a = r(81361), s = n("".replace), c = "[" + a + "]",
                u = RegExp("^" + c + c + "*"), f = RegExp(c + c + "*$"), l = function (e) {
                    return function (t) {
                        var r = i(o(t));
                        return 1 & e && (r = s(r, u, "")), 2 & e && (r = s(r, f, "")), r
                    }
                };
            e.exports = {start: l(1), end: l(2), trim: l(3)}
        }, 36293: (e, t, r) => {
            var n = r(7392), o = r(47293);
            e.exports = !!Object.getOwnPropertySymbols && !o((function () {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
            }))
        }, 20261: (e, t, r) => {
            var n, o, i, a, s = r(17854), c = r(22104), u = r(49974), f = r(60614), l = r(92597), p = r(47293),
                d = r(60490), h = r(50206), g = r(80317), m = r(48053), v = r(6833), y = r(35268), b = s.setImmediate,
                w = s.clearImmediate, x = s.process, O = s.Dispatch, S = s.Function, _ = s.MessageChannel, I = s.String,
                E = 0, A = {}, F = "onreadystatechange";
            try {
                n = s.location
            } catch (e) {
            }
            var j = function (e) {
                if (l(A, e)) {
                    var t = A[e];
                    delete A[e], t()
                }
            }, P = function (e) {
                return function () {
                    j(e)
                }
            }, k = function (e) {
                j(e.data)
            }, R = function (e) {
                s.postMessage(I(e), n.protocol + "//" + n.host)
            };
            b && w || (b = function (e) {
                m(arguments.length, 1);
                var t = f(e) ? e : S(e), r = h(arguments, 1);
                return A[++E] = function () {
                    c(t, void 0, r)
                }, o(E), E
            }, w = function (e) {
                delete A[e]
            }, y ? o = function (e) {
                x.nextTick(P(e))
            } : O && O.now ? o = function (e) {
                O.now(P(e))
            } : _ && !v ? (a = (i = new _).port2, i.port1.onmessage = k, o = u(a.postMessage, a)) : s.addEventListener && f(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !p(R) ? (o = R, s.addEventListener("message", k, !1)) : o = F in g("script") ? function (e) {
                d.appendChild(g("script")).onreadystatechange = function () {
                    d.removeChild(this), j(e)
                }
            } : function (e) {
                setTimeout(P(e), 0)
            }), e.exports = {set: b, clear: w}
        }, 50863: (e, t, r) => {
            var n = r(1702);
            e.exports = n(1..valueOf)
        }, 51400: (e, t, r) => {
            var n = r(19303), o = Math.max, i = Math.min;
            e.exports = function (e, t) {
                var r = n(e);
                return r < 0 ? o(r + t, 0) : i(r, t)
            }
        }, 64599: (e, t, r) => {
            var n = r(57593), o = TypeError;
            e.exports = function (e) {
                var t = n(e, "number");
                if ("number" == typeof t) throw o("Can't convert number to bigint");
                return BigInt(t)
            }
        }, 45656: (e, t, r) => {
            var n = r(68361), o = r(84488);
            e.exports = function (e) {
                return n(o(e))
            }
        }, 19303: (e, t, r) => {
            var n = r(74758);
            e.exports = function (e) {
                var t = +e;
                return t != t || 0 === t ? 0 : n(t)
            }
        }, 17466: (e, t, r) => {
            var n = r(19303), o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(n(e), 9007199254740991) : 0
            }
        }, 47908: (e, t, r) => {
            var n = r(84488), o = Object;
            e.exports = function (e) {
                return o(n(e))
            }
        }, 84590: (e, t, r) => {
            var n = r(73002), o = RangeError;
            e.exports = function (e, t) {
                var r = n(e);
                if (r % t) throw o("Wrong offset");
                return r
            }
        }, 73002: (e, t, r) => {
            var n = r(19303), o = RangeError;
            e.exports = function (e) {
                var t = n(e);
                if (t < 0) throw o("The argument can't be less than 0");
                return t
            }
        }, 57593: (e, t, r) => {
            var n = r(46916), o = r(70111), i = r(52190), a = r(58173), s = r(92140), c = r(5112), u = TypeError,
                f = c("toPrimitive");
            e.exports = function (e, t) {
                if (!o(e) || i(e)) return e;
                var r, c = a(e, f);
                if (c) {
                    if (void 0 === t && (t = "default"), r = n(c, e, t), !o(r) || i(r)) return r;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), s(e, t)
            }
        }, 34948: (e, t, r) => {
            var n = r(57593), o = r(52190);
            e.exports = function (e) {
                var t = n(e, "string");
                return o(t) ? t : t + ""
            }
        }, 51694: (e, t, r) => {
            var n = {};
            n[r(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
        }, 41340: (e, t, r) => {
            var n = r(70648), o = String;
            e.exports = function (e) {
                if ("Symbol" === n(e)) throw TypeError("Cannot convert a Symbol value to a string");
                return o(e)
            }
        }, 66330: e => {
            var t = String;
            e.exports = function (e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        }, 69711: (e, t, r) => {
            var n = r(1702), o = 0, i = Math.random(), a = n(1..toString);
            e.exports = function (e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
            }
        }, 85143: (e, t, r) => {
            var n = r(47293), o = r(5112), i = r(31913), a = o("iterator");
            e.exports = !n((function () {
                var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, r = "";
                return e.pathname = "c%20d", t.forEach((function (e, n) {
                    t.delete("b"), r += n + e
                })), i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host
            }))
        }, 43307: (e, t, r) => {
            var n = r(36293);
            e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, 3353: (e, t, r) => {
            var n = r(19781), o = r(47293);
            e.exports = n && o((function () {
                return 42 != Object.defineProperty((function () {
                }), "prototype", {value: 42, writable: !1}).prototype
            }))
        }, 48053: e => {
            var t = TypeError;
            e.exports = function (e, r) {
                if (e < r) throw t("Not enough arguments");
                return e
            }
        }, 94811: (e, t, r) => {
            var n = r(17854), o = r(60614), i = n.WeakMap;
            e.exports = o(i) && /native code/.test(String(i))
        }, 26800: (e, t, r) => {
            var n = r(40857), o = r(92597), i = r(6061), a = r(3070).f;
            e.exports = function (e) {
                var t = n.Symbol || (n.Symbol = {});
                o(t, e) || a(t, e, {value: i.f(e)})
            }
        }, 6061: (e, t, r) => {
            var n = r(5112);
            t.f = n
        }, 5112: (e, t, r) => {
            var n = r(17854), o = r(72309), i = r(92597), a = r(69711), s = r(36293), c = r(43307), u = o("wks"),
                f = n.Symbol, l = f && f.for, p = c ? f : f && f.withoutSetter || a;
            e.exports = function (e) {
                if (!i(u, e) || !s && "string" != typeof u[e]) {
                    var t = "Symbol." + e;
                    s && i(f, e) ? u[e] = f[e] : u[e] = c && l ? l(t) : p(t)
                }
                return u[e]
            }
        }, 81361: e => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        }, 86535: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(6790), i = r(19662), a = r(47908), s = r(26244), c = r(65417);
            n({target: "Array", proto: !0}, {
                flatMap: function (e) {
                    var t, r = a(this), n = s(r);
                    return i(e), (t = c(r, 0)).length = o(t, r, r, n, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        }, 84944: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(6790), i = r(47908), a = r(26244), s = r(19303), c = r(65417);
            n({target: "Array", proto: !0}, {
                flat: function () {
                    var e = arguments.length ? arguments[0] : void 0, t = i(this), r = a(t), n = c(t, 0);
                    return n.length = o(n, t, t, r, 0, void 0 === e ? 1 : s(e)), n
                }
            })
        }, 66992: (e, t, r) => {
            "use strict";
            var n = r(45656), o = r(51223), i = r(97497), a = r(29909), s = r(3070).f, c = r(51656), u = r(76178),
                f = r(31913), l = r(19781), p = "Array Iterator", d = a.set, h = a.getterFor(p);
            e.exports = c(Array, "Array", (function (e, t) {
                d(this, {type: p, target: n(e), index: 0, kind: t})
            }), (function () {
                var e = h(this), t = e.target, r = e.kind, n = e.index++;
                return !t || n >= t.length ? (e.target = void 0, u(void 0, !0)) : u("keys" == r ? n : "values" == r ? t[n] : [n, t[n]], !1)
            }), "values");
            var g = i.Arguments = i.Array;
            if (o("keys"), o("values"), o("entries"), !f && l && "values" !== g.name) try {
                s(g, "name", {value: "values"})
            } catch (e) {
            }
        }, 2707: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(1702), i = r(19662), a = r(47908), s = r(26244), c = r(85117), u = r(41340),
                f = r(47293), l = r(94362), p = r(9341), d = r(68886), h = r(30256), g = r(7392), m = r(98008), v = [],
                y = o(v.sort), b = o(v.push), w = f((function () {
                    v.sort(void 0)
                })), x = f((function () {
                    v.sort(null)
                })), O = p("sort"), S = !f((function () {
                    if (g) return g < 70;
                    if (!(d && d > 3)) {
                        if (h) return !0;
                        if (m) return m < 603;
                        var e, t, r, n, o = "";
                        for (e = 65; e < 76; e++) {
                            switch (t = String.fromCharCode(e), e) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    r = 3;
                                    break;
                                case 68:
                                case 71:
                                    r = 4;
                                    break;
                                default:
                                    r = 2
                            }
                            for (n = 0; n < 47; n++) v.push({k: t + n, v: r})
                        }
                        for (v.sort((function (e, t) {
                            return t.v - e.v
                        })), n = 0; n < v.length; n++) t = v[n].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
                        return "DGBEFHACIJK" !== o
                    }
                }));
            n({target: "Array", proto: !0, forced: w || !x || !O || !S}, {
                sort: function (e) {
                    void 0 !== e && i(e);
                    var t = a(this);
                    if (S) return void 0 === e ? y(t) : y(t, e);
                    var r, n, o = [], f = s(t);
                    for (n = 0; n < f; n++) n in t && b(o, t[n]);
                    for (l(o, function (e) {
                        return function (t, r) {
                            return void 0 === r ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, r) || 0 : u(t) > u(r) ? 1 : -1
                        }
                    }(e)), r = s(o), n = 0; n < r;) t[n] = o[n++];
                    for (; n < f;) c(t, n++);
                    return t
                }
            })
        }, 99244: (e, t, r) => {
            r(51223)("flatMap")
        }, 33792: (e, t, r) => {
            r(51223)("flat")
        }, 61874: (e, t, r) => {
            var n = r(82109), o = r(2814);
            n({target: "Number", stat: !0, forced: Number.parseFloat != o}, {parseFloat: o})
        }, 9494: (e, t, r) => {
            var n = r(82109), o = r(83009);
            n({target: "Number", stat: !0, forced: Number.parseInt != o}, {parseInt: o})
        }, 56977: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(1702), i = r(19303), a = r(50863), s = r(38415), c = r(47293), u = RangeError,
                f = String, l = Math.floor, p = o(s), d = o("".slice), h = o(1..toFixed), g = function (e, t, r) {
                    return 0 === t ? r : t % 2 == 1 ? g(e, t - 1, r * e) : g(e * e, t / 2, r)
                }, m = function (e, t, r) {
                    for (var n = -1, o = r; ++n < 6;) o += t * e[n], e[n] = o % 1e7, o = l(o / 1e7)
                }, v = function (e, t) {
                    for (var r = 6, n = 0; --r >= 0;) n += e[r], e[r] = l(n / t), n = n % t * 1e7
                }, y = function (e) {
                    for (var t = 6, r = ""; --t >= 0;) if ("" !== r || 0 === t || 0 !== e[t]) {
                        var n = f(e[t]);
                        r = "" === r ? n : r + p("0", 7 - n.length) + n
                    }
                    return r
                };
            n({
                target: "Number", proto: !0, forced: c((function () {
                    return "0.000" !== h(8e-5, 3) || "1" !== h(.9, 0) || "1.25" !== h(1.255, 2) || "1000000000000000128" !== h(0xde0b6b3a7640080, 0)
                })) || !c((function () {
                    h({})
                }))
            }, {
                toFixed: function (e) {
                    var t, r, n, o, s = a(this), c = i(e), l = [0, 0, 0, 0, 0, 0], h = "", b = "0";
                    if (c < 0 || c > 20) throw u("Incorrect fraction digits");
                    if (s != s) return "NaN";
                    if (s <= -1e21 || s >= 1e21) return f(s);
                    if (s < 0 && (h = "-", s = -s), s > 1e-21) if (r = (t = function (e) {
                        for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
                        for (; r >= 2;) t += 1, r /= 2;
                        return t
                    }(s * g(2, 69, 1)) - 69) < 0 ? s * g(2, -t, 1) : s / g(2, t, 1), r *= 4503599627370496, (t = 52 - t) > 0) {
                        for (m(l, 0, r), n = c; n >= 7;) m(l, 1e7, 0), n -= 7;
                        for (m(l, g(10, n, 1), 0), n = t - 1; n >= 23;) v(l, 1 << 23), n -= 23;
                        v(l, 1 << n), m(l, 1, 1), v(l, 2), b = y(l)
                    } else m(l, 0, r), m(l, 1 << -t, 0), b = y(l) + p("0", c);
                    return b = c > 0 ? h + ((o = b.length) <= c ? "0." + p("0", c - o) + b : d(b, 0, o - c) + "." + d(b, o - c)) : h + b
                }
            })
        }, 19601: (e, t, r) => {
            var n = r(82109), o = r(21574);
            n({target: "Object", stat: !0, arity: 2, forced: Object.assign !== o}, {assign: o})
        }, 38559: (e, t, r) => {
            var n = r(82109), o = r(20408), i = r(86135);
            n({target: "Object", stat: !0}, {
                fromEntries: function (e) {
                    var t = {};
                    return o(e, (function (e, r) {
                        i(t, e, r)
                    }), {AS_ENTRIES: !0}), t
                }
            })
        }, 54678: (e, t, r) => {
            var n = r(82109), o = r(2814);
            n({global: !0, forced: parseFloat != o}, {parseFloat: o})
        }, 91058: (e, t, r) => {
            var n = r(82109), o = r(83009);
            n({global: !0, forced: parseInt != o}, {parseInt: o})
        }, 70821: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(46916), i = r(19662), a = r(78523), s = r(12534), c = r(20408);
            n({target: "Promise", stat: !0, forced: r(80612)}, {
                all: function (e) {
                    var t = this, r = a.f(t), n = r.resolve, u = r.reject, f = s((function () {
                        var r = i(t.resolve), a = [], s = 0, f = 1;
                        c(e, (function (e) {
                            var i = s++, c = !1;
                            f++, o(r, t, e).then((function (e) {
                                c || (c = !0, a[i] = e, --f || n(a))
                            }), u)
                        })), --f || n(a)
                    }));
                    return f.error && u(f.value), r.promise
                }
            })
        }, 94164: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(31913), i = r(63702).CONSTRUCTOR, a = r(2492), s = r(35005), c = r(60614),
                u = r(98052), f = a && a.prototype;
            if (n({target: "Promise", proto: !0, forced: i, real: !0}, {
                catch: function (e) {
                    return this.then(void 0, e)
                }
            }), !o && c(a)) {
                var l = s("Promise").prototype.catch;
                f.catch !== l && u(f, "catch", l, {unsafe: !0})
            }
        }, 43401: (e, t, r) => {
            "use strict";
            var n, o, i, a = r(82109), s = r(31913), c = r(35268), u = r(17854), f = r(46916), l = r(98052),
                p = r(27674), d = r(58003), h = r(96340), g = r(19662), m = r(60614), v = r(70111), y = r(25787),
                b = r(36707), w = r(20261).set, x = r(95948), O = r(842), S = r(12534), _ = r(18572), I = r(29909),
                E = r(2492), A = r(63702), F = r(78523), j = "Promise", P = A.CONSTRUCTOR, k = A.REJECTION_EVENT,
                R = A.SUBCLASSING, D = I.getterFor(j), T = I.set, C = E && E.prototype, U = E, L = C, N = u.TypeError,
                B = u.document, M = u.process, $ = F.f, J = $, z = !!(B && B.createEvent && u.dispatchEvent),
                W = "unhandledrejection", q = function (e) {
                    var t;
                    return !(!v(e) || !m(t = e.then)) && t
                }, H = function (e, t) {
                    var r, n, o, i = t.value, a = 1 == t.state, s = a ? e.ok : e.fail, c = e.resolve, u = e.reject,
                        l = e.domain;
                    try {
                        s ? (a || (2 === t.rejection && X(t), t.rejection = 1), !0 === s ? r = i : (l && l.enter(), r = s(i), l && (l.exit(), o = !0)), r === e.promise ? u(N("Promise-chain cycle")) : (n = q(r)) ? f(n, r, c, u) : c(r)) : u(i)
                    } catch (e) {
                        l && !o && l.exit(), u(e)
                    }
                }, V = function (e, t) {
                    e.notified || (e.notified = !0, x((function () {
                        for (var r, n = e.reactions; r = n.get();) H(r, e);
                        e.notified = !1, t && !e.rejection && K(e)
                    })))
                }, G = function (e, t, r) {
                    var n, o;
                    z ? ((n = B.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), u.dispatchEvent(n)) : n = {
                        promise: t,
                        reason: r
                    }, !k && (o = u["on" + e]) ? o(n) : e === W && O("Unhandled promise rejection", r)
                }, K = function (e) {
                    f(w, u, (function () {
                        var t, r = e.facade, n = e.value;
                        if (Y(e) && (t = S((function () {
                            c ? M.emit("unhandledRejection", n, r) : G(W, r, n)
                        })), e.rejection = c || Y(e) ? 2 : 1, t.error)) throw t.value
                    }))
                }, Y = function (e) {
                    return 1 !== e.rejection && !e.parent
                }, X = function (e) {
                    f(w, u, (function () {
                        var t = e.facade;
                        c ? M.emit("rejectionHandled", t) : G("rejectionhandled", t, e.value)
                    }))
                }, Z = function (e, t, r) {
                    return function (n) {
                        e(t, n, r)
                    }
                }, Q = function (e, t, r) {
                    e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, V(e, !0))
                }, ee = function (e, t, r) {
                    if (!e.done) {
                        e.done = !0, r && (e = r);
                        try {
                            if (e.facade === t) throw N("Promise can't be resolved itself");
                            var n = q(t);
                            n ? x((function () {
                                var r = {done: !1};
                                try {
                                    f(n, t, Z(ee, r, e), Z(Q, r, e))
                                } catch (t) {
                                    Q(r, t, e)
                                }
                            })) : (e.value = t, e.state = 1, V(e, !1))
                        } catch (t) {
                            Q({done: !1}, t, e)
                        }
                    }
                };
            if (P && (L = (U = function (e) {
                y(this, L), g(e), f(n, this);
                var t = D(this);
                try {
                    e(Z(ee, t), Z(Q, t))
                } catch (e) {
                    Q(t, e)
                }
            }).prototype, (n = function (e) {
                T(this, {
                    type: j,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: new _,
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = l(L, "then", (function (e, t) {
                var r = D(this), n = $(b(this, U));
                return r.parent = !0, n.ok = !m(e) || e, n.fail = m(t) && t, n.domain = c ? M.domain : void 0, 0 == r.state ? r.reactions.add(n) : x((function () {
                    H(n, r)
                })), n.promise
            })), o = function () {
                var e = new n, t = D(e);
                this.promise = e, this.resolve = Z(ee, t), this.reject = Z(Q, t)
            }, F.f = $ = function (e) {
                return e === U || undefined === e ? new o(e) : J(e)
            }, !s && m(E) && C !== Object.prototype)) {
                i = C.then, R || l(C, "then", (function (e, t) {
                    var r = this;
                    return new U((function (e, t) {
                        f(i, r, e, t)
                    })).then(e, t)
                }), {unsafe: !0});
                try {
                    delete C.constructor
                } catch (e) {
                }
                p && p(C, L)
            }
            a({global: !0, constructor: !0, wrap: !0, forced: P}, {Promise: U}), d(U, j, !1, !0), h(j)
        }, 17727: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(31913), i = r(2492), a = r(47293), s = r(35005), c = r(60614), u = r(36707),
                f = r(69478), l = r(98052), p = i && i.prototype;
            if (n({
                target: "Promise", proto: !0, real: !0, forced: !!i && a((function () {
                    p.finally.call({
                        then: function () {
                        }
                    }, (function () {
                    }))
                }))
            }, {
                finally: function (e) {
                    var t = u(this, s("Promise")), r = c(e);
                    return this.then(r ? function (r) {
                        return f(t, e()).then((function () {
                            return r
                        }))
                    } : e, r ? function (r) {
                        return f(t, e()).then((function () {
                            throw r
                        }))
                    } : e)
                }
            }), !o && c(i)) {
                var d = s("Promise").prototype.finally;
                p.finally !== d && l(p, "finally", d, {unsafe: !0})
            }
        }, 88674: (e, t, r) => {
            r(43401), r(70821), r(94164), r(6027), r(60683), r(96294)
        }, 6027: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(46916), i = r(19662), a = r(78523), s = r(12534), c = r(20408);
            n({target: "Promise", stat: !0, forced: r(80612)}, {
                race: function (e) {
                    var t = this, r = a.f(t), n = r.reject, u = s((function () {
                        var a = i(t.resolve);
                        c(e, (function (e) {
                            o(a, t, e).then(r.resolve, n)
                        }))
                    }));
                    return u.error && n(u.value), r.promise
                }
            })
        }, 60683: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(46916), i = r(78523);
            n({target: "Promise", stat: !0, forced: r(63702).CONSTRUCTOR}, {
                reject: function (e) {
                    var t = i.f(this);
                    return o(t.reject, void 0, e), t.promise
                }
            })
        }, 96294: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(35005), i = r(31913), a = r(2492), s = r(63702).CONSTRUCTOR, c = r(69478),
                u = o("Promise"), f = i && !s;
            n({target: "Promise", stat: !0, forced: i || s}, {
                resolve: function (e) {
                    return c(f && this === u ? a : this, e)
                }
            })
        }, 83593: (e, t, r) => {
            var n = r(82109), o = r(46916), i = r(19670), a = r(70111), s = r(45032), c = r(47293), u = r(3070),
                f = r(31236), l = r(79518), p = r(79114);
            n({
                target: "Reflect", stat: !0, forced: c((function () {
                    var e = function () {
                    }, t = u.f(new e, "a", {configurable: !0});
                    return !1 !== Reflect.set(e.prototype, "a", 1, t)
                }))
            }, {
                set: function e(t, r, n) {
                    var c, d, h, g = arguments.length < 4 ? t : arguments[3], m = f.f(i(t), r);
                    if (!m) {
                        if (a(d = l(t))) return e(d, r, n, g);
                        m = p(0)
                    }
                    if (s(m)) {
                        if (!1 === m.writable || !a(g)) return !1;
                        if (c = f.f(g, r)) {
                            if (c.get || c.set || !1 === c.writable) return !1;
                            c.value = n, u.f(g, r, c)
                        } else u.f(g, r, p(0, n))
                    } else {
                        if (void 0 === (h = m.set)) return !1;
                        o(h, g, n)
                    }
                    return !0
                }
            })
        }, 24603: (e, t, r) => {
            var n = r(19781), o = r(17854), i = r(1702), a = r(54705), s = r(79587), c = r(68880), u = r(8006).f,
                f = r(47976), l = r(47850), p = r(41340), d = r(34706), h = r(52999), g = r(2626), m = r(98052),
                v = r(47293), y = r(92597), b = r(29909).enforce, w = r(96340), x = r(5112), O = r(9441), S = r(38173),
                _ = x("match"), I = o.RegExp, E = I.prototype, A = o.SyntaxError, F = i(E.exec), j = i("".charAt),
                P = i("".replace), k = i("".indexOf), R = i("".slice), D = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
                T = /a/g, C = /a/g, U = new I(T) !== T, L = h.MISSED_STICKY, N = h.UNSUPPORTED_Y,
                B = n && (!U || L || O || S || v((function () {
                    return C[_] = !1, I(T) != T || I(C) == C || "/a/i" != I(T, "i")
                })));
            if (a("RegExp", B)) {
                for (var M = function (e, t) {
                    var r, n, o, i, a, u, h = f(E, this), g = l(e), m = void 0 === t, v = [], w = e;
                    if (!h && g && m && e.constructor === M) return e;
                    if ((g || f(E, e)) && (e = e.source, m && (t = d(w))), e = void 0 === e ? "" : p(e), t = void 0 === t ? "" : p(t), w = e, O && "dotAll" in T && (n = !!t && k(t, "s") > -1) && (t = P(t, /s/g, "")), r = t, L && "sticky" in T && (o = !!t && k(t, "y") > -1) && N && (t = P(t, /y/g, "")), S && (i = function (e) {
                        for (var t, r = e.length, n = 0, o = "", i = [], a = {}, s = !1, c = !1, u = 0, f = ""; n <= r; n++) {
                            if ("\\" === (t = j(e, n))) t += j(e, ++n); else if ("]" === t) s = !1; else if (!s) switch (!0) {
                                case"[" === t:
                                    s = !0;
                                    break;
                                case"(" === t:
                                    F(D, R(e, n + 1)) && (n += 2, c = !0), o += t, u++;
                                    continue;
                                case">" === t && c:
                                    if ("" === f || y(a, f)) throw new A("Invalid capture group name");
                                    a[f] = !0, i[i.length] = [f, u], c = !1, f = "";
                                    continue
                            }
                            c ? f += t : o += t
                        }
                        return [o, i]
                    }(e), e = i[0], v = i[1]), a = s(I(e, t), h ? this : E, M), (n || o || v.length) && (u = b(a), n && (u.dotAll = !0, u.raw = M(function (e) {
                        for (var t, r = e.length, n = 0, o = "", i = !1; n <= r; n++) "\\" !== (t = j(e, n)) ? i || "." !== t ? ("[" === t ? i = !0 : "]" === t && (i = !1), o += t) : o += "[\\s\\S]" : o += t + j(e, ++n);
                        return o
                    }(e), r)), o && (u.sticky = !0), v.length && (u.groups = v)), e !== w) try {
                        c(a, "source", "" === w ? "(?:)" : w)
                    } catch (e) {
                    }
                    return a
                }, $ = u(I), J = 0; $.length > J;) g(M, I, $[J++]);
                E.constructor = M, M.prototype = E, m(o, "RegExp", M, {constructor: !0})
            }
            w("RegExp")
        }, 74916: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(22261);
            n({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
        }, 92087: (e, t, r) => {
            var n = r(17854), o = r(19781), i = r(47045), a = r(67066), s = r(47293), c = n.RegExp, u = c.prototype;
            o && s((function () {
                var e = !0;
                try {
                    c(".", "d")
                } catch (t) {
                    e = !1
                }
                var t = {}, r = "", n = e ? "dgimsy" : "gimsy", o = function (e, n) {
                    Object.defineProperty(t, e, {
                        get: function () {
                            return r += n, !0
                        }
                    })
                }, i = {dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y"};
                for (var a in e && (i.hasIndices = "d"), i) o(a, i[a]);
                return Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== n || r !== n
            })) && i(u, "flags", {configurable: !0, get: a})
        }, 39714: (e, t, r) => {
            "use strict";
            var n = r(76530).PROPER, o = r(98052), i = r(19670), a = r(41340), s = r(47293), c = r(34706),
                u = "toString", f = RegExp.prototype.toString, l = s((function () {
                    return "/a/b" != f.call({source: "a", flags: "b"})
                })), p = n && f.name != u;
            (l || p) && o(RegExp.prototype, u, (function () {
                var e = i(this);
                return "/" + a(e.source) + "/" + a(c(e))
            }), {unsafe: !0})
        }, 27852: (e, t, r) => {
            "use strict";
            var n, o = r(82109), i = r(21470), a = r(31236).f, s = r(17466), c = r(41340), u = r(3929), f = r(84488),
                l = r(84964), p = r(31913), d = i("".endsWith), h = i("".slice), g = Math.min, m = l("endsWith");
            o({
                target: "String",
                proto: !0,
                forced: !!(p || m || (n = a(String.prototype, "endsWith"), !n || n.writable)) && !m
            }, {
                endsWith: function (e) {
                    var t = c(f(this));
                    u(e);
                    var r = arguments.length > 1 ? arguments[1] : void 0, n = t.length,
                        o = void 0 === r ? n : g(s(r), n), i = c(e);
                    return d ? d(t, i, o) : h(t, o - i.length, o) === i
                }
            })
        }, 32023: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(1702), i = r(3929), a = r(84488), s = r(41340), c = r(84964), u = o("".indexOf);
            n({target: "String", proto: !0, forced: !c("includes")}, {
                includes: function (e) {
                    return !!~u(s(a(this)), s(i(e)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, 78783: (e, t, r) => {
            "use strict";
            var n = r(28710).charAt, o = r(41340), i = r(29909), a = r(51656), s = r(76178), c = "String Iterator",
                u = i.set, f = i.getterFor(c);
            a(String, "String", (function (e) {
                u(this, {type: c, string: o(e), index: 0})
            }), (function () {
                var e, t = f(this), r = t.string, o = t.index;
                return o >= r.length ? s(void 0, !0) : (e = n(r, o), t.index += e.length, s(e, !1))
            }))
        }, 4723: (e, t, r) => {
            "use strict";
            var n = r(46916), o = r(27007), i = r(19670), a = r(68554), s = r(17466), c = r(41340), u = r(84488),
                f = r(58173), l = r(31530), p = r(97651);
            o("match", (function (e, t, r) {
                return [function (t) {
                    var r = u(this), o = a(t) ? void 0 : f(t, e);
                    return o ? n(o, t, r) : new RegExp(t)[e](c(r))
                }, function (e) {
                    var n = i(this), o = c(e), a = r(t, n, o);
                    if (a.done) return a.value;
                    if (!n.global) return p(n, o);
                    var u = n.unicode;
                    n.lastIndex = 0;
                    for (var f, d = [], h = 0; null !== (f = p(n, o));) {
                        var g = c(f[0]);
                        d[h] = g, "" === g && (n.lastIndex = l(o, s(n.lastIndex), u)), h++
                    }
                    return 0 === h ? null : d
                }]
            }))
        }, 15306: (e, t, r) => {
            "use strict";
            var n = r(22104), o = r(46916), i = r(1702), a = r(27007), s = r(47293), c = r(19670), u = r(60614),
                f = r(68554), l = r(19303), p = r(17466), d = r(41340), h = r(84488), g = r(31530), m = r(58173),
                v = r(10647), y = r(97651), b = r(5112)("replace"), w = Math.max, x = Math.min, O = i([].concat),
                S = i([].push), _ = i("".indexOf), I = i("".slice), E = "$0" === "a".replace(/./, "$0"),
                A = !!/./[b] && "" === /./[b]("a", "$0");
            a("replace", (function (e, t, r) {
                var i = A ? "$" : "$0";
                return [function (e, r) {
                    var n = h(this), i = f(e) ? void 0 : m(e, b);
                    return i ? o(i, e, n, r) : o(t, d(n), e, r)
                }, function (e, o) {
                    var a = c(this), s = d(e);
                    if ("string" == typeof o && -1 === _(o, i) && -1 === _(o, "$<")) {
                        var f = r(t, a, s, o);
                        if (f.done) return f.value
                    }
                    var h = u(o);
                    h || (o = d(o));
                    var m = a.global;
                    if (m) {
                        var b = a.unicode;
                        a.lastIndex = 0
                    }
                    for (var E = []; ;) {
                        var A = y(a, s);
                        if (null === A) break;
                        if (S(E, A), !m) break;
                        "" === d(A[0]) && (a.lastIndex = g(s, p(a.lastIndex), b))
                    }
                    for (var F, j = "", P = 0, k = 0; k < E.length; k++) {
                        for (var R = d((A = E[k])[0]), D = w(x(l(A.index), s.length), 0), T = [], C = 1; C < A.length; C++) S(T, void 0 === (F = A[C]) ? F : String(F));
                        var U = A.groups;
                        if (h) {
                            var L = O([R], T, D, s);
                            void 0 !== U && S(L, U);
                            var N = d(n(o, void 0, L))
                        } else N = v(R, s, D, T, U, o);
                        D >= P && (j += I(s, P, D) + N, P = D + R.length)
                    }
                    return j + I(s, P)
                }]
            }), !!s((function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {a: "7"}, e
                }, "7" !== "".replace(e, "$<a>")
            })) || !E || A)
        }, 64765: (e, t, r) => {
            "use strict";
            var n = r(46916), o = r(27007), i = r(19670), a = r(68554), s = r(84488), c = r(81150), u = r(41340),
                f = r(58173), l = r(97651);
            o("search", (function (e, t, r) {
                return [function (t) {
                    var r = s(this), o = a(t) ? void 0 : f(t, e);
                    return o ? n(o, t, r) : new RegExp(t)[e](u(r))
                }, function (e) {
                    var n = i(this), o = u(e), a = r(t, n, o);
                    if (a.done) return a.value;
                    var s = n.lastIndex;
                    c(s, 0) || (n.lastIndex = 0);
                    var f = l(n, o);
                    return c(n.lastIndex, s) || (n.lastIndex = s), null === f ? -1 : f.index
                }]
            }))
        }, 23123: (e, t, r) => {
            "use strict";
            var n = r(22104), o = r(46916), i = r(1702), a = r(27007), s = r(19670), c = r(68554), u = r(47850),
                f = r(84488), l = r(36707), p = r(31530), d = r(17466), h = r(41340), g = r(58173), m = r(41589),
                v = r(97651), y = r(22261), b = r(52999), w = r(47293), x = b.UNSUPPORTED_Y, O = 4294967295,
                S = Math.min, _ = [].push, I = i(/./.exec), E = i(_), A = i("".slice);
            a("split", (function (e, t, r) {
                var i;
                return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
                    var i = h(f(this)), a = void 0 === r ? O : r >>> 0;
                    if (0 === a) return [];
                    if (void 0 === e) return [i];
                    if (!u(e)) return o(t, i, e, a);
                    for (var s, c, l, p = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), g = 0, v = new RegExp(e.source, d + "g"); (s = o(y, v, i)) && !((c = v.lastIndex) > g && (E(p, A(i, g, s.index)), s.length > 1 && s.index < i.length && n(_, p, m(s, 1)), l = s[0].length, g = c, p.length >= a));) v.lastIndex === s.index && v.lastIndex++;
                    return g === i.length ? !l && I(v, "") || E(p, "") : E(p, A(i, g)), p.length > a ? m(p, 0, a) : p
                } : "0".split(void 0, 0).length ? function (e, r) {
                    return void 0 === e && 0 === r ? [] : o(t, this, e, r)
                } : t, [function (t, r) {
                    var n = f(this), a = c(t) ? void 0 : g(t, e);
                    return a ? o(a, t, n, r) : o(i, h(n), t, r)
                }, function (e, n) {
                    var o = s(this), a = h(e), c = r(i, o, a, n, i !== t);
                    if (c.done) return c.value;
                    var u = l(o, RegExp), f = o.unicode,
                        g = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (x ? "g" : "y"),
                        m = new u(x ? "^(?:" + o.source + ")" : o, g), y = void 0 === n ? O : n >>> 0;
                    if (0 === y) return [];
                    if (0 === a.length) return null === v(m, a) ? [a] : [];
                    for (var b = 0, w = 0, _ = []; w < a.length;) {
                        m.lastIndex = x ? 0 : w;
                        var I, F = v(m, x ? A(a, w) : a);
                        if (null === F || (I = S(d(m.lastIndex + (x ? w : 0)), a.length)) === b) w = p(a, w, f); else {
                            if (E(_, A(a, b, w)), _.length === y) return _;
                            for (var j = 1; j <= F.length - 1; j++) if (E(_, F[j]), _.length === y) return _;
                            w = b = I
                        }
                    }
                    return E(_, A(a, b)), _
                }]
            }), !!w((function () {
                var e = /(?:)/, t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                };
                var r = "ab".split(e);
                return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            })), x)
        }, 23157: (e, t, r) => {
            "use strict";
            var n, o = r(82109), i = r(21470), a = r(31236).f, s = r(17466), c = r(41340), u = r(3929), f = r(84488),
                l = r(84964), p = r(31913), d = i("".startsWith), h = i("".slice), g = Math.min, m = l("startsWith");
            o({
                target: "String",
                proto: !0,
                forced: !!(p || m || (n = a(String.prototype, "startsWith"), !n || n.writable)) && !m
            }, {
                startsWith: function (e) {
                    var t = c(f(this));
                    u(e);
                    var r = s(g(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = c(e);
                    return d ? d(t, n, r) : h(t, r, r + n.length) === n
                }
            })
        }, 48702: (e, t, r) => {
            r(83462);
            var n = r(82109), o = r(10365);
            n({target: "String", proto: !0, name: "trimEnd", forced: "".trimEnd !== o}, {trimEnd: o})
        }, 99967: (e, t, r) => {
            var n = r(82109), o = r(33217);
            n({target: "String", proto: !0, name: "trimStart", forced: "".trimLeft !== o}, {trimLeft: o})
        }, 83462: (e, t, r) => {
            var n = r(82109), o = r(10365);
            n({target: "String", proto: !0, name: "trimEnd", forced: "".trimRight !== o}, {trimRight: o})
        }, 55674: (e, t, r) => {
            r(99967);
            var n = r(82109), o = r(33217);
            n({target: "String", proto: !0, name: "trimStart", forced: "".trimStart !== o}, {trimStart: o})
        }, 72443: (e, t, r) => {
            r(26800)("asyncIterator")
        }, 41817: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(19781), i = r(17854), a = r(1702), s = r(92597), c = r(60614), u = r(47976),
                f = r(41340), l = r(3070).f, p = r(99920), d = i.Symbol, h = d && d.prototype;
            if (o && c(d) && (!("description" in h) || void 0 !== d().description)) {
                var g = {}, m = function () {
                    var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0]),
                        t = u(h, this) ? new d(e) : void 0 === e ? d() : d(e);
                    return "" === e && (g[t] = !0), t
                };
                p(m, d), m.prototype = h, h.constructor = m;
                var v = "Symbol(test)" == String(d("test")), y = a(h.valueOf), b = a(h.toString),
                    w = /^Symbol\((.*)\)[^)]+$/, x = a("".replace), O = a("".slice);
                l(h, "description", {
                    configurable: !0, get: function () {
                        var e = y(this);
                        if (s(g, e)) return "";
                        var t = b(e), r = v ? O(t, 7, -1) : x(t, w, "$1");
                        return "" === r ? void 0 : r
                    }
                }), n({global: !0, constructor: !0, forced: !0}, {Symbol: m})
            }
        }, 69007: (e, t, r) => {
            r(26800)("match")
        }, 83510: (e, t, r) => {
            r(26800)("replace")
        }, 41840: (e, t, r) => {
            r(26800)("search")
        }, 32159: (e, t, r) => {
            r(26800)("split")
        }, 33105: (e, t, r) => {
            "use strict";
            var n = r(90260), o = r(21285), i = r(64599), a = r(70648), s = r(46916), c = r(1702), u = r(47293),
                f = n.aTypedArray, l = n.exportTypedArrayMethod, p = c("".slice);
            l("fill", (function (e) {
                var t = arguments.length;
                f(this);
                var r = "Big" === p(a(this), 0, 3) ? i(e) : +e;
                return s(o, this, r, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
            }), u((function () {
                var e = 0;
                return new Int8Array(2).fill({
                    valueOf: function () {
                        return e++
                    }
                }), 1 !== e
            })))
        }, 3462: (e, t, r) => {
            "use strict";
            var n = r(17854), o = r(46916), i = r(90260), a = r(26244), s = r(84590), c = r(47908), u = r(47293),
                f = n.RangeError, l = n.Int8Array, p = l && l.prototype, d = p && p.set, h = i.aTypedArray,
                g = i.exportTypedArrayMethod, m = !u((function () {
                    var e = new Uint8ClampedArray(2);
                    return o(d, e, {length: 1, 0: 3}, 1), 3 !== e[1]
                })), v = m && i.NATIVE_ARRAY_BUFFER_VIEWS && u((function () {
                    var e = new l(2);
                    return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
                }));
            g("set", (function (e) {
                h(this);
                var t = s(arguments.length > 1 ? arguments[1] : void 0, 1), r = c(e);
                if (m) return o(d, this, r, t);
                var n = this.length, i = a(r), u = 0;
                if (i + t > n) throw f("Wrong length");
                for (; u < i;) this[t + u] = r[u++]
            }), !m || v)
        }, 33824: (e, t, r) => {
            "use strict";
            var n = r(17854), o = r(21470), i = r(47293), a = r(19662), s = r(94362), c = r(90260), u = r(68886),
                f = r(30256), l = r(7392), p = r(98008), d = c.aTypedArray, h = c.exportTypedArrayMethod,
                g = n.Uint16Array, m = g && o(g.prototype.sort), v = !(!m || i((function () {
                    m(new g(2), null)
                })) && i((function () {
                    m(new g(2), {})
                }))), y = !!m && !i((function () {
                    if (l) return l < 74;
                    if (u) return u < 67;
                    if (f) return !0;
                    if (p) return p < 602;
                    var e, t, r = new g(516), n = Array(516);
                    for (e = 0; e < 516; e++) t = e % 4, r[e] = 515 - e, n[e] = e - 2 * t + 3;
                    for (m(r, (function (e, t) {
                        return (e / 4 | 0) - (t / 4 | 0)
                    })), e = 0; e < 516; e++) if (r[e] !== n[e]) return !0
                }));
            h("sort", (function (e) {
                return void 0 !== e && a(e), y ? m(this, e) : s(d(this), function (e) {
                    return function (t, r) {
                        return void 0 !== e ? +e(t, r) || 0 : r != r ? -1 : t != t ? 1 : 0 === t && 0 === r ? 1 / t > 0 && 1 / r < 0 ? 1 : -1 : t > r
                    }
                }(e))
            }), !y || v)
        }, 12974: (e, t, r) => {
            "use strict";
            var n = r(17854), o = r(22104), i = r(90260), a = r(47293), s = r(50206), c = n.Int8Array,
                u = i.aTypedArray, f = i.exportTypedArrayMethod, l = [].toLocaleString, p = !!c && a((function () {
                    l.call(new c(1))
                }));
            f("toLocaleString", (function () {
                return o(l, p ? s(u(this)) : u(this), s(arguments))
            }), a((function () {
                return [1, 2].toLocaleString() != new c([1, 2]).toLocaleString()
            })) || !a((function () {
                c.prototype.toLocaleString.call([1, 2])
            })))
        }, 41202: (e, t, r) => {
            "use strict";
            var n, o = r(76677), i = r(17854), a = r(1702), s = r(89190), c = r(62423), u = r(77710), f = r(29320),
                l = r(70111), p = r(29909).enforce, d = r(47293), h = r(94811), g = Object, m = Array.isArray,
                v = g.isExtensible, y = g.isFrozen, b = g.isSealed, w = g.freeze, x = g.seal, O = {}, S = {},
                _ = !i.ActiveXObject && "ActiveXObject" in i, I = function (e) {
                    return function () {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                }, E = u("WeakMap", I, f), A = E.prototype, F = a(A.set);
            if (h) if (_) {
                n = f.getConstructor(I, "WeakMap", !0), c.enable();
                var j = a(A.delete), P = a(A.has), k = a(A.get);
                s(A, {
                    delete: function (e) {
                        if (l(e) && !v(e)) {
                            var t = p(this);
                            return t.frozen || (t.frozen = new n), j(this, e) || t.frozen.delete(e)
                        }
                        return j(this, e)
                    }, has: function (e) {
                        if (l(e) && !v(e)) {
                            var t = p(this);
                            return t.frozen || (t.frozen = new n), P(this, e) || t.frozen.has(e)
                        }
                        return P(this, e)
                    }, get: function (e) {
                        if (l(e) && !v(e)) {
                            var t = p(this);
                            return t.frozen || (t.frozen = new n), P(this, e) ? k(this, e) : t.frozen.get(e)
                        }
                        return k(this, e)
                    }, set: function (e, t) {
                        if (l(e) && !v(e)) {
                            var r = p(this);
                            r.frozen || (r.frozen = new n), P(this, e) ? F(this, e, t) : r.frozen.set(e, t)
                        } else F(this, e, t);
                        return this
                    }
                })
            } else o && d((function () {
                var e = w([]);
                return F(new E, e, 1), !y(e)
            })) && s(A, {
                set: function (e, t) {
                    var r;
                    return m(e) && (y(e) ? r = O : b(e) && (r = S)), F(this, e, t), r == O && w(e), r == S && x(e), this
                }
            })
        }, 4129: (e, t, r) => {
            r(41202)
        }, 11091: (e, t, r) => {
            var n = r(82109), o = r(17854), i = r(20261).clear;
            n({global: !0, bind: !0, enumerable: !0, forced: o.clearImmediate !== i}, {clearImmediate: i})
        }, 33948: (e, t, r) => {
            var n = r(17854), o = r(48324), i = r(98509), a = r(66992), s = r(68880), c = r(5112), u = c("iterator"),
                f = c("toStringTag"), l = a.values, p = function (e, t) {
                    if (e) {
                        if (e[u] !== l) try {
                            s(e, u, l)
                        } catch (t) {
                            e[u] = l
                        }
                        if (e[f] || s(e, f, t), o[t]) for (var r in a) if (e[r] !== a[r]) try {
                            s(e, r, a[r])
                        } catch (t) {
                            e[r] = a[r]
                        }
                    }
                };
            for (var d in o) p(n[d] && n[d].prototype, d);
            p(i, "DOMTokenList")
        }, 84633: (e, t, r) => {
            r(11091), r(12986)
        }, 85844: (e, t, r) => {
            var n = r(82109), o = r(17854), i = r(95948), a = r(19662), s = r(48053), c = r(35268), u = o.process;
            n({global: !0, enumerable: !0, dontCallGetSet: !0}, {
                queueMicrotask: function (e) {
                    s(arguments.length, 1), a(e);
                    var t = c && u.domain;
                    i(t ? t.bind(e) : e)
                }
            })
        }, 12986: (e, t, r) => {
            var n = r(82109), o = r(17854), i = r(20261).set, a = r(17152), s = o.setImmediate ? a(i, !1) : i;
            n({global: !0, bind: !0, enumerable: !0, forced: o.setImmediate !== s}, {setImmediate: s})
        }, 65556: (e, t, r) => {
            "use strict";
            r(66992);
            var n = r(82109), o = r(17854), i = r(46916), a = r(1702), s = r(19781), c = r(85143), u = r(98052),
                f = r(89190), l = r(58003), p = r(63061), d = r(29909), h = r(25787), g = r(60614), m = r(92597),
                v = r(49974), y = r(70648), b = r(19670), w = r(70111), x = r(41340), O = r(70030), S = r(79114),
                _ = r(18554), I = r(71246), E = r(48053), A = r(5112), F = r(94362), j = A("iterator"),
                P = "URLSearchParams", k = "URLSearchParamsIterator", R = d.set, D = d.getterFor(P), T = d.getterFor(k),
                C = Object.getOwnPropertyDescriptor, U = function (e) {
                    if (!s) return o[e];
                    var t = C(o, e);
                    return t && t.value
                }, L = U("fetch"), N = U("Request"), B = U("Headers"), M = N && N.prototype, $ = B && B.prototype,
                J = o.RegExp, z = o.TypeError, W = o.decodeURIComponent, q = o.encodeURIComponent, H = a("".charAt),
                V = a([].join), G = a([].push), K = a("".replace), Y = a([].shift), X = a([].splice), Z = a("".split),
                Q = a("".slice), ee = /\+/g, te = Array(4), re = function (e) {
                    return te[e - 1] || (te[e - 1] = J("((?:%[\\da-f]{2}){" + e + "})", "gi"))
                }, ne = function (e) {
                    try {
                        return W(e)
                    } catch (t) {
                        return e
                    }
                }, oe = function (e) {
                    var t = K(e, ee, " "), r = 4;
                    try {
                        return W(t)
                    } catch (e) {
                        for (; r;) t = K(t, re(r--), ne);
                        return t
                    }
                }, ie = /[!'()~]|%20/g, ae = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
                se = function (e) {
                    return ae[e]
                }, ce = function (e) {
                    return K(q(e), ie, se)
                }, ue = p((function (e, t) {
                    R(this, {type: k, iterator: _(D(e).entries), kind: t})
                }), "Iterator", (function () {
                    var e = T(this), t = e.kind, r = e.iterator.next(), n = r.value;
                    return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [n.key, n.value]), r
                }), !0), fe = function (e) {
                    this.entries = [], this.url = null, void 0 !== e && (w(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === H(e, 0) ? Q(e, 1) : e : x(e)))
                };
            fe.prototype = {
                type: P, bindURL: function (e) {
                    this.url = e, this.update()
                }, parseObject: function (e) {
                    var t, r, n, o, a, s, c, u = I(e);
                    if (u) for (r = (t = _(e, u)).next; !(n = i(r, t)).done;) {
                        if (a = (o = _(b(n.value))).next, (s = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done) throw z("Expected sequence with length 2");
                        G(this.entries, {key: x(s.value), value: x(c.value)})
                    } else for (var f in e) m(e, f) && G(this.entries, {key: f, value: x(e[f])})
                }, parseQuery: function (e) {
                    if (e) for (var t, r, n = Z(e, "&"), o = 0; o < n.length;) (t = n[o++]).length && (r = Z(t, "="), G(this.entries, {
                        key: oe(Y(r)),
                        value: oe(V(r, "="))
                    }))
                }, serialize: function () {
                    for (var e, t = this.entries, r = [], n = 0; n < t.length;) e = t[n++], G(r, ce(e.key) + "=" + ce(e.value));
                    return V(r, "&")
                }, update: function () {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                }, updateURL: function () {
                    this.url && this.url.update()
                }
            };
            var le = function () {
                h(this, pe);
                var e = arguments.length > 0 ? arguments[0] : void 0;
                R(this, new fe(e))
            }, pe = le.prototype;
            if (f(pe, {
                append: function (e, t) {
                    E(arguments.length, 2);
                    var r = D(this);
                    G(r.entries, {key: x(e), value: x(t)}), r.updateURL()
                }, delete: function (e) {
                    E(arguments.length, 1);
                    for (var t = D(this), r = t.entries, n = x(e), o = 0; o < r.length;) r[o].key === n ? X(r, o, 1) : o++;
                    t.updateURL()
                }, get: function (e) {
                    E(arguments.length, 1);
                    for (var t = D(this).entries, r = x(e), n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                    return null
                }, getAll: function (e) {
                    E(arguments.length, 1);
                    for (var t = D(this).entries, r = x(e), n = [], o = 0; o < t.length; o++) t[o].key === r && G(n, t[o].value);
                    return n
                }, has: function (e) {
                    E(arguments.length, 1);
                    for (var t = D(this).entries, r = x(e), n = 0; n < t.length;) if (t[n++].key === r) return !0;
                    return !1
                }, set: function (e, t) {
                    E(arguments.length, 1);
                    for (var r, n = D(this), o = n.entries, i = !1, a = x(e), s = x(t), c = 0; c < o.length; c++) (r = o[c]).key === a && (i ? X(o, c--, 1) : (i = !0, r.value = s));
                    i || G(o, {key: a, value: s}), n.updateURL()
                }, sort: function () {
                    var e = D(this);
                    F(e.entries, (function (e, t) {
                        return e.key > t.key ? 1 : -1
                    })), e.updateURL()
                }, forEach: function (e) {
                    for (var t, r = D(this).entries, n = v(e, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < r.length;) n((t = r[o++]).value, t.key, this)
                }, keys: function () {
                    return new ue(this, "keys")
                }, values: function () {
                    return new ue(this, "values")
                }, entries: function () {
                    return new ue(this, "entries")
                }
            }, {enumerable: !0}), u(pe, j, pe.entries, {name: "entries"}), u(pe, "toString", (function () {
                return D(this).serialize()
            }), {enumerable: !0}), l(le, P), n({
                global: !0,
                constructor: !0,
                forced: !c
            }, {URLSearchParams: le}), !c && g(B)) {
                var de = a($.has), he = a($.set), ge = function (e) {
                    if (w(e)) {
                        var t, r = e.body;
                        if (y(r) === P) return t = e.headers ? new B(e.headers) : new B, de(t, "content-type") || he(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), O(e, {
                            body: S(0, x(r)),
                            headers: S(0, t)
                        })
                    }
                    return e
                };
                if (g(L) && n({global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0}, {
                    fetch: function (e) {
                        return L(e, arguments.length > 1 ? ge(arguments[1]) : {})
                    }
                }), g(N)) {
                    var me = function (e) {
                        return h(this, M), new N(e, arguments.length > 1 ? ge(arguments[1]) : {})
                    };
                    M.constructor = me, me.prototype = M, n({
                        global: !0,
                        constructor: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {Request: me})
                }
            }
            e.exports = {URLSearchParams: le, getState: D}
        }, 41637: (e, t, r) => {
            r(65556)
        }, 68789: (e, t, r) => {
            "use strict";
            r(78783);
            var n, o = r(82109), i = r(19781), a = r(85143), s = r(17854), c = r(49974), u = r(1702), f = r(98052),
                l = r(47045), p = r(25787), d = r(92597), h = r(21574), g = r(48457), m = r(41589), v = r(28710).codeAt,
                y = r(33197), b = r(41340), w = r(58003), x = r(48053), O = r(65556), S = r(29909), _ = S.set,
                I = S.getterFor("URL"), E = O.URLSearchParams, A = O.getState, F = s.URL, j = s.TypeError,
                P = s.parseInt, k = Math.floor, R = Math.pow, D = u("".charAt), T = u(/./.exec), C = u([].join),
                U = u(1..toString), L = u([].pop), N = u([].push), B = u("".replace), M = u([].shift), $ = u("".split),
                J = u("".slice), z = u("".toLowerCase), W = u([].unshift), q = "Invalid scheme", H = "Invalid host",
                V = "Invalid port", G = /[a-z]/i, K = /[\d+-.a-z]/i, Y = /\d/, X = /^0x/i, Z = /^[0-7]+$/, Q = /^\d+$/,
                ee = /^[\da-f]+$/i, te = /[\0\t\n\r #%/:<>?@[\\\]^|]/, re = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                ne = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, oe = /[\t\n\r]/g, ie = function (e) {
                    var t, r, n, o;
                    if ("number" == typeof e) {
                        for (t = [], r = 0; r < 4; r++) W(t, e % 256), e = k(e / 256);
                        return C(t, ".")
                    }
                    if ("object" == typeof e) {
                        for (t = "", n = function (e) {
                            for (var t = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (o > r && (t = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                            return o > r && (t = n, r = o), t
                        }(e), r = 0; r < 8; r++) o && 0 === e[r] || (o && (o = !1), n === r ? (t += r ? ":" : "::", o = !0) : (t += U(e[r], 16), r < 7 && (t += ":")));
                        return "[" + t + "]"
                    }
                    return e
                }, ae = {}, se = h({}, ae, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
                ce = h({}, se, {"#": 1, "?": 1, "{": 1, "}": 1}),
                ue = h({}, ce, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
                fe = function (e, t) {
                    var r = v(e, 0);
                    return r > 32 && r < 127 && !d(t, e) ? e : encodeURIComponent(e)
                }, le = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, pe = function (e, t) {
                    var r;
                    return 2 == e.length && T(G, D(e, 0)) && (":" == (r = D(e, 1)) || !t && "|" == r)
                }, de = function (e) {
                    var t;
                    return e.length > 1 && pe(J(e, 0, 2)) && (2 == e.length || "/" === (t = D(e, 2)) || "\\" === t || "?" === t || "#" === t)
                }, he = function (e) {
                    return "." === e || "%2e" === z(e)
                }, ge = {}, me = {}, ve = {}, ye = {}, be = {}, we = {}, xe = {}, Oe = {}, Se = {}, _e = {}, Ie = {},
                Ee = {}, Ae = {}, Fe = {}, je = {}, Pe = {}, ke = {}, Re = {}, De = {}, Te = {}, Ce = {},
                Ue = function (e, t, r) {
                    var n, o, i, a = b(e);
                    if (t) {
                        if (o = this.parse(a)) throw j(o);
                        this.searchParams = null
                    } else {
                        if (void 0 !== r && (n = new Ue(r, !0)), o = this.parse(a, null, n)) throw j(o);
                        (i = A(new E)).bindURL(this), this.searchParams = i
                    }
                };
            Ue.prototype = {
                type: "URL", parse: function (e, t, r) {
                    var o, i, a, s, c, u = this, f = t || ge, l = 0, p = "", h = !1, v = !1, y = !1;
                    for (e = b(e), t || (u.scheme = "", u.username = "", u.password = "", u.host = null, u.port = null, u.path = [], u.query = null, u.fragment = null, u.cannotBeABaseURL = !1, e = B(e, ne, "")), e = B(e, oe, ""), o = g(e); l <= o.length;) {
                        switch (i = o[l], f) {
                            case ge:
                                if (!i || !T(G, i)) {
                                    if (t) return q;
                                    f = ve;
                                    continue
                                }
                                p += z(i), f = me;
                                break;
                            case me:
                                if (i && (T(K, i) || "+" == i || "-" == i || "." == i)) p += z(i); else {
                                    if (":" != i) {
                                        if (t) return q;
                                        p = "", f = ve, l = 0;
                                        continue
                                    }
                                    if (t && (u.isSpecial() != d(le, p) || "file" == p && (u.includesCredentials() || null !== u.port) || "file" == u.scheme && !u.host)) return;
                                    if (u.scheme = p, t) return void (u.isSpecial() && le[u.scheme] == u.port && (u.port = null));
                                    p = "", "file" == u.scheme ? f = Fe : u.isSpecial() && r && r.scheme == u.scheme ? f = ye : u.isSpecial() ? f = Oe : "/" == o[l + 1] ? (f = be, l++) : (u.cannotBeABaseURL = !0, N(u.path, ""), f = De)
                                }
                                break;
                            case ve:
                                if (!r || r.cannotBeABaseURL && "#" != i) return q;
                                if (r.cannotBeABaseURL && "#" == i) {
                                    u.scheme = r.scheme, u.path = m(r.path), u.query = r.query, u.fragment = "", u.cannotBeABaseURL = !0, f = Ce;
                                    break
                                }
                                f = "file" == r.scheme ? Fe : we;
                                continue;
                            case ye:
                                if ("/" != i || "/" != o[l + 1]) {
                                    f = we;
                                    continue
                                }
                                f = Se, l++;
                                break;
                            case be:
                                if ("/" == i) {
                                    f = _e;
                                    break
                                }
                                f = Re;
                                continue;
                            case we:
                                if (u.scheme = r.scheme, i == n) u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = m(r.path), u.query = r.query; else if ("/" == i || "\\" == i && u.isSpecial()) f = xe; else if ("?" == i) u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = m(r.path), u.query = "", f = Te; else {
                                    if ("#" != i) {
                                        u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = m(r.path), u.path.length--, f = Re;
                                        continue
                                    }
                                    u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = m(r.path), u.query = r.query, u.fragment = "", f = Ce
                                }
                                break;
                            case xe:
                                if (!u.isSpecial() || "/" != i && "\\" != i) {
                                    if ("/" != i) {
                                        u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, f = Re;
                                        continue
                                    }
                                    f = _e
                                } else f = Se;
                                break;
                            case Oe:
                                if (f = Se, "/" != i || "/" != D(p, l + 1)) continue;
                                l++;
                                break;
                            case Se:
                                if ("/" != i && "\\" != i) {
                                    f = _e;
                                    continue
                                }
                                break;
                            case _e:
                                if ("@" == i) {
                                    h && (p = "%40" + p), h = !0, a = g(p);
                                    for (var w = 0; w < a.length; w++) {
                                        var x = a[w];
                                        if (":" != x || y) {
                                            var O = fe(x, ue);
                                            y ? u.password += O : u.username += O
                                        } else y = !0
                                    }
                                    p = ""
                                } else if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                    if (h && "" == p) return "Invalid authority";
                                    l -= g(p).length + 1, p = "", f = Ie
                                } else p += i;
                                break;
                            case Ie:
                            case Ee:
                                if (t && "file" == u.scheme) {
                                    f = Pe;
                                    continue
                                }
                                if (":" != i || v) {
                                    if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                        if (u.isSpecial() && "" == p) return H;
                                        if (t && "" == p && (u.includesCredentials() || null !== u.port)) return;
                                        if (s = u.parseHost(p)) return s;
                                        if (p = "", f = ke, t) return;
                                        continue
                                    }
                                    "[" == i ? v = !0 : "]" == i && (v = !1), p += i
                                } else {
                                    if ("" == p) return H;
                                    if (s = u.parseHost(p)) return s;
                                    if (p = "", f = Ae, t == Ee) return
                                }
                                break;
                            case Ae:
                                if (!T(Y, i)) {
                                    if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial() || t) {
                                        if ("" != p) {
                                            var S = P(p, 10);
                                            if (S > 65535) return V;
                                            u.port = u.isSpecial() && S === le[u.scheme] ? null : S, p = ""
                                        }
                                        if (t) return;
                                        f = ke;
                                        continue
                                    }
                                    return V
                                }
                                p += i;
                                break;
                            case Fe:
                                if (u.scheme = "file", "/" == i || "\\" == i) f = je; else {
                                    if (!r || "file" != r.scheme) {
                                        f = Re;
                                        continue
                                    }
                                    if (i == n) u.host = r.host, u.path = m(r.path), u.query = r.query; else if ("?" == i) u.host = r.host, u.path = m(r.path), u.query = "", f = Te; else {
                                        if ("#" != i) {
                                            de(C(m(o, l), "")) || (u.host = r.host, u.path = m(r.path), u.shortenPath()), f = Re;
                                            continue
                                        }
                                        u.host = r.host, u.path = m(r.path), u.query = r.query, u.fragment = "", f = Ce
                                    }
                                }
                                break;
                            case je:
                                if ("/" == i || "\\" == i) {
                                    f = Pe;
                                    break
                                }
                                r && "file" == r.scheme && !de(C(m(o, l), "")) && (pe(r.path[0], !0) ? N(u.path, r.path[0]) : u.host = r.host), f = Re;
                                continue;
                            case Pe:
                                if (i == n || "/" == i || "\\" == i || "?" == i || "#" == i) {
                                    if (!t && pe(p)) f = Re; else if ("" == p) {
                                        if (u.host = "", t) return;
                                        f = ke
                                    } else {
                                        if (s = u.parseHost(p)) return s;
                                        if ("localhost" == u.host && (u.host = ""), t) return;
                                        p = "", f = ke
                                    }
                                    continue
                                }
                                p += i;
                                break;
                            case ke:
                                if (u.isSpecial()) {
                                    if (f = Re, "/" != i && "\\" != i) continue
                                } else if (t || "?" != i) if (t || "#" != i) {
                                    if (i != n && (f = Re, "/" != i)) continue
                                } else u.fragment = "", f = Ce; else u.query = "", f = Te;
                                break;
                            case Re:
                                if (i == n || "/" == i || "\\" == i && u.isSpecial() || !t && ("?" == i || "#" == i)) {
                                    if (".." === (c = z(c = p)) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (u.shortenPath(), "/" == i || "\\" == i && u.isSpecial() || N(u.path, "")) : he(p) ? "/" == i || "\\" == i && u.isSpecial() || N(u.path, "") : ("file" == u.scheme && !u.path.length && pe(p) && (u.host && (u.host = ""), p = D(p, 0) + ":"), N(u.path, p)), p = "", "file" == u.scheme && (i == n || "?" == i || "#" == i)) for (; u.path.length > 1 && "" === u.path[0];) M(u.path);
                                    "?" == i ? (u.query = "", f = Te) : "#" == i && (u.fragment = "", f = Ce)
                                } else p += fe(i, ce);
                                break;
                            case De:
                                "?" == i ? (u.query = "", f = Te) : "#" == i ? (u.fragment = "", f = Ce) : i != n && (u.path[0] += fe(i, ae));
                                break;
                            case Te:
                                t || "#" != i ? i != n && ("'" == i && u.isSpecial() ? u.query += "%27" : u.query += "#" == i ? "%23" : fe(i, ae)) : (u.fragment = "", f = Ce);
                                break;
                            case Ce:
                                i != n && (u.fragment += fe(i, se))
                        }
                        l++
                    }
                }, parseHost: function (e) {
                    var t, r, n;
                    if ("[" == D(e, 0)) {
                        if ("]" != D(e, e.length - 1)) return H;
                        if (t = function (e) {
                            var t, r, n, o, i, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, f = null, l = 0,
                                p = function () {
                                    return D(e, l)
                                };
                            if (":" == p()) {
                                if (":" != D(e, 1)) return;
                                l += 2, f = ++u
                            }
                            for (; p();) {
                                if (8 == u) return;
                                if (":" != p()) {
                                    for (t = r = 0; r < 4 && T(ee, p());) t = 16 * t + P(p(), 16), l++, r++;
                                    if ("." == p()) {
                                        if (0 == r) return;
                                        if (l -= r, u > 6) return;
                                        for (n = 0; p();) {
                                            if (o = null, n > 0) {
                                                if (!("." == p() && n < 4)) return;
                                                l++
                                            }
                                            if (!T(Y, p())) return;
                                            for (; T(Y, p());) {
                                                if (i = P(p(), 10), null === o) o = i; else {
                                                    if (0 == o) return;
                                                    o = 10 * o + i
                                                }
                                                if (o > 255) return;
                                                l++
                                            }
                                            c[u] = 256 * c[u] + o, 2 != ++n && 4 != n || u++
                                        }
                                        if (4 != n) return;
                                        break
                                    }
                                    if (":" == p()) {
                                        if (l++, !p()) return
                                    } else if (p()) return;
                                    c[u++] = t
                                } else {
                                    if (null !== f) return;
                                    l++, f = ++u
                                }
                            }
                            if (null !== f) for (a = u - f, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[f + a - 1], c[f + --a] = s; else if (8 != u) return;
                            return c
                        }(J(e, 1, -1)), !t) return H;
                        this.host = t
                    } else if (this.isSpecial()) {
                        if (e = y(e), T(te, e)) return H;
                        if (t = function (e) {
                            var t, r, n, o, i, a, s, c = $(e, ".");
                            if (c.length && "" == c[c.length - 1] && c.length--, (t = c.length) > 4) return e;
                            for (r = [], n = 0; n < t; n++) {
                                if ("" == (o = c[n])) return e;
                                if (i = 10, o.length > 1 && "0" == D(o, 0) && (i = T(X, o) ? 16 : 8, o = J(o, 8 == i ? 1 : 2)), "" === o) a = 0; else {
                                    if (!T(10 == i ? Q : 8 == i ? Z : ee, o)) return e;
                                    a = P(o, i)
                                }
                                N(r, a)
                            }
                            for (n = 0; n < t; n++) if (a = r[n], n == t - 1) {
                                if (a >= R(256, 5 - t)) return null
                            } else if (a > 255) return null;
                            for (s = L(r), n = 0; n < r.length; n++) s += r[n] * R(256, 3 - n);
                            return s
                        }(e), null === t) return H;
                        this.host = t
                    } else {
                        if (T(re, e)) return H;
                        for (t = "", r = g(e), n = 0; n < r.length; n++) t += fe(r[n], ae);
                        this.host = t
                    }
                }, cannotHaveUsernamePasswordPort: function () {
                    return !this.host || this.cannotBeABaseURL || "file" == this.scheme
                }, includesCredentials: function () {
                    return "" != this.username || "" != this.password
                }, isSpecial: function () {
                    return d(le, this.scheme)
                }, shortenPath: function () {
                    var e = this.path, t = e.length;
                    !t || "file" == this.scheme && 1 == t && pe(e[0], !0) || e.length--
                }, serialize: function () {
                    var e = this, t = e.scheme, r = e.username, n = e.password, o = e.host, i = e.port, a = e.path,
                        s = e.query, c = e.fragment, u = t + ":";
                    return null !== o ? (u += "//", e.includesCredentials() && (u += r + (n ? ":" + n : "") + "@"), u += ie(o), null !== i && (u += ":" + i)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + C(a, "/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
                }, setHref: function (e) {
                    var t = this.parse(e);
                    if (t) throw j(t);
                    this.searchParams.update()
                }, getOrigin: function () {
                    var e = this.scheme, t = this.port;
                    if ("blob" == e) try {
                        return new Le(e.path[0]).origin
                    } catch (e) {
                        return "null"
                    }
                    return "file" != e && this.isSpecial() ? e + "://" + ie(this.host) + (null !== t ? ":" + t : "") : "null"
                }, getProtocol: function () {
                    return this.scheme + ":"
                }, setProtocol: function (e) {
                    this.parse(b(e) + ":", ge)
                }, getUsername: function () {
                    return this.username
                }, setUsername: function (e) {
                    var t = g(b(e));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.username = "";
                        for (var r = 0; r < t.length; r++) this.username += fe(t[r], ue)
                    }
                }, getPassword: function () {
                    return this.password
                }, setPassword: function (e) {
                    var t = g(b(e));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.password = "";
                        for (var r = 0; r < t.length; r++) this.password += fe(t[r], ue)
                    }
                }, getHost: function () {
                    var e = this.host, t = this.port;
                    return null === e ? "" : null === t ? ie(e) : ie(e) + ":" + t
                }, setHost: function (e) {
                    this.cannotBeABaseURL || this.parse(e, Ie)
                }, getHostname: function () {
                    var e = this.host;
                    return null === e ? "" : ie(e)
                }, setHostname: function (e) {
                    this.cannotBeABaseURL || this.parse(e, Ee)
                }, getPort: function () {
                    var e = this.port;
                    return null === e ? "" : b(e)
                }, setPort: function (e) {
                    this.cannotHaveUsernamePasswordPort() || ("" == (e = b(e)) ? this.port = null : this.parse(e, Ae))
                }, getPathname: function () {
                    var e = this.path;
                    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + C(e, "/") : ""
                }, setPathname: function (e) {
                    this.cannotBeABaseURL || (this.path = [], this.parse(e, ke))
                }, getSearch: function () {
                    var e = this.query;
                    return e ? "?" + e : ""
                }, setSearch: function (e) {
                    "" == (e = b(e)) ? this.query = null : ("?" == D(e, 0) && (e = J(e, 1)), this.query = "", this.parse(e, Te)), this.searchParams.update()
                }, getSearchParams: function () {
                    return this.searchParams.facade
                }, getHash: function () {
                    var e = this.fragment;
                    return e ? "#" + e : ""
                }, setHash: function (e) {
                    "" != (e = b(e)) ? ("#" == D(e, 0) && (e = J(e, 1)), this.fragment = "", this.parse(e, Ce)) : this.fragment = null
                }, update: function () {
                    this.query = this.searchParams.serialize() || null
                }
            };
            var Le = function (e) {
                var t = p(this, Ne), r = x(arguments.length, 1) > 1 ? arguments[1] : void 0, n = _(t, new Ue(e, !1, r));
                i || (t.href = n.serialize(), t.origin = n.getOrigin(), t.protocol = n.getProtocol(), t.username = n.getUsername(), t.password = n.getPassword(), t.host = n.getHost(), t.hostname = n.getHostname(), t.port = n.getPort(), t.pathname = n.getPathname(), t.search = n.getSearch(), t.searchParams = n.getSearchParams(), t.hash = n.getHash())
            }, Ne = Le.prototype, Be = function (e, t) {
                return {
                    get: function () {
                        return I(this)[e]()
                    }, set: t && function (e) {
                        return I(this)[t](e)
                    }, configurable: !0, enumerable: !0
                }
            };
            if (i && (l(Ne, "href", Be("serialize", "setHref")), l(Ne, "origin", Be("getOrigin")), l(Ne, "protocol", Be("getProtocol", "setProtocol")), l(Ne, "username", Be("getUsername", "setUsername")), l(Ne, "password", Be("getPassword", "setPassword")), l(Ne, "host", Be("getHost", "setHost")), l(Ne, "hostname", Be("getHostname", "setHostname")), l(Ne, "port", Be("getPort", "setPort")), l(Ne, "pathname", Be("getPathname", "setPathname")), l(Ne, "search", Be("getSearch", "setSearch")), l(Ne, "searchParams", Be("getSearchParams")), l(Ne, "hash", Be("getHash", "setHash"))), f(Ne, "toJSON", (function () {
                return I(this).serialize()
            }), {enumerable: !0}), f(Ne, "toString", (function () {
                return I(this).serialize()
            }), {enumerable: !0}), F) {
                var Me = F.createObjectURL, $e = F.revokeObjectURL;
                Me && f(Le, "createObjectURL", c(Me, F)), $e && f(Le, "revokeObjectURL", c($e, F))
            }
            w(Le, "URL"), o({global: !0, constructor: !0, forced: !a, sham: !i}, {URL: Le})
        }, 60285: (e, t, r) => {
            r(68789)
        }, 83753: (e, t, r) => {
            "use strict";
            var n = r(82109), o = r(46916);
            n({target: "URL", proto: !0, enumerable: !0}, {
                toJSON: function () {
                    return o(URL.prototype.toString, this)
                }
            })
        }, 52923: () => {
        }, 91117: e => {
            e.exports = "0707626519e88b77"
        }, 35349: e => {
            e.exports = "7e9dac5212840e18"
        }
    }, t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = t[n] = {exports: {}};
        return e[n](i, i.exports, r), i.exports
    }

    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {a: t}), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, r.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    };
    var n = {};
    return (() => {
        "use strict";
        r.r(n);
        r(41817), r(72443), r(69007), r(83510), r(41840), r(32159), r(84944), r(86535), r(2707), r(33792), r(99244), r(61874), r(9494), r(56977), r(19601), r(38559), r(54678), r(91058), r(88674), r(17727), r(83593), r(24603), r(74916), r(92087), r(39714), r(27852), r(32023), r(4723), r(15306), r(64765), r(23123), r(23157), r(48702), r(55674), r(33105), r(3462), r(33824), r(12974), r(4129), r(33948), r(84633), r(85844), r(60285), r(83753), r(41637);
        "object" == typeof window && (window._babelPolyfill = !1);
        const e = function e(t) {
            let r;
            return r = t instanceof Error ? t : new Error(t), Object.setPrototypeOf(r, e.prototype), r
        };
        e.prototype = Object.create(Error.prototype, {name: {value: "PSPDFKitError", enumerable: !1}});
        const t = e;

        function o(e, r) {
            if (!e) throw new t(`Assertion failed: ${r || "Condition not met"}\n\nFor further assistance, please go to: https://pspdfkit.com/support/request`)
        }

        function i(e) {
            console.log(e)
        }

        function a() {
            console.warn(...arguments)
        }

        function s(e) {
            console.error(e)
        }

        ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");

        function c(e) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, c(e)
        }

        function u(e) {
            var t = function (e, t) {
                if ("object" !== c(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== c(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }

        function f(e, t, r) {
            return (t = u(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        new WeakMap;

        function l(e) {
            return {
                name: e.name,
                scale: {
                    unitFrom: e.scale.unitFrom,
                    unitTo: e.scale.unitTo,
                    from: Number(e.scale.fromValue),
                    to: Number(e.scale.toValue)
                },
                precision: e.precision
            }
        }

        var p = r(91117), d = r.n(p), h = r(35349), g = r.n(h), m = r(52923), v = r.n(m);
        let y;
        y = "object" == typeof process && "object" == typeof process.versions && void 0 !== process.versions.node ? v() : function (e) {
            return "object" == typeof window ? new Promise(((t, r) => {
                const n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, n.onload = () => t(window.PSPDFModuleInit), n.onerror = r, n.src = e;
                const {documentElement: i} = document;
                o(i), i.appendChild(n)
            })) : (self.importScripts(e), Promise.resolve(self.PSPDFModuleInit))
        };
        const b = y, w = "pspdfkit-lib/", x = `${w}pspdfkit${"-" + g()}.wasm.js`, O = `${w}pspdfkit${"-" + d()}.wasm`;

        function S(e, t) {
            let r;
            if ("object" == typeof e) {
                r = e.wasm;
                return {wasmBinaryFile: O, locateFile: e => e, wasmBinary: r}
            }
            const n = {wasmBinaryFile: e + O, locateFile: e => e, wasmBinary: r};
            {
                const e = fetch(n.wasmBinaryFile, {credentials: "same-origin"}), r = 13545093;
                e.then((e => {
                    const t = e.headers.get("content-length");
                    return t && parseInt(t) >= r && a("The WASM binary file is being served without compression. Due to its size, it's recommended to configure the server so application/wasm files are served with compression.\n\nFind more details in our Standalone performance guides: https://pspdfkit.com/guides/web/best-practices/caching-on-the-web/#gzip-and-brotli"), e
                })).catch((e => {
                    throw new Error(`Failed to load WASM binary file: ${e}`)
                })), n.instantiateWasm = (r, o) => ((async () => {
                    i(`Start ${n.wasmBinaryFile} download.`);
                    const a = Date.now();
                    let c, u;
                    const f = !t && "function" == typeof WebAssembly.instantiateStreaming;

                    function l() {
                        return e.then((e => {
                            if (!e.ok) throw new Error(`Error loading ${n.wasmBinaryFile}: ${e.statusText}`);
                            return e.arrayBuffer()
                        })).then((e => (u = Date.now(), i(`Download complete, took: ${u - a}ms`), WebAssembly.instantiate(new Uint8Array(e), r))))
                    }

                    c = f ? WebAssembly.instantiateStreaming(e, r).then((e => (u = Date.now(), i(`Download and Instantiation complete, took: ${Date.now() - a}ms`), e))).catch((e => {
                        if (/mime.*type/i.test(e.message)) return s(e.message), null;
                        throw e
                    })) : l();
                    let p = await c;
                    null === p && (s("Streaming instantiation failed! Falling back to classic instantiation. This might result in slower initialization time therefore we highly recommend to follow the troubleshooting instructions in our guides to fix this error: https://pspdfkit.com/guides/web/current/troubleshooting/common-issues/#response-has-unsupported-mime-type-error."), p = await l()), !f && u && i(`Compilation and Instantiation complete, took: ${Date.now() - u}ms`), o(p.instance, p.module)
                })(), {})
            }
            return n
        }

        function _(e) {
            e.PSPDFLoggingServices = {
                error(e, t) {
                    s(`[${e}] ${t}`)
                }, warn(e, t) {
                    a(`[${e}] ${t}`)
                }, info(e, t) {
                    0
                }, debug(e, t) {
                    0
                }, trace(e, t) {
                    0
                }
            }, e.PSPDFUnicodeServices = {
                stripDiacritics(e) {
                    const t = {
                        Á: "A",
                        Ă: "A",
                        Ắ: "A",
                        Ặ: "A",
                        Ằ: "A",
                        Ẳ: "A",
                        Ẵ: "A",
                        Ǎ: "A",
                        Â: "A",
                        Ấ: "A",
                        Ậ: "A",
                        Ầ: "A",
                        Ẩ: "A",
                        Ẫ: "A",
                        Ä: "A",
                        Ǟ: "A",
                        Ȧ: "A",
                        Ǡ: "A",
                        Ạ: "A",
                        Ȁ: "A",
                        À: "A",
                        Ả: "A",
                        Ȃ: "A",
                        Ā: "A",
                        Ą: "A",
                        Å: "A",
                        Ǻ: "A",
                        Ḁ: "A",
                        Ⱥ: "A",
                        Ã: "A",
                        Ꜳ: "AA",
                        Æ: "AE",
                        Ǽ: "AE",
                        Ǣ: "AE",
                        Ꜵ: "AO",
                        Ꜷ: "AU",
                        Ꜹ: "AV",
                        Ꜻ: "AV",
                        Ꜽ: "AY",
                        Ḃ: "B",
                        Ḅ: "B",
                        Ɓ: "B",
                        Ḇ: "B",
                        Ƀ: "B",
                        Ƃ: "B",
                        Ć: "C",
                        Č: "C",
                        Ç: "C",
                        Ḉ: "C",
                        Ĉ: "C",
                        Ċ: "C",
                        Ƈ: "C",
                        Ȼ: "C",
                        Ď: "D",
                        Ḑ: "D",
                        Ḓ: "D",
                        Ḋ: "D",
                        Ḍ: "D",
                        Ɗ: "D",
                        Ḏ: "D",
                        ǲ: "D",
                        ǅ: "D",
                        Đ: "D",
                        Ƌ: "D",
                        Ǳ: "DZ",
                        Ǆ: "DZ",
                        É: "E",
                        Ĕ: "E",
                        Ě: "E",
                        Ȩ: "E",
                        Ḝ: "E",
                        Ê: "E",
                        Ế: "E",
                        Ệ: "E",
                        Ề: "E",
                        Ể: "E",
                        Ễ: "E",
                        Ḙ: "E",
                        Ë: "E",
                        Ė: "E",
                        Ẹ: "E",
                        Ȅ: "E",
                        È: "E",
                        Ẻ: "E",
                        Ȇ: "E",
                        Ē: "E",
                        Ḗ: "E",
                        Ḕ: "E",
                        Ę: "E",
                        Ɇ: "E",
                        Ẽ: "E",
                        Ḛ: "E",
                        Ꝫ: "ET",
                        Ḟ: "F",
                        Ƒ: "F",
                        Ǵ: "G",
                        Ğ: "G",
                        Ǧ: "G",
                        Ģ: "G",
                        Ĝ: "G",
                        Ġ: "G",
                        Ɠ: "G",
                        Ḡ: "G",
                        Ǥ: "G",
                        Ḫ: "H",
                        Ȟ: "H",
                        Ḩ: "H",
                        Ĥ: "H",
                        Ⱨ: "H",
                        Ḧ: "H",
                        Ḣ: "H",
                        Ḥ: "H",
                        Ħ: "H",
                        Í: "I",
                        Ĭ: "I",
                        Ǐ: "I",
                        Î: "I",
                        Ï: "I",
                        Ḯ: "I",
                        İ: "I",
                        Ị: "I",
                        Ȉ: "I",
                        Ì: "I",
                        Ỉ: "I",
                        Ȋ: "I",
                        Ī: "I",
                        Į: "I",
                        Ɨ: "I",
                        Ĩ: "I",
                        Ḭ: "I",
                        Ꝺ: "D",
                        Ꝼ: "F",
                        Ᵹ: "G",
                        Ꞃ: "R",
                        Ꞅ: "S",
                        Ꞇ: "T",
                        Ꝭ: "IS",
                        Ĵ: "J",
                        Ɉ: "J",
                        Ḱ: "K",
                        Ǩ: "K",
                        Ķ: "K",
                        Ⱪ: "K",
                        Ꝃ: "K",
                        Ḳ: "K",
                        Ƙ: "K",
                        Ḵ: "K",
                        Ꝁ: "K",
                        Ꝅ: "K",
                        Ĺ: "L",
                        Ƚ: "L",
                        Ľ: "L",
                        Ļ: "L",
                        Ḽ: "L",
                        Ḷ: "L",
                        Ḹ: "L",
                        Ⱡ: "L",
                        Ꝉ: "L",
                        Ḻ: "L",
                        Ŀ: "L",
                        Ɫ: "L",
                        ǈ: "L",
                        Ł: "L",
                        Ǉ: "LJ",
                        Ḿ: "M",
                        Ṁ: "M",
                        Ṃ: "M",
                        Ɱ: "M",
                        Ń: "N",
                        Ň: "N",
                        Ņ: "N",
                        Ṋ: "N",
                        Ṅ: "N",
                        Ṇ: "N",
                        Ǹ: "N",
                        Ɲ: "N",
                        Ṉ: "N",
                        Ƞ: "N",
                        ǋ: "N",
                        Ñ: "N",
                        Ǌ: "NJ",
                        Ó: "O",
                        Ŏ: "O",
                        Ǒ: "O",
                        Ô: "O",
                        Ố: "O",
                        Ộ: "O",
                        Ồ: "O",
                        Ổ: "O",
                        Ỗ: "O",
                        Ö: "O",
                        Ȫ: "O",
                        Ȯ: "O",
                        Ȱ: "O",
                        Ọ: "O",
                        Ő: "O",
                        Ȍ: "O",
                        Ò: "O",
                        Ỏ: "O",
                        Ơ: "O",
                        Ớ: "O",
                        Ợ: "O",
                        Ờ: "O",
                        Ở: "O",
                        Ỡ: "O",
                        Ȏ: "O",
                        Ꝋ: "O",
                        Ꝍ: "O",
                        Ō: "O",
                        Ṓ: "O",
                        Ṑ: "O",
                        Ɵ: "O",
                        Ǫ: "O",
                        Ǭ: "O",
                        Ø: "O",
                        Ǿ: "O",
                        Õ: "O",
                        Ṍ: "O",
                        Ṏ: "O",
                        Ȭ: "O",
                        Ƣ: "OI",
                        Ꝏ: "OO",
                        Ɛ: "E",
                        Ɔ: "O",
                        Ȣ: "OU",
                        Ṕ: "P",
                        Ṗ: "P",
                        Ꝓ: "P",
                        Ƥ: "P",
                        Ꝕ: "P",
                        Ᵽ: "P",
                        Ꝑ: "P",
                        Ꝙ: "Q",
                        Ꝗ: "Q",
                        Ŕ: "R",
                        Ř: "R",
                        Ŗ: "R",
                        Ṙ: "R",
                        Ṛ: "R",
                        Ṝ: "R",
                        Ȑ: "R",
                        Ȓ: "R",
                        Ṟ: "R",
                        Ɍ: "R",
                        Ɽ: "R",
                        Ꜿ: "C",
                        Ǝ: "E",
                        Ś: "S",
                        Ṥ: "S",
                        Š: "S",
                        Ṧ: "S",
                        Ş: "S",
                        Ŝ: "S",
                        Ș: "S",
                        Ṡ: "S",
                        Ṣ: "S",
                        Ṩ: "S",
                        Ť: "T",
                        Ţ: "T",
                        Ṱ: "T",
                        Ț: "T",
                        Ⱦ: "T",
                        Ṫ: "T",
                        Ṭ: "T",
                        Ƭ: "T",
                        Ṯ: "T",
                        Ʈ: "T",
                        Ŧ: "T",
                        Ɐ: "A",
                        Ꞁ: "L",
                        Ɯ: "M",
                        Ʌ: "V",
                        Ꜩ: "TZ",
                        Ú: "U",
                        Ŭ: "U",
                        Ǔ: "U",
                        Û: "U",
                        Ṷ: "U",
                        Ü: "U",
                        Ǘ: "U",
                        Ǚ: "U",
                        Ǜ: "U",
                        Ǖ: "U",
                        Ṳ: "U",
                        Ụ: "U",
                        Ű: "U",
                        Ȕ: "U",
                        Ù: "U",
                        Ủ: "U",
                        Ư: "U",
                        Ứ: "U",
                        Ự: "U",
                        Ừ: "U",
                        Ử: "U",
                        Ữ: "U",
                        Ȗ: "U",
                        Ū: "U",
                        Ṻ: "U",
                        Ų: "U",
                        Ů: "U",
                        Ũ: "U",
                        Ṹ: "U",
                        Ṵ: "U",
                        Ꝟ: "V",
                        Ṿ: "V",
                        Ʋ: "V",
                        Ṽ: "V",
                        Ꝡ: "VY",
                        Ẃ: "W",
                        Ŵ: "W",
                        Ẅ: "W",
                        Ẇ: "W",
                        Ẉ: "W",
                        Ẁ: "W",
                        Ⱳ: "W",
                        Ẍ: "X",
                        Ẋ: "X",
                        Ý: "Y",
                        Ŷ: "Y",
                        Ÿ: "Y",
                        Ẏ: "Y",
                        Ỵ: "Y",
                        Ỳ: "Y",
                        Ƴ: "Y",
                        Ỷ: "Y",
                        Ỿ: "Y",
                        Ȳ: "Y",
                        Ɏ: "Y",
                        Ỹ: "Y",
                        Ź: "Z",
                        Ž: "Z",
                        Ẑ: "Z",
                        Ⱬ: "Z",
                        Ż: "Z",
                        Ẓ: "Z",
                        Ȥ: "Z",
                        Ẕ: "Z",
                        Ƶ: "Z",
                        Ĳ: "IJ",
                        Œ: "OE",
                        ᴀ: "A",
                        ᴁ: "AE",
                        ʙ: "B",
                        ᴃ: "B",
                        ᴄ: "C",
                        ᴅ: "D",
                        ᴇ: "E",
                        ꜰ: "F",
                        ɢ: "G",
                        ʛ: "G",
                        ʜ: "H",
                        ɪ: "I",
                        ʁ: "R",
                        ᴊ: "J",
                        ᴋ: "K",
                        ʟ: "L",
                        ᴌ: "L",
                        ᴍ: "M",
                        ɴ: "N",
                        ᴏ: "O",
                        ɶ: "OE",
                        ᴐ: "O",
                        ᴕ: "OU",
                        ᴘ: "P",
                        ʀ: "R",
                        ᴎ: "N",
                        ᴙ: "R",
                        ꜱ: "S",
                        ᴛ: "T",
                        ⱻ: "E",
                        ᴚ: "R",
                        ᴜ: "U",
                        ᴠ: "V",
                        ᴡ: "W",
                        ʏ: "Y",
                        ᴢ: "Z",
                        á: "a",
                        ă: "a",
                        ắ: "a",
                        ặ: "a",
                        ằ: "a",
                        ẳ: "a",
                        ẵ: "a",
                        ǎ: "a",
                        â: "a",
                        ấ: "a",
                        ậ: "a",
                        ầ: "a",
                        ẩ: "a",
                        ẫ: "a",
                        ä: "a",
                        ǟ: "a",
                        ȧ: "a",
                        ǡ: "a",
                        ạ: "a",
                        ȁ: "a",
                        à: "a",
                        ả: "a",
                        ȃ: "a",
                        ā: "a",
                        ą: "a",
                        ᶏ: "a",
                        ẚ: "a",
                        å: "a",
                        ǻ: "a",
                        ḁ: "a",
                        ⱥ: "a",
                        ã: "a",
                        ꜳ: "aa",
                        æ: "ae",
                        ǽ: "ae",
                        ǣ: "ae",
                        ꜵ: "ao",
                        ꜷ: "au",
                        ꜹ: "av",
                        ꜻ: "av",
                        ꜽ: "ay",
                        ḃ: "b",
                        ḅ: "b",
                        ɓ: "b",
                        ḇ: "b",
                        ᵬ: "b",
                        ᶀ: "b",
                        ƀ: "b",
                        ƃ: "b",
                        ɵ: "o",
                        ć: "c",
                        č: "c",
                        ç: "c",
                        ḉ: "c",
                        ĉ: "c",
                        ɕ: "c",
                        ċ: "c",
                        ƈ: "c",
                        ȼ: "c",
                        ď: "d",
                        ḑ: "d",
                        ḓ: "d",
                        ȡ: "d",
                        ḋ: "d",
                        ḍ: "d",
                        ɗ: "d",
                        ᶑ: "d",
                        ḏ: "d",
                        ᵭ: "d",
                        ᶁ: "d",
                        đ: "d",
                        ɖ: "d",
                        ƌ: "d",
                        ı: "i",
                        ȷ: "j",
                        ɟ: "j",
                        ʄ: "j",
                        ǳ: "dz",
                        ǆ: "dz",
                        é: "e",
                        ĕ: "e",
                        ě: "e",
                        ȩ: "e",
                        ḝ: "e",
                        ê: "e",
                        ế: "e",
                        ệ: "e",
                        ề: "e",
                        ể: "e",
                        ễ: "e",
                        ḙ: "e",
                        ë: "e",
                        ė: "e",
                        ẹ: "e",
                        ȅ: "e",
                        è: "e",
                        ẻ: "e",
                        ȇ: "e",
                        ē: "e",
                        ḗ: "e",
                        ḕ: "e",
                        ⱸ: "e",
                        ę: "e",
                        ᶒ: "e",
                        ɇ: "e",
                        ẽ: "e",
                        ḛ: "e",
                        ꝫ: "et",
                        ḟ: "f",
                        ƒ: "f",
                        ᵮ: "f",
                        ᶂ: "f",
                        ǵ: "g",
                        ğ: "g",
                        ǧ: "g",
                        ģ: "g",
                        ĝ: "g",
                        ġ: "g",
                        ɠ: "g",
                        ḡ: "g",
                        ᶃ: "g",
                        ǥ: "g",
                        ḫ: "h",
                        ȟ: "h",
                        ḩ: "h",
                        ĥ: "h",
                        ⱨ: "h",
                        ḧ: "h",
                        ḣ: "h",
                        ḥ: "h",
                        ɦ: "h",
                        ẖ: "h",
                        ħ: "h",
                        ƕ: "hv",
                        í: "i",
                        ĭ: "i",
                        ǐ: "i",
                        î: "i",
                        ï: "i",
                        ḯ: "i",
                        ị: "i",
                        ȉ: "i",
                        ì: "i",
                        ỉ: "i",
                        ȋ: "i",
                        ī: "i",
                        į: "i",
                        ᶖ: "i",
                        ɨ: "i",
                        ĩ: "i",
                        ḭ: "i",
                        ꝺ: "d",
                        ꝼ: "f",
                        ᵹ: "g",
                        ꞃ: "r",
                        ꞅ: "s",
                        ꞇ: "t",
                        ꝭ: "is",
                        ǰ: "j",
                        ĵ: "j",
                        ʝ: "j",
                        ɉ: "j",
                        ḱ: "k",
                        ǩ: "k",
                        ķ: "k",
                        ⱪ: "k",
                        ꝃ: "k",
                        ḳ: "k",
                        ƙ: "k",
                        ḵ: "k",
                        ᶄ: "k",
                        ꝁ: "k",
                        ꝅ: "k",
                        ĺ: "l",
                        ƚ: "l",
                        ɬ: "l",
                        ľ: "l",
                        ļ: "l",
                        ḽ: "l",
                        ȴ: "l",
                        ḷ: "l",
                        ḹ: "l",
                        ⱡ: "l",
                        ꝉ: "l",
                        ḻ: "l",
                        ŀ: "l",
                        ɫ: "l",
                        ᶅ: "l",
                        ɭ: "l",
                        ł: "l",
                        ǉ: "lj",
                        ſ: "s",
                        ẜ: "s",
                        ẛ: "s",
                        ẝ: "s",
                        ḿ: "m",
                        ṁ: "m",
                        ṃ: "m",
                        ɱ: "m",
                        ᵯ: "m",
                        ᶆ: "m",
                        ń: "n",
                        ň: "n",
                        ņ: "n",
                        ṋ: "n",
                        ȵ: "n",
                        ṅ: "n",
                        ṇ: "n",
                        ǹ: "n",
                        ɲ: "n",
                        ṉ: "n",
                        ƞ: "n",
                        ᵰ: "n",
                        ᶇ: "n",
                        ɳ: "n",
                        ñ: "n",
                        ǌ: "nj",
                        ó: "o",
                        ŏ: "o",
                        ǒ: "o",
                        ô: "o",
                        ố: "o",
                        ộ: "o",
                        ồ: "o",
                        ổ: "o",
                        ỗ: "o",
                        ö: "o",
                        ȫ: "o",
                        ȯ: "o",
                        ȱ: "o",
                        ọ: "o",
                        ő: "o",
                        ȍ: "o",
                        ò: "o",
                        ỏ: "o",
                        ơ: "o",
                        ớ: "o",
                        ợ: "o",
                        ờ: "o",
                        ở: "o",
                        ỡ: "o",
                        ȏ: "o",
                        ꝋ: "o",
                        ꝍ: "o",
                        ⱺ: "o",
                        ō: "o",
                        ṓ: "o",
                        ṑ: "o",
                        ǫ: "o",
                        ǭ: "o",
                        ø: "o",
                        ǿ: "o",
                        õ: "o",
                        ṍ: "o",
                        ṏ: "o",
                        ȭ: "o",
                        ƣ: "oi",
                        ꝏ: "oo",
                        ɛ: "e",
                        ᶓ: "e",
                        ɔ: "o",
                        ᶗ: "o",
                        ȣ: "ou",
                        ṕ: "p",
                        ṗ: "p",
                        ꝓ: "p",
                        ƥ: "p",
                        ᵱ: "p",
                        ᶈ: "p",
                        ꝕ: "p",
                        ᵽ: "p",
                        ꝑ: "p",
                        ꝙ: "q",
                        ʠ: "q",
                        ɋ: "q",
                        ꝗ: "q",
                        ŕ: "r",
                        ř: "r",
                        ŗ: "r",
                        ṙ: "r",
                        ṛ: "r",
                        ṝ: "r",
                        ȑ: "r",
                        ɾ: "r",
                        ᵳ: "r",
                        ȓ: "r",
                        ṟ: "r",
                        ɼ: "r",
                        ᵲ: "r",
                        ᶉ: "r",
                        ɍ: "r",
                        ɽ: "r",
                        ↄ: "c",
                        ꜿ: "c",
                        ɘ: "e",
                        ɿ: "r",
                        ś: "s",
                        ṥ: "s",
                        š: "s",
                        ṧ: "s",
                        ş: "s",
                        ŝ: "s",
                        ș: "s",
                        ṡ: "s",
                        ṣ: "s",
                        ṩ: "s",
                        ʂ: "s",
                        ᵴ: "s",
                        ᶊ: "s",
                        ȿ: "s",
                        ɡ: "g",
                        ᴑ: "o",
                        ᴓ: "o",
                        ᴝ: "u",
                        ť: "t",
                        ţ: "t",
                        ṱ: "t",
                        ț: "t",
                        ȶ: "t",
                        ẗ: "t",
                        ⱦ: "t",
                        ṫ: "t",
                        ṭ: "t",
                        ƭ: "t",
                        ṯ: "t",
                        ᵵ: "t",
                        ƫ: "t",
                        ʈ: "t",
                        ŧ: "t",
                        ᵺ: "th",
                        ɐ: "a",
                        ᴂ: "ae",
                        ǝ: "e",
                        ᵷ: "g",
                        ɥ: "h",
                        ʮ: "h",
                        ʯ: "h",
                        ᴉ: "i",
                        ʞ: "k",
                        ꞁ: "l",
                        ɯ: "m",
                        ɰ: "m",
                        ᴔ: "oe",
                        ɹ: "r",
                        ɻ: "r",
                        ɺ: "r",
                        ⱹ: "r",
                        ʇ: "t",
                        ʌ: "v",
                        ʍ: "w",
                        ʎ: "y",
                        ꜩ: "tz",
                        ú: "u",
                        ŭ: "u",
                        ǔ: "u",
                        û: "u",
                        ṷ: "u",
                        ü: "u",
                        ǘ: "u",
                        ǚ: "u",
                        ǜ: "u",
                        ǖ: "u",
                        ṳ: "u",
                        ụ: "u",
                        ű: "u",
                        ȕ: "u",
                        ù: "u",
                        ủ: "u",
                        ư: "u",
                        ứ: "u",
                        ự: "u",
                        ừ: "u",
                        ử: "u",
                        ữ: "u",
                        ȗ: "u",
                        ū: "u",
                        ṻ: "u",
                        ų: "u",
                        ᶙ: "u",
                        ů: "u",
                        ũ: "u",
                        ṹ: "u",
                        ṵ: "u",
                        ᵫ: "ue",
                        ꝸ: "um",
                        ⱴ: "v",
                        ꝟ: "v",
                        ṿ: "v",
                        ʋ: "v",
                        ᶌ: "v",
                        ⱱ: "v",
                        ṽ: "v",
                        ꝡ: "vy",
                        ẃ: "w",
                        ŵ: "w",
                        ẅ: "w",
                        ẇ: "w",
                        ẉ: "w",
                        ẁ: "w",
                        ⱳ: "w",
                        ẘ: "w",
                        ẍ: "x",
                        ẋ: "x",
                        ᶍ: "x",
                        ý: "y",
                        ŷ: "y",
                        ÿ: "y",
                        ẏ: "y",
                        ỵ: "y",
                        ỳ: "y",
                        ƴ: "y",
                        ỷ: "y",
                        ỿ: "y",
                        ȳ: "y",
                        ẙ: "y",
                        ɏ: "y",
                        ỹ: "y",
                        ź: "z",
                        ž: "z",
                        ẑ: "z",
                        ʑ: "z",
                        ⱬ: "z",
                        ż: "z",
                        ẓ: "z",
                        ȥ: "z",
                        ẕ: "z",
                        ᵶ: "z",
                        ᶎ: "z",
                        ʐ: "z",
                        ƶ: "z",
                        ɀ: "z",
                        ﬀ: "ff",
                        ﬃ: "ffi",
                        ﬄ: "ffl",
                        ﬁ: "fi",
                        ﬂ: "fl",
                        ĳ: "ij",
                        œ: "oe",
                        ﬆ: "st",
                        ₐ: "a",
                        ₑ: "e",
                        ᵢ: "i",
                        ⱼ: "j",
                        ₒ: "o",
                        ᵣ: "r",
                        ᵤ: "u",
                        ᵥ: "v",
                        ₓ: "x"
                    };
                    if (!e.normalize) return e;
                    const r = e.replace(/[^A-Za-z0-9[\] ]/g, (function (e) {
                        return t[e] || e
                    }));
                    return e.normalize("NFC").length == r.normalize("NFC").length ? r : ""
                }, escapeRegExp: e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), match(e, t, r) {
                    const n = new RegExp(t, r ? "g" : "gi"), o = [];
                    let i = n.exec(e);
                    for (; null != i;) o.push([i.index, i[0].length]), i = n.exec(e);
                    return o
                }, exec: (e, t) => new RegExp(e).exec(t)
            }
        }

        function I(e) {
            const t = new FileReader;
            return new Promise(((r, n) => {
                t.onerror = e => {
                    n(new Error(e))
                }, t.onload = e => {
                    var t;
                    r(new Uint8Array(null === (t = e.target) || void 0 === t ? void 0 : t.result))
                }, t.readAsArrayBuffer(e)
            }))
        }

        const E = "text", A = "documentA", F = "documentB", j = "result", P = "Maui_Android", k = "Maui_iOS",
            R = "Maui_MacCatalyst", D = "Maui_Windows", T = "FlutterForWeb", C = "Electron", U = "cms", L = "cades",
            N = "unableToShape", B = "requiresMoreFonts";

        async function M(e) {
            try {
                const r = await fetch(e).catch((r => {
                    throw new t(`Error fetching dynamic fonts file ${e}. ${r}`)
                }));
                if (200 !== r.status) throw new t(`Error fetching dynamic fonts file ${e}. Status code: ${r.status}`);
                return r
            } catch (e) {
                throw e
            }
        }

        var $;

        function J() {
            var e, t;
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null !== (e = null === (t = globalThis.navigator) || void 0 === t ? void 0 : t.userAgent) && void 0 !== e ? e : "";
            return r.indexOf("Trident/") > -1 ? "trident" : r.indexOf("Edge/") > -1 ? "edge" : r.indexOf("Chrome/") > -1 ? "blink" : r.indexOf("AppleWebKit/") > -1 ? "webkit" : r.indexOf("Gecko/") > -1 ? "gecko" : "unknown"
        }

        function z(e, t) {
            const r = new RegExp(` ${t}/(\\d+)\\.*`);
            let n;
            return (n = e.match(r)) ? Number(n[1]) : 0
        }

        function W() {
            var e, t, r, n, o, i;
            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null !== (e = null === (t = globalThis.navigator) || void 0 === t ? void 0 : t.userAgent) && void 0 !== e ? e : "",
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (r = null === (n = globalThis.navigator) || void 0 === n ? void 0 : n.platform) && void 0 !== r ? r : "",
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (o = null === (i = globalThis.navigator) || void 0 === i ? void 0 : i.maxTouchPoints) && void 0 !== o ? o : 0;
            return s.indexOf("MacIntel") > -1 && c > 1 ? "ios" : a.indexOf("Win") > -1 ? "windows" : a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1 || "iPad" === s ? "ios" : a.indexOf("Mac") > -1 ? "macos" : a.indexOf("Android") > -1 ? "android" : a.indexOf("Linux") > -1 ? "linux" : "unknown"
        }

        J();
        const q = W(), H = (function () {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = globalThis.navigator) || void 0 === e ? void 0 : e.userAgent;
            switch (J(t)) {
                case"trident":
                    return z(t, "Trident");
                case"edge":
                    return z(t, "Edge");
                case"blink":
                    return z(t, "Chrome");
                case"webkit":
                    return z(t, "Version");
                case"gecko":
                    return z(t, "Firefox");
                default:
                    ;
            }
        }(), function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W(),
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J();
            "ios" === e || "android" === e || V(t)
        }(), "ios" === q || V(), "ios" === q);

        function V() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J();
            return ("undefined" == typeof window || !window.PSPDFKIT_PLAYWRIGHT_TEST) && ("webkit" === e && "undefined" != typeof TouchEvent)
        }

        let G;
        "undefined" != typeof window && (window.addEventListener("mousemove", (function e() {
            G = !1, window.removeEventListener("mousemove", e)
        })), window.addEventListener("pointermove", (function e(t) {
            "mouse" !== t.pointerType && "pen" !== t.pointerType || (G = !1), window.removeEventListener("pointermove", e)
        })));
        /Mac/i.test(null === ($ = globalThis.navigator) || void 0 === $ ? void 0 : $.platform);

        function K() {
            return "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron/") >= 0
        }

        const Y = "/create.pdf";

        function X(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? X(Object(r), !0).forEach((function (t) {
                    f(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        const Q = "/save.pdf", ee = "/embedded.pdf", te = "WebAssembly module not loaded.";
        let re = null, ne = !1, oe = !1, ie = null, ae = [], se = null, ce = null, ue = null;
        const fe = new Set, le = "/fonts";
        let pe;
        const de = new Set;
        let he = !1;
        var ge = function (e) {
            return e[e.Daemon = 0] = "Daemon", e[e.WASM = 1] = "WASM", e
        }(ge || {});
        const me = [];

        function ve(e) {
            return null != e && null != e.length && 0 === e.length
        }

        const ye = ["configurePDFJavaScriptSupport", "closeDocument", "setFormValues", "openDocument", "saveDocument", "importXFDF", "importInstantDocumentJSON"],
            be = {
                annotationsAndForms: "annotations_and_forms",
                assemble: "assemble",
                extract: "extract",
                extractAccessibility: "extract_accessibility",
                fillForms: "fill_forms",
                modification: "modification",
                printHighQuality: "print_high_quality",
                printing: "printing"
            };

        function we(e) {
            let t;
            o(re, "WebAssembly module not loaded."), he && (t = performance.now());
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            const a = n.map((e => ve(e) ? JSON.stringify(e) : e));
            ye.includes(e) && Re();
            const s = re[e](...a) || '{ "success": true }', c = JSON.parse(s);
            if (he && me.push({
                type: ge.WASM,
                name: e,
                args: a,
                time: performance.now() - t
            }), !c.success) throw new Error(c.error);
            return c
        }

        function xe(e) {
            let t;
            o(re, "WebAssembly module not loaded."), he && (t = performance.now());
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            ye.includes(e) && Re();
            const a = n.map((e => ve(e) ? JSON.stringify(e) : e)), s = re[e](...a);
            return he && me.push({type: ge.WASM, name: e, args: a, time: performance.now() - t}), s
        }

        const Oe = ["run_pdf_formatting_scripts", "run_pdf_javascript", "set_form_values_get_script_changes", "edit_document", "prepare_sign", "sign", "on_keystroke_event", "save_document", "update_annotation"];

        function Se(e) {
            const t = new ArrayBuffer(2 * e.length), r = new Uint16Array(t);
            for (let t = 0, n = e.length; t < n; t++) r[t] = e.charCodeAt(t);
            return t
        }

        function _e(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            o(re, "WebAssembly module not loaded.");
            const n = JSON.stringify(Z({type: e}, t));
            let i, a;
            if (he && (i = performance.now()), Oe.includes(e) && Re(), r) try {
                const e = "string" == typeof r ? new Uint8Array(Se(r)) : new Uint8Array(r),
                    t = re.allocateMemory(e.byteLength);
                try {
                    t.view.set(e);
                    const r = re.memoryHandleToVector(t);
                    try {
                        a = re.dispatchCommandWithBinary(n, r)
                    } finally {
                        r.delete()
                    }
                } finally {
                    t.delete()
                }
            } catch (e) {
                throw e
            } else a = re.dispatchCommand(n);
            if (a.hasError()) {
                const t = new Error(a.getErrorMessage() || "There was an error while executing the command: " + e);
                throw a.delete(), t
            }
            const s = [];
            for (let e = 0; e < a.getRepliesCount(); e++) a.hasJSONReply(e) && s.push(JSON.parse(a.getJSONReply(e))), a.hasBinaryReply(e) && s.push(a.getBinaryReply(e).slice(0));
            return he && me.push({type: ge.Daemon, name: e, args: [n], time: performance.now() - i}), a.delete(), s
        }

        function Ie(e, t) {
            return `${e}/${t}.pdf`
        }

        async function Ee(e, t) {
            const r = Math.random().toString(36).slice(-5), n = await Promise.all(Object.entries(t).map((async t => {
                let [n, o] = t;
                return e.forEach((e => {
                    "document" in e && e.document === n && "importDocument" === e.type ? (!1 === e.treatImportedDocumentAsOnePage && (e.treatImportedDocumentAsOnePage = void 0), e.document = Ie(r, n)) : ("dataFilePath" in e && e.dataFilePath === n && "applyInstantJson" === e.type || "dataFilePath" in e && e.dataFilePath === n && "applyXfdf" === e.type) && (e.dataFilePath = Ie(r, n))
                })), {basename: n, buffer: await I(o)}
            })));
            return n.forEach((e => {
                !function (e, t, r) {
                    o(re, te), re.FS.analyzePath(e).exists || re.FS.mkdir(e), re.FS.writeFile(Ie(e, t), r)
                }(r, e.basename, e.buffer)
            })), function () {
                n.forEach((e => {
                    !function (e, t) {
                        o(re, te), re.FS.unlink(Ie(e, t))
                    }(r, e.basename)
                }))
            }
        }

        function Ae() {
            oe = !0;
            const e = we("configurePDFJavaScriptSupport", !0);
            return o(e.success, "An error occurred while executing the document level JavaScript."), e.changes || []
        }

        function Fe(e, t) {
            let r;
            try {
                r = _e("edit_document", {save_path: t, operations: e})
            } catch (e) {
                throw new Error(`Error applying operations to document: ${e.message}`)
            }
            return r
        }

        let je, Pe = null, ke = !1;

        function Re() {
            ke || (Pe = null, je = !1)
        }

        function De(e) {
            ke && !e && (ke = !1, Pe && Ce(Pe)), ke = e
        }

        function Te() {
            return null === Pe && (Pe = _e("read_form_json_objects", {include_line_height_factor: !1}), je = !1), Pe
        }

        function Ce(e) {
            if (ke) {
                if (null === e) throw ke = !1, new Error("Error enqueuing form JSON objects: form fields JSON is null.");
                return Pe && !je && (je = !0), void (Pe = e)
            }
            if (je || !ke) try {
                Re(), _e("apply_form_json_objects", {form_fields_with_widgets: e})
            } catch (e) {
                throw new Error("Error applying form JSON objects to /create.pdf: " + e.message)
            }
        }

        function Ue(e, t, r, n, i, a) {
            const s = Ne(i, {width: r, height: n});
            if (o("number" == typeof e.pageIndex, "Annotation must have a pageIndex"), !fe.has(e.pdfObjectId)) try {
                o("number" == typeof e.pdfObjectId, "Cannot call renderAnnotation() for an annotation without pdfObjectId.");
                const t = _e("render_annotation", {
                    page: e.pageIndex,
                    annotation_id: e.pdfObjectId,
                    format: s,
                    bitmap_width: r,
                    bitmap_height: n,
                    appearance_stream_type: a || "normal"
                });
                if ("bitmap" === s) return t[0];
                {
                    const e = new Blob([t[0]], {type: `image/${s}`});
                    return URL.createObjectURL(e)
                }
            } catch (e) {
                return void 0
            }
        }

        const Le = {
            SharePoint: "SPO",
            Salesforce: "SF",
            [k]: "MauiIOS",
            [P]: "MauiAndroid",
            [R]: "MauiMacCatalyst",
            [D]: "MauiWindows",
            [T]: "FlutterForWeb",
            NodeJS: "NodeJS",
            Electron: "Electron"
        };

        function Ne(e, t) {
            let {width: r, height: n} = t;
            return "webp" === e && (r > 16383 || n > 16383) || H && r * n > 16777216 && "bitmap" === e ? "png" : e
        }

        function Be(e) {
            const t = [];
            for (let r = 0; r < e.length; r++) t.push(be[e[r]]);
            return t
        }

        function Me(e, t) {
            return e.pdfObjectId === t.pdfObjectId
        }

        const $e = new class {
            constructor() {
                f(this, "_pdfObjectIdsForIds", {}), f(this, "comparisonDocuments", {}), f(this, "lastOpenedComparisonDocument", null), f(this, "persistedOpenDocument", null)
            }

            loadNativeModule(e, t) {
                let {disableWebAssemblyStreaming: r, enableAutomaticLinkExtraction: n, overrideMemoryLimit: o} = t;
                return ce = Date.now(), ne = n, ie = o, function (e, t) {
                    let r, n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : globalThis;
                    return new Promise((async a => {
                        r = S(e, t), "string" == typeof e && (n = await b(`${e}${x}`)), i("Using WASM method"), _(o), a({nativeModule: await n(r)})
                    }))
                }(e, r).then((e => {
                    let {nativeModule: t} = e;
                    re = t;
                    const r = we("PSPDFKitVersion").version;
                    if (1 !== r) throw new Error(`Native version mismatch. Please update the dependencies. Expected 1 but got ${r}.`)
                }))
            }

            async load(e, t, r) {
                let n, {mainThreadOrigin: a, customFonts: s, dynamicFonts: c, productId: u} = r;
                o(re, te);
                try {
                    if (re.FS.analyzePath(le).exists || re.FS.mkdir(le), pe = s ? "/fonts/custom-fonts" : "", s && !re.FS.analyzePath(pe).exists && function (e, t) {
                        o(re, te), re.FS.analyzePath(t).exists || re.FS.mkdir(t), re.FS.mount(re.FS.filesystems.WORKERFS, {blobs: e}, t)
                    }(s, pe), K() && (o(null == u || u === C, `PSPDFKit is running on Electron, but has been setup to be used with ${u}Please contact support to resolve the issue.`), u = C), n = re.initPSPDFKit(null == t ? "" : t, a, le, "", u && void 0 !== Le[u] ? Le[u] : ""), c) {
                        const e = await M(c);
                        _e("dynamic_font_loading/set_metadata_file", void 0, await e.arrayBuffer()), ue = c.split("/").slice(0, -1).join("/")
                    }
                } catch (e) {
                    throw e
                }
                const f = JSON.parse(n);
                if (ce && i(`Native initialization complete, took: ${Date.now() - ce}ms`), !f.success) throw new Error("Failed to initialize PSPDFKit: " + f.error);
                return f
            }

            getNativeModule() {
                return re
            }

            async openDocument(e, t, r) {
                try {
                    return o(re, te), null !== ie && we("overrideMemoryLimit", ie), se = t, re.FS.writeFile(Y, new Uint8Array(e)), this.openAndReturnDocumentInfo(r)
                } finally {
                    this._pdfObjectIdsForIds = {}
                }
            }

            async getSuggestedLineHeightFactor(e, t) {
                return _e("get_suggested_line_height_factor", {
                    annotation_ids: [e],
                    page: t
                })[0].line_height_factors[e.toString()]
            }

            async getAvailableFontFaces(e) {
                var t;
                if (!e) return [];
                return null === (t = _e("get_available_font_faces")[0]) || void 0 === t ? void 0 : t.font_faces.reduce(((t, r) => {
                    const n = e.find((e => e.name === r.path.replace(`${pe}/`, "")));
                    return n ? t.concat({readableName: r.fullName, name: n.name}) : t
                }), [])
            }

            async setFontSubstitutions(e) {
                try {
                    _e("set_font_substitutions", {substitutions: e})
                } catch (e) {
                    throw new Error("Error setting fonts substitutions: " + e.message)
                }
            }

            async getClosestSnapPoint(e, t) {
                return _e("get_closest_snap", {q: [e, t]})[0]
            }

            async configureSnapper(e) {
                _e("configure_snapper", {page: e})
            }

            async reloadDocument() {
                try {
                    return De(!1), we("closeDocument"), this.openAndReturnDocumentInfo()
                } finally {
                    this._pdfObjectIdsForIds = {}
                }
            }

            async openAndReturnDocumentInfo(e) {
                we("openDocument", Y, JSON.stringify({password: se})), oe && Ae(), we("automaticLinkExtraction", ne);
                const t = we("getDocumentInfo").documentInfo;
                if (t.pageCount <= 0) return t;
                let r = [];
                if ("number" == typeof e) {
                    const n = await this.getPageInfo(e);
                    for (let o = 0; o < t.pageCount; o++) {
                        const t = Z(Z({}, n), {}, {pageIndex: o, pageLabel: e === o ? n.pageLabel : String(o + 1)});
                        r.push(t)
                    }
                } else r = await this.getAllPageInfos(t.pageCount);
                return t.pages = r, t
            }

            async getPageInfo(e) {
                try {
                    const t = _e("page_info", {query: "page_info", page: e});
                    o(1 === t.length, "expected page_info result to return 1 result when specifying index.");
                    const r = (new TextDecoder).decode(t[0]);
                    return JSON.parse(r).pageInfo
                } catch (t) {
                    return s(`Dimensional information for page ${e} unavailable, page will not be displayed.`), {
                        height: 0,
                        matrix: [0, 0, 0, 0, 0, 0],
                        pageLabel: "",
                        reverseMatrix: [0, 0, 0, 0, 0, 0],
                        transformedBBox: [0, 0, 0, 0],
                        untransformedBBox: [0, 0, 0, 0],
                        width: 0,
                        pageIndex: e,
                        rawPdfBoxes: {bleedBox: null, cropBox: null, mediaBox: null, trimBox: null}
                    }
                }
            }

            async preflightRenderAnnotationText(e, t, r, n) {
                const i = () => "number" == typeof t && "number" == typeof r ? _e("dynamic_font_loading/preflight_annotation", {
                    text: e,
                    annotation_id: t,
                    page: r
                })[0] : (o(n, `annotation not set: ${n}`), _e("dynamic_font_loading/preflight_annotation", {
                    text: e,
                    annotation_json: n
                })[0]);
                try {
                    let e = i();
                    e.preflight_result === B && (await this.addDynamicFonts(e.required_fonts), e = i()), "number" == typeof t && (e.preflight_result === N ? fe.add(t) : fe.delete(t))
                } catch (r) {
                    s(`There was an error testing rendering for annotation ${t} of this text: ${e}: ${r.message}`)
                }
            }

            async addDynamicFonts(e) {
                let t = [];
                try {
                    t = e.filter((e => !de.has(e)));
                    !function (e) {
                        o(re, te), e.forEach((e => {
                            re.FS.analyzePath(`/fonts/${e.name}`).exists || re.FS.writeFile(`/fonts/${e.name}`, new Uint8Array(e.data))
                        }))
                    }((await Promise.all(t.map((e => fetch(`${ue}/${e}`).then((e => e.arrayBuffer())))))).map(((e, r) => ({
                        name: t[r],
                        data: e
                    })))), t.forEach((e => {
                        de.add(e)
                    }))
                } catch (e) {
                    t.forEach((e => {
                        de.delete(e)
                    })), s(`There was an error loading a font: ${e}`)
                }
                await _e("dynamic_font_loading/notify_fonts_added", {
                    added_fonts: t.map((e => ({
                        remote_file_path: e,
                        local_file_name: e
                    })))
                })
            }

            async getAllPageInfos(e) {
                const t = [];
                try {
                    const r = _e("page_info", {query: "page_info", page: "all"});
                    o(r.length === e, "expected the same length of page info response to page count.");
                    for (let e = 0; e < r.length; e++) {
                        const n = (new TextDecoder).decode(r[e]), o = JSON.parse(n);
                        t.push(o.pageInfo)
                    }
                } catch (r) {
                    s("There was an error retrieving page information for all pages from core. Reverting to individual queries.");
                    for (let r = 0; r < e; r++) try {
                        const e = _e("page_info", {query: "page_info", page: r});
                        o(1 === e.length, "expected page_info result to return 1 result when specifying index.");
                        const n = (new TextDecoder).decode(e[0]), i = JSON.parse(n);
                        t.push(i.pageInfo)
                    } catch (e) {
                        s(`Dimensional information for page ${r} unavailable, page will not be displayed.`);
                        const n = {
                            height: 0,
                            matrix: [0, 0, 0, 0, 0, 0],
                            pageLabel: "",
                            reverseMatrix: [0, 0, 0, 0, 0, 0],
                            transformedBBox: [0, 0, 0, 0],
                            untransformedBBox: [0, 0, 0, 0],
                            width: 0,
                            pageIndex: r,
                            rawPdfBoxes: {bleedBox: null, cropBox: null, mediaBox: null, trimBox: null}
                        };
                        t.push(n)
                    }
                }
                return t
            }

            async enablePDFJavaScriptSupport() {
                return Ae()
            }

            async runPDFFormattingScripts(e, t) {
                let r;
                o(oe, "PDF Formatting Scripts can only run after JavaScript is enabled.");
                try {
                    r = _e("run_pdf_formatting_scripts", {form_fqns: e, only_if_no_ap_stream: t})
                } catch (e) {
                    throw new Error("An error occurred while executing the document level JavaScript formatting.\n\n" + e.message)
                }
                return r[0].changes || []
            }

            async openDocumentAt() {
                throw new Error("Should never be called")
            }

            async getBookmarks() {
                const e = _e("get_bookmarks");
                return o(1 === e.length, "expected only one response for getBookmarks"), e[0].bookmarks || []
            }

            async getFormJSON() {
                return we("getFormJSON").formJSON
            }

            async getFormValues() {
                return we("getFormValues").formValues
            }

            async setFormValues(e) {
                const t = Te();
                let r = !1;
                const n = [], o = t.map((t => {
                    const o = e.find((e => e.name === t.formField.name));
                    return o ? o.value === t.value || Array.isArray(o.value) && Array.isArray(t.value) && o.value.every(((e, r) => e === t.value[r])) ? t : ("string" == typeof o.value && o.value.length > 0 ? n.push({
                        widgets: t.widgets,
                        text: o.value
                    }) : t.widgets.forEach((e => {
                        "number" == typeof e.pdfObjectId && fe.delete(e.pdfObjectId)
                    })), r = !0, Z(Z({}, t), {}, {value: o.value})) : t
                }));
                if (r) {
                    if (ue) for (let e = 0; e < n.length; e++) {
                        const t = n[e].widgets;
                        for (let r = 0; r < t.length; r++) await this.preflightWidgetAnnotation(t[r], t[r].pdfObjectId, n[e].text)
                    }
                    Ce(o)
                }
            }

            async setFormFieldValue(e) {
                await this.setFormValues([e])
            }

            async applyOperations(e, t) {
                const r = await Ee(e, t);
                Fe(e, Y), r()
            }

            async exportPDFWithOperations(e, t) {
                const r = await Ee(e, t);
                let n;
                o(re, te);
                try {
                    Fe(e, Q), n = re.FS.readFile(Q).buffer
                } catch (e) {
                    throw new Error("Error applying operations: " + e.message)
                }
                return r(), n
            }

            async getSignaturesInfo() {
                try {
                    return _e("get_signatures", {certificate_check_time: "current_time"})[0]
                } catch (e) {
                    throw new Error(`Error getting signatures info: ${e.message}`)
                }
            }

            async getComments() {
                try {
                    return _e("get_comments")
                } catch (e) {
                    throw new Error(`Error getting comments: ${e.message}`)
                }
            }

            async applyComments(e) {
                try {
                    return _e("apply_comments", {comments: e})
                } catch (e) {
                    throw new Error(`Error applying comments: ${e.message}`)
                }
            }

            async prepareSign(e, t, r, n, i, a) {
                let s;
                try {
                    s = _e("get_signatures", {certificate_check_time: "current_time"})[0];
                    const e = "not_signed" !== s.status;
                    we("saveDocument", Q, !1, e, false, false, "pdf", !1), we("openDocument", Q, JSON.stringify({password: se}))
                } catch (e) {
                    throw new Error(`Error saving document backup for invisible signing: ${e}`)
                }
                try {
                    const e = !r && "not_signed" !== s.status;
                    we("saveDocument", Y, r, e, false, false, "pdf", !1), r && (we("openDocument", Y, JSON.stringify({password: se})), oe && Ae())
                } catch (e) {
                    throw new Error(`Error saving document for invisible signing: ${e}`)
                }
                let c;
                try {
                    c = _e("prepare_sign", {
                        signer_data_source: Z(Z({}, e), {}, {
                            field_name: n,
                            position: i,
                            appearance: a,
                            type: "pspdfkit/signer-data-source"
                        }), signature_metadata: Z(Z({}, t), {}, {type: "pspdfkit/signature-metadata"})
                    })
                } catch (e) {
                    throw new Error(`Error preparing document for signing: ${e}`)
                }
                o(re, te);
                let u = null;
                return e && (null == e ? void 0 : e.signatureType) !== U || (u = re.FS.readFile(c[0].result.file_contents).buffer), re.FS.unlink(c[0].result.file_contents), {
                    file: c[0].result.file,
                    hash: c[0].result.hash,
                    signatureFormFieldName: c[0].result.signature_form_fqn,
                    dataToBeSigned: c[0].result.data_to_be_signed,
                    fileContents: u
                }
            }

            async getTimestampRequest(e, t) {
                try {
                    const [r] = _e("get_timestamp_http_request", {
                        timestamp_authority_info: {
                            url: t.url,
                            authenticationInfo: {username: t.username, password: t.password}
                        }, data_to_timestamp: e
                    });
                    return {
                        url: r.url,
                        method: r.method,
                        requestData: r.request_data,
                        contentType: r.content_type,
                        token: r.token,
                        username: r.user,
                        password: r.password
                    }
                } catch (e) {
                    throw new Error(`Error getting timestamp request: ${e.message}`)
                }
            }

            async getRevocationRequests(e) {
                try {
                    return _e("get_revocation_http_requests", {signing_certificates: e})
                } catch (e) {
                    throw new Error(`Error getting revocations requests: ${e.message}`)
                }
            }

            async setSignaturesLTV(e) {
                try {
                    const t = _e("get_signatures", {
                        certificate_check_time: "current_time",
                        revocation_responses: e
                    })[0];
                    return we("saveDocument", Y, !1, !0, !1, !1, "pdf", !1), t
                } catch (e) {
                    throw new Error(`Error getting signatures info: ${e.message}`)
                }
            }

            async sign(e, t, r, n, o, i, a, s) {
                let c;
                try {
                    var u;
                    let f;
                    n === L && Array.isArray(i) && i.length > 0 && (f = _e("create_signature", {
                        signatureType: n,
                        hash: r,
                        signed_data: o,
                        certificates: i,
                        timestamp_response: a
                    })), c = _e("sign", {
                        password: se,
                        save_path: Y,
                        file_path: e,
                        signature_form_fqn: t,
                        pkcs7_container: (null === (u = f) || void 0 === u ? void 0 : u[0].result) || o,
                        revocation_responses: null != s ? s : []
                    }), we("openDocument", Y, JSON.stringify({password: se})), oe && Ae()
                } catch (e) {
                    throw new Error(`Error signing document: ${e}`)
                }
                return c[0].result
            }

            async restoreToOriginalState() {
                try {
                    we("openDocument", Q, JSON.stringify({password: se})), oe && Ae();
                    const e = "not_signed" !== _e("get_signatures", {certificate_check_time: "current_time"})[0].status;
                    we("saveDocument", Y, !1, e, !1, !1, "pdf", !1), we("openDocument", Y, JSON.stringify({password: se})), oe && Ae()
                } catch (e) {
                    throw new Error(`Could not restore backup document: ${e}`)
                }
            }

            async evalFormValuesActions(e) {
                const t = Te().reduce(((t, r) => e.find((e => {
                    let {name: t} = e;
                    return r.formField.name === t
                })) && "pspdfkit/form-field/text" === r.formField.type ? t.concat(r) : t), []);
                if (ue) for (let n = 0; n < t.length; n++) {
                    const o = t[n].widgets;
                    for (let n = 0; n < o.length; n++) {
                        var r;
                        await this.preflightWidgetAnnotation(o[n], o[n].pdfObjectId, null === (r = e.find((e => t[n].formField.name === e.name))) || void 0 === r ? void 0 : r.value)
                    }
                }
                const n = _e("set_form_values_get_script_changes", {form_values: e});
                return o(1 === n.length, "expected only one response for evalFormValuesActions"), this._processChanges(n[0].changes)
            }

            async readFormJSONObjects() {
                return Te()
            }

            async setFormJSONUpdateBatchMode(e) {
                await De(e)
            }

            _processChanges(e) {
                return e.map((e => {
                    var t;
                    return "pspdfkit/javascript/effects/importIcon" === e.object.type ? Z(Z({}, e), {}, {
                        object: Z(Z({}, e.object), {}, {
                            id: null === (t = Object.entries(this._pdfObjectIdsForIds).find((t => {
                                let [, r] = t;
                                return r === e.object.annotationID
                            }))) || void 0 === t ? void 0 : t[0]
                        })
                    }) : e
                }))
            }

            async evalScript(e, t, r) {
                const n = _e("run_pdf_javascript", {
                    pdf_javascript_contents: e,
                    pdf_javascript_trigger_event: t,
                    pdf_javascript_form_fqn: r
                });
                return o(1 === n.length, "expected only one response for evalScript"), this._processChanges(n[0].changes)
            }

            async closeDocument() {
                try {
                    return ae = [], se = null, oe = !1, Pe = null, ke = !1, je = !1, we("closeDocument")
                } finally {
                    this._pdfObjectIdsForIds = {}
                }
            }

            async renderAnnotation(e, t, r, n, o, i) {
                return Ue(Z(Z({}, e), {}, {pdfObjectId: this._getPdfObjectIdForObject(e)}), t && await I(t), r, n, o, i)
            }

            async renderPageAnnotations(e, t, r, n, o) {
                return t.map(((t, i) => Ue({pdfObjectId: t, pageIndex: e}, 0, r[i], n[i], Ne(o, {
                    width: r[i],
                    height: n[i]
                }))))
            }

            async renderDetachedAnnotation(e, t, r, n, i) {
                o(re, te), !ue || "pspdfkit/stamp" !== e.type && "pspdfkit/text" !== e.type || await this.preflightAnnotation(e, e.pdfObjectId);
                const a = t ? await I(t) : null, s = t ? t.type : null;
                let c, u;
                const f = new re.VectorUint8;
                try {
                    if (null != a) for (let e = 0; e < a.byteLength; e++) f.push_back(a[e]);
                    if (u = xe("renderDetachedAnnotation", i, JSON.stringify(Z(Z({}, e), {}, {
                        pdfObjectId: this._getPdfObjectIdForObject(e),
                        pageIndex: 0
                    })), 0, r, n, f, s || ""), u.hasError() || 1 !== u.getRepliesCount()) {
                        const e = u.getErrorMessage(), t = u.getErrorReason();
                        throw new Error(t + ": " + e)
                    }
                    c = u.getBinaryReply(0).slice(0)
                } finally {
                    f && f.delete(), u && u.delete()
                }
                return c
            }

            async loadCertificates(e) {
                if (_e("load_certificates", {certificates: e}).length > 0) throw new t("Internal error while loading certificates")
            }

            async getAttachment(e) {
                let t, r, n;
                const o = await this.getEmbeddedFilesList(), i = null == o ? void 0 : o.map((e => e.id)),
                    a = null == i ? void 0 : i.includes(e);
                try {
                    if (a) _e("extract_embedded_file", {id: e, file_path: ee}), t = re.FS.readFile(ee).buffer; else {
                        if (r = xe("getAnnotationAttachment", e), r.hasError() || 1 !== r.getRepliesCount()) {
                            const e = r.getErrorMessage(), t = r.getErrorReason();
                            throw new Error("Error fetching attachment: " + t + ", " + e)
                        }
                        n = JSON.parse(r.getJSONReply(0)).encoding, t = r.getBinaryReply(0).slice(0)
                    }
                } finally {
                    var s;
                    null !== (s = re.FS.analyzePath(ee)) && void 0 !== s && s.exists && re.FS.unlink(ee), r && r.delete()
                }
                return [t, n]
            }

            async textForPageIndex(e) {
                return we("textForPageIndex", e).textBlocks
            }

            async contentTreeForPageIndex(e) {
                return _e("get_content_tree", {pageIndex: e})
            }

            async annotationsForPageIndex(e) {
                const t = we("annotationsForPageIndex", e);
                return ["rollover", "down"].forEach((e => {
                    var r;
                    null === (r = t.apstream_variants) || void 0 === r || null === (r = r[e]) || void 0 === r || r.forEach((r => {
                        const n = t.annotations.find((e => e.pdfObjectId === r));
                        n ? n[e] = !0 : t.annotations.push({pdfObjectId: r, [e]: !0})
                    }))
                })), t.annotations
            }

            async getTabOrder(e) {
                return _e("get_annotation_tab_order", {page: e})[0].order.map((e => {
                    const t = Object.entries(this._pdfObjectIdsForIds).find((t => {
                        let [r, n] = t;
                        return n === e
                    }));
                    return {id: (null == t ? void 0 : t[0]) || String(e), pdfObjectId: e}
                }))
            }

            async setTabOrder(e, t) {
                _e("set_annotation_tab_order", {page: e, order: t.map((e => this._getPdfObjectIdForObject(e)))})
            }

            async createAnnotation(e, t) {
                o(re, te), o("number" == typeof e.pageIndex, "Annotation must have a pageIndex");
                const r = e.pdfObjectId, n = t ? await I(t) : null;
                let i;
                const a = new re.VectorUint8;
                try {
                    if (null != n) for (let e = 0; e < n.byteLength; e++) a.push_back(n[e]);
                    "pspdfkit/widget" === e.type && (De(!1), Re());
                    const t = ("pspdfkit/shape/ellipse" === e.type || "pspdfkit/shape/rectangle" === e.type) && e.measurementScale ? Z(Z({}, e), {}, {measurementBBox: e.bbox}) : e;
                    i = we("createAnnotation", JSON.stringify(Z(Z({}, t), {}, {pdfObjectId: null})), a)
                } finally {
                    a && a.delete()
                }
                return "number" == typeof r && "number" == typeof this._pdfObjectIdsForIds[r.toString()] && delete this._pdfObjectIdsForIds[r.toString()], this._pdfObjectIdsForIds[e.id || i.pdfObjectId.toString()] = i.pdfObjectId, e && this.canPreflightAnnotation(e) && ue && await this.preflightAnnotation(e, i.pdfObjectId), i.pdfObjectId
            }

            async updateAnnotation(e) {
                const t = Z(Z({}, e), {}, {pdfObjectId: this._getPdfObjectIdForObject(e)});
                if (o(t.id, "Annotation must have an ID"), o("number" == typeof t.pageIndex, "Annotation must have a pageIndex"), "pspdfkit/widget" === t.type) {
                    const e = Te(), r = "number" == typeof t.pdfObjectId ? t.pdfObjectId.toString() : t.id;
                    Ce(e.map((e => e.formField.annotationIds.includes(r) || e.formField.annotationIds.includes(String(t.pdfObjectId)) ? Z(Z({}, e), {}, {widgets: e.widgets.map((e => e.id === r || String(e.pdfObjectId) === r ? t : e))}) : e)))
                } else e && this.canPreflightAnnotation(e) && ue && await this.preflightAnnotation(e, t.pdfObjectId), we("updateAnnotation", JSON.stringify(t), 0, 0)
            }

            async updateButtonIcon(e, t, r) {
                _e("update_annotation", {
                    annotation: Z(Z({}, e), {}, {
                        pdfObjectId: this._getPdfObjectIdForObject(e),
                        contentType: r
                    })
                }, t)
            }

            async deleteAnnotation(e) {
                var t;
                if (e.APStreamCache && await this.updateAnnotation(e), "pspdfkit/widget" === e.type) try {
                    const t = e.id;
                    Ce(Te().map((r => {
                        if (r.formField.annotationIds.includes(t) || r.formField.annotationIds.includes(String(e.pdfObjectId))) {
                            let n, o = r.value;
                            if (("pspdfkit/form-field/checkbox" === r.formField.type || "pspdfkit/form-field/radio" === r.formField.type) && r.formField.options.length === r.formField.annotationIds.length) {
                                const i = r.formField.annotationIds.includes(t) ? r.formField.annotationIds.indexOf(t) : r.formField.annotationIds.indexOf(String(e.pdfObjectId));
                                n = r.formField.options.filter(((e, t) => t !== i)), n.some((e => e.value === o)) || (o = "")
                            }
                            const i = r.widgets.filter((e => t !== e.id)),
                                a = r.formField.annotationIds.filter((r => r !== t && r !== String(e.pdfObjectId)));
                            return i.length > 0 && a.length > 0 ? Z(Z({}, r), {}, {
                                formField: Z(Z({}, r.formField), {}, {annotationIds: a}, n ? {options: n} : null),
                                widgets: i,
                                value: o
                            }) : null
                        }
                        return r
                    })).filter(Boolean))
                } catch (e) {
                    throw e
                } else try {
                    _e("remove_annotations", {annotation_ids: [this._getPdfObjectIdForObject(e)]})
                } catch (t) {
                    a(`Removing annotation failed for annotation: ${JSON.stringify(e)}`)
                }
                delete this._pdfObjectIdsForIds[e.id || (null === (t = e.pdfObjectId) || void 0 === t ? void 0 : t.toString())], fe.delete(e.pdfObjectId)
            }

            async createFormField(e, t) {
                const r = Te().concat([{type: "pspdfkit/form-field-with-widgets", formField: e, widgets: t}]), n = ke;
                ke && De(!1), Ce(r);
                const o = Te();
                n && De(!0);
                const i = o.find((t => t.formField.name === e.name));
                if (!i) throw new Error(`Error creating new form field in /create.pdf: created form field not found. ${JSON.stringify({
                    type: "pspdfkit/form-field-with-widgets",
                    formField: e,
                    widgets: t
                })}`);
                const a = i.widgets.map((e => (this._pdfObjectIdsForIds[e.id] = e.pdfObjectId, e.pdfObjectId)));
                return "number" == typeof e.pdfObjectId && "number" == typeof this._pdfObjectIdsForIds[e.pdfObjectId.toString()] && delete this._pdfObjectIdsForIds[e.pdfObjectId.toString()], this._pdfObjectIdsForIds[e.id || i.formField.pdfObjectId.toString()] = i.formField.pdfObjectId, a
            }

            async updateFormField(e, t) {
                let r = Z(Z({}, e), {}, {pdfObjectId: this._pdfObjectIdsForIds[e.id] || this._getPdfObjectIdForObject(e)});
                const n = Te(), o = n.find((t => Me(t.formField, r) || t.formField.name === e.name));
                if (!o) throw new Error(`Error updating form field with name "${e.name}" in /create.pdf: form field not found. ${JSON.stringify(n)}`);
                const i = o.formField.name !== e.name;
                let a = null;
                if (i && "pspdfkit/form-field/radio" === r.type) {
                    const o = e.name, i = n.find((e => e.formField.name === o));
                    i && "pspdfkit/form-field/radio" === i.formField.type && (r = Z(Z({}, r), {}, {
                        annotationIds: [...r.annotationIds, ...i.formField.annotationIds],
                        options: [...r.options, ...i.formField.options]
                    }), t = [...t, ...i.widgets], a = i)
                }
                Ce(n.map((n => {
                    if (a && a.formField.pdfObjectId === n.formField.pdfObjectId) return null;
                    if (Me(n.formField, r) || n.formField.name === e.name) {
                        const o = Z({
                            type: "pspdfkit/form-field-with-widgets",
                            formField: Z(Z({}, n.formField), r),
                            widgets: t.reduce(((e, t) => [...e, Z(Z({}, n.widgets.find((e => e.id === t.id || e.pdfObjectId === t.pdfObjectId))), t)]), [])
                        }, void 0 !== n.value ? {value: n.value} : null);
                        return e.flags || delete o.formField.flags, o
                    }
                    return n
                })).filter(Boolean));
                const s = Te().find((t => t.formField.name === e.name));
                if (!s) throw new Error(`Error updating form field "${e.name}" in /create.pdf: updated form field not found. ${JSON.stringify({
                    type: "pspdfkit/form-field-with-widgets",
                    formField: e,
                    widgets: t
                })}`);
                s.formField.pdfObjectId !== r.pdfObjectId && (this._pdfObjectIdsForIds[r.id] = s.formField.pdfObjectId), null == o || o.widgets.forEach((e => {
                    t.some((t => t.id === e.id)) || delete this._pdfObjectIdsForIds[e.id]
                }))
            }

            async deleteFormField(e) {
                const t = Te(), r = t.find((t => t.formField.name === e.name));
                if (!r) return;
                Ce(t.filter((t => t.formField.name !== e.name)));
                const n = Te().find((t => t.formField.name === e.name));
                if (n) throw new Error(`Error deleting form field with name "${e.name}" in /create.pdf: form field still present. ${JSON.stringify(n)}`);
                r.widgets.forEach((e => {
                    delete this._pdfObjectIdsForIds[e.id]
                }))
            }

            async deleteFormFieldValue(e) {
                Ce(Te().map((t => t.formField.name === e ? {
                    formField: t.formField,
                    widgets: t.widgets,
                    type: t.type
                } : t)))
            }

            canPreflightAnnotation(e) {
                return "pspdfkit/text" === e.type || "pspdfkit/stamp" === e.type
            }

            async preflightAnnotation(e, t) {
                var r;
                if (!this.canPreflightAnnotation(e)) return;
                const n = "pspdfkit/stamp" === e.type ? e.title : null === (r = e.text) || void 0 === r ? void 0 : r.value;
                "number" != typeof t || n ? n && await this.preflightRenderAnnotationText(n, t, e.pageIndex, Z(Z({}, e), {}, {
                    pdfObjectId: this._getPdfObjectIdForObject(e),
                    pageIndex: 0
                })) : fe.delete(t)
            }

            async preflightWidgetAnnotation(e, t, r) {
                r || "number" != typeof t ? r && await this.preflightRenderAnnotationText(r, t, e.pageIndex) : fe.delete(t)
            }

            async createBookmark(e) {
                try {
                    _e("append_bookmarks", {bookmarks: [e]})
                } catch (e) {
                    throw new Error(`Error creating new bookmark in /create.pdf: ${e.message}`)
                }
            }

            async updateBookmark(e) {
                try {
                    var t;
                    _e("remove_bookmarks", {bookmarkIds: [null !== (t = e.id) && void 0 !== t ? t : e.pdfBookmarkId]}), _e("append_bookmarks", {bookmarks: [e]})
                } catch (e) {
                    throw new Error(`Error updating bookmark in /create.pdf: ${e.message}`)
                }
            }

            async deleteBookmark(e) {
                try {
                    _e("remove_bookmarks", {bookmarkIds: [e]})
                } catch (e) {
                    throw new Error(`Error deleting bookmark in /create.pdf: ${e.message}`)
                }
            }

            async getTextFromRects(e, t) {
                return we("getTextFromRects", e, JSON.stringify(t.map((e => [e.left, e.top, e.width, e.height])))).text
            }

            async search(e, t, r, n) {
                return _e("search", {
                    query: e,
                    start_index: t,
                    limit: r,
                    case_sensitive: n,
                    search_type: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E
                })
            }

            async parseXFDF(e, t) {
                try {
                    return function (e) {
                        try {
                            const t = (new TextDecoder).decode(e);
                            return JSON.parse(t)
                        } catch (e) {
                            throw e
                        }
                    }(_e("convert_xfdf_to_instant_json", {ignore_page_rotation: t}, e)[0])
                } catch (e) {
                    throw e
                }
            }

            async getEmbeddedFilesList() {
                return _e("list_embedded_files")[0].embeddedFiles || null
            }

            async getMeasurementSnappingPoints(e) {
                const t = _e("get_snapping_points", {page: e});
                return t[0].snappingPoints ? function (e) {
                    const t = [...e.endpoints, ...e.intersections, ...e.midpoints], r = [];
                    for (let e = 0; e < t.length; e += 2) {
                        const n = [t[e], t[e + 1]];
                        r.push(n)
                    }
                    return r.sort(((e, t) => e[0] == t[0] ? e[1] - t[1] : e[0] - t[0]))
                }(t[0].snappingPoints) : null
            }

            async getSecondaryMeasurementUnit() {
                try {
                    return _e("get_secondary_measurement_unit")[0] || null
                } catch (e) {
                    throw new Error(`Error getting secondary measurement: ${e.message}`)
                }
            }

            async compareDocuments(e) {
                try {
                    o(e.originalDocument.arrayBuffer, "Original document arrayBuffer is missing"), o(e.changedDocument.arrayBuffer, "Changed document arrayBuffer is missing"), re.FS.writeFile("documentA.pdf", new Uint8Array(e.originalDocument.arrayBuffer)), re.FS.writeFile("documentB.pdf", new Uint8Array(e.changedDocument.arrayBuffer));
                    const t = {
                        originalDocument: Z(Z({}, e.originalDocument), {}, {filePath: "documentA.pdf"}),
                        changedDocument: Z(Z({}, e.changedDocument), {}, {filePath: "documentB.pdf"}),
                        comparisons: [e.comparisonOperation]
                    };
                    return _e("document_comparison", t) || null
                } catch (e) {
                    throw new Error(`Error comparing documents: ${e.message}`)
                }
            }

            async setSecondaryMeasurementUnit(e) {
                try {
                    _e("set_secondary_measurement_unit", e ? {
                        unitTo: null == e ? void 0 : e.unitTo,
                        precision: null == e ? void 0 : e.precision
                    } : null)
                } catch (e) {
                    a("Error setting secondary measurement unit")
                }
            }

            async getMeasurementScales() {
                try {
                    return _e("get_measurement_content_formats")[0] || null
                } catch (e) {
                    throw new Error(`Error getting measurement scales: ${e.message}`)
                }
            }

            async removeMeasurementScale(e) {
                try {
                    _e("remove_measurement_content_format", {measurementContentFormat: l(e)})
                } catch (t) {
                    throw new Error(`Error removing ${e.name} measurement scale: ${t.message}`)
                }
            }

            async addMeasurementScale(e) {
                try {
                    _e("add_measurement_content_format", {measurementContentFormat: l(e)})
                } catch (t) {
                    throw new Error(`Error adding ${e.name} measurement scale: ${t.message}`)
                }
            }

            async getAnnotationsByScale(e) {
                try {
                    return _e("get_annotations_for_measurement_content_format", {measurementContentFormat: l(e)}) || null
                } catch (e) {
                    throw e
                }
            }

            async exportFile(e, t, r, n, i, a, s, c) {
                let u, f = {mimeType: "application/pdf", extension: "pdf"};
                try {
                    const o = !1;
                    u = _e("save_document", Z({
                        file_path: Y,
                        format: n,
                        flatten_annotations: e,
                        save_incrementally: t,
                        apply_redactions: o,
                        save_for_printing: r,
                        remove_all_annotations: i,
                        preserve_change_tracker_state: a
                    }, s ? {
                        user_password: s.userPassword,
                        owner_password: s.ownerPassword,
                        document_permissions: Be(s.documentPermissions)
                    } : null)), c && (c.forEach((e => {
                        let {pageIndex: t, id: r, pdfObjectId: n} = e;
                        _e("electronic_signatures/flatten", {
                            page: t,
                            annotation_id: this._getPdfObjectIdForObject({id: r, pdfObjectId: n})
                        })
                    })), u = _e("save_document", Z({
                        file_path: Q,
                        format: n,
                        flatten_annotations: e,
                        save_incrementally: t,
                        apply_redactions: o,
                        save_for_printing: r,
                        remove_all_annotations: i,
                        preserve_change_tracker_state: a
                    }, s ? {
                        user_password: s.userPassword,
                        owner_password: s.ownerPassword,
                        document_permissions: Be(s.documentPermissions)
                    } : null)))
                } catch (e) {
                    throw new Error(`Error saving to /save.pdf: ${e.message}`)
                }
                const l = u[0];
                l.format && (f = {mimeType: l.format.mime_type, extension: l.format.extension}), o(re, te);
                const p = re.FS.readFile(c ? Q : Y).buffer;
                return c && (we("closeDocument"), we("openDocument", Y, JSON.stringify({password: se}))), [p, f]
            }

            async importXFDF(e, t, r) {
                ae.push({source: e, keepCurrentAnnotations: t}), t || function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    e.push("pspdfkit/widget"), we("removeAllAnnotations", JSON.stringify(e), JSON.stringify(t))
                }(), we("importXFDF", e, r)
            }

            async exportXFDF(e) {
                return we("exportXFDF", [], [], e).XFDF
            }

            async importInstantJSON(e) {
                we("importInstantDocumentJSON", JSON.stringify(e))
            }

            async exportInstantJSON(e) {
                const t = ke;
                ke && De(!1);
                const r = we("exportInstantDocumentJSON", "number" == typeof e ? e : -1);
                return t && De(!0), JSON.parse(r.InstantDocumentJSON)
            }

            async getDocumentOutline() {
                const e = _e("get_outline");
                return o(1 === e.length, "expected only one response for getDocumentOutline"), e[0].outline || []
            }

            async setDocumentOutline(e) {
                return _e("set_outline", {outline: e})
            }

            async getPageGlyphs(e) {
                return _e("get_glyphs", {page: e})[0].glyphs || []
            }

            async onKeystrokeEvent(e) {
                const t = _e("on_keystroke_event", {pdf_javascript_event: e});
                o(1 === t.length, "expected only one response for onKeystrokeEvent");
                const r = t[0].changes || [];
                return o(r.length > 0 && 4 === r[0].change_type, "expected onKeystrokeEvent to return at least one JavaScript Event change."), r
            }

            async version() {
                return we("PSPDFKitVersion").version
            }

            getImportedXFDF() {
                return ae
            }

            async applyRedactions() {
                try {
                    we("saveDocument", Y, !1, !1, !0, !1, "pdf", !1)
                } catch (e) {
                    throw new Error(`Error applying redactions and saving to /create.pdf: ${e.message}`)
                }
            }

            async clearAPStreamCache() {
                we("clearAPStreamCache")
            }

            async setComparisonDocument(e, t) {
                this.comparisonDocuments[e] = t || (await this.exportFile(!1, !1, !1, "pdf", !1, !1))[0]
            }

            async openComparisonDocument(e) {
                return o(this.comparisonDocuments[e]), e === this.lastOpenedComparisonDocument || e === A && null === this.lastOpenedComparisonDocument && this.persistedOpenDocument instanceof ArrayBuffer ? null : (this.lastOpenedComparisonDocument = e, this.openDocument(this.comparisonDocuments[e], this.persistedOpenDocument === e ? this.persistedOpenDocumentPassword : void 0))
            }

            async documentCompareAndOpen(e) {
                o(this.comparisonDocuments[A] && this.comparisonDocuments[F], "One or both comparison input documents are missing.");
                const t = `${A}.pdf`, r = `${F}.pdf`;
                re.FS.writeFile(t, new Uint8Array(this.comparisonDocuments[A])), re.FS.writeFile(r, new Uint8Array(this.comparisonDocuments[F]));
                return _e("comparison", {
                    documentA: {
                        strokeColor: e.documentA.strokeColor,
                        pageIndex: e.documentA.pageIndex,
                        filePath: t
                    },
                    documentB: {strokeColor: e.documentB.strokeColor, pageIndex: e.documentB.pageIndex, filePath: r},
                    options: Z(Z({}, e.options), {}, {outputFilePath: "output.pdf"})
                }), await this.closeDocument(), this.comparisonDocuments[j] = re.FS.readFile("output.pdf").buffer, this.lastOpenedComparisonDocument = j, this.openDocument(this.comparisonDocuments[j], void 0)
            }

            async persistOpenDocument(e) {
                if (e) this.persistedOpenDocument = e; else try {
                    this.persistedOpenDocument = (await this.exportFile(!1, !1, !1, "pdf", !1, !0))[0]
                } catch (e) {
                    throw new Error(`Error trying to persist a copy of the currently opened document: ${e.message}`)
                }
                this.persistedOpenDocumentPassword = se
            }

            async cleanupDocumentComparison() {
                o(this.persistedOpenDocument, "No persisted previous document key or array buffer is available.");
                const e = this.persistedOpenDocument instanceof ArrayBuffer ? this.persistedOpenDocument : this.comparisonDocuments[this.persistedOpenDocument];
                o(e, "No persisted previous array buffer is available.");
                try {
                    await this.closeDocument()
                } catch (e) {
                    throw new Error(`Error trying to close the current document: ${e.message}`)
                }
                const t = this.openDocument(e, this.persistedOpenDocumentPassword);
                return this.persistedOpenDocument = null, this.persistedOpenDocumentPassword = null, this.lastOpenedComparisonDocument = null, this.comparisonDocuments = {}, t
            }

            _getPdfObjectIdForObject(e) {
                return "number" == typeof e.pdfObjectId ? e.pdfObjectId : this._pdfObjectIdsForIds[e.id]
            }

            async getOCGs() {
                return _e("ocg/get_ocgs")[0].ocgs
            }

            async getOCGVisibilityState() {
                return {visibleLayerIds: _e("ocg/get_visibility_state")[0].state.visible}
            }

            async setOCGVisibilityState(e) {
                return _e("ocg/set_visibility_state", {state: {visible: e.visibleLayerIds}})
            }

            async dispatchCommand(e) {
                let t, r = null;
                he && (t = performance.now());
                try {
                    if (r = await re.dispatchCommand(e), null === r) throw Error("dispatchCommand returned null");
                    if (r.hasError()) return {success: !1, message: r.getErrorMessage(), code: r.getErrorReason()};
                    const n = {success: !0, values: []};
                    for (let e = 0; e < r.getRepliesCount(); e++) r.hasJSONReply(e) && n.values.push(JSON.parse(r.getJSONReply(e))), r.hasBinaryReply(e) && n.values.push(r.getBinaryReply(e).slice(0));
                    if (he) {
                        const r = JSON.parse(e);
                        me.push({type: ge.Daemon, name: r.type, args: r, time: performance.now() - t})
                    }
                    return n
                } finally {
                    r && r.delete()
                }
            }

            async getCoreCallRecording() {
                return me
            }

            async enableCoreCallRecording(e) {
                he = e
            }

            recycle() {
            }

            destroy() {
            }
        }, Je = self;
        Je.global = Je, Je.module = {}, Je.onmessage = async e => {
            let t, r, {data: n} = e;
            try {
                const e = await $e[n.action](...n.args);
                if (t = {id: n.id, result: e}, Array.isArray(e)) {
                    const t = e.filter((e => e instanceof ArrayBuffer));
                    t.length > 0 && (r = t)
                }
                e instanceof ArrayBuffer && (r = [e])
            } catch (e) {
                const o = [...n.args].filter((e => e instanceof ArrayBuffer));
                o.length > 0 && (r = o), t = {id: n.id, error: e.message || e.toString(), callArgs: n.args}
            }
            Je.postMessage(t, r)
        }
    })(), n
})()));