import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { RemoveItemFromCart, UpdateItemInCart } from "../../State/Cart/CartAction";

let OrderItem = (props)=>{
    let item = props.item;


    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{item.qty}</td>
        </tr>
    )
}

export default OrderItem;