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
    res.render('jamblespage', {});
};
/*get  jambles page */
module.exports.jamblesController = function (req, res, next) {
    res.render('jamblespage', {});
};
/*get contact page  */
module.exports.contactController = function (req, res, next) {
    res.render('jamblespage', {});
};

