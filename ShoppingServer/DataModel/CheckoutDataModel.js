let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack19"); //creates db with name mernstack5 or opens a connection if already present

let CheckoutSchema = new schemaObj({
    userid: { type:String, required:true},
    checkout: Object
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let CheckoutModel = mongooseObj.model("checkout", CheckoutSchema);
module.exports = CheckoutModel;
//note: donot put versionkey to true or it will start throwing error