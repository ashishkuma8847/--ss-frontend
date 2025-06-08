import { useState } from "react";
import headerjson from "../../json/Header.json";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <section>
        <main className="pt-[30px] relative z-50">
          <div className="container">
            <div className="flex w-full justify-between items-center">
              <Link to={"/"}>
                <div className="flex justify-between items-center w-[230px] text-[20px] leading-4">
                  <img
                    className="w-[40px] h-[40px]"
                    src="headicon.svg"
                    alt="icon"
                  />
                  <h1 className="font-Poppins">श्री Shyam Store</h1>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex max-w-[500px] w-full justify-between items-center">
                {headerjson.pages.map((item, index) => (
                  <div
                    className="cursor-pointer font-Poppins"
                    key={item + index + Date.now()}
                  >
                    <NavLink to={item.path}>
                      <h1 className="text-[20px] leading-4">{item.title}</h1>
                    </NavLink>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-black"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* Animated Fullscreen Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className={`fixed inset-0 z-50 bg-white flex flex-col justify-between px-6 py-8 
                transition-transform duration-500 ease-in-out transform translate-x-0`}
            >
              {/* Overlay fade-in */}
              <div className="absolute inset-0 bg-white backdrop-blur-sm z-[-1] opacity-100 transition-opacity duration-500"></div>

              {/* Close Button */}
              <div className="w-full flex justify-end">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={32} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-6 mt-10 animate-slideInRight">
                {headerjson.pages.map((item, index) => (
                  <NavLink
                    key={item + index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-Poppins text-black hover:text-primaryred transition-all duration-300"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </nav>

              {/* Footer */}
              <div className="text-center text-sm text-gray-600 mt-10">
                © 2025 Shri Shyam Store
              </div>
            </div>
          )}
        </main>
      </section>

      {/* Custom Slide Animation */}
      <style>
        {`
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0%);
            }
          }
          .animate-slideInRight {
            animation: slideInRight 0.5s ease forwards;
          }
        `}
      </style>
    </>
  );
};

export default Header;
