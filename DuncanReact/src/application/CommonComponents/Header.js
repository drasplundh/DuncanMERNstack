import React from "react";
import { NavLink } from "react-router-dom";

let Header = (props) => {
    return (
    <>

    <h1> I'm the header </h1>
        <div >
            {/* <NavLink to="/home" className="button" activeClassName="true">Home</NavLink>
            <NavLink to="/topic" className="button" activeClassName="true">Topic</NavLink> */}
        </div>
    </>
    )
}

export default Header;