import React from "react"
import { NavLink } from "react-router-dom";

let Topic = (props) => {

    return (
        <>
            <div>
                <NavLink to="/webPack"  className="button" activeclassname="true"> WebPack </NavLink>
                <NavLink to="/react"  className="button" activeclassname="true"> React </NavLink>
                <NavLink to="/router"  className="button" activeclassname="true"> Router </NavLink>
                <NavLink to="/virtualDom"  className="button" activeclassname="true"> VirtualDom </NavLink>
                <NavLink to="/propTypes"  className="button" activeclassname="true"> PropTypes </NavLink>
            </div>
        </>
    )

}
export default Topic;