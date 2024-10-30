let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/db_latihan_uts";


mongoose.connect(dbURI,{
   //useNewURLParser: true
});

mongoose.connection.on("connected",() => {
    console.log("connected to MongoDB");
});

mongoose.connection.on("error",(error) => {
    console.log("connection Error : " + error);
});

mongoose.connection.on("error", (error) => {
    console.log("disconnected from MongoDB");
});
