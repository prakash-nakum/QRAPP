
import React, { useState } from 'react';
import '../../src/App.css'
import QRCode from 'react-qr-code';
import CustomizeQR from '../NewDegin/CustomizeQR';




const VCard = () => {


    const [formData, setFormData] = useState({
        name: '',
        website: '',
        companyName: '',
        position: '',
        mobileNumber: '',
        phoneNumber: '',
        email: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
    });

    const [showQRCode, setShowQRCode] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowQRCode(true);
    };

    // 
    console.log(JSON.stringify(formData));
    return (
        <div className='url-wrapper'>
            <div className='container'>
                <div className='vCard-step-one'>
                    <div className='first-stpedd'>
                        <div className='step-text d-flex'>
                            <div className='steponetext mx-4'>
                                <p>STEP 1</p>
                            </div>
                            <div className='enter-text'>
                                <p>Complete the vCard data entry  </p>
                            </div>

                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className='firstsection'>
                                <div>
                                    <div className="mb-3 details">
                                        <label htmlFor="name" className="form-label"><span>Name:</span></label>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>

                                    <div className="mb-3 details">
                                        <label htmlFor="website" className="form-label">Website:</label>
                                        <input type="url" className="form-control" id="website" name="website" value={formData.website} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3 details ">
                                        <label htmlFor="companyName" className="form-label">Company Name:</label>
                                        <input type="text" className="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
                                    </div>

                                    <div className="mb-3 details">
                                        <label htmlFor="position" className="form-label">Position:</label>
                                        <input type="text" className="form-control" id="position" name="position" value={formData.position} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className='firstsection'>
                                <div>
                                    <div className="mb-3 details">
                                        <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                                        <input type="tel" pattern="[0-9]{10}" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                                    </div>

                                    <div className="mb-3 details">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                                        <input type="tel" pattern="[0-9]{10}" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                    </div>

                                </div>
                                <div>

                                    <div className="mb-3 details">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>

                                    <div className="mb-3 details">
                                        <label htmlFor="country" className="form-label">Country:</label>
                                        <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className='firstsection'>
                                <div>
                                    <div className="mb-3 details">
                                        <label htmlFor="state" className="form-label">State:</label>
                                        <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} required />
                                    </div>

                                    <div className="mb-3 details">
                                        <label htmlFor="city" className="form-label">City:</label>
                                        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="mb-3 details">
                                    <label htmlFor="pincode" className="form-label">Pincode:</label>
                                    <input type="text" pattern="[0-9]{6}" className="form-control" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Generated QR Code</button>
                            {showQRCode && (
                                <div className="mt-3">
                                    <h2>Generated QR Code:</h2>
                                    <QRCode value={JSON.stringify(formData)} size={256} />
                                </div>
                            )}

                        </form>
                    </div>
                </div>
                <CustomizeQR />
            </div>
        </div >


    );
};

export default VCard;
