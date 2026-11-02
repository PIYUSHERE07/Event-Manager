const express = require('express')
const clubRouter = express.Router();
const clubController = require('../controller/clubController');

clubRouter.get("/",clubController.clubGet);
clubRouter.post("/",clubController.clubPost);

exports.clubRouter = clubRouter;