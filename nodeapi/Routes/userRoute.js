const express = require('express');
const userRouter = express.Router({strict:true, caseSensitive: true});
const userDataModel = require("../DataModel/UserDataModel");

userRouter.post("/api/signinup", (request, response) => {

    let userObj = request.body; // user object passed in the body of the sign up api

    userDataModel.findOne({userName:request.body.userName}).then( (existingUser)=>{

        if(existingUser) { // if user exists, just sign in
            response.send(existingUser);
        } else { // Sign up new user
            let userSchemaObj = new userDataModel(request.body);
            userSchemaObj.save().then((newUser)=>{
                console.log("successful signup", newUser);
                response.send(newUser)
            }).catch((userSaveError) => {
                console.log("Error signing up user", userSaveError);
                response.send("Error while signing up");
            })
        }
    }).catch((error) => {
        console.log("Error while fetching exsiting user", error)
        response.send("Error while fetching existing user");
    });
});

userRouter.get("/api/users",(request, response) => {
    userDataModel.find()
    .then((users) => {
        response.send(users)
    })
    .catch((error) => {
        console.log("Could not find all users ", error);
        response.send("Error while fetching users");
    })
})

module.exports = userRouter;