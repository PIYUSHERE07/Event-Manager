const express = require('express')
const adminRouter = express.Router();
const adminController = require('../controller/adminController');

adminRouter.get("/councilLogin",adminController.adminGet);
adminRouter.post("/councilLogin",adminController.adminPost);

exports.adminRouter = adminRouter;