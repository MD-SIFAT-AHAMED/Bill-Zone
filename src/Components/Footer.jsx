import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2"><span className="text-orange-400">Bill</span>Zone</h2>
          <p>Your trusted partner in secure banking.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Careers</a></li>
            <li><a className="link link-hover">Services</a></li>
            <li><a className="link link-hover">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@BillZone.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-primary" /></a>
            <a href="#"><FaTwitter className="hover:text-primary" /></a>
            <a href="#"><FaInstagram className="hover:text-primary" /></a>
            <a href="#"><FaLinkedin className="hover:text-primary" /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-300 pt-4 text-sm">
        © {new Date().getFullYear()} BillZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
