var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
//var ctrlS1 = require('../controllers/sample_1Controllers/test');
//var ctrlS2 = require('../controllers/sample_2Controllers/test');
//var ctrlS3 = require('../controllers/sample_3Controllers/test');

/* GET style home page. */
router.get('/', ctrlHome.styleController);

/* GET fall 17 page. */
router.get('/fall17', ctrlHome.fallController);

/* GET yang home page. */
router.get('/yang', ctrlHome.homeController);

/* GET sample home page. */
router.get('/hello', ctrlHome.sampleHomeController);

/* GET shhh page. */
router.get('/shhh', ctrlHome.shhhController);


/* GET sample 1 home page. */
//router.get('/sampleone', ctrlS1.sampleHomeController);

/* GET sample 2 home page. */
//router.get('/sampletwo', ctrlS2.sampleHomeController);

/* GET sample 3 home page. */
//router.get('/samplethree', ctrlS3.sampleHomeController);

/* GET about page. */
router.get('/about', ctrlAbout.aboutController);

module.exports = router;
