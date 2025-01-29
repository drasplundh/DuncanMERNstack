import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { generateCoupon } from "../../State/Coupon/CouponAction";

let CouponComponent = (props) => {

    const DIGIT6 = 1000000;
    const dispatch = useDispatch();

        let [coupon, setCoupon] = useState(0);

    const createCoupon = () => {
        const newCoupon = Math.floor(Math.random() * DIGIT6); // 6 digits
        setCoupon(newCoupon);
        dispatch(generateCoupon(newCoupon));
    }



    return (
        <>
            <button onClick={() => createCoupon()} class="btn custom-btn">Generate Coupon</button>
            <h3>{coupon}</h3>
        </>
    )

}

export default CouponComponent;