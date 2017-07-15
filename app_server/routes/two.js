var express = require('express');
var router = express.Router();
var ctrlS2 = require('../controllers/sample_2Controllers/test');


/* GET sample 2 home page. */
/* base URL is '/sampletwo' */
router.get('/', ctrlS2.sampleHomeController);


module.exports = router;
