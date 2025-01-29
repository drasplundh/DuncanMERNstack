import React from "react";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";

let HeaderComponent = (props) => {
    

    

    return(
        <>
            <div class="navbar navbar-default">
                <div class="nav-content d-flex w-50 justify-content-center">
                    <NavLink to="/clock" className="button" activeclassname="true"> Clock </NavLink>
                    <NavLink to="/atm" className="button" activeclassname="true"> ATM </NavLink>
                    <NavLink to="hobby" className="btn" activeclassname="true"> Hobby </NavLink>
                </div>
            </div>
            <hr/>
        </>
    )
}

// let mapStateToProps = (store)=>{
//     return{
//         user : store.userReducer.user
//     }
// }

// export default connect(mapStateToProps,null)(Header);

export default HeaderComponent;