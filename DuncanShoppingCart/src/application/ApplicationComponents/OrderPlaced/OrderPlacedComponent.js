import React, { useState, useEffect, useRef } from "react";
// import { EmptyTheCart } from "../../State/Cart/CartAction";




let CheckoutComponent = (props) => {

        // let couponInput = useRef(); // react class for user input couponInput is an OBJECT
        // let dispatchTheData = useDispatch();


        // let [total, setTotal] = useState(0);
        // let [applied, setApplied] = useState(false);

        // const applyCoupon = () => {
        //     if (couponInput.current.value == coupon && applied == false) { 
        //         alert("10% coupon applied.");
        //         const discount = total * .1;
        //         const newTotal = total - discount;
        //         setTotal(newTotal);
        //         setApplied(true);
        //     } else if (applied == true) {
        //         alert("This coupon has already been applied.")
        //     }
        // }

    // let user = useSelector((state)=>state.userReducer.user)
    // let cartList = useSelector((state)=>state.cartReducer)
    // let shipping = 0;
    // let coupon = useSelector((state) => state.couponReducer.coupon);
    // let userid = user._id;
        

    // useEffect(() => {
    //     const calculateSubtotal = () => {
    //         let newTotal = 0;
    //       for (const item of cartList) {
    //         newTotal += item.price * item.qty;
    //       }
    //       setTotal(newTotal);
    //     };
    
    //     calculateSubtotal();
    //   }, []);

    //       let clickToOrder =(cartList, userid)=>{
    //           if (userid) {
    //               alert("order will be placed");
    //               dispatchTheData(placeOrder(cartList, userid))
    //               dispatchTheData(EmptyTheCart());
    //           } else {
    //               alert("You're not logged-in!! Please login to help you in furture with your selected products!!")
    //               //add a function using navigation hook to re-direct to login page
    //           }
    //       }


    return (
        <>
        <div class="container-fluid">
            <h1>Thank you for your order</h1>
            <div class="row justify-content-center vh-100">
                <div class="col-6 checkout-box">
                    <div class="row">
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default CheckoutComponent;
