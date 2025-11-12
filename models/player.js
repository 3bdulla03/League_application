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
        enum:['Goalkeeper', 'Defender', 'Midfielder', 'Striker']
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    image: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false,
        min: [0, 'Rating must be at least 0'],
        max: [10, 'Rating cannot exceed 10']
    },
})

const Player = mongoose.model("Player", playerSchema)
module.exports = Player
