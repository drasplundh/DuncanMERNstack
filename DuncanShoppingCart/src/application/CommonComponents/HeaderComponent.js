import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props) => {
    
    let user = props.user; //reading from mapStateToProps which reads from userReducer.user
    if (user.userName) {
        console.log("user exists");
    } else {
        console.log("he aint there");
    }
    
    const usrName = user && user.userName ? user.userName : "";

    
    
    return(
        <>
        {/* {usrName !=""?
            <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>:
            <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
                <h3>Please click on login button to proceed to login.</h3>
            </h2>
        }    */}
            <div class="navbar navbar-default">
                <div class="nav-content d-flex w-50 justify-content-left">
                    <NavLink to="/home"  className="nav-link" activeclassname="true"> Home </NavLink>
                    <NavLink to="/product"  className="nav-link" activeclassname="true"> Product </NavLink>
                    <NavLink to="/cart"  className="nav-link" activeclassname="true"> Cart </NavLink>
                    <NavLink to="/coupon" className="nav-link" activeclassname="true"> Coupon </NavLink>
                    <NavLink to="/orders" className="nav-link" activeclassname="true"> Orders</NavLink>
                </div>
                <div class="nav-content d-flex w-50 justify-content-end">
                    {usrName && <div class="nav-info">Hello, {usrName}</div>}{/* CONDITIONAL REDNER */}
                    <NavLink to="/login"  className="nav-link" activeclassname="true"> Login </NavLink>
                    
                </div>
            </div>
            <hr/>
        </>
    )
}

let mapStateToProps = (store)=>{
    return{
        user : store.userReducer.user
    }
}

export default connect(mapStateToProps,null)(Header);