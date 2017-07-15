/* GET about page */
module.exports.aboutController = function (req, res, next) {
    res.render('about', {title: 'debbie chong!'});
};