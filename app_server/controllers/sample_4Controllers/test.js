/* get home page for sample four */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('layout_4', {});
};
/*get login page */
module.exports.loginController = function (req, res, next) {
    res.render('s_4_Login', {});
};
/*get runway page */
module.exports.runwayController = function (req, res, next) {
    res.render('s_4_Run', {});
};
/*get shop edit page  */
module.exports.shopController = function (req, res, next) {
    res.render('anniepage', {});
};
/*get  jambles page */
module.exports.jamblesController = function (req, res, next) {
    res.render('stephpage', {});
};
/*get contact page for luiz */
module.exports.contactController = function (req, res, next) {
    res.render('luizpage', {});
};
/*get stuff page */
module.exports.stuffController = function (req, res, next) {
    res.render('valeriepage', {});
};
