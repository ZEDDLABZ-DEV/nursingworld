"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, GraduationCap, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Courses", href: "/#courses" },
    { name: "Success Stories", href: "/#success-stories" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ top: '42px' }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Nursing World
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="https://learn.thenursingworld.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors border-2 border-blue-600 hover:border-blue-700 px-5 py-2.5 rounded-full"
            >
              <LogIn size={18} />
              Login / Sign Up
            </motion.a>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 bg-white"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://thenursingworld.com/signup/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 text-center text-blue-600 px-6 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={18} />
              Login / Signup
            </a>
            <a
              href="/#contact"
              className="block mt-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;


