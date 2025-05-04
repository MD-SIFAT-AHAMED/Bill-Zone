import React from 'react';
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img
            className='w-101'
            src={errorImg} alt="Error" />
            <Link to={'/'} className='btn border-none'>Go To Home</Link>
        </div>
    );
};

export default ErrorPage;