/**
 * Created by debrachong on 7/14/17.
 */
/* GET sample 1 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('smile', { title: 'sample oiseau lumineux' });
};
/* GET sample 1 product page */
module.exports.productController = function (req, res, next) {
    res.render('home1', { title: 'product test page' });
};