/* GET sample 3 home page */
/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('home3', { title: 'sample 3 test page'});
};*/

/* get home page for all djebbie picks */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('djebbiepickshome', {});
};
/*get home page for lady */
module.exports.ladyController = function (req, res, next) {
    res.render('ladypage', {});
};