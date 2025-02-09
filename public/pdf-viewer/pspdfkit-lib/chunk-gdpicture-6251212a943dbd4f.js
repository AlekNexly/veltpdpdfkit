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
"use strict";
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([[1305], {
    90027: (e, t, r) => {
        r.r(t), r.d(t, {
            Conformance: () => a,
            GdPicture: () => y,
            GdPictureWorker: () => g,
            getBrowserSpawner: () => b
        });
        var s = r(96156), n = r(15359), o = r(94161);
        let a = function (e) {
            return e[e.pdf_a_1a = 0] = "pdf_a_1a", e[e.pdf_a_1b = 1] = "pdf_a_1b", e[e.pdf_a_2a = 2] = "pdf_a_2a", e[e.pdf_a_2u = 3] = "pdf_a_2u", e[e.pdf_a_2b = 4] = "pdf_a_2b", e[e.pdf_a_3a = 5] = "pdf_a_3a", e[e.pdf_a_3u = 6] = "pdf_a_3u", e[e.pdf_a_3b = 7] = "pdf_a_3b", e[e.pdf_a_4 = 8] = "pdf_a_4", e[e.pdf_a_4e = 9] = "pdf_a_4e", e[e.pdf_a_4f = 10] = "pdf_a_4f", e
        }({});

        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, s)
            }
            return r
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function (t) {
                    (0, s.Z)(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        const c = "/create.pdf", u = "/save.pdf", d = "/create.docx", f = "/save.docx", p = "/templateData.json",
            m = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
        let w = null, h = null;

        function _(e) {
            let t;
            (0, n.kG)(h, "GdPicture WebAssembly is not loaded.");
            for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) s[o - 1] = arguments[o];
            for (const e of s) t = Object.assign(s[0], e);
            const a = JSON.stringify(l({type: e}, t)), i = JSON.parse(h.CommandHandler(a));
            if (!i.success) throw new Error(i.errorReason + ": " + i.errorMessage + "\n" + i.error);
            return i
        }

        class y {
            _mountCustomFonts(e, t) {
                (0, n.kG)(w, "WebAssembly module not loaded."), w.FS.mkdir(t);
                {
                    const r = m ? w.FS.filesystems.WORKERFS : w.FS.filesystems.MEMFS;
                    w.FS.mount(r, {blobs: e}, t)
                }
            }

            async loadModule(e, t, r, s, n, a, i) {
                const {Assemblies: l, Module: c} = await async function (e, t) {
                    if ("string" == typeof e) {
                        const r = "pspdfkit-lib/", s = `${r}gdpicture-2df8622a/jit`, n = `${r}gdpicture-2df8622a/aot`;
                        let o, a;
                        t ? (o = `${e}${n}/initDotnet.js`, a = `${e}${n}`) : (o = `${e}${s}/initDotnet.js`, a = `${e}${s}`);
                        const {initDotnet: i} = await import(o);
                        return i(a)
                    }
                    throw new Error("GdPicture WASM loader not implemented")
                }(e, t);
                h = l.GdPictureWasm.API, w = c, _("gdpicture/setLicense", {origin: r}, {licenseKey: s || "DEMO_PSPDFKIT_WEB"});
                const u = n ? "/fonts" : "";
                if (n && !w.FS.analyzePath(u).exists && (this._mountCustomFonts(n, u), _("gdpicture/setFonts", {fontPaths: [u]})), a) {
                    const e = await (0, o.r)(a);
                    _("gdpicture/setDynamicFontLoading", {
                        baseUrl: a.split("/").slice(0, -1).join("/"),
                        allowedFonts: e.availableFonts,
                        v: 1
                    })
                }
                i && _("gdpicture/setFontSubstitutions", {fontSubstitutions: i})
            }

            toPdf(e, t) {
                w.FS.writeFile(c, new Uint8Array(e));
                const r = {file: u, format: "pdf"};
                t && t in a && (r.conformance = t);
                try {
                    return _("gdpicture/process", {input: {file: c}, output: r}), w.FS.readFile(u).buffer
                } finally {
                    try {
                        w.FS.unlink(u)
                    } catch (e) {
                    }
                }
            }

            toOffice(e, t) {
                w.FS.writeFile(c, new Uint8Array(e));
                const r = `/save.${t}`;
                try {
                    return _("gdpicture/process", {
                        input: {file: c},
                        output: {file: r, format: t}
                    }), w.FS.readFile(r).buffer
                } finally {
                    try {
                        w.FS.unlink(r)
                    } catch (e) {
                        console.log(e.message)
                    }
                }
            }

            async populateDocumentTemplate(e, t) {
                let r;
                w.FS.writeFile(d, new Uint8Array(e));
                try {
                    r = JSON.stringify(t, null, 2)
                } catch (e) {
                    throw new Error("Invalid config data")
                }
                w.FS.writeFile(p, r);
                try {
                    return _("gdpicture/process-office-template", {
                        inputFile: d,
                        modelAndConfigFile: p,
                        outputFile: f
                    }), w.FS.readFile(f).buffer
                } finally {
                    try {
                        w.FS.unlink(f), w.FS.unlink(p)
                    } catch (e) {
                        console.log(e.message)
                    }
                }
            }
        }

        const g = class {
            constructor(e) {
                let {
                    baseUrl: t,
                    aot: r,
                    mainThreadOrigin: o,
                    licenseKey: a,
                    customFonts: i,
                    dynamicFonts: l,
                    fontSubstitutions: c,
                    workerSpawner: u,
                    wasmLoaderPath: d
                } = e;
                (0, s.Z)(this, "requests", new Map), (0, s.Z)(this, "nextRequestId", 1), (0, s.Z)(this, "handleMessage", (e => {
                    const t = e.data, r = this.requests.get(t.id);
                    (0, n.kG)(r, `No request was made for id ${t.id}.`);
                    const {resolve: s, reject: o} = r;
                    if (this.requests.delete(t.id), t.error) {
                        const e = new n.p2(t.error);
                        e.callArgs = t.callArgs, o(e)
                    } else s(t.result)
                })), this.workerSpawner = u, this.workerSpawner.setMessageHandler(this.handleMessage), this.moduleLoadPromise = this.sendRequest("loadModule", [d ? {
                    baseUrl: t,
                    wasmLoaderPath: d
                } : t, r, o, a, i, l, c])
            }

            toOffice(e, t) {
                return this.sendRequest("toOffice", [e, t])
            }

            toPdf(e, t) {
                let r;
                return t && (r = t.replace("pdf", "pdf_").replaceAll("-", "_")), this.sendRequest("toPdf", [e, r])
            }

            async populateDocumentTemplate(e, t) {
                return this.sendRequest("populateDocumentTemplate", [e, t])
            }

            destroy() {
                var e;
                null === (e = this.workerSpawner) || void 0 === e || e.terminate(), this.workerSpawner = null
            }

            async sendRequest(e, t) {
                (0, n.kG)(this.workerSpawner, "GdPictureClient has been destroyed"), this.moduleLoadPromise && await this.moduleLoadPromise;
                const r = this.workerSpawner;
                return new Promise(((s, n) => {
                    const o = this.assignId(), a = [...t].filter((e => e instanceof ArrayBuffer));
                    r.postMessage({id: o, action: e, args: t}, a), this.requests = this.requests.set(o, {
                        resolve: s,
                        reject: n
                    })
                }))
            }

            assignId() {
                const e = this.nextRequestId;
                return this.nextRequestId = this.nextRequestId + 1, e
            }
        };
        const b = async function () {
            let e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (t) {
                const {default: t} = await r.e(1945).then(r.t.bind(r, 93072, 23));
                e = new t
            } else e = new Worker(new URL(r.p + r.u(2999), r.b));
            return {
                setMessageHandler(t) {
                    (0, n.kG)(e, "Worker is null"), e.onmessage = t
                }, postMessage(t, r) {
                    var s;
                    null === (s = e) || void 0 === s || s.postMessage(t, r)
                }, terminate() {
                    var t;
                    null === (t = e) || void 0 === t || t.terminate(), e = null
                }
            }
        }
    }
}]);