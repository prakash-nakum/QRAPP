
// import React, { useState } from 'react';
// import QRCode from 'react-qr-code';

// const QRCodeGenerator = ({ content }) => {
//   return <QRCode value={content} />;
// };

// const App = () => {
//   const [inputUrl, setInputUrl] = useState('');
//   const [qrCodeContent, setQRCodeContent] = useState('');

//   const handleInputChange = (event) => {
//     setInputUrl(event.target.value);
//   };

//   const generateQRCode = () => {
//     setQRCodeContent(inputUrl);
//   };

//   return (
//     <div className='dsadas'>
//       <h1>QR Code Generator</h1>
//       <input type="text" value={inputUrl} onChange={handleInputChange} />
//       <button onClick={generateQRCode}>Generate QR Code</button>
//       {qrCodeContent && <QRCodeGenerator content={qrCodeContent} />}
//     </div>
//   );
// };

// export default App;


import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import VCard from './components/vCard';
import DeginURL from './NewDegin/DeginURL';
import DeginFile from './NewDegin/File/DeginFile';
import DeginHeader from './NewDegin/DeginHeader';
import Registration from './NewDegin/auth/registration';
import Login from './NewDegin/auth/login';
import OTPVerificationModal from './NewDegin/auth/OTPVerificationModal';
import Home from './NewDegin/home/Home';
import Logout from './NewDegin/auth/Logout';
import Forgetpass from './NewDegin/auth/Forgetpass';
import FileManagement from './components/File';
import SocualMedia from './NewDegin/SocialMedia/SocualMedia';
import ContentPage from './NewDegin/SocialMedia/ContentPage ';
import MobileView from './NewDegin/SocialMedia/MobileView';




function App() {

  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleRegistrationSuccess = () => {
    setShowOTPModal(true);
  };




  return (
    <>
      {/* <MyDropzone /> */}
      <DeginHeader />

      <div className='app-main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file" element={<FileManagement />} />
          <Route path="/type:url" element={<DeginURL />} />
          <Route path="/yourqr" element={<MobileView />} />
          <Route path="/forgotpass" element={< Forgetpass />} />
          <Route path="/content-page" component={ContentPage} />

          {/* <Route path="/display-social-media" component={DisplaySocialMedia} /> */}


          {/* <Route path="/file" element={<DeginFile />} /> */}
          <Route path="/vCard" element={<VCard />} />
          <Route path="/social-media" element={<SocualMedia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration onRegisterSuccess={handleRegistrationSuccess} />} />
          {showOTPModal && <OTPVerificationModal onClose={() => setShowOTPModal(false)} />}
        </Routes>

      </div>

    </>

  )
}

export default App
