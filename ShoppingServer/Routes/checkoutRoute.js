let express = require("express");
let router = express.Router({}),
CheckoutDataModel = require("../DataModel/CheckoutDataModel");

//Checkout api's
router.post("/api/placeCheckout",(req, res)=>{

    let checkoutObj = new CheckoutDataModel({...req.body})
    checkoutObj.save().then((data) => {
        res.status(201).json(data);
    }).catch((err) =>  {
        res.send("Error occured saving the checkout: " + err);
    }) // end checkoutObj.save().catch()

    .catch((err) => {
        console.log("Error: " + err);
        res.send("error while saving checkout");
    }) // end router.post().catch();

});

router.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid})
        .then((cart) => { res.json(cart) })
        .catch((err)=>{res.send("Error Occurred"+ err);})

});
module.exports = router;