exports.index = function(req,res){
   res.render('index',{
      user:req.session.user
   })
}
