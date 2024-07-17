import {useSetDocumentId, VeltCommentTool, VeltPresence} from '@veltdev/react';
import {PSPDFKitContainer} from "./PSPDFKit";
import WebViewer from '@pdftron/webviewer';
import {useEffect, useRef} from "react";

export default function YourDocumentApryse() {
    const viewer = useRef(null);
    const isStarted = useRef(false);

    useSetDocumentId('my-document-id')

    useEffect(() => {
        if (!isStarted.current) return;
        isStarted.current = true;

        WebViewer(
            {
                path: 'public/',
                licenseKey: 'demo:1721214504869:7f94fd9503000000003c56eecbcc80bc0246e22a57afeff0bf239653ac',
                initialDoc: '2vZjD8.pdff',
            },
            viewer.current,
        ).then((instance) => {
            const {documentViewer} = instance.Core;
            // you can now call WebViewer APIs here...
        });
    }, []);

    return (
        <div className="MyComponent">
            <div className="webviewer" ref={viewer} style={{height: "90vh"}}></div>
        </div>
    );
}
