const express = require("express");
const cryptoController = require("../controllers/cryptp.controller");

const router = express.Router();

router.get("/stats", cryptoController.getLatestCryptoData);

router.get("/deviation", cryptoController.getStandardDeviation);

module.exports = router;
