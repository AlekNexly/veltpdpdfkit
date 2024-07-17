import {VeltProvider, VeltComments, VeltPresence} from '@veltdev/react';
import YourAuthComponent from './YourAuthComponent';
import YourDocument from './YourDocument';
import "./App.css";
import YourDocumentApryse from "./YourDocumentApryse";


export default function App() {

    return (
        <div className="App" style={{height: "100vh", width: "100vw"}}>
            <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
                <VeltComments/>
                <YourAuthComponent/>
                <YourDocument/>
                {/*<YourDocumentApryse/>*/}
            </VeltProvider>
        </div>
    );
}
