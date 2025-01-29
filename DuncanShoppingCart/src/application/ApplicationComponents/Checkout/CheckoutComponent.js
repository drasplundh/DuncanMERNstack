import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import { placeOrder } from "../../State/Order/OrderActions";
// import { EmptyTheCart } from "../../State/Cart/CartAction";
import truck from "../images/delivery-truck-nobckg.png";
import { useNavigate } from "react-router-dom";
import "./checkout.css";


let CheckoutComponent = (props) => {
    let navigate = useNavigate();

        let couponInput = useRef(); // react class for user input couponInput is an OBJECT
        let dispatchTheData = useDispatch();


        let [total, setTotal] = useState(0);
        let [applied, setApplied] = useState(false);

        const applyCoupon = () => {
            if (couponInput.current.value == coupon && applied == false) { 
                alert("10% coupon applied.");
                const discount = total * .1;
                const newTotal = total - discount;
                setTotal(newTotal);
                setApplied(true);
            } else if (applied == true) {
                alert("This coupon has already been applied.")
            }
        }

    let user = useSelector((state)=>state.userReducer.user)
    let cartList = useSelector((state)=>state.cartReducer)
    let shipping = 0;
    let coupon = useSelector((state) => state.couponReducer.coupon);
    let userid = user._id;
        

    useEffect(() => {
        const calculateSubtotal = () => {
            let newTotal = 0;
          for (const item of cartList) {
            newTotal += item.price * item.qty;
          }
          setTotal(newTotal);
        };
    
        calculateSubtotal();
      }, []);

          let clickToOrder =(cartList, userid)=>{
              if (userid) {
                  alert("order will be placed");
                  dispatchTheData(placeOrder(cartList, userid))
                //   dispatchTheData(EmptyTheCart());
                  navigate("/orderPlaced");
              } else {
                  alert("You're not logged-in!! Please login to help you in furture with your selected products!!")
                  //add a function using navigation hook to re-direct to login page
              }
          }


    return (
        <>
        <div class="container-fluid">
            <h1>{user.userName}'s Shopping Cart</h1>
            <div class="row justify-content-center vh-100">
                <div class="col-5 checkout-box">
                    <div class="row">

                {/* CART ITEMS Add Items here */}
                {cartList.map((item) => {
                    return <CheckoutItem item={item} key={item._id} />
                })
                }
                </div>
                </div>
                                {/* CHECKOUT SUMMARY CONTAINER */}
            <div class="col-3 checkout-summary-box">
                <div class="row">
                    <div class="col-10 summary-item mx-auto text-center">
                        <p>Items: {cartList.length}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 summary-item mx-auto text-center">
                        <p>Subtotal: ${total}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 summary-item mx-auto text-center">
                        <img src={truck}/>
                        <p>Shipping FREE!</p>
                        <div class="row">
                            <p class="shipping">Ships To:</p>
                            <p class="shipping">{user.userName}</p>
                            <p class="shipping">{user.street}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 summary-item mx-auto text-center">
                        <p>Coupon: {coupon}</p>
                        <input type="text" ref={couponInput}></input><span><button onClick={() => applyCoupon()}class="btn custom-btn">Apply</button></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 mx-auto text-center">
                        <h3>TOTAL: ${total + shipping}</h3>
                    </div>
                </div>
   
                <div class="row">
                    <div class="col-10 mx-auto text-center">
                        <button onClick={() => clickToOrder(cartList, userid)} class="btn custom-btn">Submit Payment</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </>
    )

}

export default CheckoutComponent;
