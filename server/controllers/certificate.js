const dataFilePath = 'certificates.json';
const fs = require('fs');

// Load existing data from the file
let certificates = loadCertificates();

// Function to load certificates from the file
function loadCertificates() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data) || []; // If the file is empty or not valid JSON, return an empty array
  } catch (error) {
    return []; // If there's an error reading or parsing the file, return an empty array
  }
}

// Function to save certificates to the file
function saveCertificates() {
  fs.writeFileSync(dataFilePath, JSON.stringify(certificates), 'utf8');
}

// Function to generate a unique ID for a certificate
function generateUniqueId() {
  const timestamp = new Date().getTime().toString(16); // Convert timestamp to hexadecimal
  const randomPart = Math.random().toString(16).substr(2, 6); // Random 6-character hexadecimal
  return `${timestamp}-${randomPart}`;
}

// Middleware to generate a new certificate
const generateCertificate = async (req, res, next) => {
  try {
    const { recipientName, courseName, issuerName, dateOfIssue } = req.body;

    // Generate a unique certificate ID
    const certificateId = generateUniqueId();

    // Create the certificate object
    const certificate = {
      certificateId,
      recipientName,
      courseName,
      issuerName,
      dateOfIssue,
    };

    // Store the certificate in the in-memory data storage
    certificates.push(certificate);

    // Save certificates to the file
    saveCertificates();

    res.status(201).json({ message: 'Certificate generated successfully', certificate });
  } catch (err) {
    console.log("err", err);
    return res.json(err);
  }
};

// Middleware to verify a certificate
const verifyCertificate = async (req, res, next) => {
  try {
    const { certificateId } = req.query;
    // Find the certificate in the in-memory data storage
    const foundCertificate = certificates.find(cert => cert.certificateId === certificateId);

    if (foundCertificate) {
      res.status(200).json({ verified: true, message: 'Certificate found', certificate: foundCertificate });
    } else {
      res.status(200).json({ verified: false, message: 'Certificate not found' });
    }
  } catch (err) {
    console.log("err", err);
    return res.json(err);
  }
};

module.exports = {
  generateCertificate,
  verifyCertificate
};
