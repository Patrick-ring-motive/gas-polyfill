function importEs6Sham() {
    /*!
     * https://github.com/paulmillr/es6-shim
     * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
     *   and contributors,  MIT License
     * es6-sham: v0.35.4
     * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
     * Details and documentation:
     * https://github.com/paulmillr/es6-shim/
     */
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            define(e)
        } else if (typeof exports === "object") {
            module.exports = e()
        } else {
            t.returnExports = e()
        }
    })(this, function() {
        "use strict";
        var t = new Function("return this;");
        var e = t();
        var r = e.Object;
        var n = Function.call.bind(Function.call);
        var o = Function.toString;
        var i = String.prototype.match;
        var f = function f(t) {
            try {
                t();
                return false
            } catch (e) {
                return true
            }
        };
        var u = function u() {
            return !f(function() {
                r.defineProperty({}, "x", {
                    get: function get() {}
                })
            })
        };
        var a = !!r.defineProperty && u();
        (function() {
            if (r.setPrototypeOf) {
                return
            }
            var t = r.getOwnPropertyNames;
            var e = r.getOwnPropertyDescriptor;
            var n = r.create;
            var o = r.defineProperty;
            var i = r.getPrototypeOf;
            var f = r.prototype;
            var u = function u(r, n) {
                t(n).forEach(function(t) {
                    o(r, t, e(n, t))
                });
                return r
            };
            var a = function a(t, e) {
                return u(n(e), t)
            };
            var c, s;
            try {
                c = e(f, "__proto__").set;
                c.call({}, null);
                s = function s(t, e) {
                    c.call(t, e);
                    return t
                }
            } catch (p) {
                c = {
                    __proto__: null
                };
                if (c instanceof r) {
                    s = a
                } else {
                    c.__proto__ = f;
                    if (c instanceof r) {
                        s = function s(t, e) {
                            t.__proto__ = e;
                            return t
                        }
                    } else {
                        s = function s(t, e) {
                            if (i(t)) {
                                t.__proto__ = e;
                                return t
                            } else {
                                return a(t, e)
                            }
                        }
                    }
                }
            }
            r.setPrototypeOf = s
        })();
        if (a && function foo() {}.name !== "foo") {
            r.defineProperty(Function.prototype, "name", {
                configurable: true,
                enumerable: false,
                get: function get() {
                    if (this === Function.prototype) {
                        return ""
                    }
                    var t = n(o, this);
                    var e = n(i, t, /\s*function\s+([^(\s]*)\s*/);
                    var f = e && e[1];
                    r.defineProperty(this, "name", {
                        configurable: true,
                        enumerable: false,
                        writable: false,
                        value: f
                    });
                    return f
                }
            })
        }
    });
    //# sourceMappingURL=es6-sham.map
}
