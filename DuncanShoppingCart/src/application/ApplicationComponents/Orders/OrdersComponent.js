import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import { getOrders } from "../../State/Order/OrderActions";




let OrdersComponent = (props) => {

        // let dispatchTheData = useDispatch();


    let user = useSelector((state)=>state.userReducer.user)
    let orders = useSelector((state)=>state.orderReducer.orders);
    console.log("orders: ", orders);
    let userid = user._id;

    let dispatchGetOrders = useDispatch();

        useEffect(()=>{
            orders && orders.length == 0 ? dispatchGetOrders(getOrders(userid)) : [] // output empty array if no orders (tertiary operator)
        },[]) // empty array here is what signals an update via useEffect anytime that array is changed
        

    return (
        <>
        <div class="container-fluid">
            <h1>{user.userName}'s Orders</h1>
            <div class="row justify-content-center vh-100">
                <div class="col-5 checkout-box">
                    <div class="row">

                    {orders.map((item) => {
                        return <OrderItem item={item} key={item._id} />
                    })
                    }

                    </div>
                </div>
            </div>
        </div>

        </>
        )
        }

export default OrdersComponent;
