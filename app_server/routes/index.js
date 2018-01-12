var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
//var ctrlS1 = require('../controllers/sample_1Controllers/test');
//var ctrlS2 = require('../controllers/sample_2Controllers/test');
//var ctrlS3 = require('../controllers/sample_3Controllers/test');

/* GET style home page. */
//router.get('/', ctrlHome.thoughtsController);
/* GET style home page. */
router.get('/', ctrlHome.styleController);
/* GET style home page. */
router.get('/jcrew', ctrlHome.jcrewController);

/* GET fall 17 page. */
router.get('/fall17', ctrlHome.fallController);

/* GET spring 18 page. */
router.get('/spring18', ctrlHome.springController);

/* GET trend page. */
router.get('/trends', ctrlHome.trendController);

/* GET bag page. */
router.get('/bags', ctrlHome.bagController);

/* GET shoe page. */
router.get('/shoes', ctrlHome.shoeController);

/* GET jewels page. */
router.get('/jewels', ctrlHome.jewelController);

/* GET jambles page. */
router.get('/jjjambles', ctrlHome.jjjamblesController);

/* GET mens 16 page. */
router.get('/mens16', ctrlHome.mensController);

/* GET yang home page. */
router.get('/yang', ctrlHome.homeController);

/* GET sample home page. */
//router.get('/hello', ctrlHome.sampleHomeController);

/* GET shhh page. */
router.get('/shhh', ctrlHome.shhhController);

/* GET account page. */
router.get('/accounts', ctrlHome.accountController);
/* GET gift page page. */
router.get('/giftlist', ctrlHome.giftController);

/* GET all together page. */
router.get('/alltogether', ctrlHome.allController);
/* GET acne page. */
router.get('/acne', ctrlHome.acneController);
/* GET barneys page. */
router.get('/barneys', ctrlHome.barneysController);
/* GET work page. */
router.get('/eweiss', ctrlHome.workController);
/* GET joy page. */
router.get('/joy', ctrlHome.joyController);


/* GET sample 1 home page. */
//router.get('/sampleone', ctrlS1.sampleHomeController);

/* GET sample 2 home page. */
//router.get('/sampletwo', ctrlS2.sampleHomeController);

/* GET sample 3 home page. */
//router.get('/samplethree', ctrlS3.sampleHomeController);

/* GET about page. */
router.get('/about', ctrlAbout.aboutController);

module.exports = router;
