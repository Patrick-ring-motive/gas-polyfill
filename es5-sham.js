function importEs5Sham() {
    /*!
     * https://github.com/es-shims/es5-shim
     * @license es5-shim Copyright 2009-2020 by contributors, MIT License
     * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
     */
    (function(e, t) {
        "use strict";
        if (typeof define === "function" && define.amd) {
            define(t)
        } else if (typeof exports === "object") {
            module.exports = t()
        } else {
            e.returnExports = t()
        }
    })(this, function() {
        var e = Function.call;
        var t = Object.prototype;
        var r = e.bind(t.hasOwnProperty);
        var n = e.bind(t.propertyIsEnumerable);
        var o = e.bind(t.toString);
        var i;
        var c;
        var f;
        var a;
        var l = r(t, "__defineGetter__");
        if (l) {
            i = e.bind(t.__defineGetter__);
            c = e.bind(t.__defineSetter__);
            f = e.bind(t.__lookupGetter__);
            a = e.bind(t.__lookupSetter__)
        }
        var u = function isPrimitive(e) {
            return e == null || typeof e !== "object" && typeof e !== "function"
        };
        if (!Object.getPrototypeOf) {
            Object.getPrototypeOf = function getPrototypeOf(e) {
                var r = e.__proto__;
                if (r || r === null) {
                    return r
                } else if (o(e.constructor) === "[object Function]") {
                    return e.constructor.prototype
                } else if (e instanceof Object) {
                    return t
                } else {
                    return null
                }
            }
        }
        if (Object.defineProperty) {
            var s = function doesGetOwnPropertyDescriptorWork(e) {
                try {
                    e.sentinel = 0;
                    return Object.getOwnPropertyDescriptor(e, "sentinel").value === 0
                } catch (t) {
                    return false
                }
            };
            var p = s({});
            var b = typeof document === "undefined" || s(document.createElement("div"));
            if (!b || !p) {
                var O = Object.getOwnPropertyDescriptor
            }
        }
        if (!Object.getOwnPropertyDescriptor || O) {
            var d = "Object.getOwnPropertyDescriptor called on a non-object: ";
            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(e, o) {
                if (u(e)) {
                    throw new TypeError(d + e)
                }
                if (O) {
                    try {
                        return O.call(Object, e, o)
                    } catch (i) {}
                }
                var c;
                if (!r(e, o)) {
                    return c
                }
                c = {
                    enumerable: n(e, o),
                    configurable: true
                };
                if (l) {
                    var s = e.__proto__;
                    var p = e !== t;
                    if (p) {
                        e.__proto__ = t
                    }
                    var b = f(e, o);
                    var y = a(e, o);
                    if (p) {
                        e.__proto__ = s
                    }
                    if (b || y) {
                        if (b) {
                            c.get = b
                        }
                        if (y) {
                            c.set = y
                        }
                        return c
                    }
                }
                c.value = e[o];
                c.writable = true;
                return c
            }
        }
        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(e) {
                return Object.keys(e)
            }
        }
        if (!Object.create) {
            var y;
            var j = !({
                    __proto__: null
                }
                instanceof Object);
            var v = function shouldUseActiveX() {
                if (!document.domain) {
                    return false
                }
                try {
                    return !!new ActiveXObject("htmlfile")
                } catch (e) {
                    return false
                }
            };
            var _ = function getEmptyViaActiveX() {
                var e;
                var t;
                t = new ActiveXObject("htmlfile");
                var r = "script";
                t.write("<" + r + "></" + r + ">");
                t.close();
                e = t.parentWindow.Object.prototype;
                t = null;
                return e
            };
            var w = function getEmptyViaIFrame() {
                var e = document.createElement("iframe");
                var t = document.body || document.documentElement;
                var r;
                e.style.display = "none";
                t.appendChild(e);
                e.src = "javascript:";
                r = e.contentWindow.Object.prototype;
                t.removeChild(e);
                e = null;
                return r
            };
            if (j || typeof document === "undefined") {
                y = function y() {
                    return {
                        __proto__: null
                    }
                }
            } else {
                y = function y() {
                    var e = v() ? _() : w();
                    delete e.constructor;
                    delete e.hasOwnProperty;
                    delete e.propertyIsEnumerable;
                    delete e.isPrototypeOf;
                    delete e.toLocaleString;
                    delete e.toString;
                    delete e.valueOf;
                    var t = function Empty() {};
                    t.prototype = e;
                    y = function y() {
                        return new t
                    };
                    return new t
                }
            }
            Object.create = function create(e, t) {
                var r;
                var n = function Type() {};
                if (e === null) {
                    r = y()
                } else if (u(e)) {
                    throw new TypeError("Object prototype may only be an Object or null")
                } else {
                    n.prototype = e;
                    r = new n;
                    r.__proto__ = e
                }
                if (t !== void 0) {
                    Object.defineProperties(r, t)
                }
                return r
            }
        }
        var m = function doesDefinePropertyWork(e) {
            try {
                Object.defineProperty(e, "sentinel", {});
                return "sentinel" in e
            } catch (t) {
                return false
            }
        };
        if (Object.defineProperty) {
            var P = m({});
            var E = typeof document === "undefined" || m(document.createElement("div"));
            if (!P || !E) {
                var h = Object.defineProperty,
                    g = Object.defineProperties
            }
        }
        if (!Object.defineProperty || h) {
            var z = "Property description must be an object: ";
            var T = "Object.defineProperty called on non-object: ";
            var x = "getters & setters can not be defined on this javascript engine";
            Object.defineProperty = function defineProperty(e, r, n) {
                if (u(e)) {
                    throw new TypeError(T + e)
                }
                if (u(n)) {
                    throw new TypeError(z + n)
                }
                if (h) {
                    try {
                        return h.call(Object, e, r, n)
                    } catch (o) {}
                }
                if ("value" in n) {
                    if (l && (f(e, r) || a(e, r))) {
                        var s = e.__proto__;
                        e.__proto__ = t;
                        delete e[r];
                        e[r] = n.value;
                        e.__proto__ = s
                    } else {
                        e[r] = n.value
                    }
                } else {
                    var p = "get" in n;
                    var b = "set" in n;
                    if (!l && (p || b)) {
                        throw new TypeError(x)
                    }
                    if (p) {
                        i(e, r, n.get)
                    }
                    if (b) {
                        c(e, r, n.set)
                    }
                }
                return e
            }
        }
        if (!Object.defineProperties || g) {
            Object.defineProperties = function defineProperties(e, t) {
                if (g) {
                    try {
                        return g.call(Object, e, t)
                    } catch (r) {}
                }
                Object.keys(t).forEach(function(r) {
                    if (r !== "__proto__") {
                        Object.defineProperty(e, r, t[r])
                    }
                });
                return e
            }
        }
        if (!Object.seal) {
            Object.seal = function seal(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.seal can only be called on Objects.")
                }
                return e
            }
        }
        if (!Object.freeze) {
            Object.freeze = function freeze(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.freeze can only be called on Objects.")
                }
                return e
            }
        }
        try {
            Object.freeze(function() {})
        } catch (S) {
            Object.freeze = function freeze(e) {
                return function freeze(t) {
                    if (typeof t === "function") {
                        return t
                    } else {
                        return e(t)
                    }
                }
            }(Object.freeze)
        }
        if (!Object.preventExtensions) {
            Object.preventExtensions = function preventExtensions(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.preventExtensions can only be called on Objects.")
                }
                return e
            }
        }
        if (!Object.isSealed) {
            Object.isSealed = function isSealed(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isSealed can only be called on Objects.")
                }
                return false
            }
        }
        if (!Object.isFrozen) {
            Object.isFrozen = function isFrozen(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isFrozen can only be called on Objects.")
                }
                return false
            }
        }
        if (!Object.isExtensible) {
            Object.isExtensible = function isExtensible(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isExtensible can only be called on Objects.")
                }
                var t = "";
                while (r(e, t)) {
                    t += "?"
                }
                e[t] = true;
                var n = r(e, t);
                delete e[t];
                return n
            }
        }
    });
    //# sourceMappingURL=es5-sham.map
}
