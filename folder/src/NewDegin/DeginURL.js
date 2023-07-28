import React, { useState } from 'react'
import CustomizeQR from './CustomizeQR'
import { saveAs } from 'file-saver';
import QRCode from 'react-qr-code';
import arityqr from '../../src/img/arityqr.png'


const isValidURL = (url) => {
    const pattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/, 'i');
    return pattern.test(url);
};


const Degin = () => {
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
        <div>
            <div className='url-wrapper'>
                <div className='container'>
                    <div className='rul-step-one'>
                        <div className='first-stpedd'>
                            <div className='step-text d-flex'>
                                <div className='steponetext mx-4'>
                                    <p>STEP 1</p>
                                </div>
                                <div className='enter-text'>
                                    <p>Enter the URL</p>
                                </div>
                            </div>
                            <div className='inputed-feilds'>
                                <input
                                    type="text"
                                    className="form-control w-50"
                                    value={inputUrl}
                                    onChange={handleInputChange}
                                    placeholder="Enter URL link"
                                />
                                {error && <p className="error-message">{error}</p>}
                            </div>



                            <div className='d-flex qr-burron-stted'>
                                <div>
                                    <label className='border border-success'>
                                        <input type="radio" id="html" name="fav_language" value="HTML" defaultChecked />
                                        Static QR
                                    </label>
                                </div>
                                <div>
                                    <label className='border border-success'>
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        Dynamic QR
                                    </label>
                                </div>
                            </div>
                            <div className='GegerateQRCode d-flex'>
                                <div>
                                    <button className='btn btn-outline-success' onClick={generateQRCode}>Generate QR Code</button>
                                </div>
                                <div className='d-flex suggetion '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                    </svg>
                                    <p>We recommend creating a dynamic QR code if you want to track performance and edit data even after printing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CustomizeQR
                        qrdata={
                            qrCodeContent === "" ? <>
                                <div className='inside-main'>
                                    <div>
                                        <img src={arityqr} alt="qrImg" />
                                        <p>Scane this code for try</p>
                                    </div>
                                </div>
                            </> :
                                <span className='qrcodepdf'>
                                    {qrCodeContent && <QRCode className='dasdddad' value={qrCodeContent} />}
                                    <button className='btn btn-outline-success' onClick={downloadSVG}>Download SVG</button>
                                    <button className='btn btn-outline-success' onClick={downloadPNG}>Download PNG</button>
                                </span>
                        }
                    />
                </div>
            </div>














        </div>
    )
}

export default Degin