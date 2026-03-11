import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

//  Logo
const MukesaLogo: React.FC = () => (
  <div className="flex items-center">
    <img 
      src="/images/mukesa logo.png"
      alt="MUKESA Logo"
      className="mr-2 h-16 w-auto" 
    />
    <div>
      <span className="text-lg font-bold text-mukesa-blue leading-none">MUKESA</span>
      <p className="text-[10px] text-mukesa-text-muted leading-tight">
        Multimedia University of Kenya<br/>Engineering Students' Association
      </p>
    </div>
  </div>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mukesa-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center">
            <MukesaLogo />
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'bg-mukesa-blue text-white' : 'text-mukesa-text hover:bg-mukesa-red hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mukesa-text hover:text-mukesa-red focus:outline-none"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-mukesa-bg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive ? 'bg-mukesa-blue text-white' : 'text-mukesa-text hover:bg-mukesa-red hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;