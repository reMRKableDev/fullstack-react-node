const express = require("express");
const router = express.Router();
const { getDefaultLandingPage } = require("../controllers");

router.get("/", getDefaultLandingPage);

module.exports = router;
