const certificateValidator = require("../validators/certificateValidator");
const validator = require("../middlewares/index");
const certificateController = require('../controllers/certificate')
const express = require("express");
const router = express.Router();


/**
 * @api {post} /certificate/generate-certificate
 * @apiVersion 1.0.0
 * @apiName venerate-certificate
 * @apiGroup Certificate
 *
 */
router.post(
    "/generate-certificate",
    certificateValidator.generateCertificateAPI,
    validator,
    (req, res) => certificateController.generateCertificate(req, res)
  );



/**
 * @api {get} /certificate/verify-certificate 
 * @apiVersion 1.0.0
 * @apiName verify-certificate
 * @apiGroup Certificate
 *
 */
  router.get(
    "/verify-certificate",
    certificateValidator.verifyCertificateAPI,
    validator,
    (req, res) => certificateController.verifyCertificate(req, res)
  );



module.exports = router;