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
    <nav className="flex relative justify-between items-center my-3 px-4 md:px-10">
      <div className="flex items-center gap-2">
        <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <RxCross1 size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <img className="w-12 md:w-16" src={logo} alt="logo" />
        <h4 className="text-xl md:text-2xl font-semibold">
          <span className="text-orange-400">Bill</span>Zone
        </h4>
      </div>

      <ul className="hidden md:flex space-x-6 font-medium">{links}</ul>

      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <div className="avatar w-10 avatar-online">
              <img
                src={user.photoURL}
                alt="Profile"
                className="mx-auto ring-2 ring-orange-400 rounded-full object-cover"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content menu rounded-xl z-20 border border-gray-300 bg-white shadow-lg p-4 w-60 space-y-4"
          >
            <div className="text-center">
              <p className="text-sm text-gray-600">Current Balance</p>
              <h2 className="text-xl font-semibold text-green-600">
                {balance} <span className="text-sm text-gray-500">BDT</span>
              </h2>
            </div>
            <button
              onClick={handlerSignOut}
              className="w-full py-2 px-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors text-sm font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="space-x-6 font-medium">
          <Link
            to={"/register"}
            className="bg-orange-400 px-3 py-2 rounded-xl text-white font-normal hover:text-black hover:bg-white hover:border hover:border-orange-400"
          >
            Register
          </Link>
          <Link
            to={"/login"}
            className="border px-3 py-2 rounded-xl border-orange-400 text-black font-normal hover:text-white hover:bg-orange-400 hover:border hover:border-orange-400"
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
