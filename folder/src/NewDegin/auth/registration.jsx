


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import OTPVerificationModal from './OTPVerificationModal';
import { useNavigate } from 'react-router-dom';
// import apiInstance from '../../../Util/api.js';

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    country: yup.string().required('Country is required'),
    phone: yup.string().required('Phone No is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});


const Registration = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState('');
    const [showOTPVerificationModal, setShowOTPVerificationModal] = useState(false);
    const [enteredOTP, setEnteredOTP] = useState('');

    const onSubmit = async (data, e) => {
        try {
            setIsLoading(true);
            setFormData(data);
            const res = await axios.post('http://192.168.192.76:3000/api/auth/register', data);
            console.log('api response:', res);
            if (res.status === 200) {
                toast.success('OTP Sent Successfully !');
                setShowOTPVerificationModal(true);
            }

        } catch (error) {
            console.error('Error saving data to API:', error);
        }
        finally {
            setIsLoading(false);
        }

        console.log('Form data submitted:', data);
    };

    const handleOTPVerification = async (userEnteredOTP) => {
        setEnteredOTP(userEnteredOTP);
        try {
            const otpVerificationResponse = await axios.post('http://192.168.192.76:3000/api/auth/verify-otp', {
                email: formData.email,
                otp: userEnteredOTP,
            });
            console.log('OTP Verification API response:', otpVerificationResponse);
            if (otpVerificationResponse.status === 200) {
                toast.success('Register Succesfully!');
                setShowOTPVerificationModal(false);
                navigate('/login')
            }
            else if (otpVerificationResponse.status !== 200) {
                toast.error('Error Somthing Wronge !');
            }
            else {
                toast.error('Error saving OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };


    return (
        <div className="registartion-wrapper">
            <div className="container">
                <div className="reg-form-main">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label className='form-label'>First Name</label>
                            <input {...register('firstName')} className='form-control' placeholder='Enter Your Firstname' />
                            {errors.firstName && <span className='error-message'>{errors.firstName.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input {...register('lastName')} className='form-control' placeholder='Enter Your Lastname' />
                            {errors.lastName && <span className='error-message'>{errors.lastName.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Country</label>
                            <input {...register('country')} className='form-control' placeholder='Country' />
                            {errors.country && <span className='error-message'>{errors.country.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Phone</label>
                            <input {...register('phone')} className='form-control' placeholder='PhoneNo' />
                            {errors.phone && <span className='error-message'>{errors.phone.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputEmail1' className='form-label'>
                                Email address
                            </label>
                            <input
                                {...register('email')}
                                className='form-control'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                                placeholder='abc@xyzgmail.com'
                            />
                            {errors.email && <span className='error-message'>{errors.email.message}</span>}
                            <div id='emailHelp' className='form-text'>
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputPassword1' className='form-label'>
                                Password
                            </label>
                            <input {...register('password')} className='form-control' id='exampleInputPassword1' />
                            {errors.password && <span className='error-message'>{errors.password.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputPassword1' className='form-label'>
                                Confirm Password
                            </label>
                            <input {...register('confirmPassword')} className='form-control' id='exampleInputPassword1' />
                            {errors.confirmPassword && (
                                <span className='error-message'>{errors.confirmPassword.message}</span>
                            )}
                        </div>
                        <div className='regetration-btn'>
                            <button type='submit' className='btn btn-success my-3' disabled={isLoading}>
                                {isLoading ?
                                    <>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="visually-hidden">Loading...</span>
                                    </>
                                    : 'Register'}
                            </button>
                        </div>
                    </form>

                    {showOTPVerificationModal && <OTPVerificationModal onClose={() => setShowOTPVerificationModal(false)}
                        onVerify={handleOTPVerification} />}
                </div>
            </div>
        </div>
    );
};

export default Registration;


