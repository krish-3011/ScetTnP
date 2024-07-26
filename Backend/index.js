const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const staticRouter = require("./routes/staticRoute.js");
const offer = require("./routes/offer.js");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const cors = require("cors");


//connecting database
async function main(){
    await mongoose.connect("mongodb://127.0.0.1/scetTnP");
}
main().then(console.log("Database connected")).catch(err => {console.log(`error in connecting database : ${err}`)});

//Middlewares
// app.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');});
app.use(cors());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")))

//adding Router
app.use("/",staticRouter);
app.use("/offers",offer);

//error handling
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
})

//Starting Server
app.listen(port , '0.0.0.0', ()=>{
    console.log(`server is listing on port ${port}`);
}
);