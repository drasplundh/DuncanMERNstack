let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack19"); 

let HobbySchema = new schemaObj({
    name: { type:String, required:true}
},
{
    versionKey: false 
});

let HobbyModel = mongooseObj.model("hobby", HobbySchema);
module.exports = HobbyModel;

