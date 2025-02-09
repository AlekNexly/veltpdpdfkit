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
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([[6377], {
    22425: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, {default: () => J});
        var r = n(17375), s = n(96156), i = n(35369), o = n(15359), a = n(51679), l = n(34997), h = n(81249),
            c = n(87463), u = n(71856), p = n(84254), d = n(98492), m = n(11765), f = n(2427), g = n(96723),
            E = n(20063);

        class v extends (i.WV({
            authPayload: null,
            serverUrl: null,
            hostedBaseUrl: null,
            documentId: null,
            backendPermissions: null,
            documentURL: null,
            imageToken: null,
            instantSettings: null,
            token: null,
            features: (0, i.aV)(),
            signatureFeatureAvailability: E.H.NONE,
            isFormsEnabled: !0,
            minSearchQueryLength: 1,
            documentHandle: null,
            isDocumentHandleOutdated: !1,
            digitalSignatures: null,
            defaultGroup: void 0,
            hasCollaborationPermissions: !1,
            forceLegacySignaturesFeature: !1
        })) {
        }

        var w = n(94809), y = n(87856), $ = n(60209), S = n(68944), R = n(98179);
        const P = "The image can not be rendered because of an unknown error.";

        class I {
            constructor(e) {
                let {identifier: t, url: n, token: r, payload: s, doNotRequestWebP: i = !1} = e;
                this.identifier = t, this.url = n, this.token = r, this.payload = s, this.doNotRequestWebP = i
            }

            abort() {
                var e;
                null === (e = this.httpRequest) || void 0 === e || e.abort()
            }

            request() {
                return new Promise(((e, t) => {
                    const n = new XMLHttpRequest;
                    this.httpRequest = n, n.open(this.payload ? "POST" : "GET", this.url, !0), n.setRequestHeader("X-PSPDFKit-Image-Token", this.token), n.setRequestHeader("PSPDFKit-Platform", "web"), n.setRequestHeader("PSPDFKit-Version", (0, S.oM)()), y.Zy && !this.doNotRequestWebP && n.setRequestHeader("Accept", "image/webp,*/*"), n.responseType = "blob", n.onreadystatechange = (async () => {
                        if (4 !== n.readyState) return;
                        if (n.response && n.response.type.startsWith("application/json")) {
                            const r = new FileReader;
                            return r.onload = n => {
                                var r;
                                const s = JSON.parse(null === (r = n.target) || void 0 === r ? void 0 : r.result);
                                s.attachments_not_found ? e({attachmentsNotFound: s.attachments_not_found}) : s.error ? "initialization_error" === s.error ? e(null) : t(new o.p2(`The server could not render the requested image (${s.error})`)) : t(new o.p2(P))
                            }, r.onerror = () => t(new o.p2(P)), void r.readAsText(n.response)
                        }
                        if (!(0, w.vu)(n.status)) return void t(new o.p2(P));
                        const r = n.response, s = URL.createObjectURL(r), i = new Image;
                        i.onerror = () => t(new o.p2(P)), i.src = s;
                        const a = i.decode();
                        try {
                            await a
                        } catch (e) {
                            if (!R.i7) throw new o.p2(`The image could not be decoded: ${e.message}`);
                            await new Promise((e => setTimeout(e, 200)))
                        }
                        e(new $.Z(i, (() => URL.revokeObjectURL(s))))
                    }).bind(this), n.send(this.payload)
                }))
            }
        }

        var b = n(10983), A = n(65160), O = n(33427), _ = n(7407), N = n(4715), L = n(78025);
        var T = n(88265), x = n(91038), F = n(32751), D = n(96650), C = n(87460), j = n(67055), k = n(21853),
            U = n(43069), M = n(44550), G = n(12705), H = n(74311), q = n(67009), V = n(86528), X = n(46364);
        const B = ["color", "fillColor", "outlineColor"];

        function z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? z(Object(n), !0).forEach((function (t) {
                    (0, s.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        class J extends C.W {
            constructor(e) {
                var t, n;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                if (super(), t = this, (0, s.Z)(this, "_password", null), (0, s.Z)(this, "type", "SERVER"), (0, s.Z)(this, "_requestRenderAnnotation", ((e, n, r, s, i, a) => {
                    const h = `${this._state.documentURL}/render_annotation`,
                        c = `render-annotation-${a ? (0, l.SK)() : e.id}`, u = JSON.stringify({
                            data: (0, m.Hs)(e),
                            width: s,
                            height: i,
                            detached: a || void 0,
                            formFieldValue: n ? (0, m.kr)(n) : void 0
                        });
                    let p = !1, d = [];
                    const f = (0, X.d6)();
                    if (e instanceof N.GI) {
                        if (this.isVisuallyIdenticalStampAnnotationCached({
                            annotation: e,
                            width: s,
                            height: i
                        })) return this.cachedStampAnnotationDiscardablePromise(f);
                        (0, O.eD)(e) || (this._cachedRenderedAnnotation = {
                            index: (0, O.et)(e),
                            width: s,
                            height: i,
                            APStreamPromise: f.promise
                        })
                    }
                    return function n() {
                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        const l = new FormData;
                        l.append("render", u), a.length > 0 && "imageAttachmentId" in e && e.imageAttachmentId && r && l.append(e.imageAttachmentId, r);
                        const m = new I({
                            identifier: c,
                            url: h,
                            token: t._state.imageToken,
                            payload: l,
                            doNotRequestWebP: s > b.pt || i > b.pt
                        }), g = t._requestQueue.enqueue(m, !1);
                        g.promise.then((e => {
                            p || (null != e && e.attachmentsNotFound ? n(e.attachmentsNotFound) : null != e && e.attachmentsNotFound ? f.reject(new o.p2("Attachment could not be found.")) : f.resolve(e))
                        })).catch((e => {
                            p || f.reject(e)
                        })), d.push(g)
                    }(), {
                        promise: f.promise, cancel: () => {
                            p = !0, d.forEach((e => {
                                e.cancel()
                            }))
                        }
                    }
                })), (0, s.Z)(this, "_requestRenderAnnotations", ((e, t, n, r, s) => {
                    const i = `${this._state.documentURL}/render_annotations`, o = JSON.stringify({
                        annotations: t.map(((t, s) => ({
                            pageIndex: e,
                            pdfObjectId: t,
                            width: n[s],
                            height: r[s]
                        }))), formFieldValues: s
                    });
                    let a, l, h = !1;
                    const c = new Promise(((e, t) => {
                        a = e, l = t
                    }));
                    return this._fetch(i, {
                        method: "post",
                        body: o,
                        credentials: "include",
                        headers: {
                            "X-PSPDFKit-Image-Token": this._state.imageToken,
                            "Content-Type": "application/json",
                            Accept: "multipart/form-data"
                        }
                    }).then((e => e.formData())).then((e => {
                        h || a(Array.from(e.values()))
                    })).catch((e => {
                        h || l(e)
                    })), {
                        promise: c, cancel: () => {
                            h = !0
                        }
                    }
                })), (0, s.Z)(this, "handleDocumentHandleConflict", (() => {
                    this._state = this._state.set("isDocumentHandleOutdated", !0), this.cancelRequests(), this._destroyProvider()
                })), "object" != typeof e.authPayload) throw new o.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");
                const i = null === (n = e.authPayload) || void 0 === n ? void 0 : n.accessToken;
                let h = null, c = null, u = null;
                if (i) u = e.hostedBaseUrl || "https://api.pspdfkit.com/", (0, w.sf)(u), (0, f.eU)(i); else {
                    if (h = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                        const n = e.serverUrl || (0, S.SV)(t.document);
                        if ("/" !== n.substr(-1)) throw new o.p2("`serverUrl` must have a slash at the end (e.g. `https://pspdfkit.example.com/`).");
                        if (!e.serverUrl) {
                            if (n === `${t.location.protocol}//${t.location.host}/`) throw new o.p2('PSPDFKit automatically infers the URL of PSPDFKit Document Engine from the current `<script>` tag.\nIn the current case, this URL is set to the same as the current browser\'s location.\nThis can happen when you bundle pspdfkit.js with your custom JavaScript for example.\n\nTo make sure everything works as expected, please set the `serverUrl` to the URL of PSPDFKit Document Engine:\n\nPSPDFKit.load({\n  serverUrl: "https://pspdfkit-server.example.com/",\n  ...,\n});')
                        }
                        return n
                    }(e, r), "string" != typeof e.documentId) throw new o.p2("`documentId` must be of type string.");
                    if (c = `${h}i/d/${e.documentId}`, "object" != typeof e.authPayload || !("jwt" in e.authPayload) || "string" != typeof e.authPayload.jwt) throw new o.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");
                    (0, f.yK)(e.authPayload.jwt)
                }
                !function (e) {
                    let t = "";
                    if ("boolean" != typeof e && ((0, o.PO)(e) ? (e.hasOwnProperty("clientsPresenceEnabled") && "boolean" != typeof e.clientsPresenceEnabled && (t += "`clientsPresenceEnabled` in instance settings is not valid. Must be `true` or `false`.\n"), e.hasOwnProperty("listenToServerChangesEnabled") && "boolean" != typeof e.listenToServerChangesEnabled && (t += "`listenToServerChangesEnabled` in instance settings is not valid. Must be `true` or `false`.\n")) : t = "`instant` flag must either be set to `true` or `false`\n", t)) throw new o.p2(`${t}\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/`)
                }(e.instant);
                let p = null;
                if (e.instant) if ((0, o.PO)(e.instant)) {
                    const t = e.instant;
                    p = {
                        clientsPresenceEnabled: !1 !== t.clientsPresenceEnabled,
                        listenToServerChangesEnabled: !1 !== t.listenToServerChangesEnabled
                    }
                } else p = x.q;
                this._requestQueue = new a.g(b.Qc);
                const d = !!e.electronicSignatures && Boolean(e.electronicSignatures.forceLegacySignaturesFeature);
                this._state = new v({
                    serverUrl: h,
                    hostedBaseUrl: u,
                    documentId: e.documentId,
                    instantSettings: p,
                    documentURL: c,
                    authPayload: e.authPayload,
                    isFormsEnabled: !e.disableForms,
                    forceLegacySignaturesFeature: d
                }), e.trustedCAsCallback && (0, o.ZK)("PSPDFKit.Configuration#trustedCAsCallback is only used on Standalone deployments. On a Server-Backed deployment, please follow the instructions at https://pspdfkit.com/guides/web")
            }

            isUsingInstantProvider() {
                return null != this._state.instantSettings
            }

            hasClientsPresence() {
                const e = this._state.instantSettings;
                return null != e && !1 !== e.clientsPresenceEnabled
            }

            async load() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                await this.tryAuthenticateHostedViewer();
                const {
                    imageToken: t,
                    token: n,
                    permissions: r,
                    features: s,
                    signatureFeatureAvailability: a,
                    hasPassword: l,
                    minSearchQueryLength: u,
                    layerHandle: p,
                    allowedTileScales: d,
                    digitalSignatures: f,
                    defaultGroup: g,
                    collaborationPermissions: v,
                    creatorName: w,
                    serverVersion: y,
                    documentEngineVersion: $
                } = await async function (e, t, n) {
                    const r = await fetch(`${e}/auth`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "PSPDFKit-Platform": "web",
                            "PSPDFKit-Version": (0, S.oM)()
                        },
                        body: JSON.stringify({jwt: t.jwt, origin: window.location.href, password: n}),
                        credentials: "include"
                    });
                    return r.ok ? r.json() : r.text().then((e => {
                        throw "INVALID_PASSWORD" === e ? new o.p2(e) : new o.p2(`An error occurred while connecting to PSPDFKit Document Engine: ${e || r.statusText}`)
                    }))
                }(`${this._state.serverUrl}i/d/${this._state.documentId}`, this._state.authPayload, e.password);
                this._password = e.password;
                const R = (0, h.valid)((0, h.coerce)(y)), P = (0, h.valid)((0, h.coerce)($));
                if (y && (0, h.lt)(R || "", "2023.5.0")) throw new o.p2(`Server version ${y} does not meet minimum required version 2023.5.0`);
                if ($ && (0, h.lt)(P || "", "1.0.0")) throw new o.p2(`Document Engine version ${$} does not meet minimum required version 1.0.0`);
                if (this._state.instantSettings && !s.includes(M.q.INSTANT)) throw new o.p2("Instant feature is not enabled on this server. Please set `instant` to `false`.\n\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/");
                const I = a === E.H.ELECTRONIC_SIGNATURES && (0, G.Vz)(s) && this._state.forceLegacySignaturesFeature ? E.H.LEGACY_SIGNATURES : a;
                if (this._state = this._state.withMutations((e => e.set("imageToken", t).set("token", n).set("features", (0, i.aV)(s)).set("signatureFeatureAvailability", I).set("backendPermissions", new L.Z({
                    readOnly: -1 === r.indexOf("write"),
                    downloadingAllowed: r.indexOf("download") >= 0
                })).set("documentURL", `${this._state.serverUrl}i/d/${this._state.documentId}/h/${p}`).set("documentHandle", p).set("isDocumentHandleOutdated", !1).set("digitalSignatures", (0, m.rS)(f)))), this.corePDFBridge = new V.V(c.f.createServerContext({
                    url: this._state.serverUrl,
                    token: this._state.token,
                    imageToken: this._state.imageToken,
                    documentId: this._state.documentId,
                    layerHandle: p,
                    headers: {"PSPDFKit-Platform": "web", "PSPDFKit-Version": (0, S.oM)()}
                })), v && !this._state.instantSettings) throw new o.p2("Collaboration Permissions is not supported when `instant` is disabled. Please make sure `configuration#instant` is set to `true`.");
                return this._state = this._state.withMutations((e => {
                    e.defaultGroup = g, e.hasCollaborationPermissions = Boolean(v)
                })), this.provider && this.provider.destroy(), this.provider = await this._initProvider(), this._state.instantSettings && this.provider.setDocumentHandleConflictCallback(this.handleDocumentHandleConflict), {
                    features: this._state.features,
                    signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                    hasPassword: l,
                    minSearchQueryLength: u,
                    allowedTileScales: d,
                    creatorName: w,
                    defaultGroup: g
                }
            }

            async tryAuthenticateHostedViewer() {
                if ("accessToken" in this._state.authPayload) {
                    const {hostedBaseUrl: e} = this._state, t = this._state.authPayload.accessToken, {
                        serverUrl: n,
                        serverId: r,
                        jwt: s
                    } = await async function (e, t) {
                        const n = await fetch(`${e}i/documents/auth`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "PSPDFKit-Platform": "web",
                                "PSPDFKit-Version": "cloud-protocol=1, server-protocol=5, client=2024.4.0, client-git=ffbc8fcc48"
                            },
                            body: JSON.stringify({accessToken: t})
                        });
                        if (n.ok) return n.json();
                        throw new Error(`An error occurred while connecting to PSPDFKit API: ${await n.text()}`)
                    }(e, t);
                    this._state = this._state.withMutations((e => {
                        e.set("serverUrl", n).set("documentId", r).set("documentURL", `${n}i/d/${r}`).set("authPayload", {jwt: s})
                    }))
                }
            }

            async _initProvider() {
                if (this._state.instantSettings) {
                    const e = `${this._state.serverUrl}i/d/${this._state.documentId}/h/${this._state.documentHandle}`, {InstantProvider: t} = await n.e(2333).then(n.bind(n, 36344));
                    return new t(`${this._state.serverUrl}i/d/${this._state.documentId}`, e, {auth_token: this._state.token}, this._state.instantSettings)
                }
                {
                    const e = this._state.isFormsEnabled && this._state.features.includes(M.q.FORMS), {RESTProvider: t} = await n.e(4099).then(n.bind(n, 87629));
                    return new t(this._state.documentURL, {token: this._state.token}, {isFormsEnabled: e})
                }
            }

            destroy() {
                this._destroyProvider(), this._requestQueue && this._requestQueue.destroy()
            }

            documentInfo() {
                return this._fetch(`${this._state.documentURL}/document.json`).then((e => e.json())).then((e => e.data))
            }

            getFormJSON() {
                return this._fetch(`${this._state.documentURL}/form.json`).then((e => 403 === e.status ? {
                    v: 1,
                    type: "pspdfkit/form",
                    annotations: [],
                    fields: []
                } : e.json().then((e => e.data))))
            }

            async evalFormValuesActions() {
                throw new Error("not implemented")
            }

            async evalScript() {
                throw new Error("not implemented")
            }

            async setFormJSONUpdateBatchMode() {
                throw new Error("not implemented")
            }

            compareDocuments() {
                throw new Error("not implemented")
            }

            updateButtonIcon() {
                throw new Error("not implemented")
            }

            permissions() {
                return Promise.resolve(this._state.backendPermissions)
            }

            getDefaultGroup() {
                return this._state.defaultGroup
            }

            isCollaborationPermissionsEnabled() {
                return this._state.hasCollaborationPermissions
            }

            textForPageIndex(e) {
                const t = `${this._state.documentURL}/page-${e}-text`,
                    n = new (this._getJSONRequestHandler())(t, this._state.token),
                    r = this._requestQueue.enqueue(n, !0);
                return {
                    promise: r.promise.then((t => (0, A.TH)(t, e))), cancel: () => {
                        r.cancel()
                    }
                }
            }

            async getSuggestedLineHeightFactor() {
                return 1
            }

            getAvailableFontFaces() {
                throw new o.p2("Custom fonts need to be mounted on the server in Server-Backed deployments.")
            }

            getContentTreeForPageIndex(e) {
                const t = `${this._state.documentURL}/page-${e}-text-content`,
                    n = new (this._getJSONRequestHandler())(t, this._state.token),
                    r = this._requestQueue.enqueue(n, !0);
                return {
                    promise: r.promise.then((t => {
                        let n = [], r = 0, s = 0;
                        return n = t.reduce(((t, n) => {
                            let {nodes: i} = n;
                            const o = (0, A.uv)(i, e, t.length, r, s);
                            return r += o.reduce(((e, t) => {
                                let {textLines: n} = t;
                                return e + n.size
                            }), 0), s += o.reduce(((e, t) => {
                                let {contentElements: n} = t;
                                return e + n.size
                            }), 0), t.concat(o)
                        }), []), (0, i.aV)(n)
                    })), cancel: () => {
                        r.cancel()
                    }
                }
            }

            getTextFromRects(e, t) {
                const n = encodeURIComponent(JSON.stringify(t.map(d.u).toArray()));
                return this._fetch(`${this._state.documentURL}/page-${e}-highlighted?rects=${n}`).then((e => e.json())).then((e => e.text))
            }

            _getJSONRequestHandler() {
                return g.Z
            }

            renderAnnotation(e, t, n, r, s) {
                return this._requestRenderAnnotation(e, t, n, r, s)
            }

            async renderPageAnnotations(e, t, n) {
                if (!y.Rh) {
                    const t = Promise.resolve();
                    return this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(e, t), t
                }
                const r = this.provider, s = t.some((e => e instanceof N.x_));
                s && await r._setReadStateCallbacksPromise;
                const i = [], o = t.filter((e => {
                    const t = s ? r._readStateCallbacks.getAnnotationWithFormField(e.id) : null,
                        n = null == t ? void 0 : t.formField, o = (0, O._R)(e, n);
                    if (o && n && "number" == typeof e.pdfObjectId) {
                        i.find((e => e.name === n.name)) || i.push((0, m.kr)((0, U.CH)(n)))
                    }
                    return o && "number" == typeof e.pdfObjectId
                }));
                if (0 === o.size && 0 === i.length) return Promise.resolve();
                const a = new Promise(((t, r) => {
                    const s = o.filter((e => 0 !== Math.floor(e.boundingBox.width * n) && 0 !== Math.floor(e.boundingBox.height * n))), {
                        promise: a,
                        cancel: l
                    } = this._requestRenderAnnotations(e, s.map((e => e.pdfObjectId)).toArray(), s.map((e => Math.floor(e.boundingBox.width * n))).toArray(), s.map((e => Math.floor(e.boundingBox.height * n))).toArray(), i);
                    a.then((e => {
                        const n = e.map((e => e && (0, k.R4)(e)));
                        n.forEach((async (e, t) => {
                            const n = await e, r = s.get(t);
                            if (r) {
                                const e = this.annotationAPStreamPromises.get(r.id);
                                e && (this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(r.id), e(n)), n && this.cacheAPStream(n, r)
                            }
                        })), Promise.all(n).then((() => t()))
                    })).catch((e => {
                        l(), r(e)
                    }))
                }));
                return this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(e, a), a
            }

            renderDetachedAnnotation(e, t, n, r) {
                return this._requestRenderAnnotation(e, null, t, n, r, !0)
            }

            async getAttachment(e) {
                try {
                    const t = await this._fetch(`${this._state.documentURL}/attachments/${e}`);
                    switch (t.status) {
                        case 404:
                            throw new o.p2("Attachment not Found.");
                        case 200:
                            return await t.blob();
                        default:
                            throw new o.p2("Bad Request.")
                    }
                } catch (e) {
                    throw new o.p2(`Could not fetch attachment from PSPDFKit Document Engine. ${e}`)
                }
            }

            async search(e, t, n, r) {
                let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D.S.TEXT;
                const o = `q=${i === D.S.PRESET ? e.replace(/_/g, "-") : encodeURIComponent(e)}&start=${t}&limit=${n}&type=${i}&include_annotations=${s.toString()}&case_sensitive=${r.toString()}`,
                    a = `${this._state.documentURL}/search?${o}`, l = await new g.Z(a, this._state.token).request();
                return (0, p.E)(l.data)
            }

            async getMeasurementSnappingPoints(e) {
            }

            async searchAndRedact(e, t) {
                const {searchType: n, annotationPreset: s, searchInAnnotations: o, caseSensitive: a} = t, {
                    color: l,
                    fillColor: h,
                    outlineColor: c
                } = s, u = (0, r.Z)(s, B), p = await this._fetch(`${this._state.documentURL}/redactions`, {
                    method: "post",
                    credentials: "include",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        strategy: n,
                        strategyOptions: {
                            [n]: n === D.S.PRESET ? e.replace(/_/g, "-") : e,
                            includeAnnotations: o,
                            caseSensitive: a
                        },
                        content: K(K({}, u), {}, {
                            color: l && l.toHex(),
                            fillColor: h && h.toHex(),
                            outlineColor: c && c.toHex()
                        })
                    })
                }), {data: d} = await p.json();
                return (0, i.aV)(d && d.annotations ? d.annotations.map((e => F.Z.fromJSON(e.id, e.content))) : [])
            }

            exportPDF() {
                let {
                    flatten: e = !1,
                    includeComments: t = !0,
                    excludeAnnotations: n = !1,
                    outputFormat: r = !1,
                    optimize: s = !1,
                    flattenElectronicSignatures: i = e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (e && !1 === i) throw new o.p2("Cannot set `flattenElectronicSignatures` to `false` when `flatten` is set to `true`.");
                const a = `${this._state.documentURL}/pdf?token=${this._state.token}${e ? `&flatten=${String(e)}` : ""}&comments=${String(t)}&render_ap_streams=${String(!e)}&remove_annotations=${String(n)}${e ? "" : `&keep_signatures=${!i}`}`;
                if (s) {
                    const e = {
                        documentFormat: "pdf",
                        grayscaleText: !1,
                        grayscaleGraphics: !1,
                        grayscaleFormFields: !1,
                        grayscaleAnnotations: !1,
                        grayscaleImages: !1,
                        disableImages: !1,
                        mrcCompression: !1,
                        imageOptimizationQuality: 2,
                        linearize: !1
                    };
                    let t;
                    if ("boolean" != typeof s) {
                        t = K(K({}, e), s)
                    } else t = e;
                    const {
                        documentFormat: n,
                        grayscaleText: r,
                        grayscaleGraphics: i,
                        grayscaleFormFields: o,
                        grayscaleAnnotations: l,
                        grayscaleImages: h,
                        disableImages: c,
                        mrcCompression: u,
                        imageOptimizationQuality: p,
                        linearize: d
                    } = t;
                    return fetch(a, {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            parts: [{document: {id: "#self"}}],
                            output: {
                                type: n,
                                grayscaleText: r,
                                grayscaleGraphics: i,
                                grayscaleFormFields: o,
                                grayscaleAnnotations: l,
                                grayscaleImages: h,
                                disableImages: c,
                                mrcCompression: u,
                                imageOptimizationQuality: p,
                                linearize: d
                            }
                        }),
                        credentials: "include"
                    }).then((e => e.arrayBuffer()))
                }
                if (r) {
                    const e = {conformance: H.w.PDFA_2B, vectorization: !0, rasterization: !0};
                    let t;
                    if ("boolean" != typeof r) {
                        t = K(K({}, e), r)
                    } else t = e;
                    const {conformance: n, vectorization: s, rasterization: i} = t;
                    return fetch(a, {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            parts: [{document: {id: "#self"}}],
                            output: {type: "pdfa", conformance: n, vectorization: s, rasterization: i}
                        }),
                        credentials: "include"
                    }).then((e => e.arrayBuffer()))
                }
                return fetch(a, {method: "GET", credentials: "include"}).then((e => e.arrayBuffer()))
            }

            exportOffice() {
                throw new Error("this feature is not available in DE")
            }

            exportXFDF() {
                return this._fetch(`${this._state.documentURL}/document.xfdf`).then((e => e.text()))
            }

            exportInstantJSON(e) {
                return this._fetch(`${this._state.documentURL}/instant.json${"number" == typeof e ? `?version=${e}` : ""}`).then((e => e.json()))
            }

            getPDFURL() {
                let {
                    includeComments: e = !0,
                    excludeAnnotations: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    promise: Promise.resolve(`${this._state.documentURL}/pdf?token=${this._state.token}&flatten=true&comments=${String(e)}&remove_annotations=${String(t)}`),
                    revoke: () => {
                    }
                }
            }

            generatePDFObjectURL() {
                let e, {
                    includeComments: t = !0,
                    excludeAnnotations: n = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = !1;
                return {
                    promise: new Promise((s => {
                        this.exportPDF({flatten: !0, includeComments: t, excludeAnnotations: n}).then((t => {
                            if (r) return;
                            const n = new Blob([t], {type: "application/pdf"});
                            e = window.URL.createObjectURL(n), s(e)
                        }))
                    })), revoke: () => {
                        e && window.URL.revokeObjectURL(e), r = !0
                    }
                }
            }

            async getDocumentOutline() {
                let e;
                try {
                    e = (await this._fetch(`${this._state.documentURL}/outline.json`).then((e => e.json()))).data
                } catch (t) {
                    e = {}
                }
                const t = Array.isArray(e.outline) ? e.outline : [];
                return (0, i.aV)(t.map(_.i))
            }

            async setDocumentOutline() {
                throw new o.p2("Not implemented in Server backend.")
            }

            async getPageGlyphs() {
                throw new o.p2("Not implemented in Server backend.")
            }

            onKeystrokeEvent() {
                throw new Error("not implemented")
            }

            async getMeasurementScales() {
                let e;
                try {
                    return e = (await this._fetch(`${this._state.documentURL}/measurement_content_formats`).then((e => e.json()))).data, e
                } catch (e) {
                    throw new o.p2(`Fetching measurement scales failed: ${e}`)
                }
            }

            async getSecondaryMeasurementUnit() {
                let e;
                try {
                    return e = (await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`).then((e => e.json()))).data, e
                } catch (e) {
                    throw new o.p2(`Fetching secondary measurement unit failed: ${e}`)
                }
            }

            async setSecondaryMeasurementUnit(e) {
                try {
                    const t = JSON.stringify({unitTo: e ? e.unitTo : null, precision: e ? e.precision : null});
                    await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`, {
                        method: "post",
                        body: t,
                        credentials: "include",
                        headers: {"Content-Type": "application/json"}
                    })
                } catch (e) {
                    throw new o.p2(`Setting secondary measurement unit failed: ${e}`)
                }
            }

            async addMeasurementScale(e) {
                try {
                    const t = JSON.stringify((0, u.f)(e));
                    await this._fetch(`${this._state.documentURL}/measurement_content_formats`, {
                        method: "post",
                        body: t,
                        credentials: "include",
                        headers: {"Content-Type": "application/json"}
                    })
                } catch (e) {
                    throw new o.p2(`Adding a new measurement scale failed: ${e}`)
                }
            }

            async removeMeasurementScale(e) {
                try {
                    const t = JSON.stringify((0, u.f)(e));
                    await this._fetch(`${this._state.documentURL}/measurement_content_formats/delete`, {
                        method: "post",
                        body: t,
                        credentials: "include",
                        headers: {"Content-Type": "application/json"}
                    })
                } catch (e) {
                    throw new o.p2(`Removing scale failed: ${e}`)
                }
            }

            async applyOperationsAndReload(e) {
                try {
                    const t = await W(e);
                    this._destroyProvider(), await this._fetch(`${this._state.documentURL}/apply-operations`, {
                        method: "post",
                        body: t,
                        credentials: "include"
                    })
                } catch (e) {
                    throw new o.p2(`Applying operations failed: ${e}`)
                }
                return this.reloadDocument()
            }

            async applyRedactionsAndReload() {
                try {
                    return this._destroyProvider(), await this._fetch(`${this._state.documentURL}/redact`, {
                        method: "post",
                        credentials: "include"
                    }), this.reloadDocument()
                } catch (e) {
                    throw this.provider.load(), new o.p2(`Applying redactions failed: ${e}`)
                }
            }

            async reloadDocument() {
                try {
                    return await this.load({password: this._password})
                } catch (e) {
                    throw new o.p2(`Reloading the document failed: ${e}`)
                }
            }

            async exportPDFWithOperations(e) {
                try {
                    const t = await W(e);
                    return this._fetch(`${this._state.documentURL}/pdf-with-operations`, {
                        method: "post",
                        body: t,
                        credentials: "include"
                    }).then((e => e.arrayBuffer()))
                } catch (e) {
                    throw new o.p2(`Exporting PDF with operations failed: ${e}`)
                }
            }

            async setSignaturesLTV(e) {
                throw new Error("not implemented")
            }

            async getSignaturesInfo() {
                return this._refreshSignaturesInfoPromise && await this._refreshSignaturesInfoPromise, this._state.digitalSignatures
            }

            refreshSignaturesInfo() {
                return this._refreshSignaturesInfoPromise || (this._refreshSignaturesInfoPromise = new Promise(((e, t) => {
                    this._fetch(`${this._state.documentURL}/signatures`, {
                        method: "get",
                        credentials: "include"
                    }).then((e => e.json())).then((t => {
                        let {data: n} = t;
                        this._state = this._state.set("digitalSignatures", (0, m.rS)(n)), this._refreshSignaturesInfoPromise = null, e()
                    })).catch((e => {
                        this._state = this._state.set("digitalSignatures", null), this._refreshSignaturesInfoPromise = null, t(e)
                    }))
                }))), this._refreshSignaturesInfoPromise
            }

            async signDocumentAndReload(e, t) {
                (0, o.kG)(void 0 === t || "object" == typeof t, "Signing service data must be an object if specified.");
                try {
                    var n, r;
                    if (void 0 !== t && "object" != typeof t) throw new o.p2("Signing service data must be an object if specified.");
                    (0, q.tK)(e);
                    const s = e ? K(K(K(K(K(K(K(K({}, "placeholderSize" in e ? {estimatedSize: e.placeholderSize} : null), "flatten" in e ? {flatten: e.flatten} : null), null != e && e.signatureMetadata ? {signatureMetadata: (0, m._D)(e.signatureMetadata)} : null), "position" in e ? {position: (0, m.eE)(e.position)} : null), "appearance" in e ? {appearance: await (0, m.sr)(e.appearance)} : null), "formFieldName" in e ? {formFieldName: e.formFieldName} : null), void 0 !== (null == e ? void 0 : e.signingData) && "signatureContainer" in e.signingData ? {signatureContainer: e.signingData.signatureContainer} : null), void 0 !== (null == e ? void 0 : e.signingData) && "signatureType" in e.signingData ? {signatureType: m.YA[e.signingData.signatureType]} : null) : null,
                        i = (null == e || null === (n = e.appearance) || void 0 === n ? void 0 : n.watermarkImage) || null,
                        a = (null == e || null === (r = e.appearance) || void 0 === r ? void 0 : r.graphicImage) || null,
                        l = K(K({}, t ? {signingToken: t.signingToken} : null), s), h = new FormData;
                    if (h.append("data", JSON.stringify(l)), i && h.append("image", i), a && h.append("graphicImage", a), this._destroyProvider(), await this._fetch(`${this._state.documentURL}/sign`, {
                        method: "post",
                        body: h,
                        credentials: "include"
                    }), await this.reloadDocument(), null != e && e.formFieldName) return e.formFieldName
                } catch (e) {
                    throw this.provider.load(), new o.p2(`Adding digital signature failed: ${e.message || e}`)
                }
            }

            async setFontSubstitutions(e) {
                try {
                    const t = `${this._state.documentURL}/font-substitutions`;
                    await this._fetch(t, {
                        method: "put",
                        body: JSON.stringify({fontSubstitutions: e}),
                        credentials: "include",
                        headers: {"Content-Type": "application/json"}
                    })
                } catch (e) {
                    throw new o.p2(`Error setting font substitution: ${e.message}`)
                }
            }

            getDocumentHandle() {
                return this._state.documentHandle
            }

            async getEmbeddedFiles() {
                var e;
                const t = await this._fetch(`${this._state.documentURL}/embedded-files`, {
                    method: "get",
                    credentials: "include"
                }), n = await t.json();
                return (0, i.aV)(null != n && null !== (e = n.data) && void 0 !== e && null !== (e = e.embeddedFiles) && void 0 !== e && e.length ? n.data.embeddedFiles.map((e => {
                    let {id: t, content: n} = e;
                    return (0, j.i)(t, n)
                })) : [])
            }

            cancelRequests() {
                this._requestQueue.cancelAll()
            }

            _destroyProvider() {
                this.provider && (this.provider._clients && this.provider._clients.disconnect(), this.provider.destroy())
            }

            async _fetch(e, t) {
                const n = await fetch(e, K(K({}, t), {}, {
                    headers: K(K({}, null == t ? void 0 : t.headers), {}, {
                        "X-PSPDFKit-Token": this._state.token,
                        "PSPDFKit-Platform": "web",
                        "PSPDFKit-Version": (0, S.oM)()
                    })
                }));
                if (!n.ok) {
                    let e = await function (e) {
                        return e.clone().json().catch((() => e.text()))
                    }(n);
                    e = "object" == typeof e ? e.reason : e;
                    const t = e || `${n.status} ${n.statusText}`;
                    throw new o.p2(t)
                }
                return n
            }

            syncChanges() {
                return this.provider.syncChanges()
            }

            async clearAPStreamCache() {
            }

            async runPDFFormattingScripts() {
                return []
            }

            async runPDFFormattingScriptsFromWidgets() {
                return this.runPDFFormattingScripts()
            }

            async lazyLoadPages() {
            }

            async contentEditorReload() {
                throw new Error("not implemented")
            }

            getOCGs() {
                throw new Error("not implemented")
            }

            getOCGVisibilityState() {
                throw new Error("not implemented")
            }

            setOCGVisibilityState() {
                throw new Error("not implemented")
            }
        }

        async function W(e) {
            const t = {}, n = new WeakMap, r = await Promise.all(e.map((async (e, r) => {
                if ("importDocument" === e.type) {
                    const s = e.document;
                    return (0, o.kG)(s instanceof File || s instanceof Blob, "Wrong `importDocument` operation `document` value: it must be a File or a Blob"), (0, T.M)(n, t, s, e, r, "document")
                }
                if ("applyInstantJson" === e.type) {
                    const s = e.instantJson;
                    (0, o.kG)("object" == typeof s && null !== s, "Wrong `applyInstantJson` operation `instantJson` value: it must be an object");
                    const i = JSON.stringify(s), a = new Blob([i], {type: "application/json"});
                    return (0, T.M)(n, t, a, e, r, "dataFilePath")
                }
                if ("applyXfdf" === e.type) {
                    const s = e.xfdf;
                    (0, o.kG)("string" == typeof s, "Wrong `applyXfdf` operation `xfdf` value: it must be a string");
                    const i = new Blob([s], {type: "application/vnd.adobe.xfdf"});
                    return (0, T.M)(n, t, i, e, r, "dataFilePath")
                }
                return e
            }))), s = new FormData;
            s.append("operations", JSON.stringify({operations: r}));
            for (const e in t) s.append(e, t[e]);
            return s
        }
    }, 91038: (e, t, n) => {
        "use strict";
        n.d(t, {q: () => r});
        const r = {clientsPresenceEnabled: !0, listenToServerChangesEnabled: !0}
    }, 22257: (e, t, n) => {
        const r = Symbol("SemVer ANY");

        class s {
            static get ANY() {
                return r
            }

            constructor(e, t) {
                if (t = i(t), e instanceof s) {
                    if (e.loose === !!t.loose) return e;
                    e = e.value
                }
                e = e.trim().split(/\s+/).join(" "), h("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version, h("comp", this)
            }

            parse(e) {
                const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR], n = e.match(t);
                if (!n) throw new TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new c(n[2], this.options.loose) : this.semver = r
            }

            toString() {
                return this.value
            }

            test(e) {
                if (h("Comparator.test", e, this.options.loose), this.semver === r || e === r) return !0;
                if ("string" == typeof e) try {
                    e = new c(e, this.options)
                } catch (e) {
                    return !1
                }
                return l(e, this.operator, this.semver, this.options)
            }

            intersects(e, t) {
                if (!(e instanceof s)) throw new TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new u(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new u(this.value, t).test(e.semver) : (!(t = i(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
            }
        }

        e.exports = s;
        const i = n(12893), {safeRe: o, t: a} = n(55765), l = n(7539), h = n(74225), c = n(26376), u = n(66902)
    }, 66902: (e, t, n) => {
        class r {
            constructor(e, t) {
                if (t = i(t), e instanceof r) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new r(e.raw, t);
                if (e instanceof o) return this.raw = e.value, this.set = [[e]], this.format(), this;
                if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((e => this.parseRange(e.trim()))).filter((e => e.length)), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter((e => !g(e[0]))), 0 === this.set.length) this.set = [e]; else if (this.set.length > 1) for (const e of this.set) if (1 === e.length && E(e[0])) {
                        this.set = [e];
                        break
                    }
                }
                this.format()
            }

            format() {
                return this.range = this.set.map((e => e.join(" ").trim())).join("||").trim(), this.range
            }

            toString() {
                return this.range
            }

            parseRange(e) {
                const t = ((this.options.includePrerelease && m) | (this.options.loose && f)) + ":" + e, n = s.get(t);
                if (n) return n;
                const r = this.options.loose, i = r ? h[c.HYPHENRANGELOOSE] : h[c.HYPHENRANGE];
                e = e.replace(i, _(this.options.includePrerelease)), a("hyphen replace", e), e = e.replace(h[c.COMPARATORTRIM], u), a("comparator trim", e), e = e.replace(h[c.TILDETRIM], p), a("tilde trim", e), e = e.replace(h[c.CARETTRIM], d), a("caret trim", e);
                let l = e.split(" ").map((e => w(e, this.options))).join(" ").split(/\s+/).map((e => O(e, this.options)));
                r && (l = l.filter((e => (a("loose invalid filter", e, this.options), !!e.match(h[c.COMPARATORLOOSE]))))), a("range list", l);
                const E = new Map, v = l.map((e => new o(e, this.options)));
                for (const e of v) {
                    if (g(e)) return [e];
                    E.set(e.value, e)
                }
                E.size > 1 && E.has("") && E.delete("");
                const y = [...E.values()];
                return s.set(t, y), y
            }

            intersects(e, t) {
                if (!(e instanceof r)) throw new TypeError("a Range is required");
                return this.set.some((n => v(n, t) && e.set.some((e => v(e, t) && n.every((n => e.every((e => n.intersects(e, t)))))))))
            }

            test(e) {
                if (!e) return !1;
                if ("string" == typeof e) try {
                    e = new l(e, this.options)
                } catch (e) {
                    return !1
                }
                for (let t = 0; t < this.set.length; t++) if (N(this.set[t], e, this.options)) return !0;
                return !1
            }
        }

        e.exports = r;
        const s = new (n(96062))({max: 1e3}), i = n(12893), o = n(22257), a = n(74225), l = n(26376), {
                safeRe: h,
                t: c,
                comparatorTrimReplace: u,
                tildeTrimReplace: p,
                caretTrimReplace: d
            } = n(55765), {FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: f} = n(83295), g = e => "<0.0.0-0" === e.value,
            E = e => "" === e.value, v = (e, t) => {
                let n = !0;
                const r = e.slice();
                let s = r.pop();
                for (; n && r.length;) n = r.every((e => s.intersects(e, t))), s = r.pop();
                return n
            },
            w = (e, t) => (a("comp", e, t), e = R(e, t), a("caret", e), e = $(e, t), a("tildes", e), e = I(e, t), a("xrange", e), e = A(e, t), a("stars", e), e),
            y = e => !e || "x" === e.toLowerCase() || "*" === e,
            $ = (e, t) => e.trim().split(/\s+/).map((e => S(e, t))).join(" "), S = (e, t) => {
                const n = t.loose ? h[c.TILDELOOSE] : h[c.TILDE];
                return e.replace(n, ((t, n, r, s, i) => {
                    let o;
                    return a("tilde", e, t, n, r, s, i), y(n) ? o = "" : y(r) ? o = `>=${n}.0.0 <${+n + 1}.0.0-0` : y(s) ? o = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0` : i ? (a("replaceTilde pr", i), o = `>=${n}.${r}.${s}-${i} <${n}.${+r + 1}.0-0`) : o = `>=${n}.${r}.${s} <${n}.${+r + 1}.0-0`, a("tilde return", o), o
                }))
            }, R = (e, t) => e.trim().split(/\s+/).map((e => P(e, t))).join(" "), P = (e, t) => {
                a("caret", e, t);
                const n = t.loose ? h[c.CARETLOOSE] : h[c.CARET], r = t.includePrerelease ? "-0" : "";
                return e.replace(n, ((t, n, s, i, o) => {
                    let l;
                    return a("caret", e, t, n, s, i, o), y(n) ? l = "" : y(s) ? l = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : y(i) ? l = "0" === n ? `>=${n}.${s}.0${r} <${n}.${+s + 1}.0-0` : `>=${n}.${s}.0${r} <${+n + 1}.0.0-0` : o ? (a("replaceCaret pr", o), l = "0" === n ? "0" === s ? `>=${n}.${s}.${i}-${o} <${n}.${s}.${+i + 1}-0` : `>=${n}.${s}.${i}-${o} <${n}.${+s + 1}.0-0` : `>=${n}.${s}.${i}-${o} <${+n + 1}.0.0-0`) : (a("no pr"), l = "0" === n ? "0" === s ? `>=${n}.${s}.${i}${r} <${n}.${s}.${+i + 1}-0` : `>=${n}.${s}.${i}${r} <${n}.${+s + 1}.0-0` : `>=${n}.${s}.${i} <${+n + 1}.0.0-0`), a("caret return", l), l
                }))
            }, I = (e, t) => (a("replaceXRanges", e, t), e.split(/\s+/).map((e => b(e, t))).join(" ")), b = (e, t) => {
                e = e.trim();
                const n = t.loose ? h[c.XRANGELOOSE] : h[c.XRANGE];
                return e.replace(n, ((n, r, s, i, o, l) => {
                    a("xRange", e, n, r, s, i, o, l);
                    const h = y(s), c = h || y(i), u = c || y(o), p = u;
                    return "=" === r && p && (r = ""), l = t.includePrerelease ? "-0" : "", h ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && p ? (c && (i = 0), o = 0, ">" === r ? (r = ">=", c ? (s = +s + 1, i = 0, o = 0) : (i = +i + 1, o = 0)) : "<=" === r && (r = "<", c ? s = +s + 1 : i = +i + 1), "<" === r && (l = "-0"), n = `${r + s}.${i}.${o}${l}`) : c ? n = `>=${s}.0.0${l} <${+s + 1}.0.0-0` : u && (n = `>=${s}.${i}.0${l} <${s}.${+i + 1}.0-0`), a("xRange return", n), n
                }))
            }, A = (e, t) => (a("replaceStars", e, t), e.trim().replace(h[c.STAR], "")),
            O = (e, t) => (a("replaceGTE0", e, t), e.trim().replace(h[t.includePrerelease ? c.GTE0PRE : c.GTE0], "")),
            _ = e => (t, n, r, s, i, o, a, l, h, c, u, p, d) => `${n = y(r) ? "" : y(s) ? `>=${r}.0.0${e ? "-0" : ""}` : y(i) ? `>=${r}.${s}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`} ${l = y(h) ? "" : y(c) ? `<${+h + 1}.0.0-0` : y(u) ? `<${h}.${+c + 1}.0-0` : p ? `<=${h}.${c}.${u}-${p}` : e ? `<${h}.${c}.${+u + 1}-0` : `<=${l}`}`.trim(),
            N = (e, t, n) => {
                for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
                if (t.prerelease.length && !n.includePrerelease) {
                    for (let n = 0; n < e.length; n++) if (a(e[n].semver), e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0) {
                        const r = e[n].semver;
                        if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0
                    }
                    return !1
                }
                return !0
            }
    }, 26376: (e, t, n) => {
        const r = n(74225), {MAX_LENGTH: s, MAX_SAFE_INTEGER: i} = n(83295), {safeRe: o, t: a} = n(55765),
            l = n(12893), {compareIdentifiers: h} = n(86742);

        class c {
            constructor(e, t) {
                if (t = l(t), e instanceof c) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                    e = e.version
                } else if ("string" != typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > s) throw new TypeError(`version is longer than ${s} characters`);
                r("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                const n = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                if (!n) throw new TypeError(`Invalid Version: ${e}`);
                if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                n[4] ? this.prerelease = n[4].split(".").map((e => {
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < i) return t
                    }
                    return e
                })) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
            }

            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
            }

            toString() {
                return this.version
            }

            compare(e) {
                if (r("SemVer.compare", this.version, this.options, e), !(e instanceof c)) {
                    if ("string" == typeof e && e === this.version) return 0;
                    e = new c(e, this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }

            compareMain(e) {
                return e instanceof c || (e = new c(e, this.options)), h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch)
            }

            comparePre(e) {
                if (e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                if (!this.prerelease.length && e.prerelease.length) return 1;
                if (!this.prerelease.length && !e.prerelease.length) return 0;
                let t = 0;
                do {
                    const n = this.prerelease[t], s = e.prerelease[t];
                    if (r("prerelease compare", t, n, s), void 0 === n && void 0 === s) return 0;
                    if (void 0 === s) return 1;
                    if (void 0 === n) return -1;
                    if (n !== s) return h(n, s)
                } while (++t)
            }

            compareBuild(e) {
                e instanceof c || (e = new c(e, this.options));
                let t = 0;
                do {
                    const n = this.build[t], s = e.build[t];
                    if (r("prerelease compare", t, n, s), void 0 === n && void 0 === s) return 0;
                    if (void 0 === s) return 1;
                    if (void 0 === n) return -1;
                    if (n !== s) return h(n, s)
                } while (++t)
            }

            inc(e, t, n) {
                switch (e) {
                    case"premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
                        break;
                    case"preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
                        break;
                    case"prepatch":
                        this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
                        break;
                    case"prerelease":
                        0 === this.prerelease.length && this.inc("patch", t, n), this.inc("pre", t, n);
                        break;
                    case"major":
                        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                        break;
                    case"minor":
                        0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                        break;
                    case"patch":
                        0 === this.prerelease.length && this.patch++, this.prerelease = [];
                        break;
                    case"pre": {
                        const e = Number(n) ? 1 : 0;
                        if (!t && !1 === n) throw new Error("invalid increment argument: identifier is empty");
                        if (0 === this.prerelease.length) this.prerelease = [e]; else {
                            let r = this.prerelease.length;
                            for (; --r >= 0;) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, r = -2);
                            if (-1 === r) {
                                if (t === this.prerelease.join(".") && !1 === n) throw new Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let r = [t, e];
                            !1 === n && (r = [t]), 0 === h(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = r) : this.prerelease = r
                        }
                        break
                    }
                    default:
                        throw new Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
            }
        }

        e.exports = c
    }, 13507: (e, t, n) => {
        const r = n(33959);
        e.exports = (e, t) => {
            const n = r(e.trim().replace(/^[=v]+/, ""), t);
            return n ? n.version : null
        }
    }, 7539: (e, t, n) => {
        const r = n(58718), s = n(81194), i = n(71312), o = n(25903), a = n(21544), l = n(12056);
        e.exports = (e, t, n, h) => {
            switch (t) {
                case"===":
                    return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
                case"!==":
                    return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
                case"":
                case"=":
                case"==":
                    return r(e, n, h);
                case"!=":
                    return s(e, n, h);
                case">":
                    return i(e, n, h);
                case">=":
                    return o(e, n, h);
                case"<":
                    return a(e, n, h);
                case"<=":
                    return l(e, n, h);
                default:
                    throw new TypeError(`Invalid operator: ${t}`)
            }
        }
    }, 99038: (e, t, n) => {
        const r = n(26376), s = n(33959), {safeRe: i, t: o} = n(55765);
        e.exports = (e, t) => {
            if (e instanceof r) return e;
            if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
            let n = null;
            if ((t = t || {}).rtl) {
                let t;
                for (; (t = i[o.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);) n && t.index + t[0].length === n.index + n[0].length || (n = t), i[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
                i[o.COERCERTL].lastIndex = -1
            } else n = e.match(i[o.COERCE]);
            return null === n ? null : s(`${n[2]}.${n[3] || "0"}.${n[4] || "0"}`, t)
        }
    }, 88880: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t, n) => {
            const s = new r(e, n), i = new r(t, n);
            return s.compare(i) || s.compareBuild(i)
        }
    }, 27880: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t) => r(e, t, !0)
    }, 46269: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t, n) => new r(e, n).compare(new r(t, n))
    }, 62378: (e, t, n) => {
        const r = n(33959);
        e.exports = (e, t) => {
            const n = r(e, null, !0), s = r(t, null, !0), i = n.compare(s);
            if (0 === i) return null;
            const o = i > 0, a = o ? n : s, l = o ? s : n, h = !!a.prerelease.length;
            if (!!l.prerelease.length && !h) return l.patch || l.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const c = h ? "pre" : "";
            return n.major !== s.major ? c + "major" : n.minor !== s.minor ? c + "minor" : n.patch !== s.patch ? c + "patch" : "prerelease"
        }
    }, 58718: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => 0 === r(e, t, n)
    }, 71312: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => r(e, t, n) > 0
    }, 25903: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => r(e, t, n) >= 0
    }, 24123: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t, n, s, i) => {
            "string" == typeof n && (i = s, s = n, n = void 0);
            try {
                return new r(e instanceof r ? e.version : e, n).inc(t, s, i).version
            } catch (e) {
                return null
            }
        }
    }, 21544: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => r(e, t, n) < 0
    }, 12056: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => r(e, t, n) <= 0
    }, 38679: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t) => new r(e, t).major
    }, 87789: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t) => new r(e, t).minor
    }, 81194: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => 0 !== r(e, t, n)
    }, 33959: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t, n = !1) => {
            if (e instanceof r) return e;
            try {
                return new r(e, t)
            } catch (e) {
                if (!n) return null;
                throw e
            }
        }
    }, 52358: (e, t, n) => {
        const r = n(26376);
        e.exports = (e, t) => new r(e, t).patch
    }, 57559: (e, t, n) => {
        const r = n(33959);
        e.exports = (e, t) => {
            const n = r(e, t);
            return n && n.prerelease.length ? n.prerelease : null
        }
    }, 79795: (e, t, n) => {
        const r = n(46269);
        e.exports = (e, t, n) => r(t, e, n)
    }, 63657: (e, t, n) => {
        const r = n(88880);
        e.exports = (e, t) => e.sort(((e, n) => r(n, e, t)))
    }, 45712: (e, t, n) => {
        const r = n(66902);
        e.exports = (e, t, n) => {
            try {
                t = new r(t, n)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }
    }, 21100: (e, t, n) => {
        const r = n(88880);
        e.exports = (e, t) => e.sort(((e, n) => r(e, n, t)))
    }, 76397: (e, t, n) => {
        const r = n(33959);
        e.exports = (e, t) => {
            const n = r(e, t);
            return n ? n.version : null
        }
    }, 81249: (e, t, n) => {
        const r = n(55765), s = n(83295), i = n(26376), o = n(86742), a = n(33959), l = n(76397), h = n(13507),
            c = n(24123), u = n(62378), p = n(38679), d = n(87789), m = n(52358), f = n(57559), g = n(46269),
            E = n(79795), v = n(27880), w = n(88880), y = n(21100), $ = n(63657), S = n(71312), R = n(21544),
            P = n(58718), I = n(81194), b = n(25903), A = n(12056), O = n(7539), _ = n(99038), N = n(22257),
            L = n(66902), T = n(45712), x = n(51042), F = n(85775), D = n(71657), C = n(95316), j = n(89042),
            k = n(6826), U = n(97606), M = n(50032), G = n(82937), H = n(17908), q = n(50799);
        e.exports = {
            parse: a,
            valid: l,
            clean: h,
            inc: c,
            diff: u,
            major: p,
            minor: d,
            patch: m,
            prerelease: f,
            compare: g,
            rcompare: E,
            compareLoose: v,
            compareBuild: w,
            sort: y,
            rsort: $,
            gt: S,
            lt: R,
            eq: P,
            neq: I,
            gte: b,
            lte: A,
            cmp: O,
            coerce: _,
            Comparator: N,
            Range: L,
            satisfies: T,
            toComparators: x,
            maxSatisfying: F,
            minSatisfying: D,
            minVersion: C,
            validRange: j,
            outside: k,
            gtr: U,
            ltr: M,
            intersects: G,
            simplifyRange: H,
            subset: q,
            SemVer: i,
            re: r.re,
            src: r.src,
            tokens: r.t,
            SEMVER_SPEC_VERSION: s.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: s.RELEASE_TYPES,
            compareIdentifiers: o.compareIdentifiers,
            rcompareIdentifiers: o.rcompareIdentifiers
        }
    }, 83295: e => {
        const t = Number.MAX_SAFE_INTEGER || 9007199254740991;
        e.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: t,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    }, 74225: e => {
        const t = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
        };
        e.exports = t
    }, 86742: e => {
        const t = /^[0-9]+$/, n = (e, n) => {
            const r = t.test(e), s = t.test(n);
            return r && s && (e = +e, n = +n), e === n ? 0 : r && !s ? -1 : s && !r ? 1 : e < n ? -1 : 1
        };
        e.exports = {compareIdentifiers: n, rcompareIdentifiers: (e, t) => n(t, e)}
    }, 12893: e => {
        const t = Object.freeze({loose: !0}), n = Object.freeze({});
        e.exports = e => e ? "object" != typeof e ? t : e : n
    }, 55765: (e, t, n) => {
        const {MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: s, MAX_LENGTH: i} = n(83295), o = n(74225),
            a = (t = e.exports = {}).re = [], l = t.safeRe = [], h = t.src = [], c = t.t = {};
        let u = 0;
        const p = "[a-zA-Z0-9-]", d = [["\\s", 1], ["\\d", i], [p, s]], m = (e, t, n) => {
            const r = (e => {
                for (const [t, n] of d) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
                return e
            })(t), s = u++;
            o(e, s, t), c[e] = s, h[s] = t, a[s] = new RegExp(t, n ? "g" : void 0), l[s] = new RegExp(r, n ? "g" : void 0)
        };
        m("NUMERICIDENTIFIER", "0|[1-9]\\d*"), m("NUMERICIDENTIFIERLOOSE", "\\d+"), m("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), m("MAINVERSION", `(${h[c.NUMERICIDENTIFIER]})\\.(${h[c.NUMERICIDENTIFIER]})\\.(${h[c.NUMERICIDENTIFIER]})`), m("MAINVERSIONLOOSE", `(${h[c.NUMERICIDENTIFIERLOOSE]})\\.(${h[c.NUMERICIDENTIFIERLOOSE]})\\.(${h[c.NUMERICIDENTIFIERLOOSE]})`), m("PRERELEASEIDENTIFIER", `(?:${h[c.NUMERICIDENTIFIER]}|${h[c.NONNUMERICIDENTIFIER]})`), m("PRERELEASEIDENTIFIERLOOSE", `(?:${h[c.NUMERICIDENTIFIERLOOSE]}|${h[c.NONNUMERICIDENTIFIER]})`), m("PRERELEASE", `(?:-(${h[c.PRERELEASEIDENTIFIER]}(?:\\.${h[c.PRERELEASEIDENTIFIER]})*))`), m("PRERELEASELOOSE", `(?:-?(${h[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[c.PRERELEASEIDENTIFIERLOOSE]})*))`), m("BUILDIDENTIFIER", "[a-zA-Z0-9-]+"), m("BUILD", `(?:\\+(${h[c.BUILDIDENTIFIER]}(?:\\.${h[c.BUILDIDENTIFIER]})*))`), m("FULLPLAIN", `v?${h[c.MAINVERSION]}${h[c.PRERELEASE]}?${h[c.BUILD]}?`), m("FULL", `^${h[c.FULLPLAIN]}$`), m("LOOSEPLAIN", `[v=\\s]*${h[c.MAINVERSIONLOOSE]}${h[c.PRERELEASELOOSE]}?${h[c.BUILD]}?`), m("LOOSE", `^${h[c.LOOSEPLAIN]}$`), m("GTLT", "((?:<|>)?=?)"), m("XRANGEIDENTIFIERLOOSE", `${h[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), m("XRANGEIDENTIFIER", `${h[c.NUMERICIDENTIFIER]}|x|X|\\*`), m("XRANGEPLAIN", `[v=\\s]*(${h[c.XRANGEIDENTIFIER]})(?:\\.(${h[c.XRANGEIDENTIFIER]})(?:\\.(${h[c.XRANGEIDENTIFIER]})(?:${h[c.PRERELEASE]})?${h[c.BUILD]}?)?)?`), m("XRANGEPLAINLOOSE", `[v=\\s]*(${h[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[c.XRANGEIDENTIFIERLOOSE]})(?:${h[c.PRERELEASELOOSE]})?${h[c.BUILD]}?)?)?`), m("XRANGE", `^${h[c.GTLT]}\\s*${h[c.XRANGEPLAIN]}$`), m("XRANGELOOSE", `^${h[c.GTLT]}\\s*${h[c.XRANGEPLAINLOOSE]}$`), m("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), m("COERCERTL", h[c.COERCE], !0), m("LONETILDE", "(?:~>?)"), m("TILDETRIM", `(\\s*)${h[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", m("TILDE", `^${h[c.LONETILDE]}${h[c.XRANGEPLAIN]}$`), m("TILDELOOSE", `^${h[c.LONETILDE]}${h[c.XRANGEPLAINLOOSE]}$`), m("LONECARET", "(?:\\^)"), m("CARETTRIM", `(\\s*)${h[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", m("CARET", `^${h[c.LONECARET]}${h[c.XRANGEPLAIN]}$`), m("CARETLOOSE", `^${h[c.LONECARET]}${h[c.XRANGEPLAINLOOSE]}$`), m("COMPARATORLOOSE", `^${h[c.GTLT]}\\s*(${h[c.LOOSEPLAIN]})$|^$`), m("COMPARATOR", `^${h[c.GTLT]}\\s*(${h[c.FULLPLAIN]})$|^$`), m("COMPARATORTRIM", `(\\s*)${h[c.GTLT]}\\s*(${h[c.LOOSEPLAIN]}|${h[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", m("HYPHENRANGE", `^\\s*(${h[c.XRANGEPLAIN]})\\s+-\\s+(${h[c.XRANGEPLAIN]})\\s*$`), m("HYPHENRANGELOOSE", `^\\s*(${h[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[c.XRANGEPLAINLOOSE]})\\s*$`), m("STAR", "(<|>)?=?\\s*\\*"), m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    }, 96062: (e, t, n) => {
        "use strict";
        const r = n(34411), s = Symbol("max"), i = Symbol("length"), o = Symbol("lengthCalculator"),
            a = Symbol("allowStale"), l = Symbol("maxAge"), h = Symbol("dispose"), c = Symbol("noDisposeOnSet"),
            u = Symbol("lruList"), p = Symbol("cache"), d = Symbol("updateAgeOnGet"), m = () => 1;
        const f = (e, t, n) => {
            const r = e[p].get(t);
            if (r) {
                const t = r.value;
                if (g(e, t)) {
                    if (v(e, r), !e[a]) return
                } else n && (e[d] && (r.value.now = Date.now()), e[u].unshiftNode(r));
                return t.value
            }
        }, g = (e, t) => {
            if (!t || !t.maxAge && !e[l]) return !1;
            const n = Date.now() - t.now;
            return t.maxAge ? n > t.maxAge : e[l] && n > e[l]
        }, E = e => {
            if (e[i] > e[s]) for (let t = e[u].tail; e[i] > e[s] && null !== t;) {
                const n = t.prev;
                v(e, t), t = n
            }
        }, v = (e, t) => {
            if (t) {
                const n = t.value;
                e[h] && e[h](n.key, n.value), e[i] -= n.length, e[p].delete(n.key), e[u].removeNode(t)
            }
        };

        class w {
            constructor(e, t, n, r, s) {
                this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = s || 0
            }
        }

        const y = (e, t, n, r) => {
            let s = n.value;
            g(e, s) && (v(e, n), e[a] || (s = void 0)), s && t.call(r, s.value, s.key, e)
        };
        e.exports = class {
            constructor(e) {
                if ("number" == typeof e && (e = {max: e}), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
                this[s] = e.max || 1 / 0;
                const t = e.length || m;
                if (this[o] = "function" != typeof t ? m : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
                this[l] = e.maxAge || 0, this[h] = e.dispose, this[c] = e.noDisposeOnSet || !1, this[d] = e.updateAgeOnGet || !1, this.reset()
            }

            set max(e) {
                if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
                this[s] = e || 1 / 0, E(this)
            }

            get max() {
                return this[s]
            }

            set allowStale(e) {
                this[a] = !!e
            }

            get allowStale() {
                return this[a]
            }

            set maxAge(e) {
                if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
                this[l] = e, E(this)
            }

            get maxAge() {
                return this[l]
            }

            set lengthCalculator(e) {
                "function" != typeof e && (e = m), e !== this[o] && (this[o] = e, this[i] = 0, this[u].forEach((e => {
                    e.length = this[o](e.value, e.key), this[i] += e.length
                }))), E(this)
            }

            get lengthCalculator() {
                return this[o]
            }

            get length() {
                return this[i]
            }

            get itemCount() {
                return this[u].length
            }

            rforEach(e, t) {
                t = t || this;
                for (let n = this[u].tail; null !== n;) {
                    const r = n.prev;
                    y(this, e, n, t), n = r
                }
            }

            forEach(e, t) {
                t = t || this;
                for (let n = this[u].head; null !== n;) {
                    const r = n.next;
                    y(this, e, n, t), n = r
                }
            }

            keys() {
                return this[u].toArray().map((e => e.key))
            }

            values() {
                return this[u].toArray().map((e => e.value))
            }

            reset() {
                this[h] && this[u] && this[u].length && this[u].forEach((e => this[h](e.key, e.value))), this[p] = new Map, this[u] = new r, this[i] = 0
            }

            dump() {
                return this[u].map((e => !g(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0)
                })).toArray().filter((e => e))
            }

            dumpLru() {
                return this[u]
            }

            set(e, t, n) {
                if ((n = n || this[l]) && "number" != typeof n) throw new TypeError("maxAge must be a number");
                const r = n ? Date.now() : 0, a = this[o](t, e);
                if (this[p].has(e)) {
                    if (a > this[s]) return v(this, this[p].get(e)), !1;
                    const o = this[p].get(e).value;
                    return this[h] && (this[c] || this[h](e, o.value)), o.now = r, o.maxAge = n, o.value = t, this[i] += a - o.length, o.length = a, this.get(e), E(this), !0
                }
                const d = new w(e, t, a, r, n);
                return d.length > this[s] ? (this[h] && this[h](e, t), !1) : (this[i] += d.length, this[u].unshift(d), this[p].set(e, this[u].head), E(this), !0)
            }

            has(e) {
                if (!this[p].has(e)) return !1;
                const t = this[p].get(e).value;
                return !g(this, t)
            }

            get(e) {
                return f(this, e, !0)
            }

            peek(e) {
                return f(this, e, !1)
            }

            pop() {
                const e = this[u].tail;
                return e ? (v(this, e), e.value) : null
            }

            del(e) {
                v(this, this[p].get(e))
            }

            load(e) {
                this.reset();
                const t = Date.now();
                for (let n = e.length - 1; n >= 0; n--) {
                    const r = e[n], s = r.e || 0;
                    if (0 === s) this.set(r.k, r.v); else {
                        const e = s - t;
                        e > 0 && this.set(r.k, r.v, e)
                    }
                }
            }

            prune() {
                this[p].forEach(((e, t) => f(this, t, !1)))
            }
        }
    }, 97606: (e, t, n) => {
        const r = n(6826);
        e.exports = (e, t, n) => r(e, t, ">", n)
    }, 82937: (e, t, n) => {
        const r = n(66902);
        e.exports = (e, t, n) => (e = new r(e, n), t = new r(t, n), e.intersects(t, n))
    }, 50032: (e, t, n) => {
        const r = n(6826);
        e.exports = (e, t, n) => r(e, t, "<", n)
    }, 85775: (e, t, n) => {
        const r = n(26376), s = n(66902);
        e.exports = (e, t, n) => {
            let i = null, o = null, a = null;
            try {
                a = new s(t, n)
            } catch (e) {
                return null
            }
            return e.forEach((e => {
                a.test(e) && (i && -1 !== o.compare(e) || (i = e, o = new r(i, n)))
            })), i
        }
    }, 71657: (e, t, n) => {
        const r = n(26376), s = n(66902);
        e.exports = (e, t, n) => {
            let i = null, o = null, a = null;
            try {
                a = new s(t, n)
            } catch (e) {
                return null
            }
            return e.forEach((e => {
                a.test(e) && (i && 1 !== o.compare(e) || (i = e, o = new r(i, n)))
            })), i
        }
    }, 95316: (e, t, n) => {
        const r = n(26376), s = n(66902), i = n(71312);
        e.exports = (e, t) => {
            e = new s(e, t);
            let n = new r("0.0.0");
            if (e.test(n)) return n;
            if (n = new r("0.0.0-0"), e.test(n)) return n;
            n = null;
            for (let t = 0; t < e.set.length; ++t) {
                const s = e.set[t];
                let o = null;
                s.forEach((e => {
                    const t = new r(e.semver.version);
                    switch (e.operator) {
                        case">":
                            0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                        case"":
                        case">=":
                            o && !i(t, o) || (o = t);
                            break;
                        case"<":
                        case"<=":
                            break;
                        default:
                            throw new Error(`Unexpected operation: ${e.operator}`)
                    }
                })), !o || n && !i(n, o) || (n = o)
            }
            return n && e.test(n) ? n : null
        }
    }, 6826: (e, t, n) => {
        const r = n(26376), s = n(22257), {ANY: i} = s, o = n(66902), a = n(45712), l = n(71312), h = n(21544),
            c = n(12056), u = n(25903);
        e.exports = (e, t, n, p) => {
            let d, m, f, g, E;
            switch (e = new r(e, p), t = new o(t, p), n) {
                case">":
                    d = l, m = c, f = h, g = ">", E = ">=";
                    break;
                case"<":
                    d = h, m = u, f = l, g = "<", E = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, p)) return !1;
            for (let n = 0; n < t.set.length; ++n) {
                const r = t.set[n];
                let o = null, a = null;
                if (r.forEach((e => {
                    e.semver === i && (e = new s(">=0.0.0")), o = o || e, a = a || e, d(e.semver, o.semver, p) ? o = e : f(e.semver, a.semver, p) && (a = e)
                })), o.operator === g || o.operator === E) return !1;
                if ((!a.operator || a.operator === g) && m(e, a.semver)) return !1;
                if (a.operator === E && f(e, a.semver)) return !1
            }
            return !0
        }
    }, 17908: (e, t, n) => {
        const r = n(45712), s = n(46269);
        e.exports = (e, t, n) => {
            const i = [];
            let o = null, a = null;
            const l = e.sort(((e, t) => s(e, t, n)));
            for (const e of l) {
                r(e, t, n) ? (a = e, o || (o = e)) : (a && i.push([o, a]), a = null, o = null)
            }
            o && i.push([o, null]);
            const h = [];
            for (const [e, t] of i) e === t ? h.push(e) : t || e !== l[0] ? t ? e === l[0] ? h.push(`<=${t}`) : h.push(`${e} - ${t}`) : h.push(`>=${e}`) : h.push("*");
            const c = h.join(" || "), u = "string" == typeof t.raw ? t.raw : String(t);
            return c.length < u.length ? c : t
        }
    }, 50799: (e, t, n) => {
        const r = n(66902), s = n(22257), {ANY: i} = s, o = n(45712), a = n(46269), l = [new s(">=0.0.0-0")],
            h = [new s(">=0.0.0")], c = (e, t, n) => {
                if (e === t) return !0;
                if (1 === e.length && e[0].semver === i) {
                    if (1 === t.length && t[0].semver === i) return !0;
                    e = n.includePrerelease ? l : h
                }
                if (1 === t.length && t[0].semver === i) {
                    if (n.includePrerelease) return !0;
                    t = h
                }
                const r = new Set;
                let s, c, d, m, f, g, E;
                for (const t of e) ">" === t.operator || ">=" === t.operator ? s = u(s, t, n) : "<" === t.operator || "<=" === t.operator ? c = p(c, t, n) : r.add(t.semver);
                if (r.size > 1) return null;
                if (s && c) {
                    if (d = a(s.semver, c.semver, n), d > 0) return null;
                    if (0 === d && (">=" !== s.operator || "<=" !== c.operator)) return null
                }
                for (const e of r) {
                    if (s && !o(e, String(s), n)) return null;
                    if (c && !o(e, String(c), n)) return null;
                    for (const r of t) if (!o(e, String(r), n)) return !1;
                    return !0
                }
                let v = !(!c || n.includePrerelease || !c.semver.prerelease.length) && c.semver,
                    w = !(!s || n.includePrerelease || !s.semver.prerelease.length) && s.semver;
                v && 1 === v.prerelease.length && "<" === c.operator && 0 === v.prerelease[0] && (v = !1);
                for (const e of t) {
                    if (E = E || ">" === e.operator || ">=" === e.operator, g = g || "<" === e.operator || "<=" === e.operator, s) if (w && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === w.major && e.semver.minor === w.minor && e.semver.patch === w.patch && (w = !1), ">" === e.operator || ">=" === e.operator) {
                        if (m = u(s, e, n), m === e && m !== s) return !1
                    } else if (">=" === s.operator && !o(s.semver, String(e), n)) return !1;
                    if (c) if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), "<" === e.operator || "<=" === e.operator) {
                        if (f = p(c, e, n), f === e && f !== c) return !1
                    } else if ("<=" === c.operator && !o(c.semver, String(e), n)) return !1;
                    if (!e.operator && (c || s) && 0 !== d) return !1
                }
                return !(s && g && !c && 0 !== d) && (!(c && E && !s && 0 !== d) && (!w && !v))
            }, u = (e, t, n) => {
                if (!e) return t;
                const r = a(e.semver, t.semver, n);
                return r > 0 ? e : r < 0 || ">" === t.operator && ">=" === e.operator ? t : e
            }, p = (e, t, n) => {
                if (!e) return t;
                const r = a(e.semver, t.semver, n);
                return r < 0 ? e : r > 0 || "<" === t.operator && "<=" === e.operator ? t : e
            };
        e.exports = (e, t, n = {}) => {
            if (e === t) return !0;
            e = new r(e, n), t = new r(t, n);
            let s = !1;
            e:for (const r of e.set) {
                for (const e of t.set) {
                    const t = c(r, e, n);
                    if (s = s || null !== t, t) continue e
                }
                if (s) return !1
            }
            return !0
        }
    }, 51042: (e, t, n) => {
        const r = n(66902);
        e.exports = (e, t) => new r(e, t).set.map((e => e.map((e => e.value)).join(" ").trim().split(" ")))
    }, 89042: (e, t, n) => {
        const r = n(66902);
        e.exports = (e, t) => {
            try {
                return new r(e, t).range || "*"
            } catch (e) {
                return null
            }
        }
    }, 49602: e => {
        "use strict";
        e.exports = function (e) {
            e.prototype[Symbol.iterator] = function* () {
                for (let e = this.head; e; e = e.next) yield e.value
            }
        }
    }, 34411: (e, t, n) => {
        "use strict";

        function r(e) {
            var t = this;
            if (t instanceof r || (t = new r), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function (e) {
                t.push(e)
            })); else if (arguments.length > 0) for (var n = 0, s = arguments.length; n < s; n++) t.push(arguments[n]);
            return t
        }

        function s(e, t, n) {
            var r = t === e.head ? new a(n, null, t, e) : new a(n, t, t.next, e);
            return null === r.next && (e.tail = r), null === r.prev && (e.head = r), e.length++, r
        }

        function i(e, t) {
            e.tail = new a(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
        }

        function o(e, t) {
            e.head = new a(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
        }

        function a(e, t, n, r) {
            if (!(this instanceof a)) return new a(e, t, n, r);
            this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
        }

        e.exports = r, r.Node = a, r.create = r, r.prototype.removeNode = function (e) {
            if (e.list !== this) throw new Error("removing node which does not belong to this list");
            var t = e.next, n = e.prev;
            return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t
        }, r.prototype.unshiftNode = function (e) {
            if (e !== this.head) {
                e.list && e.list.removeNode(e);
                var t = this.head;
                e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
            }
        }, r.prototype.pushNode = function (e) {
            if (e !== this.tail) {
                e.list && e.list.removeNode(e);
                var t = this.tail;
                e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
            }
        }, r.prototype.push = function () {
            for (var e = 0, t = arguments.length; e < t; e++) i(this, arguments[e]);
            return this.length
        }, r.prototype.unshift = function () {
            for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
            return this.length
        }, r.prototype.pop = function () {
            if (this.tail) {
                var e = this.tail.value;
                return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
            }
        }, r.prototype.shift = function () {
            if (this.head) {
                var e = this.head.value;
                return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
            }
        }, r.prototype.forEach = function (e, t) {
            t = t || this;
            for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), n = n.next
        }, r.prototype.forEachReverse = function (e, t) {
            t = t || this;
            for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), n = n.prev
        }, r.prototype.get = function (e) {
            for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
            if (t === e && null !== n) return n.value
        }, r.prototype.getReverse = function (e) {
            for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
            if (t === e && null !== n) return n.value
        }, r.prototype.map = function (e, t) {
            t = t || this;
            for (var n = new r, s = this.head; null !== s;) n.push(e.call(t, s.value, this)), s = s.next;
            return n
        }, r.prototype.mapReverse = function (e, t) {
            t = t || this;
            for (var n = new r, s = this.tail; null !== s;) n.push(e.call(t, s.value, this)), s = s.prev;
            return n
        }, r.prototype.reduce = function (e, t) {
            var n, r = this.head;
            if (arguments.length > 1) n = t; else {
                if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                r = this.head.next, n = this.head.value
            }
            for (var s = 0; null !== r; s++) n = e(n, r.value, s), r = r.next;
            return n
        }, r.prototype.reduceReverse = function (e, t) {
            var n, r = this.tail;
            if (arguments.length > 1) n = t; else {
                if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                r = this.tail.prev, n = this.tail.value
            }
            for (var s = this.length - 1; null !== r; s--) n = e(n, r.value, s), r = r.prev;
            return n
        }, r.prototype.toArray = function () {
            for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
            return e
        }, r.prototype.toArrayReverse = function () {
            for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
            return e
        }, r.prototype.slice = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var n = new r;
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var s = 0, i = this.head; null !== i && s < e; s++) i = i.next;
            for (; null !== i && s < t; s++, i = i.next) n.push(i.value);
            return n
        }, r.prototype.sliceReverse = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var n = new r;
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var s = this.length, i = this.tail; null !== i && s > t; s--) i = i.prev;
            for (; null !== i && s > e; s--, i = i.prev) n.push(i.value);
            return n
        }, r.prototype.splice = function (e, t, ...n) {
            e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
            for (var r = 0, i = this.head; null !== i && r < e; r++) i = i.next;
            var o = [];
            for (r = 0; i && r < t; r++) o.push(i.value), i = this.removeNode(i);
            null === i && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
            for (r = 0; r < n.length; r++) i = s(this, i, n[r]);
            return o
        }, r.prototype.reverse = function () {
            for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
                var r = n.prev;
                n.prev = n.next, n.next = r
            }
            return this.head = t, this.tail = e, this
        };
        try {
            n(49602)(r)
        } catch (e) {
        }
    }
}]);