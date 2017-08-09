/**
 * Created by debrachong on 7/14/17.
 */
/* GET sample 1 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('smile', { title: 'sample oiseau lumineux' });
};
