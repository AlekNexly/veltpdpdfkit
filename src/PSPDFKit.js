import {useEffect, useRef, useState} from "react";
import PSPDFKit from "pspdfkit";

const DOC_URL = "2vZjD8.pdf";
const VIEWER_LIB_STATIC_URL = `${window.location.protocol}//${window.location.host}/pdf-viewer/`;

export const PSPDFKitContainer = () => {
    const [PDFInstance, setPDFInstance] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        (async () => {
            try {
                PSPDFKit.unload(containerRef.current);

                const instance = await PSPDFKit.load({
                    container: containerRef.current,
                    document: DOC_URL,
                    baseUrl: VIEWER_LIB_STATIC_URL,
                    useIframe: true
                });

                setPDFInstance(instance);
            } catch (error) {
                console.error("Failed to load PSPDFKit:", error);
                debugger;
            }
        })();
    }, [containerRef.current]);

    return (
            <div
                ref={containerRef}
                style={{width: "100%", height: "90%"}}
                id="velt-pdf-viewer"
                data-velt-pdf-viewer="true"
                data-velt-iframe-container="true"
            />
    );
};
