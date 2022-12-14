/*! For license information please see main.js.LICENSE.txt */
(() => {
    var e = {
        583: () => {
            document.addEventListener("DOMContentLoaded", (() => {
                const e = document.querySelector(".cookie__accept"), t = document.querySelector(".cookie");

                function i() {
                    "1" === localStorage.getItem("cookie_ok") ? t.classList.remove("show") : t.classList.add("show")
                }

                i(), e.addEventListener("click", (() => {
                    localStorage.setItem("cookie_ok", "1"), i()
                }))
            }))
        }, 627: () => {
            document.addEventListener("DOMContentLoaded", (() => {
                var e;
                let t = [55.77698061766332, 37.75570469131539];
                null === (e = window.ymaps) || void 0 === e || e.ready((function () {
                    let e = new ymaps.Map("map", {center: t, zoom: 10}),
                        i = new ymaps.Placemark(t, {balloonContent: null}, {
                            iconLayout: "default#image",
                            iconImageHref: "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.9993 0C20.8047 0 10.666 9.07467 10.666 20.272C10.666 31.4667 19.9167 44.832 31.9993 64C44.082 44.832 53.3327 31.4667 53.3327 20.272C53.3327 9.07467 43.1967 0 31.9993 0ZM31.9993 37.3333C23.162 37.3333 15.9993 30.1707 15.9993 21.3333C15.9993 12.496 23.162 5.33333 31.9993 5.33333C40.8367 5.33333 47.9994 12.496 47.9994 21.3333C47.9994 30.1707 40.8367 37.3333 31.9993 37.3333Z' fill='%232E4D99'/%3E%3Cpath d='M36.0818 13.5733H27.916V29.1188H36.0818V13.5733Z' fill='%232E4D99'/%3E%3Cpath d='M42.3579 18.3888H40.166V29.1218H42.3579V18.3888Z' fill='%232E4D99'/%3E%3Cpath d='M23.8318 18.3888H21.64V29.1218H23.8318V18.3888Z' fill='%232E4D99'/%3E%3C/svg%3E%0A",
                            iconImageSize: [64, 64]
                        });
                    e.controls.remove("geolocationControl"), e.controls.remove("searchControl"), e.controls.remove("trafficControl"), e.controls.remove("typeSelector"), e.controls.remove("fullscreenControl"), e.controls.remove("zoomControl"), e.controls.remove("rulerControl"), e.behaviors.disable(["scrollZoom"]), e.geoObjects.add(i)
                }))
            }))
        }, 851: () => {
            document.addEventListener("DOMContentLoaded", (() => {
                const e = document.querySelectorAll(".show-more");
                null == e || e.forEach((e => {
                    const t = e.querySelector(".show-more__btn"), i = e.querySelector(".show-more__content");
                    null == t || t.addEventListener("click", (() => function (e, t) {
                        t.classList.add("active"), e.remove()
                    }(t, i)))
                }))
            }))
        }, 598: () => {
            function e(e) {
                var t = !0, i = !1, s = null, n = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

                function a(e) {
                    return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
                }

                function r(e) {
                    e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                }

                function o(e) {
                    t = !1
                }

                function l() {
                    document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
                }

                function c(e) {
                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
                }

                document.addEventListener("keydown", (function (i) {
                    i.metaKey || i.altKey || i.ctrlKey || (a(e.activeElement) && r(e.activeElement), t = !0)
                }), !0), document.addEventListener("mousedown", o, !0), document.addEventListener("pointerdown", o, !0), document.addEventListener("touchstart", o, !0), document.addEventListener("visibilitychange", (function (e) {
                    "hidden" === document.visibilityState && (i && (t = !0), l())
                }), !0), l(), e.addEventListener("focus", (function (e) {
                    var i, s, o;
                    a(e.target) && (t || (s = (i = e.target).type, "INPUT" === (o = i.tagName) && n[s] && !i.readOnly || "TEXTAREA" === o && !i.readOnly || i.isContentEditable)) && r(e.target)
                }), !0), e.addEventListener("blur", (function (e) {
                    var t;
                    a(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (i = !0, window.clearTimeout(s), s = window.setTimeout((function () {
                        i = !1
                    }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
            }

            if ("undefined" != typeof window && "undefined" != typeof document) {
                var t;
                window.applyFocusVisiblePolyfill = e;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (e) {
                    (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            "undefined" != typeof document && e(document)
        }, 382: e => {
            self, e.exports = function () {
                "use strict";
                var e = {
                    8741: function (e, t) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                        t.default = i
                    }, 3976: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var s, n = (s = i(5581)) && s.__esModule ? s : {default: s}, a = {
                            _maxTestPos: 500,
                            placeholder: "_",
                            optionalmarker: ["[", "]"],
                            quantifiermarker: ["{", "}"],
                            groupmarker: ["(", ")"],
                            alternatormarker: "|",
                            escapeChar: "\\",
                            mask: null,
                            regex: null,
                            oncomplete: function () {
                            },
                            onincomplete: function () {
                            },
                            oncleared: function () {
                            },
                            repeat: 0,
                            greedy: !1,
                            autoUnmask: !1,
                            removeMaskOnSubmit: !1,
                            clearMaskOnLostFocus: !0,
                            insertMode: !0,
                            insertModeVisual: !0,
                            clearIncomplete: !1,
                            alias: null,
                            onKeyDown: function () {
                            },
                            onBeforeMask: null,
                            onBeforePaste: function (e, t) {
                                return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e
                            },
                            onBeforeWrite: null,
                            onUnMask: null,
                            showMaskOnFocus: !0,
                            showMaskOnHover: !0,
                            onKeyValidation: function () {
                            },
                            skipOptionalPartCharacter: " ",
                            numericInput: !1,
                            rightAlign: !1,
                            undoOnEscape: !0,
                            radixPoint: "",
                            _radixDance: !1,
                            groupSeparator: "",
                            keepStatic: null,
                            positionCaretOnTab: !0,
                            tabThrough: !1,
                            supportsInputType: ["text", "tel", "url", "password", "search"],
                            ignorables: [n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                            isComplete: null,
                            preValidation: null,
                            postValidation: null,
                            staticDefinitionSymbol: void 0,
                            jitMasking: !1,
                            nullable: !0,
                            inputEventOnly: !1,
                            noValuePatching: !1,
                            positionCaretOnClick: "lvp",
                            casing: null,
                            inputmode: "text",
                            importDataAttributes: !0,
                            shiftPositions: !0,
                            usePrototypeDefinitions: !0,
                            validationEventTimeOut: 3e3,
                            substitutes: {}
                        };
                        t.default = a
                    }, 7392: function (e, t) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                            9: {
                                validator: "[0-9???-???]",
                                definitionSymbol: "*"
                            },
                            a: {validator: "[A-Za-z??-????????-????]", definitionSymbol: "*"},
                            "*": {validator: "[0-9???-???A-Za-z??-????????-????]"}
                        }
                    }, 253: function (e, t) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, i) {
                            if (void 0 === i) return e.__data ? e.__data[t] : null;
                            e.__data = e.__data || {}, e.__data[t] = i
                        }
                    }, 3776: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.Event = void 0, t.off = function (e, t) {
                            var i, s;

                            function n(e, t, n) {
                                if (e in i == 1) if (s.removeEventListener ? s.removeEventListener(e, n, !1) : s.detachEvent && s.detachEvent("on" + e, n), "global" === t) for (var a in i[e]) i[e][a].splice(i[e][a].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1)
                            }

                            function a(e, s) {
                                var n, a, r = [];
                                if (e.length > 0) if (void 0 === t) for (n = 0, a = i[e][s].length; n < a; n++) r.push({
                                    ev: e,
                                    namespace: s && s.length > 0 ? s : "global",
                                    handler: i[e][s][n]
                                }); else r.push({
                                    ev: e,
                                    namespace: s && s.length > 0 ? s : "global",
                                    handler: t
                                }); else if (s.length > 0) for (var o in i) for (var l in i[o]) if (l === s) if (void 0 === t) for (n = 0, a = i[o][l].length; n < a; n++) r.push({
                                    ev: o,
                                    namespace: l,
                                    handler: i[o][l][n]
                                }); else r.push({ev: o, namespace: l, handler: t});
                                return r
                            }

                            if (c(this[0]) && e) {
                                i = this[0].eventRegistry, s = this[0];
                                for (var r = e.split(" "), o = 0; o < r.length; o++) for (var l = r[o].split("."), d = a(l[0], l[1]), u = 0, h = d.length; u < h; u++) n(d[u].ev, d[u].namespace, d[u].handler)
                            }
                            return this
                        }, t.on = function (e, t) {
                            function i(e, i) {
                                n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), s[e] = s[e] || {}, s[e][i] = s[e][i] || [], s[e][i].push(t)
                            }

                            if (c(this[0])) for (var s = this[0].eventRegistry, n = this[0], a = e.split(" "), r = 0; r < a.length; r++) {
                                var o = a[r].split(".");
                                i(o[0], o[1] || "global")
                            }
                            return this
                        }, t.trigger = function (e) {
                            if (c(this[0])) for (var t = this[0].eventRegistry, i = this[0], s = "string" == typeof e ? e.split(" ") : [e.type], a = 0; a < s.length; a++) {
                                var o = s[a].split("."), l = o[0], d = o[1] || "global";
                                if (void 0 !== document && "global" === d) {
                                    var u, h, p = {bubbles: !0, cancelable: !0, detail: arguments[1]};
                                    if (document.createEvent) {
                                        try {
                                            "input" === l ? (p.inputType = "insertText", u = new InputEvent(l, p)) : u = new CustomEvent(l, p)
                                        } catch (e) {
                                            (u = document.createEvent("CustomEvent")).initCustomEvent(l, p.bubbles, p.cancelable, p.detail)
                                        }
                                        e.type && (0, n.default)(u, e), i.dispatchEvent(u)
                                    } else (u = document.createEventObject()).eventType = l, u.detail = arguments[1], e.type && (0, n.default)(u, e), i.fireEvent("on" + u.eventType, u)
                                } else if (void 0 !== t[l]) if (arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1), "global" === d) for (var f in t[l]) for (h = 0; h < t[l][f].length; h++) t[l][f][h].apply(i, arguments); else for (h = 0; h < t[l][d].length; h++) t[l][d][h].apply(i, arguments)
                            }
                            return this
                        };
                        var s, n = l(i(600)), a = l(i(9380)), r = l(i(4963)), o = l(i(8741));

                        function l(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        function c(e) {
                            return e instanceof Element
                        }

                        t.Event = s, "function" == typeof a.default.CustomEvent ? t.Event = s = a.default.CustomEvent : o.default && (t.Event = s = function (e, t) {
                            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                            var i = document.createEvent("CustomEvent");
                            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                        }, s.prototype = a.default.Event.prototype)
                    }, 600: function (e, t) {
                        function i(e) {
                            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, i(e)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function e() {
                            var t, s, n, a, r, o, l = arguments[0] || {}, c = 1, d = arguments.length, u = !1;
                            for ("boolean" == typeof l && (u = l, l = arguments[c] || {}, c++), "object" !== i(l) && "function" != typeof l && (l = {}); c < d; c++) if (null != (t = arguments[c])) for (s in t) n = l[s], l !== (a = t[s]) && (u && a && ("[object Object]" === Object.prototype.toString.call(a) || (r = Array.isArray(a))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, l[s] = e(u, o, a)) : void 0 !== a && (l[s] = a));
                            return l
                        }
                    }, 4963: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var s = o(i(600)), n = o(i(9380)), a = o(i(253)), r = i(3776);

                        function o(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var l = n.default.document;

                        function c(e) {
                            return e instanceof c ? e : this instanceof c ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e)
                        }

                        c.prototype = {
                            on: r.on,
                            off: r.off,
                            trigger: r.trigger
                        }, c.extend = s.default, c.data = a.default, c.Event = r.Event;
                        var d = c;
                        t.default = d
                    }, 9845: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                        var s, n = (s = i(9380)) && s.__esModule ? s : {default: s},
                            a = n.default.navigator && n.default.navigator.userAgent || "",
                            r = a.indexOf("MSIE ") > 0 || a.indexOf("Trident/") > 0, o = "ontouchstart" in n.default,
                            l = /iemobile/i.test(a), c = /iphone/i.test(a) && !l;
                        t.iphone = c, t.iemobile = l, t.mobile = o, t.ie = r, t.ua = a
                    }, 7184: function (e, t) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                            return e.replace(i, "\\$1")
                        };
                        var i = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim")
                    }, 6030: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.EventHandlers = void 0;
                        var s, n = i(8711), a = (s = i(5581)) && s.__esModule ? s : {default: s}, r = i(9845),
                            o = i(7215), l = i(7760), c = i(4713);

                        function d(e, t) {
                            var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!i) {
                                if (Array.isArray(e) || (i = function (e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return u(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0
                                    }
                                }(e)) || t && e && "number" == typeof e.length) {
                                    i && (e = i);
                                    var s = 0, n = function () {
                                    };
                                    return {
                                        s: n, n: function () {
                                            return s >= e.length ? {done: !0} : {done: !1, value: e[s++]}
                                        }, e: function (e) {
                                            throw e
                                        }, f: n
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var a, r = !0, o = !1;
                            return {
                                s: function () {
                                    i = i.call(e)
                                }, n: function () {
                                    var e = i.next();
                                    return r = e.done, e
                                }, e: function (e) {
                                    o = !0, a = e
                                }, f: function () {
                                    try {
                                        r || null == i.return || i.return()
                                    } finally {
                                        if (o) throw a
                                    }
                                }
                            }
                        }

                        function u(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                            return s
                        }

                        var h = {
                            keydownEvent: function (e) {
                                var t = this.inputmask, i = t.opts, s = t.dependencyLib, d = t.maskset, u = this,
                                    h = s(u), p = e.keyCode, f = n.caret.call(t, u),
                                    m = i.onKeyDown.call(this, e, n.getBuffer.call(t), f, i);
                                if (void 0 !== m) return m;
                                if (p === a.default.BACKSPACE || p === a.default.DELETE || r.iphone && p === a.default.BACKSPACE_SAFARI || e.ctrlKey && p === a.default.X && !("oncut" in u)) e.preventDefault(), o.handleRemove.call(t, u, p, f), (0, l.writeBuffer)(u, n.getBuffer.call(t, !0), d.p, e, u.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === a.default.END || p === a.default.PAGE_DOWN) {
                                    e.preventDefault();
                                    var g = n.seekNext.call(t, n.getLastValidPosition.call(t));
                                    n.caret.call(t, u, e.shiftKey ? f.begin : g, g, !0)
                                } else p === a.default.HOME && !e.shiftKey || p === a.default.PAGE_UP ? (e.preventDefault(), n.caret.call(t, u, 0, e.shiftKey ? f.begin : 0, !0)) : i.undoOnEscape && p === a.default.ESCAPE && !0 !== e.altKey ? ((0, l.checkVal)(u, !0, !1, t.undoValue.split("")), h.trigger("click")) : p !== a.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === a.default.TAB ? !0 === e.shiftKey ? (f.end = n.seekPrevious.call(t, f.end, !0), !0 === c.getTest.call(t, f.end - 1).match.static && f.end--, f.begin = n.seekPrevious.call(t, f.end, !0), f.begin >= 0 && f.end > 0 && (e.preventDefault(), n.caret.call(t, u, f.begin, f.end))) : (f.begin = n.seekNext.call(t, f.begin, !0), f.end = n.seekNext.call(t, f.begin, !0), f.end < d.maskLength && f.end--, f.begin <= d.maskLength && (e.preventDefault(), n.caret.call(t, u, f.begin, f.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === a.default.RIGHT ? setTimeout((function () {
                                    var e = n.caret.call(t, u);
                                    n.caret.call(t, u, e.begin)
                                }), 0) : p === a.default.LEFT && setTimeout((function () {
                                    var e = n.translatePosition.call(t, u.inputmask.caretPos.begin);
                                    n.translatePosition.call(t, u.inputmask.caretPos.end), t.isRTL ? n.caret.call(t, u, e + (e === d.maskLength ? 0 : 1)) : n.caret.call(t, u, e - (0 === e ? 0 : 1))
                                }), 0)) : o.isSelection.call(t, f) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, n.caret.call(t, u, f.begin, f.begin));
                                t.ignorable = i.ignorables.includes(p)
                            }, keypressEvent: function (e, t, i, s, r) {
                                var c = this.inputmask || this, d = c.opts, u = c.dependencyLib, h = c.maskset,
                                    p = c.el, f = u(p), m = e.keyCode;
                                if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || c.ignorable)) return m === a.default.ENTER && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), setTimeout((function () {
                                    f.trigger("change")
                                }), 0)), c.skipInputEvent = !0, !0;
                                if (m) {
                                    44 !== m && 46 !== m || 3 !== e.location || "" === d.radixPoint || (m = d.radixPoint.charCodeAt(0));
                                    var g, v = t ? {begin: r, end: r} : n.caret.call(c, p), b = String.fromCharCode(m);
                                    b = d.substitutes[b] || b, h.writeOutBuffer = !0;
                                    var y = o.isValid.call(c, v, b, s, void 0, void 0, void 0, t);
                                    if (!1 !== y && (n.resetMaskSet.call(c, !0), g = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), h.p = g), g = d.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, g) : g, !1 !== i && (setTimeout((function () {
                                        d.onKeyValidation.call(p, m, y)
                                    }), 0), h.writeOutBuffer && !1 !== y)) {
                                        var w = n.getBuffer.call(c);
                                        (0, l.writeBuffer)(p, w, g, e, !0 !== t)
                                    }
                                    if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = g), y
                                }
                            }, keyupEvent: function (e) {
                                var t = this.inputmask;
                                !t.isComposing || e.keyCode !== a.default.KEY_229 && e.keyCode !== a.default.ENTER || t.$el.trigger("input")
                            }, pasteEvent: function (e) {
                                var t, i = this.inputmask, s = i.opts, a = i._valueGet(!0), r = n.caret.call(i, this);
                                i.isRTL && (t = r.end, r.end = n.translatePosition.call(i, r.begin), r.begin = n.translatePosition.call(i, t));
                                var o = a.substr(0, r.begin), c = a.substr(r.end, a.length);
                                if (o == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, r.begin).join("") && (o = ""), c == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(r.end).join("") && (c = ""), window.clipboardData && window.clipboardData.getData) a = o + window.clipboardData.getData("Text") + c; else {
                                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                    a = o + e.clipboardData.getData("text/plain") + c
                                }
                                var u = a;
                                if (i.isRTL) {
                                    u = u.split("");
                                    var h, p = d(n.getBufferTemplate.call(i));
                                    try {
                                        for (p.s(); !(h = p.n()).done;) {
                                            var f = h.value;
                                            u[0] === f && u.shift()
                                        }
                                    } catch (e) {
                                        p.e(e)
                                    } finally {
                                        p.f()
                                    }
                                    u = u.join("")
                                }
                                if ("function" == typeof s.onBeforePaste) {
                                    if (!1 === (u = s.onBeforePaste.call(i, u, s))) return !1;
                                    u || (u = a)
                                }
                                (0, l.checkVal)(this, !0, !1, u.toString().split(""), e), e.preventDefault()
                            }, inputFallBackEvent: function (e) {
                                var t = this.inputmask, i = t.opts, s = t.dependencyLib, o = this,
                                    d = o.inputmask._valueGet(!0),
                                    u = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""),
                                    p = n.caret.call(t, o, void 0, void 0, !0);
                                if (u !== d) {
                                    d = function (e, i, s) {
                                        if (r.iemobile) {
                                            var a = i.replace(n.getBuffer.call(t).join(""), "");
                                            if (1 === a.length) {
                                                var o = i.split("");
                                                o.splice(s.begin, 0, a), i = o.join("")
                                            }
                                        }
                                        return i
                                    }(0, d, p);
                                    var f = function (e, s, a) {
                                        for (var r, o, l, d = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), h = s.substr(0, a.begin).split(""), p = s.substr(a.begin).split(""), f = d.length >= h.length ? d.length : h.length, m = u.length >= p.length ? u.length : p.length, g = "", v = [], b = "~"; d.length < f;) d.push(b);
                                        for (; h.length < f;) h.push(b);
                                        for (; u.length < m;) u.unshift(b);
                                        for (; p.length < m;) p.unshift(b);
                                        var y = d.concat(u), w = h.concat(p);
                                        for (o = 0, r = y.length; o < r; o++) switch (l = c.getPlaceholder.call(t, n.translatePosition.call(t, o)), g) {
                                            case"insertText":
                                                w[o - 1] === y[o] && a.begin == y.length - 1 && v.push(y[o]), o = r;
                                                break;
                                            case"insertReplacementText":
                                            case"deleteContentBackward":
                                                y[o] === b ? a.end++ : o = r;
                                                break;
                                            default:
                                                y[o] !== w[o] && (y[o + 1] !== b && y[o + 1] !== l && void 0 !== y[o + 1] || (w[o] !== l || w[o + 1] !== b) && w[o] !== b ? w[o + 1] === b && w[o] === y[o + 1] ? (g = "insertText", v.push(y[o]), a.begin--, a.end--) : y[o] !== l && y[o] !== b && (y[o + 1] === b || w[o] !== y[o] && w[o + 1] === y[o + 1]) ? (g = "insertReplacementText", v.push(y[o]), a.begin--) : y[o] === b ? (g = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, o), !0) || w[o] === i.radixPoint) && a.end++) : o = r : (g = "insertText", v.push(y[o]), a.begin--, a.end--))
                                        }
                                        return {action: g, data: v, caret: a}
                                    }(d, u, p);
                                    switch ((o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), (0, l.writeBuffer)(o, n.getBuffer.call(t)), n.caret.call(t, o, p.begin, p.end, !0), f.action) {
                                        case"insertText":
                                        case"insertReplacementText":
                                            f.data.forEach((function (e, i) {
                                                var n = new s.Event("keypress");
                                                n.keyCode = e.charCodeAt(0), t.ignorable = !1, h.keypressEvent.call(o, n)
                                            })), setTimeout((function () {
                                                t.$el.trigger("keyup")
                                            }), 0);
                                            break;
                                        case"deleteContentBackward":
                                            var m = new s.Event("keydown");
                                            m.keyCode = a.default.BACKSPACE, h.keydownEvent.call(o, m);
                                            break;
                                        default:
                                            (0, l.applyInputValue)(o, d)
                                    }
                                    e.preventDefault()
                                }
                            }, compositionendEvent: function (e) {
                                var t = this.inputmask;
                                t.isComposing = !1, t.$el.trigger("input")
                            }, setValueEvent: function (e) {
                                var t = this.inputmask, i = this, s = e && e.detail ? e.detail[0] : arguments[1];
                                void 0 === s && (s = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, s), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2])
                            }, focusEvent: function (e) {
                                var t = this.inputmask, i = t.opts, s = this, a = s.inputmask._valueGet();
                                i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, l.writeBuffer)(s, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || h.clickEvent.apply(s, [e, !0]), t.undoValue = t._valueGet(!0)
                            }, invalidEvent: function (e) {
                                this.inputmask.validationEvent = !0
                            }, mouseleaveEvent: function () {
                                var e = this.inputmask, t = e.opts, i = this;
                                e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, l.HandleNativePlaceholder)(i, e.originalPlaceholder)
                            }, clickEvent: function (e, t) {
                                var i = this.inputmask, s = this;
                                if ((s.inputmask.shadowRoot || s.ownerDocument).activeElement === s) {
                                    var a = n.determineNewCaretPosition.call(i, n.caret.call(i, s), t);
                                    void 0 !== a && n.caret.call(i, s, a)
                                }
                            }, cutEvent: function (e) {
                                var t = this.inputmask, i = t.maskset, s = this, r = n.caret.call(t, s),
                                    c = t.isRTL ? n.getBuffer.call(t).slice(r.end, r.begin) : n.getBuffer.call(t).slice(r.begin, r.end),
                                    d = t.isRTL ? c.reverse().join("") : c.join("");
                                window.navigator.clipboard ? window.navigator.clipboard.writeText(d) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", d), o.handleRemove.call(t, s, a.default.DELETE, r), (0, l.writeBuffer)(s, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0))
                            }, blurEvent: function (e) {
                                var t = this.inputmask, i = t.opts, s = (0, t.dependencyLib)(this), a = this;
                                if (a.inputmask) {
                                    (0, l.HandleNativePlaceholder)(a, t.originalPlaceholder);
                                    var r = a.inputmask._valueGet(), c = n.getBuffer.call(t).slice();
                                    "" !== r && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && r === n.getBufferTemplate.call(t).join("") ? c = [] : l.clearOptionalTail.call(t, c)), !1 === o.isComplete.call(t, c) && (setTimeout((function () {
                                        s.trigger("incomplete")
                                    }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), c = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), (0, l.writeBuffer)(a, c, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), s.trigger("change"))
                                }
                            }, mouseenterEvent: function () {
                                var e = this.inputmask, t = e.opts, i = this;
                                if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                    var s = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                    e.placeholder !== s && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), t.showMaskOnHover && (0, l.HandleNativePlaceholder)(i, s)
                                }
                            }, submitEvent: function () {
                                var e = this.inputmask, t = e.opts;
                                e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function () {
                                    (0, l.writeBuffer)(e.el, n.getBuffer.call(e))
                                }), 0))
                            }, resetEvent: function () {
                                var e = this.inputmask;
                                e.refreshValue = !0, setTimeout((function () {
                                    (0, l.applyInputValue)(e.el, e._valueGet(!0))
                                }), 0)
                            }
                        };
                        t.EventHandlers = h
                    }, 9716: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.EventRuler = void 0;
                        var s = o(i(2394)), n = o(i(5581)), a = i(8711), r = i(7760);

                        function o(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var l = {
                            on: function (e, t, i) {
                                var o = e.inputmask.dependencyLib, l = function (t) {
                                    t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                    var l, c = this, d = c.inputmask, u = d ? d.opts : void 0;
                                    if (void 0 === d && "FORM" !== this.nodeName) {
                                        var h = o.data(c, "_inputmask_opts");
                                        o(c).off(), h && new s.default(h).mask(c)
                                    } else {
                                        if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === u.tabThrough && t.keyCode === n.default.TAB))) {
                                            switch (t.type) {
                                                case"input":
                                                    if (!0 === d.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return d.skipInputEvent = !1, t.preventDefault();
                                                    break;
                                                case"keydown":
                                                    d.skipKeyPressEvent = !1, d.skipInputEvent = d.isComposing = t.keyCode === n.default.KEY_229;
                                                    break;
                                                case"keyup":
                                                case"compositionend":
                                                    d.isComposing && (d.skipInputEvent = !1);
                                                    break;
                                                case"keypress":
                                                    if (!0 === d.skipKeyPressEvent) return t.preventDefault();
                                                    d.skipKeyPressEvent = !0;
                                                    break;
                                                case"click":
                                                case"focus":
                                                    return d.validationEvent ? (d.validationEvent = !1, e.blur(), (0, r.HandleNativePlaceholder)(e, (d.isRTL ? a.getBufferTemplate.call(d).slice().reverse() : a.getBufferTemplate.call(d)).join("")), setTimeout((function () {
                                                        e.focus()
                                                    }), u.validationEventTimeOut), !1) : (l = arguments, setTimeout((function () {
                                                        e.inputmask && i.apply(c, l)
                                                    }), 0), !1)
                                            }
                                            var p = i.apply(c, arguments);
                                            return !1 === p && (t.preventDefault(), t.stopPropagation()), p
                                        }
                                        t.preventDefault()
                                    }
                                };
                                ["submit", "reset"].includes(t) ? (l = l.bind(e), null !== e.form && o(e.form).on(t, l)) : o(e).on(t, l), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l)
                            }, off: function (e, t) {
                                if (e.inputmask && e.inputmask.events) {
                                    var i = e.inputmask.dependencyLib, s = e.inputmask.events;
                                    for (var n in t && ((s = [])[t] = e.inputmask.events[t]), s) {
                                        for (var a = s[n]; a.length > 0;) {
                                            var r = a.pop();
                                            ["submit", "reset"].includes(n) ? null !== e.form && i(e.form).off(n, r) : i(e).off(n, r)
                                        }
                                        delete e.inputmask.events[n]
                                    }
                                }
                            }
                        };
                        t.EventRuler = l
                    }, 219: function (e, t, i) {
                        var s = u(i(2394)), n = u(i(5581)), a = u(i(7184)), r = i(8711), o = i(4713);

                        function l(e) {
                            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, l(e)
                        }

                        function c(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                            return s
                        }

                        function d(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var s = t[i];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                            }
                        }

                        function u(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var h = s.default.dependencyLib, p = function () {
                            function e(t, i, s) {
                                !function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.mask = t, this.format = i, this.opts = s, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts)
                            }

                            var t, i;
                            return t = e, (i = [{
                                key: "date", get: function () {
                                    return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date
                                }
                            }, {
                                key: "initDateObject", value: function (e, t) {
                                    var i;
                                    for (k(t).lastIndex = 0; i = k(t).exec(this.format);) {
                                        var s = new RegExp("\\d+$").exec(i[0]), n = s ? i[0][0] + "x" : i[0],
                                            a = void 0;
                                        if (void 0 !== e) {
                                            if (s) {
                                                var r = k(t).lastIndex, o = P(i.index, t);
                                                k(t).lastIndex = r, a = e.slice(0, e.indexOf(o.nextMatch[0]))
                                            } else a = e.slice(0, n.length);
                                            e = e.slice(a.length)
                                        }
                                        Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, a, n, g[n][2], g[n][1])
                                    }
                                }
                            }, {
                                key: "setValue", value: function (e, t, i, s, n) {
                                    if (void 0 !== t && (e[s] = "ampm" === s ? t : t.replace(/[^0-9]/g, "0"), e["raw" + s] = t.replace(/\s/g, "_")), void 0 !== n) {
                                        var a = e[s];
                                        ("day" === s && 29 === parseInt(a) || "month" === s && 2 === parseInt(a)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === s && (m = !0, 0 === parseInt(a) && (a = 1)), "month" === s && (m = !0), "year" === s && (m = !0, a.length < 4 && (a = E(a, 4, !0))), "" === a || isNaN(a) || n.call(e._date, a), "ampm" === s && n.call(e._date, a)
                                    }
                                }
                            }, {
                                key: "reset", value: function () {
                                    this._date = new Date(1, 0, 1)
                                }
                            }, {
                                key: "reInit", value: function () {
                                    this._date = void 0, this.date
                                }
                            }]) && d(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
                        }(), f = (new Date).getFullYear(), m = !1, g = {
                            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                                return E(Date.prototype.getDate.call(this), 2)
                            }],
                            ddd: [""],
                            dddd: [""],
                            m: ["[1-9]|1[012]", function (e) {
                                var t = e ? parseInt(e) : 0;
                                return t > 0 && t--, Date.prototype.setMonth.call(this, t)
                            }, "month", function () {
                                return Date.prototype.getMonth.call(this) + 1
                            }],
                            mm: ["0[1-9]|1[012]", function (e) {
                                var t = e ? parseInt(e) : 0;
                                return t > 0 && t--, Date.prototype.setMonth.call(this, t)
                            }, "month", function () {
                                return E(Date.prototype.getMonth.call(this) + 1, 2)
                            }],
                            mmm: [""],
                            mmmm: [""],
                            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
                                return E(Date.prototype.getFullYear.call(this), 2)
                            }],
                            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                                return E(Date.prototype.getFullYear.call(this), 4)
                            }],
                            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                                return E(Date.prototype.getHours.call(this), 2)
                            }],
                            hx: [function (e) {
                                return "[0-9]{".concat(e, "}")
                            }, Date.prototype.setHours, "hours", function (e) {
                                return Date.prototype.getHours
                            }],
                            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                                return E(Date.prototype.getHours.call(this), 2)
                            }],
                            Hx: [function (e) {
                                return "[0-9]{".concat(e, "}")
                            }, Date.prototype.setHours, "hours", function (e) {
                                return function () {
                                    return E(Date.prototype.getHours.call(this), e)
                                }
                            }],
                            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
                                return E(Date.prototype.getMinutes.call(this), 2)
                            }],
                            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
                                return E(Date.prototype.getSeconds.call(this), 2)
                            }],
                            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                                return E(Date.prototype.getMilliseconds.call(this), 3)
                            }],
                            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                                return E(Date.prototype.getMilliseconds.call(this), 2)
                            }],
                            t: ["[ap]", b, "ampm", y, 1],
                            tt: ["[ap]m", b, "ampm", y, 2],
                            T: ["[AP]", b, "ampm", y, 1],
                            TT: ["[AP]M", b, "ampm", y, 2],
                            Z: [".*", void 0, "Z", function () {
                                var e = this.toString().match(/\((.+)\)/)[1];
                                return e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function (e) {
                                    return function (e, t) {
                                        return function (e) {
                                            if (Array.isArray(e)) return e
                                        }(e) || function (e, t) {
                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != i) {
                                                var s, n, a = [], r = !0, o = !1;
                                                try {
                                                    for (i = i.call(e); !(r = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); r = !0) ;
                                                } catch (e) {
                                                    o = !0, n = e
                                                } finally {
                                                    try {
                                                        r || null == i.return || i.return()
                                                    } finally {
                                                        if (o) throw n
                                                    }
                                                }
                                                return a
                                            }
                                        }(e, t) || function (e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return c(e, t);
                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(e, t) : void 0
                                            }
                                        }(e, t) || function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }()
                                    }(e, 1)[0]
                                })).join("")), e
                            }],
                            o: [""],
                            S: [""]
                        }, v = {
                            isoDate: "yyyy-mm-dd",
                            isoTime: "HH:MM:ss",
                            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                        };

                        function b(e) {
                            var t = this.getHours();
                            e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12)
                        }

                        function y() {
                            var e = this.getHours();
                            return (e = e || 12) >= 12 ? "PM" : "AM"
                        }

                        function w(e) {
                            var t = new RegExp("\\d+$").exec(e[0]);
                            if (t && void 0 !== t[0]) {
                                var i = g[e[0][0] + "x"].slice("");
                                return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i
                            }
                            if (g[e[0]]) return g[e[0]]
                        }

                        function k(e) {
                            if (!e.tokenizer) {
                                var t = [], i = [];
                                for (var s in g) if (/\.*x$/.test(s)) {
                                    var n = s[0] + "\\d+";
                                    -1 === i.indexOf(n) && i.push(n)
                                } else -1 === t.indexOf(s[0]) && t.push(s[0]);
                                e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g")
                            }
                            return e.tokenizer
                        }

                        function T(e, t, i) {
                            if (!m) return !0;
                            if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                            if ("29" == e.day) {
                                var s = P(t.pos, i);
                                if ("yyyy" === s.targetMatch[0] && t.pos - s.targetMatchIndex == 2) return t.remove = t.pos + 1, t
                            } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [{
                                pos: t.pos,
                                c: "0"
                            }, {pos: t.pos + 1, c: t.c}], t.caret = r.seekNext.call(this, t.pos + 1), t;
                            return !1
                        }

                        function C(e, t, i, s) {
                            var n, r, o = "";
                            for (k(i).lastIndex = 0; n = k(i).exec(e);) if (void 0 === t) if (r = w(n)) o += "(" + r[0] + ")"; else switch (n[0]) {
                                case"[":
                                    o += "(";
                                    break;
                                case"]":
                                    o += ")?";
                                    break;
                                default:
                                    o += (0, a.default)(n[0])
                            } else (r = w(n)) ? !0 !== s && r[3] ? o += r[3].call(t.date) : r[2] ? o += t["raw" + r[2]] : o += n[0] : o += n[0];
                            return o
                        }

                        function E(e, t, i) {
                            for (e = String(e), t = t || 2; e.length < t;) e = i ? e + "0" : "0" + e;
                            return e
                        }

                        function S(e, t, i) {
                            return "string" == typeof e ? new p(e, t, i) : e && "object" === l(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0
                        }

                        function x(e, t) {
                            return C(t.inputFormat, {date: e}, t)
                        }

                        function P(e, t) {
                            var i, s, n = 0, a = 0;
                            for (k(t).lastIndex = 0; s = k(t).exec(t.inputFormat);) {
                                var r = new RegExp("\\d+$").exec(s[0]);
                                if ((n += a = r ? parseInt(r[0]) : s[0].length) >= e + 1) {
                                    i = s, s = k(t).exec(t.inputFormat);
                                    break
                                }
                            }
                            return {targetMatchIndex: n - a, nextMatch: s, targetMatch: i}
                        }

                        s.default.extendAliases({
                            datetime: {
                                mask: function (e) {
                                    return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = v[e.inputFormat] || e.inputFormat, e.displayFormat = v[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = v[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), e.regex = C(e.inputFormat, void 0, e), e.min = S(e.min, e.inputFormat, e), e.max = S(e.max, e.inputFormat, e), null
                                },
                                placeholder: "",
                                inputFormat: "isoDateTime",
                                displayFormat: null,
                                outputFormat: null,
                                min: null,
                                max: null,
                                skipOptionalPartCharacter: "",
                                i18n: {
                                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                    ordinalSuffix: ["st", "nd", "rd", "th"]
                                },
                                preValidation: function (e, t, i, s, n, a, r, o) {
                                    if (o) return !0;
                                    if (isNaN(i) && e[t] !== i) {
                                        var l = P(t, n);
                                        if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                            var c = g[l.targetMatch[0]][0];
                                            if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                                                fuzzy: !0,
                                                buffer: e,
                                                refreshFromBuffer: {start: t - 1, end: t + 1},
                                                pos: t + 1
                                            }
                                        }
                                    }
                                    return !0
                                },
                                postValidation: function (e, t, i, s, n, a, r, l) {
                                    var c, d;
                                    if (r) return !0;
                                    if (!1 === s && (((c = P(t + 1, n)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = P(t + 2, n)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (d = g[c.targetMatch[0]][0]), void 0 !== d && (void 0 !== a.validPositions[t + 1] && new RegExp(d).test(i + "0") ? (e[t] = i, e[t + 1] = "0", s = {
                                        pos: t + 2,
                                        caret: t
                                    }) : new RegExp(d).test("0" + i) && (e[t] = "0", e[t + 1] = i, s = {pos: t + 2})), !1 === s)) return s;
                                    if (s.fuzzy && (e = s.buffer, t = s.pos), (c = P(t, n)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                        var u = g[c.targetMatch[0]];
                                        d = u[0];
                                        var h = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                        if (!1 === new RegExp(d).test(h.join("")) && 2 === c.targetMatch[0].length && a.validPositions[c.targetMatchIndex] && a.validPositions[c.targetMatchIndex + 1] && (a.validPositions[c.targetMatchIndex + 1].input = "0"), "year" == u[2]) for (var p = o.getMaskTemplate.call(this, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = p[m], delete a.validPositions[m]
                                    }
                                    var v = s, b = S(e.join(""), n.inputFormat, n);
                                    return v && b.date.getTime() == b.date.getTime() && (n.prefillYear && (v = function (e, t, i) {
                                        if (e.year !== e.rawyear) {
                                            var s = f.toString(), n = e.rawyear.replace(/[^0-9]/g, ""),
                                                a = s.slice(0, n.length), r = s.slice(n.length);
                                            if (2 === n.length && n === a) {
                                                var o = new Date(f, e.month - 1, e.day);
                                                e.day == o.getDate() && (!i.max || i.max.date.getTime() >= o.getTime()) && (e.date.setFullYear(f), e.year = s, t.insert = [{
                                                    pos: t.pos + 1,
                                                    c: r[0]
                                                }, {pos: t.pos + 2, c: r[1]}])
                                            }
                                        }
                                        return t
                                    }(b, v, n)), v = function (e, t, i, s, n) {
                                        if (!t) return t;
                                        if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                            var a;
                                            for (e.reset(), k(i).lastIndex = 0; a = k(i).exec(i.inputFormat);) {
                                                var r;
                                                if ((r = w(a)) && r[3]) {
                                                    for (var o = r[1], l = e[r[2]], c = i.min[r[2]], d = i.max ? i.max[r[2]] : c, u = [], h = !1, p = 0; p < c.length; p++) void 0 !== s.validPositions[p + a.index] || h ? (u[p] = l[p], h = h || l[p] > c[p]) : (u[p] = c[p], "year" === r[2] && l.length - 1 == p && c != d && (u = (parseInt(u.join("")) + 1).toString().split("")), "ampm" === r[2] && c != d && i.min.date.getTime() > e.date.getTime() && (u[p] = d[p]));
                                                    o.call(e._date, u.join(""))
                                                }
                                            }
                                            t = i.min.date.getTime() <= e.date.getTime(), e.reInit()
                                        }
                                        return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), t
                                    }(b, v = T.call(this, b, v, n), n, a)), void 0 !== t && v && s.pos !== t ? {
                                        buffer: C(n.inputFormat, b, n).split(""),
                                        refreshFromBuffer: {start: t, end: s.pos},
                                        pos: s.caret || s.pos
                                    } : v
                                },
                                onKeyDown: function (e, t, i, s) {
                                    e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(x(new Date, s)), h(this).trigger("setvalue"))
                                },
                                onUnMask: function (e, t, i) {
                                    return t ? C(i.outputFormat, S(e, i.inputFormat, i), i, !0) : t
                                },
                                casing: function (e, t, i, s) {
                                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e
                                },
                                onBeforeMask: function (e, t) {
                                    return "[object Date]" === Object.prototype.toString.call(e) && (e = x(e, t)), e
                                },
                                insertMode: !1,
                                shiftPositions: !1,
                                keepStatic: !1,
                                inputmode: "numeric",
                                prefillYear: !0
                            }
                        })
                    }, 3851: function (e, t, i) {
                        var s, n = (s = i(2394)) && s.__esModule ? s : {default: s}, a = i(8711), r = i(4713);
                        n.default.extendDefinitions({
                            A: {validator: "[A-Za-z??-????????-????]", casing: "upper"},
                            "&": {validator: "[0-9A-Za-z??-????????-????]", casing: "upper"},
                            "#": {validator: "[0-9A-Fa-f]", casing: "upper"}
                        });
                        var o = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

                        function l(e, t, i, s, n) {
                            return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, o.test(e)
                        }

                        n.default.extendAliases({
                            cssunit: {regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},
                            url: {regex: "(https?|ftp)://.*", autoUnmask: !1, keepStatic: !1, tabThrough: !0},
                            ip: {
                                mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                definitions: {
                                    i: {validator: l},
                                    j: {validator: l},
                                    k: {validator: l},
                                    l: {validator: l}
                                },
                                onUnMask: function (e, t, i) {
                                    return e
                                },
                                inputmode: "decimal",
                                substitutes: {",": "."}
                            },
                            email: {
                                mask: function (e) {
                                    var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                                        i = t;
                                    if (e.separator) for (var s = 0; s < e.quantifier; s++) i += "[".concat(e.separator).concat(t, "]");
                                    return i
                                },
                                greedy: !1,
                                casing: "lower",
                                separator: null,
                                quantifier: 5,
                                skipOptionalPartCharacter: "",
                                onBeforePaste: function (e, t) {
                                    return (e = e.toLowerCase()).replace("mailto:", "")
                                },
                                definitions: {
                                    "*": {validator: "[0-9???-???A-Za-z??-????????-????!#$%&'*+/=?^_`{|}~-]"},
                                    "-": {validator: "[0-9A-Za-z-]"}
                                },
                                onUnMask: function (e, t, i) {
                                    return e
                                },
                                inputmode: "email"
                            },
                            mac: {mask: "##:##:##:##:##:##"},
                            vin: {
                                mask: "V{13}9{4}",
                                definitions: {V: {validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", casing: "upper"}},
                                clearIncomplete: !0,
                                autoUnmask: !0
                            },
                            ssn: {
                                mask: "999-99-9999", postValidation: function (e, t, i, s, n, o, l) {
                                    var c = r.getMaskTemplate.call(this, !0, a.getLastValidPosition.call(this), !0, !0);
                                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""))
                                }
                            }
                        })
                    }, 207: function (e, t, i) {
                        var s = o(i(2394)), n = o(i(5581)), a = o(i(7184)), r = i(8711);

                        function o(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var l = s.default.dependencyLib;

                        function c(e, t) {
                            for (var i = "", n = 0; n < e.length; n++) s.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                            return i
                        }

                        function d(e, t, i, s) {
                            if (e.length > 0 && t > 0 && (!i.digitsOptional || s)) {
                                var n = e.indexOf(i.radixPoint), a = !1;
                                i.negationSymbol.back === e[e.length - 1] && (a = !0, e.length--), -1 === n && (e.push(i.radixPoint), n = e.length - 1);
                                for (var r = 1; r <= t; r++) isFinite(e[n + r]) || (e[n + r] = "0")
                            }
                            return a && e.push(i.negationSymbol.back), e
                        }

                        function u(e, t) {
                            var i = 0;
                            if ("+" === e) {
                                for (i in t.validPositions) ;
                                i = r.seekNext.call(this, parseInt(i))
                            }
                            for (var s in t.tests) if ((s = parseInt(s)) >= i) for (var n = 0, a = t.tests[s].length; n < a; n++) if ((void 0 === t.validPositions[s] || "-" === e) && t.tests[s][n].match.def === e) return s + (void 0 !== t.validPositions[s] && "-" !== e ? 1 : 0);
                            return i
                        }

                        function h(e, t) {
                            var i = -1;
                            for (var s in t.validPositions) {
                                var n = t.validPositions[s];
                                if (n && n.match.def === e) {
                                    i = parseInt(s);
                                    break
                                }
                            }
                            return i
                        }

                        function p(e, t, i, s, n) {
                            var a = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1,
                                r = (-1 !== a || s && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                            return n._radixDance && -1 !== a && r && null == t.validPositions[a] ? {
                                insert: {
                                    pos: a === i ? a + 1 : a,
                                    c: n.radixPoint
                                }, pos: i
                            } : r
                        }

                        s.default.extendAliases({
                            numeric: {
                                mask: function (e) {
                                    e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                    var t = "0", i = e.radixPoint;
                                    !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                                    var s, n = "[+]";
                                    if (n += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                        var r = e.digits.toString().split(",");
                                        isFinite(r[0]) && r[1] && isFinite(r[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (s = n + i + t + "{0," + e.digits + "}", e.keepStatic = !0) : n += i + t + "{" + e.digits + "}")
                                    } else e.inputmode = "numeric";
                                    return n += c(e.suffix, e), n += "[-]", s && (n = [s + c(e.suffix, e) + "[-]", n]), e.greedy = !1, function (e) {
                                        void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                                    }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), n
                                },
                                _mask: function (e) {
                                    return "(" + e.groupSeparator + "999){+|1}"
                                },
                                digits: "*",
                                digitsOptional: !0,
                                enforceDigitsOnBlur: !1,
                                radixPoint: ".",
                                positionCaretOnClick: "radixFocus",
                                _radixDance: !0,
                                groupSeparator: "",
                                allowMinus: !0,
                                negationSymbol: {front: "-", back: ""},
                                prefix: "",
                                suffix: "",
                                min: null,
                                max: null,
                                SetMaxOnOverflow: !1,
                                step: 1,
                                inputType: "text",
                                unmaskAsNumber: !1,
                                roundingFN: Math.round,
                                inputmode: "decimal",
                                shortcuts: {k: "1000", m: "1000000"},
                                placeholder: "0",
                                greedy: !1,
                                rightAlign: !0,
                                insertMode: !0,
                                autoUnmask: !1,
                                skipOptionalPartCharacter: "",
                                usePrototypeDefinitions: !1,
                                stripLeadingZeroes: !0,
                                definitions: {
                                    0: {validator: p},
                                    1: {validator: p, definitionSymbol: "9"},
                                    9: {validator: "[0-9???-?????-????-??]", definitionSymbol: "*"},
                                    "+": {
                                        validator: function (e, t, i, s, n) {
                                            return n.allowMinus && ("-" === e || e === n.negationSymbol.front)
                                        }
                                    },
                                    "-": {
                                        validator: function (e, t, i, s, n) {
                                            return n.allowMinus && e === n.negationSymbol.back
                                        }
                                    }
                                },
                                preValidation: function (e, t, i, s, n, a, r, o) {
                                    if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                                    var l = e.indexOf(n.radixPoint), c = t;
                                    if (t = function (e, t, i, s, n) {
                                        return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === s.validPositions[e - 1] || s.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), e
                                    }(t, i, l, a, n), "-" === i || i === n.negationSymbol.front) {
                                        if (!0 !== n.allowMinus) return !1;
                                        var d = !1, p = h("+", a), f = h("-", a);
                                        return -1 !== p && (d = [p, f]), !1 !== d ? {
                                            remove: d,
                                            caret: c - n.negationSymbol.back.length
                                        } : {
                                            insert: [{
                                                pos: u.call(this, "+", a),
                                                c: n.negationSymbol.front,
                                                fromIsValid: !0
                                            }, {
                                                pos: u.call(this, "-", a),
                                                c: n.negationSymbol.back,
                                                fromIsValid: void 0
                                            }], caret: c + n.negationSymbol.back.length
                                        }
                                    }
                                    if (i === n.groupSeparator) return {caret: c};
                                    if (o) return !0;
                                    if (-1 !== l && !0 === n._radixDance && !1 === s && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && l !== t) return {caret: n._radixDance && t === l - 1 ? l + 1 : l};
                                    if (!1 === n.__financeInput) if (s) {
                                        if (n.digitsOptional) return {rewritePosition: r.end};
                                        if (!n.digitsOptional) {
                                            if (r.begin > l && r.end <= l) return i === n.radixPoint ? {
                                                insert: {
                                                    pos: l + 1,
                                                    c: "0",
                                                    fromIsValid: !0
                                                }, rewritePosition: l
                                            } : {rewritePosition: l + 1};
                                            if (r.begin < l) return {rewritePosition: r.begin - 1}
                                        }
                                    } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {rewritePosition: l};
                                    return {rewritePosition: t}
                                },
                                postValidation: function (e, t, i, s, n, a, r) {
                                    if (!1 === s) return s;
                                    if (r) return !0;
                                    if (null !== n.min || null !== n.max) {
                                        var o = n.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, n, {unmaskAsNumber: !0}));
                                        if (null !== n.min && o < n.min && (o.toString().length > n.min.toString().length || o < 0)) return !1;
                                        if (null !== n.max && o > n.max) return !!n.SetMaxOnOverflow && {
                                            refreshFromBuffer: !0,
                                            buffer: d(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                        }
                                    }
                                    return s
                                },
                                onUnMask: function (e, t, i) {
                                    if ("" === t && !0 === i.nullable) return t;
                                    var s = e.replace(i.prefix, "");
                                    return s = (s = s.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (s = s.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== s.indexOf(i.radixPoint) && (s = s.replace(a.default.call(this, i.radixPoint), ".")), s = (s = s.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(i.negationSymbol.back) + "$"), ""), Number(s)) : s
                                },
                                isComplete: function (e, t) {
                                    var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                    return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, a.default)(t.radixPoint), ".")), isFinite(i)
                                },
                                onBeforeMask: function (e, t) {
                                    var i = t.radixPoint || ",";
                                    isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                    var s = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front,
                                        n = e.split(i), r = n[0].replace(/[^\-0-9]/g, ""),
                                        o = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", l = n.length > 1;
                                    e = r + ("" !== o ? i + o : o);
                                    var c = 0;
                                    if ("" !== i && (c = t.digitsOptional ? t.digits < o.length ? t.digits : o.length : t.digits, "" !== o || !t.digitsOptional)) {
                                        var u = Math.pow(10, c || 1);
                                        e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * u) / u).toFixed(c)), e = e.toString().replace(".", i)
                                    }
                                    if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), null !== t.min || null !== t.max) {
                                        var h = e.toString().replace(i, ".");
                                        null !== t.min && h < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && h > t.max && (e = t.max.toString().replace(".", i))
                                    }
                                    return s && "-" !== e.charAt(0) && (e = "-" + e), d(e.toString().split(""), c, t, l).join("")
                                },
                                onBeforeWrite: function (e, t, i, s) {
                                    function n(e, t) {
                                        if (!1 !== s.__financeInput || t) {
                                            var i = e.indexOf(s.radixPoint);
                                            -1 !== i && e.splice(i, 1)
                                        }
                                        if ("" !== s.groupSeparator) for (; -1 !== (i = e.indexOf(s.groupSeparator));) e.splice(i, 1);
                                        return e
                                    }

                                    var r, o;
                                    if (s.stripLeadingZeroes && (o = function (e, t) {
                                        var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")),
                                            s = i ? i[2] : "", n = !1;
                                        return s && (s = s.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(s)), !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < s.length)) && n
                                    }(t, s))) for (var c = t.join("").lastIndexOf(o[0].split("").reverse().join("")) - (o[0] == o.input ? 0 : 1), u = o[0] == o.input ? 1 : 0, h = o[0].length - u; h > 0; h--) delete this.maskset.validPositions[c + h], delete t[c + h];
                                    if (e) switch (e.type) {
                                        case"blur":
                                        case"checkval":
                                            if (null !== s.min) {
                                                var p = s.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, s, {unmaskAsNumber: !0}));
                                                if (null !== s.min && p < s.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: d(s.min.toString().replace(".", s.radixPoint).split(""), s.digits, s).reverse()
                                                }
                                            }
                                            if (t[t.length - 1] === s.negationSymbol.front) {
                                                var f = new RegExp("(^" + ("" != s.negationSymbol.front ? (0, a.default)(s.negationSymbol.front) + "?" : "") + (0, a.default)(s.prefix) + ")(.*)(" + (0, a.default)(s.suffix) + ("" != s.negationSymbol.back ? (0, a.default)(s.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                                0 == (f ? f[2] : "") && (r = {refreshFromBuffer: !0, buffer: [0]})
                                            } else "" !== s.radixPoint && t.indexOf(s.radixPoint) === s.suffix.length && (r && r.buffer ? r.buffer.splice(0, 1 + s.suffix.length) : (t.splice(0, 1 + s.suffix.length), r = {
                                                refreshFromBuffer: !0,
                                                buffer: n(t)
                                            }));
                                            if (s.enforceDigitsOnBlur) {
                                                var m = (r = r || {}) && r.buffer || t.slice().reverse();
                                                r.refreshFromBuffer = !0, r.buffer = d(m, s.digits, s, !0).reverse()
                                            }
                                    }
                                    return r
                                },
                                onKeyDown: function (e, t, i, s) {
                                    var a, r, o = l(this), c = String.fromCharCode(e.keyCode).toLowerCase();
                                    if ((r = s.shortcuts && s.shortcuts[c]) && r.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(r)), o.trigger("setvalue"), !1;
                                    if (e.ctrlKey) switch (e.keyCode) {
                                        case n.default.UP:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(s.step)), o.trigger("setvalue"), !1;
                                        case n.default.DOWN:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(s.step)), o.trigger("setvalue"), !1
                                    }
                                    if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                        if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === s.negationSymbol.front) return a = t.slice().reverse(), "" !== s.negationSymbol.front && a.shift(), "" !== s.negationSymbol.back && a.pop(), o.trigger("setvalue", [a.join(""), i.begin]), !1;
                                        if (!0 === s._radixDance) {
                                            var u = t.indexOf(s.radixPoint);
                                            if (s.digitsOptional) {
                                                if (0 === u) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [a.join(""), i.begin >= a.length ? a.length : i.begin]), !1
                                            } else if (-1 !== u && (i.begin < u || i.end < u || e.keyCode === n.default.DELETE && i.begin === u)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), a = d(a, s.digits, s).join(""), o.trigger("setvalue", [a, i.begin >= a.length ? u + 1 : i.begin]), !1
                                        }
                                    }
                                }
                            },
                            currency: {
                                prefix: "",
                                groupSeparator: ",",
                                alias: "numeric",
                                digits: 2,
                                digitsOptional: !1
                            },
                            decimal: {alias: "numeric"},
                            integer: {alias: "numeric", inputmode: "numeric", digits: 0},
                            percentage: {alias: "numeric", min: 0, max: 100, suffix: " %", digits: 0, allowMinus: !1},
                            indianns: {
                                alias: "numeric", _mask: function (e) {
                                    return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}"
                                }, groupSeparator: ",", radixPoint: ".", placeholder: "0", digits: 2, digitsOptional: !1
                            }
                        })
                    }, 9380: function (e, t, i) {
                        var s;
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var n = ((s = i(8741)) && s.__esModule ? s : {default: s}).default ? window : {};
                        t.default = n
                    }, 7760: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.HandleNativePlaceholder = function (e, t) {
                            var i = e ? e.inputmask : this;
                            if (l.ie) {
                                if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                    var s = r.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                                    if (n !== t) {
                                        var a = r.getLastValidPosition.call(i);
                                        -1 === a && n === r.getBufferTemplate.call(i).join("") ? s = [] : -1 !== a && u.call(i, s), p(e, s)
                                    }
                                }
                            } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"))
                        }, t.applyInputValue = d, t.checkVal = h, t.clearOptionalTail = u, t.unmaskedvalue = function (e) {
                            var t = e ? e.inputmask : this, i = t.opts, s = t.maskset;
                            if (e) {
                                if (void 0 === e.inputmask) return e.value;
                                e.inputmask && e.inputmask.refreshValue && d(e, e.inputmask._valueGet(!0))
                            }
                            var n = [], a = s.validPositions;
                            for (var o in a) a[o] && a[o].match && (1 != a[o].match.static || Array.isArray(s.metadata) && !0 !== a[o].generatedInput) && n.push(a[o].input);
                            var l = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                            if ("function" == typeof i.onUnMask) {
                                var c = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                                l = i.onUnMask.call(t, c, l, i)
                            }
                            return l
                        }, t.writeBuffer = p;
                        var s, n = (s = i(5581)) && s.__esModule ? s : {default: s}, a = i(4713), r = i(8711),
                            o = i(7215), l = i(9845), c = i(6030);

                        function d(e, t) {
                            var i = e ? e.inputmask : this, s = i.opts;
                            e.inputmask.refreshValue = !1, "function" == typeof s.onBeforeMask && (t = s.onBeforeMask.call(i, t, s) || t), h(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (s.clearMaskOnLostFocus || s.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("")
                        }

                        function u(e) {
                            e.length = 0;
                            for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift());) e.push(t);
                            return e
                        }

                        function h(e, t, i, s, n) {
                            var l = e ? e.inputmask : this, d = l.maskset, u = l.opts, h = l.dependencyLib,
                                f = s.slice(), m = "", g = -1, v = void 0, b = u.skipOptionalPartCharacter;
                            u.skipOptionalPartCharacter = "", r.resetMaskSet.call(l), d.tests = {}, g = u.radixPoint ? r.determineNewCaretPosition.call(l, {
                                begin: 0,
                                end: 0
                            }, !1, !1 === u.__financeInput ? "radixFocus" : void 0).begin : 0, d.p = g, l.caretPos = {begin: g};
                            var y = [], w = l.caretPos;
                            if (f.forEach((function (e, t) {
                                if (void 0 !== e) {
                                    var s = new h.Event("_checkval");
                                    s.keyCode = e.toString().charCodeAt(0), m += e;
                                    var n = r.getLastValidPosition.call(l, void 0, !0);
                                    !function (e, t) {
                                        for (var i = a.getMaskTemplate.call(l, !0, 0).slice(e, r.seekNext.call(l, e, !1, !1)).join("").replace(/'/g, ""), s = i.indexOf(t); s > 0 && " " === i[s - 1];) s--;
                                        var n = 0 === s && !r.isMask.call(l, e) && (a.getTest.call(l, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(l, e).match.static && a.getTest.call(l, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(l, e).match.nativeDef && (a.getTest.call(l, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(l, e + 1).match.static && a.getTest.call(l, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                        if (!n && s > 0 && !r.isMask.call(l, e, !1, !0)) {
                                            var o = r.seekNext.call(l, e);
                                            l.caretPos.begin < o && (l.caretPos = {begin: o})
                                        }
                                        return n
                                    }(g, m) ? (v = c.EventHandlers.keypressEvent.call(l, s, !0, !1, i, l.caretPos.begin)) && (g = l.caretPos.begin + 1, m = "") : v = c.EventHandlers.keypressEvent.call(l, s, !0, !1, i, n + 1), v ? (void 0 !== v.pos && d.validPositions[v.pos] && !0 === d.validPositions[v.pos].match.static && void 0 === d.validPositions[v.pos].alternation && (y.push(v.pos), l.isRTL || (v.forwardPosition = v.pos + 1)), p.call(l, void 0, r.getBuffer.call(l), v.forwardPosition, s, !1), l.caretPos = {
                                        begin: v.forwardPosition,
                                        end: v.forwardPosition
                                    }, w = l.caretPos) : void 0 === d.validPositions[t] && f[t] === a.getPlaceholder.call(l, t) && r.isMask.call(l, t, !0) ? l.caretPos.begin++ : l.caretPos = w
                                }
                            })), y.length > 0) {
                                var k, T, C = r.seekNext.call(l, -1, void 0, !1);
                                if (!o.isComplete.call(l, r.getBuffer.call(l)) && y.length <= C || o.isComplete.call(l, r.getBuffer.call(l)) && y.length > 0 && y.length !== C && 0 === y[0]) for (var E = C; void 0 !== (k = y.shift());) {
                                    var S = new h.Event("_checkval");
                                    if ((T = d.validPositions[k]).generatedInput = !0, S.keyCode = T.input.charCodeAt(0), (v = c.EventHandlers.keypressEvent.call(l, S, !0, !1, i, E)) && void 0 !== v.pos && v.pos !== k && d.validPositions[v.pos] && !0 === d.validPositions[v.pos].match.static) y.push(v.pos); else if (!v) break;
                                    E++
                                }
                            }
                            t && p.call(l, e, r.getBuffer.call(l), v ? v.forwardPosition : l.caretPos.begin, n || new h.Event("checkval"), n && ("input" === n.type && l.undoValue !== r.getBuffer.call(l).join("") || "paste" === n.type)), u.skipOptionalPartCharacter = b
                        }

                        function p(e, t, i, s, a) {
                            var l = e ? e.inputmask : this, c = l.opts, d = l.dependencyLib;
                            if (s && "function" == typeof c.onBeforeWrite) {
                                var u = c.onBeforeWrite.call(l, s, t, i, c);
                                if (u) {
                                    if (u.refreshFromBuffer) {
                                        var h = u.refreshFromBuffer;
                                        o.refreshFromBuffer.call(l, !0 === h ? h : h.start, h.end, u.buffer || t), t = r.getBuffer.call(l, !0)
                                    }
                                    void 0 !== i && (i = void 0 !== u.caret ? u.caret : i)
                                }
                            }
                            if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== s && "blur" === s.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== s && "keydown" === s.type && (s.keyCode === n.default.DELETE || s.keyCode === n.default.BACKSPACE)), !0 === a)) {
                                var p = d(e), f = e.inputmask._valueGet();
                                e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function () {
                                    f === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete")
                                }), 0)
                            }
                        }
                    }, 2394: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(7149), i(3194);
                        var s = i(157), n = g(i(4963)), a = g(i(9380)), r = i(2391), o = i(4713), l = i(8711),
                            c = i(7215), d = i(7760), u = i(9716), h = g(i(7392)), p = g(i(3976)), f = g(i(8741));

                        function m(e) {
                            return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, m(e)
                        }

                        function g(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var v = a.default.document, b = "_inputmask_opts";

                        function y(e, t, i) {
                            if (f.default) {
                                if (!(this instanceof y)) return new y(e, t, i);
                                this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, w(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, this.isComposing = !1
                            }
                        }

                        function w(e, t, i) {
                            var s = y.prototype.aliases[e];
                            return s ? (s.alias && w(s.alias, void 0, i), n.default.extend(!0, i, s), n.default.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1)
                        }

                        y.prototype = {
                            dataAttribute: "data-inputmask",
                            defaults: p.default,
                            definitions: h.default,
                            aliases: {},
                            masksCache: {},
                            get isRTL() {
                                return this.opts.isRTL || this.opts.numericInput
                            },
                            mask: function (e) {
                                var t = this;
                                return "string" == typeof e && (e = v.getElementById(e) || v.querySelectorAll(e)), (e = e.nodeName ? [e] : Array.isArray(e) ? e : Array.from(e)).forEach((function (e, i) {
                                    var o = n.default.extend(!0, {}, t.opts);
                                    if (function (e, t, i, s) {
                                        function r(t, n) {
                                            var r = "" === s ? t : s + "-" + t;
                                            null !== (n = void 0 !== n ? n : e.getAttribute(r)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = a.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), i[t] = n)
                                        }

                                        if (!0 === t.importDataAttributes) {
                                            var o, l, c, d, u = e.getAttribute(s);
                                            if (u && "" !== u && (u = u.replace(/'/g, '"'), l = JSON.parse("{" + u + "}")), l) for (d in c = void 0, l) if ("alias" === d.toLowerCase()) {
                                                c = l[d];
                                                break
                                            }
                                            for (o in r("alias", c), i.alias && w(i.alias, i, t), t) {
                                                if (l) for (d in c = void 0, l) if (d.toLowerCase() === o.toLowerCase()) {
                                                    c = l[d];
                                                    break
                                                }
                                                r(o, c)
                                            }
                                        }
                                        return n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right"), ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0), Object.keys(i).length
                                    }(e, o, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                        var l = (0, r.generateMaskSet)(o, t.noMasksCache);
                                        void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = o, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = l, n.default.data(e, b, t.userOptions), s.mask.call(e.inputmask))
                                    }
                                })), e && e[0] && e[0].inputmask || this
                            },
                            option: function (e, t) {
                                return "string" == typeof e ? this.opts[e] : "object" === m(e) ? (n.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0
                            },
                            unmaskedvalue: function (e) {
                                if (this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
                                    var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    d.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts)
                                }
                                return d.unmaskedvalue.call(this, this.el)
                            },
                            remove: function () {
                                if (this.el) {
                                    n.default.data(this.el, b, null);
                                    var e = this.opts.autoUnmask ? (0, d.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                    e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), u.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                        get: this.__valueGet,
                                        set: this.__valueSet,
                                        configurable: !0
                                    }) : v.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0
                                }
                                return this.el
                            },
                            getemptymask: function () {
                                return this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache), l.getBufferTemplate.call(this).join("")
                            },
                            hasMaskedValue: function () {
                                return !this.opts.autoUnmask
                            },
                            isComplete: function () {
                                return this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache), c.isComplete.call(this, l.getBuffer.call(this))
                            },
                            getmetadata: function () {
                                if (this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                                    var e = o.getMaskTemplate.call(this, !0, 0, !1).join("");
                                    return this.maskset.metadata.forEach((function (t) {
                                        return t.mask !== e || (e = t, !1)
                                    })), e
                                }
                                return this.maskset.metadata
                            },
                            isValid: function (e) {
                                if (this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache), e) {
                                    var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    d.checkVal.call(this, void 0, !0, !1, t)
                                } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                for (var i = l.getBuffer.call(this), s = l.determineLastRequiredPosition.call(this), n = i.length - 1; n > s && !l.isMask.call(this, n); n--) ;
                                return i.splice(s, n + 1 - s), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""))
                            },
                            format: function (e, t) {
                                this.maskset = this.maskset || (0, r.generateMaskSet)(this.opts, this.noMasksCache);
                                var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                d.checkVal.call(this, void 0, !0, !1, i);
                                var s = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                return t ? {value: s, metadata: this.getmetadata()} : s
                            },
                            setValue: function (e) {
                                this.el && (0, n.default)(this.el).trigger("setvalue", [e])
                            },
                            analyseMask: r.analyseMask
                        }, y.extendDefaults = function (e) {
                            n.default.extend(!0, y.prototype.defaults, e)
                        }, y.extendDefinitions = function (e) {
                            n.default.extend(!0, y.prototype.definitions, e)
                        }, y.extendAliases = function (e) {
                            n.default.extend(!0, y.prototype.aliases, e)
                        }, y.format = function (e, t, i) {
                            return y(t).format(e, i)
                        }, y.unmask = function (e, t) {
                            return y(t).unmaskedvalue(e)
                        }, y.isValid = function (e, t) {
                            return y(t).isValid(e)
                        }, y.remove = function (e) {
                            "string" == typeof e && (e = v.getElementById(e) || v.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach((function (e) {
                                e.inputmask && e.inputmask.remove()
                            }))
                        }, y.setValue = function (e, t) {
                            "string" == typeof e && (e = v.getElementById(e) || v.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach((function (e) {
                                e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [t])
                            }))
                        }, y.dependencyLib = n.default, a.default.Inputmask = y;
                        var k = y;
                        t.default = k
                    }, 5296: function (e, t, i) {
                        function s(e) {
                            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, s(e)
                        }

                        var n = p(i(9380)), a = p(i(2394)), r = p(i(8741));

                        function o(e, t) {
                            if (t && ("object" === s(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }

                        function l(e) {
                            var t = "function" == typeof Map ? new Map : void 0;
                            return l = function (e) {
                                if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                var i;
                                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                if (void 0 !== t) {
                                    if (t.has(e)) return t.get(e);
                                    t.set(e, s)
                                }

                                function s() {
                                    return c(e, arguments, h(this).constructor)
                                }

                                return s.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: s,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), u(s, e)
                            }, l(e)
                        }

                        function c(e, t, i) {
                            return c = d() ? Reflect.construct : function (e, t, i) {
                                var s = [null];
                                s.push.apply(s, t);
                                var n = new (Function.bind.apply(e, s));
                                return i && u(n, i.prototype), n
                            }, c.apply(null, arguments)
                        }

                        function d() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (e) {
                                return !1
                            }
                        }

                        function u(e, t) {
                            return u = Object.setPrototypeOf || function (e, t) {
                                return e.__proto__ = t, e
                            }, u(e, t)
                        }

                        function h(e) {
                            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }, h(e)
                        }

                        function p(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        var f = n.default.document;
                        if (r.default && f && f.head && f.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                            var m = function (e) {
                                !function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    Object.defineProperty(e, "prototype", {
                                        value: Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), writable: !1
                                    }), t && u(e, t)
                                }(r, e);
                                var t, i, s, n = (t = r, i = d(), function () {
                                    var e, s = h(t);
                                    if (i) {
                                        var n = h(this).constructor;
                                        e = Reflect.construct(s, arguments, n)
                                    } else e = s.apply(this, arguments);
                                    return o(this, e)
                                });

                                function r() {
                                    var e;
                                    !function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, r);
                                    var t = (e = n.call(this)).getAttributeNames(),
                                        i = e.attachShadow({mode: "closed"}), s = f.createElement("input");
                                    for (var o in s.type = "text", i.appendChild(s), t) Object.prototype.hasOwnProperty.call(t, o) && s.setAttribute(t[o], e.getAttribute(t[o]));
                                    var l = new a.default;
                                    return l.dataAttribute = "", l.mask(s), s.inputmask.shadowRoot = i, e
                                }

                                return s = r, Object.defineProperty(s, "prototype", {writable: !1}), s
                            }(l(HTMLElement));
                            n.default.customElements.define("input-mask", m)
                        }
                    }, 2391: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.analyseMask = function (e, t, i) {
                            var s, r, o, l, c, d,
                                u = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                                h = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                                p = !1, f = new n.default, m = [], g = [], v = !1;

                            function b(e, s, n) {
                                n = void 0 !== n ? n : e.matches.length;
                                var r = e.matches[n - 1];
                                if (t) 0 === s.indexOf("[") || p && /\\d|\\s|\\w/i.test(s) || "." === s ? e.matches.splice(n++, 0, {
                                    fn: new RegExp(s, i.casing ? "i" : ""),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === r ? "master" : r.def !== s,
                                    casing: null,
                                    def: s,
                                    placeholder: void 0,
                                    nativeDef: s
                                }) : (p && (s = s[s.length - 1]), s.split("").forEach((function (t, s) {
                                    r = e.matches[n - 1], e.matches.splice(n++, 0, {
                                        fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                        static: !0,
                                        optionality: !1,
                                        newBlockMarker: void 0 === r ? "master" : r.def !== t && !0 !== r.static,
                                        casing: null,
                                        def: i.staticDefinitionSymbol || t,
                                        placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                        nativeDef: (p ? "'" : "") + t
                                    })
                                }))), p = !1; else {
                                    var o = i.definitions && i.definitions[s] || i.usePrototypeDefinitions && a.default.prototype.definitions[s];
                                    o && !p ? e.matches.splice(n++, 0, {
                                        fn: o.validator ? "string" == typeof o.validator ? new RegExp(o.validator, i.casing ? "i" : "") : new function () {
                                            this.test = o.validator
                                        } : new RegExp("."),
                                        static: o.static || !1,
                                        optionality: o.optional || !1,
                                        newBlockMarker: void 0 === r || o.optional ? "master" : r.def !== (o.definitionSymbol || s),
                                        casing: o.casing,
                                        def: o.definitionSymbol || s,
                                        placeholder: o.placeholder,
                                        nativeDef: s,
                                        generated: o.generated
                                    }) : (e.matches.splice(n++, 0, {
                                        fn: /[a-z]/i.test(i.staticDefinitionSymbol || s) ? new RegExp("[" + (i.staticDefinitionSymbol || s) + "]", i.casing ? "i" : "") : null,
                                        static: !0,
                                        optionality: !1,
                                        newBlockMarker: void 0 === r ? "master" : r.def !== s && !0 !== r.static,
                                        casing: null,
                                        def: i.staticDefinitionSymbol || s,
                                        placeholder: void 0 !== i.staticDefinitionSymbol ? s : void 0,
                                        nativeDef: (p ? "'" : "") + s
                                    }), p = !1)
                                }
                            }

                            function y() {
                                if (m.length > 0) {
                                    if (b(l = m[m.length - 1], r), l.isAlternator) {
                                        c = m.pop();
                                        for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                        m.length > 0 ? (l = m[m.length - 1]).matches.push(c) : f.matches.push(c)
                                    }
                                } else b(f, r)
                            }

                            function w(e) {
                                var t = new n.default(!0);
                                return t.openGroup = !1, t.matches = e, t
                            }

                            function k() {
                                if ((o = m.pop()).openGroup = !1, void 0 !== o) if (m.length > 0) {
                                    if ((l = m[m.length - 1]).matches.push(o), l.isAlternator) {
                                        for (var e = (c = m.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                        m.length > 0 ? (l = m[m.length - 1]).matches.push(c) : f.matches.push(c)
                                    }
                                } else f.matches.push(o); else y()
                            }

                            function T(e) {
                                var t = e.pop();
                                return t.isQuantifier && (t = w([e.pop(), t])), t
                            }

                            for (t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0); s = t ? h.exec(e) : u.exec(e);) {
                                if (r = s[0], t) {
                                    switch (r.charAt(0)) {
                                        case"?":
                                            r = "{0,1}";
                                            break;
                                        case"+":
                                        case"*":
                                            r = "{" + r + "}";
                                            break;
                                        case"|":
                                            if (0 === m.length) {
                                                var C = w(f.matches);
                                                C.openGroup = !0, m.push(C), f.matches = [], v = !0
                                            }
                                    }
                                    "\\d" === r && (r = "[0-9]")
                                }
                                if (p) y(); else switch (r.charAt(0)) {
                                    case"$":
                                    case"^":
                                        t || y();
                                        break;
                                    case i.escapeChar:
                                        p = !0, t && y();
                                        break;
                                    case i.optionalmarker[1]:
                                    case i.groupmarker[1]:
                                        k();
                                        break;
                                    case i.optionalmarker[0]:
                                        m.push(new n.default(!1, !0));
                                        break;
                                    case i.groupmarker[0]:
                                        m.push(new n.default(!0));
                                        break;
                                    case i.quantifiermarker[0]:
                                        var E = new n.default(!1, !1, !0), S = (r = r.replace(/[{}?]/g, "")).split("|"),
                                            x = S[0].split(","), P = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                                            M = 1 === x.length ? P : isNaN(x[1]) ? x[1] : parseInt(x[1]),
                                            L = isNaN(S[1]) ? S[1] : parseInt(S[1]);
                                        "*" !== P && "+" !== P || (P = "*" === M ? 0 : 1), E.quantifier = {
                                            min: P,
                                            max: M,
                                            jit: L
                                        };
                                        var A = m.length > 0 ? m[m.length - 1].matches : f.matches;
                                        if ((s = A.pop()).isAlternator) {
                                            A.push(s), A = s.matches;
                                            var O = new n.default(!0), _ = A.pop();
                                            A.push(O), A = O.matches, s = _
                                        }
                                        s.isGroup || (s = w([s])), A.push(s), A.push(E);
                                        break;
                                    case i.alternatormarker:
                                        if (m.length > 0) {
                                            var I = (l = m[m.length - 1]).matches[l.matches.length - 1];
                                            d = l.openGroup && (void 0 === I.matches || !1 === I.isGroup && !1 === I.isAlternator) ? m.pop() : T(l.matches)
                                        } else d = T(f.matches);
                                        if (d.isAlternator) m.push(d); else if (d.alternatorGroup ? (c = m.pop(), d.alternatorGroup = !1) : c = new n.default(!1, !1, !1, !0), c.matches.push(d), m.push(c), d.openGroup) {
                                            d.openGroup = !1;
                                            var $ = new n.default(!0);
                                            $.alternatorGroup = !0, m.push($)
                                        }
                                        break;
                                    default:
                                        y()
                                }
                            }
                            for (v && k(); m.length > 0;) o = m.pop(), f.matches.push(o);
                            return f.matches.length > 0 && (function e(s) {
                                s && s.matches && s.matches.forEach((function (n, a) {
                                    var r = s.matches[a + 1];
                                    (void 0 === r || void 0 === r.matches || !1 === r.isQuantifier) && n && n.isGroup && (n.isGroup = !1, t || (b(n, i.groupmarker[0], 0), !0 !== n.openGroup && b(n, i.groupmarker[1]))), e(n)
                                }))
                            }(f), g.push(f)), (i.numericInput || i.isRTL) && function e(t) {
                                for (var s in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, s)) {
                                    var n = parseInt(s);
                                    if (t.matches[s].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                        var a = t.matches[s];
                                        t.matches.splice(s, 1), t.matches.splice(n + 1, 0, a)
                                    }
                                    void 0 !== t.matches[s].matches ? t.matches[s] = e(t.matches[s]) : t.matches[s] = ((r = t.matches[s]) === i.optionalmarker[0] ? r = i.optionalmarker[1] : r === i.optionalmarker[1] ? r = i.optionalmarker[0] : r === i.groupmarker[0] ? r = i.groupmarker[1] : r === i.groupmarker[1] && (r = i.groupmarker[0]), r)
                                }
                                var r;
                                return t
                            }(g[0]), g
                        }, t.generateMaskSet = function (e, t) {
                            var i;

                            function n(e, i, n) {
                                var r, o, l = !1;
                                if (null !== e && "" !== e || ((l = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (l = !0, e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                                    var c = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                                    e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + c + "," + n.repeat + n.quantifiermarker[1]
                                }
                                return o = l ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, null !== n.keepStatic && (o = "ks_" + n.keepStatic + o), void 0 === a.default.prototype.masksCache[o] || !0 === t ? (r = {
                                    mask: e,
                                    maskToken: a.default.prototype.analyseMask(e, l, n),
                                    validPositions: {},
                                    _buffer: void 0,
                                    buffer: void 0,
                                    tests: {},
                                    excludes: {},
                                    metadata: i,
                                    maskLength: void 0,
                                    jitOffset: {}
                                }, !0 !== t && (a.default.prototype.masksCache[o] = r, r = s.default.extend(!0, {}, a.default.prototype.masksCache[o]))) : r = s.default.extend(!0, {}, a.default.prototype.masksCache[o]), r
                            }

                            if ("function" == typeof e.mask && (e.mask = e.mask(e)), Array.isArray(e.mask)) {
                                if (e.mask.length > 1) {
                                    null === e.keepStatic && (e.keepStatic = !0);
                                    var r = e.groupmarker[0];
                                    return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function (t) {
                                        r.length > 1 && (r += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? r += t.mask : r += t
                                    })), n(r += e.groupmarker[1], e.mask, e)
                                }
                                e.mask = e.mask.pop()
                            }
                            return i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e), null === e.keepStatic && (e.keepStatic = !1), i
                        };
                        var s = r(i(4963)), n = r(i(9695)), a = r(i(2394));

                        function r(e) {
                            return e && e.__esModule ? e : {default: e}
                        }
                    }, 157: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.mask = function () {
                            var e = this, t = this.opts, i = this.el, s = this.dependencyLib;
                            o.EventRuler.off(i);
                            var u = function (t, i) {
                                "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                                var l = t.getAttribute("type"),
                                    c = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(l) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                if (!c) if ("input" === t.tagName.toLowerCase()) {
                                    var d = document.createElement("input");
                                    d.setAttribute("type", l), c = "text" === d.type, d = null
                                } else c = "partial";
                                return !1 !== c ? function (t) {
                                    var n, l;

                                    function c() {
                                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this)
                                    }

                                    function d(e) {
                                        l.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e)
                                    }

                                    if (!t.inputmask.__valueGet) {
                                        if (!0 !== i.noValuePatching) {
                                            if (Object.getOwnPropertyDescriptor) {
                                                var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                u && u.get && u.set ? (n = u.get, l = u.set, Object.defineProperty(t, "value", {
                                                    get: c,
                                                    set: d,
                                                    configurable: !0
                                                })) : "input" !== t.tagName.toLowerCase() && (n = function () {
                                                    return this.textContent
                                                }, l = function (e) {
                                                    this.textContent = e
                                                }, Object.defineProperty(t, "value", {
                                                    get: c,
                                                    set: d,
                                                    configurable: !0
                                                }))
                                            } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), l = t.__lookupSetter__("value"), t.__defineGetter__("value", c), t.__defineSetter__("value", d));
                                            t.inputmask.__valueGet = n, t.inputmask.__valueSet = l
                                        }
                                        t.inputmask._valueGet = function (t) {
                                            return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el)
                                        }, t.inputmask._valueSet = function (t, i) {
                                            l.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t)
                                        }, void 0 === n && (n = function () {
                                            return this.value
                                        }, l = function (e) {
                                            this.value = e
                                        }, function (t) {
                                            if (s.valHooks && (void 0 === s.valHooks[t] || !0 !== s.valHooks[t].inputmaskpatch)) {
                                                var n = s.valHooks[t] && s.valHooks[t].get ? s.valHooks[t].get : function (e) {
                                                        return e.value
                                                    },
                                                    o = s.valHooks[t] && s.valHooks[t].set ? s.valHooks[t].set : function (e, t) {
                                                        return e.value = t, e
                                                    };
                                                s.valHooks[t] = {
                                                    get: function (t) {
                                                        if (t.inputmask) {
                                                            if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                            var s = n(t);
                                                            return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? s : ""
                                                        }
                                                        return n(t)
                                                    }, set: function (e, t) {
                                                        var i = o(e, t);
                                                        return e.inputmask && (0, r.applyInputValue)(e, t), i
                                                    }, inputmaskpatch: !0
                                                }
                                            }
                                        }(t.type), function (t) {
                                            o.EventRuler.on(t, "mouseenter", (function () {
                                                var t = this.inputmask._valueGet(!0);
                                                t !== (e.isRTL ? a.getBuffer.call(e).reverse() : a.getBuffer.call(e)).join("") && (0, r.applyInputValue)(this, t)
                                            }))
                                        }(t))
                                    }
                                }(t) : t.inputmask = void 0, c
                            }(i, t);
                            if (!1 !== u) {
                                e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, i.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(i.autocomplete), l.iphone && (t.insertModeVisual = !1), o.EventRuler.on(i, "submit", d.EventHandlers.submitEvent), o.EventRuler.on(i, "reset", d.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", d.EventHandlers.blurEvent), o.EventRuler.on(i, "focus", d.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", d.EventHandlers.invalidEvent), o.EventRuler.on(i, "click", d.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", d.EventHandlers.mouseleaveEvent), o.EventRuler.on(i, "mouseenter", d.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", d.EventHandlers.pasteEvent), o.EventRuler.on(i, "cut", d.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), !0 !== t.inputEventOnly && (o.EventRuler.on(i, "keydown", d.EventHandlers.keydownEvent), o.EventRuler.on(i, "keypress", d.EventHandlers.keypressEvent), o.EventRuler.on(i, "keyup", d.EventHandlers.keyupEvent)), (l.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", d.EventHandlers.inputFallBackEvent), o.EventRuler.on(i, "compositionend", d.EventHandlers.compositionendEvent)), o.EventRuler.on(i, "setvalue", d.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                var h = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || h === i) {
                                    (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                    var p = a.getBuffer.call(e).slice();
                                    !1 === c.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && h !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && h === i || "" !== i.inputmask._valueGet(!0)) && (0, r.writeBuffer)(i, p), h === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)))
                                }
                            }
                        };
                        var s, n = (s = i(5581)) && s.__esModule ? s : {default: s}, a = i(8711), r = i(7760),
                            o = i(9716), l = i(9845), c = i(7215), d = i(6030)
                    }, 9695: function (e, t) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, i, s) {
                            this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = s || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }
                        }
                    }, 3194: function () {
                        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                            value: function (e, t) {
                                if (null == this) throw new TypeError('"this" is null or not defined');
                                var i = Object(this), s = i.length >>> 0;
                                if (0 === s) return !1;
                                for (var n = 0 | t, a = Math.max(n >= 0 ? n : s - Math.abs(n), 0); a < s;) {
                                    if (i[a] === e) return !0;
                                    a++
                                }
                                return !1
                            }
                        })
                    }, 7149: function () {
                        function e(t) {
                            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            })(t)
                        }

                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function (e) {
                            return e.__proto__
                        } : function (e) {
                            return e.constructor.prototype
                        })
                    }, 8711: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.caret = function (e, t, i, s, n) {
                            var a, r = this, o = this.opts;
                            if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, i = e.selectionEnd) : window.getSelection ? (a = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && a.commonAncestorContainer !== e || (t = a.startOffset, i = a.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (a = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + a.text.length), {
                                begin: s ? t : c.call(r, t),
                                end: s ? i : c.call(r, i)
                            };
                            if (Array.isArray(t) && (i = r.isRTL ? t[0] : t[1], t = r.isRTL ? t[1] : t[0]), void 0 !== t.begin && (i = r.isRTL ? t.begin : t.end, t = r.isRTL ? t.end : t.begin), "number" == typeof t) {
                                t = s ? t : c.call(r, t), i = "number" == typeof (i = s ? i : c.call(r, i)) ? i : t;
                                var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                                    begin: t,
                                    end: i
                                }, o.insertModeVisual && !1 === o.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                    if (a = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                        var d = document.createTextNode("");
                                        e.appendChild(d)
                                    }
                                    a.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), a.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), a.collapse(!0);
                                    var u = window.getSelection();
                                    u.removeAllRanges(), u.addRange(a)
                                } else e.createTextRange && ((a = e.createTextRange()).collapse(!0), a.moveEnd("character", i), a.moveStart("character", t), a.select())
                            }
                        }, t.determineLastRequiredPosition = function (e) {
                            var t, i, a = this, o = this.maskset, l = this.dependencyLib,
                                c = s.getMaskTemplate.call(a, !0, r.call(a), !0, !0), d = c.length, u = r.call(a),
                                h = {}, p = o.validPositions[u], f = void 0 !== p ? p.locator.slice() : void 0;
                            for (t = u + 1; t < c.length; t++) f = (i = s.getTestTemplate.call(a, t, f, t - 1)).locator.slice(), h[t] = l.extend(!0, {}, i);
                            var m = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                            for (t = d - 1; t > u && ((i = h[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || m && (m !== h[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(a, i.locator[p.alternation].toString().split(","), m.toString().split(",")) && "" !== s.getTests.call(a, t)[0].def)) && c[t] === s.getPlaceholder.call(a, t, i.match); t--) d--;
                            return e ? {l: d, def: h[d] ? h[d].match : void 0} : d
                        }, t.determineNewCaretPosition = function (e, t, i) {
                            var n = this, c = this.maskset, d = this.opts;
                            if (t && (n.isRTL ? e.end = e.begin : e.begin = e.end), e.begin === e.end) {
                                switch (i = i || d.positionCaretOnClick) {
                                    case"none":
                                        break;
                                    case"select":
                                        e = {begin: 0, end: a.call(n).length};
                                        break;
                                    case"ignore":
                                        e.end = e.begin = l.call(n, r.call(n));
                                        break;
                                    case"radixFocus":
                                        if (function (e) {
                                            if ("" !== d.radixPoint && 0 !== d.digits) {
                                                var t = c.validPositions;
                                                if (void 0 === t[e] || t[e].input === s.getPlaceholder.call(n, e)) {
                                                    if (e < l.call(n, -1)) return !0;
                                                    var i = a.call(n).indexOf(d.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var r in t) if (t[r] && i < r && t[r].input !== s.getPlaceholder.call(n, r)) return !1;
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        }(e.begin)) {
                                            var u = a.call(n).join("").indexOf(d.radixPoint);
                                            e.end = e.begin = d.numericInput ? l.call(n, u) : u;
                                            break
                                        }
                                    default:
                                        var h = e.begin, p = r.call(n, h, !0),
                                            f = l.call(n, -1 !== p || o.call(n, 0) ? p : -1);
                                        if (h <= f) e.end = e.begin = o.call(n, h, !1, !0) ? h : l.call(n, h); else {
                                            var m = c.validPositions[p],
                                                g = s.getTestTemplate.call(n, f, m ? m.match.locator : void 0, m),
                                                v = s.getPlaceholder.call(n, f, g.match);
                                            if ("" !== v && a.call(n)[f] !== v && !0 !== g.match.optionalQuantifier && !0 !== g.match.newBlockMarker || !o.call(n, f, d.keepStatic, !0) && g.match.def === v) {
                                                var b = l.call(n, f);
                                                (h >= b || h === f) && (f = b)
                                            }
                                            e.end = e.begin = f
                                        }
                                }
                                return e
                            }
                        }, t.getBuffer = a, t.getBufferTemplate = function () {
                            var e = this.maskset;
                            return void 0 === e._buffer && (e._buffer = s.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice())), e._buffer
                        }, t.getLastValidPosition = r, t.isMask = o, t.resetMaskSet = function (e) {
                            var t = this.maskset;
                            t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0)
                        }, t.seekNext = l, t.seekPrevious = function (e, t) {
                            var i = this, n = e - 1;
                            if (e <= 0) return 0;
                            for (; n > 0 && (!0 === t && (!0 !== s.getTest.call(i, n).match.newBlockMarker || !o.call(i, n, void 0, !0)) || !0 !== t && !o.call(i, n, void 0, !0));) n--;
                            return n
                        }, t.translatePosition = c;
                        var s = i(4713), n = i(7215);

                        function a(e) {
                            var t = this.maskset;
                            return void 0 !== t.buffer && !0 !== e || (t.buffer = s.getMaskTemplate.call(this, !0, r.call(this), !0), void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer
                        }

                        function r(e, t, i) {
                            var s = this.maskset, n = -1, a = -1, r = i || s.validPositions;
                            for (var o in void 0 === e && (e = -1), r) {
                                var l = parseInt(o);
                                r[l] && (t || !0 !== r[l].generatedInput) && (l <= e && (n = l), l >= e && (a = l))
                            }
                            return -1 === n || n == e ? a : -1 == a || e - n < a - e ? n : a
                        }

                        function o(e, t, i) {
                            var n = this, a = this.maskset, r = s.getTestTemplate.call(n, e).match;
                            if ("" === r.def && (r = s.getTest.call(n, e).match), !0 !== r.static) return r.fn;
                            if (!0 === i && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                            if (!0 !== t && e > -1) {
                                if (i) {
                                    var o = s.getTests.call(n, e);
                                    return o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)
                                }
                                var l = s.determineTestTemplate.call(n, e, s.getTests.call(n, e)),
                                    c = s.getPlaceholder.call(n, e, l.match);
                                return l.match.def !== c
                            }
                            return !1
                        }

                        function l(e, t, i) {
                            var n = this;
                            void 0 === i && (i = !0);
                            for (var a = e + 1; "" !== s.getTest.call(n, a).match.def && (!0 === t && (!0 !== s.getTest.call(n, a).match.newBlockMarker || !o.call(n, a, void 0, !0)) || !0 !== t && !o.call(n, a, void 0, i));) a++;
                            return a
                        }

                        function c(e) {
                            var t = this.opts, i = this.el;
                            return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), e
                        }
                    }, 4713: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.determineTestTemplate = c, t.getDecisionTaker = r, t.getMaskTemplate = function (e, t, i, s, n) {
                            var a = this, r = this.opts, d = this.maskset, u = r.greedy;
                            n && r.greedy && (r.greedy = !1, a.maskset.tests = {}), t = t || 0;
                            var p, f, m, g, v = [], b = 0;
                            do {
                                if (!0 === e && d.validPositions[b]) f = (m = n && d.validPositions[b].match.optionality && void 0 === d.validPositions[b + 1] && (!0 === d.validPositions[b].generatedInput || d.validPositions[b].input == r.skipOptionalPartCharacter && b > 0) ? c.call(a, b, h.call(a, b, p, b - 1)) : d.validPositions[b]).match, p = m.locator.slice(), v.push(!0 === i ? m.input : !1 === i ? f.nativeDef : o.call(a, b, f)); else {
                                    f = (m = l.call(a, b, p, b - 1)).match, p = m.locator.slice();
                                    var y = !0 !== s && (!1 !== r.jitMasking ? r.jitMasking : f.jit);
                                    (g = (g && f.static && f.def !== r.groupSeparator && null === f.fn || d.validPositions[b - 1] && f.static && f.def !== r.groupSeparator && null === f.fn) && d.tests[b] && 1 === d.tests[b].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > b ? v.push(!1 === i ? f.nativeDef : o.call(a, b, f)) : g = !1
                                }
                                b++
                            } while (!0 !== f.static || "" !== f.def || t > b);
                            return "" === v[v.length - 1] && v.pop(), !1 === i && void 0 !== d.maskLength || (d.maskLength = b - 1), r.greedy = u, v
                        }, t.getPlaceholder = o, t.getTest = d, t.getTestTemplate = l, t.getTests = h, t.isSubsetOf = u;
                        var s, n = (s = i(2394)) && s.__esModule ? s : {default: s};

                        function a(e, t) {
                            var i = (null != e.alternation ? e.mloc[r(e)] : e.locator).join("");
                            if ("" !== i) for (; i.length < t;) i += "0";
                            return i
                        }

                        function r(e) {
                            var t = e.locator[e.alternation];
                            return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : ""
                        }

                        function o(e, t, i) {
                            var s = this.opts, n = this.maskset;
                            if (void 0 !== (t = t || d.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(s) : t.placeholder;
                            if (!0 === t.static) {
                                if (e > -1 && void 0 === n.validPositions[e]) {
                                    var a, r = h.call(this, e), o = [];
                                    if (r.length > 1 + ("" === r[r.length - 1].match.def ? 1 : 0)) for (var l = 0; l < r.length; l++) if ("" !== r[l].match.def && !0 !== r[l].match.optionality && !0 !== r[l].match.optionalQuantifier && (!0 === r[l].match.static || void 0 === a || !1 !== r[l].match.fn.test(a.match.def, n, e, !0, s)) && (o.push(r[l]), !0 === r[l].match.static && (a = r[l]), o.length > 1 && /[0-9a-bA-Z]/.test(o[0].match.def))) return s.placeholder.charAt(e % s.placeholder.length)
                                }
                                return t.def
                            }
                            return s.placeholder.charAt(e % s.placeholder.length)
                        }

                        function l(e, t, i) {
                            return this.maskset.validPositions[e] || c.call(this, e, h.call(this, e, t ? t.slice() : t, i))
                        }

                        function c(e, t) {
                            var i = this.opts, s = function (e, t) {
                                var i = 0, s = !1;
                                return t.forEach((function (e) {
                                    e.match.optionality && (0 !== i && i !== e.match.optionality && (s = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality))
                                })), i && (0 == e || 1 == t.length ? i = 0 : s || (i = 0)), i
                            }(e, t);
                            e = e > 0 ? e - 1 : 0;
                            var n, r, o, l = a(d.call(this, e));
                            i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                            for (var c = 0; c < t.length; c++) {
                                var u = t[c];
                                n = a(u, l.length);
                                var h = Math.abs(n - l);
                                (void 0 === r || "" !== n && h < r || o && !i.greedy && o.match.optionality && o.match.optionality - s > 0 && "master" === o.match.newBlockMarker && (!u.match.optionality || u.match.optionality - s < 1 || !u.match.newBlockMarker) || o && !i.greedy && o.match.optionalQuantifier && !u.match.optionalQuantifier) && (r = h, o = u)
                            }
                            return o
                        }

                        function d(e, t) {
                            var i = this.maskset;
                            return i.validPositions[e] ? i.validPositions[e] : (t || h.call(this, e))[0]
                        }

                        function u(e, t, i) {
                            function s(e) {
                                for (var t, i = [], s = -1, n = 0, a = e.length; n < a; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++s < t;) i.push(String.fromCharCode(s)); else s = e.charCodeAt(n), i.push(e.charAt(n));
                                return i.join("")
                            }

                            return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== s(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(s(e.match.fn.toString().replace(/[[\]/]/g, "")))
                        }

                        function h(e, t, i) {
                            var s, a, r = this, o = this.dependencyLib, l = this.maskset, d = this.opts, h = this.el,
                                p = l.maskToken, f = t ? i : 0, m = t ? t.slice() : [0], g = [], v = !1,
                                b = t ? t.join("") : "";

                            function y(t, i, a, r) {
                                function o(a, r, c) {
                                    function p(e, t) {
                                        var i = 0 === t.matches.indexOf(e);
                                        return i || t.matches.every((function (s, n) {
                                            return !0 === s.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(s, "matches") && (i = p(e, s)), !i
                                        })), i
                                    }

                                    function m(e, t, i) {
                                        var s, n;
                                        if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [l.validPositions[e]]).every((function (e, a) {
                                            if (e.mloc[t]) return s = e, !1;
                                            var r = void 0 !== i ? i : e.alternation,
                                                o = void 0 !== e.locator[r] ? e.locator[r].toString().indexOf(t) : -1;
                                            return (void 0 === n || o < n) && -1 !== o && (s = e, n = o), !0
                                        })), s) {
                                            var a = s.locator[s.alternation];
                                            return (s.mloc[t] || s.mloc[a] || s.locator).slice((void 0 !== i ? i : s.alternation) + 1)
                                        }
                                        return void 0 !== i ? m(e, t) : void 0
                                    }

                                    function w(e, t) {
                                        var i = e.alternation,
                                            s = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                        if (!s && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                            i = n, s = !0;
                                            break
                                        }
                                        if (s) {
                                            e.mloc = e.mloc || {};
                                            var a = e.locator[i];
                                            if (void 0 !== a) {
                                                if ("string" == typeof a && (a = a.split(",")[0]), void 0 === e.mloc[a] && (e.mloc[a] = e.locator.slice()), void 0 !== t) {
                                                    for (var r in t.mloc) "string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = t.mloc[r]);
                                                    e.locator[i] = Object.keys(e.mloc).join(",")
                                                }
                                                return !0
                                            }
                                            e.alternation = void 0
                                        }
                                        return !1
                                    }

                                    function k(e, t) {
                                        if (e.locator.length !== t.locator.length) return !1;
                                        for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                        return !0
                                    }

                                    if (f > e + d._maxTestPos) throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                                    if (f === e && void 0 === a.matches) {
                                        if (g.push({
                                            match: a,
                                            locator: r.reverse(),
                                            cd: b,
                                            mloc: {}
                                        }), !a.optionality || void 0 !== c || !(d.definitions && d.definitions[a.nativeDef] && d.definitions[a.nativeDef].optional || n.default.prototype.definitions[a.nativeDef] && n.default.prototype.definitions[a.nativeDef].optional)) return !0;
                                        v = !0, f = e
                                    } else if (void 0 !== a.matches) {
                                        if (a.isGroup && c !== a) {
                                            if (a = o(t.matches[t.matches.indexOf(a) + 1], r, c)) return !0
                                        } else if (a.isOptional) {
                                            var T = a, C = g.length;
                                            if (a = y(a, i, r, c)) {
                                                if (g.forEach((function (e, t) {
                                                    t >= C && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1)
                                                })), s = g[g.length - 1].match, void 0 !== c || !p(s, T)) return !0;
                                                v = !0, f = e
                                            }
                                        } else if (a.isAlternator) {
                                            var E, S = a, x = [], P = g.slice(), M = r.length, L = !1,
                                                A = i.length > 0 ? i.shift() : -1;
                                            if (-1 === A || "string" == typeof A) {
                                                var O, _ = f, I = i.slice(), $ = [];
                                                if ("string" == typeof A) $ = A.split(","); else for (O = 0; O < S.matches.length; O++) $.push(O.toString());
                                                if (void 0 !== l.excludes[e]) {
                                                    for (var F = $.slice(), D = 0, N = l.excludes[e].length; D < N; D++) {
                                                        var j = l.excludes[e][D].toString().split(":");
                                                        r.length == j[1] && $.splice($.indexOf(j[0]), 1)
                                                    }
                                                    0 === $.length && (delete l.excludes[e], $ = F)
                                                }
                                                (!0 === d.keepStatic || isFinite(parseInt(d.keepStatic)) && _ >= d.keepStatic) && ($ = $.slice(0, 1));
                                                for (var B = 0; B < $.length; B++) {
                                                    O = parseInt($[B]), g = [], i = "string" == typeof A && m(f, O, M) || I.slice();
                                                    var R = S.matches[O];
                                                    if (R && o(R, [O].concat(r), c)) a = !0; else if (0 === B && (L = !0), R && R.matches && R.matches.length > S.matches[0].matches.length) break;
                                                    E = g.slice(), f = _, g = [];
                                                    for (var V = 0; V < E.length; V++) {
                                                        var H = E[V], q = !1;
                                                        H.match.jit = H.match.jit || L, H.alternation = H.alternation || M, w(H);
                                                        for (var z = 0; z < x.length; z++) {
                                                            var G = x[z];
                                                            if ("string" != typeof A || void 0 !== H.alternation && $.includes(H.locator[H.alternation].toString())) {
                                                                if (H.match.nativeDef === G.match.nativeDef) {
                                                                    q = !0, w(G, H);
                                                                    break
                                                                }
                                                                if (u(H, G, d)) {
                                                                    w(H, G) && (q = !0, x.splice(x.indexOf(G), 0, H));
                                                                    break
                                                                }
                                                                if (u(G, H, d)) {
                                                                    w(G, H);
                                                                    break
                                                                }
                                                                if (X = G, !0 === (Y = H).match.static && !0 !== X.match.static && X.match.fn.test(Y.match.def, l, e, !1, d, !1)) {
                                                                    k(H, G) || void 0 !== h.inputmask.userOptions.keepStatic ? w(H, G) && (q = !0, x.splice(x.indexOf(G), 0, H)) : d.keepStatic = !0;
                                                                    break
                                                                }
                                                            }
                                                        }
                                                        q || x.push(H)
                                                    }
                                                }
                                                g = P.concat(x), f = e, v = g.length > 0, a = x.length > 0, i = I.slice()
                                            } else a = o(S.matches[A] || t.matches[A], [A].concat(r), c);
                                            if (a) return !0
                                        } else if (a.isQuantifier && c !== t.matches[t.matches.indexOf(a) - 1]) for (var W = a, U = i.length > 0 ? i.shift() : 0; U < (isNaN(W.quantifier.max) ? U + 1 : W.quantifier.max) && f <= e; U++) {
                                            var K = t.matches[t.matches.indexOf(W) - 1];
                                            if (a = o(K, [U].concat(r), K)) {
                                                if ((s = g[g.length - 1].match).optionalQuantifier = U >= W.quantifier.min, s.jit = (U + 1) * (K.matches.indexOf(s) + 1) > W.quantifier.jit, s.optionalQuantifier && p(s, K)) {
                                                    v = !0, f = e;
                                                    break
                                                }
                                                return s.jit && (l.jitOffset[e] = K.matches.length - K.matches.indexOf(s)), !0
                                            }
                                        } else if (a = y(a, i, r, c)) return !0
                                    } else f++;
                                    var Y, X
                                }

                                for (var c = i.length > 0 ? i.shift() : 0; c < t.matches.length; c++) if (!0 !== t.matches[c].isQuantifier) {
                                    var p = o(t.matches[c], [c].concat(a), r);
                                    if (p && f === e) return p;
                                    if (f > e) break
                                }
                            }

                            if (e > -1) {
                                if (void 0 === t) {
                                    for (var w, k = e - 1; void 0 === (w = l.validPositions[k] || l.tests[k]) && k > -1;) k--;
                                    void 0 !== w && k > -1 && (m = function (e, t) {
                                        var i, s = [];
                                        return Array.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation || !0 === d.keepStatic ? 0 === (s = c.call(r, e, t.slice()).locator.slice()).length && (s = t[0].locator.slice()) : t.forEach((function (e) {
                                            "" !== e.def && (0 === s.length ? (i = e.alternation, s = e.locator.slice()) : e.locator[i] && -1 === s[i].toString().indexOf(e.locator[i]) && (s[i] += "," + e.locator[i]))
                                        }))), s
                                    }(k, w), b = m.join(""), f = k)
                                }
                                if (l.tests[e] && l.tests[e][0].cd === b) return l.tests[e];
                                for (var T = m.shift(); T < p.length && !(y(p[T], m, [T]) && f === e || f > e); T++) ;
                            }
                            return (0 === g.length || v) && g.push({
                                match: {
                                    fn: null,
                                    static: !0,
                                    optionality: !1,
                                    casing: null,
                                    def: "",
                                    placeholder: ""
                                }, locator: [], mloc: {}, cd: b
                            }), void 0 !== t && l.tests[e] ? a = o.extend(!0, [], g) : (l.tests[e] = o.extend(!0, [], g), a = l.tests[e]), g.forEach((function (e) {
                                e.match.optionality = !1
                            })), a
                        }
                    }, 7215: function (e, t, i) {
                        Object.defineProperty(t, "__esModule", {value: !0}), t.alternate = l, t.checkAlternationMatch = function (e, t, i) {
                            for (var s, n = this.opts.greedy ? t : t.slice(0, 1), a = !1, r = void 0 !== i ? i.split(",") : [], o = 0; o < r.length; o++) -1 !== (s = e.indexOf(r[o])) && e.splice(s, 1);
                            for (var l = 0; l < e.length; l++) if (n.includes(e[l])) {
                                a = !0;
                                break
                            }
                            return a
                        }, t.handleRemove = function (e, t, i, s, o) {
                            var c = this, d = this.maskset, u = this.opts;
                            if ((u.numericInput || c.isRTL) && (t === a.default.BACKSPACE ? t = a.default.DELETE : t === a.default.DELETE && (t = a.default.BACKSPACE), c.isRTL)) {
                                var h = i.end;
                                i.end = i.begin, i.begin = h
                            }
                            var p, f = r.getLastValidPosition.call(c, void 0, !0);
                            if (i.end >= r.getBuffer.call(c).length && f >= i.end && (i.end = f + 1), t === a.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.default.DELETE && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1), !1 !== (p = g.call(c, i))) {
                                if (!0 !== s && !1 !== u.keepStatic || null !== u.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                                    var m = l.call(c, !0);
                                    if (m) {
                                        var v = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                        (t !== a.default.DELETE || i.begin > v) && i.begin
                                    }
                                }
                                !0 !== s && (d.p = t === a.default.DELETE ? i.begin + p : i.begin, d.p = r.determineNewCaretPosition.call(c, {
                                    begin: d.p,
                                    end: d.p
                                }, !1, !1 === u.insertMode && t === a.default.BACKSPACE ? "none" : void 0).begin)
                            }
                        }, t.isComplete = d, t.isSelection = u, t.isValid = h, t.refreshFromBuffer = f, t.revalidateMask = g;
                        var s, n = i(4713), a = (s = i(5581)) && s.__esModule ? s : {default: s}, r = i(8711),
                            o = i(6030);

                        function l(e, t, i, s, a, o) {
                            var c, d, u, p, f, m, g, v, b, y, w, k = this, T = this.dependencyLib, C = this.opts,
                                E = k.maskset, S = T.extend(!0, {}, E.validPositions), x = T.extend(!0, {}, E.tests),
                                P = !1, M = !1, L = void 0 !== a ? a : r.getLastValidPosition.call(k);
                            if (o && (y = o.begin, w = o.end, o.begin > o.end && (y = o.end, w = o.begin)), -1 === L && void 0 === a) c = 0, d = (p = n.getTest.call(k, c)).alternation; else for (; L >= 0; L--) if ((u = E.validPositions[L]) && void 0 !== u.alternation) {
                                if (p && p.locator[u.alternation] !== u.locator[u.alternation]) break;
                                c = L, d = E.validPositions[c].alternation, p = u
                            }
                            if (void 0 !== d) {
                                g = parseInt(c), E.excludes[g] = E.excludes[g] || [], !0 !== e && E.excludes[g].push((0, n.getDecisionTaker)(p) + ":" + p.alternation);
                                var A = [], O = -1;
                                for (f = g; f < r.getLastValidPosition.call(k, void 0, !0) + 1; f++) -1 === O && e <= f && void 0 !== t && (A.push(t), O = A.length - 1), (m = E.validPositions[f]) && !0 !== m.generatedInput && (void 0 === o || f < y || f >= w) && A.push(m.input), delete E.validPositions[f];
                                for (-1 === O && void 0 !== t && (A.push(t), O = A.length - 1); void 0 !== E.excludes[g] && E.excludes[g].length < 10;) {
                                    for (E.tests = {}, r.resetMaskSet.call(k, !0), P = !0, f = 0; f < A.length && (v = P.caret || r.getLastValidPosition.call(k, void 0, !0) + 1, b = A[f], P = h.call(k, v, b, !1, s, !0)); f++) f === O && (M = P), 1 == e && P && (M = {caretPos: f});
                                    if (P) break;
                                    if (r.resetMaskSet.call(k), p = n.getTest.call(k, g), E.validPositions = T.extend(!0, {}, S), E.tests = T.extend(!0, {}, x), !E.excludes[g]) {
                                        M = l.call(k, e, t, i, s, g - 1, o);
                                        break
                                    }
                                    var _ = (0, n.getDecisionTaker)(p);
                                    if (-1 !== E.excludes[g].indexOf(_ + ":" + p.alternation)) {
                                        M = l.call(k, e, t, i, s, g - 1, o);
                                        break
                                    }
                                    for (E.excludes[g].push(_ + ":" + p.alternation), f = g; f < r.getLastValidPosition.call(k, void 0, !0) + 1; f++) delete E.validPositions[f]
                                }
                            }
                            return M && !1 === C.keepStatic || delete E.excludes[g], M
                        }

                        function c(e, t, i) {
                            var s = this.opts, n = this.maskset;
                            switch (s.casing || t.casing) {
                                case"upper":
                                    e = e.toUpperCase();
                                    break;
                                case"lower":
                                    e = e.toLowerCase();
                                    break;
                                case"title":
                                    var r = n.validPositions[i - 1];
                                    e = 0 === i || r && r.input === String.fromCharCode(a.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                    break;
                                default:
                                    if ("function" == typeof s.casing) {
                                        var o = Array.prototype.slice.call(arguments);
                                        o.push(n.validPositions), e = s.casing.apply(this, o)
                                    }
                            }
                            return e
                        }

                        function d(e) {
                            var t = this, i = this.opts, s = this.maskset;
                            if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                            if ("*" !== i.repeat) {
                                var a = !1, o = r.determineLastRequiredPosition.call(t, !0),
                                    l = r.seekPrevious.call(t, o.l);
                                if (void 0 === o.def || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) {
                                    a = !0;
                                    for (var c = 0; c <= l; c++) {
                                        var d = n.getTestTemplate.call(t, c).match;
                                        if (!0 !== d.static && void 0 === s.validPositions[c] && !0 !== d.optionality && !0 !== d.optionalQuantifier || !0 === d.static && e[c] !== n.getPlaceholder.call(t, c, d)) {
                                            a = !1;
                                            break
                                        }
                                    }
                                }
                                return a
                            }
                        }

                        function u(e) {
                            var t = this.opts.insertMode ? 0 : 1;
                            return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t
                        }

                        function h(e, t, i, s, a, o, p) {
                            var v = this, b = this.dependencyLib, y = this.opts, w = v.maskset;
                            i = !0 === i;
                            var k = e;

                            function T(e) {
                                if (void 0 !== e) {
                                    if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]), e.remove.sort((function (e, t) {
                                        return t.pos - e.pos
                                    })).forEach((function (e) {
                                        g.call(v, {begin: e, end: e + 1})
                                    })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]), e.insert.sort((function (e, t) {
                                        return e.pos - t.pos
                                    })).forEach((function (e) {
                                        "" !== e.c && h.call(v, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : s)
                                    })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                        var t = e.refreshFromBuffer;
                                        f.call(v, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0
                                    }
                                    void 0 !== e.rewritePosition && (k = e.rewritePosition, e = !0)
                                }
                                return e
                            }

                            function C(t, i, a) {
                                var o = !1;
                                return n.getTests.call(v, t).every((function (l, d) {
                                    var h = l.match;
                                    if (r.getBuffer.call(v, !0), !1 !== (o = (!h.jit || void 0 !== w.validPositions[r.seekPrevious.call(v, t)]) && (null != h.fn ? h.fn.test(i, w, t, a, y, u.call(v, e)) : (i === h.def || i === y.skipOptionalPartCharacter) && "" !== h.def && {
                                        c: n.getPlaceholder.call(v, t, h, !0) || h.def,
                                        pos: t
                                    }))) {
                                        var p = void 0 !== o.c ? o.c : i, f = t;
                                        return p = p === y.skipOptionalPartCharacter && !0 === h.static ? n.getPlaceholder.call(v, t, h, !0) || h.def : p, !0 !== (o = T(o)) && void 0 !== o.pos && o.pos !== t && (f = o.pos), !0 !== o && void 0 === o.pos && void 0 === o.c || !1 === g.call(v, e, b.extend({}, l, {input: c.call(v, p, h, f)}), s, f) && (o = !1), !1
                                    }
                                    return !0
                                })), o
                            }

                            void 0 !== e.begin && (k = v.isRTL ? e.end : e.begin);
                            var E = !0, S = b.extend(!0, {}, w.validPositions);
                            if (!1 === y.keepStatic && void 0 !== w.excludes[k] && !0 !== a && !0 !== s) for (var x = k; x < (v.isRTL ? e.begin : e.end); x++) void 0 !== w.excludes[x] && (w.excludes[x] = void 0, delete w.tests[x]);
                            if ("function" == typeof y.preValidation && !0 !== s && !0 !== o && (E = T(E = y.preValidation.call(v, r.getBuffer.call(v), k, t, u.call(v, e), y, w, e, i || a))), !0 === E) {
                                if (E = C(k, t, i), (!i || !0 === s) && !1 === E && !0 !== o) {
                                    var P = w.validPositions[k];
                                    if (!P || !0 !== P.match.static || P.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                        if (y.insertMode || void 0 === w.validPositions[r.seekNext.call(v, k)] || e.end > k) {
                                            var M = !1;
                                            if (w.jitOffset[k] && void 0 === w.validPositions[r.seekNext.call(v, k)] && !1 !== (E = h.call(v, k + w.jitOffset[k], t, !0, !0)) && (!0 !== a && (E.caret = k), M = !0), e.end > k && (w.validPositions[k] = void 0), !M && !r.isMask.call(v, k, y.keepStatic && 0 === k)) for (var L = k + 1, A = r.seekNext.call(v, k, !1, 0 !== k); L <= A; L++) if (!1 !== (E = C(L, t, i))) {
                                                E = m.call(v, k, void 0 !== E.pos ? E.pos : L) || E, k = L;
                                                break
                                            }
                                        }
                                    } else E = {caret: r.seekNext.call(v, k)}
                                }
                                !1 !== E || !y.keepStatic || !d.call(v, r.getBuffer.call(v)) && 0 !== k || i || !0 === a ? u.call(v, e) && w.tests[k] && w.tests[k].length > 1 && y.keepStatic && !i && !0 !== a && (E = l.call(v, !0)) : E = l.call(v, k, t, i, s, void 0, e), !0 === E && (E = {pos: k})
                            }
                            if ("function" == typeof y.postValidation && !0 !== s && !0 !== o) {
                                var O = y.postValidation.call(v, r.getBuffer.call(v, !0), void 0 !== e.begin ? v.isRTL ? e.end : e.begin : e, t, E, y, w, i, p);
                                void 0 !== O && (E = !0 === O ? E : O)
                            }
                            E && void 0 === E.pos && (E.pos = k), !1 === E || !0 === o ? (r.resetMaskSet.call(v, !0), w.validPositions = b.extend(!0, {}, S)) : m.call(v, void 0, k, !0);
                            var _ = T(E);
                            return void 0 !== v.maxLength && r.getBuffer.call(v).length > v.maxLength && !s && (r.resetMaskSet.call(v, !0), w.validPositions = b.extend(!0, {}, S), _ = !1), _
                        }

                        function p(e, t, i) {
                            for (var s = this.maskset, a = !1, r = n.getTests.call(this, e), o = 0; o < r.length; o++) {
                                if (r[o].match && (r[o].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || r[o].match.nativeDef === t.match.nativeDef || i.regex && !r[o].match.static && r[o].match.fn.test(t.input))) {
                                    a = !0;
                                    break
                                }
                                if (r[o].match && r[o].match.def === t.match.nativeDef) {
                                    a = void 0;
                                    break
                                }
                            }
                            return !1 === a && void 0 !== s.jitOffset[e] && (a = p.call(this, e + s.jitOffset[e], t, i)), a
                        }

                        function f(e, t, i) {
                            var s, n, a = this, l = this.maskset, c = this.opts, d = this.dependencyLib,
                                u = c.skipOptionalPartCharacter, h = a.isRTL ? i.slice().reverse() : i;
                            if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(a), l.tests = {}, e = 0, t = i.length, n = r.determineNewCaretPosition.call(a, {
                                begin: 0,
                                end: 0
                            }, !1).begin; else {
                                for (s = e; s < t; s++) delete l.validPositions[s];
                                n = e
                            }
                            var p = new d.Event("keypress");
                            for (s = e; s < t; s++) {
                                p.keyCode = h[s].toString().charCodeAt(0), a.ignorable = !1;
                                var f = o.EventHandlers.keypressEvent.call(a, p, !0, !1, !1, n);
                                !1 !== f && void 0 !== f && (n = f.forwardPosition)
                            }
                            c.skipOptionalPartCharacter = u
                        }

                        function m(e, t, i) {
                            var s = this, a = this.maskset, o = this.dependencyLib;
                            if (void 0 === e) for (e = t - 1; e > 0 && !a.validPositions[e]; e--) ;
                            for (var l = e; l < t; l++) if (void 0 === a.validPositions[l] && !r.isMask.call(s, l, !1) && (0 == l ? n.getTest.call(s, l) : a.validPositions[l - 1])) {
                                var c = n.getTests.call(s, l).slice();
                                "" === c[c.length - 1].match.def && c.pop();
                                var d, u = n.determineTestTemplate.call(s, l, c);
                                if (u && (!0 !== u.match.jit || "master" === u.match.newBlockMarker && (d = a.validPositions[l + 1]) && !0 === d.match.optionalQuantifier) && ((u = o.extend({}, u, {input: n.getPlaceholder.call(s, l, u.match, !0) || u.match.def})).generatedInput = !0, g.call(s, l, u, !0), !0 !== i)) {
                                    var p = a.validPositions[t].input;
                                    return a.validPositions[t] = void 0, h.call(s, t, p, !0, !0)
                                }
                            }
                        }

                        function g(e, t, i, s) {
                            var a = this, o = this.maskset, l = this.opts, c = this.dependencyLib;

                            function d(e, t, i) {
                                var s = t[e];
                                if (void 0 !== s && !0 === s.match.static && !0 !== s.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                    var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1],
                                        a = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                    return n && a
                                }
                                return !1
                            }

                            var u = 0, f = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                            if (e.begin > e.end && (f = e.end, m = e.begin), s = void 0 !== s ? s : f, f !== m || l.insertMode && void 0 !== o.validPositions[s] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                                var v, b = c.extend(!0, {}, o.validPositions),
                                    y = r.getLastValidPosition.call(a, void 0, !0);
                                for (o.p = f, v = y; v >= f; v--) delete o.validPositions[v], void 0 === t && delete o.tests[v + 1];
                                var w, k, T = s, C = T;
                                for (t && (o.validPositions[s] = c.extend(!0, {}, t), C++, T++), v = t ? m : m - 1; v <= y; v++) {
                                    if (void 0 !== (w = b[v]) && !0 !== w.generatedInput && (v >= m || v >= f && d(v, b, {
                                        begin: f,
                                        end: m
                                    }))) {
                                        for (; "" !== n.getTest.call(a, C).match.def;) {
                                            if (!1 !== (k = p.call(a, C, w, l)) || "+" === w.match.def) {
                                                "+" === w.match.def && r.getBuffer.call(a, !0);
                                                var E = h.call(a, C, w.input, "+" !== w.match.def, !0);
                                                if (g = !1 !== E, T = (E.pos || C) + 1, !g && k) break
                                            } else g = !1;
                                            if (g) {
                                                void 0 === t && w.match.static && v === e.begin && u++;
                                                break
                                            }
                                            if (!g && r.getBuffer.call(a), C > o.maskLength) break;
                                            C++
                                        }
                                        "" == n.getTest.call(a, C).match.def && (g = !1), C = T
                                    }
                                    if (!g) break
                                }
                                if (!g) return o.validPositions = c.extend(!0, {}, b), r.resetMaskSet.call(a, !0), !1
                            } else t && n.getTest.call(a, s).match.cd === t.match.cd && (o.validPositions[s] = c.extend(!0, {}, t));
                            return r.resetMaskSet.call(a, !0), u
                        }
                    }, 5581: function (e) {
                        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}')
                    }
                }, t = {};

                function i(s) {
                    var n = t[s];
                    if (void 0 !== n) return n.exports;
                    var a = t[s] = {exports: {}};
                    return e[s](a, a.exports, i), a.exports
                }

                var s = {};
                return function () {
                    var e, t = s;
                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(3851), i(219), i(207), i(5296);
                    var n = ((e = i(2394)) && e.__esModule ? e : {default: e}).default;
                    t.default = n
                }(), s
            }()
        }, 552: function (e, t, i) {
            "object" == typeof navigator && (e.exports = function () {
                "use strict";

                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function t(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                function s(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function n(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function a(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? n(Object(i), !0).forEach((function (t) {
                            s(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }

                var r = {addCSS: !0, thumbWidth: 15, watch: !0};

                function o(e, t) {
                    return function () {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }.call(e, t)
                }

                var l = function (e) {
                    return null != e ? e.constructor : null
                }, c = function (e, t) {
                    return !!(e && t && e instanceof t)
                }, d = function (e) {
                    return null == e
                }, u = function (e) {
                    return l(e) === Object
                }, h = function (e) {
                    return l(e) === String
                }, p = function (e) {
                    return Array.isArray(e)
                }, f = function (e) {
                    return c(e, NodeList)
                }, m = h, g = p, v = f, b = function (e) {
                    return c(e, Element)
                }, y = function (e) {
                    return c(e, Event)
                }, w = function (e) {
                    return d(e) || (h(e) || p(e) || f(e)) && !e.length || u(e) && !Object.keys(e).length
                };

                function k(e, t) {
                    if (1 > t) {
                        var i = function (e) {
                            var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                        }(t);
                        return parseFloat(e.toFixed(i))
                    }
                    return Math.round(e / t) * t
                }

                var T = function () {
                    function e(t, i) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), b(t) ? this.element = t : m(t) && (this.element = document.querySelector(t)), b(this.element) && w(this.element.rangeTouch) && (this.config = a({}, r, {}, i), this.init())
                    }

                    return function (e, i, s) {
                        i && t(e.prototype, i), s && t(e, s)
                    }(e, [{
                        key: "init", value: function () {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy", value: function () {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners", value: function (e) {
                            var t = this, i = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function (e) {
                                t.element[i](e, (function (e) {
                                    return t.set(e)
                                }), !1)
                            }))
                        }
                    }, {
                        key: "get", value: function (t) {
                            if (!e.enabled || !y(t)) return null;
                            var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0,
                                r = parseFloat(s.getAttribute("max")) || 100,
                                o = parseFloat(s.getAttribute("step")) || 1, l = s.getBoundingClientRect(),
                                c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (i = 100 / l.width * (n.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + k(i / 100 * (r - a), o)
                        }
                    }, {
                        key: "set", value: function (t) {
                            e.enabled && y(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
                                if (e && t) {
                                    var i = new Event(t, {bubbles: !0});
                                    e.dispatchEvent(i)
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup", value: function (t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                            if (w(t) || m(t) ? s = Array.from(document.querySelectorAll(m(t) ? t : 'input[type="range"]')) : b(t) ? s = [t] : v(t) ? s = Array.from(t) : g(t) && (s = t.filter(b)), w(s)) return null;
                            var n = a({}, r, {}, i);
                            if (m(t) && n.watch) {
                                var l = new MutationObserver((function (i) {
                                    Array.from(i).forEach((function (i) {
                                        Array.from(i.addedNodes).forEach((function (i) {
                                            b(i) && o(i, t) && new e(i, n)
                                        }))
                                    }))
                                }));
                                l.observe(document.body, {childList: !0, subtree: !0})
                            }
                            return s.map((function (t) {
                                return new e(t, i)
                            }))
                        }
                    }, {
                        key: "enabled", get: function () {
                            return "ontouchstart" in document.documentElement
                        }
                    }]), e
                }();
                const C = e => null != e ? e.constructor : null, E = (e, t) => Boolean(e && t && e instanceof t),
                    S = e => null == e, x = e => C(e) === Object, P = e => C(e) === String, M = e => C(e) === Function,
                    L = e => Array.isArray(e), A = e => E(e, NodeList),
                    O = e => S(e) || (P(e) || L(e) || A(e)) && !e.length || x(e) && !Object.keys(e).length;
                var _ = S, I = x, $ = e => C(e) === Number && !Number.isNaN(e), F = P, D = e => C(e) === Boolean, N = M,
                    j = L, B = A,
                    R = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
                    V = e => E(e, Event), H = e => E(e, KeyboardEvent), q = e => E(e, TextTrack) || !S(e) && P(e.kind),
                    z = e => E(e, Promise) && M(e.then), G = e => {
                        if (E(e, window.URL)) return !0;
                        if (!P(e)) return !1;
                        let t = e;
                        e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
                        try {
                            return !O(new URL(t).hostname)
                        } catch (e) {
                            return !1
                        }
                    }, W = O;
                const U = (() => {
                    const e = document.createElement("span"), t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, i = Object.keys(t).find((t => void 0 !== e.style[t]));
                    return !!F(i) && t[i]
                })();

                function K(e, t) {
                    setTimeout((() => {
                        try {
                            e.hidden = !0, e.offsetHeight, e.hidden = !1
                        } catch (e) {
                        }
                    }), t)
                }

                const Y = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: window.navigator.userAgent.includes("Edge"),
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                };

                function X(e, t) {
                    return t.split(".").reduce(((e, t) => e && e[t]), e)
                }

                function Q(e = {}, ...t) {
                    if (!t.length) return e;
                    const i = t.shift();
                    return I(i) ? (Object.keys(i).forEach((t => {
                        I(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {[t]: {}}), Q(e[t], i[t])) : Object.assign(e, {[t]: i[t]})
                    })), Q(e, ...t)) : e
                }

                function Z(e, t) {
                    const i = e.length ? e : [e];
                    Array.from(i).reverse().forEach(((e, i) => {
                        const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
                        s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s)
                    }))
                }

                function J(e, t) {
                    R(e) && !W(t) && Object.entries(t).filter((([, e]) => !_(e))).forEach((([t, i]) => e.setAttribute(t, i)))
                }

                function ee(e, t, i) {
                    const s = document.createElement(e);
                    return I(t) && J(s, t), F(i) && (s.innerText = i), s
                }

                function te(e, t, i, s) {
                    R(t) && t.appendChild(ee(e, i, s))
                }

                function ie(e) {
                    B(e) || j(e) ? Array.from(e).forEach(ie) : R(e) && R(e.parentNode) && e.parentNode.removeChild(e)
                }

                function se(e) {
                    if (!R(e)) return;
                    let {length: t} = e.childNodes;
                    for (; t > 0;) e.removeChild(e.lastChild), t -= 1
                }

                function ne(e, t) {
                    return R(t) && R(t.parentNode) && R(e) ? (t.parentNode.replaceChild(e, t), e) : null
                }

                function ae(e, t) {
                    if (!F(e) || W(e)) return {};
                    const i = {}, s = Q({}, t);
                    return e.split(",").forEach((e => {
                        const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [r] = a,
                            o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                            case".":
                                F(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                                break;
                            case"#":
                                i.id = t.replace("#", "");
                                break;
                            case"[":
                                i[r] = o
                        }
                    })), Q(s, i)
                }

                function re(e, t) {
                    if (!R(e)) return;
                    let i = t;
                    D(i) || (i = !e.hidden), e.hidden = i
                }

                function oe(e, t, i) {
                    if (B(e)) return Array.from(e).map((e => oe(e, t, i)));
                    if (R(e)) {
                        let s = "toggle";
                        return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t)
                    }
                    return !1
                }

                function le(e, t) {
                    return R(e) && e.classList.contains(t)
                }

                function ce(e, t) {
                    const {prototype: i} = Element;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }).call(e, t)
                }

                function de(e) {
                    return this.elements.container.querySelectorAll(e)
                }

                function ue(e) {
                    return this.elements.container.querySelector(e)
                }

                function he(e = null, t = !1) {
                    R(e) && (e.focus({preventScroll: !0}), t && oe(e, this.config.classNames.tabFocus))
                }

                const pe = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                }, fe = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check(e, t, i) {
                        const s = Y.isIPhone && i && fe.playsinline, n = fe[e] || "html5" !== t;
                        return {api: n, ui: n && fe.rangeInput && ("video" !== e || !Y.isIPhone || s)}
                    },
                    pip: !(Y.isIPhone || !N(ee("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || ee("video").disablePictureInPicture)),
                    airplay: N(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime(e) {
                        if (W(e)) return !1;
                        const [t] = e.split("/");
                        let i = e;
                        if (!this.isHTML5 || t !== this.type) return !1;
                        Object.keys(pe).includes(i) && (i += `; codecs="${pe[e]}"`);
                        try {
                            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                        } catch (e) {
                            return !1
                        }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: (() => {
                        const e = document.createElement("input");
                        return e.type = "range", "range" === e.type
                    })(),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== U,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                }, me = (() => {
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {get: () => (e = !0, null)});
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                    } catch (e) {
                    }
                    return e
                })();

                function ge(e, t, i, s = !1, n = !0, a = !1) {
                    if (!e || !("addEventListener" in e) || W(t) || !N(i)) return;
                    const r = t.split(" ");
                    let o = a;
                    me && (o = {passive: n, capture: a}), r.forEach((t => {
                        this && this.eventListeners && s && this.eventListeners.push({
                            element: e,
                            type: t,
                            callback: i,
                            options: o
                        }), e[s ? "addEventListener" : "removeEventListener"](t, i, o)
                    }))
                }

                function ve(e, t = "", i, s = !0, n = !1) {
                    ge.call(this, e, t, i, !0, s, n)
                }

                function be(e, t = "", i, s = !0, n = !1) {
                    ge.call(this, e, t, i, !1, s, n)
                }

                function ye(e, t = "", i, s = !0, n = !1) {
                    const a = (...r) => {
                        be(e, t, a, s, n), i.apply(this, r)
                    };
                    ge.call(this, e, t, a, !0, s, n)
                }

                function we(e, t = "", i = !1, s = {}) {
                    if (!R(e) || W(t)) return;
                    const n = new CustomEvent(t, {bubbles: i, detail: {...s, plyr: this}});
                    e.dispatchEvent(n)
                }

                function ke() {
                    this && this.eventListeners && (this.eventListeners.forEach((e => {
                        const {element: t, type: i, callback: s, options: n} = e;
                        t.removeEventListener(i, s, n)
                    })), this.eventListeners = [])
                }

                function Te() {
                    return new Promise((e => this.ready ? setTimeout(e, 0) : ve.call(this, this.elements.container, "ready", e))).then((() => {
                    }))
                }

                function Ce(e) {
                    z(e) && e.then(null, (() => {
                    }))
                }

                function Ee(e) {
                    return j(e) ? e.filter(((t, i) => e.indexOf(t) === i)) : e
                }

                function Se(e, t) {
                    return j(e) && e.length ? e.reduce(((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e)) : null
                }

                function xe(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e)
                }

                const Pe = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce(((e, [t, i]) => ({
                    ...e,
                    [t / i]: [t, i]
                })), {});

                function Me(e) {
                    return !!(j(e) || F(e) && e.includes(":")) && (j(e) ? e : e.split(":")).map(Number).every($)
                }

                function Le(e) {
                    if (!j(e) || !e.every($)) return null;
                    const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
                    return [t / n, i / n]
                }

                function Ae(e) {
                    const t = e => Me(e) ? e.split(":").map(Number) : null;
                    let i = t(e);
                    if (null === i && (i = t(this.config.ratio)), null === i && !W(this.embed) && j(this.embed.ratio) && ({ratio: i} = this.embed), null === i && this.isHTML5) {
                        const {videoWidth: e, videoHeight: t} = this.media;
                        i = [e, t]
                    }
                    return Le(i)
                }

                function Oe(e) {
                    if (!this.isVideo) return {};
                    const {wrapper: t} = this.elements, i = Ae.call(this, e);
                    if (!j(i)) return {};
                    const [s, n] = Le(i), a = 100 / s * n;
                    if (xe(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                            i = (e - a) / (e / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
                    } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {padding: a, ratio: i}
                }

                function _e(e, t, i = .05) {
                    const s = e / t, n = Se(Object.keys(Pe), s);
                    return Math.abs(n - s) <= i ? Pe[n] : [e, t]
                }

                const Ie = {
                    getSources() {
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((e => {
                            const t = e.getAttribute("type");
                            return !!W(t) || fe.mime.call(this, t)
                        })) : []
                    }, getQualityOptions() {
                        return this.config.quality.forced ? this.config.quality.options : Ie.getSources.call(this).map((e => Number(e.getAttribute("size")))).filter(Boolean)
                    }, setup() {
                        if (!this.isHTML5) return;
                        const e = this;
                        e.options.speed = e.config.speed.options, W(this.config.ratio) || Oe.call(e), Object.defineProperty(e.media, "quality", {
                            get() {
                                const t = Ie.getSources.call(e).find((t => t.getAttribute("src") === e.source));
                                return t && Number(t.getAttribute("size"))
                            }, set(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && N(e.config.quality.onChange)) e.config.quality.onChange(t); else {
                                        const i = Ie.getSources.call(e).find((e => Number(e.getAttribute("size")) === t));
                                        if (!i) return;
                                        const {currentTime: s, paused: n, preload: a, readyState: r, playbackRate: o} = e.media;
                                        e.media.src = i.getAttribute("src"), ("none" !== a || r) && (e.once("loadedmetadata", (() => {
                                            e.speed = o, e.currentTime = s, n || Ce(e.play())
                                        })), e.media.load())
                                    }
                                    we.call(e, e.media, "qualitychange", !1, {quality: t})
                                }
                            }
                        })
                    }, cancelRequests() {
                        this.isHTML5 && (ie(Ie.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                    }
                };

                function $e(e, ...t) {
                    return W(e) ? e : e.toString().replace(/{(\d+)}/g, ((e, i) => t[i].toString()))
                }

                const Fe = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
                    De = (e = "") => e.toString().replace(/\w\S*/g, (e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()));

                function Ne(e = "") {
                    let t = e.toString();
                    return t = function (e = "") {
                        let t = e.toString();
                        return t = Fe(t, "-", " "), t = Fe(t, "_", " "), t = De(t), Fe(t, " ", "")
                    }(t), t.charAt(0).toLowerCase() + t.slice(1)
                }

                function je(e) {
                    const t = document.createElement("div");
                    return t.appendChild(e), t.innerHTML
                }

                const Be = {pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube"}, Re = {
                    get(e = "", t = {}) {
                        if (W(e) || W(t)) return "";
                        let i = X(t.i18n, e);
                        if (W(i)) return Object.keys(Be).includes(e) ? Be[e] : "";
                        const s = {"{seektime}": t.seekTime, "{title}": t.title};
                        return Object.entries(s).forEach((([e, t]) => {
                            i = Fe(i, e, t)
                        })), i
                    }
                };

                class Ve {
                    constructor(t) {
                        e(this, "get", (e => {
                            if (!Ve.supported || !this.enabled) return null;
                            const t = window.localStorage.getItem(this.key);
                            if (W(t)) return null;
                            const i = JSON.parse(t);
                            return F(e) && e.length ? i[e] : i
                        })), e(this, "set", (e => {
                            if (!Ve.supported || !this.enabled) return;
                            if (!I(e)) return;
                            let t = this.get();
                            W(t) && (t = {}), Q(t, e);
                            try {
                                window.localStorage.setItem(this.key, JSON.stringify(t))
                            } catch (e) {
                            }
                        })), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
                    }

                    static get supported() {
                        try {
                            if (!("localStorage" in window)) return !1;
                            const e = "___test";
                            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                        } catch (e) {
                            return !1
                        }
                    }
                }

                function He(e, t = "text") {
                    return new Promise(((i, s) => {
                        try {
                            const s = new XMLHttpRequest;
                            if (!("withCredentials" in s)) return;
                            s.addEventListener("load", (() => {
                                if ("text" === t) try {
                                    i(JSON.parse(s.responseText))
                                } catch (e) {
                                    i(s.responseText)
                                } else i(s.response)
                            })), s.addEventListener("error", (() => {
                                throw new Error(s.status)
                            })), s.open("GET", e, !0), s.responseType = t, s.send()
                        } catch (e) {
                            s(e)
                        }
                    }))
                }

                function qe(e, t) {
                    if (!F(e)) return;
                    const i = F(t);
                    let s = !1;
                    const n = () => null !== document.getElementById(t), a = (e, t) => {
                        e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e)
                    };
                    if (!i || !n()) {
                        const n = Ve.supported, r = document.createElement("div");
                        if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), n) {
                            const e = window.localStorage.getItem(`cache-${t}`);
                            if (s = null !== e, s) {
                                const t = JSON.parse(e);
                                a(r, t.content)
                            }
                        }
                        He(e).then((e => {
                            if (!W(e)) {
                                if (n) try {
                                    window.localStorage.setItem(`cache-${t}`, JSON.stringify({content: e}))
                                } catch (e) {
                                }
                                a(r, e)
                            }
                        })).catch((() => {
                        }))
                    }
                }

                const ze = e => Math.trunc(e / 60 / 60 % 60, 10);

                function Ge(e = 0, t = !1, i = !1) {
                    if (!$(e)) return Ge(void 0, t, i);
                    const s = e => `0${e}`.slice(-2);
                    let n = ze(e);
                    const a = (o = e, Math.trunc(o / 60 % 60, 10)), r = (e => Math.trunc(e % 60, 10))(e);
                    var o;
                    return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(r)}`
                }

                const We = {
                    getIconUrl() {
                        const e = new URL(this.config.iconUrl, window.location),
                            t = window.location.host ? window.location.host : window.top.location.host,
                            i = e.host !== t || Y.isIE && !window.svg4everybody;
                        return {url: this.config.iconUrl, cors: i}
                    }, findElements() {
                        try {
                            return this.elements.controls = ue.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                play: de.call(this, this.config.selectors.buttons.play),
                                pause: ue.call(this, this.config.selectors.buttons.pause),
                                restart: ue.call(this, this.config.selectors.buttons.restart),
                                rewind: ue.call(this, this.config.selectors.buttons.rewind),
                                fastForward: ue.call(this, this.config.selectors.buttons.fastForward),
                                mute: ue.call(this, this.config.selectors.buttons.mute),
                                pip: ue.call(this, this.config.selectors.buttons.pip),
                                airplay: ue.call(this, this.config.selectors.buttons.airplay),
                                settings: ue.call(this, this.config.selectors.buttons.settings),
                                captions: ue.call(this, this.config.selectors.buttons.captions),
                                fullscreen: ue.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = ue.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: ue.call(this, this.config.selectors.inputs.seek),
                                volume: ue.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: ue.call(this, this.config.selectors.display.buffer),
                                currentTime: ue.call(this, this.config.selectors.display.currentTime),
                                duration: ue.call(this, this.config.selectors.display.duration)
                            }, R(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                        }
                    }, createIcon(e, t) {
                        const i = "http://www.w3.org/2000/svg", s = We.getIconUrl.call(this),
                            n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
                            a = document.createElementNS(i, "svg");
                        J(a, Q(t, {"aria-hidden": "true", focusable: "false"}));
                        const r = document.createElementNS(i, "use"), o = `${n}-${e}`;
                        return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(r), a
                    }, createLabel(e, t = {}) {
                        const i = Re.get(e, this.config);
                        return ee("span", {
                            ...t,
                            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                        }, i)
                    }, createBadge(e) {
                        if (W(e)) return null;
                        const t = ee("span", {class: this.config.classNames.menu.value});
                        return t.appendChild(ee("span", {class: this.config.classNames.menu.badge}, e)), t
                    }, createButton(e, t) {
                        const i = Q({}, t);
                        let s = Ne(e);
                        const n = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                        switch (["element", "icon", "label"].forEach((e => {
                            Object.keys(i).includes(e) && (n[e] = i[e], delete i[e])
                        })), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((e => e === this.config.classNames.control)) || Q(i, {class: `${i.class} ${this.config.classNames.control}`}) : i.class = this.config.classNames.control, e) {
                            case"play":
                                n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                                break;
                            case"mute":
                                n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                                break;
                            case"captions":
                                n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                                break;
                            case"fullscreen":
                                n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                                break;
                            case"play-large":
                                i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                                break;
                            default:
                                W(n.label) && (n.label = s), W(n.icon) && (n.icon = e)
                        }
                        const a = ee(n.element);
                        return n.toggle ? (a.appendChild(We.createIcon.call(this, n.iconPressed, {class: "icon--pressed"})), a.appendChild(We.createIcon.call(this, n.icon, {class: "icon--not-pressed"})), a.appendChild(We.createLabel.call(this, n.labelPressed, {class: "label--pressed"})), a.appendChild(We.createLabel.call(this, n.label, {class: "label--not-pressed"}))) : (a.appendChild(We.createIcon.call(this, n.icon)), a.appendChild(We.createLabel.call(this, n.label))), Q(i, ae(this.config.selectors.buttons[s], i)), J(a, i), "play" === s ? (j(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a
                    }, createRange(e, t) {
                        const i = ee("input", Q(ae(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": Re.get(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i, We.updateRangeFill.call(this, i), T.setup(i), i
                    }, createProgress(e, t) {
                        const i = ee("progress", Q(ae(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild(ee("span", null, "0"));
                            const t = {played: "played", buffer: "buffered"}[e], s = t ? Re.get(t, this.config) : "";
                            i.innerText = `% ${s.toLowerCase()}`
                        }
                        return this.elements.display[e] = i, i
                    }, createTime(e, t) {
                        const i = ae(this.config.selectors.display[e], t), s = ee("div", Q(i, {
                            class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                            "aria-label": Re.get(e, this.config)
                        }), "00:00");
                        return this.elements.display[e] = s, s
                    }, bindMenuItemShortcuts(e, t) {
                        ve.call(this, e, "keydown keyup", (i => {
                            if (!["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key)) return;
                            if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                            const s = ce(e, '[role="menuitemradio"]');
                            if (!s && ["Space", "ArrowRight"].includes(i.key)) We.showMenuPanel.call(this, t, !0); else {
                                let t;
                                "Space" !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (t = e.nextElementSibling, R(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, R(t) || (t = e.parentNode.lastElementChild)), he.call(this, t, !0))
                            }
                        }), !1), ve.call(this, e, "keyup", (e => {
                            "Return" === e.key && We.focusFirstMenuItem.call(this, null, !0)
                        }))
                    }, createMenuItem({value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1}) {
                        const r = ae(this.config.selectors.inputs[i]), o = ee("button", Q(r, {
                            type: "button",
                            role: "menuitemradio",
                            class: `${this.config.classNames.control} ${r.class ? r.class : ""}`.trim(),
                            "aria-checked": a,
                            value: e
                        })), l = ee("span");
                        l.innerHTML = s, R(n) && l.appendChild(n), o.appendChild(l), Object.defineProperty(o, "checked", {
                            enumerable: !0,
                            get: () => "true" === o.getAttribute("aria-checked"),
                            set(e) {
                                e && Array.from(o.parentNode.children).filter((e => ce(e, '[role="menuitemradio"]'))).forEach((e => e.setAttribute("aria-checked", "false"))), o.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }), this.listeners.bind(o, "click keyup", (t => {
                            if (!H(t) || "Space" === t.key) {
                                switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                                    case"language":
                                        this.currentTrack = Number(e);
                                        break;
                                    case"quality":
                                        this.quality = e;
                                        break;
                                    case"speed":
                                        this.speed = parseFloat(e)
                                }
                                We.showMenuPanel.call(this, "home", H(t))
                            }
                        }), i, !1), We.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o)
                    }, formatTime(e = 0, t = !1) {
                        return $(e) ? Ge(e, ze(this.duration) > 0, t) : e
                    }, updateTimeDisplay(e = null, t = 0, i = !1) {
                        R(e) && $(t) && (e.innerText = We.formatTime(t, i))
                    }, updateVolume() {
                        this.supported.ui && (R(this.elements.inputs.volume) && We.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), R(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    }, setRange(e, t = 0) {
                        R(e) && (e.value = t, We.updateRangeFill.call(this, e))
                    }, updateProgress(e) {
                        if (!this.supported.ui || !V(e)) return;
                        let t = 0;
                        const i = (e, t) => {
                            const i = $(t) ? t : 0, s = R(e) ? e : this.elements.display.buffer;
                            if (R(s)) {
                                s.value = i;
                                const e = s.getElementsByTagName("span")[0];
                                R(e) && (e.childNodes[0].nodeValue = i)
                            }
                        };
                        if (e) switch (e.type) {
                            case"timeupdate":
                            case"seeking":
                            case"seeked":
                                s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && We.setRange.call(this, this.elements.inputs.seek, t);
                                break;
                            case"playing":
                            case"progress":
                                i(this.elements.display.buffer, 100 * this.buffered)
                        }
                        var s, n
                    }, updateRangeFill(e) {
                        const t = V(e) ? e.target : e;
                        if (R(t) && "range" === t.getAttribute("type")) {
                            if (ce(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                const e = We.formatTime(this.currentTime), i = We.formatTime(this.duration),
                                    s = Re.get("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
                            } else if (ce(t, this.config.selectors.inputs.volume)) {
                                const e = 100 * t.value;
                                t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`)
                            } else t.setAttribute("aria-valuenow", t.value);
                            Y.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                        }
                    }, updateSeekTooltip(e) {
                        var t, i;
                        if (!this.config.tooltips.seek || !R(this.elements.inputs.seek) || !R(this.elements.display.seekTooltip) || 0 === this.duration) return;
                        const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`,
                            a = e => oe(s, n, e);
                        if (this.touch) return void a(!1);
                        let r = 0;
                        const o = this.elements.progress.getBoundingClientRect();
                        if (V(e)) r = 100 / o.width * (e.pageX - o.left); else {
                            if (!le(s, n)) return;
                            r = parseFloat(s.style.left, 10)
                        }
                        r < 0 ? r = 0 : r > 100 && (r = 100);
                        const l = this.duration / 100 * r;
                        s.innerText = We.formatTime(l);
                        const c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(l)));
                        c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`), s.style.left = `${r}%`, V(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type)
                    }, timeUpdate(e) {
                        const t = !R(this.elements.display.duration) && this.config.invertTime;
                        We.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || We.updateProgress.call(this, e)
                    }, durationUpdate() {
                        if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
                        if (this.duration >= 2 ** 32) return re(this.elements.display.currentTime, !0), void re(this.elements.progress, !0);
                        R(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        const e = R(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && We.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && We.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && We.setMarkers.call(this), We.updateSeekTooltip.call(this)
                    }, toggleMenuButton(e, t) {
                        re(this.elements.settings.buttons[e], !t)
                    }, updateSetting(e, t, i) {
                        const s = this.elements.settings.panels[e];
                        let n = null, a = t;
                        if ("captions" === e) n = this.currentTrack; else {
                            if (n = W(i) ? this[e] : i, W(n) && (n = this.config[e].default), !W(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                            if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`)
                        }
                        if (R(a) || (a = s && s.querySelector('[role="menu"]')), !R(a)) return;
                        this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = We.getLabel.call(this, e, n);
                        const r = a && a.querySelector(`[value="${n}"]`);
                        R(r) && (r.checked = !0)
                    }, getLabel(e, t) {
                        switch (e) {
                            case"speed":
                                return 1 === t ? Re.get("normal", this.config) : `${t}&times;`;
                            case"quality":
                                if ($(t)) {
                                    const e = Re.get(`qualityLabel.${t}`, this.config);
                                    return e.length ? e : `${t}p`
                                }
                                return De(t);
                            case"captions":
                                return Ye.getLabel.call(this);
                            default:
                                return null
                        }
                    }, setQualityMenu(e) {
                        if (!R(this.elements.settings.panels.quality)) return;
                        const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        j(e) && (this.options.quality = Ee(e).filter((e => this.config.quality.options.includes(e))));
                        const s = !W(this.options.quality) && this.options.quality.length > 1;
                        if (We.toggleMenuButton.call(this, t, s), se(i), We.checkMenu.call(this), !s) return;
                        const n = e => {
                            const t = Re.get(`qualityBadge.${e}`, this.config);
                            return t.length ? We.createBadge.call(this, t) : null
                        };
                        this.options.quality.sort(((e, t) => {
                            const i = this.config.quality.options;
                            return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                        })).forEach((e => {
                            We.createMenuItem.call(this, {
                                value: e,
                                list: i,
                                type: t,
                                title: We.getLabel.call(this, "quality", e),
                                badge: n(e)
                            })
                        })), We.updateSetting.call(this, t, i)
                    }, setCaptionsMenu() {
                        if (!R(this.elements.settings.panels.captions)) return;
                        const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            i = Ye.getTracks.call(this), s = Boolean(i.length);
                        if (We.toggleMenuButton.call(this, e, s), se(t), We.checkMenu.call(this), !s) return;
                        const n = i.map(((e, i) => ({
                            value: i,
                            checked: this.captions.toggled && this.currentTrack === i,
                            title: Ye.getLabel.call(this, e),
                            badge: e.language && We.createBadge.call(this, e.language.toUpperCase()),
                            list: t,
                            type: "language"
                        })));
                        n.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: Re.get("disabled", this.config),
                            list: t,
                            type: "language"
                        }), n.forEach(We.createMenuItem.bind(this)), We.updateSetting.call(this, e, t)
                    }, setSpeedMenu() {
                        if (!R(this.elements.settings.panels.speed)) return;
                        const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter((e => e >= this.minimumSpeed && e <= this.maximumSpeed));
                        const i = !W(this.options.speed) && this.options.speed.length > 1;
                        We.toggleMenuButton.call(this, e, i), se(t), We.checkMenu.call(this), i && (this.options.speed.forEach((i => {
                            We.createMenuItem.call(this, {
                                value: i,
                                list: t,
                                type: e,
                                title: We.getLabel.call(this, "speed", i)
                            })
                        })), We.updateSetting.call(this, e, t))
                    }, checkMenu() {
                        const {buttons: e} = this.elements.settings,
                            t = !W(e) && Object.values(e).some((e => !e.hidden));
                        re(this.elements.settings.menu, !t)
                    }, focusFirstMenuItem(e, t = !1) {
                        if (this.elements.settings.popup.hidden) return;
                        let i = e;
                        R(i) || (i = Object.values(this.elements.settings.panels).find((e => !e.hidden)));
                        const s = i.querySelector('[role^="menuitem"]');
                        he.call(this, s, t)
                    }, toggleMenu(e) {
                        const {popup: t} = this.elements.settings, i = this.elements.buttons.settings;
                        if (!R(t) || !R(i)) return;
                        const {hidden: s} = t;
                        let n = s;
                        if (D(e)) n = e; else if (H(e) && "Escape" === e.key) n = !1; else if (V(e)) {
                            const s = N(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                            if (a || !a && e.target !== i && n) return
                        }
                        i.setAttribute("aria-expanded", n), re(t, !n), oe(this.elements.container, this.config.classNames.menu.open, n), n && H(e) ? We.focusFirstMenuItem.call(this, null, !0) : n || s || he.call(this, i, H(e))
                    }, getMenuSize(e) {
                        const t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                        const i = t.scrollWidth, s = t.scrollHeight;
                        return ie(t), {width: i, height: s}
                    }, showMenuPanel(e = "", t = !1) {
                        const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                        if (!R(i)) return;
                        const s = i.parentNode, n = Array.from(s.children).find((e => !e.hidden));
                        if (fe.transitions && !fe.reducedMotion) {
                            s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                            const e = We.getMenuSize.call(this, i), t = e => {
                                e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", be.call(this, s, U, t))
                            };
                            ve.call(this, s, U, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`
                        }
                        re(n, !0), re(i, !1), We.focusFirstMenuItem.call(this, i, t)
                    }, setDownloadUrl() {
                        const e = this.elements.buttons.download;
                        R(e) && e.setAttribute("href", this.download)
                    }, create(e) {
                        const {bindMenuItemShortcuts: t, createButton: i, createProgress: s, createRange: n, createTime: a, setQualityMenu: r, setSpeedMenu: o, showMenuPanel: l} = We;
                        this.elements.controls = null, j(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                        const c = ee("div", ae(this.config.selectors.controls.wrapper));
                        this.elements.controls = c;
                        const d = {class: "plyr__controls__item"};
                        return Ee(j(this.config.controls) ? this.config.controls : []).forEach((r => {
                            if ("restart" === r && c.appendChild(i.call(this, "restart", d)), "rewind" === r && c.appendChild(i.call(this, "rewind", d)), "play" === r && c.appendChild(i.call(this, "play", d)), "fast-forward" === r && c.appendChild(i.call(this, "fast-forward", d)), "progress" === r) {
                                const t = ee("div", {class: `${d.class} plyr__progress__container`}),
                                    i = ee("div", ae(this.config.selectors.progress));
                                if (i.appendChild(n.call(this, "seek", {id: `plyr-seek-${e.id}`})), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                                    const e = ee("span", {class: this.config.classNames.tooltip}, "00:00");
                                    i.appendChild(e), this.elements.display.seekTooltip = e
                                }
                                this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t)
                            }
                            if ("current-time" === r && c.appendChild(a.call(this, "currentTime", d)), "duration" === r && c.appendChild(a.call(this, "duration", d)), "mute" === r || "volume" === r) {
                                let {volume: t} = this.elements;
                                if (R(t) && c.contains(t) || (t = ee("div", Q({}, d, {class: `${d.class} plyr__volume`.trim()})), this.elements.volume = t, c.appendChild(t)), "mute" === r && t.appendChild(i.call(this, "mute")), "volume" === r && !Y.isIos) {
                                    const i = {max: 1, step: .05, value: this.config.volume};
                                    t.appendChild(n.call(this, "volume", Q(i, {id: `plyr-volume-${e.id}`})))
                                }
                            }
                            if ("captions" === r && c.appendChild(i.call(this, "captions", d)), "settings" === r && !W(this.config.settings)) {
                                const s = ee("div", Q({}, d, {class: `${d.class} plyr__menu`.trim(), hidden: ""}));
                                s.appendChild(i.call(this, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": `plyr-settings-${e.id}`,
                                    "aria-expanded": !1
                                }));
                                const n = ee("div", {
                                        class: "plyr__menu__container",
                                        id: `plyr-settings-${e.id}`,
                                        hidden: ""
                                    }), a = ee("div"), r = ee("div", {id: `plyr-settings-${e.id}-home`}),
                                    o = ee("div", {role: "menu"});
                                r.appendChild(o), a.appendChild(r), this.elements.settings.panels.home = r, this.config.settings.forEach((i => {
                                    const s = ee("button", Q(ae(this.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    t.call(this, s, i), ve.call(this, s, "click", (() => {
                                        l.call(this, i, !1)
                                    }));
                                    const n = ee("span", null, Re.get(i, this.config)),
                                        r = ee("span", {class: this.config.classNames.menu.value});
                                    r.innerHTML = e[i], n.appendChild(r), s.appendChild(n), o.appendChild(s);
                                    const c = ee("div", {id: `plyr-settings-${e.id}-${i}`, hidden: ""}),
                                        d = ee("button", {
                                            type: "button",
                                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                        });
                                    d.appendChild(ee("span", {"aria-hidden": !0}, Re.get(i, this.config))), d.appendChild(ee("span", {class: this.config.classNames.hidden}, Re.get("menuBack", this.config))), ve.call(this, c, "keydown", (e => {
                                        "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), l.call(this, "home", !0))
                                    }), !1), ve.call(this, d, "click", (() => {
                                        l.call(this, "home", !1)
                                    })), c.appendChild(d), c.appendChild(ee("div", {role: "menu"})), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c
                                })), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, this.elements.settings.menu = s
                            }
                            if ("pip" === r && fe.pip && c.appendChild(i.call(this, "pip", d)), "airplay" === r && fe.airplay && c.appendChild(i.call(this, "airplay", d)), "download" === r) {
                                const e = Q({}, d, {element: "a", href: this.download, target: "_blank"});
                                this.isHTML5 && (e.download = "");
                                const {download: t} = this.config.urls;
                                !G(t) && this.isEmbed && Q(e, {
                                    icon: `logo-${this.provider}`,
                                    label: this.provider
                                }), c.appendChild(i.call(this, "download", e))
                            }
                            "fullscreen" === r && c.appendChild(i.call(this, "fullscreen", d))
                        })), this.isHTML5 && r.call(this, Ie.getQualityOptions.call(this)), o.call(this), c
                    }, inject() {
                        if (this.config.loadSprite) {
                            const e = We.getIconUrl.call(this);
                            e.cors && qe(e.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let e = null;
                        this.elements.controls = null;
                        const t = {id: this.id, seektime: this.config.seekTime, title: this.config.title};
                        let i = !0;
                        N(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), R(this.config.controls) || F(this.config.controls) ? e = this.config.controls : (e = We.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: Ye.getLabel.call(this)
                        }), i = !1);
                        let s;
                        if (i && F(this.config.controls) && (e = (e => {
                            let i = e;
                            return Object.entries(t).forEach((([e, t]) => {
                                i = Fe(i, `{${e}}`, t)
                            })), i
                        })(e)), F(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), R(s) || (s = this.elements.container), s[R(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), R(this.elements.controls) || We.findElements.call(this), !W(this.elements.buttons)) {
                            const e = e => {
                                const t = this.config.classNames.controlPressed;
                                Object.defineProperty(e, "pressed", {
                                    enumerable: !0, get: () => le(e, t), set(i = !1) {
                                        oe(e, t, i)
                                    }
                                })
                            };
                            Object.values(this.elements.buttons).filter(Boolean).forEach((t => {
                                j(t) || B(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t)
                            }))
                        }
                        if (Y.isEdge && K(s), this.config.tooltips.controls) {
                            const {classNames: e, selectors: t} = this.config,
                                i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = de.call(this, i);
                            Array.from(s).forEach((e => {
                                oe(e, this.config.classNames.hidden, !1), oe(e, this.config.classNames.tooltip, !0)
                            }))
                        }
                    }, setMediaMetadata() {
                        try {
                            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                                title: this.config.mediaMetadata.title,
                                artist: this.config.mediaMetadata.artist,
                                album: this.config.mediaMetadata.album,
                                artwork: this.config.mediaMetadata.artwork
                            }))
                        } catch (e) {
                        }
                    }, setMarkers() {
                        var e, t;
                        if (!this.duration || this.elements.markers) return;
                        const i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter((({time: e}) => e > 0 && e < this.duration));
                        if (null == i || !i.length) return;
                        const s = document.createDocumentFragment(), n = document.createDocumentFragment();
                        let a = null;
                        const r = `${this.config.classNames.tooltip}--visible`, o = e => oe(a, r, e);
                        i.forEach((e => {
                            const t = ee("span", {class: this.config.classNames.marker}, ""),
                                i = e.time / this.duration * 100 + "%";
                            a && (t.addEventListener("mouseenter", (() => {
                                e.label || (a.style.left = i, a.innerHTML = e.label, o(!0))
                            })), t.addEventListener("mouseleave", (() => {
                                o(!1)
                            }))), t.addEventListener("click", (() => {
                                this.currentTime = e.time
                            })), t.style.left = i, n.appendChild(t)
                        })), s.appendChild(n), this.config.tooltips.seek || (a = ee("span", {class: this.config.classNames.tooltip}, ""), s.appendChild(a)), this.elements.markers = {
                            points: n,
                            tip: a
                        }, this.elements.progress.appendChild(s)
                    }
                };

                function Ue(e, t = !0) {
                    let i = e;
                    if (t) {
                        const e = document.createElement("a");
                        e.href = i, i = e.href
                    }
                    try {
                        return new URL(i)
                    } catch (e) {
                        return null
                    }
                }

                function Ke(e) {
                    const t = new URLSearchParams;
                    return I(e) && Object.entries(e).forEach((([e, i]) => {
                        t.set(e, i)
                    })), t
                }

                const Ye = {
                        setup() {
                            if (!this.supported.ui) return;
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !fe.textTracks) return void (j(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this));
                            if (R(this.elements.captions) || (this.elements.captions = ee("div", ae(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, R(e) && R(t) && t.parentNode.insertBefore(e, t.nextSibling)), Y.isIE && window.URL) {
                                const e = this.media.querySelectorAll("track");
                                Array.from(e).forEach((e => {
                                    const t = e.getAttribute("src"), i = Ue(t);
                                    null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && He(t, "blob").then((t => {
                                        e.setAttribute("src", window.URL.createObjectURL(t))
                                    })).catch((() => {
                                        ie(e)
                                    }))
                                }))
                            }
                            var e, t;
                            const i = Ee((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e => e.split("-")[0])));
                            let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                            "auto" === s && ([s] = i);
                            let n = this.storage.get("captions");
                            if (D(n) || ({active: n} = this.config.captions), Object.assign(this.captions, {
                                toggled: !1,
                                active: n,
                                language: s,
                                languages: i
                            }), this.isHTML5) {
                                const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                ve.call(this, this.media.textTracks, e, Ye.update.bind(this))
                            }
                            setTimeout(Ye.update.bind(this), 0)
                        }, update() {
                            const e = Ye.getTracks.call(this, !0), {active: t, language: i, meta: s, currentTrackNode: n} = this.captions,
                                a = Boolean(e.find((e => e.language === i)));
                            this.isHTML5 && this.isVideo && e.filter((e => !s.get(e))).forEach((e => {
                                this.debug.log("Track added", e), s.set(e, {default: "showing" === e.mode}), "showing" === e.mode && (e.mode = "hidden"), ve.call(this, e, "cuechange", (() => Ye.updateCues.call(this)))
                            })), (a && this.language !== i || !e.includes(n)) && (Ye.setLanguage.call(this, i), Ye.toggle.call(this, t && a)), this.elements && oe(this.elements.container, this.config.classNames.captions.enabled, !W(e)), j(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this)
                        }, toggle(e, t = !0) {
                            if (!this.supported.ui) return;
                            const {toggled: i} = this.captions, s = this.config.classNames.captions.active,
                                n = _(e) ? !i : e;
                            if (n !== i) {
                                if (t || (this.captions.active = n, this.storage.set({captions: n})), !this.language && n && !t) {
                                    const e = Ye.getTracks.call(this),
                                        t = Ye.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                                    return this.captions.language = t.language, void Ye.set.call(this, e.indexOf(t))
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), oe(this.elements.container, s, n), this.captions.toggled = n, We.updateSetting.call(this, "captions"), we.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
                            }
                            setTimeout((() => {
                                n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                            }))
                        }, set(e, t = !0) {
                            const i = Ye.getTracks.call(this);
                            if (-1 !== e) if ($(e)) if (e in i) {
                                if (this.captions.currentTrack !== e) {
                                    this.captions.currentTrack = e;
                                    const s = i[e], {language: n} = s || {};
                                    this.captions.currentTrackNode = s, We.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({language: n})), this.isVimeo && this.embed.enableTextTrack(n), we.call(this, this.media, "languagechange")
                                }
                                Ye.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Ye.updateCues.call(this)
                            } else this.debug.warn("Track not found", e); else this.debug.warn("Invalid caption argument", e); else Ye.toggle.call(this, !1, t)
                        }, setLanguage(e, t = !0) {
                            if (!F(e)) return void this.debug.warn("Invalid language argument", e);
                            const i = e.toLowerCase();
                            this.captions.language = i;
                            const s = Ye.getTracks.call(this), n = Ye.findTrack.call(this, [i]);
                            Ye.set.call(this, s.indexOf(n), t)
                        }, getTracks(e = !1) {
                            return Array.from((this.media || {}).textTracks || []).filter((t => !this.isHTML5 || e || this.captions.meta.has(t))).filter((e => ["captions", "subtitles"].includes(e.kind)))
                        }, findTrack(e, t = !1) {
                            const i = Ye.getTracks.call(this), s = e => Number((this.captions.meta.get(e) || {}).default),
                                n = Array.from(i).sort(((e, t) => s(t) - s(e)));
                            let a;
                            return e.every((e => (a = n.find((t => t.language === e)), !a))), a || (t ? n[0] : void 0)
                        }, getCurrentTrack() {
                            return Ye.getTracks.call(this)[this.currentTrack]
                        }, getLabel(e) {
                            let t = e;
                            return !q(t) && fe.textTracks && this.captions.toggled && (t = Ye.getCurrentTrack.call(this)), q(t) ? W(t.label) ? W(t.language) ? Re.get("enabled", this.config) : e.language.toUpperCase() : t.label : Re.get("disabled", this.config)
                        }, updateCues(e) {
                            if (!this.supported.ui) return;
                            if (!R(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                            if (!_(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                            let t = e;
                            if (!t) {
                                const e = Ye.getCurrentTrack.call(this);
                                t = Array.from((e || {}).activeCues || []).map((e => e.getCueAsHTML())).map(je)
                            }
                            const i = t.map((e => e.trim())).join("\n");
                            if (i !== this.elements.captions.innerHTML) {
                                se(this.elements.captions);
                                const e = ee("span", ae(this.config.selectors.caption));
                                e.innerHTML = i, this.elements.captions.appendChild(e), we.call(this, this.media, "cuechange")
                            }
                        }
                    }, Xe = {
                        enabled: !0,
                        title: "",
                        debug: !1,
                        autoplay: !1,
                        autopause: !0,
                        playsinline: !0,
                        seekTime: 10,
                        volume: 1,
                        muted: !1,
                        duration: null,
                        displayDuration: !0,
                        invertTime: !0,
                        toggleInvert: !0,
                        ratio: null,
                        clickToPlay: !0,
                        hideControls: !0,
                        resetOnEnd: !1,
                        disableContextMenu: !0,
                        loadSprite: !0,
                        iconPrefix: "plyr",
                        iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
                        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                            forced: !1,
                            onChange: null
                        },
                        loop: {active: !1},
                        speed: {selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]},
                        keyboard: {focused: !0, global: !1},
                        tooltips: {controls: !1, seek: !0},
                        captions: {active: !1, language: "auto", update: !1},
                        fullscreen: {enabled: !0, fallback: !0, iosNative: !1},
                        storage: {enabled: !0, key: "plyr"},
                        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                        settings: ["captions", "quality", "speed"],
                        i18n: {
                            restart: "Restart",
                            rewind: "Rewind {seektime}s",
                            play: "Play",
                            pause: "Pause",
                            fastForward: "Forward {seektime}s",
                            seek: "Seek",
                            seekLabel: "{currentTime} of {duration}",
                            played: "Played",
                            buffered: "Buffered",
                            currentTime: "Current time",
                            duration: "Duration",
                            volume: "Volume",
                            mute: "Mute",
                            unmute: "Unmute",
                            enableCaptions: "Enable captions",
                            disableCaptions: "Disable captions",
                            download: "Download",
                            enterFullscreen: "Enter fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            frameTitle: "Player for {title}",
                            captions: "Captions",
                            settings: "Settings",
                            pip: "PIP",
                            menuBack: "Go back to previous menu",
                            speed: "Speed",
                            normal: "Normal",
                            quality: "Quality",
                            loop: "Loop",
                            start: "Start",
                            end: "End",
                            all: "All",
                            reset: "Reset",
                            disabled: "Disabled",
                            enabled: "Enabled",
                            advertisement: "Ad",
                            qualityBadge: {2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD"}
                        },
                        urls: {
                            download: null,
                            vimeo: {
                                sdk: "https://player.vimeo.com/api/player.js",
                                iframe: "https://player.vimeo.com/video/{0}?{1}",
                                api: "https://vimeo.com/api/oembed.json?url={0}"
                            },
                            youtube: {
                                sdk: "https://www.youtube.com/iframe_api",
                                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                            },
                            googleIMA: {sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"}
                        },
                        listeners: {
                            seek: null,
                            play: null,
                            pause: null,
                            restart: null,
                            rewind: null,
                            fastForward: null,
                            mute: null,
                            volume: null,
                            captions: null,
                            download: null,
                            fullscreen: null,
                            pip: null,
                            airplay: null,
                            speed: null,
                            quality: null,
                            loop: null,
                            language: null
                        },
                        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                        selectors: {
                            editable: "input, textarea, select, [contenteditable]",
                            container: ".plyr",
                            controls: {container: null, wrapper: ".plyr__controls"},
                            labels: "[data-plyr]",
                            buttons: {
                                play: '[data-plyr="play"]',
                                pause: '[data-plyr="pause"]',
                                restart: '[data-plyr="restart"]',
                                rewind: '[data-plyr="rewind"]',
                                fastForward: '[data-plyr="fast-forward"]',
                                mute: '[data-plyr="mute"]',
                                captions: '[data-plyr="captions"]',
                                download: '[data-plyr="download"]',
                                fullscreen: '[data-plyr="fullscreen"]',
                                pip: '[data-plyr="pip"]',
                                airplay: '[data-plyr="airplay"]',
                                settings: '[data-plyr="settings"]',
                                loop: '[data-plyr="loop"]'
                            },
                            inputs: {
                                seek: '[data-plyr="seek"]',
                                volume: '[data-plyr="volume"]',
                                speed: '[data-plyr="speed"]',
                                language: '[data-plyr="language"]',
                                quality: '[data-plyr="quality"]'
                            },
                            display: {
                                currentTime: ".plyr__time--current",
                                duration: ".plyr__time--duration",
                                buffer: ".plyr__progress__buffer",
                                loop: ".plyr__progress__loop",
                                volume: ".plyr__volume--display"
                            },
                            progress: ".plyr__progress",
                            captions: ".plyr__captions",
                            caption: ".plyr__caption"
                        },
                        classNames: {
                            type: "plyr--{0}",
                            provider: "plyr--{0}",
                            video: "plyr__video-wrapper",
                            embed: "plyr__video-embed",
                            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                            embedContainer: "plyr__video-embed__container",
                            poster: "plyr__poster",
                            posterEnabled: "plyr__poster-enabled",
                            ads: "plyr__ads",
                            control: "plyr__control",
                            controlPressed: "plyr__control--pressed",
                            playing: "plyr--playing",
                            paused: "plyr--paused",
                            stopped: "plyr--stopped",
                            loading: "plyr--loading",
                            hover: "plyr--hover",
                            tooltip: "plyr__tooltip",
                            cues: "plyr__cues",
                            marker: "plyr__progress__marker",
                            hidden: "plyr__sr-only",
                            hideControls: "plyr--hide-controls",
                            isIos: "plyr--is-ios",
                            isTouch: "plyr--is-touch",
                            uiSupported: "plyr--full-ui",
                            noTransition: "plyr--no-transition",
                            display: {time: "plyr__time"},
                            menu: {value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open"},
                            captions: {enabled: "plyr--captions-enabled", active: "plyr--captions-active"},
                            fullscreen: {enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback"},
                            pip: {supported: "plyr--pip-supported", active: "plyr--pip-active"},
                            airplay: {supported: "plyr--airplay-supported", active: "plyr--airplay-active"},
                            tabFocus: "plyr__tab-focus",
                            previewThumbnails: {
                                thumbContainer: "plyr__preview-thumb",
                                thumbContainerShown: "plyr__preview-thumb--is-shown",
                                imageContainer: "plyr__preview-thumb__image-container",
                                timeContainer: "plyr__preview-thumb__time-container",
                                scrubbingContainer: "plyr__preview-scrubbing",
                                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                            }
                        },
                        attributes: {
                            embed: {
                                provider: "data-plyr-provider",
                                id: "data-plyr-embed-id",
                                hash: "data-plyr-embed-hash"
                            }
                        },
                        ads: {enabled: !1, publisherId: "", tagUrl: ""},
                        previewThumbnails: {enabled: !1, src: ""},
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1,
                            customControls: !0,
                            referrerPolicy: null,
                            premium: !1
                        },
                        youtube: {
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            customControls: !0,
                            noCookie: !1
                        },
                        mediaMetadata: {title: "", artist: "", album: "", artwork: []},
                        markers: {enabled: !1, points: []}
                    }, Qe = "picture-in-picture", Ze = "inline", Je = {html5: "html5", youtube: "youtube", vimeo: "vimeo"},
                    et = "audio", tt = "video";
                const it = () => {
                };

                class st {
                    constructor(e = !1) {
                        this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
                    }

                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : it
                    }

                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : it
                    }

                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : it
                    }
                }

                class nt {
                    constructor(t) {
                        e(this, "onChange", (() => {
                            if (!this.enabled) return;
                            const e = this.player.elements.buttons.fullscreen;
                            R(e) && (e.pressed = this.active);
                            const t = this.target === this.player.media ? this.target : this.player.elements.container;
                            we.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                        })), e(this, "toggleFallback", ((e = !1) => {
                            if (e ? this.scrollPosition = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0
                            } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", oe(this.target, this.player.config.classNames.fullscreen.fallback, e), Y.isIos) {
                                let t = document.head.querySelector('meta[name="viewport"]');
                                const i = "viewport-fit=cover";
                                t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                                const s = F(t.content) && t.content.includes(i);
                                e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e => e.trim() !== i)).join(","))
                            }
                            this.onChange()
                        })), e(this, "trapFocus", (e => {
                            if (Y.isIos || !this.active || "Tab" !== e.key) return;
                            const t = document.activeElement,
                                i = de.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i,
                                n = i[i.length - 1];
                            t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault())
                        })), e(this, "update", (() => {
                            if (this.enabled) {
                                let e;
                                e = this.forceFallback ? "Fallback (forced)" : nt.native ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`)
                            } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                            oe(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        })), e(this, "enter", (() => {
                            this.enabled && (Y.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !nt.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? W(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({navigationUI: "hide"}))
                        })), e(this, "exit", (() => {
                            if (this.enabled) if (Y.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), Ce(this.player.play()); else if (!nt.native || this.forceFallback) this.toggleFallback(!1); else if (this.prefix) {
                                if (!W(this.prefix)) {
                                    const e = "moz" === this.prefix ? "Cancel" : "Exit";
                                    document[`${this.prefix}${e}${this.property}`]()
                                }
                            } else (document.cancelFullScreen || document.exitFullscreen).call(document)
                        })), e(this, "toggle", (() => {
                            this.active ? this.exit() : this.enter()
                        })), this.player = t, this.prefix = nt.prefix, this.property = nt.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
                            const {prototype: i} = Element;
                            return (i.closest || function () {
                                let e = this;
                                do {
                                    if (ce.matches(e, t)) return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }).call(e, t)
                        }(this.player.elements.container, t.config.fullscreen.container), ve.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, (() => {
                            this.onChange()
                        })), ve.call(this.player, this.player.elements.container, "dblclick", (e => {
                            R(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
                        })), ve.call(this, this.player.elements.container, "keydown", (e => this.trapFocus(e))), this.update()
                    }

                    static get native() {
                        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                    }

                    get usingNative() {
                        return nt.native && !this.forceFallback
                    }

                    static get prefix() {
                        if (N(document.exitFullscreen)) return "";
                        let e = "";
                        return ["webkit", "moz", "ms"].some((t => !(!N(document[`${t}ExitFullscreen`]) && !N(document[`${t}CancelFullScreen`]) || (e = t, 0)))), e
                    }

                    static get property() {
                        return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                    }

                    get enabled() {
                        return (nt.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                    }

                    get active() {
                        if (!this.enabled) return !1;
                        if (!nt.native || this.forceFallback) return le(this.target, this.player.config.classNames.fullscreen.fallback);
                        const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
                        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                    }

                    get target() {
                        return Y.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                    }
                }

                function at(e, t = 1) {
                    return new Promise(((i, s) => {
                        const n = new Image, a = () => {
                            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n)
                        };
                        Object.assign(n, {onload: a, onerror: a, src: e})
                    }))
                }

                const rt = {
                    addStyleHook() {
                        oe(this.elements.container, this.config.selectors.container.replace(".", ""), !0), oe(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    }, toggleNativeControls(e = !1) {
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    }, build() {
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void rt.toggleNativeControls.call(this, !0);
                        R(this.elements.controls) || (We.inject.call(this), this.listeners.controls()), rt.toggleNativeControls.call(this), this.isHTML5 && Ye.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, We.updateVolume.call(this), We.timeUpdate.call(this), We.durationUpdate.call(this), rt.checkPlaying.call(this), oe(this.elements.container, this.config.classNames.pip.supported, fe.pip && this.isHTML5 && this.isVideo), oe(this.elements.container, this.config.classNames.airplay.supported, fe.airplay && this.isHTML5), oe(this.elements.container, this.config.classNames.isIos, Y.isIos), oe(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((() => {
                            we.call(this, this.media, "ready")
                        }), 0), rt.setTitle.call(this), this.poster && rt.setPoster.call(this, this.poster, !1).catch((() => {
                        })), this.config.duration && We.durationUpdate.call(this), this.config.mediaMetadata && We.setMediaMetadata.call(this)
                    }, setTitle() {
                        let e = Re.get("play", this.config);
                        if (F(this.config.title) && !W(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t => {
                            t.setAttribute("aria-label", e)
                        })), this.isEmbed) {
                            const e = ue.call(this, "iframe");
                            if (!R(e)) return;
                            const t = W(this.config.title) ? "video" : this.config.title,
                                i = Re.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", t))
                        }
                    }, togglePoster(e) {
                        oe(this.elements.container, this.config.classNames.posterEnabled, e)
                    }, setPoster(e, t = !0) {
                        return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), Te.call(this).then((() => at(e))).catch((t => {
                            throw e === this.poster && rt.togglePoster.call(this, !1), t
                        })).then((() => {
                            if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster")
                        })).then((() => (Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: ""
                        }), rt.togglePoster.call(this, !0), e))))
                    }, checkPlaying(e) {
                        oe(this.elements.container, this.config.classNames.playing, this.playing), oe(this.elements.container, this.config.classNames.paused, this.paused), oe(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e => {
                            Object.assign(e, {pressed: this.playing}), e.setAttribute("aria-label", Re.get(this.playing ? "pause" : "play", this.config))
                        })), V(e) && "timeupdate" === e.type || rt.toggleControls.call(this)
                    }, checkLoading(e) {
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((() => {
                            oe(this.elements.container, this.config.classNames.loading, this.loading), rt.toggleControls.call(this)
                        }), this.loading ? 250 : 0)
                    }, toggleControls(e) {
                        const {controls: t} = this.elements;
                        if (t && this.config.hideControls) {
                            const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                        }
                    }, migrateStyles() {
                        Object.values({...this.media.style}).filter((e => !W(e) && F(e) && e.startsWith("--plyr"))).forEach((e => {
                            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
                        })), W(this.media.style) && this.media.removeAttribute("style")
                    }
                };

                class ot {
                    constructor(t) {
                        e(this, "firstTouch", (() => {
                            const {player: e} = this, {elements: t} = e;
                            e.touch = !0, oe(t.container, e.config.classNames.isTouch, !0)
                        })), e(this, "setTabFocus", (e => {
                            const {player: t} = this, {elements: i} = t, {key: s, type: n, timeStamp: a} = e;
                            if (clearTimeout(this.focusTimer), "keydown" === n && "Tab" !== s) return;
                            "keydown" === n && (this.lastKeyDown = a);
                            const r = a - this.lastKeyDown <= 20;
                            ("focus" !== n || r) && ((() => {
                                const e = t.config.classNames.tabFocus;
                                oe(de.call(t, `.${e}`), e, !1)
                            })(), "focusout" !== n && (this.focusTimer = setTimeout((() => {
                                const e = document.activeElement;
                                i.container.contains(e) && oe(document.activeElement, t.config.classNames.tabFocus, !0)
                            }), 10)))
                        })), e(this, "global", ((e = !0) => {
                            const {player: t} = this;
                            t.config.keyboard.global && ge.call(t, window, "keydown keyup", this.handleKey, e, !1), ge.call(t, document.body, "click", this.toggleMenu, e), ye.call(t, document.body, "touchstart", this.firstTouch), ge.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        })), e(this, "container", (() => {
                            const {player: e} = this, {config: t, elements: i, timers: s} = e;
                            !t.keyboard.global && t.keyboard.focused && ve.call(e, i.container, "keydown keyup", this.handleKey, !1), ve.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t => {
                                const {controls: n} = i;
                                n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                                let a = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (rt.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout((() => rt.toggleControls.call(e, !1)), a)
                            }));
                            const n = () => {
                                if (!e.isVimeo || e.config.vimeo.premium) return;
                                const t = i.wrapper, {active: s} = e.fullscreen, [n, a] = Ae.call(e),
                                    r = xe(`aspect-ratio: ${n} / ${a}`);
                                if (!s) return void (r ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                                const [o, l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                                    c = o / l > n / a;
                                r ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? l / a * n + "px" : null, t.style.margin = c ? "0 auto" : null)
                            }, a = () => {
                                clearTimeout(s.resized), s.resized = setTimeout(n, 50)
                            };
                            ve.call(e, i.container, "enterfullscreen exitfullscreen", (t => {
                                const {target: s} = e.fullscreen;
                                s === i.container && (!e.isEmbed && W(e.config.ratio) || (n(), ("enterfullscreen" === t.type ? ve : be).call(e, window, "resize", a)))
                            }))
                        })), e(this, "media", (() => {
                            const {player: e} = this, {elements: t} = e;
                            if (ve.call(e, e.media, "timeupdate seeking seeked", (t => We.timeUpdate.call(e, t))), ve.call(e, e.media, "durationchange loadeddata loadedmetadata", (t => We.durationUpdate.call(e, t))), ve.call(e, e.media, "ended", (() => {
                                e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                            })), ve.call(e, e.media, "progress playing seeking seeked", (t => We.updateProgress.call(e, t))), ve.call(e, e.media, "volumechange", (t => We.updateVolume.call(e, t))), ve.call(e, e.media, "playing play pause ended emptied timeupdate", (t => rt.checkPlaying.call(e, t))), ve.call(e, e.media, "waiting canplay seeked playing", (t => rt.checkLoading.call(e, t))), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                const i = ue.call(e, `.${e.config.classNames.video}`);
                                if (!R(i)) return;
                                ve.call(e, t.container, "click", (s => {
                                    ([t.container, i].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), this.proxy(s, (() => {
                                        Ce(e.play())
                                    }), "play")) : this.proxy(s, (() => {
                                        Ce(e.togglePlay())
                                    }), "play")))
                                }))
                            }
                            e.supported.ui && e.config.disableContextMenu && ve.call(e, t.wrapper, "contextmenu", (e => {
                                e.preventDefault()
                            }), !1), ve.call(e, e.media, "volumechange", (() => {
                                e.storage.set({volume: e.volume, muted: e.muted})
                            })), ve.call(e, e.media, "ratechange", (() => {
                                We.updateSetting.call(e, "speed"), e.storage.set({speed: e.speed})
                            })), ve.call(e, e.media, "qualitychange", (t => {
                                We.updateSetting.call(e, "quality", null, t.detail.quality)
                            })), ve.call(e, e.media, "ready qualitychange", (() => {
                                We.setDownloadUrl.call(e)
                            }));
                            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            ve.call(e, e.media, i, (i => {
                                let {detail: s = {}} = i;
                                "error" === i.type && (s = e.media.error), we.call(e, t.container, i.type, !0, s)
                            }))
                        })), e(this, "proxy", ((e, t, i) => {
                            const {player: s} = this, n = s.config.listeners[i];
                            let a = !0;
                            N(n) && (a = n.call(s, e)), !1 !== a && N(t) && t.call(s, e)
                        })), e(this, "bind", ((e, t, i, s, n = !0) => {
                            const {player: a} = this, r = a.config.listeners[s], o = N(r);
                            ve.call(a, e, t, (e => this.proxy(e, i, s)), n && !o)
                        })), e(this, "controls", (() => {
                            const {player: e} = this, {elements: t} = e, i = Y.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach((t => {
                                this.bind(t, "click", (() => {
                                    Ce(e.togglePlay())
                                }), "play")
                            })), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", (() => {
                                e.lastSeekTime = Date.now(), e.rewind()
                            }), "rewind"), this.bind(t.buttons.fastForward, "click", (() => {
                                e.lastSeekTime = Date.now(), e.forward()
                            }), "fastForward"), this.bind(t.buttons.mute, "click", (() => {
                                e.muted = !e.muted
                            }), "mute"), this.bind(t.buttons.captions, "click", (() => e.toggleCaptions())), this.bind(t.buttons.download, "click", (() => {
                                we.call(e, e.media, "download")
                            }), "download"), this.bind(t.buttons.fullscreen, "click", (() => {
                                e.fullscreen.toggle()
                            }), "fullscreen"), this.bind(t.buttons.pip, "click", (() => {
                                e.pip = "toggle"
                            }), "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t => {
                                t.stopPropagation(), t.preventDefault(), We.toggleMenu.call(e, t)
                            }), null, !1), this.bind(t.buttons.settings, "keyup", (t => {
                                ["Space", "Enter"].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), We.toggleMenu.call(e, t)) : We.focusFirstMenuItem.call(e, null, !0))
                            }), null, !1), this.bind(t.settings.menu, "keydown", (t => {
                                "Escape" === t.key && We.toggleMenu.call(e, t)
                            })), this.bind(t.inputs.seek, "mousedown mousemove", (e => {
                                const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                                e.currentTarget.setAttribute("seek-value", s)
                            })), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t => {
                                const i = t.currentTarget, s = "play-on-seeked";
                                if (H(t) && !["ArrowLeft", "ArrowRight"].includes(t.key)) return;
                                e.lastSeekTime = Date.now();
                                const n = i.hasAttribute(s), a = ["mouseup", "touchend", "keyup"].includes(t.type);
                                n && a ? (i.removeAttribute(s), Ce(e.play())) : !a && e.playing && (i.setAttribute(s, ""), e.pause())
                            })), Y.isIos) {
                                const t = de.call(e, 'input[type="range"]');
                                Array.from(t).forEach((e => this.bind(e, i, (e => K(e.target)))))
                            }
                            this.bind(t.inputs.seek, i, (t => {
                                const i = t.currentTarget;
                                let s = i.getAttribute("seek-value");
                                W(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration
                            }), "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t => We.updateSeekTooltip.call(e, t))), this.bind(t.progress, "mousemove touchmove", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startMove(t)
                            })), this.bind(t.progress, "mouseleave touchend click", (() => {
                                const {previewThumbnails: t} = e;
                                t && t.loaded && t.endMove(!1, !0)
                            })), this.bind(t.progress, "mousedown touchstart", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startScrubbing(t)
                            })), this.bind(t.progress, "mouseup touchend", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.endScrubbing(t)
                            })), Y.isWebkit && Array.from(de.call(e, 'input[type="range"]')).forEach((t => {
                                this.bind(t, "input", (t => We.updateRangeFill.call(e, t.target)))
                            })), e.config.toggleInvert && !R(t.display.duration) && this.bind(t.display.currentTime, "click", (() => {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, We.timeUpdate.call(e))
                            })), this.bind(t.inputs.volume, i, (t => {
                                e.volume = t.target.value
                            }), "volume"), this.bind(t.controls, "mouseenter mouseleave", (i => {
                                t.controls.hover = !e.touch && "mouseenter" === i.type
                            })), t.fullscreen && Array.from(t.fullscreen.children).filter((e => !e.contains(t.container))).forEach((i => {
                                this.bind(i, "mouseenter mouseleave", (i => {
                                    t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type)
                                }))
                            })), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e => {
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            })), this.bind(t.controls, "focusin", (() => {
                                const {config: i, timers: s} = e;
                                oe(t.controls, i.classNames.noTransition, !0), rt.toggleControls.call(e, !0), setTimeout((() => {
                                    oe(t.controls, i.classNames.noTransition, !1)
                                }), 0);
                                const n = this.touch ? 3e3 : 4e3;
                                clearTimeout(s.controls), s.controls = setTimeout((() => rt.toggleControls.call(e, !1)), n)
                            })), this.bind(t.inputs.volume, "wheel", (t => {
                                const i = t.webkitDirectionInvertedFromDevice, [s, n] = [t.deltaX, -t.deltaY].map((e => i ? -e : e)),
                                    a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                                e.increaseVolume(a / 50);
                                const {volume: r} = e.media;
                                (1 === a && r < 1 || -1 === a && r > 0) && t.preventDefault()
                            }), "volume", !1)
                        })), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }

                    handleKey(e) {
                        const {player: t} = this, {elements: i} = t, {key: s, type: n, altKey: a, ctrlKey: r, metaKey: o, shiftKey: l} = e,
                            c = "keydown" === n, d = c && s === this.lastKey;
                        if (a || r || o || l) return;
                        if (!s) return;
                        if (c) {
                            const n = document.activeElement;
                            if (R(n)) {
                                const {editable: s} = t.config.selectors, {seek: a} = i.inputs;
                                if (n !== a && ce(n, s)) return;
                                if ("Space" === e.key && ce(n, 'button, [role^="menuitem"]')) return
                            }
                            switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
                                case"0":
                                case"1":
                                case"2":
                                case"3":
                                case"4":
                                case"5":
                                case"6":
                                case"7":
                                case"8":
                                case"9":
                                    d || (u = parseInt(s, 10), t.currentTime = t.duration / 10 * u);
                                    break;
                                case"Space":
                                case"k":
                                    d || Ce(t.togglePlay());
                                    break;
                                case"ArrowUp":
                                    t.increaseVolume(.1);
                                    break;
                                case"ArrowDown":
                                    t.decreaseVolume(.1);
                                    break;
                                case"m":
                                    d || (t.muted = !t.muted);
                                    break;
                                case"ArrowRight":
                                    t.forward();
                                    break;
                                case"ArrowLeft":
                                    t.rewind();
                                    break;
                                case"f":
                                    t.fullscreen.toggle();
                                    break;
                                case"c":
                                    d || t.toggleCaptions();
                                    break;
                                case"l":
                                    t.loop = !t.loop
                            }
                            "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s
                        } else this.lastKey = null;
                        var u
                    }

                    toggleMenu(e) {
                        We.toggleMenu.call(this.player, e)
                    }
                }

                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self && self;
                var lt = function (e, t) {
                    return e(t = {exports: {}}, t.exports), t.exports
                }((function (e, t) {
                    e.exports = function () {
                        var e = function () {
                        }, t = {}, i = {}, s = {};

                        function n(e, t) {
                            e = e.push ? e : [e];
                            var n, a, r, o = [], l = e.length, c = l;
                            for (n = function (e, i) {
                                i.length && o.push(e), --c || t(o)
                            }; l--;) a = e[l], (r = i[a]) ? n(a, r) : (s[a] = s[a] || []).push(n)
                        }

                        function a(e, t) {
                            if (e) {
                                var n = s[e];
                                if (i[e] = t, n) for (; n.length;) n[0](e, t), n.splice(0, 1)
                            }
                        }

                        function r(t, i) {
                            t.call && (t = {success: t}), i.length ? (t.error || e)(i) : (t.success || e)(t)
                        }

                        function o(t, i, s, n) {
                            var a, r, l = document, c = s.async, d = (s.numRetries || 0) + 1, u = s.before || e,
                                h = t.replace(/[\?|#].*$/, ""), p = t.replace(/^(css|img)!/, "");
                            n = n || 0, /(^css!|\.css$)/.test(h) ? ((r = l.createElement("link")).rel = "stylesheet", r.href = p, (a = "hideFocus" in r) && r.relList && (a = 0, r.rel = "preload", r.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (r = l.createElement("img")).src = p : ((r = l.createElement("script")).src = t, r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function (e) {
                                var l = e.type[0];
                                if (a) try {
                                    r.sheet.cssText.length || (l = "e")
                                } catch (e) {
                                    18 != e.code && (l = "e")
                                }
                                if ("e" == l) {
                                    if ((n += 1) < d) return o(t, i, s, n)
                                } else if ("preload" == r.rel && "style" == r.as) return r.rel = "stylesheet";
                                i(t, l, e.defaultPrevented)
                            }, !1 !== u(t, r) && l.head.appendChild(r)
                        }

                        function l(e, t, i) {
                            var s, n, a = (e = e.push ? e : [e]).length, r = a, l = [];
                            for (s = function (e, i, s) {
                                if ("e" == i && l.push(e), "b" == i) {
                                    if (!s) return;
                                    l.push(e)
                                }
                                --a || t(l)
                            }, n = 0; n < r; n++) o(e[n], s, i)
                        }

                        function c(e, i, s) {
                            var n, o;
                            if (i && i.trim && (n = i), o = (n ? s : i) || {}, n) {
                                if (n in t) throw"LoadJS";
                                t[n] = !0
                            }

                            function c(t, i) {
                                l(e, (function (e) {
                                    r(o, e), t && r({success: t, error: i}, e), a(n, e)
                                }), o)
                            }

                            if (o.returnPromise) return new Promise(c);
                            c()
                        }

                        return c.ready = function (e, t) {
                            return n(e, (function (e) {
                                r(t, e)
                            })), c
                        }, c.done = function (e) {
                            a(e, [])
                        }, c.reset = function () {
                            t = {}, i = {}, s = {}
                        }, c.isDefined = function (e) {
                            return e in t
                        }, c
                    }()
                }));

                function ct(e) {
                    return new Promise(((t, i) => {
                        lt(e, {success: t, error: i})
                    }))
                }

                function dt(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, we.call(this, this.media, e ? "play" : "pause"))
                }

                const ut = {
                    setup() {
                        const e = this;
                        oe(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Oe.call(e), I(window.Vimeo) ? ut.ready.call(e) : ct(e.config.urls.vimeo.sdk).then((() => {
                            ut.ready.call(e)
                        })).catch((t => {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        }))
                    }, ready() {
                        const e = this, t = e.config.vimeo, {premium: i, referrerPolicy: s, ...n} = t;
                        let a = e.media.getAttribute("src"), r = "";
                        W(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), r = e.media.getAttribute(e.config.attributes.embed.hash)) : r = function (e) {
                            const t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                            return t && 5 === t.length ? t[4] : null
                        }(a);
                        const o = r ? {h: r} : {};
                        i && Object.assign(n, {controls: !1, sidedock: !1});
                        const l = Ke({
                                loop: e.config.loop.active,
                                autoplay: e.autoplay,
                                muted: e.muted,
                                gesture: "media",
                                playsinline: !this.config.fullscreen.iosNative, ...o, ...n
                            }),
                            c = W(h = a) ? null : $(Number(h)) ? h : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h,
                            d = ee("iframe"), u = $e(e.config.urls.vimeo.iframe, c, l);
                        var h;
                        if (d.setAttribute("src", u), d.setAttribute("allowfullscreen", ""), d.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), W(s) || d.setAttribute("referrerPolicy", s), i || !t.customControls) d.setAttribute("data-poster", e.poster), e.media = ne(d, e.media); else {
                            const t = ee("div", {class: e.config.classNames.embedContainer, "data-poster": e.poster});
                            t.appendChild(d), e.media = ne(t, e.media)
                        }
                        t.customControls || He($e(e.config.urls.vimeo.api, u)).then((t => {
                            !W(t) && t.thumbnail_url && rt.setPoster.call(e, t.thumbnail_url).catch((() => {
                            }))
                        })), e.embed = new window.Vimeo.Player(d, {
                            autopause: e.config.autopause,
                            muted: e.muted
                        }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = () => (dt.call(e, !0), e.embed.play()), e.media.pause = () => (dt.call(e, !1), e.embed.pause()), e.media.stop = () => {
                            e.pause(), e.currentTime = 0
                        };
                        let {currentTime: p} = e.media;
                        Object.defineProperty(e.media, "currentTime", {
                            get: () => p, set(t) {
                                const {embed: i, media: s, paused: n, volume: a} = e, r = n && !i.hasPlayed;
                                s.seeking = !0, we.call(e, s, "seeking"), Promise.resolve(r && i.setVolume(0)).then((() => i.setCurrentTime(t))).then((() => r && i.pause())).then((() => r && i.setVolume(a))).catch((() => {
                                }))
                            }
                        });
                        let f = e.config.speed.selected;
                        Object.defineProperty(e.media, "playbackRate", {
                            get: () => f, set(t) {
                                e.embed.setPlaybackRate(t).then((() => {
                                    f = t, we.call(e, e.media, "ratechange")
                                })).catch((() => {
                                    e.options.speed = [1]
                                }))
                            }
                        });
                        let {volume: m} = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: () => m, set(t) {
                                e.embed.setVolume(t).then((() => {
                                    m = t, we.call(e, e.media, "volumechange")
                                }))
                            }
                        });
                        let {muted: g} = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: () => g, set(t) {
                                const i = !!D(t) && t;
                                e.embed.setVolume(i ? 0 : e.config.volume).then((() => {
                                    g = i, we.call(e, e.media, "volumechange")
                                }))
                            }
                        });
                        let v, {loop: b} = e.config;
                        Object.defineProperty(e.media, "loop", {
                            get: () => b, set(t) {
                                const i = D(t) ? t : e.config.loop.active;
                                e.embed.setLoop(i).then((() => {
                                    b = i
                                }))
                            }
                        }), e.embed.getVideoUrl().then((t => {
                            v = t, We.setDownloadUrl.call(e)
                        })).catch((e => {
                            this.debug.warn(e)
                        })), Object.defineProperty(e.media, "currentSrc", {get: () => v}), Object.defineProperty(e.media, "ended", {get: () => e.currentTime === e.duration}), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then((t => {
                            const [i, s] = t;
                            e.embed.ratio = _e(i, s), Oe.call(this)
                        })), e.embed.setAutopause(e.config.autopause).then((t => {
                            e.config.autopause = t
                        })), e.embed.getVideoTitle().then((t => {
                            e.config.title = t, rt.setTitle.call(this)
                        })), e.embed.getCurrentTime().then((t => {
                            p = t, we.call(e, e.media, "timeupdate")
                        })), e.embed.getDuration().then((t => {
                            e.media.duration = t, we.call(e, e.media, "durationchange")
                        })), e.embed.getTextTracks().then((t => {
                            e.media.textTracks = t, Ye.setup.call(e)
                        })), e.embed.on("cuechange", (({cues: t = []}) => {
                            const i = t.map((e => function (e) {
                                const t = document.createDocumentFragment(), i = document.createElement("div");
                                return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                            }(e.text)));
                            Ye.updateCues.call(e, i)
                        })), e.embed.on("loaded", (() => {
                            e.embed.getPaused().then((t => {
                                dt.call(e, !t), t || we.call(e, e.media, "playing")
                            })), R(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
                        })), e.embed.on("bufferstart", (() => {
                            we.call(e, e.media, "waiting")
                        })), e.embed.on("bufferend", (() => {
                            we.call(e, e.media, "playing")
                        })), e.embed.on("play", (() => {
                            dt.call(e, !0), we.call(e, e.media, "playing")
                        })), e.embed.on("pause", (() => {
                            dt.call(e, !1)
                        })), e.embed.on("timeupdate", (t => {
                            e.media.seeking = !1, p = t.seconds, we.call(e, e.media, "timeupdate")
                        })), e.embed.on("progress", (t => {
                            e.media.buffered = t.percent, we.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && we.call(e, e.media, "canplaythrough"), e.embed.getDuration().then((t => {
                                t !== e.media.duration && (e.media.duration = t, we.call(e, e.media, "durationchange"))
                            }))
                        })), e.embed.on("seeked", (() => {
                            e.media.seeking = !1, we.call(e, e.media, "seeked")
                        })), e.embed.on("ended", (() => {
                            e.media.paused = !0, we.call(e, e.media, "ended")
                        })), e.embed.on("error", (t => {
                            e.media.error = t, we.call(e, e.media, "error")
                        })), t.customControls && setTimeout((() => rt.build.call(e)), 0)
                    }
                };

                function ht(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, we.call(this, this.media, e ? "play" : "pause"))
                }

                function pt(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                }

                const ft = {
                    setup() {
                        if (oe(this.elements.wrapper, this.config.classNames.embed, !0), I(window.YT) && N(window.YT.Player)) ft.ready.call(this); else {
                            const e = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = () => {
                                N(e) && e(), ft.ready.call(this)
                            }, ct(this.config.urls.youtube.sdk).catch((e => {
                                this.debug.warn("YouTube API failed to load", e)
                            }))
                        }
                    }, getTitle(e) {
                        He($e(this.config.urls.youtube.api, e)).then((e => {
                            if (I(e)) {
                                const {title: t, height: i, width: s} = e;
                                this.config.title = t, rt.setTitle.call(this), this.embed.ratio = _e(s, i)
                            }
                            Oe.call(this)
                        })).catch((() => {
                            Oe.call(this)
                        }))
                    }, ready() {
                        const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
                        if (!W(i) && i.startsWith("youtube-")) return;
                        let s = e.media.getAttribute("src");
                        W(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
                        const n = W(o = s) ? null : o.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : o,
                            a = ee("div", {
                                id: (r = e.provider, `${r}-${Math.floor(1e4 * Math.random())}`),
                                "data-poster": t.customControls ? e.poster : void 0
                            });
                        var r, o;
                        if (e.media = ne(a, e.media), t.customControls) {
                            const t = e => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                            at(t("maxres"), 121).catch((() => at(t("sd"), 121))).catch((() => at(t("hq")))).then((t => rt.setPoster.call(e, t.src))).then((t => {
                                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                            })).catch((() => {
                            }))
                        }
                        e.embed = new window.YT.Player(e.media, {
                            videoId: n,
                            host: pt(t),
                            playerVars: Q({}, {
                                autoplay: e.config.autoplay ? 1 : 0,
                                hl: e.config.hl,
                                controls: e.supported.ui && t.customControls ? 0 : 1,
                                disablekb: 1,
                                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                cc_load_policy: e.captions.active ? 1 : 0,
                                cc_lang_pref: e.config.captions.language,
                                widget_referrer: window ? window.location.href : null
                            }, t),
                            events: {
                                onError(t) {
                                    if (!e.media.error) {
                                        const i = t.data, s = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        }[i] || "An unknown error occured";
                                        e.media.error = {code: i, message: s}, we.call(e, e.media, "error")
                                    }
                                }, onPlaybackRateChange(t) {
                                    const i = t.target;
                                    e.media.playbackRate = i.getPlaybackRate(), we.call(e, e.media, "ratechange")
                                }, onReady(i) {
                                    if (N(e.media.play)) return;
                                    const s = i.target;
                                    ft.getTitle.call(e, n), e.media.play = () => {
                                        ht.call(e, !0), s.playVideo()
                                    }, e.media.pause = () => {
                                        ht.call(e, !1), s.pauseVideo()
                                    }, e.media.stop = () => {
                                        s.stopVideo()
                                    }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: () => Number(s.getCurrentTime()),
                                        set(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, we.call(e, e.media, "seeking"), s.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: () => s.getPlaybackRate(),
                                        set(e) {
                                            s.setPlaybackRate(e)
                                        }
                                    });
                                    let {volume: a} = e.config;
                                    Object.defineProperty(e.media, "volume", {
                                        get: () => a, set(t) {
                                            a = t, s.setVolume(100 * a), we.call(e, e.media, "volumechange")
                                        }
                                    });
                                    let {muted: r} = e.config;
                                    Object.defineProperty(e.media, "muted", {
                                        get: () => r, set(t) {
                                            const i = D(t) ? t : r;
                                            r = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), we.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {get: () => s.getVideoUrl()}), Object.defineProperty(e.media, "ended", {get: () => e.currentTime === e.duration});
                                    const o = s.getAvailablePlaybackRates();
                                    e.options.speed = o.filter((t => e.config.speed.options.includes(t))), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), we.call(e, e.media, "timeupdate"), we.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((() => {
                                        e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && we.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), we.call(e, e.media, "canplaythrough"))
                                    }), 200), t.customControls && setTimeout((() => rt.build.call(e)), 50)
                                }, onStateChange(i) {
                                    const s = i.target;
                                    switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1, we.call(e, e.media, "seeked")), i.data) {
                                        case-1:
                                            we.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), we.call(e, e.media, "progress");
                                            break;
                                        case 0:
                                            ht.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : we.call(e, e.media, "ended");
                                            break;
                                        case 1:
                                            t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ht.call(e, !0), we.call(e, e.media, "playing"), e.timers.playing = setInterval((() => {
                                                we.call(e, e.media, "timeupdate")
                                            }), 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), we.call(e, e.media, "durationchange")));
                                            break;
                                        case 2:
                                            e.muted || e.embed.unMute(), ht.call(e, !1);
                                            break;
                                        case 3:
                                            we.call(e, e.media, "waiting")
                                    }
                                    we.call(e, e.elements.container, "statechange", !1, {code: i.data})
                                }
                            }
                        })
                    }
                }, mt = {
                    setup() {
                        this.media ? (oe(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), oe(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && oe(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = ee("div", {class: this.config.classNames.video}), Z(this.media, this.elements.wrapper), this.elements.poster = ee("div", {class: this.config.classNames.poster}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Ie.setup.call(this) : this.isYouTube ? ft.setup.call(this) : this.isVimeo && ut.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                };

                class gt {
                    constructor(t) {
                        e(this, "load", (() => {
                            this.enabled && (I(window.google) && I(window.google.ima) ? this.ready() : ct(this.player.config.urls.googleIMA.sdk).then((() => {
                                this.ready()
                            })).catch((() => {
                                this.trigger("error", new Error("Google IMA SDK failed to load"))
                            })))
                        })), e(this, "ready", (() => {
                            var e;
                            this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((() => {
                                this.clearSafetyTimer("onAdsManagerLoaded()")
                            })), this.listeners(), this.setupIMA()
                        })), e(this, "setupIMA", (() => {
                            this.elements.container = ee("div", {class: this.player.config.classNames.ads}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e => this.onAdsManagerLoaded(e)), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e)), !1), this.requestAds()
                        })), e(this, "requestAds", (() => {
                            const {container: e} = this.player.elements;
                            try {
                                const t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        })), e(this, "pollCountdown", ((e = !1) => {
                            if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval((() => {
                                const e = Ge(Math.max(this.manager.getRemainingTime(), 0)),
                                    t = `${Re.get("advertisement", this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t)
                            }), 100)
                        })), e(this, "onAdsManagerLoaded", (e => {
                            if (!this.enabled) return;
                            const t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e))), Object.keys(google.ima.AdEvent.Type).forEach((e => {
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e => this.onAdEvent(e)))
                            })), this.trigger("loaded")
                        })), e(this, "addCuePoints", (() => {
                            W(this.cuePoints) || this.cuePoints.forEach((e => {
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    const t = this.player.elements.progress;
                                    if (R(t)) {
                                        const i = 100 / this.player.duration * e,
                                            s = ee("span", {class: this.player.config.classNames.cues});
                                        s.style.left = `${i.toString()}%`, t.appendChild(s)
                                    }
                                }
                            }))
                        })), e(this, "onAdEvent", (e => {
                            const {container: t} = this.player.elements, i = e.getAd(), s = e.getAdData();
                            switch ((e => {
                                we.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`)
                            })(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    this.manager.setVolume(this.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`)
                            }
                        })), e(this, "onAdError", (e => {
                            this.cancel(), this.player.debug.warn("Ads error", e)
                        })), e(this, "listeners", (() => {
                            const {container: e} = this.player.elements;
                            let t;
                            this.player.on("canplay", (() => {
                                this.addCuePoints()
                            })), this.player.on("ended", (() => {
                                this.loader.contentComplete()
                            })), this.player.on("timeupdate", (() => {
                                t = this.player.currentTime
                            })), this.player.on("seeked", (() => {
                                const e = this.player.currentTime;
                                W(this.cuePoints) || this.cuePoints.forEach(((i, s) => {
                                    t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1))
                                }))
                            })), window.addEventListener("resize", (() => {
                                this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                            }))
                        })), e(this, "play", (() => {
                            const {container: e} = this.player.elements;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then((() => {
                                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                                } catch (e) {
                                    this.onAdError(e)
                                }
                            })).catch((() => {
                            }))
                        })), e(this, "resumeContent", (() => {
                            this.elements.container.style.zIndex = "", this.playing = !1, Ce(this.player.media.play())
                        })), e(this, "pauseContent", (() => {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                        })), e(this, "cancel", (() => {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                        })), e(this, "loadAds", (() => {
                            this.managerPromise.then((() => {
                                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e => {
                                    this.on("loaded", e), this.player.debug.log(this.manager)
                                })), this.initialized = !1, this.requestAds()
                            })).catch((() => {
                            }))
                        })), e(this, "trigger", ((e, ...t) => {
                            const i = this.events[e];
                            j(i) && i.forEach((e => {
                                N(e) && e.apply(this, t)
                            }))
                        })), e(this, "on", ((e, t) => (j(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this))), e(this, "startSafetyTimer", ((e, t) => {
                            this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout((() => {
                                this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
                            }), e)
                        })), e(this, "clearSafetyTimer", (e => {
                            _(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                        })), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(((e, t) => {
                            this.on("loaded", e), this.on("error", t)
                        })), this.load()
                    }

                    get enabled() {
                        const {config: e} = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!W(e.publisherId) || G(e.tagUrl))
                    }

                    get tagUrl() {
                        const {config: e} = this;
                        return G(e.tagUrl) ? e.tagUrl : `https://go.aniview.com/api/adserver6/vast/?${Ke({
                            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                            AV_CHANNELID: "5a0458dc28a06145e4519d21",
                            AV_URL: window.location.hostname,
                            cb: Date.now(),
                            AV_WIDTH: 640,
                            AV_HEIGHT: 480,
                            AV_CDIM2: e.publisherId
                        })}`
                    }
                }

                function vt(e = 0, t = 0, i = 255) {
                    return Math.min(Math.max(e, t), i)
                }

                const bt = e => {
                    const t = [];
                    return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e => {
                        const i = {};
                        e.split(/\r\n|\n|\r/).forEach((e => {
                            if ($(i.startTime)) {
                                if (!W(e.trim()) && W(i.text)) {
                                    const t = e.trim().split("#xywh=");
                                    [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                                }
                            } else {
                                const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`))
                            }
                        })), i.text && t.push(i)
                    })), t
                }, yt = (e, t) => {
                    const i = {};
                    return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
                };

                class wt {
                    constructor(t) {
                        e(this, "load", (() => {
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((() => {
                                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
                            }))
                        })), e(this, "getThumbnails", (() => new Promise((e => {
                            const {src: t} = this.player.config.previewThumbnails;
                            if (W(t)) throw new Error("Missing previewThumbnails.src config attribute");
                            const i = () => {
                                this.thumbnails.sort(((e, t) => e.height - t.height)), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
                            };
                            if (N(t)) t((e => {
                                this.thumbnails = e, i()
                            })); else {
                                const e = (F(t) ? [t] : t).map((e => this.getThumbnail(e)));
                                Promise.all(e).then(i)
                            }
                        })))), e(this, "getThumbnail", (e => new Promise((t => {
                            He(e).then((i => {
                                const s = {frames: bt(i), height: null, urlPrefix: ""};
                                s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                const n = new Image;
                                n.onload = () => {
                                    s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t()
                                }, n.src = s.urlPrefix + s.frames[0].text
                            }))
                        })))), e(this, "startMove", (e => {
                            if (this.loaded && V(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100); else {
                                    var t, i;
                                    const s = this.player.elements.progress.getBoundingClientRect(),
                                        n = 100 / s.width * (e.pageX - s.left);
                                    this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ge(this.seekTime);
                                    const a = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(this.seekTime)));
                                    a && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a.label}<br>`)
                                }
                                this.showImageAtCurrentTime()
                            }
                        })), e(this, "endMove", (() => {
                            this.toggleThumbContainer(!1, !0)
                        })), e(this, "startScrubbing", (e => {
                            (_(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                        })), e(this, "endScrubbing", (() => {
                            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ye.call(this.player, this.player.media, "timeupdate", (() => {
                                this.mouseDown || this.toggleScrubbingContainer(!1)
                            }))
                        })), e(this, "listeners", (() => {
                            this.player.on("play", (() => {
                                this.toggleThumbContainer(!1, !0)
                            })), this.player.on("seeked", (() => {
                                this.toggleThumbContainer(!1)
                            })), this.player.on("timeupdate", (() => {
                                this.lastTime = this.player.media.currentTime
                            }))
                        })), e(this, "render", (() => {
                            this.elements.thumb.container = ee("div", {class: this.player.config.classNames.previewThumbnails.thumbContainer}), this.elements.thumb.imageContainer = ee("div", {class: this.player.config.classNames.previewThumbnails.imageContainer}), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            const e = ee("div", {class: this.player.config.classNames.previewThumbnails.timeContainer});
                            this.elements.thumb.time = ee("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e), R(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = ee("div", {class: this.player.config.classNames.previewThumbnails.scrubbingContainer}), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        })), e(this, "destroy", (() => {
                            this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                        })), e(this, "showImageAtCurrentTime", (() => {
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            const e = this.thumbnails[0].frames.findIndex((e => this.seekTime >= e.startTime && this.seekTime <= e.endTime)),
                                t = e >= 0;
                            let i = 0;
                            this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach(((t, s) => {
                                this.loadedImages.includes(t.frames[e].text) && (i = s)
                            })), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)))
                        })), e(this, "loadImage", ((e = 0) => {
                            const t = this.showingThumb, i = this.thumbnails[e], {urlPrefix: s} = i, n = i.frames[t],
                                a = i.frames[t].text, r = s + a;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement); else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                const i = new Image;
                                i.src = r, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log(`Loading image: ${r}`), i.onload = () => this.showImage(i, n, e, t, a, !0), this.loadingImage = i, this.removeOldImages(i)
                            }
                        })), e(this, "showImage", ((e, t, i, s, n, a = !0) => {
                            this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
                        })), e(this, "removeOldImages", (e => {
                            Array.from(this.currentImageContainer.children).forEach((t => {
                                if ("img" !== t.tagName.toLowerCase()) return;
                                const i = this.usingSprites ? 500 : 1e3;
                                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                    t.dataset.deleting = !0;
                                    const {currentImageContainer: e} = this;
                                    setTimeout((() => {
                                        e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)
                                    }), i)
                                }
                            }))
                        })), e(this, "preloadNearby", ((e, t = !0) => new Promise((i => {
                            setTimeout((() => {
                                const s = this.thumbnails[0].frames[e].text;
                                if (this.showingThumbFilename === s) {
                                    let n;
                                    n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                    let a = !1;
                                    n.forEach((e => {
                                        const t = e.text;
                                        if (t !== s && !this.loadedImages.includes(t)) {
                                            a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                            const {urlPrefix: e} = this.thumbnails[0], s = e + t, n = new Image;
                                            n.src = s, n.onload = () => {
                                                this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i()
                                            }
                                        }
                                    })), a || i()
                                }
                            }), 300)
                        })))), e(this, "getHigherQuality", ((e, t, i, s) => {
                            if (e < this.thumbnails.length - 1) {
                                let n = t.naturalHeight;
                                this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout((() => {
                                    this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), this.loadImage(e + 1))
                                }), 300)
                            }
                        })), e(this, "toggleThumbContainer", ((e = !1, t = !1) => {
                            const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                        })), e(this, "toggleScrubbingContainer", ((e = !1) => {
                            const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                        })), e(this, "determineContainerAutoSizing", (() => {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        })), e(this, "setThumbContainerSizeAndPos", (() => {
                            const {imageContainer: e} = this.elements.thumb;
                            if (this.sizeSpecifiedInCSS) {
                                if (e.clientHeight > 20 && e.clientWidth < 20) {
                                    const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                                    e.style.width = `${t}px`
                                } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                                    const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                                    e.style.height = `${t}px`
                                }
                            } else {
                                const t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`
                            }
                            this.setThumbContainerPos()
                        })), e(this, "setThumbContainerPos", (() => {
                            const e = this.player.elements.progress.getBoundingClientRect(),
                                t = this.player.elements.container.getBoundingClientRect(), {container: i} = this.elements.thumb,
                                s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10,
                                a = this.mousePosX - e.left - i.clientWidth / 2, r = vt(a, s, n);
                            i.style.left = `${r}px`, i.style.setProperty("--preview-arrow-offset", a - r + "px")
                        })), e(this, "setScrubbingContainerSize", (() => {
                            const {width: e, height: t} = yt(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`
                        })), e(this, "setImageSizeAndOffset", ((e, t) => {
                            if (!this.usingSprites) return;
                            const i = this.thumbContainerHeight / t.h;
                            e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`
                        })), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load()
                    }

                    get enabled() {
                        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                    }

                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                    }

                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                    }

                    get thumbAspectRatio() {
                        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                    }

                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            const {height: e} = yt(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            return e
                        }
                        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                    }

                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                    }

                    set currentImageElement(e) {
                        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                    }
                }

                const kt = {
                    insertElements(e, t) {
                        F(t) ? te(e, this.media, {src: t}) : j(t) && t.forEach((t => {
                            te(e, this.media, t)
                        }))
                    }, change(e) {
                        X(e, "sources.length") ? (Ie.cancelRequests.call(this), this.destroy.call(this, (() => {
                            this.options.quality = [], ie(this.media), this.media = null, R(this.elements.container) && this.elements.container.removeAttribute("class");
                            const {sources: t, type: i} = e, [{provider: s = Je.html5, src: n}] = t,
                                a = "html5" === s ? i : "div", r = "html5" === s ? {} : {src: n};
                            Object.assign(this, {
                                provider: s,
                                type: i,
                                supported: fe.check(i, s, this.config.playsinline),
                                media: ee(a, r)
                            }), this.elements.container.appendChild(this.media), D(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), W(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), rt.addStyleHook.call(this), this.isHTML5 && kt.insertElements.call(this, "source", t), this.config.title = e.title, mt.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && kt.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && rt.build.call(this), this.isHTML5 && this.media.load(), W(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this))), this.fullscreen.update()
                        }), !0)) : this.debug.warn("Invalid source format")
                    }
                };

                class Tt {
                    constructor(t, i) {
                        if (e(this, "play", (() => N(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((() => this.ads.play())).catch((() => Ce(this.media.play()))), this.media.play()) : null)), e(this, "pause", (() => this.playing && N(this.media.pause) ? this.media.pause() : null)), e(this, "togglePlay", (e => (D(e) ? e : !this.playing) ? this.play() : this.pause())), e(this, "stop", (() => {
                            this.isHTML5 ? (this.pause(), this.restart()) : N(this.media.stop) && this.media.stop()
                        })), e(this, "restart", (() => {
                            this.currentTime = 0
                        })), e(this, "rewind", (e => {
                            this.currentTime -= $(e) ? e : this.config.seekTime
                        })), e(this, "forward", (e => {
                            this.currentTime += $(e) ? e : this.config.seekTime
                        })), e(this, "increaseVolume", (e => {
                            const t = this.media.muted ? 0 : this.volume;
                            this.volume = t + ($(e) ? e : 0)
                        })), e(this, "decreaseVolume", (e => {
                            this.increaseVolume(-e)
                        })), e(this, "airplay", (() => {
                            fe.airplay && this.media.webkitShowPlaybackTargetPicker()
                        })), e(this, "toggleControls", (e => {
                            if (this.supported.ui && !this.isAudio) {
                                const t = le(this.elements.container, this.config.classNames.hideControls),
                                    i = void 0 === e ? void 0 : !e,
                                    s = oe(this.elements.container, this.config.classNames.hideControls, i);
                                if (s && j(this.config.controls) && this.config.controls.includes("settings") && !W(this.config.settings) && We.toggleMenu.call(this, !1), s !== t) {
                                    const e = s ? "controlshidden" : "controlsshown";
                                    we.call(this, this.media, e)
                                }
                                return !s
                            }
                            return !1
                        })), e(this, "on", ((e, t) => {
                            ve.call(this, this.elements.container, e, t)
                        })), e(this, "once", ((e, t) => {
                            ye.call(this, this.elements.container, e, t)
                        })), e(this, "off", ((e, t) => {
                            be(this.elements.container, e, t)
                        })), e(this, "destroy", ((e, t = !1) => {
                            if (!this.ready) return;
                            const i = () => {
                                document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (ie(this.elements.buttons.play), ie(this.elements.captions), ie(this.elements.controls), ie(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), N(e) && e()) : (ke.call(this), Ie.cancelRequests.call(this), ne(this.elements.original, this.elements.container), we.call(this, this.elements.original, "destroyed", !0), N(e) && e.call(this.elements.original), this.ready = !1, setTimeout((() => {
                                    this.elements = null, this.media = null
                                }), 200))
                            };
                            this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (rt.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && N(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                        })), e(this, "supports", (e => fe.mime.call(this, e))), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = fe.touch, this.media = t, F(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || B(this.media) || j(this.media)) && (this.media = this.media[0]), this.config = Q({}, Xe, Tt.defaults, i || {}, (() => {
                            try {
                                return JSON.parse(this.media.getAttribute("data-plyr-config"))
                            } catch (e) {
                                return {}
                            }
                        })()), this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {popup: null, menu: null, panels: {}, buttons: {}}
                        }, this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap
                        }, this.fullscreen = {active: !1}, this.options = {
                            speed: [],
                            quality: []
                        }, this.debug = new st(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", fe), _(this.media) || !R(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr) return void this.debug.warn("Target already setup");
                        if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                        if (!fe.check().api) return void this.debug.error("Setup failed: no support");
                        const s = this.media.cloneNode(!0);
                        s.autoplay = !1, this.elements.original = s;
                        const n = this.media.tagName.toLowerCase();
                        let a = null, r = null;
                        switch (n) {
                            case"div":
                                if (a = this.media.querySelector("iframe"), R(a)) {
                                    if (r = Ue(a.getAttribute("src")), this.provider = function (e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Je.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Je.vimeo : null
                                    }(r.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", r.search.length) {
                                        const e = ["1", "true"];
                                        e.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = e.includes(r.searchParams.get("playsinline")), this.config.youtube.hl = r.searchParams.get("hl")) : this.config.playsinline = !0
                                    }
                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                if (W(this.provider) || !Object.values(Je).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                this.type = tt;
                                break;
                            case"video":
                            case"audio":
                                this.type = n, this.provider = Je.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = fe.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ot(this), this.storage = new Ve(this), this.media.plyr = this, R(this.elements.container) || (this.elements.container = ee("div", {tabindex: 0}), Z(this.media, this.elements.container)), rt.migrateStyles.call(this), rt.addStyleHook.call(this), mt.setup.call(this), this.config.debug && ve.call(this, this.elements.container, this.config.events.join(" "), (e => {
                            this.debug.log(`event: ${e.type}`)
                        })), this.fullscreen = new nt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && rt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new gt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (() => Ce(this.play()))), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this))) : this.debug.error("Setup failed: no support")
                    }

                    get isHTML5() {
                        return this.provider === Je.html5
                    }

                    get isEmbed() {
                        return this.isYouTube || this.isVimeo
                    }

                    get isYouTube() {
                        return this.provider === Je.youtube
                    }

                    get isVimeo() {
                        return this.provider === Je.vimeo
                    }

                    get isVideo() {
                        return this.type === tt
                    }

                    get isAudio() {
                        return this.type === et
                    }

                    get playing() {
                        return Boolean(this.ready && !this.paused && !this.ended)
                    }

                    get paused() {
                        return Boolean(this.media.paused)
                    }

                    get stopped() {
                        return Boolean(this.paused && 0 === this.currentTime)
                    }

                    get ended() {
                        return Boolean(this.media.ended)
                    }

                    set currentTime(e) {
                        if (!this.duration) return;
                        const t = $(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
                    }

                    get currentTime() {
                        return Number(this.media.currentTime)
                    }

                    get buffered() {
                        const {buffered: e} = this.media;
                        return $(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                    }

                    get seeking() {
                        return Boolean(this.media.seeking)
                    }

                    get duration() {
                        const e = parseFloat(this.config.duration), t = (this.media || {}).duration,
                            i = $(t) && t !== 1 / 0 ? t : 0;
                        return e || i
                    }

                    set volume(e) {
                        let t = e;
                        F(t) && (t = Number(t)), $(t) || (t = this.storage.get("volume")), $(t) || ({volume: t} = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !W(e) && this.muted && t > 0 && (this.muted = !1)
                    }

                    get volume() {
                        return Number(this.media.volume)
                    }

                    set muted(e) {
                        let t = e;
                        D(t) || (t = this.storage.get("muted")), D(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                    }

                    get muted() {
                        return Boolean(this.media.muted)
                    }

                    get hasAudio() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                    }

                    set speed(e) {
                        let t = null;
                        $(e) && (t = e), $(t) || (t = this.storage.get("speed")), $(t) || (t = this.config.speed.selected);
                        const {minimumSpeed: i, maximumSpeed: s} = this;
                        t = vt(t, i, s), this.config.speed.selected = t, setTimeout((() => {
                            this.media && (this.media.playbackRate = t)
                        }), 0)
                    }

                    get speed() {
                        return Number(this.media.playbackRate)
                    }

                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
                    }

                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
                    }

                    set quality(e) {
                        const t = this.config.quality, i = this.options.quality;
                        if (!i.length) return;
                        let s = [!W(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find($),
                            n = !0;
                        if (!i.includes(s)) {
                            const e = Se(i, s);
                            this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, n = !1
                        }
                        t.selected = s, this.media.quality = s, n && this.storage.set({quality: s})
                    }

                    get quality() {
                        return this.media.quality
                    }

                    set loop(e) {
                        const t = D(e) ? e : this.config.loop.active;
                        this.config.loop.active = t, this.media.loop = t
                    }

                    get loop() {
                        return Boolean(this.media.loop)
                    }

                    set source(e) {
                        kt.change.call(this, e)
                    }

                    get source() {
                        return this.media.currentSrc
                    }

                    get download() {
                        const {download: e} = this.config.urls;
                        return G(e) ? e : this.source
                    }

                    set download(e) {
                        G(e) && (this.config.urls.download = e, We.setDownloadUrl.call(this))
                    }

                    set poster(e) {
                        this.isVideo ? rt.setPoster.call(this, e, !1).catch((() => {
                        })) : this.debug.warn("Poster can only be set for video")
                    }

                    get poster() {
                        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                    }

                    get ratio() {
                        if (!this.isVideo) return null;
                        const e = Le(Ae.call(this));
                        return j(e) ? e.join(":") : e
                    }

                    set ratio(e) {
                        this.isVideo ? F(e) && Me(e) ? (this.config.ratio = Le(e), Oe.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
                    }

                    set autoplay(e) {
                        this.config.autoplay = D(e) ? e : this.config.autoplay
                    }

                    get autoplay() {
                        return Boolean(this.config.autoplay)
                    }

                    toggleCaptions(e) {
                        Ye.toggle.call(this, e, !1)
                    }

                    set currentTrack(e) {
                        Ye.set.call(this, e, !1), Ye.setup.call(this)
                    }

                    get currentTrack() {
                        const {toggled: e, currentTrack: t} = this.captions;
                        return e ? t : -1
                    }

                    set language(e) {
                        Ye.setLanguage.call(this, e, !1)
                    }

                    get language() {
                        return (Ye.getCurrentTrack.call(this) || {}).language
                    }

                    set pip(e) {
                        if (!fe.pip) return;
                        const t = D(e) ? e : !this.pip;
                        N(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Qe : Ze), N(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }

                    get pip() {
                        return fe.pip ? W(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Qe : null
                    }

                    setPreviewThumbnails(e) {
                        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this))
                    }

                    static supported(e, t, i) {
                        return fe.check(e, t, i)
                    }

                    static loadSprite(e, t) {
                        return qe(e, t)
                    }

                    static setup(e, t = {}) {
                        let i = null;
                        return F(e) ? i = Array.from(document.querySelectorAll(e)) : B(e) ? i = Array.from(e) : j(e) && (i = e.filter(R)), W(i) ? null : i.map((e => new Tt(e, t)))
                    }
                }

                return Tt.defaults = (Ct = Xe, JSON.parse(JSON.stringify(Ct))), Tt;
                var Ct
            }())
        }
    }, t = {};

    function i(s) {
        var n = t[s];
        if (void 0 !== n) return n.exports;
        var a = t[s] = {exports: {}};
        return e[s].call(a.exports, a, a.exports, i), a.exports
    }

    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {a: t}), t
    }, i.d = (e, t) => {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {enumerable: !0, get: t[s]})
    }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        i(598);
        const e = () => {
            setTimeout((function () {
                if (!document.body.hasAttribute("data-body-scroll-fix")) {
                    let e = window.pageYOffset || document.documentElement.scrollTop;
                    document.body.setAttribute("data-body-scroll-fix", e), document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.top = "-" + e + "px", document.body.style.left = "0", document.body.style.width = "100%"
                }
            }), 15)
        }, t = () => {
            if (document.body.hasAttribute("data-body-scroll-fix")) {
                let e = document.body.getAttribute("data-body-scroll-fix");
                document.body.removeAttribute("data-body-scroll-fix"), document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.width = "", window.scroll(0, e)
            }
        };

        class s {
            constructor(e) {
                this.options = Object.assign({
                    isOpen: () => {
                    }, isClose: () => {
                    }
                }, e), this.modal = document.querySelector(".modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this.modals = document.querySelectorAll(".modal__container"), this._fixBlocks = document.querySelectorAll(".fix-block"), this.events()
            }

            events() {
                this.modal && (document.addEventListener("click", function (e) {
                    const t = e.target.closest("[data-modal-path]");
                    if (t) {
                        window.lastDetailID = t.dataset.detailId;
                        let e = t.dataset.modalPath, i = t.dataset.modalAnimation, s = t.dataset.modalSpeed;
                        return this.animation = i || "fade", this.speed = s ? parseInt(s) : 300, this._nextContainer = document.querySelector('[data-modal-target="'.concat(e, '"]')), void this.open()
                    }
                    e.target.closest(".js-modal-close") && this.close()
                }.bind(this)), window.addEventListener("keydown", function (e) {
                    27 == e.keyCode && this.isOpen && this.close(), 9 == e.which && this.isOpen && this.focusCatch(e)
                }.bind(this)), document.addEventListener("click", function (e) {
                    e.target.classList.contains("modal") && e.target.classList.contains("is-open") && this.close()
                }.bind(this)))
            }

            open(e) {
                var t;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.animation;
                if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
                if(this.modal.classList.contains('is-open')) return;
                var inAjaxThis = this;
                if(window.lastDetailID && this._nextContainer.dataset.modalTarget == 'work'){
                    BX.showWait();
                    BX.ajax({
                        url: '/local/ajax/components/our-works/ajax.php',
                        method: 'POST',
                        data: 'id='+window.lastDetailID,
                        dataType: 'html',
                        onsuccess: function (html) {
                            document.querySelector('[data-modal-target="work"]').innerHTML = html;
                            inAjaxThis.modalContainer = inAjaxThis._nextContainer, e && (inAjaxThis.modalContainer = document.querySelector('[data-modal-target="'.concat(e, '"]'))), null === (t = inAjaxThis.modalContainer) || void 0 === t || t.scrollTo(0, 0), inAjaxThis.modal.style.setProperty("--transition-time", "".concat(inAjaxThis.speed / 1e3, "s")), inAjaxThis.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", inAjaxThis.disableScroll(), inAjaxThis.modalContainer.classList.add("modal-open"), inAjaxThis.modalContainer.classList.add(i), setTimeout((() => {
                                inAjaxThis.options.isOpen(this), inAjaxThis.isOpen = !0, inAjaxThis.focusTrap()
                            }), inAjaxThis.speed);

                            document.querySelectorAll(".modal-slider").forEach((e => {
                                const t = e.querySelector(".modal-slider__main"), i = e.querySelector(".modal-slider__nav"),
                                    s = e.querySelector(".modal-slider__btn--prev"), n = e.querySelector(".modal-slider__btn--next"),
                                    a = new ee(i, {slidesPerView: "auto", spaceBetween: 6});
                                new ee(t, {
                                    modules: [ie, ae],
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                    navigation: {prevEl: s, nextEl: n},
                                    thumbs: {swiper: a}
                                })
                            }));
                            BX.closeWait();
                        },
                        onfailure: function (error) {
                            console.log(error);
                        },
                    });
                    this.modal.classList.add("is-open");
                } else if(window.lastDetailID && (this._nextContainer.dataset.modalTarget == 'video-review' || this._nextContainer.dataset.modalTarget == 'review')){
                    BX.showWait();
                    BX.ajax({
                        url: '/local/ajax/components/review/ajax.php',
                        method: 'POST',
                        data: 'id='+window.lastDetailID,
                        dataType: 'html',
                        onsuccess: function (html) {
                            document.querySelector('[data-modal-target="'+inAjaxThis._nextContainer.dataset.modalTarget+'"]').innerHTML = html;
                            inAjaxThis.modalContainer = inAjaxThis._nextContainer, e && (inAjaxThis.modalContainer = document.querySelector('[data-modal-target="'.concat(e, '"]'))), null === (t = inAjaxThis.modalContainer) || void 0 === t || t.scrollTo(0, 0), inAjaxThis.modal.style.setProperty("--transition-time", "".concat(inAjaxThis.speed / 1e3, "s")), inAjaxThis.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", inAjaxThis.disableScroll(), inAjaxThis.modalContainer.classList.add("modal-open"), inAjaxThis.modalContainer.classList.add(i), setTimeout((() => {
                                inAjaxThis.options.isOpen(this), inAjaxThis.isOpen = !0, inAjaxThis.focusTrap()
                            }), inAjaxThis.speed);

                            document.querySelectorAll(".modal-slider").forEach((e => {
                                const t = e.querySelector(".modal-slider__main"), i = e.querySelector(".modal-slider__nav"),
                                    s = e.querySelector(".modal-slider__btn--prev"), n = e.querySelector(".modal-slider__btn--next"),
                                    a = new ee(i, {slidesPerView: "auto", spaceBetween: 6});
                                new ee(t, {
                                    modules: [ie, ae],
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                    navigation: {prevEl: s, nextEl: n},
                                    thumbs: {swiper: a}
                                })
                            }));

                            const e1 = document.querySelectorAll(".player"), {options: qwe} = new s, i1 = [];
                            e1.forEach((e1 => {
                                const s = new (oe())(e1);
                                setTimeout((() => {
                                    s.poster = e1.dataset.poster
                                })),
                                i1.push(s),
                                qwe.isClose = () => i1.forEach((e1 => e1.pause()))
                            }))

                            BX.closeWait();
                        },
                        onfailure: function (error) {
                            console.log(error);
                        },
                    });
                    this.modal.classList.add("is-open");
                } else {
                    this.modalContainer = this._nextContainer, e && (this.modalContainer = document.querySelector('[data-modal-target="'.concat(e, '"]'))), null === (t = this.modalContainer) || void 0 === t || t.scrollTo(0, 0), this.modal.style.setProperty("--transition-time", "".concat(this.speed / 1e3, "s")), this.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(i), setTimeout((() => {
                        this.options.isOpen(this), this.isOpen = !0, this.focusTrap()
                    }), this.speed)
                }
            }

            close() {
                this.modalContainer && (this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.enableScroll(), this.modals.forEach((e => {
                    e.classList.remove("modal-open"), e.classList.remove(this.animation)
                })), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()))
            }

            focusCatch(e) {
                const t = this.modalContainer.querySelectorAll(this._focusElements), i = Array.prototype.slice.call(t),
                    s = i.indexOf(document.activeElement);
                e.shiftKey && 0 === s && (i[i.length - 1].focus(), e.preventDefault()), e.shiftKey || s !== i.length - 1 || (i[0].focus(), e.preventDefault())
            }

            focusTrap() {
                const e = this.modalContainer.querySelectorAll(this._focusElements);
                this.isOpen ? e.length && e[0].focus() : this.previousActiveElement.focus()
            }

            disableScroll() {
                document.querySelector(".menu--active") || e()
            }

            enableScroll() {
                document.querySelector(".menu--active") || t()
            }
        }

        new s;
        const n = {
            windowEl: window,
            documentEl: document,
            htmlEl: document.documentElement,
            bodyEl: document.body,
            errorMessage: "*?????? ???????? ?????????????????????? ?? ????????????????????"
        };
        let a = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250, i = !1, s = null, n = null;
            return function a() {
                for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
                if (i) return s = o, void (n = this);
                e.apply(this, o), i = !0, setTimeout((() => {
                    i = !1, n && (a.apply(n, s), n = null, s = null)
                }), t)
            }
        }((() => {
            let e = window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
        }));
        a(), window.addEventListener("resize", a), document.addEventListener("DOMContentLoaded", (() => {
            const i = document.querySelectorAll("[data-burger]"), s = document.querySelector("[data-menu]");
            null == i || i.forEach((i => {
                i.addEventListener("click", (i => {
                    null == s || s.classList.toggle("menu--active"), null != s && s.classList.contains("menu--active") ? e() : t()
                }))
            }))
        }));
        var r = i(382), o = i.n(r);

        function l(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function c(e = {}, t = {}) {
            Object.keys(t).forEach((i => {
                void 0 === e[i] ? e[i] = t[i] : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && c(e[i], t[i])
            }))
        }

        document.addEventListener("DOMContentLoaded", (() => {
            const e = document.querySelectorAll(".mask-input"), t = new (o())("+7 (999) 999-99-99");
            e.forEach((e => {
                t.mask(e)
            }))
        }));
        const d = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {
                }
            }),
            createElement: () => ({
                children: [], childNodes: [], style: {}, setAttribute() {
                }, getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function u() {
            const e = "undefined" != typeof document ? document : {};
            return c(e, d), e
        }

        const h = {
            document: d,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle: () => ({getPropertyValue: () => ""}),
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function p() {
            const e = "undefined" != typeof window ? window : {};
            return c(e, h), e
        }

        class f extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t, set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function m(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...m(e)) : t.push(e)
            })), t
        }

        function g(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function v(e, t) {
            const i = p(), s = u();
            let n = [];
            if (!t && e instanceof f) return e;
            if (!e) return new f(n);
            if ("string" == typeof e) {
                const i = e.trim();
                if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                    let e = "div";
                    0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                    const t = s.createElement(e);
                    t.innerHTML = i;
                    for (let e = 0; e < t.childNodes.length; e += 1) n.push(t.childNodes[e])
                } else n = function (e, t) {
                    if ("string" != typeof e) return [e];
                    const i = [], s = t.querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                    return i
                }(e.trim(), t || s)
            } else if (e.nodeType || e === i || e === s) n.push(e); else if (Array.isArray(e)) {
                if (e instanceof f) return e;
                n = e
            }
            return new f(function (e) {
                const t = [];
                for (let i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(n))
        }

        v.fn = f.prototype;
        const b = "resize scroll".split(" ");

        function y(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) b.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : v(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }

        y("click"), y("blur"), y("focus"), y("focusin"), y("focusout"), y("keyup"), y("keydown"), y("keypress"), y("submit"), y("change"), y("mousedown"), y("mousemove"), y("mouseup"), y("mouseenter"), y("mouseleave"), y("mouseout"), y("mouseover"), y("touchstart"), y("touchend"), y("touchmove"), y("resize"), y("scroll");
        const w = {
            addClass: function (...e) {
                const t = m(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            }, removeClass: function (...e) {
                const t = m(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            }, hasClass: function (...e) {
                const t = m(e.map((e => e.split(" "))));
                return g(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            }, toggleClass: function (...e) {
                const t = m(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            }, attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t); else for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                return this
            }, removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            }, transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            }, transition: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            }, on: function (...e) {
                let [t, i, s, n] = e;

                function a(e) {
                    const t = e.target;
                    if (!t) return;
                    const n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), v(t).is(i)) s.apply(t, n); else {
                        const e = v(t).parents();
                        for (let t = 0; t < e.length; t += 1) v(e[t]).is(i) && s.apply(e[t], n)
                    }
                }

                function r(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                }

                "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                const o = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (i) for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: a
                        }), t.addEventListener(e, a, n)
                    } else for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: s,
                            proxyListener: r
                        }), t.addEventListener(e, r, n)
                    }
                }
                return this
            }, off: function (...e) {
                let [t, i, s, n] = e;
                "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                const a = t.split(" ");
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const a = this[e];
                        let r;
                        if (!i && a.dom7Listeners ? r = a.dom7Listeners[t] : i && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]), r && r.length) for (let e = r.length - 1; e >= 0; e -= 1) {
                            const i = r[e];
                            s && i.listener === s || s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1)) : s || (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1))
                        }
                    }
                }
                return this
            }, trigger: function (...e) {
                const t = p(), i = e[0].split(" "), s = e[1];
                for (let n = 0; n < i.length; n += 1) {
                    const a = i[n];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i];
                        if (t.CustomEvent) {
                            const i = new t.CustomEvent(a, {detail: s, bubbles: !0, cancelable: !0});
                            n.dom7EventData = e.filter(((e, t) => t > 0)), n.dispatchEvent(i), n.dom7EventData = [], delete n.dom7EventData
                        }
                    }
                }
                return this
            }, transitionEnd: function (e) {
                const t = this;
                return e && t.on("transitionend", (function i(s) {
                    s.target === this && (e.call(this, s), t.off("transitionend", i))
                })), this
            }, outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            }, outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            }, styles: function () {
                const e = p();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            }, offset: function () {
                if (this.length > 0) {
                    const e = p(), t = u(), i = this[0], s = i.getBoundingClientRect(), n = t.body,
                        a = i.clientTop || n.clientTop || 0, r = i.clientLeft || n.clientLeft || 0,
                        o = i === e ? e.scrollY : i.scrollTop, l = i === e ? e.scrollX : i.scrollLeft;
                    return {top: s.top + o - a, left: s.left + l - r}
                }
                return null
            }, css: function (e, t) {
                const i = p();
                let s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1) for (const t in e) this[s].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this
                }
                return this
            }, each: function (e) {
                return e ? (this.forEach(((t, i) => {
                    e.apply(t, [t, i])
                })), this) : this
            }, html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            }, text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            }, is: function (e) {
                const t = p(), i = u(), s = this[0];
                let n, a;
                if (!s || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (s.matches) return s.matches(e);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector) return s.msMatchesSelector(e);
                    for (n = v(e), a = 0; a < n.length; a += 1) if (n[a] === s) return !0;
                    return !1
                }
                if (e === i) return s === i;
                if (e === t) return s === t;
                if (e.nodeType || e instanceof f) {
                    for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1) if (n[a] === s) return !0;
                    return !1
                }
                return !1
            }, index: function () {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            }, eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return v([]);
                if (e < 0) {
                    const i = t + e;
                    return v(i < 0 ? [] : [this[i]])
                }
                return v([this[e]])
            }, append: function (...e) {
                let t;
                const i = u();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                        const s = i.createElement("div");
                        for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                    } else if (t instanceof f) for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]); else this[e].appendChild(t)
                }
                return this
            }, prepend: function (e) {
                const t = u();
                let i, s;
                for (i = 0; i < this.length; i += 1) if ("string" == typeof e) {
                    const n = t.createElement("div");
                    for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(n.childNodes[s], this[i].childNodes[0])
                } else if (e instanceof f) for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]); else this[i].insertBefore(e, this[i].childNodes[0]);
                return this
            }, next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e) ? v([this[0].nextElementSibling]) : v([]) : this[0].nextElementSibling ? v([this[0].nextElementSibling]) : v([]) : v([])
            }, nextAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return v([]);
                for (; i.nextElementSibling;) {
                    const s = i.nextElementSibling;
                    e ? v(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return v(t)
            }, prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && v(t.previousElementSibling).is(e) ? v([t.previousElementSibling]) : v([]) : t.previousElementSibling ? v([t.previousElementSibling]) : v([])
                }
                return v([])
            }, prevAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return v([]);
                for (; i.previousElementSibling;) {
                    const s = i.previousElementSibling;
                    e ? v(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return v(t)
            }, parent: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? v(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return v(t)
            }, parents: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s;) e ? v(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                }
                return v(t)
            }, closest: function (e) {
                let t = this;
                return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            }, find: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) t.push(s[e])
                }
                return v(t)
            }, children: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].children;
                    for (let i = 0; i < s.length; i += 1) e && !v(s[i]).is(e) || t.push(s[i])
                }
                return v(t)
            }, filter: function (e) {
                return v(g(this, e))
            }, remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(w).forEach((e => {
            Object.defineProperty(v.fn, e, {value: w[e], writable: !0})
        }));
        const k = v;

        function T(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function C() {
            return Date.now()
        }

        function E(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function S(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
        }

        function x() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != s && !S(s)) {
                    const i = Object.keys(Object(s)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, n = i.length; t < n; t += 1) {
                        const n = i[t], a = Object.getOwnPropertyDescriptor(s, n);
                        void 0 !== a && a.enumerable && (E(e[n]) && E(s[n]) ? s[n].__swiper__ ? e[n] = s[n] : x(e[n], s[n]) : !E(e[n]) && E(s[n]) ? (e[n] = {}, s[n].__swiper__ ? e[n] = s[n] : x(e[n], s[n])) : e[n] = s[n])
                    }
                }
            }
            return e
        }

        function P(e, t, i) {
            e.style.setProperty(t, i)
        }

        function M(e) {
            let {swiper: t, targetPosition: i, side: s} = e;
            const n = p(), a = -t.translate;
            let r, o = null;
            const l = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
            const c = i > a ? "next" : "prev", d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    r = (new Date).getTime(), null === o && (o = r);
                    const e = Math.max(Math.min((r - o) / l, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
                    let h = a + c * (i - a);
                    if (d(h, i) && (h = i), t.wrapperEl.scrollTo({[s]: h}), d(h, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[s]: h})
                    })), void n.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = n.requestAnimationFrame(u)
                };
            u()
        }

        let L, A, O;

        function _() {
            return L || (L = function () {
                const e = p(), t = u();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function () {
                        let t = !1;
                        try {
                            const i = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (e) {
                        }
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), L
        }

        const I = {
            on(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;
                const n = i ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
                })), s
            }, once(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;

                function n() {
                    s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                    for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    t.apply(s, a)
                }

                return n.__emitterProxy = t, s.on(e, n, i)
            }, onAny(e, t) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;
                const s = t ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
            }, off(e, t) {
                const i = this;
                return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, n) => {
                        (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                    }))
                })), i) : i
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, i, s;
                for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], i = a.slice(1, a.length), s = e) : (t = a[0].events, i = a[0].data, s = a[0].context || e), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(s, [t, ...i])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(s, i)
                    }))
                })), e
            }
        }, $ = {
            updateSize: function () {
                const e = this;
                let t, i;
                const s = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function i(e, i) {
                    return parseFloat(e.getPropertyValue(t(i)) || 0)
                }

                const s = e.params, {$wrapperEl: n, size: a, rtlTranslate: r, wrongRTL: o} = e,
                    l = e.virtual && s.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                    d = n.children(`.${e.params.slideClass}`), u = l ? e.virtual.slides.length : d.length;
                let h = [];
                const p = [], f = [];
                let m = s.slidesOffsetBefore;
                "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                let g = s.slidesOffsetAfter;
                "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length, b = e.slidesGrid.length;
                let y = s.spaceBetween, w = -m, k = 0, T = 0;
                if (void 0 === a) return;
                "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * a), e.virtualSize = -y, r ? d.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), s.centeredSlides && s.cssMode && (P(e.wrapperEl, "--swiper-centered-offset-before", ""), P(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = s.grid && s.grid.rows > 1 && e.grid;
                let E;
                C && e.grid.initSlides(u);
                const S = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                for (let n = 0; n < u; n += 1) {
                    E = 0;
                    const r = d.eq(n);
                    if (C && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display")) {
                        if ("auto" === s.slidesPerView) {
                            S && (d[n].style[t("width")] = "");
                            const a = getComputedStyle(r[0]), o = r[0].style.transform, l = r[0].style.webkitTransform;
                            if (o && (r[0].style.transform = "none"), l && (r[0].style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0); else {
                                const e = i(a, "width"), t = i(a, "padding-left"), s = i(a, "padding-right"),
                                    n = i(a, "margin-left"), o = i(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) E = e + n + o; else {
                                    const {clientWidth: i, offsetWidth: a} = r[0];
                                    E = e + t + s + n + o + (a - i)
                                }
                            }
                            o && (r[0].style.transform = o), l && (r[0].style.webkitTransform = l), s.roundLengths && (E = Math.floor(E))
                        } else E = (a - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), d[n] && (d[n].style[t("width")] = `${E}px`);
                        d[n] && (d[n].swiperSlideSize = E), f.push(E), s.centeredSlides ? (w = w + E / 2 + k / 2 + y, 0 === k && 0 !== n && (w = w - a / 2 - y), 0 === n && (w = w - a / 2 - y), Math.abs(w) < .001 && (w = 0), s.roundLengths && (w = Math.floor(w)), T % s.slidesPerGroup == 0 && h.push(w), p.push(w)) : (s.roundLengths && (w = Math.floor(w)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && h.push(w), p.push(w), w = w + E + y), e.virtualSize += E + y, k = E, T += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + g, r && o && ("slide" === s.effect || "coverflow" === s.effect) && n.css({width: `${e.virtualSize + s.spaceBetween}px`}), s.setWrapperSize && n.css({[t("width")]: `${e.virtualSize + s.spaceBetween}px`}), C && e.grid.updateWrapperSize(E, h, t), !s.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < h.length; i += 1) {
                        let n = h[i];
                        s.roundLengths && (n = Math.floor(n)), h[i] <= e.virtualSize - a && t.push(n)
                    }
                    h = t, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a)
                }
                if (0 === h.length && (h = [0]), 0 !== s.spaceBetween) {
                    const i = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                    d.filter(((e, t) => !s.cssMode || t !== d.length - 1)).css({[i]: `${y}px`})
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (s.spaceBetween ? s.spaceBetween : 0)
                    })), e -= s.spaceBetween;
                    const t = e - a;
                    h = h.map((e => e < 0 ? -m : e > t ? t + g : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach((t => {
                        e += t + (s.spaceBetween ? s.spaceBetween : 0)
                    })), e -= s.spaceBetween, e < a) {
                        const t = (a - e) / 2;
                        h.forEach(((e, i) => {
                            h[i] = e - t
                        })), p.forEach(((e, i) => {
                            p[i] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: d,
                    snapGrid: h,
                    slidesGrid: p,
                    slidesSizesGrid: f
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    P(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"), P(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], i = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                }
                if (u !== c && e.emit("slidesLengthChange"), h.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`, i = e.$el.hasClass(t);
                    u <= s.maxBackfaceHiddenSlides ? i || e.$el.addClass(t) : i && e.$el.removeClass(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, i = [], s = t.virtual && t.params.virtual.enabled;
                let n, a = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const r = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || k([])).each((e => {
                    i.push(e)
                })); else for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length && !s) break;
                    i.push(r(e))
                } else i.push(r(t.activeIndex));
                for (n = 0; n < i.length; n += 1) if (void 0 !== i[n]) {
                    const e = i[n].offsetHeight;
                    a = e > a ? e : a
                }
                (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, i = t.params, {slides: s, rtlTranslate: n, snapGrid: a} = t;
                if (0 === s.length) return;
                void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                let r = -e;
                n && (r = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < s.length; e += 1) {
                    const o = s[e];
                    let l = o.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
                    const c = (r + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
                        d = (r - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
                        u = -(r - l), h = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass)), o.progress = n ? -c : c, o.originalProgress = n ? -d : d
                }
                t.visibleSlides = k(t.visibleSlides)
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params, s = t.maxTranslate() - t.minTranslate();
                let {progress: n, isBeginning: a, isEnd: r} = t;
                const o = a, l = r;
                0 === s ? (n = 0, a = !0, r = !0) : (n = (e - t.minTranslate()) / s, a = n <= 0, r = n >= 1), Object.assign(t, {
                    progress: n,
                    isBeginning: a,
                    isEnd: r
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: i, $wrapperEl: s, activeIndex: n, realIndex: a} = e,
                    r = e.virtual && i.virtual.enabled;
                let o;
                t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), o = r ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), o.addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass));
                let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = t.eq(0), l.addClass(i.slideNextClass));
                let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === c.length && (c = t.eq(-1), c.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this,
                    i = t.rtlTranslate ? t.translate : -t.translate, {slidesGrid: s, snapGrid: n, params: a, activeIndex: r, realIndex: o, snapIndex: l} = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : i >= s[e] && i < s[e + 1] && (d = e + 1) : i >= s[e] && (d = e);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (n.indexOf(i) >= 0) c = n.indexOf(i); else {
                    const e = Math.min(a.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / a.slidesPerGroup)
                }
                if (c >= n.length && (c = n.length - 1), d === r) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: u,
                    previousIndex: r,
                    activeIndex: d
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }, updateClickedSlide: function (e) {
                const t = this, i = t.params, s = k(e).closest(`.${i.slideClass}`)[0];
                let n, a = !1;
                if (s) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === s) {
                    a = !0, n = e;
                    break
                }
                if (!s || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(k(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };

        function F(e) {
            let {swiper: t, runCallbacks: i, direction: s, step: n} = e;
            const {activeIndex: a, previousIndex: r} = t;
            let o = s;
            if (o || (o = a > r ? "next" : a < r ? "prev" : "reset"), t.emit(`transition${n}`), i && a !== r) {
                if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
                t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
            }
        }

        const D = {
            slideTo: function (e, t, i, s, n) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let r = e;
                r < 0 && (r = 0);
                const {params: o, snapGrid: l, slidesGrid: c, previousIndex: d, activeIndex: u, rtlTranslate: h, wrapperEl: p, enabled: f} = a;
                if (a.animating && o.preventInteractionOnTransition || !f && !s && !n) return !1;
                const m = Math.min(a.params.slidesPerGroupSkip, r);
                let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1), (u || o.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                const v = -l[g];
                if (a.updateProgress(v), o.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v), i = Math.floor(100 * c[e]), s = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? r = e : t >= i && t < s && (r = e + 1) : t >= i && (r = e)
                }
                if (a.initialized && r !== u) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (u || 0) !== r) return !1
                }
                let b;
                if (b = r > u ? "next" : r < u ? "prev" : "reset", h && -v === a.translate || !h && v === a.translate) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(v), "reset" !== b && (a.transitionStart(i, b), a.transitionEnd(i, b)), !1;
                if (o.cssMode) {
                    const e = a.isHorizontal(), i = h ? v : -v;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                        }))
                    } else {
                        if (!a.support.smoothScroll) return M({
                            swiper: a,
                            targetPosition: i,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({[e ? "left" : "top"]: i, behavior: "smooth"})
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, b), 0 === t ? a.transitionEnd(i, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, b))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, i, s) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const n = this;
                let a = e;
                return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, s)
            }, slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this, {animating: n, enabled: a, params: r} = s;
                if (!a) return s;
                let o = r.slidesPerGroup;
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o;
                if (r.loop) {
                    if (n && r.loopPreventsSlide) return !1;
                    s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                }
                return r.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i)
            }, slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this, {params: n, animating: a, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: c} = s;
                if (!c) return s;
                if (n.loop) {
                    if (a && n.loopPreventsSlide) return !1;
                    s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const u = d(l ? s.translate : -s.translate), h = r.map((e => d(e)));
                let p = r[h.indexOf(u) - 1];
                if (void 0 === p && n.cssMode) {
                    let e;
                    r.forEach(((t, i) => {
                        u >= t && (e = i)
                    })), void 0 !== e && (p = r[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== p && (f = o.indexOf(p), f < 0 && (f = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (f = f - s.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), n.rewind && s.isBeginning) {
                    const n = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(n, e, t, i)
                }
                return s.slideTo(f, e, t, i)
            }, slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            }, slideToClosest: function (e, t, i, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                const n = this;
                let a = n.activeIndex;
                const r = Math.min(n.params.slidesPerGroupSkip, a),
                    o = r + Math.floor((a - r) / n.params.slidesPerGroup),
                    l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[o]) {
                    const e = n.snapGrid[o];
                    l - e > (n.snapGrid[o + 1] - e) * s && (a += n.params.slidesPerGroup)
                } else {
                    const e = n.snapGrid[o - 1];
                    l - e <= (n.snapGrid[o] - e) * s && (a -= n.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, i)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, $wrapperEl: i} = e,
                    s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, a = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    n = parseInt(k(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), T((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), T((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a)
                } else e.slideTo(a)
            }
        };

        function N(e) {
            const t = this, i = u(), s = p(), n = t.touchEventsData, {params: a, touches: r, enabled: o} = t;
            if (!o) return;
            if (t.animating && a.preventInteractionOnTransition) return;
            !t.animating && a.cssMode && a.loop && t.loopFix();
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            let c = k(l.target);
            if ("wrapper" === a.touchEventsTarget && !c.closest(t.wrapperEl).length) return;
            if (n.isTouchEvent = "touchstart" === l.type, !n.isTouchEvent && "which" in l && 3 === l.which) return;
            if (!n.isTouchEvent && "button" in l && l.button > 0) return;
            if (n.isTouched && n.isMoved) return;
            a.noSwipingClass && "" !== a.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (c = k(e.path[0]));
            const d = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                h = !(!l.target || !l.target.shadowRoot);
            if (a.noSwiping && (h ? function (e, t) {
                return void 0 === t && (t = this), function t(i) {
                    if (!i || i === u() || i === p()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    const s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(d, c[0]) : c.closest(d)[0])) return void (t.allowClick = !0);
            if (a.swipeHandler && !c.closest(a.swipeHandler)[0]) return;
            r.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, r.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
            const f = r.currentX, m = r.currentY, g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                v = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
            if (g && (f <= v || f >= s.innerWidth - v)) {
                if ("prevent" !== g) return;
                e.preventDefault()
            }
            if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), r.startX = f, r.startY = m, n.touchStartTime = C(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== l.type) {
                let e = !0;
                c.is(n.focusableElements) && (e = !1, "SELECT" === c[0].nodeName && (n.isTouched = !1)), i.activeElement && k(i.activeElement).is(n.focusableElements) && i.activeElement !== c[0] && i.activeElement.blur();
                const s = e && t.allowTouchMove && a.touchStartPreventDefault;
                !a.touchStartForcePreventDefault && !s || c[0].isContentEditable || l.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
        }

        function j(e) {
            const t = u(), i = this, s = i.touchEventsData, {params: n, touches: a, rtlTranslate: r, enabled: o} = i;
            if (!o) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l));
            if (s.isTouchEvent && "touchmove" !== l.type) return;
            const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                d = "touchmove" === l.type ? c.pageX : l.pageX, h = "touchmove" === l.type ? c.pageY : l.pageY;
            if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
            if (!i.allowTouchMove) return k(l.target).is(s.focusableElements) || (i.allowClick = !1), void (s.isTouched && (Object.assign(a, {
                startX: d,
                startY: h,
                currentX: d,
                currentY: h
            }), s.touchStartTime = C()));
            if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (i.isVertical()) {
                if (h < a.startY && i.translate <= i.maxTranslate() || h > a.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1)
            } else if (d < a.startX && i.translate <= i.maxTranslate() || d > a.startX && i.translate >= i.minTranslate()) return;
            if (s.isTouchEvent && t.activeElement && l.target === t.activeElement && k(l.target).is(s.focusableElements)) return s.isMoved = !0, void (i.allowClick = !1);
            if (s.allowTouchCallbacks && i.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
            a.currentX = d, a.currentY = h;
            const p = a.currentX - a.startX, f = a.currentY - a.startY;
            if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let e;
                i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : p * p + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", l), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) return void (s.isTouched = !1);
            if (!s.startMoving) return;
            i.allowClick = !1, !n.cssMode && l.cancelable && l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation(), s.isMoved || (n.loop && !n.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !n.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), s.isMoved = !0;
            let m = i.isHorizontal() ? p : f;
            a.diff = m, m *= n.touchRatio, r && (m = -m), i.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
            let g = !0, v = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (v = 0), m > 0 && s.currentTranslate > i.minTranslate() ? (g = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** v)) : m < 0 && s.currentTranslate < i.maxTranslate() && (g = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** v)), g && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), n.threshold > 0) {
                if (!(Math.abs(m) > n.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
        }

        function B(e) {
            const t = this,
                i = t.touchEventsData, {params: s, touches: n, rtlTranslate: a, slidesGrid: r, enabled: o} = t;
            if (!o) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = C(), d = c - i.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (i.lastClickTime = C(), T((() => {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
            let u;
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.cssMode) return;
            if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: u});
            let h = 0, p = t.slidesSizesGrid[0];
            for (let e = 0; e < r.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== r[e + t] ? u >= r[e] && u < r[e + t] && (h = e, p = r[e + t] - r[e]) : u >= r[e] && (h = e, p = r[r.length - 1] - r[r.length - 2])
            }
            let f = null, m = null;
            s.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
            const g = (u - r[h]) / p, v = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (d > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (g >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? f : h + v) : t.slideTo(h)), "prev" === t.swipeDirection && (g > 1 - s.longSwipesRatio ? t.slideTo(h + v) : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio ? t.slideTo(m) : t.slideTo(h))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : h)) : l.target === t.navigation.nextEl ? t.slideTo(h + v) : t.slideTo(h)
            }
        }

        function R() {
            const e = this, {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: s, allowSlidePrev: n, snapGrid: a} = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function V(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function H() {
            const e = this, {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
            if (!s) return;
            let n;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const a = e.maxTranslate() - e.minTranslate();
            n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        let q = !1;

        function z() {
        }

        const G = (e, t) => {
            const i = u(), {params: s, touchEvents: n, el: a, wrapperEl: r, device: o, support: l} = e, c = !!s.nested,
                d = "on" === t ? "addEventListener" : "removeEventListener", h = t;
            if (l.touch) {
                const t = !("touchstart" !== n.start || !l.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                a[d](n.start, e.onTouchStart, t), a[d](n.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: c
                } : c), a[d](n.end, e.onTouchEnd, t), n.cancel && a[d](n.cancel, e.onTouchEnd, t)
            } else a[d](n.start, e.onTouchStart, !1), i[d](n.move, e.onTouchMove, c), i[d](n.end, e.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) && a[d]("click", e.onClick, !0), s.cssMode && r[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[h](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", R, !0) : e[h]("observerUpdate", R, !0)
        }, W = {
            attachEvents: function () {
                const e = this, t = u(), {params: i, support: s} = e;
                e.onTouchStart = N.bind(e), e.onTouchMove = j.bind(e), e.onTouchEnd = B.bind(e), i.cssMode && (e.onScroll = H.bind(e)), e.onClick = V.bind(e), s.touch && !q && (t.addEventListener("touchstart", z), q = !0), G(e, "on")
            }, detachEvents: function () {
                G(this, "off")
            }
        }, U = (e, t) => e.grid && t.grid && t.grid.rows > 1, K = {
            addClasses: function () {
                const e = this, {classNames: t, params: i, rtl: s, $el: n, device: a, support: r} = e,
                    o = function (e, t) {
                        const i = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((s => {
                                e[s] && i.push(t + s)
                            })) : "string" == typeof e && i.push(t + e)
                        })), i
                    }(["initialized", i.direction, {"pointer-events": !r.touch}, {"free-mode": e.params.freeMode && i.freeMode.enabled}, {autoheight: i.autoHeight}, {rtl: s}, {grid: i.grid && i.grid.rows > 1}, {"grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill}, {android: a.android}, {ios: a.ios}, {"css-mode": i.cssMode}, {centered: i.cssMode && i.centeredSlides}, {"watch-progress": i.watchSlidesProgress}], i.containerModifierClass);
                t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses()
            }, removeClasses: function () {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        }, Y = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function X(e, t) {
            return function (i) {
                void 0 === i && (i = {});
                const s = Object.keys(i)[0], n = i[s];
                "object" == typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {auto: !0}), s in e && "enabled" in n ? (!0 === e[s] && (e[s] = {enabled: !0}), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {enabled: !1}), x(t, i)) : x(t, i)) : x(t, i)
            }
        }

        const Q = {
            eventsEmitter: I, update: $, translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {params: t, rtlTranslate: i, translate: s, $wrapperEl: n} = this;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    let a = function (e, t) {
                        void 0 === t && (t = "x");
                        const i = p();
                        let s, n, a;
                        const r = function (e) {
                            const t = p();
                            let i;
                            return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
                        }(e);
                        return i.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = a.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (n = i.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
                    }(n[0], e);
                    return i && (a = -a), a || 0
                }, setTranslate: function (e, t) {
                    const i = this, {rtlTranslate: s, params: n, $wrapperEl: a, wrapperEl: r, progress: o} = i;
                    let l, c = 0, d = 0;
                    i.isHorizontal() ? c = s ? -e : e : d = e, n.roundLengths && (c = Math.floor(c), d = Math.floor(d)), n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -c : -d : n.virtualTranslate || a.transform(`translate3d(${c}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? c : d;
                    const u = i.maxTranslate() - i.minTranslate();
                    l = 0 === u ? 0 : (e - i.minTranslate()) / u, l !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e, t, i, s, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    const a = this, {params: r, wrapperEl: o} = a;
                    if (a.animating && r.preventInteractionOnTransition) return !1;
                    const l = a.minTranslate(), c = a.maxTranslate();
                    let d;
                    if (d = s && e > l ? l : s && e < c ? c : e, a.updateProgress(d), r.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d; else {
                            if (!a.support.smoothScroll) return M({
                                swiper: a,
                                targetPosition: -d,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({[e ? "left" : "top"]: -d, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(d), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(d), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    const i = this;
                    i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const i = this, {params: s} = i;
                    s.cssMode || (s.autoHeight && i.updateAutoHeight(), F({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const i = this, {params: s} = i;
                    i.animating = !1, s.cssMode || (i.setTransition(0), F({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: D, loop: {
                loopCreate: function () {
                    const e = this, t = u(), {params: i, $wrapperEl: s} = e,
                        n = s.children().length > 0 ? k(s.children()[0].parentNode) : s;
                    n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                    let a = n.children(`.${i.slideClass}`);
                    if (i.loopFillGroupWithBlank) {
                        const e = i.slidesPerGroup - a.length % i.slidesPerGroup;
                        if (e !== i.slidesPerGroup) {
                            for (let s = 0; s < e; s += 1) {
                                const e = k(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                n.append(e)
                            }
                            a = n.children(`.${i.slideClass}`)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                    const r = [], o = [];
                    a.each(((e, t) => {
                        k(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let t = 0; t < e.loopedSlides; t += 1) {
                        const e = t - Math.floor(t / a.length) * a.length;
                        o.push(a.eq(e)[0]), r.unshift(a.eq(a.length - e - 1)[0])
                    }
                    for (let e = 0; e < o.length; e += 1) n.append(k(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (let e = r.length - 1; e >= 0; e -= 1) n.prepend(k(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
                }, loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {activeIndex: t, slides: i, loopedSlides: s, allowSlidePrev: n, allowSlideNext: a, snapGrid: r, rtlTranslate: o} = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -r[t] - e.getTranslate();
                    t < s ? (l = i.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= i.length - s && (l = -i.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = a, e.emit("loopFix")
                }, loopDestroy: function () {
                    const {$wrapperEl: e, params: t, slides: i} = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                }
            }, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab"
                }, unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            }, events: W, breakpoints: {
                setBreakpoint: function () {
                    const e = this, {activeIndex: t, initialized: i, loopedSlides: s = 0, params: n, $el: a} = e,
                        r = n.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in r ? r[o] : void 0) || e.originalParams, c = U(e, n), d = U(e, l), u = n.enabled;
                    c && !d ? (a.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (a.addClass(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && a.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const i = n[t] && n[t].enabled, s = l[t] && l[t].enabled;
                        i && !s && e[t].disable(), !i && s && e[t].enable()
                    }));
                    const h = l.direction && l.direction !== n.direction,
                        p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
                    h && i && e.changeDirection(), x(e.params, l);
                    const f = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), p && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                }, getBreakpoint: function (e, t, i) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                    let s = !1;
                    const n = p(), a = "window" === t ? n.innerHeight : i.clientHeight, r = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {value: a * t, point: e}
                        }
                        return {value: e, point: e}
                    }));
                    r.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < r.length; e += 1) {
                        const {point: a, value: o} = r[e];
                        "window" === t ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = a) : o <= i.clientWidth && (s = a)
                    }
                    return s || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: i} = e, {slidesOffsetBefore: s} = i;
                    if (s) {
                        const t = e.slides.length - 1, i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                        e.isLocked = e.size > i
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: K, images: {
                loadImage: function (e, t, i, s, n, a) {
                    const r = p();
                    let o;

                    function l() {
                        a && a()
                    }

                    k(e).parent("picture")[0] || e.complete && n ? l() : t ? (o = new r.Image, o.onload = l, o.onerror = l, s && (o.sizes = s), i && (o.srcset = i), t && (o.src = t)) : l()
                }, preloadImages: function () {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        const s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, Z = {};

        class J {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = x({}, t), e && !t.el && (t.el = e), t.el && k(t.el).length > 1) {
                    const e = [];
                    return k(t.el).each((i => {
                        const s = x({}, t, {el: i});
                        e.push(new J(s))
                    })), e
                }
                const a = this;
                var r;
                a.__swiper__ = !0, a.support = _(), a.device = (void 0 === (r = {userAgent: t.userAgent}) && (r = {}), A || (A = function (e) {
                    let {userAgent: t} = void 0 === e ? {} : e;
                    const i = _(), s = p(), n = s.navigator.platform, a = t || s.navigator.userAgent,
                        r = {ios: !1, android: !1}, o = s.screen.width, l = s.screen.height,
                        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let d = a.match(/(iPad).*OS\s([\d_]+)/);
                    const u = a.match(/(iPod)(.*OS\s([\d_]+))?/), h = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === n;
                    let m = "MacIntel" === n;
                    return !d && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (d = a.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), c && !f && (r.os = "android", r.android = !0), (d || h || u) && (r.os = "ios", r.ios = !0), r
                }(r)), A), a.browser = (O || (O = function () {
                    const e = p();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), O), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                const o = {};
                a.modules.forEach((e => {
                    e({
                        swiper: a,
                        extendParams: X(t, o),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a)
                    })
                }));
                const l = x({}, Y, o);
                return a.params = x({}, l, Z, t), a.originalParams = x({}, a.params), a.passedParams = x({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                    a.on(e, a.params.on[e])
                })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = k, Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: k(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === a.params.direction,
                    isVertical: () => "vertical" === a.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEvents: function () {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return a.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, a.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: C(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.emit("_swiper"), a.params.init && a.init(), a
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const i = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = i.minTranslate(), n = (i.maxTranslate() - s) * e + s;
                i.translateTo(n, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((i => {
                    const s = e.getSlideClasses(i);
                    t.push({slideEl: i, classNames: s}), e.emit("_slideClass", i, s)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: i, slides: s, slidesGrid: n, slidesSizesGrid: a, size: r, activeIndex: o} = this;
                let l = 1;
                if (i.centeredSlides) {
                    let e, t = s[o].swiperSlideSize;
                    for (let i = o + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > r && (e = !0));
                    for (let i = o - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > r && (e = !0))
                } else if ("current" === e) for (let e = o + 1; e < s.length; e += 1) (t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < r && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: i} = e;

                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let n;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || s()), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const i = this, s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), i.emit("changeDirection"), t && i.update()), i
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const i = k(e || t.params.el);
                if (!(e = i[0])) return !1;
                e.swiper = t;
                const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let n = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = k(e.shadowRoot.querySelector(s()));
                        return t.children = e => i.children(e), t
                    }
                    return i.children ? i.children(s()) : k(i).children(s())
                })();
                if (0 === n.length && t.params.createElements) {
                    const e = u().createElement("div");
                    n = k(e), e.className = t.params.wrapperClass, i.append(e), i.children(`.${t.params.slideClass}`).each((e => {
                        n.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: n,
                    wrapperEl: n[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === n.css("display")
                }), !0
            }

            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const i = this, {params: s, $el: n, $wrapperEl: a, slides: r} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(i)), i.destroyed = !0), null
            }

            static extendDefaults(e) {
                x(Z, e)
            }

            static get extendedDefaults() {
                return Z
            }

            static get defaults() {
                return Y
            }

            static installModule(e) {
                J.prototype.__modules__ || (J.prototype.__modules__ = []);
                const t = J.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => J.installModule(e))), J) : (J.installModule(e), J)
            }
        }

        Object.keys(Q).forEach((e => {
            Object.keys(Q[e]).forEach((t => {
                J.prototype[t] = Q[e][t]
            }))
        })), J.use([function (e) {
            let {swiper: t, on: i, emit: s} = e;
            const n = p();
            let a = null, r = null;
            const o = () => {
                t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
            }, l = () => {
                t && !t.destroyed && t.initialized && s("orientationchange")
            };
            i("init", (() => {
                t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                    r = n.requestAnimationFrame((() => {
                        const {width: i, height: s} = t;
                        let n = i, a = s;
                        e.forEach((e => {
                            let {contentBoxSize: i, contentRect: s, target: r} = e;
                            r && r !== t.el || (n = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize)
                        })), n === i && a === s || o()
                    }))
                })), a.observe(t.el)) : (n.addEventListener("resize", o), n.addEventListener("orientationchange", l))
            })), i("destroy", (() => {
                r && n.cancelAnimationFrame(r), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", l)
            }))
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e;
            const a = [], r = p(), o = function (e, t) {
                void 0 === t && (t = {});
                const i = new (r.MutationObserver || r.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                        n("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                }));
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.push(i)
            };
            i({observer: !1, observeParents: !1, observeSlideChildren: !1}), s("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = t.$el.parents();
                        for (let t = 0; t < e.length; t += 1) o(e[t])
                    }
                    o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
                }
            })), s("destroy", (() => {
                a.forEach((e => {
                    e.disconnect()
                })), a.splice(0, a.length)
            }))
        }]);
        const ee = J;

        function te(e, t, i, s) {
            const n = u();
            return e.params.createElements && Object.keys(s).forEach((a => {
                if (!i[a] && !0 === i.auto) {
                    let r = e.$el.children(`.${s[a]}`)[0];
                    r || (r = n.createElement("div"), r.className = s[a], e.$el.append(r)), i[a] = r, t[a] = r
                }
            })), i
        }

        function ie(e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e;

            function a(e) {
                let i;
                return e && (i = k(e), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i
            }

            function r(e, i) {
                const s = t.params.navigation;
                e && e.length > 0 && (e[i ? "addClass" : "removeClass"](s.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](s.lockClass))
            }

            function o() {
                if (t.params.loop) return;
                const {$nextEl: e, $prevEl: i} = t.navigation;
                r(i, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"))
            }

            function c(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"))
            }

            function d() {
                const e = t.params.navigation;
                if (t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                const i = a(e.nextEl), s = a(e.prevEl);
                i && i.length > 0 && i.on("click", c), s && s.length > 0 && s.on("click", l), Object.assign(t.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                }), t.enabled || (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass))
            }

            function u() {
                const {$nextEl: e, $prevEl: i} = t.navigation;
                e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(t.params.navigation.disabledClass))
            }

            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, s("init", (() => {
                !1 === t.params.navigation.enabled ? h() : (d(), o())
            })), s("toEdge fromEdge lock unlock", (() => {
                o()
            })), s("destroy", (() => {
                u()
            })), s("enable disable", (() => {
                const {$nextEl: e, $prevEl: i} = t.navigation;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
            })), s("click", ((e, i) => {
                const {$nextEl: s, $prevEl: a} = t.navigation, r = i.target;
                if (t.params.navigation.hideOnClick && !k(r).is(a) && !k(r).is(s)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                    let e;
                    s ? e = s.hasClass(t.params.navigation.hiddenClass) : a && (e = a.hasClass(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), s && s.toggleClass(t.params.navigation.hiddenClass), a && a.toggleClass(t.params.navigation.hiddenClass)
                }
            }));
            const h = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), d(), o()
                }, disable: h, update: o, init: d, destroy: u
            })
        }

        function se(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function ne(e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e;
            const a = u();
            let r, o, l, c, d = !1, h = null, p = null;

            function f() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e, rtlTranslate: i, progress: s} = t, {$dragEl: n, $el: a} = e,
                    r = t.params.scrollbar;
                let c = o, d = (l - o) * s;
                i ? (d = -d, d > 0 ? (c = o - d, d = 0) : -d + o > l && (c = l + d)) : d < 0 ? (c = o + d, d = 0) : d + o > l && (c = l - d), t.isHorizontal() ? (n.transform(`translate3d(${d}px, 0, 0)`), n[0].style.width = `${c}px`) : (n.transform(`translate3d(0px, ${d}px, 0)`), n[0].style.height = `${c}px`), r.hide && (clearTimeout(h), a[0].style.opacity = 1, h = setTimeout((() => {
                    a[0].style.opacity = 0, a.transition(400)
                }), 1e3))
            }

            function m() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e} = t, {$dragEl: i, $el: s} = e;
                i[0].style.width = "", i[0].style.height = "", l = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight, c = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? l * c : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i[0].style.width = `${o}px` : i[0].style.height = `${o}px`, s[0].style.display = c >= 1 ? "none" : "", t.params.scrollbar.hide && (s[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
            }

            function g(e) {
                return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            }

            function v(e) {
                const {scrollbar: i, rtlTranslate: s} = t, {$el: n} = i;
                let a;
                a = (g(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (null !== r ? r : o / 2)) / (l - o), a = Math.max(Math.min(a, 1), 0), s && (a = 1 - a);
                const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                t.updateProgress(c), t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function b(e) {
                const i = t.params.scrollbar, {scrollbar: s, $wrapperEl: a} = t, {$el: o, $dragEl: l} = s;
                d = !0, r = e.target === l[0] || e.target === l ? g(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), l.transition(100), v(e), clearTimeout(p), o.transition(0), i.hide && o.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), n("scrollbarDragStart", e)
            }

            function y(e) {
                const {scrollbar: i, $wrapperEl: s} = t, {$el: a, $dragEl: r} = i;
                d && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, v(e), s.transition(0), a.transition(0), r.transition(0), n("scrollbarDragMove", e))
            }

            function w(e) {
                const i = t.params.scrollbar, {scrollbar: s, $wrapperEl: a} = t, {$el: r} = s;
                d && (d = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), i.hide && (clearTimeout(p), p = T((() => {
                    r.css("opacity", 0), r.transition(400)
                }), 1e3)), n("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            }

            function C(e) {
                const {scrollbar: i, touchEventsTouch: s, touchEventsDesktop: n, params: r, support: o} = t, l = i.$el;
                if (!l) return;
                const c = l[0], d = !(!o.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                    u = !(!o.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
                if (!c) return;
                const h = "on" === e ? "addEventListener" : "removeEventListener";
                o.touch ? (c[h](s.start, b, d), c[h](s.move, y, d), c[h](s.end, w, u)) : (c[h](n.start, b, d), a[h](n.move, y, d), a[h](n.end, w, u))
            }

            function E() {
                const {scrollbar: e, $el: i} = t;
                t.params.scrollbar = te(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
                const s = t.params.scrollbar;
                if (!s.el) return;
                let n = k(s.el);
                t.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el)), n.addClass(t.isHorizontal() ? s.horizontalClass : s.verticalClass);
                let a = n.find(`.${t.params.scrollbar.dragClass}`);
                0 === a.length && (a = k(`<div class="${t.params.scrollbar.dragClass}"></div>`), n.append(a)), Object.assign(e, {
                    $el: n,
                    el: n[0],
                    $dragEl: a,
                    dragEl: a[0]
                }), s.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), n && n[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            }

            function S() {
                const e = t.params.scrollbar, i = t.scrollbar.$el;
                i && i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
            }

            i({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, s("init", (() => {
                !1 === t.params.scrollbar.enabled ? x() : (E(), m(), f())
            })), s("update resize observerUpdate lock unlock", (() => {
                m()
            })), s("setTranslate", (() => {
                f()
            })), s("setTransition", ((e, i) => {
                !function (e) {
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                }(i)
            })), s("enable disable", (() => {
                const {$el: e} = t.scrollbar;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            })), s("destroy", (() => {
                S()
            }));
            const x = () => {
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), S()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), E(), m(), f()
                }, disable: x, updateSize: m, setTranslate: f, init: E, destroy: S
            })
        }

        function ae(e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let n = !1, a = !1;

            function r() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const i = e.clickedIndex, s = e.clickedSlide;
                if (s && k(s).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == i) return;
                let n;
                if (n = e.params.loop ? parseInt(k(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
                    let e = t.activeIndex;
                    t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                    const i = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                        s = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                    n = void 0 === i ? s : void 0 === s ? i : s - e < e - i ? s : i
                }
                t.slideTo(n)
            }

            function o() {
                const {thumbs: e} = t.params;
                if (n) return !1;
                n = !0;
                const i = t.constructor;
                if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }); else if (E(e.swiper)) {
                    const s = Object.assign({}, e.swiper);
                    Object.assign(s, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new i(s), a = !0
                }
                return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", r), !0
            }

            function l(e) {
                const i = t.thumbs.swiper;
                if (!i || i.destroyed) return;
                const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                let n = 1;
                const a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), i.slides.removeClass(a), i.params.loop || i.params.virtual && i.params.virtual.enabled) for (let e = 0; e < n; e += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(a); else for (let e = 0; e < n; e += 1) i.slides.eq(t.realIndex + e).addClass(a);
                const r = t.params.thumbs.autoScrollOffset, o = r && !i.params.loop;
                if (t.realIndex !== i.realIndex || o) {
                    let n, a, l = i.activeIndex;
                    if (i.params.loop) {
                        i.slides.eq(l).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, l = i.activeIndex);
                        const e = i.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            s = i.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        n = void 0 === e ? s : void 0 === s ? e : s - l == l - e ? i.params.slidesPerGroup > 1 ? s : l : s - l < l - e ? s : e, a = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else n = t.realIndex, a = n > t.previousIndex ? "next" : "prev";
                    o && (n += "next" === a ? r : -1 * r), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = n > l ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > l && i.params.slidesPerGroup, i.slideTo(n, e ? 0 : void 0))
                }
            }

            t.thumbs = {swiper: null}, s("beforeInit", (() => {
                const {thumbs: e} = t.params;
                e && e.swiper && (o(), l(!0))
            })), s("slideChange update resize observerUpdate", (() => {
                l()
            })), s("setTransition", ((e, i) => {
                const s = t.thumbs.swiper;
                s && !s.destroyed && s.setTransition(i)
            })), s("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && a && e.destroy()
            })), Object.assign(t.thumbs, {init: o, update: l})
        }

        new ee(".hero-slider", {
            modules: [ie, function (e) {
                let {swiper: t, extendParams: i, on: s, emit: n} = e;
                const a = "swiper-pagination";
                let r;
                i({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), t.pagination = {el: null, $el: null, bullets: []};
                let o = 0;

                function l() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
                }

                function c(e, i) {
                    const {bulletActiveClass: s} = t.params.pagination;
                    e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
                }

                function d() {
                    const e = t.rtl, i = t.params.pagination;
                    if (l()) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        a = t.pagination.$el;
                    let d;
                    const u = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (d = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), d > s - 1 - 2 * t.loopedSlides && (d -= s - 2 * t.loopedSlides), d > u - 1 && (d -= u), d < 0 && "bullets" !== t.params.paginationType && (d = u + d)) : d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const s = t.pagination.bullets;
                        let n, l, u;
                        if (i.dynamicBullets && (r = s.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", r * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (o += d - (t.previousIndex - t.loopedSlides || 0), o > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), n = Math.max(d - o, 0), l = n + (Math.min(s.length, i.dynamicMainBullets) - 1), u = (l + n) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`)).join(" ")), a.length > 1) s.each((e => {
                            const t = k(e), s = t.index();
                            s === d && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= n && s <= l && t.addClass(`${i.bulletActiveClass}-main`), s === n && c(t, "prev"), s === l && c(t, "next"))
                        })); else {
                            const e = s.eq(d), a = e.index();
                            if (e.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                const e = s.eq(n), r = s.eq(l);
                                for (let e = n; e <= l; e += 1) s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                                if (t.params.loop) if (a >= s.length) {
                                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${i.bulletActiveClass}-main`);
                                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                                } else c(e, "prev"), c(r, "next"); else c(e, "prev"), c(r, "next")
                            }
                        }
                        if (i.dynamicBullets) {
                            const n = Math.min(s.length, i.dynamicMainBullets + 4), a = (r * n - r) / 2 - u * r,
                                o = e ? "right" : "left";
                            s.css(t.isHorizontal() ? o : "top", `${a}px`)
                        }
                    }
                    if ("fraction" === i.type && (a.find(se(i.currentClass)).text(i.formatFractionCurrent(d + 1)), a.find(se(i.totalClass)).text(i.formatFractionTotal(u))), "progressbar" === i.type) {
                        let e;
                        e = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const s = (d + 1) / u;
                        let n = 1, r = 1;
                        "horizontal" === e ? n = s : r = s, a.find(se(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`).transition(t.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(t, d + 1, u)), n("paginationRender", a[0])) : n("paginationUpdate", a[0]), t.params.watchOverflow && t.enabled && a[t.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }

                function u() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        s = t.pagination.$el;
                    let a = "";
                    if ("bullets" === e.type) {
                        let n = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && n > i && (n = i);
                        for (let i = 0; i < n; i += 1) e.renderBullet ? a += e.renderBullet.call(t, i, e.bulletClass) : a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                        s.html(a), t.pagination.bullets = s.find(se(e.bulletClass))
                    }
                    "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, s.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, s.html(a)), "custom" !== e.type && n("paginationRender", t.pagination.$el[0])
                }

                function h() {
                    t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let i = k(e.el);
                    0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el), i.length > 1 && (i = i.filter((e => k(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", se(e.bulletClass), (function (e) {
                        e.preventDefault();
                        let i = k(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                    })), Object.assign(t.pagination, {$el: i, el: i[0]}), t.enabled || i.addClass(e.lockClass))
                }

                function p() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const i = t.pagination.$el;
                    i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", se(e.bulletClass))
                }

                s("init", (() => {
                    !1 === t.params.pagination.enabled ? f() : (h(), u(), d())
                })), s("activeIndexChange", (() => {
                    (t.params.loop || void 0 === t.snapIndex) && d()
                })), s("snapIndexChange", (() => {
                    t.params.loop || d()
                })), s("slidesLengthChange", (() => {
                    t.params.loop && (u(), d())
                })), s("snapGridLengthChange", (() => {
                    t.params.loop || (u(), d())
                })), s("destroy", (() => {
                    p()
                })), s("enable disable", (() => {
                    const {$el: e} = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
                })), s("lock unlock", (() => {
                    d()
                })), s("click", ((e, i) => {
                    const s = i.target, {$el: a} = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !k(s).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                        const e = a.hasClass(t.params.pagination.hiddenClass);
                        n(!0 === e ? "paginationShow" : "paginationHide"), a.toggleClass(t.params.pagination.hiddenClass)
                    }
                }));
                const f = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), p()
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), d()
                    }, disable: f, render: u, update: d, init: h, destroy: p
                })
            }, ne, function (e) {
                let t, {swiper: i, extendParams: s, on: n, emit: a} = e;

                function r() {
                    if (!i.size) return i.autoplay.running = !1, void (i.autoplay.paused = !1);
                    const e = i.slides.eq(i.activeIndex);
                    let s = i.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(t), t = T((() => {
                        let e;
                        i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? l() : (e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), a("autoplay")) : (e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.params.loop ? (i.loopFix(), e = i.slideNext(i.params.speed, !0, !0), a("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? l() : (e = i.slideTo(0, i.params.speed, !0, !0), a("autoplay")) : (e = i.slideNext(i.params.speed, !0, !0), a("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === e) && r()
                    }), s)
                }

                function o() {
                    return void 0 === t && !i.autoplay.running && (i.autoplay.running = !0, a("autoplayStart"), r(), !0)
                }

                function l() {
                    return !!i.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), i.autoplay.running = !1, a("autoplayStop"), !0)
                }

                function c(e) {
                    i.autoplay.running && (i.autoplay.paused || (t && clearTimeout(t), i.autoplay.paused = !0, 0 !== e && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        i.$wrapperEl[0].addEventListener(e, h)
                    })) : (i.autoplay.paused = !1, r())))
                }

                function d() {
                    const e = u();
                    "hidden" === e.visibilityState && i.autoplay.running && c(), "visible" === e.visibilityState && i.autoplay.paused && (r(), i.autoplay.paused = !1)
                }

                function h(e) {
                    i && !i.destroyed && i.$wrapperEl && e.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                        i.$wrapperEl[0].removeEventListener(e, h)
                    })), i.autoplay.paused = !1, i.autoplay.running ? r() : l())
                }

                function p() {
                    i.params.autoplay.disableOnInteraction ? l() : (a("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        i.$wrapperEl[0].removeEventListener(e, h)
                    }))
                }

                function f() {
                    i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, a("autoplayResume"), r())
                }

                i.autoplay = {running: !1, paused: !1}, s({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), n("init", (() => {
                    i.params.autoplay.enabled && (o(), u().addEventListener("visibilitychange", d), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", p), i.$el.on("mouseleave", f)))
                })), n("beforeTransitionStart", ((e, t, s) => {
                    i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : l())
                })), n("sliderFirstMove", (() => {
                    i.autoplay.running && (i.params.autoplay.disableOnInteraction ? l() : c())
                })), n("touchEnd", (() => {
                    i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && r()
                })), n("destroy", (() => {
                    i.$el.off("mouseenter", p), i.$el.off("mouseleave", f), i.autoplay.running && l(), u().removeEventListener("visibilitychange", d)
                })), Object.assign(i.autoplay, {pause: c, run: r, start: o, stop: l})
            }],
            autoplay: {delay: 5e3},
            navigation: {prevEl: ".hero-slider__btn--prev", nextEl: ".hero-slider__btn--next"},
            scrollbar: {el: ".hero-slider__scrollbar"},
            pagination: {
                el: ".hero-slider__pagination", type: "fraction", formatFractionCurrent: function (e) {
                    return ("0" + e).slice(-2)
                }, formatFractionTotal: function (e) {
                    return ("0" + e).slice(-2)
                }, renderFraction: function (e, t) {
                    return '<span class="' + e + '"></span> / <span class="' + t + '"></span>'
                }
            }
        }), new ee(".services-slider", {
            modules: [ie, ne],
            slidesPerView: "auto",
            spaceBetween: 20,
            breakpoints: {577: {slidesPerView: "auto"}, 769: {slidesPerView: "auto"}, 1025: {slidesPerView: 4}},
            navigation: {prevEl: ".services-slider__btn--prev", nextEl: ".services-slider__btn--next"},
            scrollbar: {el: ".services-slider__scrollbar"}
        }),
        i(851),
        i(583),
        document.querySelectorAll(".modal-slider").forEach((e => {
            const t = e.querySelector(".modal-slider__main"), i = e.querySelector(".modal-slider__nav"),
                s = e.querySelector(".modal-slider__btn--prev"), n = e.querySelector(".modal-slider__btn--next"),
                a = new ee(i, {slidesPerView: "auto", spaceBetween: 6});
            new ee(t, {
                modules: [ie, ae],
                slidesPerView: 1,
                spaceBetween: 40,
                navigation: {prevEl: s, nextEl: n},
                thumbs: {swiper: a}
            })
        }));
        var re = i(552), oe = i.n(re);
        document.addEventListener("DOMContentLoaded", (() => {
            const e = document.querySelectorAll(".player"), {options: t} = new s, i = [];
            e.forEach((e => {
                const s = new (oe())(e);
                setTimeout((() => {
                    s.poster = e.dataset.poster
                })), i.push(s), t.isClose = () => i.forEach((e => e.pause()))
            }))
        }));
        var le = Object.defineProperty, ce = Object.getOwnPropertySymbols, de = Object.prototype.hasOwnProperty,
            ue = Object.prototype.propertyIsEnumerable,
            he = (e, t, i) => t in e ? le(e, t, {enumerable: !0, configurable: !0, writable: !0, value: i}) : e[t] = i,
            pe = (e, t) => {
                for (var i in t || (t = {})) de.call(t, i) && he(e, i, t[i]);
                if (ce) for (var i of ce(t)) ue.call(t, i) && he(e, i, t[i]);
                return e
            }, fe = (e, t, i) => (he(e, "symbol" != typeof t ? t + "" : t, i), i);
        const me = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            ge = /^[0-9]+$/, ve = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            be = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var ye = (e => (e.Required = "required", e.Email = "email", e.MinLength = "minLength", e.MaxLength = "maxLength", e.Password = "password", e.Number = "number", e.MaxNumber = "maxNumber", e.MinNumber = "minNumber", e.StrongPassword = "strongPassword", e.CustomRegexp = "customRegexp", e.MinFilesCount = "minFilesCount", e.MaxFilesCount = "maxFilesCount", e.Files = "files", e))(ye || {}),
            we = (e => (e.Required = "required", e))(we || {}),
            ke = (e => (e.Label = "label", e.LabelArrow = "labelArrow", e))(ke || {});
        const Te = e => !!e && "function" == typeof e.then,
            Ce = e => Array.isArray(e) ? e.filter((e => e.length > 0)) : "string" == typeof e && e.trim() ? [...e.split(" ").filter((e => e.length > 0))] : [],
            Ee = {
                errorFieldStyle: {color: "#b81111", border: "1px solid #B81111"},
                errorFieldCssClass: "just-validate-error-field",
                successFieldCssClass: "just-validate-success-field",
                errorLabelStyle: {color: "#b81111"},
                errorLabelCssClass: "just-validate-error-label",
                successLabelCssClass: "just-validate-success-label",
                focusInvalidField: !0,
                lockForm: !0,
                testingMode: !1
            };

        class Se {
            constructor(e, t, i) {
                fe(this, "form", null), fe(this, "fields", {}), fe(this, "groupFields", {}), fe(this, "errors", {}), fe(this, "isValid", !1), fe(this, "isSubmitted", !1), fe(this, "globalConfig", Ee), fe(this, "errorLabels", {}), fe(this, "successLabels", {}), fe(this, "eventListeners", []), fe(this, "dictLocale", []), fe(this, "currentLocale"), fe(this, "customStyleTags", {}), fe(this, "onSuccessCallback"), fe(this, "onFailCallback"), fe(this, "tooltips", []), fe(this, "lastScrollPosition"), fe(this, "isScrollTick"), fe(this, "refreshAllTooltips", (() => {
                    this.tooltips.forEach((e => {
                        e.refresh()
                    }))
                })), fe(this, "handleDocumentScroll", (() => {
                    this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame((() => {
                        this.refreshAllTooltips(), this.isScrollTick = !1
                    })), this.isScrollTick = !0)
                })), fe(this, "formSubmitHandler", (e => {
                    e.preventDefault(),
                    this.isSubmitted = !0,
                    this.validateHandler(e)
                })), fe(this, "handleFieldChange", (e => {
                    let t;
                    for (const i in this.fields) if (this.fields[i].elem === e) {
                        t = i;
                        break
                    }
                    t && this.validateField(t, !0)
                })), fe(this, "handleGroupChange", (e => {
                    let t, i;
                    for (const s in this.groupFields) {
                        const n = this.groupFields[s];
                        if (n.elems.find((t => t === e))) {
                            t = n, i = s;
                            break
                        }
                    }
                    t && i && this.validateGroup(i, t)
                })), fe(this, "handlerChange", (e => {
                    e.target && (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors())
                })), this.initialize(e, t, i)
            }

            initialize(e, t, i) {
                if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = Ee, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], "string" == typeof e) {
                    const t = document.querySelector(e);
                    if (!t) throw Error(`Form with ${e} selector not found! Please check the form selector`);
                    this.setForm(t)
                } else {
                    if (!(e instanceof HTMLFormElement)) throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
                    this.setForm(e)
                }
                if (this.globalConfig = pe(pe({}, Ee), t), i && (this.dictLocale = i), this.isTooltip()) {
                    const e = document.createElement("style");
                    e.textContent = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", this.customStyleTags[ke.Label] = document.head.appendChild(e), this.addListener("scroll", document, this.handleDocumentScroll)
                }
            }

            getLocalisedString(e) {
                var t;
                return this.currentLocale && this.dictLocale.length && (null == (t = this.dictLocale.find((t => t.key === e))) ? void 0 : t.dict[this.currentLocale]) || e
            }

            getFieldErrorMessage(e, t) {
                const i = "function" == typeof e.errorMessage ? e.errorMessage(this.getElemValue(t), this.fields) : e.errorMessage;
                return this.getLocalisedString(i) || ((e, t) => {
                    switch (e) {
                        case ye.Required:
                            return "The field is required";
                        case ye.Email:
                            return "Email has invalid format";
                        case ye.MaxLength:
                            return "The field must contain a maximum of :value characters".replace(":value", String(t));
                        case ye.MinLength:
                            return "The field must contain a minimum of :value characters".replace(":value", String(t));
                        case ye.Password:
                            return "Password must contain minimum eight characters, at least one letter and one number";
                        case ye.Number:
                            return "Value should be a number";
                        case ye.StrongPassword:
                            return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
                        case ye.MaxNumber:
                            return "Number should be less or equal than :value".replace(":value", String(t));
                        case ye.MinNumber:
                            return "Number should be more or equal than :value".replace(":value", String(t));
                        case ye.MinFilesCount:
                            return "Files count should be more or equal than :value".replace(":value", String(t));
                        case ye.MaxFilesCount:
                            return "Files count should be less or equal than :value".replace(":value", String(t));
                        case ye.Files:
                            return "Uploaded files have one or several invalid properties (extension/size/type etc)";
                        default:
                            return "Value is incorrect"
                    }
                })(e.rule, e.value)
            }

            getFieldSuccessMessage(e, t) {
                const i = "function" == typeof e ? e(this.getElemValue(t), this.fields) : e;
                return this.getLocalisedString(i)
            }

            getGroupErrorMessage(e) {
                return this.getLocalisedString(e.errorMessage) || (e.rule === we.Required ? "The field is required" : "Group is incorrect")
            }

            getGroupSuccessMessage(e) {
                return this.getLocalisedString(e.successMessage)
            }

            setFieldInvalid(e, t) {
                this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(t, this.fields[e].elem)
            }

            setFieldValid(e, t) {
                this.fields[e].isValid = !0, void 0 !== t && (this.fields[e].successMessage = this.getFieldSuccessMessage(t, this.fields[e].elem))
            }

            setGroupInvalid(e, t) {
                this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(t)
            }

            setGroupValid(e, t) {
                this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(t)
            }

            getElemValue(e) {
                switch (e.type) {
                    case"checkbox":
                        return e.checked;
                    case"file":
                        return e.files;
                    default:
                        return e.value
                }
            }

            validateGroupRule(e, t, i) {
                i.rule === we.Required && (t.every((e => !e.checked)) ? this.setGroupInvalid(e, i) : this.setGroupValid(e, i))
            }

            validateFieldRule(e, t, i, s = !1) {
                const n = i.value, a = this.getElemValue(t);
                if (i.plugin) i.plugin(a, this.fields) || this.setFieldInvalid(e, i); else switch (i.rule) {
                    case ye.Required:
                        (e => {
                            let t = e;
                            return "string" == typeof e && (t = e.trim()), !t
                        })(a) && this.setFieldInvalid(e, i);
                        break;
                    case ye.Email:
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        r = a, me.test(r) || this.setFieldInvalid(e, i);
                        break;
                    case ye.MaxLength:
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        ((e, t) => e.length > t)(a, n) && this.setFieldInvalid(e, i);
                        break;
                    case ye.MinLength:
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        ((e, t) => e.length < t)(a, n) && this.setFieldInvalid(e, i);
                        break;
                    case ye.Password:
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        (e => ve.test(e))(a) || this.setFieldInvalid(e, i);
                        break;
                    case ye.StrongPassword:
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        (e => be.test(e))(a) || this.setFieldInvalid(e, i);
                        break;
                    case ye.Number:
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        (e => ge.test(e))(a) || this.setFieldInvalid(e, i);
                        break;
                    case ye.MaxNumber: {
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        const t = +a;
                        (Number.isNaN(t) || ((e, t) => e > t)(t, n)) && this.setFieldInvalid(e, i);
                        break
                    }
                    case ye.MinNumber: {
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("string" != typeof a) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if ("" === a) break;
                        const t = +a;
                        (Number.isNaN(t) || ((e, t) => e < t)(t, n)) && this.setFieldInvalid(e, i);
                        break
                    }
                    case ye.CustomRegexp: {
                        if (void 0 === n) return console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(e, i);
                        let t;
                        try {
                            t = new RegExp(n)
                        } catch (t) {
                            console.error(`Value for ${i.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        const s = String(a);
                        "" === s || t.test(s) || this.setFieldInvalid(e, i);
                        break
                    }
                    case ye.MinFilesCount:
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if (Number.isFinite(null == a ? void 0 : a.length) && a.length < n) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        break;
                    case ye.MaxFilesCount:
                        if (void 0 === n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if ("number" != typeof n) {
                            console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                            break
                        }
                        if (Number.isFinite(null == a ? void 0 : a.length) && a.length > n) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        break;
                    case ye.Files: {
                        if (void 0 === n) return console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(e, i);
                        if ("object" != typeof n) return console.error(`Value for ${i.rule} rule for [${e}] field should be an object. This field will be always invalid.`), void this.setFieldInvalid(e, i);
                        const t = n.files;
                        if ("object" != typeof t) return console.error(`Value for ${i.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`), void this.setFieldInvalid(e, i);
                        const s = (e, t) => {
                            const i = Number.isFinite(t.minSize) && e.size < t.minSize,
                                s = Number.isFinite(t.maxSize) && e.size > t.maxSize,
                                n = Array.isArray(t.names) && !t.names.includes(e.name),
                                a = Array.isArray(t.extensions) && !t.extensions.includes(e.name.split(".")[e.name.split(".").length - 1]),
                                r = Array.isArray(t.types) && !t.types.includes(e.type);
                            return i || s || n || a || r
                        };
                        if ("object" == typeof a && null !== a) for (let n = 0, r = a.length; n < r; ++n) {
                            const r = a.item(n);
                            if (!r) {
                                this.setFieldInvalid(e, i);
                                break
                            }
                            if (s(r, t)) {
                                this.setFieldInvalid(e, i);
                                break
                            }
                        }
                        break
                    }
                    default: {
                        if ("function" != typeof i.validator) return console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`), void this.setFieldInvalid(e, i);
                        const t = i.validator(a, this.fields);
                        if ("boolean" != typeof t && "function" != typeof t && console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`), "function" == typeof t) {
                            if (!s) {
                                this.fields[e].asyncCheckPending = !1;
                                const s = t();
                                return Te(s) ? s.then((t => {
                                    t || this.setFieldInvalid(e, i)
                                })).catch((() => {
                                    this.setFieldInvalid(e, i)
                                })) : (console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`), void this.setFieldInvalid(e, i))
                            }
                            this.fields[e].asyncCheckPending = !0
                        }
                        t || this.setFieldInvalid(e, i)
                    }
                }
                var r
            }

            validateField(e, t = !1) {
                var i;
                const s = this.fields[e];
                s.isValid = !0;
                const n = [];
                return [...s.rules].reverse().forEach((i => {
                    const a = this.validateFieldRule(e, s.elem, i, t);
                    Te(a) && n.push(a)
                })), s.isValid && this.setFieldValid(e, null == (i = s.config) ? void 0 : i.successMessage), Promise.allSettled(n)
            }

            revalidateField(e) {
                if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
                return this.fields[e] ? new Promise((t => {
                    this.validateField(e, !0).finally((() => {
                        this.clearFieldStyle(e), this.clearFieldLabel(e), this.renderFieldError(e), t(!!this.fields[e].isValid)
                    }))
                })) : (console.error("Field not found. Check the field selector."), Promise.reject())
            }

            validateGroup(e, t) {
                const i = [];
                return [...t.rules].reverse().forEach((s => {
                    const n = this.validateGroupRule(e, t.elems, s);
                    Te(n) && i.push(n)
                })), Promise.allSettled(i)
            }

            focusInvalidField() {
                for (const e in this.fields) {
                    const t = this.fields[e];
                    if (!t.isValid) {
                        setTimeout((() => t.elem.focus()), 0);
                        break
                    }
                }
            }

            afterSubmitValidation(e = !1) {
                this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField()
            }

            validate(e = !1) {
                return new Promise((t => {
                    const i = [];
                    Object.keys(this.fields).forEach((e => {
                        const t = this.validateField(e);
                        Te(t) && i.push(t)
                    })), Object.keys(this.groupFields).forEach((e => {
                        const t = this.groupFields[e], s = this.validateGroup(e, t);
                        Te(s) && i.push(s)
                    })), i.length ? Promise.allSettled(i).then((() => {
                        this.afterSubmitValidation(e), t(!0)
                    })) : (this.afterSubmitValidation(e), t(!1))
                }))
            }

            revalidate() {
                return new Promise((e => {
                    this.validateHandler(void 0, !0).finally((() => {
                        this.globalConfig.focusInvalidField && this.focusInvalidField(), e(this.isValid)
                    }))
                }))
            }

            validateHandler(e, t = !1) {
                return this.globalConfig.lockForm && this.lockForm(), this.validate(t).finally((() => {
                    var t, i;
                    this.globalConfig.lockForm && this.unlockForm(), this.isValid ? null == (t = this.onSuccessCallback) || t.call(this, e) : null == (i = this.onFailCallback) || i.call(this, this.fields, this.groupFields)
                }))
            }

            setForm(e) {
                this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler)
            }

            addListener(e, t, i) {
                t.addEventListener(e, i), this.eventListeners.push({type: e, elem: t, func: i})
            }

            removeListener(e, t, i) {
                t.removeEventListener(e, i), this.eventListeners = this.eventListeners.filter((i => i.type !== e || i.elem !== t))
            }

            addField(e, t, i) {
                if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
                const s = this.form.querySelector(e);
                if (!s) throw Error(`Field with ${e} selector not found! Please check the field selector.`);
                if (!Array.isArray(t) || !t.length) throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);
                return t.forEach((t => {
                    if (!("rule" in t || "validator" in t || "plugin" in t)) throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);
                    if (!(t.validator || t.plugin || t.rule && Object.values(ye).includes(t.rule))) throw Error(`Rule should be one of these types: ${Object.values(ye).join(", ")}. Provided value: ${t.rule}`)
                })), this.fields[e] = {
                    elem: s,
                    rules: t,
                    isValid: void 0,
                    config: i
                }, this.setListeners(s), this.isSubmitted && this.validate(), this
            }

            removeField(e) {
                if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
                if (!this.fields[e]) return console.error("Field not found. Check the field selector."), this;
                const t = this.getListenerType(this.fields[e].elem.type);
                return this.removeListener(t, this.fields[e].elem, this.handlerChange), this.clearErrors(), delete this.fields[e], this
            }

            removeGroup(e) {
                if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
                return this.groupFields[e] ? (this.groupFields[e].elems.forEach((e => {
                    const t = this.getListenerType(e.type);
                    this.removeListener(t, e, this.handlerChange)
                })), this.clearErrors(), delete this.groupFields[e], this) : (console.error("Group not found. Check the group selector."), this)
            }

            addRequiredGroup(e, t, i, s) {
                if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
                const n = this.form.querySelector(e);
                if (!n) throw Error(`Group with ${e} selector not found! Please check the group selector.`);
                const a = n.querySelectorAll("input"), r = Array.from(a).filter((e => {
                    const t = ((e, t) => {
                        const i = [...t].reverse();
                        for (let t = 0, s = i.length; t < s; ++t) {
                            const s = i[t];
                            for (const t in e) {
                                const i = e[t];
                                if (i.groupElem === s) return [t, i]
                            }
                        }
                        return null
                    })(this.groupFields, (e => {
                        let t = e;
                        const i = [];
                        for (; t;) i.unshift(t), t = t.parentNode;
                        return i
                    })(e));
                    return !t || t[1].elems.find((t => t !== e))
                }));
                return this.groupFields[e] = {
                    rules: [{rule: we.Required, errorMessage: t, successMessage: s}],
                    groupElem: n,
                    elems: r,
                    isDirty: !1,
                    isValid: void 0,
                    config: i
                }, a.forEach((e => {
                    this.setListeners(e)
                })), this
            }

            getListenerType(e) {
                switch (e) {
                    case"checkbox":
                    case"select-one":
                    case"file":
                    case"radio":
                        return "change";
                    default:
                        return "input"
                }
            }

            setListeners(e) {
                const t = this.getListenerType(e.type);
                this.removeListener(t, e, this.handlerChange), this.addListener(t, e, this.handlerChange)
            }

            clearFieldLabel(e) {
                var t, i;
                null == (t = this.errorLabels[e]) || t.remove(), null == (i = this.successLabels[e]) || i.remove()
            }

            clearFieldStyle(e) {
                var t, i, s, n;
                const a = this.fields[e],
                    r = (null == (t = a.config) ? void 0 : t.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                Object.keys(r).forEach((e => {
                    a.elem.style[e] = ""
                }));
                const o = (null == (i = a.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                Object.keys(o).forEach((e => {
                    a.elem.style[e] = ""
                })), a.elem.classList.remove(...Ce((null == (s = a.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...Ce((null == (n = a.config) ? void 0 : n.successFieldCssClass) || this.globalConfig.successFieldCssClass))
            }

            clearErrors() {
                var e, t;
                Object.keys(this.errorLabels).forEach((e => this.errorLabels[e].remove())), Object.keys(this.successLabels).forEach((e => this.successLabels[e].remove()));
                for (const e in this.fields) this.clearFieldStyle(e);
                for (const i in this.groupFields) {
                    const s = this.groupFields[i],
                        n = (null == (e = s.config) ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                    Object.keys(n).forEach((e => {
                        s.elems.forEach((t => {
                            var i;
                            t.style[e] = "", t.classList.remove(...Ce((null == (i = s.config) ? void 0 : i.errorFieldCssClass) || this.globalConfig.errorFieldCssClass))
                        }))
                    }));
                    const a = (null == (t = s.config) ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                    Object.keys(a).forEach((e => {
                        s.elems.forEach((t => {
                            var i;
                            t.style[e] = "", t.classList.remove(...Ce((null == (i = s.config) ? void 0 : i.successFieldCssClass) || this.globalConfig.successFieldCssClass))
                        }))
                    }))
                }
                this.tooltips = []
            }

            isTooltip() {
                return !!this.globalConfig.tooltip
            }

            lockForm() {
                const e = this.form.querySelectorAll("input, textarea, button, select");
                for (let t = 0, i = e.length; t < i; ++t) e[t].setAttribute("data-just-validate-fallback-disabled", e[t].disabled ? "true" : "false"), e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webkitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)"
            }

            unlockForm() {
                const e = this.form.querySelectorAll("input, textarea, button, select");
                for (let t = 0, i = e.length; t < i; ++t) "true" !== e[t].getAttribute("data-just-validate-fallback-disabled") && e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webkitFilter = "", e[t].style.filter = ""
            }

            renderTooltip(e, t, i) {
                var s;
                const {top: n, left: a, width: r, height: o} = e.getBoundingClientRect(), l = t.getBoundingClientRect(),
                    c = i || (null == (s = this.globalConfig.tooltip) ? void 0 : s.position);
                switch (c) {
                    case"left":
                        t.style.top = n + o / 2 - l.height / 2 + "px", t.style.left = a - l.width - 5 + "px";
                        break;
                    case"top":
                        t.style.top = n - l.height - 5 + "px", t.style.left = a + r / 2 - l.width / 2 + "px";
                        break;
                    case"right":
                        t.style.top = n + o / 2 - l.height / 2 + "px", t.style.left = `${a + r + 5}px`;
                        break;
                    case"bottom":
                        t.style.top = `${n + o + 5}px`, t.style.left = a + r / 2 - l.width / 2 + "px"
                }
                return t.dataset.direction = c, {
                    refresh: () => {
                        this.renderTooltip(e, t, i)
                    }
                }
            }

            createErrorLabelElem(e, t, i) {
                const s = document.createElement("div");
                s.innerHTML = t;
                const n = this.isTooltip() ? null == i ? void 0 : i.errorLabelStyle : (null == i ? void 0 : i.errorLabelStyle) || this.globalConfig.errorLabelStyle;
                return Object.assign(s.style, n), s.classList.add(...Ce((null == i ? void 0 : i.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label"), this.isTooltip() && (s.dataset.tooltip = "true"), this.globalConfig.testingMode && (s.dataset.testId = `error-label-${e}`), this.errorLabels[e] = s, s
            }

            createSuccessLabelElem(e, t, i) {
                if (void 0 === t) return null;
                const s = document.createElement("div");
                s.innerHTML = t;
                const n = (null == i ? void 0 : i.successLabelStyle) || this.globalConfig.successLabelStyle;
                return Object.assign(s.style, n), s.classList.add(...Ce((null == i ? void 0 : i.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label"), this.globalConfig.testingMode && (s.dataset.testId = `success-label-${e}`), this.successLabels[e] = s, s
            }

            renderErrorsContainer(e, t) {
                const i = t || this.globalConfig.errorsContainer;
                if ("string" == typeof i) {
                    const t = this.form.querySelector(i);
                    if (t) return t.appendChild(e), !0;
                    console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)
                }
                return i instanceof Element ? (i.appendChild(e), !0) : (void 0 !== i && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1)
            }

            renderGroupLabel(e, t, i, s) {
                !s && this.renderErrorsContainer(t, i) || e.appendChild(t)
            }

            renderFieldLabel(e, t, i, s) {
                var n, a, r, o, l, c, d;
                if (s || !this.renderErrorsContainer(t, i)) if ("checkbox" === e.type || "radio" === e.type) {
                    const i = document.querySelector(`label[for="${e.getAttribute("id")}"]`);
                    "label" === (null == (a = null == (n = e.parentElement) ? void 0 : n.tagName) ? void 0 : a.toLowerCase()) ? null == (o = null == (r = e.parentElement) ? void 0 : r.parentElement) || o.appendChild(t) : i ? null == (l = i.parentElement) || l.appendChild(t) : null == (c = e.parentElement) || c.appendChild(t)
                } else null == (d = e.parentElement) || d.appendChild(t)
            }

            showLabels(e, t) {
                Object.keys(e).forEach(((i, s) => {
                    const n = e[i], a = this.fields[i];
                    a.isValid = !t, this.clearFieldStyle(i), this.clearFieldLabel(i), this.renderFieldError(i, n), 0 === s && this.globalConfig.focusInvalidField && setTimeout((() => a.elem.focus()), 0)
                }))
            }

            showErrors(e) {
                if ("object" != typeof e) throw Error("[showErrors]: Errors should be an object with key: value format");
                this.showLabels(e, !0)
            }

            showSuccessLabels(e) {
                if ("object" != typeof e) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
                this.showLabels(e, !1)
            }

            renderFieldError(e, t) {
                var i, s, n, a, r, o;
                const l = this.fields[e];
                if (l.isValid) {
                    if (!l.asyncCheckPending) {
                        const n = this.createSuccessLabelElem(e, void 0 !== t ? t : l.successMessage, l.config);
                        n && this.renderFieldLabel(l.elem, n, null == (i = l.config) ? void 0 : i.errorsContainer, !0), l.elem.classList.add(...Ce((null == (s = l.config) ? void 0 : s.successFieldCssClass) || this.globalConfig.successFieldCssClass))
                    }
                    return
                }
                this.isValid = !1, l.elem.classList.add(...Ce((null == (n = l.config) ? void 0 : n.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                const c = this.createErrorLabelElem(e, void 0 !== t ? t : l.errorMessage, l.config);
                this.renderFieldLabel(l.elem, c, null == (a = l.config) ? void 0 : a.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(l.elem, c, null == (o = null == (r = l.config) ? void 0 : r.tooltip) ? void 0 : o.position))
            }

            renderErrors(e = !1) {
                var t, i, s, n;
                if (this.isSubmitted || e) {
                    this.clearErrors(), this.isValid = !0;
                    for (const e in this.groupFields) {
                        const a = this.groupFields[e];
                        if (a.isValid) {
                            a.elems.forEach((e => {
                                var t, i;
                                Object.assign(e.style, (null == (t = a.config) ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle), e.classList.add(...Ce((null == (i = a.config) ? void 0 : i.successFieldCssClass) || this.globalConfig.successFieldCssClass))
                            }));
                            const i = this.createSuccessLabelElem(e, a.successMessage, a.config);
                            i && this.renderGroupLabel(a.groupElem, i, null == (t = a.config) ? void 0 : t.errorsContainer, !0);
                            continue
                        }
                        this.isValid = !1, a.elems.forEach((e => {
                            var t, i;
                            Object.assign(e.style, (null == (t = a.config) ? void 0 : t.errorFieldStyle) || this.globalConfig.errorFieldStyle), e.classList.add(...Ce((null == (i = a.config) ? void 0 : i.errorFieldCssClass) || this.globalConfig.errorFieldCssClass))
                        }));
                        const r = this.createErrorLabelElem(e, a.errorMessage, a.config);
                        this.renderGroupLabel(a.groupElem, r, null == (i = a.config) ? void 0 : i.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(a.groupElem, r, null == (n = null == (s = a.config) ? void 0 : s.tooltip) ? void 0 : n.position))
                    }
                    for (const e in this.fields) this.renderFieldError(e)
                }
            }

            destroy() {
                this.eventListeners.forEach((e => {
                    this.removeListener(e.type, e.elem, e.func)
                })), Object.keys(this.customStyleTags).forEach((e => {
                    this.customStyleTags[e].remove()
                })), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm()
            }

            refresh() {
                this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach((e => {
                    this.addField(e, [...this.fields[e].rules], this.fields[e].config)
                }))) : console.error("Cannot initialize the library! Form is not defined")
            }

            setCurrentLocale(e) {
                "string" == typeof e || void 0 === e ? (this.currentLocale = e, this.isSubmitted && this.validate()) : console.error("Current locale should be a string")
            }

            onSuccess(e) {
                return this.onSuccessCallback = e, this
            }

            onFail(e) {
                return this.onFailCallback = e, this
            }
        }

        const xe = (e, t, i, s) => {
                var n;
                const a = null === (n = document) || void 0 === n ? void 0 : n.querySelector(e),
                    r = null == a ? void 0 : a.querySelector(".mask-input");
                if (!a) return !1;
                if (r) {
                    new (o())("+7 (999) 999-99-99").mask(r);
                    for (let e of t) e.tel && e.rules.push({
                        rule: "function",
                        errorMessage: "?????????????? ???????????????????? ?????????? ????????????????",
                        validator: function () {
                            return r.inputmask.unmaskedvalue().length >= 10
                        }
                    })
                }
                const l = new Se(e, {errorFieldCssClass: "is-invalid"});
                for (let e of t) l.addField(e.ruleSelector, e.rules);
                l.onFail((() => {
                    s()
                })), l.onSuccess((e => {
                    i(), e.target.reset()
                }))
            }, {errorMessage: Pe} = n, Me = new s,
            Le = [
                {ruleSelector: ".validate-name", rules: [{rule: "required", errorMessage: Pe}]},
                {
                    tel: !0,
                    ruleSelector: ".validate-tel",
                    rules: [{rule: "required", errorMessage: Pe}]
                },
                {ruleSelector: ".validate-message", rules: [{rule: "required", errorMessage: Pe}]}
            ],
            Ae = () => {
                var formData = new FormData(document.forms['request-form']);
                BX.showWait();
                BX.ajax({
                    url: '/local/mail/callback.php',
                    method: 'POST',
                    data: new URLSearchParams(formData).toString(),
                    dataType: 'html',
                    onsuccess: function (html) {
                        document.querySelector('.modal.is-open .js-modal-close').click();
                        Me.close();
                        Me.open("thank");
                        BX.closeWait();
                    },
                    onfailure: function (error) {
                        console.log(error);
                    },
                });
            };
        document.addEventListener("DOMContentLoaded", (() => xe("#request-form", Le, Ae)));
        const {errorMessage: Oe} = n, _e = new s,
            Ie = [{ruleSelector: ".validate-name", rules: [{rule: "required", errorMessage: Oe}]}, {
                tel: !0,
                ruleSelector: ".validate-tel",
                rules: [{rule: "required", errorMessage: Oe}]
            }],
            $e = () => {
                var formData = new FormData(document.forms['questions-form']);
                BX.showWait();
                BX.ajax({
                    url: '/local/mail/questions.php',
                    method: 'POST',
                    data: new URLSearchParams(formData).toString(),
                    dataType: 'html',
                    onsuccess: function (html) {
                        _e.open("thank", "fade");
                        BX.closeWait();
                    },
                    onfailure: function (error) {
                        console.log(error);
                    },
                });
            };
        document.addEventListener("DOMContentLoaded", (() => xe("#questions-form", Ie, $e))), new ee(".history-slider", {
            modules: [ie, ne],
            slidesPerView: "auto",
            slideToClickedSlide: !0,
            grabCursor: !0,
            breakpoints: {577: {spaceBetween: 20}},
            navigation: {prevEl: ".history-slider__btn--prev", nextEl: ".history-slider__btn--next"},
            scrollbar: {el: ".history-slider__scrollbar"}
        }), new ee(".licenses-slider", {
            modules: [ie, ne],
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {577: {slidesPerView: 2}, 769: {slidesPerView: 3}, 1025: {slidesPerView: 4}},
            navigation: {prevEl: ".licenses-slider__btn--prev", nextEl: ".licenses-slider__btn--next"},
            scrollbar: {el: ".licenses-slider__scrollbar"}
        });

        class Fe {
            constructor(e, t) {
                this.options = Object.assign({
                    isChanged: () => {
                    }
                }, t), this.selector = e, this.tabs = document.querySelector('[data-tabs="'.concat(e, '"]')), this.tabs ? (this.tabsDropdown = this.tabs.querySelector(".tabs-dropdown"), this.tabsDropdownBtn = this.tabs.querySelector(".tabs-dropdown__toggle"), this.tabList = this.tabs.querySelector(".tabs__nav"), this.tabsBtns = this.tabList.querySelectorAll(".tabs__nav-btn"), this.tabsPanels = this.tabs.querySelectorAll(".tabs__panel"), this.check(), this.init(), this.events()) : console.error("???????????????? data-tabs ???? ????????????????????!")
            }

            check() {
                document.querySelectorAll('[data-tabs="'.concat(this.selector, '"]')).length > 1 ? console.error("???????????????????? ?????????????????? ?? ???????????????????? data-tabs ???????????? ????????????!") : this.tabsBtns.length === this.tabsPanels.length || console.error("???????????????????? ???????????? ?? ?????????????????? ?????????? ???? ??????????????????!")
            }

            init() {
                var e;
                this.tabList.setAttribute("role", "tablist"), this.tabsBtns.forEach(((e, t) => {
                    e.setAttribute("role", "tab"), e.setAttribute("tabindex", "-1"), e.setAttribute("id", "".concat(this.selector).concat(t + 1)), e.classList.remove("tabs__nav-btn--active")
                })),
                this.tabsPanels.forEach(((e, t) => {
                    e.setAttribute("role", "tabpanel"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-labelledby", this.tabsBtns[t].id), e.classList.remove("tabs__panel--active")
                })),
                this.tabsBtns[0].classList.add("tabs__nav-btn--active"), this.tabsBtns[0].removeAttribute("tabindex"), this.tabsBtns[0].setAttribute("aria-selected", "true"), this.tabsPanels[0].classList.add("tabs__panel--active"), null === (e = this.tabsDropdownBtn) || void 0 === e || e.addEventListener("click", (e => {
                    var t;
                    t = "???????????????? ??????????????" === e.currentTarget.innerHTML ? "???????????? ??????????????" : "???????????????? ??????????????", e.currentTarget.innerHTML = t, this.tabsDropdown.classList.toggle("active")
                }))
            }

            events() {
                this.tabsBtns.forEach(((e, t) => {
                    e.addEventListener("click", (e => {
                        var t;
                        let i = this.tabList.querySelector("[aria-selected]");
                        null === (t = this.tabsDropdown) || void 0 === t || t.classList.remove("active"), e.currentTarget !== i && this.switchTabs(e.currentTarget, i)
                    })), e.addEventListener("keydown", (e => {
                        let i = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget), s = null;
                        s = 37 === e.which ? i - 1 : 39 === e.which ? i + 1 : 40 === e.which ? "down" : null, null !== s && ("down" === s ? this.tabsPanels[t].focus() : this.tabsBtns[s] && this.switchTabs(this.tabsBtns[s], e.currentTarget))
                    }))
                }))
            }

            switchTabs(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tabs.querySelector("[aria-selected]");
                e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", "true"), t.removeAttribute("aria-selected"), t.setAttribute("tabindex", "-1");
                let i = Array.prototype.indexOf.call(this.tabsBtns, e),
                    s = Array.prototype.indexOf.call(this.tabsBtns, t);
                this.tabsPanels[s].classList.remove("tabs__panel--active"), this.tabsPanels[i].classList.add("tabs__panel--active"), this.tabsBtns[s].classList.remove("tabs__nav-btn--active"), this.tabsBtns[i].classList.add("tabs__nav-btn--active"), this.options.isChanged(this)
            }
        }

        document.addEventListener("DOMContentLoaded", (() => {
            document.querySelector(".tabs") && new Fe("tab")
        })), i(627);
        new class {
            constructor(e) {
                this.type = e
            }

            init() {
                this.??bjects = [], this.daClassname = "_dynamic_adapt_", this.nodes = [...document.querySelectorAll("[data-da]")], this.nodes.forEach((e => {
                    const t = e.dataset.da.trim().split(","), i = {};
                    i.element = e, i.parent = e.parentNode, i.destination = e.closest("".concat(t[0].trim())), i.breakpoint = t[1] ? t[1].trim() : "767", i.place = t[2] ? t[2].trim() : "last", i.index = this.indexInParent(i.parent, i.element), this.??bjects.push(i)
                })), this.arraySort(this.??bjects), this.mediaQueries = this.??bjects.map((e => {
                    let {breakpoint: t} = e;
                    return "(".concat(this.type, "-width: ").concat(t, "px),").concat(t)
                })).filter(((e, t, i) => i.indexOf(e) === t)), this.mediaQueries.forEach((e => {
                    const t = e.split(","), i = window.matchMedia(t[0]), s = t[1], n = this.??bjects.filter((e => {
                        let {breakpoint: t} = e;
                        return t === s
                    }));
                    i.addEventListener("change", (() => {
                        this.mediaHandler(i, n)
                    })), this.mediaHandler(i, n)
                }))
            }

            mediaHandler(e, t) {
                e.matches ? t.forEach((e => {
                    e.index = this.indexInParent(e.parent, e.element), this.moveTo(e.place, e.element, e.destination)
                })) : t.forEach((e => {
                    let {parent: t, element: i, index: s} = e;
                    i.classList.contains(this.daClassname) && this.moveBack(t, i, s)
                }))
            }

            moveTo(e, t, i) {
                t.classList.add(this.daClassname), "last" === e || e >= i.children.length ? i.append(t) : "first" !== e ? i.children[e].before(t) : i.prepend(t)
            }

            moveBack(e, t, i) {
                t.classList.remove(this.daClassname), void 0 !== e.children[i] ? e.children[i].before(t) : e.append(t)
            }

            indexInParent(e, t) {
                return [...e.children].indexOf(t)
            }

            arraySort(e) {
                "min" === this.type ? e.sort(((e, t) => e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : e.place - t.place : e.breakpoint - t.breakpoint)) : e.sort(((e, t) => e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : t.place - e.place : t.breakpoint - e.breakpoint))
            }
        }("max").init()
    })()
})();