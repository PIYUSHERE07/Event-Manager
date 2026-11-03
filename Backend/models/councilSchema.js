const mongoose = require('mongoose')

const councilSchema = mongoose.Schema({
    councilEmail:{
        type: String,
        required: true,
        unique: true
    },
    councilPassword:{
        type: String,
        required: true
    },
    councilName:{
        type: String,
        required: true
    },
    councilCategory:{
        type: String,
        required: true
    },
    councilActivity:[
        {
            type: String,
            ref: "Activity"
        }
    ]
})

module.exports = mongoose.model("Councils",councilSchema);