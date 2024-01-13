import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import GenerateCertificate from './Pages/generateCertificate';
import CertificateContext from './Utils/CertificateContext';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import VerifyCertificate from './Pages/verifyCertificate';
import NotFound from './Pages/notFound';

function App() {
  const [generatedCertificate, setGeneratedCertificate] = useState()
  return (
    <CertificateContext.Provider value={{generatedCertificate:generatedCertificate, setGeneratedCertificate}}>
    <Router>
    <div className="App">
  <Header/>
  <Routes>
  <Route path="/" element={<GenerateCertificate/>} />
  <Route path="/verify-certificate" element={<VerifyCertificate/>} />
  <Route path="/*" element={<NotFound/>} />
  </Routes>
    </div>
    </Router>
    </CertificateContext.Provider>
  );
}

export default App;
