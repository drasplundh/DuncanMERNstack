import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const placeOrder = (order, userid)=>{

    return function (dispatch) {
        //dispatch(loading(true));

        // SERVER CALL - just talks to DB can't do anything until we use an ACTION
        axios.post("http://localhost:9000/checkout/api/placeOrder",
            {order, userid}
        )
        .then((allData)=>{
            let orderResp = allData.data;
            console.log("order saved response ", orderResp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

// ACTION - actions are always dispatched
export const addOrder = (orders) => {
    return {
        type : actionTypes.ADD_ORDERS_TO_STORE,
        payload : {orders}
    }
}

export const getOrders = (userid) => {
    return function (dispatch) {
        axios.post("http://localhost:9000/orders/api/getUserOrders",
            {userid}
        )
        .then((userOrders)=>{
            let orderList = userOrders.data;
            console.log("user's orders", orderList);
            dispatch(addOrder(orderList));

        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
}
    


