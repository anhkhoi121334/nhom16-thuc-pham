// components/FurnitureSection.js
"use client"
import React, { useState } from 'react';
const FurnitureSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
      document.getElementById('header')?.classList.add('hidden'); 
    };
  
    const closeModal = () => {
      setModalOpen(false);
      document.getElementById('header')?.classList.remove('hidden'); 
    };

  return (
    <>
      <section
        className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-8xl font-bold">About Us</h1>

          {/* Breadcrumb Navigation */}
          <nav className="py-4 text-white">
            <ol className="flex space-x-2 text-gray-200 font-semibold text-sm md:text-base">
              <li><a href="#" className="hover:text-amber-600">Home</a></li>
              <li>.</li>
              <li><a href="#" className="hover:text-amber-600">About Us</a></li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="max-w-7xl mx-auto p-8 pt-10 mt-11">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <div className="mb-7">
              <span className="text-[#B18B5E]">WE DESIGN FURNITURE</span>
              <h3 className="text-3xl text-gray-600 font-bold">Our Core Divisions</h3>
            </div>
            <p className="text-gray-600 mb-7">
              Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
            </p>
            <div className="mt-11">
              {/* Progress Bars */}
              {[
                { title: 'Furniture', percentage: 70 },
                { title: 'Handmade', percentage: 52 },
                { title: 'Crafts', percentage: 80 },
              ].map(({ title, percentage }) => (
                <div className="mb-7" key={title}>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">{title}</p>
                    <span className="text-gray-600">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image2.jpg"
                className="rounded-lg shadow-md w-full object-cover mt-24"
                alt="Furniture Design"
              />
            </div>
          </div>

          {/* Image Content */}
          <div>
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-image1.jpg"
              alt="Furniture Design"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </main>
      {/* Video Thumbnail */}
      <div className="relative postbox__thumb postbox__video w-img mt-11">
        <a onClick={openModal} href="#">
          <img
            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/about/about-video-image.jpg"
            alt="image"
            className="w-full h-auto"
          />
        </a>
        <a
          href="#"
          className="absolute inset-0 flex items-center justify-center"
          onClick={openModal}
        >
          <span className="bg-white rounded-full p-5 shadow-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#B18B5C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="black"
              className="bi bi-play-fill text-gray-800"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </span>
        </a>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div id="videoModal" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>
              &times;
            </button>
            <iframe
              className="rounded-lg w-full h-[80vh]"
              src="https://www.youtube.com/embed/YkfPITD2C8Y?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <section className="bg-white py-16 max-w-7xl mx-auto pt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Exclusive offers for you',
                description: 'Get weekly deals, valuable health information and more.',
                buttonText: 'Sign Up',
                buttonLink: '#',
                backgroundColor: 'bg-[rgb(217,243,251)]',
              },
              {
                title: 'Join Our Community',
                description: 'Get weekly deals, valuable health information and more.',
                buttonText: 'Join Free Now',
                buttonLink: '#',
                backgroundColor: 'bg-[rgb(249,255,224)]',
              },
              {
                title: 'Get our FREE app Now!',
                description: 'Get weekly deals, valuable health information and more.',
                buttonText: 'Download App',
                buttonLink: '#',
                backgroundColor: 'bg-pink-200',
                isAppLinks: true,
              },
            ].map(({ title, description, buttonText, buttonLink, backgroundColor, isAppLinks }) => (
              <div className="support-item" key={title}>
                <div className={`${backgroundColor} p-8 rounded-lg shadow`}>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  {isAppLinks ? (
                    <div className="mobile__app-download flex space-x-4">
                      <a className="app__download border border-white bg-black rounded-md p-2 hover:bg-gray-800 transition duration-200" href="#">
                        <img
                          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/app/play-store.png"
                          alt="Play Store"
                          className="h-8"
                        />
                      </a>
                      <a className="app__download border border-white bg-black rounded-md p-2 hover:bg-gray-800 transition duration-200" href="#">
                        <img
                          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/app/apple-store.png"
                          alt="Apple Store"
                          className="h-8"
                        />
                      </a>
                    </div>
                  ) : (
                    <a
                      className="join-btn furniture-btn inline-block border border-black text-black bg-transparent px-4 py-2 rounded transition hover:bg-[#B18B5E] hover:text-white"
                      href={buttonLink}
                    >
                      {buttonText}
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FurnitureSection;
