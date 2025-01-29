let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack19");

let userSchema = new schemaObj({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    street: String,
    mobile: Number

})

let UserModel = mongooseObj.model("user", userSchema); // user is the collection name, MongoDB always saves as plural, 'users'

module.exports = UserModel;