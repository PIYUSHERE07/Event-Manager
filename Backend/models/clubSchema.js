const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    clubName:{
        type: String,
        required: true
    },
    clubType:{
        type: String,
        required: true,
        ref: "Council"
    },
    clubEvents:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Events"
        }
    ]
})

module.exports = mongoose.model("Clubs",clubSchema);