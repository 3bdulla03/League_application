const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.on("connected", () => {
  console.log(`connected to database ${mongoose.connection.name}`)
})

module.exports = mongoose
