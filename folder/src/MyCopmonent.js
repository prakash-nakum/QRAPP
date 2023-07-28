

// import React, { useState } from 'react';
// import QRCode from 'react-qr-code';

// const QRCodeGenerator = () => {
//     const [url, setUrl] = useState('');
//     const [qrCodeDataUrl, setQRCodeDataUrl] = useState('');

//     const generateQRCode = ({ content }) => {
//         fetch(`/generate-qr-code?url=${encodeURIComponent(url)}`)
//             .then((response) => response.text())
//             .then((dataUrl) => {
//                 setQRCodeDataUrl(dataUrl);
//             })
//             .catch((error) => {
//                 console.error('Error generating QR code:', error);
//             });
//     };

//     return (
//         <div>
//             <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
//             <button onClick={generateQRCode}>Generate QR Code</button>
//             {qrCodeDataUrl && <QRCode value={content} />}
//         </div>
//     );
// };

// export default QRCodeGenerator;




import './App.css';
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = ({ content }) => {
    return <QRCode value={content} />;
};

const MyComponents = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [qrCodeContent, setQRCodeContent] = useState('');

    const handleInputChange = (event) => {
        setInputUrl(event.target.value);
    };

    const generateQRCode = () => {
        setQRCodeContent(inputUrl);
    };

    return (
        <div className='dsadas container'>
            <h1>QR Code Generator</h1>
            <input type="text" value={inputUrl} onChange={handleInputChange} />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCodeContent && <QRCodeGenerator content={qrCodeContent} />}
        </div>
    );
};

export default MyComponents;

