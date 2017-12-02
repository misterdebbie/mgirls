var express = require('express');
var router = express.Router();
var ctrlS6 = require('../controllers/sample_6Controllers/test');

/* GET sample 6 home page. */
/* base URL is '/samplesix' */
router.get('/', ctrlS6.sampleHomeController);
/*router.get('/login', ctrlS4.loginController);
router.get('/runway', ctrlS4.runwayController);
router.get('/shop', ctrlS4.shopController);
router.get('/contact', ctrlS4.contactController);
router.get('/jambles', ctrlS4.jamblesController);*/


module.exports = router;
