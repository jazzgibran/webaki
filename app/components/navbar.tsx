"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [burgerOpen, setburgerOpen] = useState(false);

  const toggleBurger = () => {
    setburgerOpen(!burgerOpen);
  };

  return (
    <motion.nav
  className="p-4 ws z-20 absolute top-0 w-full"
>
  {/* Main Navbar Content */}
  <div className={`max-w-7xl mx-auto flex justify-center items-center relative`}>
    
    
    <ul className={`flex relative`}>
      <NavItem to="#" text="Home" />
      <NavItem to="#produk" text="Produk" />
      <NavItem to="#contact" text="Kontak" />
    </ul>
  </div>

 
</motion.nav>
  );
};

interface NavItemProps {
  to: string;
  text: string;
  onClick?: () => void;
}

const NavItem = ({ to, text, onClick, }: NavItemProps) => {
  return (
    <Link href={to}>
      <li
        onClick={onClick}
        className="hover:text-cyan text-white hover:underline rounded-lg p-2 px-5 transition-all duration-300 cursor-pointer"
      >
        {text}
      </li></Link>
  );
};

export default Navbar;
