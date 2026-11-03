const express = require('express')
const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.get("/",userController.userGet);
userRouter.post("/logOut",userController.userPost);

exports.userRouter = userRouter;