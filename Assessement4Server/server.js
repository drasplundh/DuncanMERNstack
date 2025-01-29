const express = require('express') //import package
const app = express() //initialzing the express application
const hobbyRoute = require("./Routes/hobbyRoute");

const cors = require('cors')

globalThis.parentDirectory = __dirname;

//we can have multiple express applications running in our single project
const hobbyApp = express() //initialzing the express application

//user, product, cart
//const router = express.Router({})

//cors - will be used as middleware to bypass at root level or individual api level to allow cross origin access
app.use(cors());

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert_info.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

//application mounting 
app.use("/hobby", hobbyApp)
hobbyApp.use("/", hobbyRoute);


console.log('API is listening at port 9000')
app.listen(9000)
