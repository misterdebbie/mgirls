/* GET sample 3 home page */
/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('home3', { title: 'sample 3 test page'});
};*/

/* get home page for all djebbie picks */
/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('djebbiepickshome', {});
};*/
/* get home page for all djebbie picks */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('dj', {});
};
/*get home page for lady */
module.exports.ladyController = function (req, res, next) {
    res.render('ladyplay', {});
};
/*get home page for daewoo */
module.exports.daewooController = function (req, res, next) {
    res.render('daewoopage', {});
};
/*get home page for annie */
module.exports.annieController = function (req, res, next) {
    res.render('anniepage', {});
};
/*get home page for steph */
module.exports.stephController = function (req, res, next) {
    res.render('stephpage', {});
};
/*get home page for luiz */
module.exports.luizController = function (req, res, next) {
    res.render('luizplay', {});
};
/*get home page for valerie */
module.exports.valerieController = function (req, res, next) {
    res.render('valeriepage', {});
};
/*get home page for jambles */
module.exports.jamblesController = function (req, res, next) {
    res.render('jamblespage', {});
};