import React, { useContext, useState } from 'react';
import certificateService from '../Services/certificateService';
import CertificateContext from '../Utils/CertificateContext';

const VerifyForm = ({ setShowModal }) => {
  const { setGeneratedCertificate } = useContext(CertificateContext);

  // State to manage the Certificate ID
  const [certificateId, setCertificateId] = useState('');

  const [networkError, setNetworkError] = useState("")

  // State to manage the error message for the Certificate ID
  const [certificateIdError, setCertificateIdError] = useState('');

  // Function to handle Certificate ID input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setCertificateId(value);
  };

  // Function to handle certificate verification
  const handleVerifyCertificate = async (e) => {
    e.preventDefault()
    // Check if the Certificate ID is not empty
    if (certificateId.trim() !== '') {
      // Reset the Certificate ID error
      setCertificateIdError('');


      // Handle the verification
      try {
const isVerified = await certificateService.verifyCertificate(certificateId)
if(isVerified?.data?.verified){
  setShowModal(true);
  setGeneratedCertificate(isVerified);
  setCertificateId('');
}
else{
  setCertificateIdError('Certificate ID not valid');
}
      } catch{
setNetworkError("Please check your network and try again")
      }
    } else {
      // Set error message for an empty Certificate ID field
      setCertificateIdError('Please fill out this field.');
    }
  };

  return (
    <form 
    onSubmit={handleVerifyCertificate}
    >
      {/* Certificate ID */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="certificate-id"
          >
            Certificate ID
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              certificateIdError ? 'border-red-500' : 'border-gray-200'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="certificate-id"
            type="text"
            placeholder="Certificate ID"
            value={certificateId}
            onChange={handleInputChange}
          />
          <p className="text-red-500 text-xs italic">{certificateIdError}</p>
          <p className="text-red-500 text-xs italic">{networkError}</p>
        </div>
      </div>

      {/* Verify Button */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Verify Certificate
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyForm;
