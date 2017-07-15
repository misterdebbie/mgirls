/*GET user page*/
module.exports.userController = function (req,res,next){
    res.render('index', { title: "user test page" });
};
