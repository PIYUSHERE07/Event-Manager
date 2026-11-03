const express = require('express')
const userRouter = express.Router();
const userController = require('../controller/userController');
const authController = require('../controller/authController');

userRouter.get("/get-session",userController.getSession);

//authentication
userRouter.post("/login",authController.loginPost);
userRouter.post("/logOut",authController.logoutPost);

exports.userRouter = userRouter;