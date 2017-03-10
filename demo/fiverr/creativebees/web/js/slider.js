function initForm() {
    
    var e = document.getElementsByTagName("form")[0];
    addEvent(e, "submit", SubmitButton),ifInstructs(),showRangeCounters() }

function addEvent(e, t, n) {
    e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
        e["e" + t + n](window.event)
    }, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1)
}! function() {
    var e = [].slice;
    this.namespace = function(t, n, r) {
        var i, o, a, s, l, u;
        for (arguments.length < 3 && (l = ["undefined" != typeof exports ? exports : window].concat(e.call(arguments)), t = l[0], n = l[1], r = l[2]), o = t, u = n.split("."), a = 0, s = u.length; s > a; a++) i = u[a], t = t[i] || (t[i] = {});
        return r(t, o)
    }
}.call(this),
function(e, t) {
    function n(e) {
        var t = e.length,
            n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Ft[e] = {};
        return ct.each(e.match(ft) || [], function(e, n) {
            t[n] = !0
        }), t
    }


    function i(e, n, r, i) {
        if (ct.acceptData(e)) {
            var o, a, s = ct.expando,
                l = e.nodeType,
                u = l ? ct.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = tt.pop() || ct.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ct.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ct.cache : e,
                l = o ? e[ct.expando] : ct.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ct.isEmptyObject(r)) return
                }(n || (delete a[l].data, s(a[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ct.parseJSON(r) : r
                } catch (o) {}
                ct.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ct.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (zt.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function(e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }

    function p(e) {
        var t = Xt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
    }
















    function C(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Fn.length; i--;)
            if (t = Fn[i] + n, t in e) return t;
        return r
    }










    function F(e, t, n) {
        var r = yn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ct.css(e, n + Tn[o], !0, i)), r ? ("content" === n && (a -= ct.css(e, "padding" + Tn[o], !0, i)), "margin" !== n && (a -= ct.css(e, "border" + Tn[o] + "Width", !0, i))) : (a += ct.css(e, "padding" + Tn[o], !0, i), "padding" !== n && (a += ct.css(e, "border" + Tn[o] + "Width", !0, i)));
        return a
    }















    function N(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = dn(e),
            a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = fn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ct.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ft) || [];
            if (ct.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function M(e, n) {
        var r, i, o = ct.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ct.extend(!0, e, r), e
    }

    function P() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function W(e, t, n) {
        var r, i, o = 0,
            a = ir.length,
            s = ct.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Qn || $(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: ct.extend({}, t),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qn || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (q(c, u.opts.specialEasing); a > o; o++)
            if (r = ir[o].call(u, e, c, u.opts)) return r;
        return ct.map(c, R, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
     function z(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {}, d = e.style,
            f = e.nodeType && k(e),
            p = ct._data(e, "fxshow");
        n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tr.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = p && p[r] || ct.style(e, r)
            }
        if (!ct.isEmptyObject(c)) {
            p ? "hidden" in p && (f = p.hidden) : p = ct._data(e, "fxshow", {}), o && (p.hidden = !f), f ? ct(e).show() : u.done(function() {
                ct(e).hide()
            }), u.done(function() {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (r in c) a = R(f ? p[r] : 0, r, u), r in p || (p[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }






















    function I(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function V(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, Z, U = typeof t,
        K = e.location,
        J = e.document,
        Y = J.documentElement,
        G = e.jQuery,
        Q = e.$,
        et = {}, tt = [],
        nt = "1.10.1",
        rt = tt.concat,
        it = tt.push,
        ot = tt.slice,
        at = tt.indexOf,
        st = et.toString,
        lt = et.hasOwnProperty,
        ut = nt.trim,
        ct = function(e, t) {
            return new ct.fn.init(e, t, Z)
        }, dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ft = /\S+/g,
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^[\],:{}\s]*$/,
        vt = /(?:^|:|,)(?:\s*\[)+/g,
        yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xt = /^-ms-/,
        wt = /-([\da-z])/gi,
        Ct = function(e, t) {
            return t.toUpperCase()
        }, kt = function(e) {
            (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (Tt(), ct.ready())
        }, Tt = function() {
            J.addEventListener ? (J.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (J.detachEvent("onreadystatechange", kt), e.detachEvent("onload", kt))
        };
    ct.fn = ct.prototype = {
        jquery: nt,
        constructor: ct,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), mt.test(i[1]) && ct.isPlainObject(n))
                        for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = J.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ct.each(this, e, t)
        },
        ready: function(e) {
            return ct.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },

        map: function(e) {
            return this.pushStack(ct.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[i] = ct.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ct.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ct && (e.$ = Q), t && e.jQuery === ct && (e.jQuery = G), ct
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ct.readyWait++ : ct.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                if (!J.body) return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (X.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ct.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ct.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
            try {
                if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (ct.support.ownLast)
                for (n in e) return lt.call(e, n);
            for (n in e);
            return n === t || lt.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || J;
            var r = mt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && ct.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(xt, "ms-").replace(wt, Ct)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: ut && !ut.call("ï»¿Â ") ? function(e) {
            return null == e ? "" : ut.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(pt, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (at) return at.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === ct.type(r)) {
                o = !0;
                for (l in r) ct.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, ct.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(ct(e), n)
            })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },


        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), ct.ready.promise = function(t) {
        if (!X)
            if (X = ct.Deferred(), "complete" === J.readyState) setTimeout(ct.ready);
            else if (J.addEventListener) J.addEventListener("DOMContentLoaded", kt, !1), e.addEventListener("load", kt, !1);
        else {
            J.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
            var n = !1;
            try {
                n = null == e.frameElement && J.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ct.ready()
                }
            }()
        }
        return X.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), Z = ct(J),
    function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, l, u, c, d, f, p;
            if ((t ? t.ownerDocument || t : I) !== P && O(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if ($ && !r) {
                if (i = kt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && z(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return it.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && N.getElementsByClassName && t.getElementsByClassName) return it.apply(n, t.getElementsByClassName(a)), n
                    }
                if (N.qsa && (!R || !R.test(e))) {
                    if (d = c = B, f = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = m(e), (c = t.getAttribute("id")) ? d = c.replace(Et, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + g(u[l]);
                        f = vt.test(e) && t.parentNode || t, p = u.join(",")
                    }
                    if (p) try {
                        return it.apply(n, f.querySelectorAll(p)), n
                    } catch (h) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ht, "$1"), t, n, r)
        }

        function r(e) {
            return Ct.test(e + "")
        }

        function i() {
            function e(n, r) {
                return t.push(n += " ") > D.cacheLength && delete e[t.shift()], e[n] = r
            }
            var t = [];
            return e
        }

        function o(e) {
            return e[B] = !0, e
        }

        function a(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t, n) {
            e = e.split("|");
            for (var r, i = e.length, o = n ? null : t; i--;)(r = D.attrHandle[e[i]]) && r !== t || (D.attrHandle[e[i]] = o)
        }

        function l(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
        }

        function u(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }

        function c(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }

        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }



        function p(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
         function m(e, t) {
            var r, i, o, a, s, l, u, c = U[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = D.preFilter; s;) {
                (!r || (i = mt.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = gt.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ht, " ")
                }), s = s.slice(r.length));
                for (a in D.filter)!(i = wt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length : s ? n.error(e) : U(e, l).slice(0)
        }




        function g(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function v(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = X++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u, c = V + " " + o;
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i)
                            if (u = t[B] || (t[B] = {}), (l = u[r]) && l[0] === c) {
                                if ((s = l[1]) === !0 || s === S) return s === !0
                            } else if (l = u[r] = [c], l[1] = e(t, n, a) || S, l[1] === !0) return !0
            }
        }

        function y(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function b(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function x(e, t, n, r, i, a) {
            return r && !r[B] && (r = x(r)), i && !i[B] && (i = x(i, a)), o(function(o, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = o || k(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !o && t ? m : b(m, f, e, s, l),
                    v = n ? i || (o ? e : h || r) ? [] : a : g;
                if (n && n(g, v, s, l), r)
                    for (u = b(v, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (u = i ? at.call(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else v = b(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : it.apply(a, v)
            })
        }

        function w(e) {
            for (var t, n, r, i = e.length, o = D.relative[e[0].type], a = o || D.relative[" "], s = o ? 1 : 0, l = v(function(e) {
                    return e === t
                }, a, !0), u = v(function(e) {
                    return at.call(t, e) > -1
                }, a, !0), c = [
                    function(e, n, r) {
                        return !o && (r || n !== M) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                    }
                ]; i > s; s++)
                if (n = D.relative[e[s].type]) c = [v(y(c), n)];
                else {
                    if (n = D.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !D.relative[e[r].type]; r++);
                        return x(s > 1 && y(c), s > 1 && g(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ht, "$1"), n, r > s && w(e.slice(s, r)), i > r && w(e = e.slice(r)), i > r && g(e))
                    }
                    c.push(n)
                }
            return y(c)
        }

        function C(e, t) {
            var r = 0,
                i = t.length > 0,
                a = e.length > 0,
                s = function(o, s, l, u, c) {
                    var d, f, p, h = [],
                        m = 0,
                        g = "0",
                        v = o && [],
                        y = null != c,
                        x = M,
                        w = o || a && D.find.TAG("*", c && s.parentNode || s),
                        C = V += null == x ? 1 : Math.random() || .1;
                    for (y && (M = s !== P && s, S = r); null != (d = w[g]); g++) {
                        if (a && d) {
                            for (f = 0; p = e[f++];)
                                if (p(d, s, l)) {
                                    u.push(d);
                                    break
                                }
                            y && (V = C, S = ++r)
                        }
                        i && ((d = !p && d) && m--, o && v.push(d))
                    }
                    if (m += g, i && g !== m) {
                        for (f = 0; p = t[f++];) p(v, h, s, l);
                        if (o) {
                            if (m > 0)
                                for (; g--;) v[g] || h[g] || (h[g] = nt.call(u));
                            h = b(h)
                        }
                        it.apply(u, h), y && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                    }
                    return y && (V = C, M = x), v
                };
            return i ? o(s) : s
        }


        function k(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r
        }

        function T(e, t, n, r) {
            var i, o, a, s, l, u = m(e);
            if (!r && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && N.getById && 9 === t.nodeType && $ && D.relative[o[1].type]) {
                    if (t = (D.find.ID(a.matches[0].replace(Nt, St), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = wt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !D.relative[s = a.type]);)
                    if ((l = D.find[s]) && (r = l(a.matches[0].replace(Nt, St), vt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && g(o), !e) return it.apply(n, r), n;
                        break
                    }
            }
            return j(e, u)(r, t, !$, n, vt.test(e)), n
        }

        function F() {}
        var E, N, S, D, A, L, j, M, H, O, P, _, $, R, W, q, z, B = "sizzle" + -new Date,
            I = e.document,
            V = 0,
            X = 0,
            Z = i(),
            U = i(),
            K = i(),
            J = !1,
            Y = function() {
                return 0
            }, G = typeof t,
            Q = 1 << 31,
            et = {}.hasOwnProperty,
            tt = [],
            nt = tt.pop,
            rt = tt.push,
            it = tt.push,
            ot = tt.slice,
            at = tt.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            lt = "[\\x20\\t\\r\\n\\f]",
            ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            dt = ut.replace("w", "w#"),
            ft = "\\[" + lt + "*(" + ut + ")" + lt + "*(?:([*^$|!~]?=)" + lt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + dt + ")|)|)" + lt + "*\\]",
            pt = ":(" + ut + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ft.replace(3, 8) + ")*)|.*)\\)|)",
            ht = RegExp("^" + lt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + lt + "+$", "g"),
            mt = RegExp("^" + lt + "*," + lt + "*"),
            gt = RegExp("^" + lt + "*([>+~]|" + lt + ")" + lt + "*"),
            vt = RegExp(lt + "*[+~]"),
            yt = RegExp("=" + lt + "*([^\\]'\"]*)" + lt + "*\\]", "g"),
            bt = RegExp(pt),
            xt = RegExp("^" + dt + "$"),
            wt = {
                ID: RegExp("^#(" + ut + ")"),
                CLASS: RegExp("^\\.(" + ut + ")"),
                TAG: RegExp("^(" + ut.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ft),
                PSEUDO: RegExp("^" + pt),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + lt + "*(even|odd|(([+-]|)(\\d*)n|)" + lt + "*(?:([+-]|)" + lt + "*(\\d+)|))" + lt + "*\\)|)", "i"),
                bool: RegExp("^(?:" + st + ")$", "i"),
                needsContext: RegExp("^" + lt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + lt + "*((?:-\\d)?\\d*)" + lt + "*\\)|)(?=[^-]|$)", "i")
            }, Ct = /^[^{]+\{\s*\[native \w/,
            kt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Tt = /^(?:input|select|textarea|button)$/i,
            Ft = /^h\d$/i,
            Et = /'|\\/g,
            Nt = RegExp("\\\\([\\da-f]{1,6}" + lt + "?|(" + lt + ")|.)", "ig"),
            St = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            it.apply(tt = ot.call(I.childNodes), I.childNodes), tt[I.childNodes.length].nodeType
        } catch (Dt) {
            it = {
                apply: tt.length ? function(e, t) {
                    rt.apply(e, ot.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        L = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = n.support = {}, O = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : I,
                i = n.parentWindow;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, _ = n.documentElement, $ = !L(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
                O()
            }), N.attributes = a(function(e) {
                return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), s(st, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
            }), N.input = a(function(e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }), s("value", c, N.attributes && N.input), N.getElementsByTagName = a(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), N.getElementsByClassName = a(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), N.getById = a(function(e) {
                return _.appendChild(e).id = B, !n.getElementsByName || !n.getElementsByName(B).length
            }), N.getById ? (D.find.ID = function(e, t) {
                if (typeof t.getElementById !== G && $) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, D.filter.ID = function(e) {
                var t = e.replace(Nt, St);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete D.find.ID, D.filter.ID = function(e) {
                var t = e.replace(Nt, St);
                return function(e) {
                    var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), D.find.TAG = N.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(e) : t
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, D.find.CLASS = N.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== G && $ ? n.getElementsByClassName(e) : t
            }, W = [], R = [], (N.qsa = r(n.querySelectorAll)) && (a(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || R.push("\\[" + lt + "*(?:value|" + st + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
            }), a(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && R.push("[*^$]=" + lt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (N.matchesSelector = r(q = _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && a(function(e) {
                N.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), W.push("!=", pt)
            }), R = R.length && RegExp(R.join("|")), W = W.length && RegExp(W.join("|")), z = r(_.contains) || _.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, N.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"))
            }), Y = _.compareDocumentPosition ? function(e, t) {
                if (e === t) return J = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !N.sortDetached && t.compareDocumentPosition(e) === r ? e === n || z(I, e) ? -1 : t === n || z(I, t) ? 1 : H ? at.call(H, e) - at.call(H, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (e === t) return J = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : H ? at.call(H, e) - at.call(H, t) : 0;
                if (o === a) return d(e, t);
                for (r = e; r = r.parentNode;) s.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; s[i] === l[i];) i++;
                return i ? d(s[i], l[i]) : s[i] === I ? -1 : l[i] === I ? 1 : 0
            }, n) : P
        }, n.matches = function(e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== P && O(e), t = t.replace(yt, "='$1']"), !(!N.matchesSelector || !$ || W && W.test(t) || R && R.test(t))) try {
                var r = q.call(e, t);
                if (r || N.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return n(t, P, null, [e]).length > 0
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && O(e), z(e, t)
        }, n.attr = function(e, n) {
            (e.ownerDocument || e) !== P && O(e);
            var r = D.attrHandle[n.toLowerCase()],
                i = r && et.call(D.attrHandle, n.toLowerCase()) ? r(e, n, !$) : t;
            return i === t ? N.attributes || !$ ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (J = !N.detectDuplicates, H = !N.sortStable && e.slice(0), e.sort(Y), J) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, A = n.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += A(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += A(t);
            return n
        }, D = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: wt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Nt, St), e[3] = (e[4] || e[5] || "").replace(Nt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return wt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && bt.test(r) && (n = m(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Nt, St).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = Z[e + " "];
                    return t || (t = RegExp("(^|" + lt + ")" + e + "(" + lt + "|$)")) && Z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[B] || (g[B] = {}), u = c[e] || [], p = u[0] === V && u[1], f = u[0] === V && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [V, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[B] || (t[B] = {}))[e]) && u[0] === V) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[B] || (d[B] = {}))[e] = [V, f]), d !== t)););
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var r, i = D.pseudos[e] || D.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return i[B] ? i(t) : i.length > 1 ? (r = [e, e, "", t], D.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--;) r = at.call(e, o[a]), e[r] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, r)
                    }) : i
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [],
                        n = [],
                        r = j(e.replace(ht, "$1"));
                    return r[B] ? o(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
                    }
                }),
                lang: o(function(e) {
                    return xt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Nt, St).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === _
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !D.pseudos.empty(e)
                },
                header: function(e) {
                    return Ft.test(e.nodeName)
                },
                input: function(e) {
                    return Tt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(e, t) {
                    return [t - 1]
                }),
                eq: h(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: h(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: h(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: h(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: h(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (E in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[E] = f(E);
        for (E in {
            submit: !0,
            reset: !0
        }) D.pseudos[E] = p(E);
        j = n.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = K[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--;) o = w(t[n]), o[B] ? r.push(o) : i.push(o);
                o = K(e, C(i, r))
            }
            return o
        }, D.pseudos.nth = D.pseudos.eq, F.prototype = D.filters = D.pseudos, D.setFilters = new F, N.sortStable = B.split("").sort(Y).join("") === B, O(), [0, 0].sort(Y), N.detectDuplicates = J, ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var Ft = {};
    ct.Callbacks = function(e) {
        e = "string" == typeof e ? Ft[e] || r(e) : ct.extend({}, e);
        var n, i, o, a, s, l, u = [],
            c = !e.once && [],
            d = function(t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++)
                    if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : f.disable())
            }, f = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function r(t) {
                            ct.each(t, function(t, n) {
                                var i = ct.type(n);
                                "function" === i ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = u.length : i && (l = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return u && ct.each(arguments, function(e, t) {
                        for (var r;
                            (r = ct.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = c = i = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = t, i || f.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || o && !c || (n ? c.push(t) : d(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ct.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ct.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ct.Deferred(function(n) {
                            ct.each(t, function(t, o) {
                                var a = o[0],
                                    s = ct.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ct.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ct.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = ot.call(arguments),
                a = o.length,
                s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ct.Deferred(),
                u = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ct.support = function(t) {
        var n, r, i, o, a, s, l, u, c, d = J.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = J.createElement("select"), s = o.appendChild(J.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! i.value, t.optSelected = s.selected, t.enctype = !! J.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = J.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = J.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c, ct(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(J.createElement("div")), r.style.cssText = d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== U && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Nt = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !! e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ct.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                s = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), a(l, i, o[i]));
                    ct._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ct.data(this, e, n)
            }) : l ? a(l, e, ct.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ct.removeData(this, e)
            })
        }
    }), ct.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ct._data(e, n), r && (!i || ct.isArray(r) ? i = ct._data(e, n, ct.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ct._queueHooks(e, t),
                a = function() {
                    ct.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                empty: ct.Callbacks("once memory").add(function() {
                    ct._removeData(e, t + "queue"), ct._removeData(e, n)
                })
            })
        }
    }), ct.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ct.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = ct.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ct._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var St, Dt, At = /[\t\r\n\f]/g,
        Lt = /\r/g,
        jt = /^(?:input|select|textarea|button|object)$/i,
        Mt = /^(?:a|area)$/i,
        Ht = /^(?:checked|selected)$/i,
        Ot = ct.support.getSetAttribute,
        Pt = ct.support.input;
    ct.fn.extend({
        attr: function(e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ct.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ct.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ft) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ct.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ft) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ct.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return ct.isFunction(e) ? this.each(function(n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, a = ct(this), s = t, l = e.match(ft) || []; i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === U || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ct.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ct(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ct.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ct.inArray(ct(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === U ? ct.prop(e, n, r) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), i = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? Dt : St)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(ft);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Pt && Ot || !Ht.test(n) ? e[r] = !1 : e[ct.camelCase("default-" + n)] = e[r] = !1 : ct.attr(e, n, ""), e.removeAttribute(Ot ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Dt = {
        set: function(e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : Pt && Ot || !Ht.test(n) ? e.setAttribute(!Ot && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = Pt && Ot || !Ht.test(n) ? function(e, n, i) {
            var o = ct.expr.attrHandle[n],
                a = i ? t : (ct.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Pt && Ot || (ct.attrHooks.value = {
        set: function(e, n, r) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : St && St.set(e, n, r)
        }
    }), Ot || (St = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ct.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: St.set
    }, ct.attrHooks.contenteditable = {
        set: function(e, t, n) {
            St.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function(e, n) {
        ct.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function(e, t) {
        ct.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
        ct.valHooks[this] = {
            set: function(e, n) {
                return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _t = /^(?:input|select|textarea)$/i,
        $t = /^key/,
        Rt = /^(?:mouse|contextmenu)|click/,
        Wt = /^(?:focusinfocus|focusoutblur)$/,
        qt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, l, u, c, d, f, p, h, m, g, v = ct._data(e);
            if (v) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ct.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                    return typeof ct === U || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), n = (n || "").match(ft) || [""], l = n.length; l--;) a = qt.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (c = ct.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ct.event.special[h] || {}, f = ct.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, u), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, f) : p.push(f), ct.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = ct.hasData(e) && ct._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ft) || [""], u = t.length; u--;)
                    if (s = qt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ct.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ct.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) ct.event.remove(e, p + t[u], n, r, !0);
                ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, l, u, c, d, f, p = [i || J],
                h = lt.call(n, "type") ? n.type : n,
                m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = d = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Wt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), c = ct.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(i)) {
                    for (u = c.delegateType || h, Wt.test(u + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                    d === (i.ownerDocument || J) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0;
                    (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? u : c.bindType || h, a = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ct.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), r) === !1) && ct.acceptData(i) && s && i[h] && !ct.isWindow(i)) {
                    d = i[s], d && (i[s] = null), ct.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {}
                    ct.event.triggered = t, d && (i[s] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ct.event.fix(e);
            var n, r, i, o, a, s = [],
                l = ot.call(arguments),
                u = (ct._data(this, "events") || {})[e.type] || [],
                c = ct.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, u), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(u) >= 0 : ct.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[ct.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Rt.test(i) ? this.mouseHooks : $t.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || J, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return ct.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = J.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === U && (e[r] = null), e.detachEvent(r, n))
    }, ct.Event = function(e, n) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    }, ct.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ct.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ct._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function() {
            return _t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                _t.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ct.event.remove(this, "._change"), !_t.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                ct.event.simulate(t, e.target, ct.event.fix(e), !0)
            };
        ct.event.special[t] = {
            setup: function() {
                0 === n++ && J.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && J.removeEventListener(e, r, !0)
            }
        }
    }), ct.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ct().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ct.guid++)), this.each(function() {
                ct.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = u), this.each(function() {
                ct.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ct.event.trigger(e, n, r, !0) : t
        }
    });
    var zt = /^.[^:#\[\.,]*$/,
        Bt = /^(?:parents|prev(?:Until|All))/,
        It = ct.expr.match.needsContext,
        Vt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ct.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ct.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = ct(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ct.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function(e) {
            return !!f(this, "string" == typeof e && It.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = It.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                r = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ct.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ct.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ct.dir(e, "parentNode", n)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return ct.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ct.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ct.sibling(e.firstChild)
        },
        contents: function(e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }
    }, function(e, t) {
        ct.fn[e] = function(n, r) {
            var i = (this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ct.filter(r, i)), this.length > 1 && (Vt[e] || (i = ct.unique(i)), Bt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ct.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Zt = / jQuery\d+="(?:null|\d+)"/g,
        Ut = RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
        Kt = /^\s+/,
        Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Yt = /<([\w:]+)/,
        Gt = /<tbody/i,
        Qt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ln = p(J),
        un = ln.appendChild(J.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
        text: function(e) {
            return ct.access(this, function(e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ct.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ct.cleanData((n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ct.clone(this, e, t)
            })
        },
        html: function(e) {
            return ct.access(this, function(e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Zt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Ut.test(e) || !ct.support.leadingWhitespace && Kt.test(e) || sn[(Yt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Jt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ct.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ct(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = rt.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                d = this,
                f = c - 1,
                p = e[0],
                h = ct.isFunction(p);
            if (h || !(1 >= c || "string" != typeof p || ct.support.checkClone) && nn.test(p)) return this.each(function(r) {
                var i = d.eq(r);
                h && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                /*for (((l, "script"), m), o = a.length; c > u; u++) i = l, u !== f && (i = ct.clone(i, !0, !0), o && ct.merge(a, x(i, "script"))), t.call(this[u], i, u);*/
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ct.map(a, g), u = 0; o > u; u++) i = a[u], rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(s, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                l = r = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ct.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ct(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ct(o[r])[t](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ct.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t)
                if (n)
                    for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
                else y(e, o);
            return r = x(o, "script"), r.length > 0 && v(r, !l && x(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, f = p(t), h = [], m = 0; d > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);
                    else if (Qt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Yt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + o.replace(Jt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ct.support.leadingWhitespace && Kt.test(o) && h.push(t.createTextNode(Kt.exec(o)[0])), !ct.support.tbody)
                    for (o = "table" !== l || Gt.test(o) ? "<table>" !== c[1] || Gt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ct.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else h.push(t.createTextNode(o));
            for (s && f.removeChild(s), ct.support.appendChecked || ct.grep(x(h, "input"), w), m = 0; o = h[m++];)
                if ((!r || -1 === ct.inArray(o, r)) && (a = ct.contains(o.ownerDocument, o), s = (f.appendChild(o), "script"), a && v(s), n))
                    for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++)
                if ((t || ct.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null, tt.push(i))
                }
        },
        _evalUrl: function(e) {
            return ct.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ct.fn.extend({
        wrapAll: function(e) {
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ct.isFunction(e) ? this.each(function(t) {
                ct(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ct(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ct.isFunction(e);
            return this.each(function(n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, dn, fn, pn = /alpha\([^)]*\)/i,
        hn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        yn = RegExp("^(" + dt + ")(.*)$", "i"),
        bn = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
        xn = RegExp("^([+-])=(" + dt + ")", "i"),
        wn = {
            BODY: "block"
        }, Cn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, kn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Tn = ["Top", "Right", "Bottom", "Left"],
        Fn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function(e, n) {
            return ct.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (ct.isArray(n)) {
                    for (o = dn(e), i = n.length; i > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ct.style(e, n, r) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : k(this)) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = fn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ct.camelCase(n),
                    u = e.style;
                if (n = ct.cssProps[l] || (ct.cssProps[l] = C(u, l)), s = ct.cssHooks[n] || ct.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[l] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = ct.camelCase(n);
            return n = ct.cssProps[l] || (ct.cssProps[l] = C(e.style, l)), s = ct.cssHooks[n] || ct.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = fn(e, n, i)), "normal" === a && n in kn && (a = kn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (dn = function(t) {
        return e.getComputedStyle(t, null)
    }, fn = function(e, n, r) {
        var i, o, a, s = r || dn(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && vn.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : J.documentElement.currentStyle && (dn = function(e) {
        return e.currentStyle
    }, fn = function(e, n, r) {
        var i, o, a, s = r || dn(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ct.each(["height", "width"], function(e, n) {
        ct.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Cn, function() {
                    return N(e, n, i)
                }) : N(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && dn(e);
                return F(e, t, r ? E(e, n, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pn.test(o) ? o.replace(pn, i) : o + " " + i)
        }
    }), ct(function() {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ct.swap(e, {
                    display: "inline-block"
                }, fn, [e, "marginRight"]) : t
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(e, n) {
            ct.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = fn(e, n), bn.test(r) ? ct(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function(e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ct.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, vn.test(e) || (ct.cssHooks[e + t].set = F)
    });
    var En = /%20/g,
        Nn = /\[\]$/,
        Sn = /\r?\n/g,
        Dn = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function() {
            return ct.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && An.test(this.nodeName) && !Dn.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), ct.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = ct.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(En, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ct.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln, jn, Mn = ct.now(),
        Hn = /\?/,
        On = /#.*$/,
        Pn = /([?&])_=[^&]*/,
        _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        qn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        zn = ct.fn.load,
        Bn = {}, In = {}, Vn = "*/".concat("*");
    try {
        jn = K.href
    } catch (Xn) {
        jn = J.createElement("a"), jn.href = "", jn = jn.href
    }
    Ln = qn.exec(jn.toLowerCase()) || [], ct.fn.load = function(e, n, r) {
        if ("string" != typeof e && zn) return zn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ct.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jn,
            type: "GET",
            isLocal: $n.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, ct.ajaxSettings), t) : M(ct.ajaxSettings, e)
        },
        ajaxPrefilter: L(Bn),
        ajaxTransport: L(In),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, d, y, b, w, k = n;
                2 !== x && (x = 2, l && clearTimeout(l), c = t, s = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = H(f, C, r)), b = (f, b, C, o), o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ct.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (ct.etag[a] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, y = b.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", o ? m.resolveWith(p, [d, k, C]) : m.rejectWith(p, [C, k, y]), C.statusCode(v), v = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]), g.fireWith(p, [C, k]), u && (h.trigger("ajaxComplete", [C, f]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, u, c, d, f = ct.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
                m = ct.Deferred(),
                g = ct.Callbacks("once memory"),
                v = f.statusCode || {}, y = {}, b = {}, x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = _n.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || jn) + "").replace(On, "").replace(Wn, Ln[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (i = qn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)),(Bn, f, n, C), 2 === x) return C;
            u = f.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rn.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Hn.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(a) ? a.replace(Pn, "$1_=" + Mn++) : a + (Hn.test(a) ? "&" : "?") + "_=" + Mn++)), f.ifModified && (ct.lastModified[a] && C.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && C.setRequestHeader("If-None-Match", ct.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) C[o](f[o]);
            if (c = (In, f, n, C)) {
                C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(y, r)
                } catch (k) {
                    if (!(2 > x)) throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function(e, n) {
        ct[n] = function(e, r, i, o) {
            return ct.isFunction(r) && (o = o || i, i = r, r = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ct.globalEval(e), e
            }
        }
    }), ct.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = J.head || ct("head")[0] || J.documentElement;
            return {
                send: function(t, i) {
                    n = J.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Zn = [],
        Un = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zn.pop() || ct.expando + "_" + Mn++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ct.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Zn.push(o)), s && ct.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Kn, Jn, Yn = 0,
        Gn = e.ActiveXObject && function() {
            var e;
            for (e in Kn) Kn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && P() || _()
    } : P, Jn = ct.ajaxSettings.xhr(), ct.support.cors = !! Jn && "withCredentials" in Jn, Jn = ct.support.ajax = !! Jn, Jn && ct.ajaxTransport(function(n) {
        if (!n.crossDomain || ct.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, d;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = ct.noop, Gn && delete Kn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (p) {
                            i || o(-1, p)
                        }
                        d && o(s, c, d, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Yn, Gn && (Kn || (Kn = {}, ct(e).unload(Gn)), Kn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Qn, er, tr = /^(?:toggle|show|hide)$/,
        nr = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [z],
        or = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = nr.exec(t),
                        o = i && i[3] || (ct.cssNumber[e] ? "" : "px"),
                        a = (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, ct.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    ct.Animation = ct.extend(W, {
        tweener: function(e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ct.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function(e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ct.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(k).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ct.isEmptyObject(e),
                o = ct.speed(t, n, r),
                a = function() {
                    var t = W(this, ct.extend({}, e), o);
                    (i || ct._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ct.timers,
                    a = ct._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ct.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ct._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ct.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ct.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ct.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ct.isFunction(r.old) && r.old.call(this), r.queue && ct.dequeue(this, r.queue)
        }, r
    }, ct.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = B.prototype.init, ct.fx.tick = function() {
        var e, n = ct.timers,
            r = 0;
        for (Qn = ct.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ct.fx.stop(), Qn = t
    }, ct.fx.timer = function(e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function() {
        er || (er = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function() {
        clearInterval(er), er = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
        return ct.grep(ct.timers, function(t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            }, o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== U && (i = o.getBoundingClientRect()), r = V(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ct.offset = {
        setOffset: function(e, t, n) {
            var r = ct.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ct(e),
                s = a.offset(),
                l = ct.css(e, "top"),
                u = ct.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [l, u]) > -1,
                d = {}, f = {};
            c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, ct.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(r, "marginTop", !0),
                    left: t.left - n.left - ct.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Y; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || Y
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ct.fn[e] = function(i) {
            return ct.access(this, function(e, i, o) {
                var a = V(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o : ct(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ct.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function(n, r, i) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ct.fn.size = function() {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ct
    }))
}(window),
function() {
    var e, t;
    $(function() {
        return e()
    }), e = function() {
        return window.grooveOnLoad = function() {
            var e;
            return e = $(".groove-contact-form"), e.on("submit", function(e) {
                return e.preventDefault(), t(), !1
            }), $("button.close").on("click", function() {
                return window.location = "/"
            })
        }, $.getScript("" + ("https:" === document.location.protocol ? "https" : "http") + "://metalabsoftware.groovehq.com/widgets/6fb52c97-15e5-43bd-a3b5-f8cda08a8840/ticket/api.js")
    }, t = function() {
        var e, t, n, r;
        return e = $(".groove-contact-form"), e.attr("data-state", "submitting"), e.find("button, input, textarea").attr("disabled", "disabled").removeClass("error"), n = e.attr("data-groove-labels").split(" "), r = {
            email: e.find(".contact-form-email").val(),
            name: e.find(".contact-form-name").val(),
            message: e.find(".contact-form-message").val(),
            subject: e.attr("data-groove-subject"),
            labels: n.join(",")
        }, t = function(t) {
            var n, r;
            return n = $.parseJSON(t.response), r = n.ticket_number ? "success" : "error", e.add("section.contact-form").attr("data-state", r), e.find("button, input, textarea").removeAttr("disabled"), "error" === r && (n.errors.enduser_email && e.find(".contact-form-email").addClass("error"), n.errors.enduser_name && e.find(".contact-form-name").addClass("error"), n.errors.message) ? e.find(".contact-form-message").addClass("error") : void 0
        }, Groove.createTicket(r, t)
    }
}.call(this),
function(e, t, n, r) {
    var i = n("html"),
        o = n(e),
        a = n(t),
        s = n.fancybox = function() {
            s.open.apply(this, arguments)
        }, l = navigator.userAgent.match(/msie/i),
        u = null,
        c = t.createTouch !== r,
        d = function(e) {
            return e && e.hasOwnProperty && e instanceof n
        }, f = function(e) {
            return e && "string" === n.type(e)
        }, p = function(e) {
            return f(e) && 0 < e.indexOf("%")
        }, h = function(e, t) {
            var n = parseInt(e, 10) || 0;
            return t && p(e) && (n *= s.getViewport()[t] / 100), Math.ceil(n)
        }, m = function(e, t) {
            return h(e, t) + "px"
        };
    n.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !c,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = d(e) ? n(e).get() : [e]), n.each(e, function(i, o) {
                var a, l, u, c, p, h = {};
                "object" === n.type(o) && (o.nodeType && (o = n(o)), d(o) ? (h = {
                    href: o.data("fancybox-href") || o.attr("href"),
                    title: o.data("fancybox-title") || o.attr("title"),
                    isDom: !0,
                    element: o
                }, n.metadata && n.extend(!0, h, o.metadata())) : h = o), a = t.href || h.href || (f(o) ? o : null), l = t.title !== r ? t.title : h.title || "", c = (u = t.content || h.content) ? "html" : t.type || h.type, !c && h.isDom && (c = o.data("fancybox-type"), c || (c = (c = o.prop("class").match(/fancybox\.(\w+)/)) ? c[1] : null)), f(a) && (c || (s.isImage(a) ? c = "image" : s.isSWF(a) ? c = "swf" : "#" === a.charAt(0) ? c = "inline" : f(o) && (c = "html", u = o)), "ajax" === c && (p = a.split(/\s+/, 2), a = p.shift(), p = p.shift())), u || ("inline" === c ? a ? u = n(f(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : h.isDom && (u = o) : "html" === c ? u = a : !c && !a && h.isDom && (c = "inline", u = o)), n.extend(h, {
                    href: a,
                    type: c,
                    content: u,
                    title: l,
                    selector: p
                }), e[i] = h
            }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== r && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
        },
        cancel: function() {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function(e) {
            s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                clearTimeout(s.player.timer)
            }, n = function() {
                    t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                }, r = function() {
                    t(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                };
            !0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({
                "onCancel.player beforeClose.player": r,
                "onUpdate.player": n,
                "beforeLoad.player": t
            }), n(), s.trigger("onPlayStart")) : r()
        },
        next: function(e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var i = s.current;
            i && (e = h(e), s.direction = t || i.direction[e >= i.index ? "next" : "prev"], s.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (s.cancel(), s._start(e)))
        },
        reposition: function(e, t) {
            var r, i = s.current,
                o = i ? i.wrap : null;
            o && (r = s._getPosition(t), e && "scroll" === e.type ? (delete r.position, o.stop(!0, !0).animate(r, 200)) : (o.css(r), i.pos = n.extend({}, i.dim, r)))
        },
        update: function(e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(u), u = null), s.isOpen && !u && (u = setTimeout(function() {
                var r = s.current;
                r && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && s._setDimension(), "scroll" === t && r.canShrink || s.reposition(e), s.trigger("onUpdate"), u = null)
            }, n && !c ? 0 : 300))
        },
        toggle: function(e) {
            s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, c && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
        },
        hideLoading: function() {
            a.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), a.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = s.current && s.current.locked || !1,
                n = {
                    x: o.scrollLeft(),
                    y: o.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : o.width(), n.h = c && e.innerHeight ? e.innerHeight : o.height()), n
        },
        unbindEvents: function() {
            s.wrap && d(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = s.current;
            t && (o.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && a.bind("keydown.fb", function(i) {
                var o = i.which || i.keyCode,
                    a = i.target || i.srcElement;
                return 27 === o && s.coming ? !1 : (!(i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || a && (a.type || n(a).is("[contenteditable]")) || !n.each(e, function(e, a) {
                    return 1 < t.group.length && a[o] !== r ? (s[e](a[o]), i.preventDefault(), !1) : -1 < n.inArray(o, a) ? (s[e](), i.preventDefault(), !1) : void 0
                })), void 0)
            }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, r, i, o) {
                for (var a = n(e.target || null), l = !1; a.length && !l && !a.is(".fancybox-skin") && !a.is(".fancybox-wrap");) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = n(a).parent();
                0 !== r && !l && 1 < s.group.length && !t.canShrink && (o > 0 || i > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > i) && s.next(0 > o ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var r, i = t || s.coming || s.current;
            if (i) {
                if (n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1))), !1 === r) return !1;
                i.helpers && n.each(i.helpers, function(t, r) {
                    r && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, r), i)
                }), a.trigger(e)
            }
        },
        isImage: function(e) {
            return f(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return f(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, r, i = {};
            if (e = h(e), t = s.group[e] || null, !t) return !1;
            if (i = n.extend(!0, {}, s.opts, t), t = i.margin, r = i.padding, "number" === n.type(t) && (i.margin = [t, t, t, t]), "number" === n.type(r) && (i.padding = [r, r, r, r]), i.modal && n.extend(!0, i, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), i.autoSize && (i.autoWidth = i.autoHeight = !0), "auto" === i.width && (i.autoWidth = !0), "auto" === i.height && (i.autoHeight = !0), i.group = s.group, i.index = e, s.coming = i, !1 === s.trigger("beforeLoad")) s.coming = null;
            else {
                if (r = i.type, t = i.href, !r) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
                if (s.isActive = !0, ("image" === r || "swf" === r) && (i.autoHeight = i.autoWidth = !1, i.scrolling = "visible"), "image" === r && (i.aspectRatio = !0), "iframe" === r && c && (i.scrolling = "scroll"), i.wrap = n(i.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body"), n.extend(i, {
                    skin: n(".fancybox-skin", i.wrap),
                    outer: n(".fancybox-outer", i.wrap),
                    inner: n(".fancybox-inner", i.wrap)
                }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                    i.skin.css("padding" + t, m(i.padding[e]))
                }), s.trigger("onReady"), "inline" === r || "html" === r) {
                    if (!i.content || !i.content.length) return s._error("content")
                } else if (!t) return s._error("href");
                "image" === r ? s._loadImage() : "ajax" === r ? s._loadAjax() : "iframe" === r ? s._loadIframe() : s._afterLoad()
            }
        },
        _error: function(e) {
            n.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function() {
            var e = s.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
        },
        _loadAjax: function() {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function(t, n) {
                    "success" === n && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = s.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                n(this).data("ready", 1), c || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function() {
            var e, t, n = s.group,
                r = s.current,
                i = n.length,
                o = r.preload ? Math.min(r.preload, i - 1) : 0;
            for (t = 1; o >= t; t += 1) e = n[(r.index + t) % i], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, t, r, i, o, a = s.coming,
                l = s.current;
            if (s.hideLoading(), a && !1 !== s.isActive)
                if (!1 === s.trigger("afterLoad", a, l)) a.wrap.stop(!0).trigger("onReset").remove(), s.coming = null;
                else {
                    switch (l && (s.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = a.content, t = a.type, r = a.scrolling, n.extend(s, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: l
                    }), i = a.href, t) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = n("<div>").html(e).find(a.selector) : d(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", i);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + i + '"></param>', o = "", n.each(a.swf, function(t, n) {
                                e += '<param name="' + t + '" value="' + n + '"></param>', o += " " + t + '="' + n + '"'
                            }), e += '<embed src="' + i + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                    }(!d(e) || !e.parent().is(a.inner)) && a.inner.append(e), s.trigger("beforeShow"), a.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? l.prevMethod && s.transitions[l.prevMethod]() : n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? a.nextMethod : a.openMethod](), s._preloadImages()
                }
        },
        _setDimension: function() {
            var e, t, r, i, o, a, l, u, c, d = s.getViewport(),
                f = 0,
                g = !1,
                v = !1,
                g = s.wrap,
                y = s.skin,
                b = s.inner,
                x = s.current,
                v = x.width,
                w = x.height,
                C = x.minWidth,
                k = x.minHeight,
                T = x.maxWidth,
                F = x.maxHeight,
                E = x.scrolling,
                N = x.scrollOutside ? x.scrollbarWidth : 0,
                S = x.margin,
                D = h(S[1] + S[3]),
                A = h(S[0] + S[2]);
            if (g.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), S = h(y.outerWidth(!0) - y.width()), e = h(y.outerHeight(!0) - y.height()), t = D + S, r = A + e, i = p(v) ? (d.w - t) * h(v) / 100 : v, o = p(w) ? (d.h - r) * h(w) / 100 : w, "iframe" === x.type) {
                if (c = x.content, x.autoHeight && 1 === c.data("ready")) try {
                    c[0].contentWindow.document.location && (b.width(i).height(9999), a = c.contents().find("body"), N && a.css("overflow-x", "hidden"), o = a.outerHeight(!0))
                } catch (L) {}
            } else(x.autoWidth || x.autoHeight) && (b.addClass("fancybox-tmp"), x.autoWidth || b.width(i), x.autoHeight || b.height(o), x.autoWidth && (i = b.width()), x.autoHeight && (o = b.height()), b.removeClass("fancybox-tmp")); if (v = h(i), w = h(o), u = i / o, C = h(p(C) ? h(C, "w") - t : C), T = h(p(T) ? h(T, "w") - t : T), k = h(p(k) ? h(k, "h") - r : k), F = h(p(F) ? h(F, "h") - r : F), a = T, l = F, x.fitToView && (T = Math.min(d.w - t, T), F = Math.min(d.h - r, F)), t = d.w - D, A = d.h - A, x.aspectRatio ? (v > T && (v = T, w = h(v / u)), w > F && (w = F, v = h(w * u)), C > v && (v = C, w = h(v / u)), k > w && (w = k, v = h(w * u))) : (v = Math.max(C, Math.min(v, T)), x.autoHeight && "iframe" !== x.type && (b.width(v), w = b.height()), w = Math.max(k, Math.min(w, F))), x.fitToView)
                if (b.width(v).height(w), g.width(v + S), d = g.width(), D = g.height(), x.aspectRatio)
                    for (;
                        (d > t || D > A) && v > C && w > k && !(19 < f++);) w = Math.max(k, Math.min(F, w - 10)), v = h(w * u), C > v && (v = C, w = h(v / u)), v > T && (v = T, w = h(v / u)), b.width(v).height(w), g.width(v + S), d = g.width(), D = g.height();
                else v = Math.max(C, Math.min(v, v - (d - t))), w = Math.max(k, Math.min(w, w - (D - A)));
            N && "auto" === E && o > w && t > v + S + N && (v += N), b.width(v).height(w), g.width(v + S), d = g.width(), D = g.height(), g = (d > t || D > A) && v > C && w > k, v = x.aspectRatio ? a > v && l > w && i > v && o > w : (a > v || l > w) && (i > v || o > w), n.extend(x, {
                dim: {
                    width: m(d),
                    height: m(D)
                },
                origWidth: i,
                origHeight: o,
                canShrink: g,
                canExpand: v,
                wPadding: S,
                hPadding: e,
                wrapSpace: D - y.outerHeight(!0),
                skinSpace: y.height() - w
            }), !c && x.autoHeight && w > k && F > w && !v && b.height("auto")
        },
        _getPosition: function(e) {
            var t = s.current,
                n = s.getViewport(),
                r = t.margin,
                i = s.wrap.width() + r[1] + r[3],
                o = s.wrap.height() + r[0] + r[2],
                r = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            return t.autoCenter && t.fixed && !e && o <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = m(Math.max(r.top, r.top + (n.h - o) * t.topRatio)), r.left = m(Math.max(r.left, r.left + (n.w - i) * t.leftRatio)), r
        },
        _afterZoomIn: function() {
            var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
                e.preventDefault(), s.close()
            }), e.arrows && 1 < s.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function() {
            var e = s.current,
                t = e.element,
                n = e.orig,
                r = {}, i = 50,
                o = 50,
                a = e.hPadding,
                l = e.wPadding,
                u = s.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), d(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), o = n.outerHeight())) : (r.top = u.y + (u.h - o) * e.topRatio, r.left = u.x + (u.w - i) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (r.top -= u.y, r.left -= u.x), r = {
                top: m(r.top - a * e.topRatio),
                left: m(r.left - l * e.leftRatio),
                width: m(i + l),
                height: m(o + a)
            }
        },
        step: function(e, t) {
            var n, r, i = t.prop;
            r = s.current;
            var o = r.wrapSpace,
                a = r.skinSpace;
            ("width" === i || "height" === i) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), r = "width" === i ? r.wPadding : r.hPadding, r = e - r, s.skin[i](h("width" === i ? r : r - o * n)), s.inner[i](h("width" === i ? r : r - o * n - a * n)))
        },
        zoomIn: function() {
            var e = s.current,
                t = e.pos,
                r = e.openEffect,
                i = "elastic" === r,
                o = n.extend({
                    opacity: 1
                }, t);
            delete o.position, i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), s.wrap.css(t).animate(o, {
                duration: "none" === r ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: s._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = s.current,
                t = e.closeEffect,
                n = "elastic" === t,
                r = {
                    opacity: .1
                };
            n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), s.wrap.animate(r, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: s._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = s.current,
                n = t.nextEffect,
                r = t.pos,
                i = {
                    opacity: 1
                }, o = s.direction;
            r.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (r[e] = m(h(r[e]) - 200), i[e] = "+=200px") : (r[e] = m(h(r[e]) + 200), i[e] = "-=200px")), "none" === n ? s._afterZoomIn() : s.wrap.css(r).animate(i, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        },
        changeOut: function() {
            var e = s.previous,
                t = e.prevEffect,
                r = {
                    opacity: .1
                }, i = s.direction;
            "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px"), e.wrap.animate(r, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !c,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function(e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (o.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = o.scrollTop(), t = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (n = a.width())) : a.width() > o.width() && (n = a.width()), this.overlay.width(n).height(a.height())
        },
        onReady: function(e, t) {
            var r = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), r || this.create(e), e.locked && this.fixed && t.fixed && (r || (this.margin = a.height() > o.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var r, i;
            t.locked && (!1 !== this.margin && (n("*").filter(function() {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = o.scrollTop(), i = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(r).scrollLeft(i)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, s.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = s.current,
                r = t.title,
                i = e.type;
            if (n.isFunction(r) && (r = r.call(t.element, t)), f(r) && "" !== n.trim(r)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>"), i) {
                    case "inside":
                        i = s.skin;
                        break;
                    case "outside":
                        i = s.wrap;
                        break;
                    case "over":
                        i = s.inner;
                        break;
                    default:
                        i = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(h(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    }, n.fn.fancybox = function(e) {
        var t, r = n(this),
            i = this.selector || "",
            o = function(o) {
                var a, l, u = n(this).blur(),
                    c = t;
                !(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || u.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = u.attr(a), l || (a = "rel", l = u.get(0)[a]), l && "" !== l && "nofollow" !== l && (u = i.length ? n(i) : r, u = u.filter("[" + a + '="' + l + '"]'), c = u.index(this)), e.index = c, !1 === s.open(u, e) || !o.preventDefault()))
            };
        return e = e || {}, t = e.index || 0, i && !1 !== e.live ? a.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : r.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, a.ready(function() {
        var t, o;
        if (n.scrollbarWidth === r && (n.scrollbarWidth = function() {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                t = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), t
        }), n.support.fixedPosition === r) {
            t = n.support, o = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var a = 20 === o[0].offsetTop || 15 === o[0].offsetTop;
            o.remove(), t.fixedPosition = a
        }
        n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), i.addClass("fancybox-lock-test"), o = n(e).width(), i.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (o - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery),
/**
 * h5Validate
 * @version v0.9.0
 * Using semantic versioning: http://semver.org/
 * @author Eric Hamilton http://ericleads.com/
 * @copyright 2010 - 2012 Eric Hamilton
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Developed under the sponsorship of RootMusic, Zumba Fitness, LLC, and Rese Property Management
 */
function(e) {
    "use strict";
    var t = window.console || function() {}, n = {
            defaults: {
                debug: !1,
                RODom: !1,
                patternLibrary: {
                    phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)/,
                    email: /((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/,
                    url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                    number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
                    dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
                    alpha: /[a-zA-Z]+/,
                    alphaNumeric: /\w+/,
                    integer: /-?\d+/
                },
                classPrefix: "h5-",
                errorClass: "ui-state-error",
                validClass: "ui-state-valid",
                activeClass: "active",
                requiredClass: "required",
                requiredAttribute: "required",
                patternAttribute: "pattern",
                errorAttribute: "data-h5-errorid",
                customEvents: {
                    validate: !0
                },
                kbSelectors: ":input:not(:button):not(:disabled):not(.novalidate)",
                focusout: !0,
                focusin: !1,
                change: !0,
                keyup: !0,
                activeKeyup: !0,
                mSelectors: '[type="range"]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)',
                click: !0,
                requiredVar: "h5-required",
                patternVar: "h5-pattern",
                stripMarkup: !0,
                submit: !0,
                focusFirstInvalidElementOnSubmit: !0,
                validateOnSubmit: !0,
                invalidCallback: function() {},
                validCallback: function() {},
                allValidSelectors: ":input:visible:not(:button):not(:disabled):not(.novalidate)",
                markInvalid: function(t) {
                    var n = e(t.element),
                        r = e(t.errorID);
                    return n.addClass(t.errorClass).removeClass(t.validClass), n.addClass(t.settings.activeClass), r.length && (n.attr("title") && r.text(n.attr("title")), r.addClass("active").show()), n.data("valid", !1), t.settings.invalidCallback.call(t.element, t.validity), n
                },
                markValid: function(t) {
                    var n = e(t.element),
                        r = e(t.errorID);
                    return n.addClass(t.validClass).removeClass(t.errorClass), r.length && r.removeClass("active").hide(), n.data("valid", !0), t.settings.validCallback.call(t.element, t.validity), n
                },
                unmark: function(t) {
                    var n = e(t.element);
                    return n.removeClass(t.errorClass).removeClass(t.validClass), n.form.find("#" + t.element.id).removeClass(t.errorClass).removeClass(t.validClass), n
                }
            }
        }, r = n.defaults,
        i = r.patternLibrary,
        o = function(t) {
            return e.extend({
                customError: t.customError || !1,
                patternMismatch: t.patternMismatch || !1,
                rangeOverflow: t.rangeOverflow || !1,
                rangeUnderflow: t.rangeUnderflow || !1,
                stepMismatch: t.stepMismatch || !1,
                tooLong: t.tooLong || !1,
                typeMismatch: t.typeMismatch || !1,
                valid: t.valid || !0,
                valueMissing: t.valueMissing || !1
            }, t)
        }, a = {
            isValid: function(t, n) {
                var r = e(this);
                return n = t && n || {}, n.revalidate !== !1 && r.trigger("validate"), r.data("valid")
            },
            allValid: function(t, n) {
                var r, i, o = !0,
                    a = [],
                    s = e(this),
                    l = [],
                    u = function(e, t) {
                        t.e = e, a.push(t)
                    }, c = e.extend({}, t, n);
                return n = n || {}, s.trigger("formValidate", {
                    settings: e.extend(!0, {}, c)
                }), s.undelegate(c.allValidSelectors, ".allValid", u), s.delegate(c.allValidSelectors, "validated.allValid", u), r = s.find(c.allValidSelectors), i = r.filter(function() {
                    var e;
                    if ("INPUT" === this.tagName && "radio" === this.type) {
                        if (e = this.name, l[e] === !0) return !1;
                        l[e] = !0
                    }
                    return !0
                }), i.each(function() {
                    var t = e(this);
                    o = t.h5Validate("isValid", n) && o
                }), s.trigger("formValidated", {
                    valid: o,
                    elements: a
                }), o
            },
            validate: function(n) {
                var r, i = e(this),
                    a = i.filter("[pattern]")[0] ? i.attr("pattern") : !1,
                    s = new RegExp("^(?:" + a + ")$"),
                    l = null,
                    u = i.is("[type=checkbox]") ? i.is(":checked") : i.is("[type=radio]") ? (l = i.parents("form").find('input[name="' + i.attr("name") + '"]')).filter(":checked").length > 0 : i.val(),
                    c = n.errorClass,
                    d = n.validClass,
                    f = i.attr(n.errorAttribute) || !1,
                    p = f ? "#" + f.replace(/(:|\.|\[|\])/g, "\\$1") : !1,
                    h = !1,
                    m = o({
                        element: this,
                        valid: !0
                    }),
                    g = e("<input required>");
                h = g.filter("[required]") && g.filter("[required]").length ? i.filter("[required]").length && "false" !== i.attr("required") : void 0 !== i.attr("required"), n.debug && window.console && (t.log('Validate called on "' + u + '" with regex "' + s + '". Required: ' + h), t.log("Regex test: " + s.test(u) + ", Pattern: " + a)), r = parseInt(i.attr("maxlength"), 10), !isNaN(r) && u.length > r && (m.valid = !1, m.tooLong = !0), h && !u ? (m.valid = !1, m.valueMissing = !0) : a && !s.test(u) && u ? (m.valid = !1, m.patternMismatch = !0) : n.RODom || n.markValid({
                    element: this,
                    validity: m,
                    errorClass: c,
                    validClass: d,
                    errorID: p,
                    settings: n
                }), m.valid || n.RODom || n.markInvalid({
                    element: this,
                    validity: m,
                    errorClass: c,
                    validClass: d,
                    errorID: p,
                    settings: n
                }), i.trigger("validated", m), null !== l && n.alreadyCheckingRelatedRadioButtons !== !0 && (n.alreadyCheckingRelatedRadioButtons = !0, l.not(i).trigger("validate"), n.alreadyCheckingRelatedRadioButtons = !1)
            },
            delegateEvents: function(t, n, r, i) {
                var o = {}, a = 0,
                    s = function() {
                        i.validate.call(this, i)
                    };
                e.each(n, function(e, t) {
                    t && (o[e] = e)
                });
                for (a in o) o.hasOwnProperty(a) && e(r).delegate(t, o[a] + ".h5Validate", s);
                return r
            },
            bindDelegation: function(t) {
                var n, r = e(this);
                return e.each(i, function(n, r) {
                    var i = r.toString();
                    i = i.substring(1, i.length - 1), e("." + t.classPrefix + n).attr("pattern", i)
                }), n = r.filter("form").add(r.find("form")).add(r.parents("form")), n.attr("novalidate", "novalidate").submit(s), n.find("input[formnovalidate][type='submit']").click(function() {
                    e(this).closest("form").unbind("submit", s)
                }), this.each(function() {
                    var e = {
                        focusout: t.focusout,
                        focusin: t.focusin,
                        change: t.change,
                        keyup: t.keyup
                    }, n = {
                            click: t.click
                        }, r = {
                            keyup: t.activeKeyup
                        };
                    t.delegateEvents(":input", t.customEvents, this, t), t.delegateEvents(t.kbSelectors, e, this, t), t.delegateEvents(t.mSelectors, n, this, t), t.delegateEvents(t.activeClassSelector, r, this, t), t.delegateEvents("textarea[maxlength]", {
                        keyup: !0
                    }, this, t)
                })
            }
        }, s = function(t) {
            var n, r, i = c.call(this);
            if (i.submit === !0) {
                if (n = e(this), r = n.h5Validate("allValid", {
                    revalidate: i.validateOnSubmit === !0
                }), r !== !0 && (t.preventDefault(), i.focusFirstInvalidElementOnSubmit === !0)) {
                    var o = e(i.allValidSelectors, n).filter(function() {
                        return e(this).h5Validate("isValid", {
                            revalidate: !1
                        }) !== !0
                    });
                    o.first().focus()
                }
                return r
            }
        }, l = [],
        u = function(t) {
            var n = e.extend({}, r, t, a),
                i = n.classPrefix + n.activeClass;
            return e.extend(n, {
                activeClass: i,
                activeClassSelector: "." + i,
                requiredClass: n.classPrefix + n.requiredClass,
                el: this
            })
        }, c = function() {
            var t = e(this).closest("[data-h5-instanceId]");
            return l[t.attr("data-h5-instanceId")]
        }, d = function(t) {
            var n = l.push(t) - 1;
            t.RODom !== !0 && e(this).attr("data-h5-instanceId", n), e(this).trigger("instance", {
                "data-h5-instanceId": n
            })
        };
    e.h5Validate = {
        addPatterns: function(e) {
            var t, n = r.patternLibrary;
            for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        },
        validValues: function(t, n) {
            var r, i = 0,
                o = n.length,
                a = "";
            for (i = 0; o > i; i += 1) a = a ? a + "|" + n[i] : n[i];
            r = new RegExp("^(?:" + a + ")$"), e(t).data("regex", r)
        }
    }, e.fn.h5Validate = function(t) {
        var n, r, i;
        return "string" == typeof t && "function" == typeof a[t] ? (i = c.call(this), r = [].slice.call(arguments, 0), n = t, r.shift(), r = e.merge([i], r), i[n].apply(this, r)) : (i = u.call(this, t), d.call(this, i), a.bindDelegation.call(this, i))
    }
}(jQuery),
function() {
    ! function(e) {
        e.fn.tokenField = function(t) {
            var n, r, i, o, a, s, l, u, c, d, f;
            return d = {
                regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                delimiters: ", ",
                max: 0,
                nested: !1,
                placeholder: "",
                badToken: function() {
                    return e(this).val("")
                },
                tooMany: function() {
                    return e(this).val("")
                }
            }, n = function(e) {
                try {
                    console.log(e)
                } catch (t) {}
            }, r = function(t, n) {
                return e.map(n, function(e) {
                    return f(t, e)
                }).join("")
            }, i = function() {

                return "<div class='token-input'><input type='text' placeholder='" + d.placeholder + "' size='1'/><span class='token-input-sizer'>###</span></div>"
            }, o = function(e) {
                return String.fromCharCode(e).match(RegExp("[" + d.delimiters + "]"))
            }, a = function(e) {
                return "" === e ? !1 : e.match(d.regex)
            }, l = function(t) {
                t.click(function() {
                    return e(".token-input", this).siblings(".selected-token").removeClass("selected-token"), e(".token-input input", this).focus(), !1
                }), e(".token-input input", t).keydown(function(t) {
                    return 9 === t.which && e(this).val() ? (e(this).blur(), e(this).focus(), !1) : !0
                }).keypress(function(t) {
                    return e(this).next(".token-input-sizer").html(e(this).val() + "###"), 13 === t.which || o(t.which) ? (e(this).blur(), o(t.which) && e(this).focus(), !1) : !0
                }).keyup(function() {
                    return e(this).next(".token-input-sizer").html(e(this).val() + "###"), !0
                }).focus(function() {
                    return e(this).next(".token-input-sizer").html(e(this).val() + "###"), !0
                }).blur(function() {
                    var t, n;
                    return e(this).data("blur") || (e(this).data("blur", !0), 0 === d.max || e(this).closest(".token-input").siblings(".token").length < d.max ? a(e(this).val()) ? (s(e(f(e(this).attr("name"), e(this).val())).insertBefore(e(this).closest(".token-input"))), d.nested || (t = e(this).closest(".token-field").find("input:hidden"), n = t.val().split(","), n.splice(0, 0, e(this).val()), t.val(n.join(","))), e(this).val("")) : d.badToken && (this.badToken = d.badToken, this.badToken()) : d.tooMany && (this.tooMany = d.tooMany, this.tooMany()), e(this).removeData("blur"), e(this).closest(".pane").click()), !0
                }), s(e(".token", t))
            }, s = function(t) {
                t.click(function() {
                    return e(this).focus(), !1
                }).keydown(function(t) {
                    return e(this).hasClass("selected-token") && 8 === t.which ? (c(e(this)), !1) : !0
                }).blur(function() {
                    e(this).removeClass("selected-token")
                }).focus(function() {
                    e(this).siblings(".selected-token").removeClass("selected-token"), e(this).addClass("selected-token")
                }), e(".token-x", t).click(function() {
                    return e(this).closest(".token").siblings(".selected-token").removeClass("selected-token"), c(e(this).closest(".token")), !1
                })
            }, u = function(t) {
                return t = t.replace(/^\s*(.+)\s*$/, "$1"), t ? e.map(t.split(","), function(e) {
                    return a(e) ? e : (n("Warning: ignoring bad token - " + e), null)
                }) : []
            }, c = function(e) {
                var t, n, r;
                d.nested || (t = e.siblings(".token").andSelf().index(e), n = e.closest(".token-field").find("input:hidden"), r = n.val().split(","), r.splice(t, 1), n.val(r.join(","))), e.remove(), e.closest(".pane").click()
            }, f = function(e, t) {
                return "<a href='#' class='token'><span><span><span><span>" + t + (d.nested ? "<input type='hidden' value='" + t + "' name='" + e + "'/>" : "") + "<span href='#' class='token-x'>Ã—</span></span></span></span></span></a>"
            }, t && e.extend(d, t), this.each(function() {
                var t, o, a, s, c, f;
                o = e(this).attr("id"), s = e(this).attr("name"), a = e(this).attr("class"), c = "", f = u(e(this).val()), e(this).height() > 0 && (c = c + "min-height: " + e(this).height() + "px; height: auto !important; height: " + e(this).height() + "px;"), e(this).width() > 0 && (c = c + "width: " + e(this).width() + "px;"), d.max > 0 && f.length > d.max && (n("Warning: ignoring extra tokens after maximum of " + d.max), f = f.slice(0, d.max)), t = e("<div></div>").attr({
                    "class": a,
                    id: o,
                    style: c
                }).addClass("token-field").append(r(s, f)).append(i(s)).append("<div style='clear:both'></div>").replaceAll(this), d.nested || t.prepend("<input type='hidden' value='" + f.join(",") + "' name='" + s + "'/>"), l(t)
            })
        }
    }(jQuery)
}.call(this), window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function i(e, t) {
        return r(k.join(e + ";") + (t || ""))
    }

    function o(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!a(i, "-") && b[i] !== n) return "pfx" == t ? i : !0
        }
        return !1
    }

    function l(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + F.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(i, t) : (i = (e + " " + E.join(r + " ") + r).split(" "), l(i, t, n))
    }























    function c() {
        h.input = function(n) {
            for (var r = 0, i = n.length; i > r; r++) A[n[r]] = n[r] in x;
            return A.list && (A.list = !! t.createElement("datalist") && !! e.HTMLDataListElement), A
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
            for (var r, i, o, a = 0, s = e.length; s > a; a++) x.setAttribute("type", i = e[a]), r = "text" !== x.type, r && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && x.style.WebkitAppearance !== n ? (g.appendChild(x), o = t.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), D[e[a]] = !! r;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, f, p = "2.7.1",
        h = {}, m = !0,
        g = t.documentElement,
        v = "modernizr",
        y = t.createElement(v),
        b = y.style,
        x = t.createElement("input"),
        w = ":)",
        C = {}.toString,
        k = " -webkit- -moz- -o- -ms- ".split(" "),
        T = "Webkit Moz O ms",
        F = T.split(" "),
        E = T.toLowerCase().split(" "),
        N = {
            svg: "http://www.w3.org/2000/svg"
        }, S = {}, D = {}, A = {}, L = [],
        j = L.slice,
        M = function(e, n, r, i) {
            var o, a, s, l, u = t.createElement("div"),
                c = t.body,
                d = c || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : v + (r + 1), u.appendChild(s);
            return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (c ? u : d).innerHTML += o, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = n(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = l), !! a
        }, H = function() {
            function e(e, i) {
                i = i || t.createElement(r[e] || "div"), e = "on" + e;
                var a = e in i;
                return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, a
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        O = {}.hasOwnProperty;
    f = o(O, "undefined") || o(O.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return O.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = j.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var i = function() {};
                    i.prototype = t.prototype;
                    var o = new i,
                        a = t.apply(o, n.concat(j.call(arguments)));
                    return Object(a) === a ? a : o
                }
                return t.apply(e, n.concat(j.call(arguments)))
            };
        return r
    }), S.flexbox = function() {
        return u("flexWrap")
    }, S.flexboxlegacy = function() {
        return u("boxDirection")
    }, S.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !! e.getContext("2d")
    }, S.canvastext = function() {
        return !!h.canvas && !! o(t.createElement("canvas").getContext("2d").fillText, "function")
    }, S.webgl = function() {
        return !!e.WebGLRenderingContext
    }, S.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : M(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            /*n = 9 === e.offsetTop*/
        }), n
    }, S.geolocation = function() {
        return "geolocation" in navigator
    }, S.postmessage = function() {
        return !!e.postMessage
    }, S.websqldatabase = function() {
        return !!e.openDatabase
    }, S.indexedDB = function() {
        return !!u("indexedDB", e)
    }, S.hashchange = function() {
        return H("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, S.history = function() {
        return !!e.history && !! history.pushState
    }, S.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, S.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, S.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, S.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, S.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, S.backgroundsize = function() {
        return u("backgroundSize")
    }, S.borderimage = function() {
        return u("borderImage")
    }, S.borderradius = function() {
        return u("borderRadius")
    }, S.boxshadow = function() {
        return u("boxShadow")
    }, S.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, S.opacity = function() {
        return i("opacity:.55"), /^0.55$/.test(b.opacity)
    }, S.cssanimations = function() {
        return u("animationName")
    }, S.csscolumns = function() {
        return u("columnCount")
    }, S.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, S.cssreflections = function() {
        return u("boxReflect")
    }, S.csstransforms = function() {
        return !!u("transform")
    }, S.csstransforms3d = function() {
        var e = !! u("perspective");
        return e && "webkitPerspective" in g.style && M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, S.csstransitions = function() {
        return u("transition")
    }, S.fontface = function() {
        var e;
        return M('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"),
                o = i.sheet || i.styleSheet,
                a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }), e
    }, S.generatedcontent = function() {
        var e;
        return M(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, S.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !! e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, S.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !! e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, S.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.webworkers = function() {
        return !!e.Worker
    }, S.applicationcache = function() {
        return !!e.applicationCache
    }, S.svg = function() {
        return !!t.createElementNS && !! t.createElementNS(N.svg, "svg").createSVGRect
    }, S.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, S.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(C.call(t.createElementNS(N.svg, "animate")))
    }, S.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var P in S) f(S, P) && (d = P.toLowerCase(), h[d] = S[P](), L.push((h[d] ? "" : "no-") + d));
    return h.input || c(), h.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e) f(e, r) && h.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(), h[e] !== n) return h;
            t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), h[e] = t
        }
        return h
    }, r(""), y = x = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }


























 function l(e) {
            e || (e = t);
            var r = i(e);
            return y.shivCSS && !u && !r.hasCSS && (r.hasCSS = !! n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || s(e, r), e
        }
        var u, c, d = "3.7.0",
            f = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            m = "_html5shiv",
            g = 0,
            v = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, c = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = y, l(t)
    }(this, t), h._version = p, h._prefixes = k, h._domPrefixes = E, h._cssomPrefixes = F, h.hasEvent = H, h.testProp = function(e) {
        return s([e])
    }, h.testAllProps = u, h.testStyles = M, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + L.join(" ") : ""), h
}(this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == g.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }



























    function s() {
        var e = v.shift();
        y = 1, e ? e.t ? h(function() {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : y = 0
    }

    function l(e, n, r, i, o, l, u) {
        function c(t) {
            if (!p && a(d.readyState) && (b.r = p = 1, !y && s(), d.onload = d.onreadystatechange = null, t)) {
                "img" != e && h(function() {
                    w.removeChild(d)
                }, 50);
                for (var r in E[n]) E[n].hasOwnProperty(r) && E[n][r].onload()
            }
        }
        var u = u || f.errorTimeout,
            d = t.createElement(e),
            p = 0,
            g = 0,
            b = {
                t: r,
                s: n,
                e: o,
                a: l,
                x: u
            };
        1 === E[n] && (g = 1, E[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
            c.call(this, g)
        }, v.splice(i, 0, b), "img" != e && (g || 2 === E[n] ? (w.insertBefore(d, x ? null : m), h(c, u)) : E[n].push(d))
    }

    function u(e, t, n, r, o) {
        return y = 0, t = t || "j", i(e) ? l("c" == t ? k : C, e, t, this.i++, n, r, o) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
    }

    function c() {
        var e = f;
        return e.loader = {
            load: u,
            i: 0
        }, e
    }
    var d, f, p = t.documentElement,
        h = e.setTimeout,
        m = t.getElementsByTagName("script")[0],
        g = {}.toString,
        v = [],
        y = 0,
        b = "MozAppearance" in p.style,
        x = b && !! t.createRange().compareNode,
        w = x ? p : m.parentNode,
        p = e.opera && "[object Opera]" == g.call(e.opera),
        p = !! t.attachEvent && !p,
        C = b ? "object" : p ? "script" : "img",
        k = p ? "script" : C,
        T = Array.isArray || function(e) {
            return "[object Array]" == g.call(e)
        }, F = [],
        E = {}, N = {
            timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    f = function(e) {
        function t(e) {
            var t, n, r, e = e.split("!"),
                i = F.length,
                o = e.pop(),
                a = e.length,
                o = {
                    url: o,
                    origUrl: o,
                    prefixes: e
                };
            for (n = 0; a > n; n++) r = e[n].split("="), (t = N[r.shift()]) && (o = t(o, r));
            for (n = 0; i > n; n++) o = F[n](o);
            return o
        }

   function a(e, i, o, a, s) {
            var l = t(e),
                u = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[a] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, o, a, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && o.load(function() {
                c(), i && i(l.origUrl, s, a), u && u(l.origUrl, s, a), E[l.url] = 2
            })))
        }

        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (d = function() {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    }), a(e, d, t, 0, u);
                    else if (Object(e) === e)
                        for (l in s = function() {
                            var t, n = 0;
                            for (t in e) e.hasOwnProperty(t) && n++;
                            return n
                        }(), e) e.hasOwnProperty(l) && (!n && !--s && (r(d) ? d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        } : d[l] = function(e) {
                            return function() {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), p()
                            }
                        }(f[l])), a(e[l], d, t, l, u))
                } else !n && p()
            }
            var s, l, u = !! e.test,
                c = e.load || e.both,
                d = e.callback || o,
                f = d,
                p = e.complete || o;
            n(u ? e.yep : e.nope, !! c), c && n(c)
        }
        var l, u, d = this.yepnope.loader;
        if (i(e)) a(e, 0, d, 0);
        else if (T(e))
            for (l = 0; l < e.length; l++) u = e[l], i(u) ? a(u, 0, d, 0) : T(u) ? f(u) : Object(u) === u && s(u, d);
        else Object(e) === e && s(e, d)
    }, f.addPrefix = function(e, t) {
        N[e] = t
    }, f.addFilter = function(e) {
        F.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
        t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
    }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, r, i, l, u) {
        var c, d, p = t.createElement("script"),
            i = i || f.errorTimeout;
        p.src = e;
        for (d in r) p.setAttribute(d, r[d]);
        n = u ? s : n || o, p.onreadystatechange = p.onload = function() {
            !c && a(p.readyState) && (c = 1, n(), p.onload = p.onreadystatechange = null)
        }, h(function() {
            c || (c = 1, n(1))
        }, i), l ? p.onload() : m.parentNode.insertBefore(p, m)
    }, e.yepnope.injectCss = function(e, n, r, i, a, l) {
        var u, i = t.createElement("link"),
            n = l ? s : n || o;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (u in r) i.setAttribute(u, r[u]);
        a || (m.parentNode.insertBefore(i, m), h(n, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, (window.jQuery || window.Zepto) && function(e) {
    e.fn.Swipe = function(t) {
        return this.each(function() {
            e(this).data("Swipe", new Swipe(e(this)[0], t))
        })
    }
}(window.jQuery || window.Zepto), addEvent(window, "load", initForm);
var highlight_array = new Array;
! function() {
    this.PeakMarketing = {}, namespace("PeakMarketing", function(e) {
        return Modernizr.load(), e.body = $("body"), e.header = $("header"), window.scrollTo(0, 1), $(".fancybox").fancybox(), $(".login-box").fancybox({
            wrapCSS: "login-popup",
            maxWidth: 575,
            padding: 30,
            scrolling: !1
        }), $(".token-input").tokenField({
            delimiters: ",",
            regex: ".*",
            placeholder: "Services..."
        }), $(window).load(function() {
            return e.body.removeClass("loading")
        }), $(document).on("click", "header .mobile-menu-toggle", function() {
            return e.header.toggleClass("expanded")
        }), $(document).on("submit", "form.login-subdomain", function(e) {
            var t;
            return e.preventDefault(), t = $(e.target).find("input").val(), "" !== t ? window.location = "http://" + t + ".usepeak.com/" : void 0
        }), $(document).on("click", "[rel='sign-up']", function(e) {
            return e.preventDefault(), window.location = "https://metalab.usepeak.com/users/signup"
        })
    })
}.call(this),
function() {
    namespace("PeakMarketing.Module", function(e) {
        return e.AnimationFrames = function() {
            function e() {
                this.runAnimationFrameFunctions()
            }
            return e.prototype.runAnimationFrameFunctions = function() {
                var e = this;
                return requestAnimationFrame(function() {
                    return e.runAnimationFrameFunctions()
                }), this.setHeaderClass()
            }, e.prototype.setHeaderClass = function() {
                var e;
                return e = $(document).scrollTop(), PeakMarketing.header.toggleClass("off-top", e >= 17)
            }, e
        }()
    })
}.call(this),
function() {
    namespace("PeakMarketing.Module", function(e) {
        return e.Duckhunt = function() {
            function e() {
                var e, t = this;
                this.people = $(".duckhunt-widget ul.people"), this.people.length && (this.persons = this.people.find("li.person"), this.activities = this.persons.find(".activity"), this.documentHidden = !1, this.handleResize(), $(window).on("resize", function() {
                    return t.handleResize()
                }), this.centerBubbles(), e = $.makeArray(this.persons).sort(function() {
                    return Math.random() - .5
                }), this.cyclePeople(e, 0), $(document).on("webkitvisibilitychange", function() {
                    return t.documentHidden = document.webkitHidden, t.documentHidden ? clearTimeout(t.activityCycleTimeout) : t.cyclePeople(e, 0)
                }))
            }
            return e.prototype.handleResize = function() {
                return this.bodyWidth = PeakMarketing.body.outerWidth(), this.bodyWidth > 1e3 ? this.shiftPeople() : this.shiftPeople(parseInt(this.persons.filter(".active").attr("data-mobile-position"), 10))
            }, e.prototype.centerBubbles = function() {
                return this.persons.each(function(e, t) {
                    var n, r, i;
                    return r = $(t), n = r.find(".activity"), i = r.outerWidth() - n.outerWidth(), n.css("margin-left", i / 2).addClass("transition")
                })
            }, e.prototype.shiftPeople = function(e) {
                return null == e && (e = 0), this.people.css({
                    "-moz-transform": "translateX(" + e + "px)",
                    "-webkit-transform": "translateX(" + e + "px)",
                    transform: "translateX(" + e + "px)"
                })
            }, e.prototype.cyclePeople = function(e, t) {
                var n, r, i, o, a = this;
                if (n = $(e[t]), this.bodyWidth < 1e3) i = parseInt(n.attr("data-mobile-position"), 10), this.shiftPeople(i);
                else
                    for (this.shiftPeople(), o = parseInt(n.attr("data-max-size"), 10); o > this.bodyWidth;) t = t + 1 === e.length ? 0 : t + 1, o = parseInt($(e[t]).attr("data-max-size"), 10);
                return this.persons.removeClass("active"), $(e[t]).addClass("active"), r = t + 1 === e.length ? 0 : t + 1, this.documentHidden ? void 0 : this.activityCycleTimeout = setTimeout(function() {
                    return a.cyclePeople(e, r)
                }, 4e3)
            }, e
        }()
    })
}.call(this),
function() {
    namespace("PeakMarketing.Module", function(e) {
        return e.InsightsWidget = function() {
            function e() {
                var e, t, n = this;
                t = $(".insights-widget"), $(".insights-widget").length && (e = $(".insights-widget-container ul.navigation li"), this.swipe = Swipe(t[0], {
                    callback: function(t) {
                        return e.removeClass("active").eq(t).addClass("active")
                    }
                }), $(document).on("click", ".insights-widget-container > a", function(t) {
                    return $(t.currentTarget).hasClass("go-back") && n.swipe.prev(), $(t.currentTarget).hasClass("go-forward") && n.swipe.next(), e.removeClass("active").eq(n.swipe.getPos()).addClass("active")
                }), $(document).on("click", ".insights-widget-container ul.navigation li", function(t) {
                    var r;
                    return r = $(t.currentTarget).index(), n.swipe.slide(r), e.removeClass("active").eq(r).addClass("active")
                }))
            }
            return e
        }()
    })
}.call(this),
function() {
    $(function() {
        return $(".metalab-app-footer a.product-link").click(function() {
            return mixpanel.track("Cross Sell Footer", {
                Product: $(this).find(".title").text()
            })
        })
    })
}.call(this),
function() {
    namespace("PeakMarketing.Module", function(e) {
        return e.ServicesWidget = function() {
            function e() {
                var e, t, n, r, i;
                i = $(".services-widget"), i.length && (e = i.find("ul.service-icons li"), n = i.find(".panes"), r = n.find(".pane"), t = i.find(".nib"), $(document).on("click", ".services-widget ul.service-icons li a", function(i) {
                    var o, a, s;
                    return e.removeClass("active"), r.removeClass("active"), o = $(i.currentTarget).closest("li"), o.addClass("active"), r.eq(o.index()).addClass("active"), a = o.position().left, s = o.outerWidth(), t.css("left", a + 4), n.height(r.filter(".active").height() + 30)
                }), $(document).on("click", ".services-widget .pane.active[data-service='request'] h3", function(e) {
                    return e.stopPropagation(), $(e.currentTarget).closest(".pane").removeClass("active")
                }), $(document).on("click", ".services-widget .pane", function(t) {
                    var n, r;
                    return n = $(t.currentTarget), n.hasClass("active") ? void 0 : (r = n.index(), e.eq(r).find("a").click())
                }))
            }
            return e
        }()
    })
}.call(this),
function() {
    var e, t, n;
    n = PeakMarketing.Module;
    for (t in n) e = n[t], new e
}.call(this);
