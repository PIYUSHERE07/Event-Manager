const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName :{
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
    }
})

module.exports = mongoose.model('Events',eventSchema);