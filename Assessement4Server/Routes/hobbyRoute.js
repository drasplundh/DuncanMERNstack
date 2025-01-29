let express = require("express");
let router = express.Router({}),
HobbyDataModel = require("../DataModels/HobbyDataModel");

//cart api's
router.post("/saveHobby",(req, res)=>{

    let hobbyObjSchema = new HobbyDataModel(req.body);

    hobbyObjSchema.save().then((newHobby) => {
        res.send(newHobby);
    }).catch((err1)=>{
        console.log("err saving", err1);
        res.send("error while saving hobby")
    })

    router.get("/getHobbies", (req, res) => {
        hobbyObjSchema.find()
        .then((hobbies) => {
            res.send(hobbies);
        }).catch((error) => {
            console.log(error);
            res.send("Error while fetching products");
        })
    })

});

module.exports = router;
