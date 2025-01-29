import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ClockComponent from "./ApplicationComponents/ClockComponent";
import HeaderComponent from "./CommonComponents/HeaderComponent";
import AtmComponent from "./ApplicationComponents/AtmComponent";
import HobbyComponent from "./ApplicationComponents/HobbyComponent";

export default class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

        //render - method is responsible to create virtual dom for every change of state or props
        render(){
            //console.log("Render is called!! ", this.state.userName)
            //switch - case works for router
            return(
                <Router>
                    <HeaderComponent />
                        <Routes>
                            <Route path="clock" element={<ClockComponent />} />
                            <Route path="atm" element={<AtmComponent /> } />
                            <Route path="hobby" element={<HobbyComponent /> } />
                        </Routes>
                </Router>)
        }
    }