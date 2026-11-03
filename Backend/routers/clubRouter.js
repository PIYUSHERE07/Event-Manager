const express = require('express')
const clubRouter = express.Router();
const councilController = require('../controller/councilController');

clubRouter.get("/",councilController.clubGet);
clubRouter.post("/add-activity",councilController.addActivityPost);
clubRouter.delete("/delete-event/:activityId",councilController.deleteActivity);
clubRouter.put("/update-event/:activityId",councilController.updateActivity);

exports.clubRouter = clubRouter;