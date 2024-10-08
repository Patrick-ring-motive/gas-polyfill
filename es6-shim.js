function importEs6Shim() {
    try {
        globalThis.global = globalThis;
    } catch {
        global.globalThis = global;
    }
    /*!
     * https://github.com/paulmillr/es6-shim
     * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
     *   and contributors,  MIT License
     * es6-shim: v0.35.4
     * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
     * Details and documentation:
     * https://github.com/paulmillr/es6-shim/
     */
    (function(e, t) {
        if (typeof define === "function" && define.amd) {
            define(t)
        } else if (typeof exports === "object") {
            module.exports = t()
        } else {
            e.returnExports = t()
        }
    })(this, function() {
        "use strict";
        var e = Function.call.bind(Function.apply);
        var t = Function.call.bind(Function.call);
        var r = Array.isArray;
        var n = Object.keys;
        var o = function notThunker(t) {
            return function notThunk() {
                return !e(t, this, arguments)
            }
        };
        var i = function i(e) {
            try {
                e();
                return false
            } catch (t) {
                return true
            }
        };
        var a = function valueOrFalseIfThrows(e) {
            try {
                return e()
            } catch (t) {
                return false
            }
        };
        var u = o(i);
        var f = function f() {
            return !i(function() {
                return Object.defineProperty({}, "x", {
                    get: function get() {}
                })
            })
        };
        var s = !!Object.defineProperty && f();
        var c = function foo() {}.name === "foo";
        var l = Function.call.bind(Array.prototype.forEach);
        var p = Function.call.bind(Array.prototype.reduce);
        var v = Function.call.bind(Array.prototype.filter);
        var y = Function.call.bind(Array.prototype.some);
        var h = function h(e, t, r, n) {
            if (!n && t in e) {
                return
            }
            if (s) {
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: r
                })
            } else {
                e[t] = r
            }
        };
        var b = function b(e, t, r) {
            l(n(t), function(n) {
                var o = t[n];
                h(e, n, o, !!r)
            })
        };
        var g = Function.call.bind(Object.prototype.toString);
        var d = typeof /abc/ === "function" ? function IsCallableSlow(e) {
            return typeof e === "function" && g(e) === "[object Function]"
        } : function IsCallableFast(e) {
            return typeof e === "function"
        };
        var m = {
            getter: function getter(e, t, r) {
                if (!s) {
                    throw new TypeError("getters require true ES5 support")
                }
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: false,
                    get: r
                })
            },
            proxy: function proxy(e, t, r) {
                if (!s) {
                    throw new TypeError("getters require true ES5 support")
                }
                var n = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(r, t, {
                    configurable: n.configurable,
                    enumerable: n.enumerable,
                    get: function getKey() {
                        return e[t]
                    },
                    set: function setKey(r) {
                        e[t] = r
                    }
                })
            },
            redefine: function redefine(e, t, r) {
                if (s) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.value = r;
                    Object.defineProperty(e, t, n)
                } else {
                    e[t] = r
                }
            },
            defineByDescriptor: function defineByDescriptor(e, t, r) {
                if (s) {
                    Object.defineProperty(e, t, r)
                } else if ("value" in r) {
                    e[t] = r.value
                }
            },
            preserveToString: function preserveToString(e, t) {
                if (t && d(t.toString)) {
                    h(e, "toString", t.toString.bind(t), true)
                }
            }
        };
        var O = Object.create || function(e, t) {
            var r = function Prototype() {};
            r.prototype = e;
            var o = new r;
            if (typeof t !== "undefined") {
                n(t).forEach(function(e) {
                    m.defineByDescriptor(o, e, t[e])
                })
            }
            return o
        };
        var w = function w(e, t) {
            if (!Object.setPrototypeOf) {
                return false
            }
            return a(function() {
                var r = function Subclass(t) {
                    var r = new e(t);
                    Object.setPrototypeOf(r, Subclass.prototype);
                    return r
                };
                Object.setPrototypeOf(r, e);
                r.prototype = O(e.prototype, {
                    constructor: {
                        value: r
                    }
                });
                return t(r)
            })
        };
        var j = function j() {
            if (typeof self !== "undefined") {
                return self
            }
            if (typeof window !== "undefined") {
                return window
            }
            if (typeof global !== "undefined") {
                return global
            }
            throw new Error("unable to locate global object")
        };
        var S = j();
        var T = S.isFinite;
        var I = Function.call.bind(String.prototype.indexOf);
        var E = Function.apply.bind(Array.prototype.indexOf);
        var P = Function.call.bind(Array.prototype.concat);
        var C = Function.call.bind(String.prototype.slice);
        var M = Function.call.bind(Array.prototype.push);
        var x = Function.apply.bind(Array.prototype.push);
        var N = Function.call.bind(Array.prototype.shift);
        var A = Math.max;
        var R = Math.min;
        var _ = Math.floor;
        var k = Math.abs;
        var L = Math.exp;
        var F = Math.log;
        var D = Math.sqrt;
        var z = Function.call.bind(Object.prototype.hasOwnProperty);
        var q;
        var W = function W() {};
        var G = S.Map;
        var H = G && G.prototype["delete"];
        var V = G && G.prototype.get;
        var B = G && G.prototype.has;
        var U = G && G.prototype.set;
        var $ = S.Symbol || {};
        var J = $.species || "@@species";
        var X = Number.isNaN || function isNaN(e) {
            return e !== e
        };
        var K = Number.isFinite || function isFinite(e) {
            return typeof e === "number" && T(e)
        };
        var Z = d(Math.sign) ? Math.sign : function sign(e) {
            var t = Number(e);
            if (t === 0) {
                return t
            }
            if (X(t)) {
                return t
            }
            return t < 0 ? -1 : 1
        };
        var Y = function log1p(e) {
            var t = Number(e);
            if (t < -1 || X(t)) {
                return NaN
            }
            if (t === 0 || t === Infinity) {
                return t
            }
            if (t === -1) {
                return -Infinity
            }
            return 1 + t - 1 === 0 ? t : t * (F(1 + t) / (1 + t - 1))
        };
        var Q = function isArguments(e) {
            return g(e) === "[object Arguments]"
        };
        var ee = function isArguments(e) {
            return e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && g(e) !== "[object Array]" && g(e.callee) === "[object Function]"
        };
        var te = Q(arguments) ? Q : ee;
        var re = {
            primitive: function primitive(e) {
                return e === null || typeof e !== "function" && typeof e !== "object"
            },
            string: function string(e) {
                return g(e) === "[object String]"
            },
            regex: function regex(e) {
                return g(e) === "[object RegExp]"
            },
            symbol: function symbol(e) {
                return typeof S.Symbol === "function" && typeof e === "symbol"
            }
        };
        var ne = function overrideNative(e, t, r) {
            var n = e[t];
            h(e, t, r, true);
            m.preserveToString(e[t], n)
        };
        var oe = typeof $ === "function" && typeof $["for"] === "function" && re.symbol($());
        var ie = re.symbol($.iterator) ? $.iterator : "_es6-shim iterator_";
        if (S.Set && typeof(new S.Set)["@@iterator"] === "function") {
            ie = "@@iterator"
        }
        if (!S.Reflect) {
            h(S, "Reflect", {}, true)
        }
        var ae = S.Reflect;
        var ue = String;
        var fe = typeof document === "undefined" || !document ? null : document.all;
        var se = fe == null ? function isNullOrUndefined(e) {
            return e == null
        } : function isNullOrUndefinedAndNotDocumentAll(e) {
            return e == null && e !== fe
        };
        var ce = {
            Call: function Call(t, r) {
                var n = arguments.length > 2 ? arguments[2] : [];
                if (!ce.IsCallable(t)) {
                    throw new TypeError(t + " is not a function")
                }
                return e(t, r, n)
            },
            RequireObjectCoercible: function RequireObjectCoercible(e, t) {
                if (se(e)) {
                    throw new TypeError(t || "Cannot call method on " + e)
                }
                return e
            },
            TypeIsObject: function TypeIsObject(e) {
                if (e === void 0 || e === null || e === true || e === false) {
                    return false
                }
                return typeof e === "function" || typeof e === "object" || e === fe
            },
            ToObject: function ToObject(e, t) {
                return Object(ce.RequireObjectCoercible(e, t))
            },
            IsCallable: d,
            IsConstructor: function IsConstructor(e) {
                return ce.IsCallable(e)
            },
            ToInt32: function ToInt32(e) {
                return ce.ToNumber(e) >> 0
            },
            ToUint32: function ToUint32(e) {
                return ce.ToNumber(e) >>> 0
            },
            ToNumber: function ToNumber(e) {
                if (g(e) === "[object Symbol]") {
                    throw new TypeError("Cannot convert a Symbol value to a number")
                }
                return +e
            },
            ToInteger: function ToInteger(e) {
                var t = ce.ToNumber(e);
                if (X(t)) {
                    return 0
                }
                if (t === 0 || !K(t)) {
                    return t
                }
                return (t > 0 ? 1 : -1) * _(k(t))
            },
            ToLength: function ToLength(e) {
                var t = ce.ToInteger(e);
                if (t <= 0) {
                    return 0
                }
                if (t > Number.MAX_SAFE_INTEGER) {
                    return Number.MAX_SAFE_INTEGER
                }
                return t
            },
            SameValue: function SameValue(e, t) {
                if (e === t) {
                    if (e === 0) {
                        return 1 / e === 1 / t
                    }
                    return true
                }
                return X(e) && X(t)
            },
            SameValueZero: function SameValueZero(e, t) {
                return e === t || X(e) && X(t)
            },
            IsIterable: function IsIterable(e) {
                return ce.TypeIsObject(e) && (typeof e[ie] !== "undefined" || te(e))
            },
            GetIterator: function GetIterator(e) {
                if (te(e)) {
                    return new q(e, "value")
                }
                var t = ce.GetMethod(e, ie);
                if (!ce.IsCallable(t)) {
                    throw new TypeError("value is not an iterable")
                }
                var r = ce.Call(t, e);
                if (!ce.TypeIsObject(r)) {
                    throw new TypeError("bad iterator")
                }
                return r
            },
            GetMethod: function GetMethod(e, t) {
                var r = ce.ToObject(e)[t];
                if (se(r)) {
                    return void 0
                }
                if (!ce.IsCallable(r)) {
                    throw new TypeError("Method not callable: " + t)
                }
                return r
            },
            IteratorComplete: function IteratorComplete(e) {
                return !!e.done
            },
            IteratorClose: function IteratorClose(e, t) {
                var r = ce.GetMethod(e, "return");
                if (r === void 0) {
                    return
                }
                var n, o;
                try {
                    n = ce.Call(r, e)
                } catch (i) {
                    o = i
                }
                if (t) {
                    return
                }
                if (o) {
                    throw o
                }
                if (!ce.TypeIsObject(n)) {
                    throw new TypeError("Iterator's return method returned a non-object.")
                }
            },
            IteratorNext: function IteratorNext(e) {
                var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                if (!ce.TypeIsObject(t)) {
                    throw new TypeError("bad iterator")
                }
                return t
            },
            IteratorStep: function IteratorStep(e) {
                var t = ce.IteratorNext(e);
                var r = ce.IteratorComplete(t);
                return r ? false : t
            },
            Construct: function Construct(e, t, r, n) {
                var o = typeof r === "undefined" ? e : r;
                if (!n && ae.construct) {
                    return ae.construct(e, t, o)
                }
                var i = o.prototype;
                if (!ce.TypeIsObject(i)) {
                    i = Object.prototype
                }
                var a = O(i);
                var u = ce.Call(e, a, t);
                return ce.TypeIsObject(u) ? u : a
            },
            SpeciesConstructor: function SpeciesConstructor(e, t) {
                var r = e.constructor;
                if (r === void 0) {
                    return t
                }
                if (!ce.TypeIsObject(r)) {
                    throw new TypeError("Bad constructor")
                }
                var n = r[J];
                if (se(n)) {
                    return t
                }
                if (!ce.IsConstructor(n)) {
                    throw new TypeError("Bad @@species")
                }
                return n
            },
            CreateHTML: function CreateHTML(e, t, r, n) {
                var o = ce.ToString(e);
                var i = "<" + t;
                if (r !== "") {
                    var a = ce.ToString(n);
                    var u = a.replace(/"/g, "&quot;");
                    i += " " + r + '="' + u + '"'
                }
                var f = i + ">";
                var s = f + o;
                return s + "</" + t + ">"
            },
            IsRegExp: function IsRegExp(e) {
                if (!ce.TypeIsObject(e)) {
                    return false
                }
                var t = e[$.match];
                if (typeof t !== "undefined") {
                    return !!t
                }
                return re.regex(e)
            },
            ToString: function ToString(e) {
                return ue(e)
            }
        };
        if (s && oe) {
            var le = function defineWellKnownSymbol(e) {
                if (re.symbol($[e])) {
                    return $[e]
                }
                var t = $["for"]("Symbol." + e);
                Object.defineProperty($, e, {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: t
                });
                return t
            };
            if (!re.symbol($.search)) {
                var pe = le("search");
                var ve = String.prototype.search;
                h(RegExp.prototype, pe, function search(e) {
                    return ce.Call(ve, e, [this])
                });
                var ye = function search(e) {
                    var t = ce.RequireObjectCoercible(this);
                    if (!se(e)) {
                        var r = ce.GetMethod(e, pe);
                        if (typeof r !== "undefined") {
                            return ce.Call(r, e, [t])
                        }
                    }
                    return ce.Call(ve, t, [ce.ToString(e)])
                };
                ne(String.prototype, "search", ye)
            }
            if (!re.symbol($.replace)) {
                var he = le("replace");
                var be = String.prototype.replace;
                h(RegExp.prototype, he, function replace(e, t) {
                    return ce.Call(be, e, [this, t])
                });
                var ge = function replace(e, t) {
                    var r = ce.RequireObjectCoercible(this);
                    if (!se(e)) {
                        var n = ce.GetMethod(e, he);
                        if (typeof n !== "undefined") {
                            return ce.Call(n, e, [r, t])
                        }
                    }
                    return ce.Call(be, r, [ce.ToString(e), t])
                };
                ne(String.prototype, "replace", ge)
            }
            if (!re.symbol($.split)) {
                var de = le("split");
                var me = String.prototype.split;
                h(RegExp.prototype, de, function split(e, t) {
                    return ce.Call(me, e, [this, t])
                });
                var Oe = function split(e, t) {
                    var r = ce.RequireObjectCoercible(this);
                    if (!se(e)) {
                        var n = ce.GetMethod(e, de);
                        if (typeof n !== "undefined") {
                            return ce.Call(n, e, [r, t])
                        }
                    }
                    return ce.Call(me, r, [ce.ToString(e), t])
                };
                ne(String.prototype, "split", Oe)
            }
            var we = re.symbol($.match);
            var je = we && function() {
                var e = {};
                e[$.match] = function () {
                    return 42
                };
                return "a".match(e) !== 42
            }();
            if (!we || je) {
                var Se = le("match");
                var Te = String.prototype.match;
                h(RegExp.prototype, Se, function match(e) {
                    return ce.Call(Te, e, [this])
                });
                var Ie = function match(e) {
                    var t = ce.RequireObjectCoercible(this);
                    if (!se(e)) {
                        var r = ce.GetMethod(e, Se);
                        if (typeof r !== "undefined") {
                            return ce.Call(r, e, [t])
                        }
                    }
                    return ce.Call(Te, t, [ce.ToString(e)])
                };
                ne(String.prototype, "match", Ie)
            }
        }
        var Ee = function wrapConstructor(e, t, r) {
            m.preserveToString(t, e);
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(e, t)
            }
            if (s) {
                l(Object.getOwnPropertyNames(e), function(n) {
                    if (n in W || r[n]) {
                        return
                    }
                    m.proxy(e, n, t)
                })
            } else {
                l(Object.keys(e), function(n) {
                    if (n in W || r[n]) {
                        return
                    }
                    t[n] = e[n]
                })
            }
            t.prototype = e.prototype;
            m.redefine(e.prototype, "constructor", t)
        };
        var Pe = function Pe() {
            return this
        };
        var Ce = function Ce(e) {
            if (s && !z(e, J)) {
                m.getter(e, J, Pe)
            }
        };
        var Me = function Me(e, t) {
            var r = t || function iterator() {
                return this
            };
            h(e, ie, r);
            if (!e[ie] && re.symbol(ie)) {
                e[ie] = r
            }
        };
        var xe = function createDataProperty(e, t, r) {
            if (s) {
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: r
                })
            } else {
                e[t] = r
            }
        };
        var Ne = function createDataPropertyOrThrow(e, t, r) {
            xe(e, t, r);
            if (!ce.SameValue(e[t], r)) {
                throw new TypeError("property is nonconfigurable")
            }
        };
        var Ae = function Ae(e, t, r, n) {
            if (!ce.TypeIsObject(e)) {
                throw new TypeError("Constructor requires `new`: " + t.name)
            }
            var o = t.prototype;
            if (!ce.TypeIsObject(o)) {
                o = r
            }
            var i = O(o);
            for (var a in n) {
                if (z(n, a)) {
                    var u = n[a];
                    h(i, a, u, true)
                }
            }
            return i
        };
        if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
            var Re = String.fromCodePoint;
            ne(String, "fromCodePoint", function fromCodePoint(e) {
                return ce.Call(Re, this, arguments)
            })
        }
        var _e = {
            fromCodePoint: function fromCodePoint(e) {
                var t = [];
                var r;
                for (var n = 0, o = arguments.length; n < o; n++) {
                    r = Number(arguments[n]);
                    if (!ce.SameValue(r, ce.ToInteger(r)) || r < 0 || r > 1114111) {
                        throw new RangeError("Invalid code point " + r)
                    }
                    if (r < 65536) {
                        M(t, String.fromCharCode(r))
                    } else {
                        r -= 65536;
                        M(t, String.fromCharCode((r >> 10) + 55296));
                        M(t, String.fromCharCode(r % 1024 + 56320))
                    }
                }
                return t.join("")
            },
            raw: function raw(e) {
                var t = ce.ToObject(e, "bad callSite");
                var r = ce.ToObject(t.raw, "bad raw value");
                var n = r.length;
                var o = ce.ToLength(n);
                if (o <= 0) {
                    return ""
                }
                var i = [];
                var a = 0;
                var u, f, s, c;
                while (a < o) {
                    u = ce.ToString(a);
                    s = ce.ToString(r[u]);
                    M(i, s);
                    if (a + 1 >= o) {
                        break
                    }
                    f = a + 1 < arguments.length ? arguments[a + 1] : "";
                    c = ce.ToString(f);
                    M(i, c);
                    a += 1
                }
                return i.join("")
            }
        };
        if (String.raw && String.raw({
                raw: {
                    0: "x",
                    1: "y",
                    length: 2
                }
            }) !== "xy") {
            ne(String, "raw", _e.raw)
        }
        b(String, _e);
        var ke = function repeat(e, t) {
            if (t < 1) {
                return ""
            }
            if (t % 2) {
                return repeat(e, t - 1) + e
            }
            var r = repeat(e, t / 2);
            return r + r
        };
        var Le = Infinity;
        var Fe = {
            repeat: function repeat(e) {
                var t = ce.ToString(ce.RequireObjectCoercible(this));
                var r = ce.ToInteger(e);
                if (r < 0 || r >= Le) {
                    throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")
                }
                return ke(t, r)
            },
            startsWith: function startsWith(e) {
                var t = ce.ToString(ce.RequireObjectCoercible(this));
                if (ce.IsRegExp(e)) {
                    throw new TypeError('Cannot call method "startsWith" with a regex')
                }
                var r = ce.ToString(e);
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o = A(ce.ToInteger(n), 0);
                return C(t, o, o + r.length) === r
            },
            endsWith: function endsWith(e) {
                var t = ce.ToString(ce.RequireObjectCoercible(this));
                if (ce.IsRegExp(e)) {
                    throw new TypeError('Cannot call method "endsWith" with a regex')
                }
                var r = ce.ToString(e);
                var n = t.length;
                var o;
                if (arguments.length > 1) {
                    o = arguments[1]
                }
                var i = typeof o === "undefined" ? n : ce.ToInteger(o);
                var a = R(A(i, 0), n);
                return C(t, a - r.length, a) === r
            },
            includes: function includes(e) {
                if (ce.IsRegExp(e)) {
                    throw new TypeError('"includes" does not accept a RegExp')
                }
                var t = ce.ToString(e);
                var r;
                if (arguments.length > 1) {
                    r = arguments[1]
                }
                return I(this, t, r) !== -1
            },
            codePointAt: function codePointAt(e) {
                var t = ce.ToString(ce.RequireObjectCoercible(this));
                var r = ce.ToInteger(e);
                var n = t.length;
                if (r >= 0 && r < n) {
                    var o = t.charCodeAt(r);
                    var i = r + 1 === n;
                    if (o < 55296 || o > 56319 || i) {
                        return o
                    }
                    var a = t.charCodeAt(r + 1);
                    if (a < 56320 || a > 57343) {
                        return o
                    }
                    return (o - 55296) * 1024 + (a - 56320) + 65536
                }
            }
        };
        if (String.prototype.includes && "a".includes("a", Infinity) !== false) {
            ne(String.prototype, "includes", Fe.includes)
        }
        if (String.prototype.startsWith && String.prototype.endsWith) {
            var De = i(function() {
                return "/a/".startsWith(/a/)
            });
            var ze = a(function() {
                return "abc".startsWith("a", Infinity) === false
            });
            if (!De || !ze) {
                ne(String.prototype, "startsWith", Fe.startsWith);
                ne(String.prototype, "endsWith", Fe.endsWith)
            }
        }
        if (oe) {
            var qe = a(function() {
                var e = /a/;
                e[$.match] = false;
                return "/a/".startsWith(e)
            });
            if (!qe) {
                ne(String.prototype, "startsWith", Fe.startsWith)
            }
            var We = a(function() {
                var e = /a/;
                e[$.match] = false;
                return "/a/".endsWith(e)
            });
            if (!We) {
                ne(String.prototype, "endsWith", Fe.endsWith)
            }
            var Ge = a(function() {
                var e = /a/;
                e[$.match] = false;
                return "/a/".includes(e)
            });
            if (!Ge) {
                ne(String.prototype, "includes", Fe.includes)
            }
        }
        b(String.prototype, Fe);
        var He = ["\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join("");
        var Ve = new RegExp("(^[" + He + "]+)|([" + He + "]+$)", "g");
        var Be = function trim() {
            return ce.ToString(ce.RequireObjectCoercible(this)).replace(Ve, "")
        };
        var Ue = ["\x85", "\u200b", "\ufffe"].join("");
        var $e = new RegExp("[" + Ue + "]", "g");
        var Je = /^[-+]0x[0-9a-f]+$/i;
        var Xe = Ue.trim().length !== Ue.length;
        h(String.prototype, "trim", Be, Xe);
        var Ke = function Ke(e) {
            return {
                value: e,
                done: arguments.length === 0
            }
        };
        var Ze = function Ze(e) {
            ce.RequireObjectCoercible(e);
            this._s = ce.ToString(e);
            this._i = 0
        };
        Ze.prototype.next = function next() {
            var e = this._s;
            var t = this._i;
            if (typeof e === "undefined" || t >= e.length) {
                this._s = void 0;
                return Ke()
            }
            var r = e.charCodeAt(t);
            var n, o;
            if (r < 55296 || r > 56319 || t + 1 === e.length) {
                o = 1
            } else {
                n = e.charCodeAt(t + 1);
                o = n < 56320 || n > 57343 ? 1 : 2
            }
            this._i = t + o;
            return Ke(e.substr(t, o))
        };
        Me(Ze.prototype);
        Me(String.prototype, function() {
            return new Ze(this)
        });
        var Ye = {
            from: function from(e) {
                var r = this;
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o, i;
                if (typeof n === "undefined") {
                    o = false
                } else {
                    if (!ce.IsCallable(n)) {
                        throw new TypeError("Array.from: when provided, the second argument must be a function")
                    }
                    if (arguments.length > 2) {
                        i = arguments[2]
                    }
                    o = true
                }
                var a = typeof(te(e) || ce.GetMethod(e, ie)) !== "undefined";
                var u, f, s;
                if (a) {
                    f = ce.IsConstructor(r) ? Object(new r) : [];
                    var c = ce.GetIterator(e);
                    var l, p;
                    s = 0;
                    while (true) {
                        l = ce.IteratorStep(c);
                        if (l === false) {
                            break
                        }
                        p = l.value;
                        try {
                            if (o) {
                                p = typeof i === "undefined" ? n(p, s) : t(n, i, p, s)
                            }
                            f[s] = p
                        } catch (v) {
                            ce.IteratorClose(c, true);
                            throw v
                        }
                        s += 1
                    }
                    u = s
                } else {
                    var y = ce.ToObject(e);
                    u = ce.ToLength(y.length);
                    f = ce.IsConstructor(r) ? Object(new r(u)) : new Array(u);
                    var h;
                    for (s = 0; s < u; ++s) {
                        h = y[s];
                        if (o) {
                            h = typeof i === "undefined" ? n(h, s) : t(n, i, h, s)
                        }
                        Ne(f, s, h)
                    }
                }
                f.length = u;
                return f
            },
            of: function of() {
                var e = arguments.length;
                var t = this;
                var n = r(t) || !ce.IsCallable(t) ? new Array(e) : ce.Construct(t, [e]);
                for (var o = 0; o < e; ++o) {
                    Ne(n, o, arguments[o])
                }
                n.length = e;
                return n
            }
        };
        b(Array, Ye);
        Ce(Array);
        q = function q(e, t) {
            this.i = 0;
            this.array = e;
            this.kind = t
        };
        b(q.prototype, {
            next: function next() {
                var e = this.i;
                var t = this.array;
                if (!(this instanceof q)) {
                    throw new TypeError("Not an ArrayIterator")
                }
                if (typeof t !== "undefined") {
                    var r = ce.ToLength(t.length);
                    for (; e < r; e++) {
                        var n = this.kind;
                        var o;
                        if (n === "key") {
                            o = e
                        } else if (n === "value") {
                            o = t[e]
                        } else if (n === "entry") {
                            o = [e, t[e]]
                        }
                        this.i = e + 1;
                        return Ke(o)
                    }
                }
                this.array = void 0;
                return Ke()
            }
        });
        Me(q.prototype);
        var Qe = Array.of === Ye.of || function() {
            var e = function Foo(e) {
                this.length = e
            };
            e.prototype = [];
            var t = Array.of.apply(e, [1, 2]);
            return t instanceof e && t.length === 2
        }();
        if (!Qe) {
            ne(Array, "of", Ye.of)
        }
        var et = {
            copyWithin: function copyWithin(e, t) {
                var r = ce.ToObject(this);
                var n = ce.ToLength(r.length);
                var o = ce.ToInteger(e);
                var i = ce.ToInteger(t);
                var a = o < 0 ? A(n + o, 0) : R(o, n);
                var u = i < 0 ? A(n + i, 0) : R(i, n);
                var f;
                if (arguments.length > 2) {
                    f = arguments[2]
                }
                var s = typeof f === "undefined" ? n : ce.ToInteger(f);
                var c = s < 0 ? A(n + s, 0) : R(s, n);
                var l = R(c - u, n - a);
                var p = 1;
                if (u < a && a < u + l) {
                    p = -1;
                    u += l - 1;
                    a += l - 1
                }
                while (l > 0) {
                    if (u in r) {
                        r[a] = r[u]
                    } else {
                        delete r[a]
                    }
                    u += p;
                    a += p;
                    l -= 1
                }
                return r
            },
            fill: function fill(e) {
                var t;
                if (arguments.length > 1) {
                    t = arguments[1]
                }
                var r;
                if (arguments.length > 2) {
                    r = arguments[2]
                }
                var n = ce.ToObject(this);
                var o = ce.ToLength(n.length);
                t = ce.ToInteger(typeof t === "undefined" ? 0 : t);
                r = ce.ToInteger(typeof r === "undefined" ? o : r);
                var i = t < 0 ? A(o + t, 0) : R(t, o);
                var a = r < 0 ? o + r : r;
                for (var u = i; u < o && u < a; ++u) {
                    n[u] = e
                }
                return n
            },
            find: function find(e) {
                var r = ce.ToObject(this);
                var n = ce.ToLength(r.length);
                if (!ce.IsCallable(e)) {
                    throw new TypeError("Array#find: predicate must be a function")
                }
                var o = arguments.length > 1 ? arguments[1] : null;
                for (var i = 0, a; i < n; i++) {
                    a = r[i];
                    if (o) {
                        if (t(e, o, a, i, r)) {
                            return a
                        }
                    } else if (e(a, i, r)) {
                        return a
                    }
                }
            },
            findIndex: function findIndex(e) {
                var r = ce.ToObject(this);
                var n = ce.ToLength(r.length);
                if (!ce.IsCallable(e)) {
                    throw new TypeError("Array#findIndex: predicate must be a function")
                }
                var o = arguments.length > 1 ? arguments[1] : null;
                for (var i = 0; i < n; i++) {
                    if (o) {
                        if (t(e, o, r[i], i, r)) {
                            return i
                        }
                    } else if (e(r[i], i, r)) {
                        return i
                    }
                }
                return -1
            },
            keys: function keys() {
                return new q(this, "key")
            },
            values: function values() {
                return new q(this, "value")
            },
            entries: function entries() {
                return new q(this, "entry")
            }
        };
        if (Array.prototype.keys && !ce.IsCallable([1].keys().next)) {
            delete Array.prototype.keys
        }
        if (Array.prototype.entries && !ce.IsCallable([1].entries().next)) {
            delete Array.prototype.entries
        }
        if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[ie]) {
            b(Array.prototype, {
                values: Array.prototype[ie]
            });
            if (re.symbol($.unscopables)) {
                Array.prototype[$.unscopables].values = true
            }
        }
        if (c && Array.prototype.values && Array.prototype.values.name !== "values") {
            var tt = Array.prototype.values;
            ne(Array.prototype, "values", function values() {
                return ce.Call(tt, this, arguments)
            });
            h(Array.prototype, ie, Array.prototype.values, true)
        }
        b(Array.prototype, et);
        if (1 / [true].indexOf(true, -0) < 0) {
            h(Array.prototype, "indexOf", function indexOf(e) {
                var t = E(this, arguments);
                if (t === 0 && 1 / t < 0) {
                    return 0
                }
                return t
            }, true)
        }
        Me(Array.prototype, function() {
            return this.values()
        });
        if (Object.getPrototypeOf) {
            Me(Object.getPrototypeOf([].values()))
        }
        var rt = function rt() {
            return a(function() {
                return Array.from({
                    length: -1
                }).length === 0
            })
        }();
        var nt = function nt() {
            var e = Array.from([0].entries());
            return e.length === 1 && r(e[0]) && e[0][0] === 0 && e[0][1] === 0
        }();
        if (!rt || !nt) {
            ne(Array, "from", Ye.from)
        }
        var ot = function ot() {
            return a(function() {
                return Array.from([0], void 0)
            })
        }();
        if (!ot) {
            var it = Array.from;
            ne(Array, "from", function from(e) {
                if (arguments.length > 1 && typeof arguments[1] !== "undefined") {
                    return ce.Call(it, this, arguments)
                } else {
                    return t(it, this, e)
                }
            })
        }
        var at = -(Math.pow(2, 32) - 1);
        var ut = function ut(e, r) {
            var n = {
                length: at
            };
            n[r ? (n.length >>> 0) - 1 : 0] = true;
            return a(function() {
                t(e, n, function() {
                    throw new RangeError("should not reach here")
                }, []);
                return true
            })
        };
        if (!ut(Array.prototype.forEach)) {
            var ft = Array.prototype.forEach;
            ne(Array.prototype, "forEach", function forEach(e) {
                return ce.Call(ft, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.map)) {
            var st = Array.prototype.map;
            ne(Array.prototype, "map", function map(e) {
                return ce.Call(st, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.filter)) {
            var ct = Array.prototype.filter;
            ne(Array.prototype, "filter", function filter(e) {
                return ce.Call(ct, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.some)) {
            var lt = Array.prototype.some;
            ne(Array.prototype, "some", function some(e) {
                return ce.Call(lt, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.every)) {
            var pt = Array.prototype.every;
            ne(Array.prototype, "every", function every(e) {
                return ce.Call(pt, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.reduce)) {
            var vt = Array.prototype.reduce;
            ne(Array.prototype, "reduce", function reduce(e) {
                return ce.Call(vt, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        if (!ut(Array.prototype.reduceRight, true)) {
            var yt = Array.prototype.reduceRight;
            ne(Array.prototype, "reduceRight", function reduceRight(e) {
                return ce.Call(yt, this.length >= 0 ? this : [], arguments)
            }, true)
        }
        var ht = Number("0o10") !== 8;
        var bt = Number("0b10") !== 2;
        var gt = y(Ue, function(e) {
            return Number(e + 0 + e) === 0
        });
        if (ht || bt || gt) {
            var dt = Number;
            var mt = /^0b[01]+$/i;
            var Ot = /^0o[0-7]+$/i;
            var wt = mt.test.bind(mt);
            var jt = Ot.test.bind(Ot);
            var St = function St(e) {
                var t;
                if (typeof e.valueOf === "function") {
                    t = e.valueOf();
                    if (re.primitive(t)) {
                        return t
                    }
                }
                if (typeof e.toString === "function") {
                    t = e.toString();
                    if (re.primitive(t)) {
                        return t
                    }
                }
                throw new TypeError("No default value")
            };
            var Tt = $e.test.bind($e);
            var It = Je.test.bind(Je);
            var Et = function Et() {
                var e = function Number(t) {
                    var r;
                    if (arguments.length > 0) {
                        r = re.primitive(t) ? t : St(t, "number")
                    } else {
                        r = 0
                    }
                    if (typeof r === "string") {
                        r = ce.Call(Be, r);
                        if (wt(r)) {
                            r = parseInt(C(r, 2), 2)
                        } else if (jt(r)) {
                            r = parseInt(C(r, 2), 8)
                        } else if (Tt(r) || It(r)) {
                            r = NaN
                        }
                    }
                    var n = this;
                    var o = a(function() {
                        dt.prototype.valueOf.call(n);
                        return true
                    });
                    if (n instanceof e && !o) {
                        return new dt(r)
                    }
                    return dt(r)
                };
                return e
            }();
            Ee(dt, Et, {});
            b(Et, {
                NaN: dt.NaN,
                MAX_VALUE: dt.MAX_VALUE,
                MIN_VALUE: dt.MIN_VALUE,
                NEGATIVE_INFINITY: dt.NEGATIVE_INFINITY,
                POSITIVE_INFINITY: dt.POSITIVE_INFINITY
            });
            Number = Et;
            m.redefine(S, "Number", Et)
        }
        var Pt = Math.pow(2, 53) - 1;
        b(Number, {
            MAX_SAFE_INTEGER: Pt,
            MIN_SAFE_INTEGER: -Pt,
            EPSILON: 2.220446049250313e-16,
            parseInt: S.parseInt,
            parseFloat: S.parseFloat,
            isFinite: K,
            isInteger: function isInteger(e) {
                return K(e) && ce.ToInteger(e) === e
            },
            isSafeInteger: function isSafeInteger(e) {
                return Number.isInteger(e) && k(e) <= Number.MAX_SAFE_INTEGER
            },
            isNaN: X
        });
        h(Number, "parseInt", S.parseInt, Number.parseInt !== S.parseInt);
        if ([, 1].find(function() {
                return true
            }) === 1) {
            ne(Array.prototype, "find", et.find)
        }
        if ([, 1].findIndex(function() {
                return true
            }) !== 0) {
            ne(Array.prototype, "findIndex", et.findIndex)
        }
        var Ct = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
        var Mt = function ensureEnumerable(e, t) {
            if (s && Ct(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: false
                })
            }
        };
        var xt = function sliceArgs() {
            var e = Number(this);
            var t = arguments.length;
            var r = t - e;
            var n = new Array(r < 0 ? 0 : r);
            for (var o = e; o < t; ++o) {
                n[o - e] = arguments[o]
            }
            return n
        };
        var Nt = function assignTo(e) {
            return function assignToSource(t, r) {
                t[r] = e[r];
                return t
            }
        };
        var At = function At(e, t) {
            var r = n(Object(t));
            var o;
            if (ce.IsCallable(Object.getOwnPropertySymbols)) {
                o = v(Object.getOwnPropertySymbols(Object(t)), Ct(t))
            }
            return p(P(r, o || []), Nt(t), e)
        };
        var Rt = {
            assign: function assign(e, t) {
                var r = ce.ToObject(e, "Cannot convert undefined or null to object");
                return p(ce.Call(xt, 1, arguments), At, r)
            },
            is: function is(e, t) {
                return ce.SameValue(e, t)
            }
        };
        var _t = Object.assign && Object.preventExtensions && function() {
            var e = Object.preventExtensions({
                1: 2
            });
            try {
                Object.assign(e, "xy")
            } catch (t) {
                return e[1] === "y"
            }
        }();
        if (_t) {
            ne(Object, "assign", Rt.assign)
        }
        b(Object, Rt);
        if (s) {
            var kt = {
                setPrototypeOf: function setPrototypeOf(e, r) {
                    var n;
                    var o = function o(e, t) {
                        if (!ce.TypeIsObject(e)) {
                            throw new TypeError("cannot set prototype on a non-object")
                        }
                        if (!(t === null || ce.TypeIsObject(t))) {
                            throw new TypeError("can only set prototype to an object or null" + t)
                        }
                    };
                    var i = function i(e, r) {
                        o(e, r);
                        t(n, e, r);
                        return e
                    };
                    try {
                        n = e.getOwnPropertyDescriptor(e.prototype, r).set;
                        t(n, {}, null)
                    } catch (a) {
                        if (e.prototype !== {} [r]) {
                            return
                        }
                        n = function n(e) {
                            this[r] = e
                        };
                        i.polyfill = i(i({}, null), e.prototype) instanceof e
                    }
                    return i
                }(Object, "__proto__")
            };
            b(Object, kt)
        }
        if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
            (function() {
                var e = Object.create(null);
                var t = Object.getPrototypeOf;
                var r = Object.setPrototypeOf;
                Object.getPrototypeOf = function getPrototypeOf(r) {
                    var n = t(r);
                    return n === e ? null : n
                };
                Object.setPrototypeOf = function setPrototypeOf(t, n) {
                    var o = n === null ? e : n;
                    return r(t, o)
                };
                Object.setPrototypeOf.polyfill = false
            })()
        }
        var Lt = !i(function() {
            return Object.keys("foo")
        });
        if (!Lt) {
            var Ft = Object.keys;
            ne(Object, "keys", function keys(e) {
                return Ft(ce.ToObject(e))
            });
            n = Object.keys
        }
        var Dt = i(function() {
            return Object.keys(/a/g)
        });
        if (Dt) {
            var zt = Object.keys;
            ne(Object, "keys", function keys(e) {
                if (re.regex(e)) {
                    var t = [];
                    for (var r in e) {
                        if (z(e, r)) {
                            M(t, r)
                        }
                    }
                    return t
                }
                return zt(e)
            });
            n = Object.keys
        }
        if (Object.getOwnPropertyNames) {
            var qt = !i(function() {
                return Object.getOwnPropertyNames("foo")
            });
            if (!qt) {
                var Wt = typeof window === "object" ? Object.getOwnPropertyNames(window) : [];
                var Gt = Object.getOwnPropertyNames;
                ne(Object, "getOwnPropertyNames", function getOwnPropertyNames(e) {
                    var t = ce.ToObject(e);
                    if (g(t) === "[object Window]") {
                        try {
                            return Gt(t)
                        } catch (r) {
                            return P([], Wt)
                        }
                    }
                    return Gt(t)
                })
            }
        }
        if (Object.getOwnPropertyDescriptor) {
            var Ht = !i(function() {
                return Object.getOwnPropertyDescriptor("foo", "bar")
            });
            if (!Ht) {
                var Vt = Object.getOwnPropertyDescriptor;
                ne(Object, "getOwnPropertyDescriptor", function getOwnPropertyDescriptor(e, t) {
                    return Vt(ce.ToObject(e), t)
                })
            }
        }
        if (Object.seal) {
            var Bt = !i(function() {
                return Object.seal("foo")
            });
            if (!Bt) {
                var Ut = Object.seal;
                ne(Object, "seal", function seal(e) {
                    if (!ce.TypeIsObject(e)) {
                        return e
                    }
                    return Ut(e)
                })
            }
        }
        if (Object.isSealed) {
            var $t = !i(function() {
                return Object.isSealed("foo")
            });
            if (!$t) {
                var Jt = Object.isSealed;
                ne(Object, "isSealed", function isSealed(e) {
                    if (!ce.TypeIsObject(e)) {
                        return true
                    }
                    return Jt(e)
                })
            }
        }
        if (Object.freeze) {
            var Xt = !i(function() {
                return Object.freeze("foo")
            });
            if (!Xt) {
                var Kt = Object.freeze;
                ne(Object, "freeze", function freeze(e) {
                    if (!ce.TypeIsObject(e)) {
                        return e
                    }
                    return Kt(e)
                })
            }
        }
        if (Object.isFrozen) {
            var Zt = !i(function() {
                return Object.isFrozen("foo")
            });
            if (!Zt) {
                var Yt = Object.isFrozen;
                ne(Object, "isFrozen", function isFrozen(e) {
                    if (!ce.TypeIsObject(e)) {
                        return true
                    }
                    return Yt(e)
                })
            }
        }
        if (Object.preventExtensions) {
            var Qt = !i(function() {
                return Object.preventExtensions("foo")
            });
            if (!Qt) {
                var er = Object.preventExtensions;
                ne(Object, "preventExtensions", function preventExtensions(e) {
                    if (!ce.TypeIsObject(e)) {
                        return e
                    }
                    return er(e)
                })
            }
        }
        if (Object.isExtensible) {
            var tr = !i(function() {
                return Object.isExtensible("foo")
            });
            if (!tr) {
                var rr = Object.isExtensible;
                ne(Object, "isExtensible", function isExtensible(e) {
                    if (!ce.TypeIsObject(e)) {
                        return false
                    }
                    return rr(e)
                })
            }
        }
        if (Object.getPrototypeOf) {
            var nr = !i(function() {
                return Object.getPrototypeOf("foo")
            });
            if (!nr) {
                var or = Object.getPrototypeOf;
                ne(Object, "getPrototypeOf", function getPrototypeOf(e) {
                    return or(ce.ToObject(e))
                })
            }
        }
        var ir = s && function() {
            var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
            return e && ce.IsCallable(e.get)
        }();
        if (s && !ir) {
            var ar = function flags() {
                if (!ce.TypeIsObject(this)) {
                    throw new TypeError("Method called on incompatible type: must be an object.")
                }
                var e = "";
                if (this.global) {
                    e += "g"
                }
                if (this.ignoreCase) {
                    e += "i"
                }
                if (this.multiline) {
                    e += "m"
                }
                if (this.unicode) {
                    e += "u"
                }
                if (this.sticky) {
                    e += "y"
                }
                return e
            };
            m.getter(RegExp.prototype, "flags", ar)
        }
        var ur = s && a(function() {
            return String(new RegExp(/a/g, "i")) === "/a/i"
        });
        var fr = oe && s && function() {
            var e = /./;
            e[$.match] = false;
            return RegExp(e) === e
        }();
        var sr = a(function() {
            return RegExp.prototype.toString.call({
                source: "abc"
            }) === "/abc/"
        });
        var cr = sr && a(function() {
            return RegExp.prototype.toString.call({
                source: "a",
                flags: "b"
            }) === "/a/b"
        });
        if (!sr || !cr) {
            var lr = RegExp.prototype.toString;
            h(RegExp.prototype, "toString", function toString() {
                var e = ce.RequireObjectCoercible(this);
                if (re.regex(e)) {
                    return t(lr, e)
                }
                var r = ue(e.source);
                var n = ue(e.flags);
                return "/" + r + "/" + n
            }, true);
            m.preserveToString(RegExp.prototype.toString, lr)
        }
        if (s && (!ur || fr)) {
            var pr = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
            var vr = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {};
            var yr = function yr() {
                return this.source
            };
            var hr = ce.IsCallable(vr.get) ? vr.get : yr;
            var br = RegExp;
            var gr = function gr() {
                return function RegExp(e, t) {
                    var r = ce.IsRegExp(e);
                    var n = this instanceof RegExp;
                    if (!n && r && typeof t === "undefined" && e.constructor === RegExp) {
                        return e
                    }
                    var o = e;
                    var i = t;
                    if (re.regex(e)) {
                        o = ce.Call(hr, e);
                        i = typeof t === "undefined" ? ce.Call(pr, e) : t;
                        return new RegExp(o, i)
                    } else if (r) {
                        o = e.source;
                        i = typeof t === "undefined" ? e.flags : t
                    }
                    return new br(e, t)
                }
            }();
            Ee(br, gr, {
                $input: true
            });
            RegExp = gr;
            m.redefine(S, "RegExp", gr)
        }
        if (s) {
            var dr = {
                input: "$_",
                lastMatch: "$&",
                lastParen: "$+",
                leftContext: "$`",
                rightContext: "$'"
            };
            l(n(dr), function(e) {
                if (e in RegExp && !(dr[e] in RegExp)) {
                    m.getter(RegExp, dr[e], function get() {
                        return RegExp[e]
                    })
                }
            })
        }
        Ce(RegExp);
        var mr = 1 / Number.EPSILON;
        var Or = function roundTiesToEven(e) {
            return e + mr - mr
        };
        var wr = Math.pow(2, -23);
        var jr = Math.pow(2, 127) * (2 - wr);
        var Sr = Math.pow(2, -126);
        var Tr = Math.E;
        var Ir = Math.LOG2E;
        var Er = Math.LOG10E;
        var Pr = Number.prototype.clz;
        delete Number.prototype.clz;
        var Cr = {
            acosh: function acosh(e) {
                var t = Number(e);
                if (X(t) || e < 1) {
                    return NaN
                }
                if (t === 1) {
                    return 0
                }
                if (t === Infinity) {
                    return t
                }
                var r = 1 / (t * t);
                if (t < 2) {
                    return Y(t - 1 + D(1 - r) * t)
                }
                var n = t / 2;
                return Y(n + D(1 - r) * n - 1) + 1 / Ir
            },
            asinh: function asinh(e) {
                var t = Number(e);
                if (t === 0 || !T(t)) {
                    return t
                }
                var r = k(t);
                var n = r * r;
                var o = Z(t);
                if (r < 1) {
                    return o * Y(r + n / (D(n + 1) + 1))
                }
                return o * (Y(r / 2 + D(1 + 1 / n) * r / 2 - 1) + 1 / Ir)
            },
            atanh: function atanh(e) {
                var t = Number(e);
                if (t === 0) {
                    return t
                }
                if (t === -1) {
                    return -Infinity
                }
                if (t === 1) {
                    return Infinity
                }
                if (X(t) || t < -1 || t > 1) {
                    return NaN
                }
                var r = k(t);
                return Z(t) * Y(2 * r / (1 - r)) / 2
            },
            cbrt: function cbrt(e) {
                var t = Number(e);
                if (t === 0) {
                    return t
                }
                var r = t < 0;
                var n;
                if (r) {
                    t = -t
                }
                if (t === Infinity) {
                    n = Infinity
                } else {
                    n = L(F(t) / 3);
                    n = (t / (n * n) + 2 * n) / 3
                }
                return r ? -n : n
            },
            clz32: function clz32(e) {
                var t = Number(e);
                var r = ce.ToUint32(t);
                if (r === 0) {
                    return 32
                }
                return Pr ? ce.Call(Pr, r) : 31 - _(F(r + .5) * Ir)
            },
            cosh: function cosh(e) {
                var t = Number(e);
                if (t === 0) {
                    return 1
                }
                if (X(t)) {
                    return NaN
                }
                if (!T(t)) {
                    return Infinity
                }
                var r = L(k(t) - 1);
                return (r + 1 / (r * Tr * Tr)) * (Tr / 2)
            },
            expm1: function expm1(e) {
                var t = Number(e);
                if (t === -Infinity) {
                    return -1
                }
                if (!T(t) || t === 0) {
                    return t
                }
                if (k(t) > .5) {
                    return L(t) - 1
                }
                var r = t;
                var n = 0;
                var o = 1;
                while (n + r !== n) {
                    n += r;
                    o += 1;
                    r *= t / o
                }
                return n
            },
            hypot: function hypot(e, t) {
                var r = 0;
                var n = 0;
                for (var o = 0; o < arguments.length; ++o) {
                    var i = k(Number(arguments[o]));
                    if (n < i) {
                        r *= n / i * (n / i);
                        r += 1;
                        n = i
                    } else {
                        r += i > 0 ? i / n * (i / n) : i
                    }
                }
                return n === Infinity ? Infinity : n * D(r)
            },
            log2: function log2(e) {
                return F(e) * Ir
            },
            log10: function log10(e) {
                return F(e) * Er
            },
            log1p: Y,
            sign: Z,
            sinh: function sinh(e) {
                var t = Number(e);
                if (!T(t) || t === 0) {
                    return t
                }
                var r = k(t);
                if (r < 1) {
                    var n = Math.expm1(r);
                    return Z(t) * n * (1 + 1 / (n + 1)) / 2
                }
                var o = L(r - 1);
                return Z(t) * (o - 1 / (o * Tr * Tr)) * (Tr / 2)
            },
            tanh: function tanh(e) {
                var t = Number(e);
                if (X(t) || t === 0) {
                    return t
                }
                if (t >= 20) {
                    return 1
                }
                if (t <= -20) {
                    return -1
                }
                return (Math.expm1(t) - Math.expm1(-t)) / (L(t) + L(-t))
            },
            trunc: function trunc(e) {
                var t = Number(e);
                return t < 0 ? -_(-t) : _(t)
            },
            imul: function imul(e, t) {
                var r = ce.ToUint32(e);
                var n = ce.ToUint32(t);
                var o = r >>> 16 & 65535;
                var i = r & 65535;
                var a = n >>> 16 & 65535;
                var u = n & 65535;
                return i * u + (o * u + i * a << 16 >>> 0) | 0
            },
            fround: function fround(e) {
                var t = Number(e);
                if (t === 0 || t === Infinity || t === -Infinity || X(t)) {
                    return t
                }
                var r = Z(t);
                var n = k(t);
                if (n < Sr) {
                    return r * Or(n / Sr / wr) * Sr * wr
                }
                var o = (1 + wr / Number.EPSILON) * n;
                var i = o - (o - n);
                if (i > jr || X(i)) {
                    return r * Infinity
                }
                return r * i
            }
        };
        var Mr = function withinULPDistance(e, t, r) {
            return k(1 - e / t) / Number.EPSILON < (r || 8)
        };
        b(Math, Cr);
        h(Math, "sinh", Cr.sinh, Math.sinh(710) === Infinity);
        h(Math, "cosh", Cr.cosh, Math.cosh(710) === Infinity);
        h(Math, "log1p", Cr.log1p, Math.log1p(-1e-17) !== -1e-17);
        h(Math, "asinh", Cr.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
        h(Math, "asinh", Cr.asinh, Math.asinh(1e300) === Infinity);
        h(Math, "atanh", Cr.atanh, Math.atanh(1e-300) === 0);
        h(Math, "tanh", Cr.tanh, Math.tanh(-2e-17) !== -2e-17);
        h(Math, "acosh", Cr.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
        h(Math, "acosh", Cr.acosh, !Mr(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));
        h(Math, "cbrt", Cr.cbrt, !Mr(Math.cbrt(1e-300), 1e-100));
        h(Math, "sinh", Cr.sinh, Math.sinh(-2e-17) !== -2e-17);
        var xr = Math.expm1(10);
        h(Math, "expm1", Cr.expm1, xr > 22025.465794806718 || xr < 22025.465794806718);
        var Nr = Math.round;
        var Ar = Math.round(.5 - Number.EPSILON / 4) === 0 && Math.round(-.5 + Number.EPSILON / 3.99) === 1;
        var Rr = mr + 1;
        var _r = 2 * mr - 1;
        var kr = [Rr, _r].every(function(e) {
            return Math.round(e) === e
        });
        h(Math, "round", function round(e) {
            var t = _(e);
            var r = t === -1 ? -0 : t + 1;
            return e - t < .5 ? t : r
        }, !Ar || !kr);
        m.preserveToString(Math.round, Nr);
        var Lr = Math.imul;
        if (Math.imul(4294967295, 5) !== -5) {
            Math.imul = Cr.imul;
            m.preserveToString(Math.imul, Lr)
        }
        if (Math.imul.length !== 2) {
            ne(Math, "imul", function imul(e, t) {
                return ce.Call(Lr, Math, arguments)
            })
        }
        var Fr = function Fr() {
            var e = S.setTimeout;
            if (typeof e !== "function" && typeof e !== "object") {
                return
            }
            ce.IsPromise = function IsPromise(e) {
                if (!ce.TypeIsObject(e)) {
                    return false
                }
                if (typeof e._promise === "undefined") {
                    return false
                }
                return true
            };
            var r = function r(e) {
                if (!ce.IsConstructor(e)) {
                    throw new TypeError("Bad promise constructor")
                }
                var t = this;
                var r = function r(e, r) {
                    if (t.resolve !== void 0 || t.reject !== void 0) {
                        throw new TypeError("Bad Promise implementation!")
                    }
                    t.resolve = e;
                    t.reject = r
                };
                t.resolve = void 0;
                t.reject = void 0;
                t.promise = new e(r);
                if (!(ce.IsCallable(t.resolve) && ce.IsCallable(t.reject))) {
                    throw new TypeError("Bad promise constructor")
                }
            };
            var n;
            if (typeof window !== "undefined" && ce.IsCallable(window.postMessage)) {
                n = function n() {
                    var e = [];
                    var t = "zero-timeout-message";
                    var r = function r(r) {
                        M(e, r);
                        window.postMessage(t, "*")
                    };
                    var n = function n(r) {
                        if (r.source === window && r.data === t) {
                            r.stopPropagation();
                            if (e.length === 0) {
                                return
                            }
                            var n = N(e);
                            n()
                        }
                    };
                    window.addEventListener("message", n, true);
                    return r
                }
            }
            var o = function o() {
                var e = S.Promise;
                var t = e && e.resolve && e.resolve();
                return t && function(e) {
                    return t.then(e)
                }
            };
            var i = ce.IsCallable(S.setImmediate) ? S.setImmediate : typeof process === "object" && process.nextTick ? process.nextTick : o() || (ce.IsCallable(n) ? n() : function (t) {
                e(t, 0)
            });
            var a = function a(e) {
                return e
            };
            var u = function u(e) {
                throw e
            };
            var f = 0;
            var s = 1;
            var c = 2;
            var l = 0;
            var p = 1;
            var v = 2;
            var y = {};
            var h = function h(e, t, r) {
                i(function() {
                    g(e, t, r)
                })
            };
            var g = function g(e, t, r) {
                var n, o;
                if (t === y) {
                    return e(r)
                }
                try {
                    n = e(r);
                    o = t.resolve
                } catch (i) {
                    n = i;
                    o = t.reject
                }
                o(n)
            };
            var d = function d(e, t) {
                var r = e._promise;
                var n = r.reactionLength;
                if (n > 0) {
                    h(r.fulfillReactionHandler0, r.reactionCapability0, t);
                    r.fulfillReactionHandler0 = void 0;
                    r.rejectReactions0 = void 0;
                    r.reactionCapability0 = void 0;
                    if (n > 1) {
                        for (var o = 1, i = 0; o < n; o++, i += 3) {
                            h(r[i + l], r[i + v], t);
                            e[i + l] = void 0;
                            e[i + p] = void 0;
                            e[i + v] = void 0
                        }
                    }
                }
                r.result = t;
                r.state = s;
                r.reactionLength = 0
            };
            var m = function m(e, t) {
                var r = e._promise;
                var n = r.reactionLength;
                if (n > 0) {
                    h(r.rejectReactionHandler0, r.reactionCapability0, t);
                    r.fulfillReactionHandler0 = void 0;
                    r.rejectReactions0 = void 0;
                    r.reactionCapability0 = void 0;
                    if (n > 1) {
                        for (var o = 1, i = 0; o < n; o++, i += 3) {
                            h(r[i + p], r[i + v], t);
                            e[i + l] = void 0;
                            e[i + p] = void 0;
                            e[i + v] = void 0
                        }
                    }
                }
                r.result = t;
                r.state = c;
                r.reactionLength = 0
            };
            var O = function O(e) {
                var t = false;
                var r = function r(r) {
                    var n;
                    if (t) {
                        return
                    }
                    t = true;
                    if (r === e) {
                        return m(e, new TypeError("Self resolution"))
                    }
                    if (!ce.TypeIsObject(r)) {
                        return d(e, r)
                    }
                    try {
                        n = r.then
                    } catch (o) {
                        return m(e, o)
                    }
                    if (!ce.IsCallable(n)) {
                        return d(e, r)
                    }
                    i(function() {
                        j(e, r, n)
                    })
                };
                var n = function n(r) {
                    if (t) {
                        return
                    }
                    t = true;
                    return m(e, r)
                };
                return {
                    resolve: r,
                    reject: n
                }
            };
            var w = function w(e, r, n, o) {
                if (e === I) {
                    t(e, r, n, o, y)
                } else {
                    t(e, r, n, o)
                }
            };
            var j = function j(e, t, r) {
                var n = O(e);
                var o = n.resolve;
                var i = n.reject;
                try {
                    w(r, t, o, i)
                } catch (a) {
                    i(a)
                }
            };
            var T, I;
            var E = function E() {
                var e = function Promise(t) {
                    if (!(this instanceof e)) {
                        throw new TypeError('Constructor Promise requires "new"')
                    }
                    if (this && this._promise) {
                        throw new TypeError("Bad construction")
                    }
                    if (!ce.IsCallable(t)) {
                        throw new TypeError("not a valid resolver")
                    }
                    var r = Ae(this, e, T, {
                        _promise: {
                            result: void 0,
                            state: f,
                            reactionLength: 0,
                            fulfillReactionHandler0: void 0,
                            rejectReactionHandler0: void 0,
                            reactionCapability0: void 0
                        }
                    });
                    var n = O(r);
                    var o = n.reject;
                    try {
                        t(n.resolve, o)
                    } catch (i) {
                        o(i)
                    }
                    return r
                };
                return e
            }();
            T = E.prototype;
            var P = function P(e, t, r, n) {
                var o = false;
                return function(i) {
                    if (o) {
                        return
                    }
                    o = true;
                    t[e] = i;
                    if (--n.count === 0) {
                        var a = r.resolve;
                        a(t)
                    }
                }
            };
            var C = function C(e, t, r) {
                var n = e.iterator;
                var o = [];
                var i = {
                    count: 1
                };
                var a, u;
                var f = 0;
                while (true) {
                    try {
                        a = ce.IteratorStep(n);
                        if (a === false) {
                            e.done = true;
                            break
                        }
                        u = a.value
                    } catch (s) {
                        e.done = true;
                        throw s
                    }
                    o[f] = void 0;
                    var c = t.resolve(u);
                    var l = P(f, o, r, i);
                    i.count += 1;
                    w(c.then, c, l, r.reject);
                    f += 1
                }
                if (--i.count === 0) {
                    var p = r.resolve;
                    p(o)
                }
                return r.promise
            };
            var x = function x(e, t, r) {
                var n = e.iterator;
                var o, i, a;
                while (true) {
                    try {
                        o = ce.IteratorStep(n);
                        if (o === false) {
                            e.done = true;
                            break
                        }
                        i = o.value
                    } catch (u) {
                        e.done = true;
                        throw u
                    }
                    a = t.resolve(i);
                    w(a.then, a, r.resolve, r.reject)
                }
                return r.promise
            };
            b(E, {
                all: function all(e) {
                    var t = this;
                    if (!ce.TypeIsObject(t)) {
                        throw new TypeError("Promise is not object")
                    }
                    var n = new r(t);
                    var o, i;
                    try {
                        o = ce.GetIterator(e);
                        i = {
                            iterator: o,
                            done: false
                        };
                        return C(i, t, n)
                    } catch (a) {
                        var u = a;
                        if (i && !i.done) {
                            try {
                                ce.IteratorClose(o, true)
                            } catch (f) {
                                u = f
                            }
                        }
                        var s = n.reject;
                        s(u);
                        return n.promise
                    }
                },
                race: function race(e) {
                    var t = this;
                    if (!ce.TypeIsObject(t)) {
                        throw new TypeError("Promise is not object")
                    }
                    var n = new r(t);
                    var o, i;
                    try {
                        o = ce.GetIterator(e);
                        i = {
                            iterator: o,
                            done: false
                        };
                        return x(i, t, n)
                    } catch (a) {
                        var u = a;
                        if (i && !i.done) {
                            try {
                                ce.IteratorClose(o, true)
                            } catch (f) {
                                u = f
                            }
                        }
                        var s = n.reject;
                        s(u);
                        return n.promise
                    }
                },
                reject: function reject(e) {
                    var t = this;
                    if (!ce.TypeIsObject(t)) {
                        throw new TypeError("Bad promise constructor")
                    }
                    var n = new r(t);
                    var o = n.reject;
                    o(e);
                    return n.promise
                },
                resolve: function resolve(e) {
                    var t = this;
                    if (!ce.TypeIsObject(t)) {
                        throw new TypeError("Bad promise constructor")
                    }
                    if (ce.IsPromise(e)) {
                        var n = e.constructor;
                        if (n === t) {
                            return e
                        }
                    }
                    var o = new r(t);
                    var i = o.resolve;
                    i(e);
                    return o.promise
                }
            });
            b(T, {
                "catch": function (e) {
                    return this.then(null, e)
                },
                then: function then(e, t) {
                    var n = this;
                    if (!ce.IsPromise(n)) {
                        throw new TypeError("not a promise")
                    }
                    var o = ce.SpeciesConstructor(n, E);
                    var i;
                    var b = arguments.length > 2 && arguments[2] === y;
                    if (b && o === E) {
                        i = y
                    } else {
                        i = new r(o)
                    }
                    var g = ce.IsCallable(e) ? e : a;
                    var d = ce.IsCallable(t) ? t : u;
                    var m = n._promise;
                    var O;
                    if (m.state === f) {
                        if (m.reactionLength === 0) {
                            m.fulfillReactionHandler0 = g;
                            m.rejectReactionHandler0 = d;
                            m.reactionCapability0 = i
                        } else {
                            var w = 3 * (m.reactionLength - 1);
                            m[w + l] = g;
                            m[w + p] = d;
                            m[w + v] = i
                        }
                        m.reactionLength += 1
                    } else if (m.state === s) {
                        O = m.result;
                        h(g, i, O)
                    } else if (m.state === c) {
                        O = m.result;
                        h(d, i, O)
                    } else {
                        throw new TypeError("unexpected Promise state")
                    }
                    return i.promise
                }
            });
            y = new r(E);
            I = T.then;
            return E
        }();
        if (S.Promise) {
            delete S.Promise.accept;
            delete S.Promise.defer;
            delete S.Promise.prototype.chain
        }
        if (typeof Fr === "function") {
            b(S, {
                Promise: Fr
            });
            var Dr = w(S.Promise, function(e) {
                return e.resolve(42).then(function() {}) instanceof e
            });
            var zr = !i(function() {
                return S.Promise.reject(42).then(null, 5).then(null, W)
            });
            var qr = i(function() {
                return S.Promise.call(3, W)
            });
            var Wr = function Wr(e) {
                var t = e.resolve(5);
                t.constructor = {};
                var r = e.resolve(t);
                try {
                    r.then(null, W).then(null, W)
                } catch (n) {
                    return true
                }
                return t === r
            }(S.Promise);
            var Gr = s && function() {
                var e = 0;
                var t = Object.defineProperty({}, "then", {
                    get: function get() {
                        e += 1
                    }
                });
                Promise.resolve(t);
                return e === 1
            }();
            var Hr = function BadResolverPromise(e) {
                var t = new Promise(e);
                e(3, function() {});
                this.then = t.then;
                this.constructor = BadResolverPromise
            };
            Hr.prototype = Promise.prototype;
            Hr.all = Promise.all;
            var Vr = a(function() {
                return !!Hr.all([1, 2])
            });
            if (!Dr || !zr || !qr || Wr || !Gr || Vr) {
                Promise = Fr;
                ne(S, "Promise", Fr)
            }
            if (Promise.all.length !== 1) {
                var Br = Promise.all;
                ne(Promise, "all", function all(e) {
                    return ce.Call(Br, this, arguments)
                })
            }
            if (Promise.race.length !== 1) {
                var Ur = Promise.race;
                ne(Promise, "race", function race(e) {
                    return ce.Call(Ur, this, arguments)
                })
            }
            if (Promise.resolve.length !== 1) {
                var $r = Promise.resolve;
                ne(Promise, "resolve", function resolve(e) {
                    return ce.Call($r, this, arguments)
                })
            }
            if (Promise.reject.length !== 1) {
                var Jr = Promise.reject;
                ne(Promise, "reject", function reject(e) {
                    return ce.Call(Jr, this, arguments)
                })
            }
            Mt(Promise, "all");
            Mt(Promise, "race");
            Mt(Promise, "resolve");
            Mt(Promise, "reject");
            Ce(Promise)
        }
        var Xr = function Xr(e) {
            var t = n(p(e, function(e, t) {
                e[t] = true;
                return e
            }, {}));
            return e.join(":") === t.join(":")
        };
        var Kr = Xr(["z", "a", "bb"]);
        var Zr = Xr(["z", 1, "a", "3", 2]);
        if (s) {
            var Yr = function fastkey(e, t) {
                if (!t && !Kr) {
                    return null
                }
                if (se(e)) {
                    return "^" + ce.ToString(e)
                } else if (typeof e === "string") {
                    return "$" + e
                } else if (typeof e === "number") {
                    if (!Zr) {
                        return "n" + e
                    }
                    return e
                } else if (typeof e === "boolean") {
                    return "b" + e
                }
                return null
            };
            var Qr = function emptyObject() {
                return Object.create ? Object.create(null) : {}
            };
            var en = function addIterableToMap(e, n, o) {
                if (r(o) || re.string(o)) {
                    l(o, function(e) {
                        if (!ce.TypeIsObject(e)) {
                            throw new TypeError("Iterator value " + e + " is not an entry object")
                        }
                        n.set(e[0], e[1])
                    })
                } else if (o instanceof e) {
                    t(e.prototype.forEach, o, function(e, t) {
                        n.set(t, e)
                    })
                } else {
                    var i, a;
                    if (!se(o)) {
                        a = n.set;
                        if (!ce.IsCallable(a)) {
                            throw new TypeError("bad map")
                        }
                        i = ce.GetIterator(o)
                    }
                    if (typeof i !== "undefined") {
                        while (true) {
                            var u = ce.IteratorStep(i);
                            if (u === false) {
                                break
                            }
                            var f = u.value;
                            try {
                                if (!ce.TypeIsObject(f)) {
                                    throw new TypeError("Iterator value " + f + " is not an entry object")
                                }
                                t(a, n, f[0], f[1])
                            } catch (s) {
                                ce.IteratorClose(i, true);
                                throw s
                            }
                        }
                    }
                }
            };
            var tn = function addIterableToSet(e, n, o) {
                if (r(o) || re.string(o)) {
                    l(o, function(e) {
                        n.add(e)
                    })
                } else if (o instanceof e) {
                    t(e.prototype.forEach, o, function(e) {
                        n.add(e)
                    })
                } else {
                    var i, a;
                    if (!se(o)) {
                        a = n.add;
                        if (!ce.IsCallable(a)) {
                            throw new TypeError("bad set")
                        }
                        i = ce.GetIterator(o)
                    }
                    if (typeof i !== "undefined") {
                        while (true) {
                            var u = ce.IteratorStep(i);
                            if (u === false) {
                                break
                            }
                            var f = u.value;
                            try {
                                t(a, n, f)
                            } catch (s) {
                                ce.IteratorClose(i, true);
                                throw s
                            }
                        }
                    }
                }
            };
            var rn = {
                Map: function Map() {
                    var e = {};
                    var r = function MapEntry(e, t) {
                        this.key = e;
                        this.value = t;
                        this.next = null;
                        this.prev = null
                    };
                    r.prototype.isRemoved = function isRemoved() {
                        return this.key === e
                    };
                    var n = function isMap(e) {
                        return !!e._es6map
                    };
                    var o = function requireMapSlot(e, t) {
                        if (!ce.TypeIsObject(e) || !n(e)) {
                            throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + ce.ToString(e))
                        }
                    };
                    var i = function MapIterator(e, t) {
                        o(e, "[[MapIterator]]");
                        this.head = e._head;
                        this.i = this.head;
                        this.kind = t
                    };
                    i.prototype = {
                        isMapIterator: true,
                        next: function next() {
                            if (!this.isMapIterator) {
                                throw new TypeError("Not a MapIterator")
                            }
                            var e = this.i;
                            var t = this.kind;
                            var r = this.head;
                            if (typeof this.i === "undefined") {
                                return Ke()
                            }
                            while (e.isRemoved() && e !== r) {
                                e = e.prev
                            }
                            var n;
                            while (e.next !== r) {
                                e = e.next;
                                if (!e.isRemoved()) {
                                    if (t === "key") {
                                        n = e.key
                                    } else if (t === "value") {
                                        n = e.value
                                    } else {
                                        n = [e.key, e.value]
                                    }
                                    this.i = e;
                                    return Ke(n)
                                }
                            }
                            this.i = void 0;
                            return Ke()
                        }
                    };
                    Me(i.prototype);
                    var a;
                    var u = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        if (this && this._es6map) {
                            throw new TypeError("Bad construction")
                        }
                        var e = Ae(this, Map, a, {
                            _es6map: true,
                            _head: null,
                            _map: G ? new G : null,
                            _size: 0,
                            _storage: Qr()
                        });
                        var t = new r(null, null);
                        t.next = t.prev = t;
                        e._head = t;
                        if (arguments.length > 0) {
                            en(Map, e, arguments[0])
                        }
                        return e
                    };
                    a = u.prototype;
                    m.getter(a, "size", function() {
                        if (typeof this._size === "undefined") {
                            throw new TypeError("size method called on incompatible Map")
                        }
                        return this._size
                    });
                    b(a, {
                        get: function get(e) {
                            o(this, "get");
                            var t;
                            var r = Yr(e, true);
                            if (r !== null) {
                                t = this._storage[r];
                                if (t) {
                                    return t.value
                                } else {
                                    return
                                }
                            }
                            if (this._map) {
                                t = V.call(this._map, e);
                                if (t) {
                                    return t.value
                                } else {
                                    return
                                }
                            }
                            var n = this._head;
                            var i = n;
                            while ((i = i.next) !== n) {
                                if (ce.SameValueZero(i.key, e)) {
                                    return i.value
                                }
                            }
                        },
                        has: function has(e) {
                            o(this, "has");
                            var t = Yr(e, true);
                            if (t !== null) {
                                return typeof this._storage[t] !== "undefined"
                            }
                            if (this._map) {
                                return B.call(this._map, e)
                            }
                            var r = this._head;
                            var n = r;
                            while ((n = n.next) !== r) {
                                if (ce.SameValueZero(n.key, e)) {
                                    return true
                                }
                            }
                            return false
                        },
                        set: function set(e, t) {
                            o(this, "set");
                            var n = this._head;
                            var i = n;
                            var a;
                            var u = Yr(e, true);
                            if (u !== null) {
                                if (typeof this._storage[u] !== "undefined") {
                                    this._storage[u].value = t;
                                    return this
                                } else {
                                    a = this._storage[u] = new r(e, t);
                                    i = n.prev
                                }
                            } else if (this._map) {
                                if (B.call(this._map, e)) {
                                    V.call(this._map, e).value = t
                                } else {
                                    a = new r(e, t);
                                    U.call(this._map, e, a);
                                    i = n.prev
                                }
                            }
                            while ((i = i.next) !== n) {
                                if (ce.SameValueZero(i.key, e)) {
                                    i.value = t;
                                    return this
                                }
                            }
                            a = a || new r(e, t);
                            if (ce.SameValue(-0, e)) {
                                a.key = +0
                            }
                            a.next = this._head;
                            a.prev = this._head.prev;
                            a.prev.next = a;
                            a.next.prev = a;
                            this._size += 1;
                            return this
                        },
                        "delete": function (t) {
                            o(this, "delete");
                            var r = this._head;
                            var n = r;
                            var i = Yr(t, true);
                            if (i !== null) {
                                if (typeof this._storage[i] === "undefined") {
                                    return false
                                }
                                n = this._storage[i].prev;
                                delete this._storage[i]
                            } else if (this._map) {
                                if (!B.call(this._map, t)) {
                                    return false
                                }
                                n = V.call(this._map, t).prev;
                                H.call(this._map, t)
                            }
                            while ((n = n.next) !== r) {
                                if (ce.SameValueZero(n.key, t)) {
                                    n.key = e;
                                    n.value = e;
                                    n.prev.next = n.next;
                                    n.next.prev = n.prev;
                                    this._size -= 1;
                                    return true
                                }
                            }
                            return false
                        },
                        clear: function clear() {
                            o(this, "clear");
                            this._map = G ? new G : null;
                            this._size = 0;
                            this._storage = Qr();
                            var t = this._head;
                            var r = t;
                            var n = r.next;
                            while ((r = n) !== t) {
                                r.key = e;
                                r.value = e;
                                n = r.next;
                                r.next = r.prev = t
                            }
                            t.next = t.prev = t
                        },
                        keys: function keys() {
                            o(this, "keys");
                            return new i(this, "key")
                        },
                        values: function values() {
                            o(this, "values");
                            return new i(this, "value")
                        },
                        entries: function entries() {
                            o(this, "entries");
                            return new i(this, "key+value")
                        },
                        forEach: function forEach(e) {
                            o(this, "forEach");
                            var r = arguments.length > 1 ? arguments[1] : null;
                            var n = this.entries();
                            for (var i = n.next(); !i.done; i = n.next()) {
                                if (r) {
                                    t(e, r, i.value[1], i.value[0], this)
                                } else {
                                    e(i.value[1], i.value[0], this)
                                }
                            }
                        }
                    });
                    Me(a, a.entries);
                    return u
                }(),
                Set: function Set() {
                    var e = function isSet(e) {
                        return e._es6set && typeof e._storage !== "undefined"
                    };
                    var r = function requireSetSlot(t, r) {
                        if (!ce.TypeIsObject(t) || !e(t)) {
                            throw new TypeError("Set.prototype." + r + " called on incompatible receiver " + ce.ToString(t))
                        }
                    };
                    var o;
                    var i = function Set() {
                        if (!(this instanceof Set)) {
                            throw new TypeError('Constructor Set requires "new"')
                        }
                        if (this && this._es6set) {
                            throw new TypeError("Bad construction")
                        }
                        var e = Ae(this, Set, o, {
                            _es6set: true,
                            "[[SetData]]": null,
                            _storage: Qr()
                        });
                        if (!e._es6set) {
                            throw new TypeError("bad set")
                        }
                        if (arguments.length > 0) {
                            tn(Set, e, arguments[0])
                        }
                        return e
                    };
                    o = i.prototype;
                    var a = function a(e) {
                        var t = e;
                        if (t === "^null") {
                            return null
                        } else if (t === "^undefined") {
                            return void 0
                        } else {
                            var r = t.charAt(0);
                            if (r === "$") {
                                return C(t, 1)
                            } else if (r === "n") {
                                return +C(t, 1)
                            } else if (r === "b") {
                                return t === "btrue"
                            }
                        }
                        return +t
                    };
                    var u = function ensureMap(e) {
                        if (!e["[[SetData]]"]) {
                            var t = new rn.Map;
                            e["[[SetData]]"] = t;
                            l(n(e._storage), function(e) {
                                var r = a(e);
                                t.set(r, r)
                            });
                            e["[[SetData]]"] = t
                        }
                        e._storage = null
                    };
                    m.getter(i.prototype, "size", function() {
                        r(this, "size");
                        if (this._storage) {
                            return n(this._storage).length
                        }
                        u(this);
                        return this["[[SetData]]"].size
                    });
                    b(i.prototype, {
                        has: function has(e) {
                            r(this, "has");
                            var t;
                            if (this._storage && (t = Yr(e)) !== null) {
                                return !!this._storage[t]
                            }
                            u(this);
                            return this["[[SetData]]"].has(e)
                        },
                        add: function add(e) {
                            r(this, "add");
                            var t;
                            if (this._storage && (t = Yr(e)) !== null) {
                                this._storage[t] = true;
                                return this
                            }
                            u(this);
                            this["[[SetData]]"].set(e, e);
                            return this
                        },
                        "delete": function (e) {
                            r(this, "delete");
                            var t;
                            if (this._storage && (t = Yr(e)) !== null) {
                                var n = z(this._storage, t);
                                return delete this._storage[t] && n
                            }
                            u(this);
                            return this["[[SetData]]"]["delete"](e)
                        },
                        clear: function clear() {
                            r(this, "clear");
                            if (this._storage) {
                                this._storage = Qr()
                            }
                            if (this["[[SetData]]"]) {
                                this["[[SetData]]"].clear()
                            }
                        },
                        values: function values() {
                            r(this, "values");
                            u(this);
                            return new f(this["[[SetData]]"].values())
                        },
                        entries: function entries() {
                            r(this, "entries");
                            u(this);
                            return new f(this["[[SetData]]"].entries())
                        },
                        forEach: function forEach(e) {
                            r(this, "forEach");
                            var n = arguments.length > 1 ? arguments[1] : null;
                            var o = this;
                            u(o);
                            this["[[SetData]]"].forEach(function(r, i) {
                                if (n) {
                                    t(e, n, i, i, o)
                                } else {
                                    e(i, i, o)
                                }
                            })
                        }
                    });
                    h(i.prototype, "keys", i.prototype.values, true);
                    Me(i.prototype, i.prototype.values);
                    var f = function SetIterator(e) {
                        this.it = e
                    };
                    f.prototype = {
                        isSetIterator: true,
                        next: function next() {
                            if (!this.isSetIterator) {
                                throw new TypeError("Not a SetIterator")
                            }
                            return this.it.next()
                        }
                    };
                    Me(f.prototype);
                    return i
                }()
            };
            var nn = S.Set && !Set.prototype["delete"] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray((new Set).keys);
            if (nn) {
                S.Set = rn.Set
            }
            if (S.Map || S.Set) {
                var on = a(function() {
                    return new Map([
                        [1, 2]
                    ]).get(1) === 2
                });
                if (!on) {
                    S.Map = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        var e = new G;
                        if (arguments.length > 0) {
                            en(Map, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, S.Map.prototype);
                        return e
                    };
                    S.Map.prototype = O(G.prototype);
                    h(S.Map.prototype, "constructor", S.Map, true);
                    m.preserveToString(S.Map, G)
                }
                var an = new Map;
                var un = function un() {
                    var e = new Map([
                        [1, 0],
                        [2, 0],
                        [3, 0],
                        [4, 0]
                    ]);
                    e.set(-0, e);
                    return e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0)
                }();
                var fn = an.set(1, 2) === an;
                if (!un || !fn) {
                    ne(Map.prototype, "set", function set(e, r) {
                        t(U, this, e === 0 ? 0 : e, r);
                        return this
                    })
                }
                if (!un) {
                    b(Map.prototype, {
                        get: function get(e) {
                            return t(V, this, e === 0 ? 0 : e)
                        },
                        has: function has(e) {
                            return t(B, this, e === 0 ? 0 : e)
                        }
                    }, true);
                    m.preserveToString(Map.prototype.get, V);
                    m.preserveToString(Map.prototype.has, B)
                }
                var sn = new Set;
                var cn = Set.prototype["delete"] && Set.prototype.add && Set.prototype.has && function(e) {
                    e["delete"](0);
                    e.add(-0);
                    return !e.has(0)
                }(sn);
                var ln = sn.add(1) === sn;
                if (!cn || !ln) {
                    var pn = Set.prototype.add;
                    Set.prototype.add = function add(e) {
                        t(pn, this, e === 0 ? 0 : e);
                        return this
                    };
                    m.preserveToString(Set.prototype.add, pn)
                }
                if (!cn) {
                    var vn = Set.prototype.has;
                    Set.prototype.has = function has(e) {
                        return t(vn, this, e === 0 ? 0 : e)
                    };
                    m.preserveToString(Set.prototype.has, vn);
                    var yn = Set.prototype["delete"];
                    Set.prototype["delete"] = function SetDelete(e) {
                        return t(yn, this, e === 0 ? 0 : e)
                    };
                    m.preserveToString(Set.prototype["delete"], yn)
                }
                var hn = w(S.Map, function(e) {
                    var t = new e([]);
                    t.set(42, 42);
                    return t instanceof e
                });
                var bn = Object.setPrototypeOf && !hn;
                var gn = function gn() {
                    try {
                        return !(S.Map() instanceof S.Map)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
                if (S.Map.length !== 0 || bn || !gn) {
                    S.Map = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        var e = new G;
                        if (arguments.length > 0) {
                            en(Map, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, Map.prototype);
                        return e
                    };
                    S.Map.prototype = G.prototype;
                    h(S.Map.prototype, "constructor", S.Map, true);
                    m.preserveToString(S.Map, G)
                }
                var dn = w(S.Set, function(e) {
                    var t = new e([]);
                    t.add(42, 42);
                    return t instanceof e
                });
                var mn = Object.setPrototypeOf && !dn;
                var On = function On() {
                    try {
                        return !(S.Set() instanceof S.Set)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
                if (S.Set.length !== 0 || mn || !On) {
                    var wn = S.Set;
                    S.Set = function Set() {
                        if (!(this instanceof Set)) {
                            throw new TypeError('Constructor Set requires "new"')
                        }
                        var e = new wn;
                        if (arguments.length > 0) {
                            tn(Set, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, Set.prototype);
                        return e
                    };
                    S.Set.prototype = wn.prototype;
                    h(S.Set.prototype, "constructor", S.Set, true);
                    m.preserveToString(S.Set, wn)
                }
                var jn = new S.Map;
                var Sn = !a(function() {
                    return jn.keys().next().done
                });
                if (typeof S.Map.prototype.clear !== "function" || (new S.Set).size !== 0 || jn.size !== 0 || typeof S.Map.prototype.keys !== "function" || typeof S.Set.prototype.keys !== "function" || typeof S.Map.prototype.forEach !== "function" || typeof S.Set.prototype.forEach !== "function" || u(S.Map) || u(S.Set) || typeof jn.keys().next !== "function" || Sn || !hn) {
                    b(S, {
                        Map: rn.Map,
                        Set: rn.Set
                    }, true)
                }
                if (S.Set.prototype.keys !== S.Set.prototype.values) {
                    h(S.Set.prototype, "keys", S.Set.prototype.values, true)
                }
                Me(Object.getPrototypeOf((new S.Map).keys()));
                Me(Object.getPrototypeOf((new S.Set).keys()));
                if (c && S.Set.prototype.has.name !== "has") {
                    var Tn = S.Set.prototype.has;
                    ne(S.Set.prototype, "has", function has(e) {
                        return t(Tn, this, e)
                    })
                }
            }
            b(S, rn);
            Ce(S.Map);
            Ce(S.Set)
        }
        var In = function throwUnlessTargetIsObject(e) {
            if (!ce.TypeIsObject(e)) {
                throw new TypeError("target must be an object")
            }
        };
        var En = {
            apply: function apply() {
                return ce.Call(ce.Call, null, arguments)
            },
            construct: function construct(e, t) {
                if (!ce.IsConstructor(e)) {
                    throw new TypeError("First argument must be a constructor.")
                }
                var r = arguments.length > 2 ? arguments[2] : e;
                if (!ce.IsConstructor(r)) {
                    throw new TypeError("new.target must be a constructor.")
                }
                return ce.Construct(e, t, r, "internal")
            },
            deleteProperty: function deleteProperty(e, t) {
                In(e);
                if (s) {
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (r && !r.configurable) {
                        return false
                    }
                }
                return delete e[t]
            },
            has: function has(e, t) {
                In(e);
                return t in e
            }
        };
        if (Object.getOwnPropertyNames) {
            Object.assign(En, {
                ownKeys: function ownKeys(e) {
                    In(e);
                    var t = Object.getOwnPropertyNames(e);
                    if (ce.IsCallable(Object.getOwnPropertySymbols)) {
                        x(t, Object.getOwnPropertySymbols(e))
                    }
                    return t
                }
            })
        }
        var Pn = function ConvertExceptionToBoolean(e) {
            return !i(e)
        };
        if (Object.preventExtensions) {
            Object.assign(En, {
                isExtensible: function isExtensible(e) {
                    In(e);
                    return Object.isExtensible(e)
                },
                preventExtensions: function preventExtensions(e) {
                    In(e);
                    return Pn(function() {
                        return Object.preventExtensions(e)
                    })
                }
            })
        }
        if (s) {
            var Cn = function get(e, t, r) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (!n) {
                    var o = Object.getPrototypeOf(e);
                    if (o === null) {
                        return void 0
                    }
                    return Cn(o, t, r)
                }
                if ("value" in n) {
                    return n.value
                }
                if (n.get) {
                    return ce.Call(n.get, r)
                }
                return void 0
            };
            var Mn = function set(e, r, n, o) {
                var i = Object.getOwnPropertyDescriptor(e, r);
                if (!i) {
                    var a = Object.getPrototypeOf(e);
                    if (a !== null) {
                        return Mn(a, r, n, o)
                    }
                    i = {
                        value: void 0,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }
                }
                if ("value" in i) {
                    if (!i.writable) {
                        return false
                    }
                    if (!ce.TypeIsObject(o)) {
                        return false
                    }
                    var u = Object.getOwnPropertyDescriptor(o, r);
                    if (u) {
                        return ae.defineProperty(o, r, {
                            value: n
                        })
                    } else {
                        return ae.defineProperty(o, r, {
                            value: n,
                            writable: true,
                            enumerable: true,
                            configurable: true
                        })
                    }
                }
                if (i.set) {
                    t(i.set, o, n);
                    return true
                }
                return false
            };
            Object.assign(En, {
                defineProperty: function defineProperty(e, t, r) {
                    In(e);
                    return Pn(function() {
                        return Object.defineProperty(e, t, r)
                    })
                },
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
                    In(e);
                    return Object.getOwnPropertyDescriptor(e, t)
                },
                get: function get(e, t) {
                    In(e);
                    var r = arguments.length > 2 ? arguments[2] : e;
                    return Cn(e, t, r)
                },
                set: function set(e, t, r) {
                    In(e);
                    var n = arguments.length > 3 ? arguments[3] : e;
                    return Mn(e, t, r, n)
                }
            })
        }
        if (Object.getPrototypeOf) {
            var xn = Object.getPrototypeOf;
            En.getPrototypeOf = function getPrototypeOf(e) {
                In(e);
                return xn(e)
            }
        }
        if (Object.setPrototypeOf && En.getPrototypeOf) {
            var Nn = function Nn(e, t) {
                var r = t;
                while (r) {
                    if (e === r) {
                        return true
                    }
                    r = En.getPrototypeOf(r)
                }
                return false
            };
            Object.assign(En, {
                setPrototypeOf: function setPrototypeOf(e, t) {
                    In(e);
                    if (t !== null && !ce.TypeIsObject(t)) {
                        throw new TypeError("proto must be an object or null")
                    }
                    if (t === ae.getPrototypeOf(e)) {
                        return true
                    }
                    if (ae.isExtensible && !ae.isExtensible(e)) {
                        return false
                    }
                    if (Nn(e, t)) {
                        return false
                    }
                    Object.setPrototypeOf(e, t);
                    return true
                }
            })
        }
        var An = function An(e, t) {
            if (!ce.IsCallable(S.Reflect[e])) {
                h(S.Reflect, e, t)
            } else {
                var r = a(function() {
                    S.Reflect[e](1);
                    S.Reflect[e](NaN);
                    S.Reflect[e](true);
                    return true
                });
                if (r) {
                    ne(S.Reflect, e, t)
                }
            }
        };
        Object.keys(En).forEach(function(e) {
            An(e, En[e])
        });
        var Rn = S.Reflect.getPrototypeOf;
        if (c && Rn && Rn.name !== "getPrototypeOf") {
            ne(S.Reflect, "getPrototypeOf", function getPrototypeOf(e) {
                return t(Rn, S.Reflect, e)
            })
        }
        if (S.Reflect.setPrototypeOf) {
            if (a(function() {
                    S.Reflect.setPrototypeOf(1, {});
                    return true
                })) {
                ne(S.Reflect, "setPrototypeOf", En.setPrototypeOf)
            }
        }
        if (S.Reflect.defineProperty) {
            if (!a(function() {
                    var e = !S.Reflect.defineProperty(1, "test", {
                        value: 1
                    });
                    var t = typeof Object.preventExtensions !== "function" || !S.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                    return e && t
                })) {
                ne(S.Reflect, "defineProperty", En.defineProperty)
            }
        }
        if (S.Reflect.construct) {
            if (!a(function() {
                    var e = function F() {};
                    return S.Reflect.construct(function() {}, [], e) instanceof e
                })) {
                ne(S.Reflect, "construct", En.construct)
            }
        }
        if (String(new Date(NaN)) !== "Invalid Date") {
            var _n = Date.prototype.toString;
            var kn = function toString() {
                var e = +this;
                if (e !== e) {
                    return "Invalid Date"
                }
                return ce.Call(_n, this)
            };
            ne(Date.prototype, "toString", kn)
        }
        var Ln = {
            anchor: function anchor(e) {
                return ce.CreateHTML(this, "a", "name", e)
            },
            big: function big() {
                return ce.CreateHTML(this, "big", "", "")
            },
            blink: function blink() {
                return ce.CreateHTML(this, "blink", "", "")
            },
            bold: function bold() {
                return ce.CreateHTML(this, "b", "", "")
            },
            fixed: function fixed() {
                return ce.CreateHTML(this, "tt", "", "")
            },
            fontcolor: function fontcolor(e) {
                return ce.CreateHTML(this, "font", "color", e)
            },
            fontsize: function fontsize(e) {
                return ce.CreateHTML(this, "font", "size", e)
            },
            italics: function italics() {
                return ce.CreateHTML(this, "i", "", "")
            },
            link: function link(e) {
                return ce.CreateHTML(this, "a", "href", e)
            },
            small: function small() {
                return ce.CreateHTML(this, "small", "", "")
            },
            strike: function strike() {
                return ce.CreateHTML(this, "strike", "", "")
            },
            sub: function sub() {
                return ce.CreateHTML(this, "sub", "", "")
            },
            sup: function sub() {
                return ce.CreateHTML(this, "sup", "", "")
            }
        };
        l(Object.keys(Ln), function(e) {
            var r = String.prototype[e];
            var n = false;
            if (ce.IsCallable(r)) {
                var o = t(r, "", ' " ');
                var i = P([], o.match(/"/g)).length;
                n = o !== o.toLowerCase() || i > 2
            } else {
                n = true
            }
            if (n) {
                ne(String.prototype, e, Ln[e])
            }
        });
        var Fn = function Fn() {
            if (!oe) {
                return false
            }
            var e = typeof JSON === "object" && typeof JSON.stringify === "function" ? JSON.stringify : null;
            if (!e) {
                return false
            }
            if (typeof e($()) !== "undefined") {
                return true
            }
            if (e([$()]) !== "[null]") {
                return true
            }
            var t = {
                a: $()
            };
            t[$()] = true;
            if (e(t) !== "{}") {
                return true
            }
            return false
        }();
        var Dn = a(function() {
            if (!oe) {
                return true
            }
            return JSON.stringify(Object($())) === "{}" && JSON.stringify([Object($())]) === "[{}]"
        });
        if (Fn || !Dn) {
            var zn = JSON.stringify;
            ne(JSON, "stringify", function stringify(e) {
                if (typeof e === "symbol") {
                    return
                }
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o = [e];
                if (!r(n)) {
                    var i = ce.IsCallable(n) ? n : null;
                    var a = function a(e, r) {
                        var n = i ? t(i, this, e, r) : r;
                        if (typeof n !== "symbol") {
                            if (re.symbol(n)) {
                                return Nt({})(n)
                            } else {
                                return n
                            }
                        }
                    };
                    o.push(a)
                } else {
                    o.push(n)
                }
                if (arguments.length > 2) {
                    o.push(arguments[2])
                }
                return zn.apply(this, o)
            })
        }
        return S
    });
    //# sourceMappingURL=es6-shim.map
}
