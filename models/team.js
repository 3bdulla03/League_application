const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  coach_name:{
    type:String,
    required:true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
})
const team = mongoose.model('team',teamSchema)
module.exports=team
