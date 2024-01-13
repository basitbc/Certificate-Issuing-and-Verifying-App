import React, { useContext, useState } from 'react'
import GenerateForm from '../Components/GenerateForm'
import CertificateModal from '../Components/CertificateModal';
import CertificateContext from '../Utils/CertificateContext';

const GenerateCertificate = () => {
  const [showModal, setShowModal] = useState(false);



  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 '>

    <div className="shadow-md p-10">
        <h3 className="text-2xl font-bold mb-6">Generate Certificate</h3>
        <GenerateForm showModal={showModal} setShowModal={setShowModal}  />
        <CertificateModal showModal={showModal} setShowModal={setShowModal}  />
    </div>
    </div>
  )
}

export default GenerateCertificate