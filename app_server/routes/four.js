var express = require('express');
var router = express.Router();
var ctrlS4 = require('../controllers/sample_4Controllers/test');

/* GET sample 4 home page. */
/* base URL is '/samplefour' */
router.get('/', ctrlS4.sampleHomeController);
router.get('/login', ctrlS4.loginController);
router.get('/runway', ctrlS4.runwayController);
router.get('/shop', ctrlS4.shopController);
router.get('/contact', ctrlS4.contactController);
router.get('/jambles', ctrlS4.jamblesController);
router.get('/stuff', ctrlS4.stuffController);


module.exports = router;