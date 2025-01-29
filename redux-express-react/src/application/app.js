import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import User from "./CommonComponents/UserComponent";
import Student from "./CommonComponents/StudentComponent";
import "./app.css";

export default class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Duncan",
            user: {
                address: "Earth",
                session: "MERN"
            }
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home user={this.state.user}/>}/>
                        <Route path="home" element={<Home />}/>
                        <Route path="login" element={<User />}/>
                        <Route path="student" element={<Student />}/>
                    </Routes>
            </Router>
        )
    }
}