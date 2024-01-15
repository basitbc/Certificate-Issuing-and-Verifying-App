import axios from "axios";
import serverConfig from "../Configs/server-config";

const API_URL = `${serverConfig.appServerUrl}/v1/certificate/`;

const generateCertificate = async (certificate) => {
  try {
    const { recipientName, dateOfIssue, issuerName, courseName } = certificate;
    const response = await axios.post(API_URL + "generate-certificate", {
      recipientName,
      dateOfIssue,
      issuerName,
      courseName,
    });

    return { data: response.data, error: null };
  } catch (error) {
    console.error('Error in generateCertificate:', error);
    throw error; // Throw the error to be caught in the component
  }
};

const verifyCertificate = async (certificateId) => {
  try {
    const response = await axios.get(API_URL + "verify-certificate", {
      params: {
        certificateId: certificateId,
      },
    });

    return { data: response.data, error: null };
  } catch (error) {
    console.error('Error in verifyCertificate:', error);
    throw error; // Throw the error to be caught in the component
  }
};

const certificateService = {
  generateCertificate,
  verifyCertificate,
};

export default certificateService;
