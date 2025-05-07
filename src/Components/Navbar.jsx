import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logojpg.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../Context/AuthContext";
import { BalanceContext } from "../Context/BalanceContext";
import "../Style/navbar.css";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [balance] = useContext(BalanceContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"} className="hover:text-orange-400">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/bills"} className="hover:text-orange-400">
          My Bill
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"} className="hover:text-orange-400">
          My Profile
        </NavLink>
      </li>
    </>
  );

  const handlerSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log out Success");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <nav className="flex relative justify-between items-center my-3">
      <div className="flex items-center gap-2">
        <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <RxCross1 size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <img className="w-12 md:w-16" src={logo} alt="logo" />
        <h4 className="text-[18px] md:text-2xl font-semibold">
          <span className="text-orange-400">Bill</span>Zone
        </h4>
      </div>

      <ul className="hidden md:flex space-x-6 font-medium">{links}</ul>

      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <div className="avatar w-10 h-10 avatar-online">
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt="Profile"
                className="mx-auto ring-2 ring-orange-400 rounded-full object-cover"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content menu z-20 bg-white shadow-xl border border-gray-200 rounded-2xl w-64 p-5 space-y-5 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-t-2xl"></div>

            {/* User Info */}
            <div className="text-center space-y-1">
              <p className="text-md font-semibold text-gray-800">
                {user.displayName}
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-600 mt-2">Current Balance</p>
              <h2 className="text-2xl font-bold text-green-500">
                {balance} <span className="text-sm text-gray-500">BDT</span>
              </h2>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handlerSignOut}
              className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="space-x-2 font-medium flex items-center">
          <Link
            to="/register"
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-2 rounded-xl shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl border border-orange-400 text-orange-400 bg-white shadow-inner hover:bg-orange-400 hover:text-white hover:shadow-md transition-all duration-300"
          >
            Login
          </Link>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute top-[60px] left-4 bg-white rounded-xl px-6 py-5 shadow-lg w-[220px] z-30 border border-gray-200">
          <ul className="space-y-4 text-base font-medium text-gray-700">
            {links}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
