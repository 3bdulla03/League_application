const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    image: {
        type: String,
        required: true
    },
    goals: {
        type: Number,
        required: false
    },
})

const Player = mongoose.model("Player", playerSchema)
module.exports = Player