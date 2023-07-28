

import React, { useState } from 'react';

const OTPVerificationModal = ({ onClose, onVerify }) => {
    const [userEnteredOTP, setUserEnteredOTP] = useState('');
    const [error, setError] = useState('');

    const handleOTPChange = (event) => {
        const inputOTP = event.target.value;
        if (/^\d{0,6}$/.test(inputOTP)) {
            setUserEnteredOTP(inputOTP);
            setError('');
        } else {
            setError('Please enter a valid 6-digit OTP.');
        }
    };

    const handleVerify = () => {
        if (userEnteredOTP.length === 6) {
            onVerify(userEnteredOTP);
        } else {
            setError('Please enter a valid 6-digit OTP.');
        }
    };

    return (
        <div className="otp-verification-modal">
            <div className="modal-content">
                <h2>Enter OTP</h2>
                <input
                    type="text"
                    value={userEnteredOTP}
                    onChange={handleOTPChange}
                    placeholder="Enter OTP"
                />
                {error && <p className="error-message">{error}</p>}
                <button className='btn btn-primary my-1' onClick={handleVerify}>Verify OTP</button>
                <button className='btn btn-danger my-2' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default OTPVerificationModal;
