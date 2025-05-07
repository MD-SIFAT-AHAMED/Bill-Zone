import React, { use, useState } from "react";
import registerImg from "../assets/register.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
const Register = () => {
  
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success,setSuccess] = useState('');
  const {createUser,updateUserInformation,createUserGoogle} = use(AuthContext);
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrimPassword.value;

    setErrorMessage('');


    if(!/(?=.*[a-z])/.test(password))
    {
      return setErrorMessage('Must use at least one lowercase letter');
    }
    if(!/(?=.*[A-Z])/.test(password))
    {
      return setErrorMessage('Must use at least one Uppercase letter');
    }
    if(!/.{6,}/.test(password))
    {
      return setErrorMessage('Must be at least 6 characters long')
    }
    if (password !== confrimPassword) {
      return setErrorMessage("Those passwords didn’t match. Try again.");
    }

    const userData ={
      displayName:name,
      photoURL: PhotoUrl
    }

    // Sign Up with Email and Password

    createUser(email,password)
    .then(()=>{
      toast.success("Sign in Successfuly");
      updateUserInformation(userData);
      // console.log(user)
      setSuccess('User Create Success');
      navigate('/');
    })
    .catch((err)=>{
      setErrorMessage(err.code);
    })

    form.reset();
  };

  // Sign up with Google
  const handlerGoogleSignIn =()=>{
    createUserGoogle()
    .then(()=>{
      toast.success("Sign in Successfuly");
      navigate('/');
    })
    .catch((err)=>{
      toast.error(err.code);
    })
  }

  return (
    <div className="hero min-h-md">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[600px]" src={registerImg} alt="img" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <h3 className="text-2xl md:text-4xl font-semibold text-center py-1">
              Register Now
            </h3>
            <form onSubmit={handlerRegister} className="fieldset ">
              {/* Namer field */}
              <label className="label ">Name<span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* Photo URl field */}
              <label className="label">Photo Url<span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo Url"
                required
              />
              {/* Email field */}
              <label className="label">Email<span className='text-red-600'>*</span></label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* Password fied */}
              <label className="label">Password<span className='text-red-600'>*</span></label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {/* Confrim Password field*/}
              <label className="label">Confrim Password<span className='text-red-600'>*</span></label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confrimPassword"
                className="input"
                placeholder="Confrim Password"
                required
              />
              <label className="label">
                <input 
                onChange={() => setShowPassword(!showPassword)}
                type="checkbox"
                name="check" 
                className="checkbox" />
                Show Password
              </label>
              <button className="btn text-white hover:bg-white hover:text-black  bg-[#ff8904] mt-4">
                Register
              </button>
            </form>
            {
              errorMessage && <p className="text-center text-red-600">{errorMessage}</p>
            }
            {
              success && <p className="text-center text-green-600">{success}</p>
            }
            <p className="text-center">
              You have an Account?{" "}
              <Link to={"/login"} className="underline">
                Login
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

export default Register;
