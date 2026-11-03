const {check,validationResult} = require('express-validator')
const Councils = require('../models/councilSchema')

exports.getSession = (req,res,next)=>{
    return res.status(200).json({
        success:true,
        councilId : req.session.councilId,
        councilCategory : req.session.councilCategory
    })
}
