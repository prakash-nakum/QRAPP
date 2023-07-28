

// import React from 'react';
// import QRCode from 'react-qr-code';
// import { saveAs } from 'file-saver';


// const QRCodeGenerator = ({ fileData }) => {

// const downloadSVG = () => {
//     const svgElement = document.querySelector('.qrcodepdf svg');
//     const svgData = new XMLSerializer().serializeToString(svgElement);
//     const blob = new Blob([svgData], { type: 'image/svg+xml' });
//     saveAs(blob, 'qr_code.svg');
// };

// const downloadPNG = () => {
//     const svgElement = document.querySelector('.qrcodepdf svg');
//     const svgData = new XMLSerializer().serializeToString(svgElement);
//     const blob = new Blob([svgData], { type: 'image/svg+xml' });
//     const DOMURL = window.URL || window.webkitURL || window;
//     const url = DOMURL.createObjectURL(blob);

//     const img = new Image();
//     img.onload = () => {
//         const canvas = document.createElement('canvas');
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext('2d');
//         ctx.drawImage(img, 0, 0);

//         DOMURL.revokeObjectURL(url);
//         canvas.toBlob((pngBlob) => {
//             saveAs(pngBlob, 'qr_code.png');
//         });
//     };
//     img.src = url;
// };


//     return (
//         <div className='file-others'>
//             <div className='container'>
//                 <h2>Your QR Code</h2>
//                 {fileData ? (
//                     <>
//                         <p>Uploaded File: {fileData.name}</p>
//                         {/* <QRCode value={fileData.name} /> */}

//                         {fileData.name ?
// <span className='qrcodepdf'>
//     {fileData.name && <QRCode className='dasdddad' value={fileData.name} />}
//     <button className='btn btn-outline-success' onClick={downloadSVG}>Download SVG</button>
//     <button className='btn btn-outline-success' onClick={downloadPNG}>Download PNG</button>
// </span>
//                             : ''}
//                     </>
//                 ) : (
//                     <p>No file uploaded yet.</p>
//                 )}
//             </div>
//         </div>
//     );


// };

// export default QRCodeGenerator;







// import React from 'react';
// import QRCode from 'react-qr-code';
// import { saveAs } from 'file-saver';

// const QRCodeGenerator = ({ uploadedFiles }) => {




//     // const downloadSVG = () => {
//     //     const svgElement = document.querySelector('.qrcodepdf svg');
//     //     const svgData = new XMLSerializer().serializeToString(svgElement);
//     //     const blob = new Blob([svgData], { type: 'image/svg+xml' });
//     //     saveAs(blob, 'qr_code.svg');
//     // };

//     // const downloadPNG = () => {
//     //     const svgElement = document.querySelector('.qrcodepdf svg');
//     //     const svgData = new XMLSerializer().serializeToString(svgElement);
//     //     const blob = new Blob([svgData], { type: 'image/svg+xml' });
//     //     const DOMURL = window.URL || window.webkitURL || window;
//     //     const url = DOMURL.createObjectURL(blob);

//     //     const img = new Image();
//     //     img.onload = () => {
//     //         const canvas = document.createElement('canvas');
//     //         canvas.width = img.width;
//     //         canvas.height = img.height;
//     //         const ctx = canvas.getContext('2d');
//     //         ctx.drawImage(img, 0, 0);

//     //         DOMURL.revokeObjectURL(url);
//     //         canvas.toBlob((pngBlob) => {
//     //             saveAs(pngBlob, 'qr_code.png');
//     //         });
//     //     };
//     //     img.src = url;
//     // }
//     return (
//         <div className='file-others'>
//             <div className='container'>
//                 <h2>Your QR Codes</h2>
//                 {uploadedFiles && uploadedFiles.length > 0 ? (
//                     uploadedFiles.map((file, index) => (
//                         <div key={index} className='file-info'>
//                             <p>Uploaded File: {file.name}</p>
//                             {/* {<QRCode value={file.data} />} */}
//                             <span className='qrcodepdf'>
//                                 {<QRCode value={file.data} size={5000} />}
//                                 {/* <button className='btn btn-outline-success' onClick={downloadSVG}>Download SVG</button>
//                                 <button className='btn btn-outline-success' onClick={downloadPNG}>Download PNG</button> */}
//                             </span>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No files uploaded yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default QRCodeGenerator;













// import React, { useEffect, useState } from 'react';
// import QRCode from 'react-qr-code';

// const QRCodeGenerator = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 // Fetch the list of uploaded files from the server
//                 const response = await fetch('/getUploadedFiles');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch uploaded files.');
//                 }
//                 const data = await response.json();
//                 setUploadedFiles(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     return (
//         <div className='file-others'>
//             <div className='container'>
//                 <h2>Your QR Codes</h2>
//                 {uploadedFiles.length > 0 ? (
//                     uploadedFiles.map((file, index) => (
//                         <div key={index} className='file-info'>
//                             <p>Uploaded File: {file.name}</p>
//                             <QRCode value={file.url} />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No files uploaded yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default QRCodeGenerator;





// import React, { useEffect, useState } from 'react';
// import QRCode from 'react-qr-code';

// const QRCodeGenerator = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 const response = await fetch('/getUploadedFiles');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch uploaded files.');
//                 }
//                 const data = await response.json();
//                 setUploadedFiles(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     return (
//         <div className='file-others'>
//             <div className='container'>
//                 <h2>Your QR Codes</h2>
//                 {uploadedFiles.length > 0 ? (
//                     uploadedFiles.map((file, index) => (
//                         <div key={index} className='file-info'>
//                             <p>Uploaded File: {file.name}</p>
//                             <QRCode value={file.url} />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No files uploaded yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default QRCodeGenerator;
