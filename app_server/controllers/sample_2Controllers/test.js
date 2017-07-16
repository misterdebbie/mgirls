/* GET sample 2 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('samplenav', { title: 'sample 2 test page' });
};