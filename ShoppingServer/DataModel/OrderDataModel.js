let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack19"); //creates db with name mernstack5 or opens a connection if already present

let OrderSchema = new schemaObj({
    userid: { type:String, required:true},
    order: Object
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let OrderModel = mongooseObj.model("order", OrderSchema);
module.exports = OrderModel;
//note: donot put versionkey to true or it will start throwing error