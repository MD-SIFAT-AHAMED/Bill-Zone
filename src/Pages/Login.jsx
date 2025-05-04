import React, { use, useState } from 'react';
import loginImg  from '../assets/loginimg.jpg'
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Context/AuthContext';
const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const {loginUser,createUserGoogle} = use(AuthContext);
    const navigate = useNavigate();

    const handlerLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        loginUser(email,password)
        .then((user)=>{
            console.log(user);
            navigate('/');
        })
        .catch((err)=>{
            setErrorMessage(err.code);
        })

    }

    const handlerGoogleSignIn =()=>{
        createUserGoogle()
        .then((user)=>{
            console.log(user);
            navigate('/');
        })
        .catch((err)=>{
            setErrorMessage(err.code);
        })

    }
    return (
        <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-[600px]" src={loginImg} alt="img" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h3 className="text-2xl md:text-4xl font-semibold text-center py-3">
                Login
              </h3>
              <form onSubmit={handlerLogin} className="fieldset ">
            
                {/* Email field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Password fied */}
                <label className="label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
               
                <button className="btn text-white hover:bg-white hover:text-black  bg-[#ff8904] mt-4">
                  Login
                </button>
              </form>
              {
                errorMessage && <p className="text-center text-red-600">{errorMessage}</p>
              }             
              <p className="text-center">
                Don't have an Account?{" "}
                <Link to={"/register"} className="underline">
                  Register
                </Link>{" "}
                <br /> or
              </p>
              <button 
              onClick={handlerGoogleSignIn}
              className="btn">
              <FcGoogle size={25} />
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;