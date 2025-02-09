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
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([[4572], {
    29332: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, {default: () => H});
        var o = a(96156), n = a(67294), s = a(94184), r = a.n(s), l = a(35369), i = a(35782), c = a(67366),
            d = a(15359), m = a(31672), u = a(46455), g = a(10983), p = a(70982), f = a(21853), P = a(45249),
            y = a(11765), b = a(17766), v = a(21655), h = a(53261), I = a(29911), w = a(67057), k = a(60101),
            E = a(17375), N = a(22122), D = a(38852);
        const C = ["type"];

        function x(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(a), !0).forEach((function (t) {
                    (0, o.Z)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        const O = (0, n.memo)((e => {
            let {
                items: t,
                builtInItems: o,
                moveDialog: s,
                CSS_HACK: {components: {ToolbarButtonComponent: l}, styles: i},
                getCustomerCallbackForItem: c
            } = e;
            return t.map(((e, t) => {
                const d = o.find((t => t.type === e.type));
                if ("spacer" === e.type) return n.createElement("div", {
                    style: {flex: 1},
                    className: e.className,
                    key: `spacer-${t}`
                });
                if ("move" === e.type && d) return n.createElement("div", {
                    key: d.type,
                    className: i.moveButtonContainer
                }, n.createElement(l, (0, N.Z)({}, d, {
                    icon: a(6058),
                    className: r()(d.className, e.className),
                    onPress: e => {
                        d && d.onPress && d.onPress(e)
                    }
                })), s);
                if (d) {
                    const o = (0, D.zW)(d.type);
                    return n.createElement(l, (0, N.Z)({}, d, {
                        key: d.type || t,
                        icon: a(33720)(`./${o}.svg`),
                        onPress: e => {
                            d && d.onPress && d.onPress(e)
                        },
                        className: r()(d.className, e.className)
                    }))
                }
                if ("custom" === e.type && e.node) {
                    const {type: a} = e, o = (0, E.Z)(e, C);
                    return n.createElement(k.Z, (0, N.Z)({}, o, {onPress: null == c ? void 0 : c(e), key: e.id || t}))
                }
                return n.createElement(l, (0, N.Z)({}, e, {key: d && d.type || t, onPress: null == c ? void 0 : c(e)}))
            }))
        })), M = (0, n.memo)((e => {
            let {
                items: t,
                builtInItems: o,
                CSS_HACK: {components: {ToolbarDropdownGroupComponent: s, ToolbarButtonComponent: l}, styles: i},
                frameWindow: c,
                getCustomerCallbackForItem: d
            } = e;
            const m = t.map((e => {
                let {item: t, index: a} = e;
                const n = o.find((e => e.type === t.type));
                return n ? {
                    index: a, item: S(S({}, n), {}, {
                        className: r()(n.className, t.className), onPress: e => {
                            n.onPress && n.onPress(e)
                        }
                    })
                } : {item: S(S({}, t), {}, {onPress: null == d ? void 0 : d(t)}), index: a}
            }));
            return m.length > 0 && n.createElement(n.Fragment, null, n.createElement("div", {
                style: {flex: 1},
                key: "spacer-responsive"
            }), n.createElement(s, {
                icon: {type: "more", size: {width: 20, height: 20}},
                items: m,
                discreteDropdown: !0,
                caretDirection: "down",
                role: "menu",
                ItemComponent: e => {
                    let {item: t, isSelectedItem: s, state: c, itemComponentProps: d} = e;
                    const m = !s && o.find((e => e.type === t.item.type));
                    if (s) return null;
                    const u = m && m.type ? (0, D.zW)(m.type) : "";
                    return t.item.node ? n.createElement(k.Z, (0, N.Z)({}, t.item, {
                        onPress: t.item.onPress ? e => t.item.onPress(e, t.id) : void 0,
                        key: t.item.id || t.index
                    })) : n.createElement(l, (0, N.Z)({}, t.item, {
                        role: "menuitem",
                        className: r()(t.item.className, i.toolbar.dropdownButton, "Focused" === c && i.toolbar["dropdownButton" + c]),
                        icon: m ? a(33720)(`./${u}.svg`) : t.item.icon,
                        itemComponentProps: d
                    }))
                },
                onSelect: (e, t) => {
                    const {onPress: a, disabled: o} = t.item;
                    o || a && a(e, null == d ? void 0 : d(t.item), t.item.id)
                },
                noInitialSelection: !0,
                frameWindow: c
            }))
        }));
        var z, A;

        function F(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(a), !0).forEach((function (t) {
                    (0, o.Z)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        const B = "disable-zoom-in", L = "disable-zoom-out", R = new P.$u({width: g.zA, height: g._2});

        function G(e, t, a) {
            return Math.min(a, Math.max(t, e))
        }

        const T = e => {
            const {styles: t, formatMessage: o, movePreview: s} = e;
            return n.createElement("div", {
                style: {width: e.width, height: e.height},
                className: r()(t.importedDocument, {[t.importedDocumentMovePreview]: s})
            }, n.createElement("div", {className: t.importedDocumentIconCircle}, n.createElement(h.Z, {src: a(48982)})), n.createElement("span", {className: t.importedDocumentInfo}, o(W.documentMergedHere)))
        }, Z = (e, t, a) => {
            const o = t.flatten();
            let n = e.map((e => ({type: "page", page: e, rotation: 0, label: e.pageLabel})));
            const s = e => {
                const t = e.dupeOf || e.label;
                let a = 0;
                for (const e of n) "dupeOf" in e && null != e.dupeOf && e.dupeOf === t && null != e.dupeNumber && e.dupeNumber > a && (a = e.dupeNumber);
                return a + 1
            };
            let r = 0;
            for (const e of o) switch (e.type) {
                case"addPage": {
                    let t;
                    null != e.afterPageIndex ? t = e.afterPageIndex + 1 : ((0, d.kG)(null != e.beforePageIndex), t = e.beforePageIndex), ++r, n = n.insert(t, {
                        type: "newPage",
                        label: `${a(W.newPage)} ${r}`,
                        rotation: 0,
                        size: new P.$u({width: e.pageWidth, height: e.pageHeight})
                    });
                    break
                }
                case"removePages": {
                    const t = e.pageIndexes.map((e => n.get(e)));
                    for (const e of t) {
                        (0, d.kG)(null != e);
                        const t = n.indexOf(e);
                        n = n.delete(t)
                    }
                    break
                }
                case"rotatePages":
                    for (const t of e.pageIndexes) {
                        const a = n.get(t);
                        let o, s;
                        (0, d.kG)(null != a), (0, d.kG)("page" === a.type || "newPage" === a.type);
                        const r = a.rotation;
                        if (s = 90 === e.rotateBy ? 270 === r ? 0 : r + e.rotateBy : 90 === r ? 0 : 180 === r ? 90 : 270 === r ? 180 : r + e.rotateBy, (0, d.kG)(0 === s || 90 === s || 180 === s || 270 === s), "page" === a.type) o = K(K({}, a), {}, {rotation: s}); else {
                            if ("newPage" !== a.type) throw new d.p2("Rotation is not allowed on imported documents");
                            o = K(K({}, a), {}, {rotation: s})
                        }
                        n = n.set(t, o)
                    }
                    break;
                case"duplicatePages": {
                    const t = e.pageIndexes.map((e => n.get(e)));
                    for (const e of t) {
                        (0, d.kG)(null != e), (0, d.kG)("page" === e.type);
                        const t = s(e), a = e.dupeOf || e.label, o = n.indexOf(e);
                        n = n.insert(o + 1, Object.assign({}, e, {label: `${a} (${t})`, dupeOf: a, dupeNumber: t}))
                    }
                    break
                }
                case"movePages": {
                    const t = e.pageIndexes;
                    if (1 === t.length) {
                        const a = t[0];
                        let o;
                        null != e.beforePageIndex ? o = e.beforePageIndex : ((0, d.kG)(null != e.afterPageIndex), o = e.afterPageIndex + 1);
                        const s = n.get(a);
                        (0, d.kG)(null != s);
                        const r = n.get(o), l = n.size;
                        n = n.delete(a), o === l ? n = n.push(s) : 0 === o ? n = n.unshift(s) : ((0, d.kG)(null != r), n = n.insert(n.indexOf(r), s))
                    } else {
                        const a = t.slice().sort();
                        if (null != e.beforePageIndex) {
                            (0, d.kG)(0 === e.beforePageIndex);
                            const t = a.map((e => n.get(e))).reverse();
                            for (const e of t) (0, d.kG)(null != e), n = n.delete(n.indexOf(e)), n = n.unshift(e)
                        } else {
                            (0, d.kG)(null != e.afterPageIndex);
                            const t = n.get(e.afterPageIndex);
                            (0, d.kG)(null != t);
                            const o = a.map((e => n.get(e))).reverse();
                            for (const e of o) (0, d.kG)(null != e), n = n.delete(n.indexOf(e)), n = n.insert(n.indexOf(t) + 1, e)
                        }
                    }
                    break
                }
                case"importDocument": {
                    let t, a;
                    "beforePageIndex" in e && null != e.beforePageIndex ? t = e.beforePageIndex : ((0, d.kG)("afterPageIndex" in e && null != e.afterPageIndex), t = e.afterPageIndex + 1), "string" != typeof e.document ? ((0, d.kG)("string" == typeof e.document.name), a = e.document.name) : a = e.document, n = n.insert(t, {
                        type: "importedDocument",
                        label: a
                    });
                    break
                }
            }
            return n
        }, j = e => {
            const {pages: t, style: a, styles: o, previewCount: s} = e;
            return n.createElement("div", {className: o.movePreview}, n.createElement("div", {className: r()(o.movePreviewPages, {[o.movePreviewPagesLoose]: "loose" === a})}, t), n.createElement("div", {className: o.movePreviewCount}, s || t.length))
        }, H = e => {
            const {onCancel: t, onDialog: o, usesShadowDOM: s} = e, {
                    pages: E,
                    backend: N,
                    frameWindow: D,
                    footerItems: C,
                    toolbarItems: x
                } = (0, c.v9)((e => {
                    debugger
                    console.log('ss', s)
                    let {
                        pages: t,
                        backend: a,
                        frameWindow: o,
                        documentEditorFooterItems: n,
                        documentEditorToolbarItems: s
                    } = e;
                    return {pages: t, backend: a, frameWindow: o, footerItems: n.toJS(), toolbarItems: s.toJS()}
                }), c.wU),
                S = (0, c.I0)(), {formatMessage: F} = (0, i.YB)(), {styles: H} = e.CSS_HACK, [$, _] = (0, n.useState)((0, l.aV)()), [V, U] = (0, n.useState)(0),
                Y = $.slice(0, $.size - V),
                J = Z(E, Y, F), [X, q] = (0, n.useState)((0, l.l4)()), [Q, ee] = (0, n.useState)(!1), [te, ae] = (0, n.useState)(!1),
                oe = (0, n.useRef)(null),
                ne = (0, n.useRef)(null), [se, re] = (0, n.useState)(!1), [le, ie] = (0, n.useState)(""), {zoomStep: ce} = (0, c.v9)((e => e.viewportState)), {
                    thumbnailDefaultSize: de,
                    thumbnailMinSize: me,
                    thumbnailMaxSize: ue
                } = (0, c.v9)((e => e.documentEditorConfig)), [ge, pe] = (0, n.useState)((() => G(de, me, ue))), [fe, Pe] = (0, n.useState)(""),
                ye = (0, n.useCallback)((() => {
                    const e = ne.current;
                    null != e && (se && e.ownerDocument.activeElement !== e ? e.focus() : se || e.ownerDocument.activeElement !== e || e.blur())
                }), [se]), be = (0, n.useCallback)((e => {
                    re(e), ye(), o(e)
                }), [o, ye]);
            (0, n.useEffect)((() => {
                ye()
            }), [ye]);
            const ve = (0, n.useCallback)((e => {
                _(Y.push(e)), U(0)
            }), [Y]), he = (0, n.useRef)(!0);
            (0, n.useLayoutEffect)((() => () => {
                he.current && (he.current = !1)
            }), []);
            const Ie = (0, n.useCallback)((() => {
                    const e = E.get(0), t = e ? e.pageSize : R, a = K({
                        type: "addPage",
                        backgroundColor: P.Il.WHITE,
                        pageWidth: t.width,
                        pageHeight: t.height,
                        rotateBy: 0
                    }, 1 === X.size ? {afterPageIndex: X.first()} : {beforePageIndex: 0});
                    ve(a), q(X.clear())
                }), [E, X, ve]), we = (0, n.useCallback)((() => {
                    ve({type: "removePages", pageIndexes: X.toArray()}), q(X.clear())
                }), [ve, X]), ke = (0, n.useCallback)((() => {
                    ve({type: "duplicatePages", pageIndexes: X.toArray()}), q(X.clear())
                }), [ve, X]), Ee = (0, n.useCallback)((() => {
                    ve({type: "rotatePages", pageIndexes: X.toArray(), rotateBy: 270})
                }), [ve, X]), Ne = (0, n.useCallback)((() => {
                    ve({type: "rotatePages", pageIndexes: X.toArray(), rotateBy: 90})
                }), [ve, X]), De = (0, n.useCallback)((() => {
                    be(!se)
                }), [se, be]), Ce = (0, n.useCallback)((e => {
                    const t = e.target.value;
                    let a = t;
                    const o = parseInt(t, 10);
                    isNaN(o) || (a = Math.min(Math.max(o, 0), J.size).toString()), ie(a)
                }), [J.size]), xe = parseInt(le, 10), Se = (0, n.useCallback)((e => {
                    let t;
                    return 1 === e.size || null == e.sort().find((e => {
                        let a = !1;
                        return null != t && (a = e !== t + 1), t = e, a
                    }))
                }), []), Oe = (0, n.useCallback)(((e, t) => {
                    const a = null != t ? t : X, o = Se(a);
                    return !(a.includes(e - 1) || 0 === e && o && a.includes(0) || o && a.sort().first() === e)
                }), [X, Se]), Me = !isNaN(xe) && Oe(xe), ze = (0, n.useCallback)(((e, t) => {
                    const a = null != t ? t : X, o = e - 1;
                    ve(K({
                        type: "movePages",
                        pageIndexes: a.toArray()
                    }, 0 === e ? {beforePageIndex: 0} : {afterPageIndex: o}));
                    let n = (0, l.l4)(), s = 0;
                    0 !== e && (s = o + 1, a.forEach((e => {
                        e < o && --s
                    })));
                    let r = s;
                    a.forEach((() => {
                        n = n.add(r), ++r
                    })), q(n)
                }), [X, ve, q]), Ae = (0, n.useCallback)((e => {
                    e.preventDefault(), Me && (ze(xe), be(!1))
                }), [Me, xe, be, ze]), Fe = (0, n.useCallback)((e => {
                    const t = e.target;
                    if (!se || t.classList.contains(H.moveToolbarButton)) return;
                    const a = oe.current;
                    (0, d.kG)(null != a), a.contains(t) || be(!1)
                }), [se, be, H.moveToolbarButton]), Ke = (0, n.useCallback)((() => {
                    const e = X.sort().toList().map((e => ({type: "movePages", pageIndexes: [e], beforePageIndex: e - 1})));
                    ve(e), q((0, l.l4)(X.toArray().map((e => e - 1))))
                }), [ve, X]), Be = (0, n.useCallback)((() => {
                    const e = X.sort().toList().map((e => ({type: "movePages", pageIndexes: [e], afterPageIndex: e + 1})));
                    ve(e), q((0, l.l4)(X.toArray().map((e => e + 1))))
                }), [ve, X]), Le = (0, n.useCallback)((() => {
                    q(X.clear()), U(V + 1)
                }), [X, V]), Re = (0, n.useCallback)((() => {
                    q(X.clear()), U(V - 1)
                }), [X, V]), Ge = (0, n.useCallback)((async () => {
                    const e = {};
                    1 === X.size ? e.afterPageIndex = X.first() : e.beforePageIndex = 0;
                    const t = document.createElement("input");
                    t.type = "file", t.accept = "application/pdf", t.setAttribute("multiple", ""), t.onclick = e => {
                        (0, d.kG)(e.target instanceof HTMLInputElement), e.target.value = ""
                    }, t.onchange = t => {
                        var a;
                        if ((0, d.kG)(t.target instanceof HTMLInputElement), 0 === (null === (a = t.target.files) || void 0 === a ? void 0 : a.length)) return;
                        let o = Y;
                        for (const a of t.target.files) {
                            if ("string" != typeof a.name || 0 === a.name.length) return;
                            if ("application/pdf" !== a.type) return void (0, d.wp)("The uploaded file must be a PDF.");
                            a.arrayBuffer().then((t => {
                                o = o.push(K({
                                    type: "importDocument",
                                    treatImportedDocumentAsOnePage: !0,
                                    document: new File([t], a.name, {type: a.type, lastModified: a.lastModified})
                                }, e)), _(o), U(0), q(X.clear())
                            })).catch((e => {
                                throw new d.p2(`Could not read the imported file: ${e.message}`)
                            }))
                        }
                    }, t.click()
                }), [X, Y]), Te = (0, n.useCallback)((async () => {
                    ee(!0);
                    try {
                        const e = await N.exportPDFWithOperations(Y.flatten().toArray().map(y.kg).concat([{
                            type: "keepPages",
                            pageIndexes: X.toArray()
                        }]));
                        (0, f.cR)(e, D)
                    } catch (e) {
                        throw e
                    } finally {
                        he.current && ee(!1)
                    }
                }), [N, Y, D, X]), Ze = (0, n.useCallback)((() => {
                    q(J.keySeq().toSet())
                }), [J, q]), je = (0, n.useCallback)((() => {
                    q(X.clear())
                }), [X, q]), He = (0, n.useCallback)((e => {
                    X.has(e) ? q(X.delete(e)) : q(X.add(e))
                }), [X, q]), We = (0, n.useCallback)((() => {
                    t()
                }), [t]), $e = (0, n.useCallback)((() => {
                    ee(!0), S((0, p.b_)(Y.flatten().toArray(), (() => {
                        he.current && ee(!1)
                    }), (e => {
                        throw he.current && ee(!1), e
                    })))
                }), [S, Y]), _e = (0, n.useCallback)((async () => {
                    ee(!0);
                    try {
                        const e = await N.exportPDFWithOperations(Y.flatten().toArray().map(y.kg));
                        (0, f.cR)(e, D)
                    } catch (e) {
                        throw e
                    } finally {
                        he.current && ee(!1)
                    }
                }), [N, Y, D]), Ve = (e, t, a, o) => {
                    const s = J.get(e);
                    let r;
                    switch ((0, d.kG)(null != s), s.type) {
                        case"page":
                            r = n.createElement(u.Z, {
                                key: `page-${s.label}`,
                                page: s.page,
                                size: t,
                                maxSize: a,
                                rotation: s.rotation
                            });
                            break;
                        case"newPage": {
                            const {rotatedWidth: e, rotatedHeight: o} = (0, u.X)(s.size, s.rotation, t, a);
                            r = n.createElement("div", {
                                key: `newPage-${s.label}`,
                                className: H.newPage,
                                style: {width: e, height: o}
                            });
                            break
                        }
                        case"importedDocument": {
                            const {containerWidth: e, containerHeight: l} = (0, u.X)(R, 0, t, a);
                            r = n.createElement(T, {
                                width: e,
                                height: l,
                                movePreview: o,
                                key: `importedDoc-${s.label}`,
                                styles: H,
                                formatMessage: F
                            });
                            break
                        }
                        default:
                            r = n.createElement(n.Fragment, null), (0, d.Rz)(s.type)
                    }
                    return {
                        item: r,
                        label: s.label,
                        props: "page" === s.type ? {"data-original-page-index": s.page.pageIndex} : {}
                    }
                }, Ue = X.size > 0 && X.size !== J.size && !Q, Ye = X.size > 0 && void 0 === X.find((e => {
                    const t = J.get(e);
                    return (0, d.kG)(null != t), "page" !== t.type && "newPage" !== t.type
                })), Je = X.size > 0 && void 0 === X.find((e => {
                    const t = J.get(e);
                    return (0, d.kG)(null != t), "page" !== t.type
                })), Xe = !X.isEmpty() && X.size !== J.size && !Q, qe = !X.isEmpty() && !X.includes(0),
                Qe = !X.isEmpty() && !X.includes(J.size - 1), et = V < $.size, tt = V > 0, at = X.size < J.size && !Q,
                ot = !X.isEmpty() && !Q, nt = (0, n.useRef)(null),
                st = (0, n.useRef)(!1), [rt, lt] = (0, n.useState)(new P.$u), [it, ct] = (0, n.useState)(Number.POSITIVE_INFINITY),
                dt = (0, n.useCallback)((e => {
                    lt((t => (t.width !== e.width && ct(Number.POSITIVE_INFINITY), new P.$u({
                        width: e.width,
                        height: e.height
                    }))))
                }), [lt, ct]);
            (0, n.useLayoutEffect)((() => {
                const e = vt.current;
                if (!e || 0 === rt.width) return;
                const t = e.children;
                if (t.length === it) return;
                const a = e.ownerDocument.defaultView.getComputedStyle(e);
                let o = 44 + (parseInt(a.getPropertyValue("padding-left")) || 0) + (parseInt(a.getPropertyValue("padding-right")) || 0);
                const n = [].findIndex.call(t, ((e, t) => "spacer" !== x[t].type && (o += e.clientWidth, o > rt.width)));
                ct(-1 === n ? Number.POSITIVE_INFINITY : n);
                e.ownerDocument.defaultView.innerWidth >= g.Fg ? ae(!0) : ae(!1)
            }), [rt, it, ct, x]);
            const mt = (0, n.useCallback)((() => {
                fe !== B && pe((e => {
                    const t = e * ce;
                    return t < ue ? (Pe(""), t) : (Pe(B), ue)
                }))
            }), [fe, ue, ce]), ut = (0, n.useCallback)((() => {
                fe !== L && pe((e => {
                    const t = e / ce;
                    return t < me ? (Pe(L), me) : (Pe(""), t)
                }))
            }), [fe, me, ce]), gt = (0, n.useCallback)((() => {
                pe(G(de, me, ue)), Pe("")
            }), [de, ue, me]);
            (0, n.useLayoutEffect)((() => {
                const e = nt.current;
                if (null == e) return;
                st.current || (e.focus(), st.current = !0);
                const t = e => {
                    if (null != document.activeElement && "INPUT" === document.activeElement.tagName) return;
                    if (Q) return;
                    const t = e.key.toLowerCase(), a = e.metaKey || e.ctrlKey, o = a && !e.shiftKey && !e.altKey,
                        n = e.altKey && !a && !e.shiftKey, s = !a && !e.shiftKey && !e.altKey;
                    if (e.altKey && e.shiftKey && !a && "arrowleft" === t && Ye) Ee(); else if (e.altKey && e.shiftKey && !a && "arrowright" === t && Ye) Ne(); else if (n && "arrowleft" === t && qe) Ke(); else if (n && "arrowright" === t && Qe) Be(); else if (a && e.shiftKey && !e.altKey && "z" === t && tt) Re(); else if (o && "z" === t && et) Le(); else if (o && "a" === t && at) Ze(); else if (o && "d" === t && ot) je(); else if (!o || "=" !== t && "+" !== t) if (o && "-" === t) ut(), e.stopPropagation(); else if (o && "0" === t) gt(), e.stopPropagation(); else if (s && "n" === t) Ie(); else if (s && "d" === t && Ue) we(); else if (s && "c" === t && Je) ke(); else if (s && "l" === t && Ye) Ee(); else if (s && "r" === t && Ye) Ne(); else if (s && "m" === t && Xe) be(!0); else {
                        if (!s || "i" !== t) return;
                        Ge()
                    } else mt(), e.stopPropagation();
                    e.preventDefault()
                };
                return e.addEventListener("keydown", t), () => {
                    e.removeEventListener("keydown", t)
                }
            }), [Je, Xe, qe, Qe, tt, Ue, Ye, at, ot, et, Ie, ke, Ge, Ke, Be, Re, we, Ee, Ne, Ze, je, Le, mt, ut, gt, Q, be]);
            let pt = {left: 0, top: 0, x: 0, y: 0};
            if (nt.current) {
                const e = nt.current.getRootNode();
                e instanceof ShadowRoot && (pt = e.host.getBoundingClientRect())
            }
            const ft = H.toolbar.toolbarButton,
                Pt = [{type: "add", onPress: Ie, className: ft, disabled: Q, children: F(W.newPage)}, {
                    type: "remove",
                    onPress: we,
                    className: ft,
                    disabled: !Ue,
                    children: F(W.removePage)
                }, {
                    type: "duplicate",
                    onPress: ke,
                    className: ft,
                    children: F(W.duplicatePage),
                    disabled: !Je || Q
                }, {
                    type: "rotate-left",
                    onPress: Ee,
                    className: ft,
                    children: F(W.rotatePageLeft),
                    disabled: !Ye || Q
                }, {
                    type: "rotate-right",
                    onPress: Ne,
                    className: ft,
                    children: F(W.rotatePageRight),
                    disabled: !Ye || Q
                }, {
                    type: "move",
                    onPress: De,
                    className: r()(ft, H.moveToolbarButton),
                    children: F(W.openMoveDialog),
                    disabled: !Xe
                }, {
                    type: "move-left",
                    onPress: Ke,
                    className: H.toolbar.toolbarButton,
                    children: F(W.moveBefore),
                    disabled: !qe || Q
                }, {
                    type: "move-right",
                    onPress: Be,
                    className: ft,
                    children: F(W.moveAfter),
                    disabled: !Qe || Q
                }, {
                    type: "import-document",
                    onPress: Ge,
                    className: ft,
                    children: F(W.mergeDocument),
                    disabled: Q
                }, {
                    type: "extract-pages",
                    onPress: Te,
                    className: ft,
                    children: F(W.extractPages),
                    disabled: 0 === X.size || Q
                }, {type: "spacer"}, {
                    type: "undo",
                    onPress: Le,
                    className: ft,
                    children: F(b.Z.undo),
                    disabled: !et || Q
                }, {
                    type: "redo",
                    onPress: Re,
                    className: ft,
                    children: F(b.Z.redo),
                    disabled: !tt || Q
                }, {
                    type: "select-all",
                    onPress: Ze,
                    className: ft,
                    children: F(W.selectAll),
                    disabled: !at
                }, {
                    type: "select-none",
                    onPress: je,
                    className: ft,
                    children: F(W.selectNone),
                    disabled: !ot
                }, {
                    type: "zoom-out",
                    onPress: ut,
                    className: ft,
                    children: F(W.zoomOut),
                    disabled: fe === L
                }, {
                    type: "zoom-in",
                    onPress: mt,
                    className: ft,
                    children: F(W.zoomIn),
                    disabled: fe === B
                }], [yt, bt] = (0, n.useMemo)((() => it === Number.POSITIVE_INFINITY ? [x, []] : [x.slice(0, it), x.slice(it).filter((e => "spacer" !== e.type)).map(((e, t) => ({
                    index: t,
                    item: K(K({}, e), {}, {dropdownGroup: "documentEditor"})
                })))]), [x, it]), vt = (0, n.useRef)(null), ht = (0, n.useCallback)((e => {
                    "Escape" === e.key && se && (be(!1), e.stopPropagation())
                }), [se, be]), It = (0, n.useMemo)((() => null != yt.find((e => "move" === e.type))), [yt]),
                wt = n.createElement("div", {
                    className: r()(H.moveDialog, {
                        [H.moveDialogShown]: se,
                        [H.moveDialogDetached]: !It
                    }, "PSPDFKit-DocumentEditor-MoveDialog"), ref: oe
                }, n.createElement("form", {
                    onSubmit: Ae,
                    className: H.moveDialogForm
                }, n.createElement("span", {className: H.moveDialogFormLabel}, F(W.insertAfterPage)), n.createElement("input", {
                    className: H.moveDialogFormInput,
                    type: "number",
                    min: "0",
                    max: J.size,
                    value: le,
                    onChange: Ce,
                    ref: ne
                }), n.createElement(m.zx, {
                    type: "submit",
                    className: H.moveDialogMoveButton,
                    disabled: !Me
                }, F(W.move))), n.createElement("div", {className: H.moveDialogHint}, n.createElement("p", {className: H.moveDialogHintText}, F(W.docEditorMoveBeginningHint)))),
                kt = (0, n.useCallback)(((e, t) => {
                    const a = (0, l.l4)(e);
                    Oe(t, a) && ze(t, a)
                }), [ze, Oe]);
            let Et;
            const Nt = se && !isNaN(xe);
            if (Nt) {
                const e = X.toList().sort().map((e => Ve(e, 160, 160, !0).item)).toArray(),
                    t = n.createElement(j, {pages: e, style: "straight", styles: H});
                Nt && (Et = 0 === xe ? {previewContent: t, pageIndex: 0, position: "left"} : {
                    previewContent: t,
                    pageIndex: xe - 1,
                    position: "right"
                }, Me || (Et.disabled = !0))
            }
            const Dt = (0, n.useMemo)((() => ({
                cancel: {
                    element: n.createElement(m.zx, null, F(b.Z.cancel)),
                    onPress: We,
                    className: "PSPDFKit-DocumentEditor-CancelButton"
                },
                "selected-pages": {
                    element: n.createElement("div", null, n.createElement("div", {className: H.pagesSelectedIcon}, n.createElement(h.Z, {src: a(13006)})), F(W.pagesSelected, {arg0: X.size})),
                    className: r()({
                        [H.pagesSelectedIndicator]: !0,
                        [H.pagesSelectedIndicatorShown]: X.size > 0,
                        "PSPDFKit-DocumentEditor-PagesSelectedIndicator": !0
                    })
                },
                spacer: {
                    element: z || (z = n.createElement("div", null)),
                    className: r()({[H.spacer]: !0, "PSPDFKit-DocumentEditor-Spacer": !0})
                },
                "loading-indicator": {
                    element: A || (A = n.createElement(I.Z, null)),
                    hide: !Q,
                    className: "PSPDFKit-DocumentEditor-LoadingIndicator"
                },
                "save-as": {
                    element: n.createElement(m.zx, null, F(b.Z.saveAs)),
                    onPress: _e,
                    disabled: Q,
                    className: "PSPDFKit-DocumentEditor-SaveAsButton"
                },
                save: {
                    element: n.createElement(m.zx, {primary: !0}, F(b.Z.save)),
                    disabled: Y.isEmpty() || Q,
                    onPress: $e,
                    className: "PSPDFKit-DocumentEditor-SaveButton"
                }
            })), [H, F, We, _e, $e, Q, Y, X]), Ct = (0, n.useMemo)((() => C.map(((e, t) => {
                const {onPress: a, className: o, type: s, node: i, id: c} = e;
                if ((0, d.kG)(s), "custom" === s) {
                    let e;
                    if (a) {
                        const t = {
                            setOperations: (e, t) => {
                                const a = e($);
                                if (!l.aV.isList(a)) throw new d.p2("The setOperations callback must return an Immutable List of DocumentOperation objects.");
                                _(a), t && q((0, l.l4)())
                            }, getSelectedPageIndexes: () => X.toArray()
                        };
                        e = async e => {
                            ee(!0);
                            try {
                                await a(e, t, c)
                            } catch (e) {
                                throw e
                            } finally {
                                ee(!1)
                            }
                        }
                    }
                    return i ? n.createElement(k.Z, {className: o, onPress: e, key: c || t, node: i}) : null
                }
                {
                    const e = Dt[s];
                    return e.hide ? null : (0, n.cloneElement)(e.element, {
                        onClick: t => {
                            e.onPress && e.onPress(t)
                        }, key: s, disabled: e.disabled, className: r()(e.className, o)
                    })
                }
            }))), [C, Dt, $, X]), xt = e => {
                if (e.onPress) {
                    const t = {
                        setOperations: (e, t) => {
                            const a = e($);
                            if (!l.aV.isList(a)) throw new d.p2("The setOperations callback must return an Immutable List of DocumentOperation objects.");
                            _(a), t && q((0, l.l4)())
                        }, getSelectedPageIndexes: () => X.toArray()
                    };
                    return async a => {
                        ee(!0);
                        try {
                            var o;
                            await (null === (o = e.onPress) || void 0 === o ? void 0 : o.call(e, a, t, e.id))
                        } catch (a) {
                            throw a
                        } finally {
                            ee(!1)
                        }
                    }
                }
                return () => {
                }
            }, St = n.useRef(null);
            return n.createElement("div", {
                className: r()(H.docEditor, !s && H.withIframe, "PSPDFKit-DocumentEditor"),
                onClick: Fe,
                onKeyDown: ht,
                tabIndex: "-1",
                ref: nt
            }, n.createElement("div", {
                className: r()(H.toolbar.root, H.toolbarRoot, "PSPDFKit-DocumentEditor-Toolbar"),
                style: {flex: 0}
            }, n.createElement("div", {ref: vt, className: H.toolbarContainer}, n.createElement(O, {
                items: yt,
                builtInItems: Pt,
                moveDialog: wt,
                CSS_HACK: e.CSS_HACK,
                getCustomerCallbackForItem: xt
            })), n.createElement(M, {
                builtInItems: Pt,
                items: bt,
                CSS_HACK: e.CSS_HACK,
                frameWindow: D,
                getCustomerCallbackForItem: xt
            })), n.createElement("div", {className: H.pagesView}, n.createElement(w.Z, {onResize: dt}), !It && wt, n.createElement("div", {
                className: r()(H.pagesGrid, {[H.pagesGridLargeThumbnails]: te}),
                ref: St
            }, n.createElement(v.Z, {
                canInsert: (e, t) => Oe(t, (0, l.l4)(e)),
                totalItems: J.size,
                width: rt.width,
                height: rt.height,
                itemScale: e.scale,
                thumbnailHeight: ge,
                renderItemCallback: Ve,
                renderDragPreviewCallback: (e, t, a, o) => {
                    const s = (0, l.aV)(e).filter((e => e !== t)).sort().push(t).slice(-5).map((e => Ve(e, a, o, !0).item)).toArray();
                    return n.createElement(j, {pages: s, style: "straight", styles: H, previewCount: e.length})
                },
                onItemPress: He,
                selectedItemIndexes: X,
                cssPrefix: "PSPDFKit-DocumentEditor",
                moveCursor: null != Et ? Et : void 0,
                onItemsMove: se ? void 0 : kt,
                containerOffset: pt,
                gridContainerEl: St.current
            }))), n.createElement("div", {className: r()(H.bottomBar, "PSPDFKit-DocumentEditor-Footer")}, Ct))
        }, W = (0, i.vU)({
            newPage: {id: "newPage", defaultMessage: "New Page", description: "Add new page"},
            removePage: {id: "removePage", defaultMessage: "Remove Page", description: "Remove page"},
            duplicatePage: {id: "duplicatePage", defaultMessage: "Duplicate Page", description: "Duplicate page"},
            rotatePageLeft: {id: "rotatePageLeft", defaultMessage: "Rotate Page Left", description: "Rotate Page Left"},
            rotatePageRight: {
                id: "rotatePageRight",
                defaultMessage: "Rotate Page Right",
                description: "Rotate Page Right"
            },
            mergeDocument: {id: "mergeDocument", defaultMessage: "Merge Document", description: "Merge Document"},
            extractPages: {id: "extractPages", defaultMessage: "Extract Pages", description: "Extract Pages"},
            selectAll: {id: "selectAll", defaultMessage: "Select All", description: "Select All Pages"},
            selectNone: {id: "selectNone", defaultMessage: "Select None", description: "Deselect All Pages"},
            openMoveDialog: {
                id: "openMoveDialog",
                defaultMessage: "Move…",
                description: "Open dialog for moving pages to specific location in the document"
            },
            move: {id: "move", defaultMessage: "Move", description: "Move pages to specific location in the document"},
            moveBefore: {id: "moveBefore", defaultMessage: "Move Before", description: "Move page before previous one"},
            moveAfter: {id: "moveAfter", defaultMessage: "Move After", description: "Move page after next one"},
            documentMergedHere: {
                id: "documentMergedHere",
                defaultMessage: "Document will be merged here",
                description: "Placeholder for the imported document"
            },
            pagesSelected: {
                id: "pagesSelected",
                defaultMessage: "{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",
                description: "Number of pages selected."
            },
            insertAfterPage: {
                id: "insertAfterPage",
                defaultMessage: "Insert after page",
                description: "Move selected pages after designated page index."
            },
            docEditorMoveBeginningHint: {
                id: "docEditorMoveBeginningHint",
                defaultMessage: "Type “0” to move selected pages to the beginning of the document.",
                description: "Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor."
            },
            zoomIn: {id: "zoomIn", defaultMessage: "Zoom In", description: "Zoom in the document"},
            zoomOut: {id: "zoomOut", defaultMessage: "Zoom Out", description: "Zoom out the document"}
        })
    }, 33720: (e, t, a) => {
        var o = {
            "./add.svg": 69558,
            "./duplicate.svg": 24388,
            "./extractPages.svg": 88105,
            "./help.svg": 9451,
            "./importDocument.svg": 48982,
            "./move.svg": 6058,
            "./moveLeft.svg": 91288,
            "./moveRight.svg": 46018,
            "./multiplePages.svg": 13006,
            "./redo.svg": 52449,
            "./remove.svg": 1562,
            "./rotateLeft.svg": 52684,
            "./rotateRight.svg": 58287,
            "./selectAll.svg": 57208,
            "./selectNone.svg": 95119,
            "./undo.svg": 32428,
            "./zoomIn.svg": 62475,
            "./zoomOut.svg": 75480
        };

        function n(e) {
            var t = s(e);
            return a(t)
        }

        function s(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }

        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = s, e.exports = n, n.id = 33720
    }
}]);