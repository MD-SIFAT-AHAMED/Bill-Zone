import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logojpg.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
    const {user,signOutUser} = use(AuthContext);
    const [mobileMenu,setMobileMenu] = useState(false);

    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>My Bill</NavLink></li>
        <li><NavLink to={'/profile'}>My Profile</NavLink></li>
    </>
    const handlerSignOut=()=>{
        signOutUser()
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    return (
        <>
            <nav className='flex justify-between items-center my-3'>
                <div className='flex items-center'>
                    <div 
                    className='md:hidden'
                    onClick={()=>setMobileMenu(!mobileMenu)}>
                        {
                            mobileMenu ? <RxCross1 size={20} /> 
                            : <AiOutlineMenu size={20}/>
                        }
                    </div>
                    <img 
                    className='w-12 md:w-16'
                    src={logo} alt="logo" />
                    <h4 className='text-xl md:text-2xl font-semibold'><span className='text-orange-400'>Bill</span>Zone</h4>
                </div>
                <ul className='hidden md:flex space-x-6 '>
                    {links}
                </ul>
                {user ? <button onClick={handlerSignOut}>Sign Out</button> : <div className='space-x-6'>
                    <Link to={'/register'}>Register</Link>
                    <Link to={'/login'}>Login</Link>
                </div> }
            </nav>
            {/* Mobile device */}
            {
                mobileMenu && <div className='md:hidden w-[200px]'>
                <ul className='ml-10 space-y-2 text-lg'>
                    {links}
                </ul>
                </div>
            }
        </>
    );
};

export default Navbar;