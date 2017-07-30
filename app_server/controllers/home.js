/* GET home page */
/*module.exports.homeController = function (req, res, next) {
    res.render('index', { title: 'yang sample home page' });
};*/
module.exports.styleController = function (req, res, next) {
    res.render('clean', { });
};
/*module.exports.homeController = function (req, res, next) {
    res.render('homeFluff', { });
};*/
module.exports.homeController = function (req, res, next) {
    res.render('yangDeux', { });
};
module.exports.sampleHomeController = function (req, res, next) {
    res.render('sHomeFluff', { });
};