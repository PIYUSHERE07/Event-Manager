const express = require('express')
const mongoose = require('mongoose')
const app = express()

const DB_URL = "mongodb+srv://EventManagenment:piyushere@firstcluster.lyzbkhu.mongodb.net/EventManagenment?compressors=zlib";

const PORT=3000;
mongoose.connect(DB_URL).then(()=>{
    console.log("Database is connected");
    app.listen(PORT,()=>{
        console.log("server is running.")
    })
}).catch((err)=>{
    console.log("error while connecting database : ",err);
})