

import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import '../../../src/App.css'

const Login = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
            .matches(/^[0-9]{6}$/, 'Password must be exactly 6 digits and contain only numbers'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://192.168.192.76:3000/api/auth/login', data);
            console.log('Loging API response:', res);
            if (res.status === 200) {
                const authToken = res.data.token;
                console.log('authToken', authToken);
                toast.success('Successfully Login !');
                navigate('/')
            }
        } catch (error) {
            console.error('Error saving data to API:', error);
        }
        console.log('Form data submitted:', data);
    };

    return (
        <div className='login-wrapper'>
            <div className='container'>
                <div className='loagin-main'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='login-details'>
                            <div>
                                <h2>Log in To Your QR Arity Account</h2>
                            </div>
                            <div>
                                <div className='mb-3'>
                                    <input {...register('email')} type='email' className='form-control' placeholder='abc@xyzgmail.com' />
                                    {errors.email && <p className='error-message'>{errors.email.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <input {...register('password')} type='password' className='form-control' />
                                    {errors.password && <p className='error-message'>{errors.password.message}</p>}
                                </div>
                            </div>
                            <div className='regetration-btn'>
                                <button type='submit' className='btn btn-success my-3'>
                                    Sign in
                                </button>
                            </div>
                            <div className='text-center'>
                                <Link to="/forgotpass">
                                    <p >Forget Password</p>
                                </Link>
                                <div className='pt-3'>
                                    <p>
                                        Don't have an account?
                                        <span>
                                            <Link to='/register'> Sign up </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
