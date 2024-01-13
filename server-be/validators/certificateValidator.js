const { check } = require("express-validator");

const generateCertificateAPI = [
  check("recipientName").exists().withMessage("Recipient's Name is required"),
  check("courseName").exists().withMessage("Course Name is required"),
  check("issuerName").exists().withMessage("Issuer's Name is required"),
  check("dateOfIssue").exists().withMessage("Date of Issue is required"),
];

const verifyCertificateAPI =[
    check("certificateId").exists().withMessage("Certificate Id is required"),
]
module.exports = {
  generateCertificateAPI,
  verifyCertificateAPI
};