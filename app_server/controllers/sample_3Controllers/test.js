/* GET sample 3 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('home3', { title: 'sample 3 test page'});
};