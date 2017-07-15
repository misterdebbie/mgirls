/* GET home page */
module.exports.homeController = function (req, res, next) {
    res.render('test', { title: 'test page' });
};