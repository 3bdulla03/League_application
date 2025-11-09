const mongoose = require("mongoose")

const leagueSchema = new mongoose.Schema({
  league: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  teams: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team", //  Model still not created for Teams
  },
})

const League = mongoose.model("League", leagueSchema)

module.exports = League
