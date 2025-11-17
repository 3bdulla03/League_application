const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  coach:{
    type:String,
    required:true,
  },
  players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
})
const Team = mongoose.model('Team',teamSchema)
module.exports=Team

