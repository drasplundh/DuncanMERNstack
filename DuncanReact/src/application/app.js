import React from "react";
import Header from "./CommonComponents/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topic from "./CommonComponents/Topic";
import WebPack from "./CommonComponents/webPack";
export default class Application extends React.Component {
    render() {
        console.log("Rneder ins called");
        let myname = "Windiee - JSX => Javascript Like XML Structure"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "Duncan"]
        let nameListWorking = ["Windie", "Stacy"]
        return(
        <>
        <Router>
        <Header />
        <Topic />
        <Routes>
            <Route path="webPack" element={<WebPack />}/>
        </Routes>
        </Router>
        
        </>)
    }
}