import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="Navbar"
      className="flex justify-between items-center px-4 sm:px-12  md:px-0  lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32  sm:w-40"
      />

      {/* Sidebar / Mobile Menu */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm max-sm:fixed max-sm:top-0 md:mr-8 max-sm:right-0 max-sm:h-full max-sm:min-h-screen max-sm:flex-col max-sm:w-50 md:ml-0  max-sm:pl-10  max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Mobile Menu Links */}
        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b "
        >
          Our Work
        </a>
        <a 
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className=" sm:hover:border-b md:text-sm"
        >
          Contact Us
        </a>
      </div>

      {/* Desktop Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Hamburger Menu: only show when sidebar is closed */}
        {!sidebarOpen && (
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />
        )}

        {/* Desktop Connect Button */}
        <a
          href="#contact-us"
          className="text-sm hidden sm:flex items-center ml-2 md:mr-0 lg:ml-5 md:ml-0 gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;