import * as actionTypes from "../ActionTypes";

export const generateCoupon = (coupon) => {
    return {
        type : actionTypes.GENERATE_COUPON,
        payload : {coupon}
    };
};


