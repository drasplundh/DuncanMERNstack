import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import bag from "../images/shopping-bag-nobckg.png";

let CartItemComponent = (props)=>{
    let item = props.item;

    let [Quantity, setQuantity] = useState(item.qty)

    let dispatchItem = useDispatch();


    return(
        <>
                {/* CHECKOUT ITEMS CONTAINER */}
                <div class="col-8 checkout-item mx-auto container-fluid">
                    <div class="row">
                        <div class="col-3 text-center">
                            <img src={bag}/>
                        </div>
                        <div class="col-3 text-center">
                            <p>Item Name</p>
                            <p>{item.name}</p>
                        </div>
                        <div class="col-3 text-center">
                            <p>Price</p>
                            <p>${item.price}</p>
                        </div>
                        <div class="col-3 text-center">
                            <p>Quantity</p>
                            <p>{item.qty}</p>
                        </div>
                    </div>
                </div>    
                <div class="col-2 my-auto">
                    <button class="d-flex align-items-center justify-content-center small-x">x</button>
                </div>   
        </>
        
    )
}

export default CartItemComponent;