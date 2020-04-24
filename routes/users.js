const express = require("express");
const router = express.Router();
const { getUsersFromApi } = require("../controllers");

router.get("/", getUsersFromApi);
/* router.post("/api/newuser", postNewUser); */

module.exports = router;
