/*GET user page*/
module.exports.userController = function (req,res,next){
    res.render('yangC', { title: "user test page" });
};
