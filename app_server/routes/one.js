var express = require('express');
var router = express.Router();
var ctrlS1 = require('../controllers/sample_1Controllers/test');

/* GET sample 1 home page. */
/* this is '/sampleone' */
router.get('/', ctrlS1.sampleHomeController);
/* GET sample 1 product page. */
/* this is '/sampleone/product*/
router.get('/product', ctrlS1.productController);

module.exports = router;
