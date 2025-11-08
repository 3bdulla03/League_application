const passUserToView = (req,res,next)=>{
  res.locals.user = res.session.user ? res.session.user : null
  next()
}
module.exports = passUserToView
