const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activityName :{
        type : String,
        required : true
    },
    startDate :{
        type: Date,
        required: true
    },
    startTime :{
        type:String,
        required: true
    },
    endDate :{
        type:Date,
        required: true
    },
    endTime :{
        type:String,
        required: true
    },
    activityDescription:{
        type:String
    },
    activityLink:{
        type:String
    }
})

module.exports = mongoose.model('Activity',activitySchema);