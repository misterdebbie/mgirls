var express = require('express');
var router = express.Router();
var ctrlS3 = require('../controllers/sample_3Controllers/test');

/* GET sample 3 home page. */
/* base URL is '/samplethree' */
router.get('/', ctrlS3.sampleHomeController);
router.get('/ladypage', ctrlS3.ladyController);

module.exports = router;
