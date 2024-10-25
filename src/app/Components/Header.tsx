"use client";


import Link from 'next/link'; // Import Link from Next.js
import React, { useState } from "react"; // Import useState from React

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open state
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-[#B18B5E] p-4 z-50">
        {/* Phone number on the left */}
        <div className="flex items-center space-x-1 pl-10 text-white">
          <img
            src="/img/call.png"
            alt="Phone Icon"
            className="custom-image"
            style={{ width: '26px', height: '26px' }}
          />
          <span>+380961381876</span>
        </div>

        {/* Center notification */}
        <div className="text-center text-white mb-2 md:mb-0 flex-grow hidden lg:block">
          TAKE CARE OF YOUR HEALTH 25% OFF USE CODE “DOFIX03”
        </div>

        {/* Remaining top bar items */}
        <div className="flex items-center space-x-4 ml-auto pr-10">
          {['English', 'USD', 'Setting'].map((item, index) => (
            <div key={index} className="relative group">
              <button className="text-gray-600 flex items-center space-x-1 text-white" aria-haspopup="true" aria-expanded={false}>
                <span>{item}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-300 mt-2 rounded-lg shadow-lg z-50 min-w-[100px]">
                <ul className="py-1 text-gray-700">
                  {item === 'Setting' ? (
                    <>
                      <li><Link href="/my-profile" className="block px-2 py-2 hover:bg-gray-100">My Profile</Link></li>
                      <li><Link href="/wishlist" className="block px-2 py-2 hover:bg-gray-100">Wishlist</Link></li>
                      <li><Link href="/cart" className="block px-2 py-2 hover:bg-gray-100">Cart</Link></li>
                      <li><Link href="/logout" className="block px-2 py-2 hover:bg-gray-100">Logout</Link></li>
                    </>
                  ) : item === 'USD' ? (
                    ['USD', 'EUR', 'CHF', 'GBP', 'KWD'].map((currency) => (
                      <li key={currency}>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">{currency}</Link>
                      </li>
                    ))
                  ) : (
                    ['Spanish', 'Russian', 'Portuguese'].map((lang) => (
                      <li key={lang}>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">{lang}</Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
      <header id="header" className="bg-white shadow-sm py-4 sticky top-0 z-40">
        <div className="flex justify-between items-center px-4 pl-10">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/logo/logo.svg"
                alt="Logo"
                className="h-15 w-15 mr-8"
              />
            </div>

            <nav className="hidden md:flex space-x-6 text-gray-800 nav1">
              <Link href="/" className="hover:text-amber-600 font-bold">Home</Link>
              <Link href="/about" className="hover:text-amber-600 font-bold">About</Link>

              <div className="relative group font-bold">
                <Link href="#" className="hover:text-amber-600">Shop</Link>
                <ul className="submenu absolute bg-white shadow-md rounded-lg mt-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-48">
                  <li>
                    <Link href="/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Product</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/product-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Product Details</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Wishlist</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Cart</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/checkout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Checkout</Link>
                  </li>
                </ul>
              </div>

              <div className="relative group font-bold">
                <Link href="#" className="hover:text-amber-600">Pages</Link>
                <ul className="submenu absolute bg-white shadow-md rounded-lg mt-5 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-48">
                  <li>
                    <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">About Us</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/Findastore" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Find a Store</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Portfolio</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/portfolio-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Portfolio Details</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Faq</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/coming-soon" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Coming Soon</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/404" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">404</Link>
                  </li>
                </ul>
              </div>

              <div className="relative group font-bold">
                <Link href="#" className="hover:text-amber-600">Blog</Link>
                <ul className="submenu absolute bg-white shadow-md rounded-lg mt-5 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-48">
                  <li>
                    <Link href="/blog-classic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Blog Default</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/blog-grid" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Blog Grid</Link>
                  </li>
                  <hr className="border-t border-gray-300" />
                  <li>
                    <Link href="/blog-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">Blog Details</Link>
                  </li>
                </ul>
              </div>

              <Link href="/contact" className="hover:text-amber-600 font-bold">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6 pr-10">
          <div className="relative hidden lg:block">
  <input
    type="text"
    placeholder="Search..."
    className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm text-black focus:outline-none focus:ring focus:border-amber-500"
  />
  <button className="absolute right-2 top-2 text-amber-600">
    <i className="fa-solid fa-magnifying-glass h-5 w-5"></i>
  </button>
</div>



            <div className="flex space-x-4 text-gray-600">
              <div className="relative">
                <i className="fa-regular fa-heart" style={{ color: '#151875', fontSize: '23px' }}></i>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center text-sm">3</span>
                </div>

              <div className="relative">
  <svg
    className="w-5 h-6" // Tailwind CSS classes for width and height
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0625 10.6C14.0625 12.5883 12.4676 14.2 10.5 14.2C8.53243 14.2 6.9375 12.5883 6.9375 10.6M1 5.8H20M1 5.8V13C1 20.6402 2.33946 22 10.5 22C18.6605 22 20 20.6402 20 13V5.8M1 5.8L2.71856 2.32668C3.12087 1.5136 3.94324 1 4.84283 1H16.1571C17.0568 1 17.8791 1.5136 18.2814 2.32668L20 5.8"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center text-sm">3</span>
</div>

            </div>
            <button
              id="menu-btn"
              className="text-amber-600"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`fixed top-0 right-0 w-96 h-full bg-[#151515] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between relative px-4 mt-10">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/logo/logo-light.svg"
              alt=""
              className="h-10"
            />
            <button
              id="close-btn"
              className="text-white border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors duration-300"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr className="border-gray-500 mt-10 w-full mx-auto" style={{ maxWidth: "600px" }} />

          {/* Search Input for Mobile Menu */}
          <div className="relative mt-16 px-6">
            <input
              type="text"
              placeholder="What are you searching for?"
              className="w-full bg-[#151515] text-[#B18B5E] pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring focus:border-amber-500"
            />
            <button className="absolute right-8 top-2 text-amber-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <hr className="border-gray-600 mt-2" />
          </div>

          {/* Navigation Links */}
          <nav className="mt-10 space-y-6 text-white px-6 md:hidden">
             <Link href="index.html" className="block hover:text-amber-600">Home</Link>
            <hr className="border-gray-600" />
             <Link href="#" className="block hover:text-amber-600">About</Link>
            <hr className="border-gray-600" />

            {/* Shop Menu */}
            <div className="relative group">
               <Link
                href="#"
                className="block hover:text-amber-600 flex items-center justify-between"
                id="shop-menu"
              >
                <span>Shop</span>
                <span className="ml-2 text-amber-600" id="toggle-icon">+</span>
              </Link>
              {/* Submenu */}
              <ul
                id="shop-submenu"
                className="bg-[#151515] text-white items-center rounded-lg mt-2 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-screen space-y-2"
              >
                <li>
                <Link href="/product" className="block px-4 py-2 hover:bg-gray-700">Product</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/product-details"className="block px-4 py-2 hover:bg-gray-700">Product Details</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/wishlist" className="block px-4 py-2 hover:bg-gray-700">Wishlist</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="cart.html" className="block px-4 py-2 hover:bg-gray-700">Cart</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/cart" className="block px-4 py-2 hover:bg-gray-700">Checkout</Link>
                </li>
              </ul>
            </div>
            <hr className="border-gray-600" />

            {/* Pages Menu */}
            <div className="relative group">
               <Link
                href="#"
                className="block hover:text-amber-600 flex items-center justify-between"
                id="shop-menu"
              >
                <span>Pages</span>
                <span className="ml-2 text-amber-600" id="toggle-icon">+</span>
              </Link>
              {/* Submenu */}
              <ul
                id="shop-submenu"
                className="bg-[#151515] text-white items-center rounded-lg mt-2 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-screen space-y-2"
              >
                <li>
                <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-700">About Us</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/Findastore" className="block px-4 py-2 hover:bg-gray-700">Find a Store</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-700">Portfolio</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="/portfolio-details" className="block px-4 py-2 hover:bg-gray-700">Portfolio Details</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="/faq" className="block px-4 py-2 hover:bg-gray-700">Faq</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="/coming-soon" className="block px-4 py-2 hover:bg-gray-700">Coming Soon</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                   <Link href="/404" className="block px-4 py-2 hover:bg-gray-700">404</Link>
                </li>
              </ul>
            </div>
            <hr className="border-gray-600" />

            {/* Blog Menu */}
            <div className="relative group">
               <Link
                href="#"
                className="block hover:text-amber-600 flex items-center justify-between"
                id="shop-menu"
              >
                <span>Blog</span>
                <span className="ml-2 text-amber-600" id="toggle-icon">+</span>
              </Link>
              {/* Submenu */}
              <ul
                id="shop-submenu"
                className="bg-[#151515] text-white items-center rounded-lg mt-2 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-screen space-y-2"
              >
                <li>
                   <Link href="blog-classic" className="block px-4 py-2 hover:bg-gray-700">Blog Default</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/blog-grid" className="block px-4 py-2 hover:bg-gray-700">Blog Grid</Link>
                </li>
                <hr className="border-gray-600" />
                <li>
                <Link href="/blog-details"className="block px-4 py-2 hover:bg-gray-700">Blog Details</Link>
                </li>        
              </ul>
            </div>
            <hr className="border-gray-600" />

             <Link href="contact.html" className="block hover:text-amber-600">Contact</Link>
          </nav>

          {/* Contact Information Section */}
          <div className="mt-12 px-6">
  <h2 className="text-lg font-bold">Contact Info</h2>
  <ul className="mt-4 space-y-4">
    <li className="flex items-center group">
      <div className="flex-shrink-0 w-10 h-10 bg-transparent rounded-full border-2 border-white p-2 flex items-center justify-center group-hover:bg-[#B18B5E] transition-colors">
        <i className="fa-solid fa-location-dot  group-hover:text-white"></i>
      </div>
      <span className="ml-4 group-hover:text-[#B18B5E] transition-colors">123 Street Name, City, Country</span>
    </li>
    <li className="flex items-center group">
      <div className="flex-shrink-0 w-10 h-10 bg-transparent rounded-full border-2 border-white p-2 flex items-center justify-center group-hover:bg-[#B18B5E] transition-colors">
        <i className="fa-solid fa-phone group-hover:text-white"></i>
      </div>
      <span className="ml-4 group-hover:text-[#B18B5E] transition-colors">+123 456 7890</span>
    </li>
    <li className="flex items-center group">
      <div className="flex-shrink-0 w-10 h-10 bg-transparent rounded-full border-2 border-white p-2 flex items-center justify-center group-hover:bg-[#B18B5E] transition-colors">
        <i className="fa-regular fa-envelope group-hover:text-white"></i>
      </div>
      <span className="ml-4 group-hover:text-[#B18B5E] transition-colors">info@example.com</span>
    </li>
  </ul>
</div>



          {/* Social Media Links */}
          <div className="mt-12 px-6">
  <h2 className="text-lg font-bold">Follow Us</h2>
  <ul className="mt-4 flex space-x-4">
    <li>
      <Link href="#" className="group">
        <div className="w-10 h-10 bg-transparent rounded-full border-2 border-amber-600 flex items-center justify-center transition-colors group-hover:bg-amber-400">
          <i className="fa-brands fa-facebook text-amber-600 group-hover:text-white"></i>
        </div>
      </Link>
    </li>
    <li>
      <Link href="#" className="group">
        <div className="w-10 h-10 bg-transparent rounded-full border-2 border-amber-600 flex items-center justify-center transition-colors group-hover:bg-amber-400">
          <i className="fa-brands fa-twitter text-amber-600 group-hover:text-white"></i>
        </div>
      </Link>
    </li>
    <li>
      <Link href="#" className="group">
        <div className="w-10 h-10 bg-transparent rounded-full border-2 border-amber-600 flex items-center justify-center transition-colors group-hover:bg-amber-400">
          <i className="fa-brands fa-youtube text-amber-600 group-hover:text-white"></i>
        </div>
      </Link>
    </li>
    <li>
      <Link href="#" className="group">
        <div className="w-10 h-10 bg-transparent rounded-full border-2 border-amber-600 flex items-center justify-center transition-colors group-hover:bg-amber-400">
          <i className="fa-brands fa-linkedin text-amber-600 group-hover:text-white"></i>
        </div>
      </Link>
    </li>
  </ul>
</div>

        </div>
      </header>
    </>
  );
};

export default Header;
