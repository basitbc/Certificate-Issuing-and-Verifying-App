import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CertificateContext from "../Utils/CertificateContext";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CertificateModal({showModal, setShowModal}) {
  const handleClose = () => setShowModal(false);
  const data = React.useContext(CertificateContext);


  const certificate =  data?.generatedCertificate?.data?.certificate;

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{certificate?.courseName} Certificate</h2>
            <p className="text-gray-500">Issued by {certificate?.issuerName}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Date of Issue: {certificate?.dateOfIssue}</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold">This is to certify that</p>
          <h3 className="text-3xl font-bold mb-2">{certificate?.recipientName}</h3>
          <p className="text-lg">has successfully completed the {certificate?.courseName} course</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Certificate ID: {certificate?.certificateId}</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
        </Box>
      </Modal>
    </div>
  );
}