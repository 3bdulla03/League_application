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
  // teams: {         //  Model still not created for Teams
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Team",
  // },
})

const League = mongoose.model("League", leagueSchema)

module.exports = League
