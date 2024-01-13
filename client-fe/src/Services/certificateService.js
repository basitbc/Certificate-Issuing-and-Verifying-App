import axios from "axios";
import serverConfig from "../Configs/server-config"

const API_URL = `${serverConfig.appServerUrl}/v1/certificate/`;

const generateCertificate = (
  certificate
) => {
  const {recipientName,dateOfIssue,issuerName,courseName} = certificate
  return axios
    .post(API_URL + "generate-certificate", {
      recipientName,
      dateOfIssue,
      issuerName,
      courseName
    })
    .then((response) => {
      return { data: response.data, error: null };
    })
    .catch((err) => {


      return {
        error: err,
      };
    });
};

const verifyCertificate = (
  certificateId
) => {
  return axios
    .get(API_URL + "verify-certificate", {
      params: {
        certificateId: certificateId,
      },
    })
    .then((response) => {
      return { data: response.data, error: null };
    })
    .catch((err) => {
      return {
        error: err,
      };
    });
};



const certificateService = {
  generateCertificate,verifyCertificate
};

export default certificateService;
