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
  league:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
    }
})
const Team = mongoose.model('Team',teamSchema)
module.exports=Team

