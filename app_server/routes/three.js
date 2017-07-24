var express = require('express');
var router = express.Router();
var ctrlS3 = require('../controllers/sample_3Controllers/test');

/* GET sample 3 home page. */
/* base URL is '/samplethree' */
router.get('/', ctrlS3.sampleHomeController);
router.get('/ladypage', ctrlS3.ladyController);
router.get('/daewoopage', ctrlS3.daewooController);
router.get('/anniepage', ctrlS3.annieController);
router.get('/stephpage', ctrlS3.stephController);
router.get('/luizpage', ctrlS3.luizController);
router.get('/valeriepage', ctrlS3.valerieController);
router.get('/jamblespage', ctrlS3.jamblesController);


module.exports = router;
