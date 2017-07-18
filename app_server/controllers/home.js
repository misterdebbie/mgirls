/* GET home page */
/*module.exports.homeController = function (req, res, next) {
    res.render('index', { title: 'yang sample home page' });
};*/
module.exports.homeController = function (req, res, next) {
    res.render('homeFluff', { });
};
module.exports.sampleHomeController = function (req, res, next) {
    res.render('sHomeFluff', { });
};