const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    clubEmail:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    clubName:{
        type: String,
        required: true
    },
    clubType:{
        type: String,
        required: ture
    },
    clubEvents:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Events"
        }
    ]
})

module.exports = mongoose.model("Clubs",clubSchema);