import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./custom.css";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import ProductComponent from "./ApplicationComponents/Product/ProductComponent";
import CartComponent from "./ApplicationComponents/Cart/CartComponent";
import CheckoutComponent from "./ApplicationComponents/Checkout/CheckoutComponent";
import UserHooks from "./ApplicationComponents/User/UserHooksComponent";
import CouponComponent from "./ApplicationComponents/Checkout/CouponComponent";
import OrderPlacedComponent from "./ApplicationComponents/OrderPlaced/OrderPlacedComponent";
import OrdersComponent from "./ApplicationComponents/Orders/OrdersComponent";

export default class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props); //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow udpdation of values via react rendering life cycle
        this.state = {
            userName : "Duncan",
            user : {
                address : "Somewhere on earth",
                session : "Somehwere on webex"
            }
        }
    }

        //render - method is responsible to create virtual dom for every change of state or props
        render(){
            //console.log("Render is called!! ", this.state.userName)
            //switch - case works for router
            return(
                <Router>
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user} />}/>
                            <Route path="home" element={<Home />}/>
                            <Route path="login" element={<UserHooks />}/>
                            <Route path="product" element={<ProductComponent />} />
                            <Route path="cart" element={<CartComponent />} />
                            <Route path="checkout" element={<CheckoutComponent/>} />
                            <Route path="coupon" element={<CouponComponent />} />
                            <Route path="orderPlaced" element={<OrderPlacedComponent />} />
                            <Route path="orders" element={<OrdersComponent />} />
                        </Routes>
                    <Footer/>
                </Router>)
        }
    }