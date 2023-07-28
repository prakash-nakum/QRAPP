

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'


const FileUploader = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setError('');
    };

    const handleUpload = () => {
        if (selectedFile) {
            onFileUpload(selectedFile);
        } else {
            setError('Please choose a file first.');
        }
    };

    return (

        <>

            <div>
                <div className='0file-wrapper'>
                    <div className='contassainer'>
                        <div className='file-step-one'>
                            <div className='first-stpedd'>
                                <div className='step-text d-flex'>
                                    <div className='steponetext mx-4'>
                                        <p>STEP 1</p>
                                    </div>
                                    <div className='enter-text'>
                                        <p>Upload File and Generate QR code   </p>
                                    </div>

                                </div>
                                <div className='file-upload-mainF m-auto'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="file-uploder ">
                                                <div className='border border-secondary'>
                                                    <input type="file" onChange={handleFileChange} className='file-input setted-border' />
                                                    <p>
                                                        {error && <p className="error-message">{error}</p>}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <p>Supported formats: </p>
                                                <div className='d-flex supported-button'>
                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>PDF
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>JPEG
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>PNG
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>MP4
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>Excel

                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>Word
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='support-main d-flex' >
                                                <div className='support-reguler'>
                                                    <h2>5MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Regular
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className='support-reguler'>
                                                    <h2>10MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Regular
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='support-reguler'>
                                                    <h2>20MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" class="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Premium
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='d-flex support-intarction'>
                                                    <div>
                                                        <Link>Usage instructions</Link>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='GegerateQRCode d-flex'>
                                        <div>
                                            <button className="btn btn-outline-success" onClick={handleUpload}>
                                                Generate QR Code
                                            </button>
                                            {/* {error && <p className="error-message">{error}</p>} */}
                                        </div>
                                        <div className='d-flex suggetion '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                            </svg>
                                            <p>We only provide dynamic QR codes for
                                                File Solution
                                                .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className='0file-wrapper'>
                    <div className='container'>
                        <div className='file-step-one'>
                            <div className='first-stpedd'>
                                <div className='step-text d-flex'>
                                    <div className='steponetext mx-4'>
                                        <p>STEP 1</p>
                                    </div>
                                    <div className='enter-text'>
                                        <p>Upload File and Generate QR code   </p>
                                    </div>

                                </div>
                                <div className='file-upload-mainF '>
                                    <div className='row'>
                                        <div className='col-md-6 '>


                                            <div className="file-wrapper">
                                                <h2>File Uploader</h2>
                                                <input type="file" onChange={handleFileChange} className='file-input' />

                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <p>Supported formats: </p>
                                                <div className='d-flex supported-button'>
                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>PDF
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>JPEG
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>PNG
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>MP4
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>Excel

                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>Word
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='support-main d-flex' >
                                                <div className='support-reguler'>
                                                    <h2>5MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Regular
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className='support-reguler'>
                                                    <h2>10MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Regular
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='support-reguler'>
                                                    <h2>20MB</h2>
                                                    <div className='reguler-text'>
                                                        <button type="button" className="btn-secondary btn-sm" disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg>
                                                            Premium
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='d-flex support-intarction'>
                                                    <div>
                                                        <Link>Usage instructions</Link>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question" viewBox="0 0 16 16">
                                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='GegerateQRCode d-flex'>
                                        <div>
                                            <button className="btn btn-outline-success" onClick={handleUpload}>
                                                Generate QR Code
                                            </button>
                                            {error && <p className="error-message">{error}</p>}
                                        </div>
                                        <div className='d-flex suggetion '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                            </svg>
                                            <p>We only provide dynamic QR codes for
                                                File Solution
                                                .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

        // <div className="file-wrapper">
        //     <h2>File Uploader</h2>
        //     <input type="file" onChange={handleFileChange} className='file-input' />
        //     <button className="btn btn-outline-success" onClick={handleUpload}>
        //         Upload File
        //     </button>
        //     {error && <p className="error-message">{error}</p>}
        // </div>
    );
};

export default FileUploader;
