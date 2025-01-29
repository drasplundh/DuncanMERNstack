import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    coupon : null
}

//write callback/ reducer to generate new state upon action change
let CouponReducer = (state = Initial_State, action) => {
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {

        case ActionTypes.GENERATE_COUPON :
            return {...state, coupon : action.payload.coupon}

        default:
            return state
    }
}

export default CouponReducer;