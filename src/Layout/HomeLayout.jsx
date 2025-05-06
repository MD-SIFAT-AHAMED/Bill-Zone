import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <>
        <header className='w-11/12 mx-auto '>
            <Navbar/>
        </header>

        <main className='w-11/12 mx-auto'>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
        </>
    );
};

export default HomeLayout;