

import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import FileUploader from './FileUploader ';
import { saveAs } from 'file-saver';
import DeginFile from '../NewDegin/File/DeginFile';

const FileManagement = () => {
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
            // Create an image from the QR code SVG data
            const svgString = document.querySelector('.qr-code-wrapper svg').outerHTML;
            const img = new Image();
            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));

            img.onload = function () {
                // Create a canvas and draw the image on it
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);

                // Convert the canvas to a PNG blob and save it
                canvas.toBlob(function (blob) {
                    saveAs(blob, 'qrcode.png');
                });
            };
        }
    };

    return (
        <div className="App container">
            <div className="file-wrappernew border border-secondary ">
                <h1>QR Code Generator</h1>
                <DeginFile onFileUpload={handleFileUpload} />
                {uploadedFile && (
                    <div className="qr-code-wrapper">
                        <h2>Generated QR Code</h2>
                        <QRCode value={uploadedFile} />
                        <p>Scan the QR code to view the uploaded file.</p>
                        <button className='btn btn-outline-success' onClick={downloadSVGQRCode}>Download SVG </button>
                        <button className='btn btn-outline-success' onClick={downloadPNGQRCode}>Download PNG </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default FileManagement;
