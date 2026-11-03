const {check,validationResult} = require('express-validator')
const Councils = require('../models/councilSchema')
const Activity = require('../models/activitySchema')

exports.getSession = (req,res,next)=>{
    return res.status(200).json({
        success:true,
        councilId : req.session.councilId,
        councilCategory : req.session.councilCategory
    })
}

exports.getAllEvent = (req,res,next)=>{
    Activity.find().then((allActivities)=>{
        return res.status(200).json({
            success: true,
            allActivities 
        })
    })
}