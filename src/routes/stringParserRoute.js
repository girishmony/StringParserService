let express = require('express');
let stringParserController = require("../controller/StringParserController");
let router = express.Router();

router.post('/v1/parse', stringParserController.v1Parser)

router.post('/v2/parse', stringParserController.v2Parser)

module.exports = router;