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
  bgcolor: '#f8eae1', 
  border: '2px solid #5d4c7a',
  boxShadow: 24,
  p: 4,
};

export default function CertificateModal({ showModal, setShowModal }) {
  const handleClose = () => setShowModal(false);
  const data = React.useContext(CertificateContext);

  const certificate = data?.generatedCertificate?.data?.certificate;

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg shadow-md text-white">
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">Certificate of Completion</h2>
                <p className="text-lg">Issued by <span className="font-semibold">{certificate?.issuerName}</span></p>
              </div>
              <div className="text-right">
                <p className="text-lg">Date of Issue: <span className="font-semibold">{certificate?.dateOfIssue}</span></p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold">This is to certify that</p>
              <h3 className="text-4xl font-bold mb-2">{certificate?.recipientName}</h3>
              <p className="text-lg">has successfully completed the course in</p>
              <p className="text-2xl font-semibold">{certificate?.courseName}</p>
            </div>
            <div className="text-center">
              <p className="text-base">Certificate ID: <span className="font-semibold">{certificate?.certificateId}</span></p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-gray-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-700 transition duration-150 ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-0 active:bg-gray-500"
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
