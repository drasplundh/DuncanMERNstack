import * as ActionTypes from "../ActionTypes";


const Initial_State = {
    order :  {
        name : "",
        desc : "",
        rating : "",
        price : "",
        qty : ""
    },
    orders : [],
    Loading : false
}

//write callback/ reducer to generate new state upon action change
let OrderReducer = (state = Initial_State, action) => {
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {

        case ActionTypes.ADD_ORDERS_TO_STORE :
            return {...state, orders : action.payload.orders}

        default:
            return state
    }
}

export default OrderReducer;