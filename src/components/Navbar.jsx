import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = 3; // This would come from your state/context

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              StyleHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300">
              Products
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-700 hover:text-primary-600 transition-colors duration-300" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
            
            <Link to="/profile">
              <FiUser className="text-2xl text-gray-700 hover:text-primary-600 transition-colors duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary-600 py-2">
                Home
              </Link>
              <Link to="/products" className="font-medium text-gray-700 hover:text-primary-600 py-2">
                Products
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary-600 py-2">
                About
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-primary-600 py-2">
                Contact
              </Link>
              
              <div className="flex items-center space-x-4 pt-4">
                <Link to="/cart" className="relative">
                  <FiShoppingCart className="text-2xl text-gray-700" />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </Link>
                
                <Link to="/profile">
                  <FiUser className="text-2xl text-gray-700" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;