import React from "react";
import registerImg from "../assets/register.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
const Register = () => {

  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrimPassword.value;
    
    form.reset();
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[600px]" src={registerImg} alt="img" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-2xl md:text-4xl font-semibold text-center py-3">
              Register Now
            </h3>
            <form onSubmit={handlerRegister} className="fieldset ">
              {/* Namer field */}
              <label className="label ">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* Photo URl field */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo Url"
                required
              />
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
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {/* Confrim Password field*/}
              <label className="label">Confrim Password</label>
              <input
                type="password"
                name="confrimPassword"
                className="input"
                placeholder="Confrim Password"
                required
              />
              <button className="btn text-white hover:bg-white hover:text-black  bg-[#ff8904] mt-4">Register</button>
            </form>
            <p className="text-center">
              You have an Account? <Link to={'/login'} className="underline">Login</Link>{" "}
              <br /> or
            </p>
            <button className="btn"><FcGoogle size={25} />Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
