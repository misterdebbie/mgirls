/* GET sample 2 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('home2', { title: 'sample 2 test page' });
};