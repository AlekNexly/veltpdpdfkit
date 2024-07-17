import {useSetDocumentId, VeltCommentTool, VeltPresence} from '@veltdev/react';
import {PSPDFKitContainer} from "./PSPDFKit";

export default function YourDocument() {

    useSetDocumentId('my-document-id')

    return (
        <>
            <div className="toolbar">
                <div className="comment-tool">
                    <VeltCommentTool/>
                </div>
                <div className="presence">
                    <VeltPresence/>
                </div>
            </div>

            <PSPDFKitContainer/>
        </>
    )
}
