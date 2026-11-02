const express = require('express')
const hostRouter = express.Router();
const hostController = require('../controller/hostController');

hostRouter.get(hostController.hostGet);
hostRouter.post(hostController.hostPost);