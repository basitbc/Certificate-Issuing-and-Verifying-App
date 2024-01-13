import React, { useContext, useState } from 'react'
import GenerateForm from '../Components/GenerateForm'
import CertificateModal from '../Components/CertificateModal';
import CertificateContext from '../Utils/CertificateContext';
import VerifyForm from '../Components/VerifyForm';

const VerifyCertificate = () => {
  const [showModal, setShowModal] = useState(false);



  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 '>

    <div className="shadow-md p-10">
        <h3 className="text-2xl font-bold mb-6">Verify Certificate</h3>
        <VerifyForm showModal={showModal} setShowModal={setShowModal}  />
        <CertificateModal showModal={showModal} setShowModal={setShowModal}  />
    </div>
    </div>
  )
}

export default VerifyCertificate