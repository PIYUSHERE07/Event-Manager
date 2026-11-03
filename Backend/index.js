const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const {clubRouter} = require('./routers/clubRouter')
const {adminRouter} = require('./routers/adminRouter')
const {userRouter} =require('./routers/userRouter')

require('dotenv').config();

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const store = new MongoDBStore({
    uri: process.env.DB_URL,
    collection: 'sessions'
});
app.use(session({
    secret: "eventManagenment",
    resave: false,
    saveUninitialized: true,
    store:store
}))

app.use("/admin",adminRouter)
app.use("/club",clubRouter)
app.use(userRouter)

const PORT=process.env.PORT;
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database is connected");
    app.listen(PORT,()=>{
        console.log("server is running.")
        console.log(`Server running at http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log("error while connecting database : ",err);
})