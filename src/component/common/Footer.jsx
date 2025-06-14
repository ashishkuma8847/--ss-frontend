import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-16 pb-8  px-6 sm:px-10 md:px-16 border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-5">
            <div className="relative">
              <img src="/headicon.svg" alt="Logo" className="w-12 h-12 relative z-10" />
              <div className="absolute top-0 left-0 w-12 h-12 rounded-full blur-md bg-primaryred opacity-25 -z-10"></div>
            </div>
            <h2 className="ml-4 text-2xl font-bold font-Poppins whitespace-nowrap">श्री Shyam Store</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 font-Poppins max-w-md">
            Crafted to frame every entrance with elegance and durability.
            Premium stones and craftsmanship since [Year].
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primaryred mb-4 font-Poppins">Quick Links</h3>
          <ul className="space-y-3 text-sm font-Poppins text-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-primaryred transition-colors duration-200"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-primaryred mb-4 font-Poppins">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-700 font-Poppins">
            <li className="flex items-center gap-3">
              <MdPhone className="text-primaryred" size={20} />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-primaryred" size={20} />
              info@shri-shyam-store.com
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-primaryred" size={20} />
              123 Stone Street, Jaipur, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-primaryred mb-4 font-Poppins">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "https://facebook.com/shrishyamstore", icon: <Facebook size={20} /> },
              { href: "https://twitter.com/shrishyamstore", icon: <Twitter size={20} /> },
              { href: "https://instagram.com/shrishyamstore", icon: <Instagram size={20} /> },
              { href: "https://linkedin.com/company/shrishyamstore", icon: <Linkedin size={20} /> },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 rounded-full p-2 text-gray-700 hover:text-primaryred hover:border-primaryred transition-all transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500 font-Poppins">
        &copy; {new Date().getFullYear()} Shri Shyam Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
