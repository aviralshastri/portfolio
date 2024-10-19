"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Twitter } from "lucide-react";



const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/timeline", label: "Timeline" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { Icon: GithubIcon, href: "https://github.com/yourusername" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/yourusername" },
  { Icon: MailIcon, href: "mailto:your.email@example.com" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.to(menuRef.current, {
      duration: 0.6,
      clipPath: "circle(150% at top right)",
      ease: "power3.inOut",
    });
  }, []);

  useEffect(() => {
    isMenuOpen ? timeline.current.play() : timeline.current.reverse();
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <header className="w-full z-50">
      <nav className="p-4 flex justify-end items-center">
        <button
          onClick={toggleMenu}
          className="z-50 px-4 py-3 rounded-3xl bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </motion.div>
        </button>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        style={{ clipPath: "circle(0% at top right)" }}
      >
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="text-center">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.path}
                custom={i}
                initial="hidden"
                animate={isMenuOpen ? "visible" : "hidden"}
                variants={menuVariants}
                className="my-6"
              >
                <Link
                  href={item.path}
                  className="text-4xl hover:text-yellow-300 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex space-x-6"
          >
            <Link
              href={"https://x.com/AviralShastri"}
              className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <Twitter size={30} color="black" />
            </Link>
            <Link
              href={"https://github.com/aviralshastri"}
              className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <GithubIcon size={30} color="black" />
            </Link>
            <Link
              href={"https://in.linkedin.com/in/aviral-shastri-104944270"}
              className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <LinkedinIcon size={30} color="black" />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
