const express = require('express')
const clubRouter = express.Router();
const clubController = require('../controller/clubController');

clubRouter.get(clubGet);
clubRouter.post(clubPost);