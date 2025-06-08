import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-primarylight py-12 px-6 md:px-20 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img
              src="/headicon.svg"
              alt="Shri Shyam Store Logo"
              className="w-10 h-10 mr-3"
            />
            <h2 className="text-2xl font-semibold font-Poppins whitespace-nowrap">श्री Shyam Store</h2>
          </div>
          <p className="text-sm font-Poppins max-w-xs leading-relaxed">
            Crafted to frame every entrance with elegance and durability.
            Premium stones and exceptional craftsmanship since [Year].
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-Poppins">Quick Links</h3>
          <ul className="space-y-2 font-Poppins text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-Poppins">Contact Us</h3>
          <ul className="text-sm font-Poppins space-y-3">
            <li className="flex items-center gap-2">
              <MdPhone className="text-primaryred" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-primaryred" size={20} />
              <span>info@shri-shyam-store.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-primaryred" size={20} />
              <span>123 Stone Street, Jaipur, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-Poppins">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/shrishyamstore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryred"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com/shrishyamstore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryred"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/shrishyamstore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryred"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com/company/shrishyamstore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryred"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primarylight/40 pt-6 text-center text-xs font-Poppins text-gray-600">
        &copy; {new Date().getFullYear()} Shri Shyam Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
