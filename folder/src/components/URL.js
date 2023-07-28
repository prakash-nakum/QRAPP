


import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { saveAs } from 'file-saver';

const isValidURL = (url) => {
    const pattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/, 'i');
    return pattern.test(url);
};

const URL = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [qrCodeContent, setQRCodeContent] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInputUrl(event.target.value);
        setError('');
    };

    const generateQRCode = () => {
        if (!inputUrl) {
            setError('Please enter a URL.');
        } else if (inputUrl.length < 3) {
            setError('URL must be at least 3 characters long.');
        } else if (!isValidURL(inputUrl)) {
            setError('Invalid URL. Please enter a valid URL starting with http:// or https://');
        } else {
            setQRCodeContent(inputUrl);
            setError('');
        }
    };

    const downloadSVG = () => {
        const svgElement = document.querySelector('.qrcodepdf svg');
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        saveAs(blob, 'qr_code.svg');
    };

    const downloadPNG = () => {
        const svgElement = document.querySelector('.qrcodepdf svg');
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const DOMURL = window.URL || window.webkitURL || window;
        const url = DOMURL.createObjectURL(blob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            DOMURL.revokeObjectURL(url);
            canvas.toBlob((pngBlob) => {
                saveAs(pngBlob, 'qr_code.png');
            });
        };
        img.src = url;
    };

    return (
        <div className="container">
            <div className='url-wrapper border border-secondary '>
                <h2>Generate QR Code with URL Link</h2>
                <input
                    type="text"
                    className="form-control w-50"
                    value={inputUrl}
                    onChange={handleInputChange}
                    placeholder="Enter URL link"
                />
                {error && <p className="error-message">{error}</p>}
                {
                    qrCodeContent === "" ? <button className='btn btn-outline-success' onClick={generateQRCode}>Generate QR Code</button> :
                        <span className='qrcodepdf'>
                            {qrCodeContent && <QRCode className='dasdddad' width={2500} value={qrCodeContent} />}
                            <button className='btn btn-outline-success' onClick={downloadSVG}>Download SVG</button>
                            <button className='btn btn-outline-success' onClick={downloadPNG}>Download PNG</button>
                        </span>
                }
            </div>
        </div>
    );
};

export default URL;
