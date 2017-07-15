var express = require('express');
var router = express.Router();
var ctrlTest = require('../controllers/test');


/* GET test page. */
router.get('/', ctrlTest.homeController);

/* GET sample 1 home page. */
//router.get('/sampleone', ctrlS1.sampleHomeController);

/* GET sample 2 home page. */
//router.get('/sampletwo', ctrlS2.sampleHomeController);

/* GET sample 3 home page. */
//router.get('/samplethree', ctrlS3.sampleHomeController);


module.exports = router;