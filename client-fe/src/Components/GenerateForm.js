import React, { useContext, useState } from 'react'
import certificateService from '../Services/certificateService';
import CertificateContext from '../Utils/CertificateContext';


const GenerateForm = ({setShowModal}) => {
  const { setGeneratedCertificate } = useContext(CertificateContext);
  // State to manage form data
  const [formData, setFormData] = useState({
    recipientName: '',
    dateOfIssue: '',
    issuerName: '',
    courseName: '',
  });

   // State to manage error messages for form fields
   const [formErrors, setFormErrors] = useState({
    recipientName: '',
    dateOfIssue: '',
    issuerName: '',
    courseName: '',
    networkError:""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


   // Function to handle certificate generation
   const handleGenerateCertificate = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    if (isFormValid) {
      // Reset the form data
      setFormData({
        recipientName: '',
        dateOfIssue: '',
        issuerName: '',
        courseName: '',
        
      });

      // Reset the form errors
      setFormErrors({
        recipientName: '',
        dateOfIssue: '',
        issuerName: '',
        courseName: '',
        networkError:""
      });

      // Create the certificate object
      const certificate = {
        recipientName: formData?.recipientName,
        dateOfIssue: formData?.dateOfIssue,
        issuerName: formData?.issuerName,
        courseName: formData?.courseName,
      };

    // try catch to handle the API call and it responses and errors if any
    try {

      const certificateData = await certificateService.generateCertificate(certificate);
      
      setGeneratedCertificate(certificateData);
      setShowModal(true)
    } catch (error) {
      // Handling error
      console.error('Error generating certificate:', error);

      // showing Error
        setFormErrors({
        networkError:"Network Error. Please check your network and try again",
        recipientName: "",
        dateOfIssue: '',
        issuerName: '',
        courseName: '',

      });
    }
    } else {
      // Setting error messages for empty fields
      const updatedFormErrors = {};
      for (const key in formData) {
        if (formData[key].trim() === '') {
          updatedFormErrors[key] = 'Please fill out this field.';
        } else {
          updatedFormErrors[key] = '';
        }
      }
      setFormErrors(updatedFormErrors);
    }
  };

  return (

    <form onSubmit={handleGenerateCertificate} className="w-full max-w-lg">
    {/* Form inputs */}
    
    {/* Recipient's Name */}
    <p className="text-red-500 text-xs italic">{formErrors.networkError}</p>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="recipient-name">
          Recipient's Name
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
            formErrors.recipientName ? 'border-red-500' : 'border-gray-200'
          } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
          id="recipient-name"
          type="text"
          placeholder="Recipient's Name"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-xs italic">{formErrors.recipientName}</p>
      </div>

      {/* Date Of Issue */}
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date-of-issue">
          Date Of Issue
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
            formErrors.dateOfIssue ? 'border-red-500' : 'border-gray-200'
          } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id="date-of-issue"
          type="date"
          name="dateOfIssue"
          placeholder="Date Of Issue"
          value={formData.dateOfIssue}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-xs italic">{formErrors.dateOfIssue}</p>
      </div>
    </div>

    {/* Issuer's Name */}
    <div className="flex flex-wrap -mx-3 mb-3">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="issuer-name">
          Issuer's Name
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
            formErrors.issuerName ? 'border-red-500' : 'border-gray-200'
          } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id="issuer-name"
          type="text"
          placeholder="Issuer's Name"
          name="issuerName"
          value={formData.issuerName}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-xs italic">{formErrors.issuerName}</p>
      </div>
    </div>

    {/* Course Name */}
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-name">
          Course Name
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
            formErrors.courseName ? 'border-red-500' : 'border-gray-200'
          } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id="course-name"
          type="text"
          placeholder="Course Name"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-xs italic">{formErrors.courseName}</p>
      </div>
    </div>

    {/* Generate Button */}
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          
        >
          Generate Certificate
        </button>
      </div>
    </div>
  </form>
  )
}

export default GenerateForm