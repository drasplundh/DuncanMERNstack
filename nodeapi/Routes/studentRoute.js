const express = require('express');
const studentRouter = express.Router({strict:true, caseSensitive: true});
const studentDataModel = require("../DataModel/StudentDataModel");

studentRouter.post("/api/signinup", (request, response) => {

    let studentObj = request.body; // user object passed in the body of the sign up api

    studentDataModel.findOne({name:request.body.name}).then( (existingStudent)=>{

        if(existingStudent) { // if user exists, just sign in
            response.send(existingStudent);
        } else { // Sign up new user
            let studentSchemaObj = new studentDataModel(request.body);
            studentSchemaObj.save().then((studentUser)=>{
                console.log("successful signup", studentUser);
                response.send(newStudent)
            }).catch((studentSaveError) => {
                console.log("Error signing up student", studentSaveError);
                response.send("Error while signing up");
            })
        }
    }).catch((error) => {
        console.log("Error while fetching exsiting student", error)
        response.send("Error while fetching existing student");
    });
});

studentRouter.get("/api/students",(request, response) => {
    studentDataModel.find()
    .then((students) => {
        response.send(students)
    })
    .catch((error) => {
        console.log("Could not find all students ", error);
        response.send("Error while fetching students");
    })
})

module.exports = studentRouter;