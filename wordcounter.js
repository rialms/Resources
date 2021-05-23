
! function(e) {
    "use strict";

	/*
	Script is Created By RokibulRoni.com
	for more detail about how to use in your website visit: https://www.RokibulRoni.com Official website
	*/
    function t(e) {
        for (var t, n, o = [], r = 0, i = e.length; r < i;) t = e.charCodeAt(r++), t >= 55296 && t <= 56319 && r < i ? (n = e.charCodeAt(r++), 56320 == (64512 & n) ? o.push(((1023 & t) << 10) + (1023 & n) + 65536) : (o.push(t, n), r--)) : o.push(t);
        return o
    }

    function n(e, t) {
        var n = Object.prototype.toString.call(e),
            o = e && (("[object NodeList]" === n || "[object HTMLCollection]" === n) && e.length || 1 === e.nodeType),
            r = t && "function" == typeof t;
        return "console" in window && "warn" in console && (o || console.warn("Countable: No valid elements were found"), r || console.warn('Countable: "' + t + '" is not a valid callback function')), o && r
    }

    function o(e) {
        var t = {
            hardReturns: !1,
            stripTags: !1,
            ignoreReturns: !1,
            ignoreZeroWidth: !0
        };
        for (var n in e) t.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function r(e, n) {
        var o, r = "" + ("value" in e ? e.value : e.innerText || e.textContent);
        return n.stripTags && (r = r.replace(/<\/?[a-z][^>]*>/gi, "")), n.ignoreZeroWidth && (r = r.replace(/[\u200B]+/, "")), o = r.trim(), {
            paragraphs: o ? (o.match(n.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0,
            sentences: o ? (o.match(/[.?!\u2026]+./g) || []).length + 1 : 0,
            words: o ? (o.replace(/['";:,.?\xbf\-!\xa1]+/g, "").match(/\S+/g) || []).length : 0,
            characters: o ? t(o.replace(/\s/g, "")).length : 0,
            all: t(n.ignoreReturns ? r.replace(/[\n\r]/g, "") : r).length
        }
    }

    function i(e, t) {
        var n = e.length;
        if ("undefined" != typeof n)
            for (; n--;) t(e[n]);
        else t(e)
    }
    var u = [],
        c = "oninput" in document ? "input" : "keyup";
    navigator.userAgent.match(/MSIE 9.0/) && (c = "keyup"), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    });
    var a = {
        live: function(e, t, a) {
            var l = o(a),
                s = function(e) {
                    var n = function() {
                        t.call(e, r(e, l))
                    };
                    u.push({
                        element: e,
                        handler: n
                    }), n(), e.addEventListener ? e.addEventListener(c, n, !1) : e.attachEvent && e.attachEvent("on" + c, n)
                };
            if (n(e, t)) return e.length ? i(e, s) : s(e), this
        },
        die: function(e) {
            if (n(e, function() {})) return i(e, function(e) {
                var t;
                i(u, function(n) {
                    n.element === e && (t = n)
                }), t && (e.removeEventListener ? e.removeEventListener(c, t.handler, !1) : e.detachEvent && e.detachEvent("on" + c, t.handler), u.splice(u.indexOf(t), 1))
            }), this
        },
        once: function(e, t, u) {
            if (n(e, t)) return i(e, function(e) {
                t.call(e, r(e, o(u)))
            }), this
        },
        count: function(e, t, n) {
            return this.once(e, t, n)
        },
        enabled: function(e) {
            var t = !1;
            return e && 1 === e.nodeType && i(u, function(n) {
                n.element === e && (t = !0)
            }), t
        }
    };
    "object" == typeof exports ? module.exports = a : "function" == typeof define && define.amd ? define(function() {
        return a
    }) : e.Countable = a
}(this),
function() {
    ! function(e) {
        var t, n, o, r;
        return n = e.getElementById("text"), 
		t = e.getElementById("all_count"), 
		r = e.getElementById("words_count"), 
		o = e.getElementById("characters_count"), 
		Countable.live(n, function(e) {
            return t.innerHTML = (null != e ? e.all : void 0) || 0, r.innerHTML = (null != e ? e.words : void 0) || 0, o.innerHTML = (null != e ? e.characters : void 0) || 0, !1
        })
    }(document)
}.call(this);
