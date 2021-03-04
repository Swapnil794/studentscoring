const express = require("express");
const router = express.Router();
const {assignMarks} = require('../controllers/test_score')

// assigned score to candidate based on test
router.post('/assignmarks',assignMarks);
module.exports = router;