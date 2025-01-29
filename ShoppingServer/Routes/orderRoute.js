let express = require("express");
let router = express.Router({}),
OrderDataModel = require("../DataModel/OrderDataModel");

router.post("/api/getUserOrders", (req, res) => {
    OrderDataModel.find({userid: req.body.userid})
        .then((orders) => {
            res.send(orders);
            console.log("user's orders: ", orders);
        });           
})
module.exports = router;