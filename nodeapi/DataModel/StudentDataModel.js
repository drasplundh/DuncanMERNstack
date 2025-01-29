let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack19");

let studentSchema = new schemaObj ({
    name: {type: String, required: true},
    major: {type: String, required: true},
    grade: Number

 
    
})

let StudentModel = mongooseObj.model("student", studentSchema); // this is what tells MongoDB how to create your "table" and store it

module.exports = StudentModel;
