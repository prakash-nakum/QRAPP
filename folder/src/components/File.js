
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import FileUploader from './FileUploader ';
import { saveAs } from 'file-saver';
import DeginFile from '../NewDegin/File/DeginFile';
import qrcode from '../../src/img/qrcode.png'


const qritems = [

    {
        id: 1,
        img: qrcode
    },

    {
        id: 2,
        img: qrcode
    },

    {
        id: 3,
        img: qrcode
    },

    {
        id: 4,
        img: qrcode
    },

    {
        id: 5,
        img: qrcode
    },

    {
        id: 6,
        img: qrcode
    },

    {
        id: 7,
        img: qrcode
    },

    {
        id: 8,
        img: qrcode
    },

    {
        id: 9,
        img: qrcode
    },

    {
        id: 10,
        img: qrcode
    },

    {
        id: 11,
        img: qrcode
    },

    {
        id: 12,
        img: qrcode
    },

]

const FileManagement = ({ qrdata }) => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('http://192.168.192.76:5000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('File upload failed.');
            }
            const data = await response.json();
            setUploadedFile(data.fileURL);
        } catch (error) {
            console.error(error);
        }
    };

    const downloadSVGQRCode = () => {
        if (uploadedFile) {
            const svgString = document.querySelector('.qr-code-wrapper svg').outerHTML;
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            saveAs(blob, 'qrcode.svg');
        }
    };

    const downloadPNGQRCode = () => {
        if (uploadedFile) {
            const svgString = document.querySelector('.qr-code-wrapper svg').outerHTML;
            const img = new Image();
            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                canvas.toBlob(function (blob) {
                    saveAs(blob, 'qrcode.png');
                });
            };
        }
    };

    return (
        <>


            <div className="Appsas container">
                <div className='file-wrappersasnew'>
                    <FileUploader onFileUpload={handleFileUpload} />
                    {/* <div> */}
                    <div className='rul-step-two'>
                        <div className='first-stpedd'>
                            <div className='step-text d-flex'>
                                <div className='steponetext mx-4'>
                                    <p>STEP 2</p>
                                </div>
                                <div className='enter-text'>
                                    <p>Customize your QR code</p>
                                </div>

                            </div>
                            <div className='button-all-eye'>
                                <div className='d-flex'>
                                    <div>
                                        <button type="button" className="btn btn-light">Light</button>
                                    </div>

                                    <div>
                                        <button type="button" className="btn btn-light">Eyes</button>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-light">Logo</button>
                                    </div>

                                    <div>
                                        <button type="button" className="btn btn-light">Color</button>
                                    </div>

                                    <div>
                                        <button type="button" className="btn btn-light">Frame</button>
                                    </div>

                                    <div>
                                        <button type="button" className="btn btn-light">Templates</button>
                                    </div>
                                </div>
                            </div>


                            <div className='GegerateQRCode d-flex'>
                                <div className='d-flex suggetion '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                    </svg>
                                    <p>You can customize these templates later to match your brand</p>
                                </div>
                            </div>


                            <div className="qredit-main text-center">
                                <div className="row">
                                    <div className="col-md-8 qrimg">
                                        <div className='row'>

                                            {
                                                qritems && qritems.length > 0 && qritems.map((item, index) => {
                                                    return (
                                                        <div key={index} className="col-md-2 qrimg">
                                                            <img width='80px' className='simg-flude' src={item.img} alt={`name${qrcode}`} />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="col-md-4 download-qr">
                                        {uploadedFile && (
                                            <div className="qr-code-wrapper">
                                                <h2>Generated QR Code</h2>
                                                <QRCode value={uploadedFile} />
                                                <p>Scan the QR code to view the uploaded file.</p>
                                                <button className='btn btn-outline-success' onClick={downloadSVGQRCode}>Download SVG </button>
                                                <button className='btn btn-outline-success' onClick={downloadPNGQRCode}>Download PNG </button>
                                            </div>
                                        )}
                                        {/* {qrdata} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FileManagement;
