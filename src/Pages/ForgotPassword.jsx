import React, { use } from "react";
import forgotImg from "../assets/Forgot.jpg";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
const ForgotPassword = () => {
  const { userPasswordForgot } = use(AuthContext);


  const handlerForgotPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    userPasswordForgot(email)
      .then(() => {
        toast.success("Check your Email");
      })
      .catch((err) => {
        toast.error(err.code);
      });

    e.target.reset();
  };
  return (
    <div className="hero min-h-md">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[600px]" src={forgotImg} alt="img" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <h3 className="text-2xl font-semibold text-center py-3">
              Fotgot Password
            </h3>
            <form onSubmit={handlerForgotPass} className="fieldset ">
              <label className="label">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your Email"
                required
              />
              <button className="btn text-white hover:bg-white hover:text-black  bg-[#ff8904] mt-4">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
