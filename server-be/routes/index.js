const express = require("express");
const router = express.Router();

let certificate= require("./certificate");

router.use("/v1/certificate", certificate);


module.exports = router;
