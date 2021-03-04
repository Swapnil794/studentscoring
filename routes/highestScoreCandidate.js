var express = require("express");
var router = express.Router();
const {check} = require('express-validator');
const {highestScore} = require("../controllers/highestScorCandidate")

router.get('/highestmarks',highestScore);

module.exports = router;