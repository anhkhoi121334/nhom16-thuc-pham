
"use client";

import React, { useState } from 'react';
import '../styles/blog.css';

const images: string[] = [
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-01.jpg",
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-02.jpg",
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-03.jpg",
];

const BlogClassic: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePlayButtonClick = () => {
        setIsOpen(true);
    };

    const handleCloseButtonClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/bg/breadcrumb-bg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-8xl font-bold">Blog Classic</h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="py-4 text-white">
                        <ol className="flex space-x-2 text-gray-200 font-bold text-sm md:text-base">
                            <li><a href="#" className="hover:text-amber-600">Home</a></li>
                            <li>.</li>
                            <li><a href="#" className="hover:text-amber-600">Blog Classic</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <main>
                <section className='py-16'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                            <div className="col-span-2 bg-[#f6f6f6] p-[30px]">
                                <div className="p-6 rounded-lg">
                                    <article className="mb-12">
                                        <div className="mb-6">
                                            <a href="blog-details.html">
                                                <img
                                                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-01.jpg"
                                                    alt=""
                                                    className="w-full rounded-md"
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-4 font-bold text-gray-500 text-base sm:text-xl mb-4 mt-4">
                                                <span className="flex items-center space-x-2">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                                                        />
                                                    </svg>
                                                    <a href="#" className="hover:underline">By Alex Manie</a>
                                                </span>
                                                <span className="flex items-center space-x-2">
                                                    <i className="fa-regular fa-clock w-4 h-4 text-current stroke-current stroke-2 inline-block align-middle"></i>
                                                    <span className="ml-2">January 22, 2022</span>
                                                </span>
                                                <span className="flex items-center space-x-2">
                                                    <i className="fa-regular fa-comment w-4 h-4 text-current stroke-current stroke-2 inline-block align-middle"></i>
                                                    <span className="ml-2">35</span>
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-semibold mb-4">
                                                <a href="blog-details.html" className="hover:text-blue-600">Colour ideas for kitchen and dining spaces</a>
                                            </h3>
                                            <p className="text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum.
                                            </p>
                                            <div className="flex mt-4">
                                                <h3 className="text-2xl font-semibold max-w-xs text-center">
                                                    <a href="blog-details.html" className="hover:text-blue-600 mb-4">Explore Now<i className="fa-solid fa-angle-right text-xl"></i></a>
                                                </h3>
                                            </div>
                                            <div className="relative mb-7 mt-8">
                                                <a href="blog-details.html" className="block w-full">
                                                    <img
                                                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/blog/postbox/postbox-02.jpg"
                                                        alt="Blog Image"
                                                        className="w-full h-auto"
                                                    />
                                                </a>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div
                                                        className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-200 cursor-pointer play-button"
                                                        onClick={handlePlayButtonClick}
                                                        >
                                                        <i className="fas fa-play text-2xl text-gray-800"></i>
                                                    </div>
                                                </div>

                                                {/* Video Overlay */}
                                                {isOpen && (
                                                <div className="overlay fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/YkfPITD2C8Y?autoplay=1"
                                                        className="rounded-lg w-4/5 h-4/5"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                    <button
                                                        className="absolute top-4 right-4 text-white text-2xl"
                                                        onClick={handleCloseButtonClick}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            )}

                                                {/* Meta Information */}
                                                <div className="flex items-center space-x-4 font-bold text-gray-500 text-base sm:text-xl mb-4 mt-4">
                                                    <span className="flex items-center space-x-2">
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                                            ></path>
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                                                            ></path>
                                                        </svg>
                                                        <a href="#" className="hover:underline">By Alex Manie</a>
                                                    </span>
                                                    <span className="flex items-center space-x-2">
                                                        <i className="fa-regular fa-clock w-4 h-4 text-current stroke-current stroke-2 inline-block align-middle"></i>
                                                        <span className="ml-2">January 22, 2022</span>
                                                    </span>
                                                    <span className="flex items-center space-x-2">
                                                        <i className="fa-regular fa-comment w-4 h-4 text-current stroke-current stroke-2 inline-block align-middle"></i>
                                                        <span className="ml-2">35</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold mb-4">
                                                    <a href="blog-details.html" className="hover:text-blue-600">
                                                        Colour ideas for kitchen and dining spaces
                                                    </a>
                                                </h3>
                                                <p className="text-gray-700">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]
                                                </p>
                                                <div className="flex mt-4">
                                                    <h3 className="text-2xl font-semibold max-w-xs text-center">
                                                        <a href="blog-details.html" className="hover:text-blue-600 mb-4">
                                                            Explore Now<i className="fa-solid fa-angle-right text-xl"></i>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="postbox__thumb postbox__slider relative mt-8">
                                                    <div className="postbox__nav absolute inset-0 flex items-center justify-between p-4">
                                                        <button
                                                            onClick={handlePrev}
                                                            className="postbox-slider-button-prev bg-white rounded-full p-2 shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center left-4 opacity-90"
                                                            aria-label="Previous slide"
                                                        >
                                                            <i className="fas fa-angle-left"></i>
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            className="postbox-slider-button-next bg-white rounded-full p-2 shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center right-4 opacity-90"
                                                            aria-label="Next slide"
                                                        >
                                                            <i className="fas fa-angle-right"></i>
                                                        </button>
                                                    </div>
                                                    <div className="postbox__slider-item mb-7">
                                                        <img
                                                            src={images[currentIndex]}
                                                            alt={`Blog Image ${currentIndex + 1}`}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold mb-4">
                                                    <a href="blog-details.html" className="hover:text-blue-600">
                                                        Colour ideas for kitchen and dining spaces
                                                    </a>
                                                </h3>
                                                <p className="text-gray-700">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]
                                                </p>
                                                <div className="flex mt-4">
                                                    <h3 className="text-2xl font-semibold max-w-xs text-center">
                                                        <a href="blog-details.html" className="hover:text-blue-600 mb-4">
                                                            Explore Now<i className="fa-solid fa-angle-right text-xl"></i>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="bd-basic__pagination flex items-center justify-center mt-11">
                                                <nav>
                                                    <ul className="flex space-x-2">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-white hover:bg-[#b18b5e] bg-white w-12 h-12 inline-flex items-center justify-center relative right-0 top-1/2 font-semibold text-lg border border-gray-300 rounded-full"
                                                            >
                                                                1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-white hover:bg-[#b18b5e] bg-white w-12 h-12 inline-flex items-center justify-center relative right-0 top-1/2 font-semibold text-lg border border-gray-300 rounded-full"
                                                            >
                                                                2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-white hover:bg-[#b18b5e] bg-white w-12 h-12 inline-flex items-center justify-center relative right-0 top-1/2 font-semibold text-lg border border-gray-300 rounded-full"
                                                            >
                                                                3
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-white hover:bg-[#b18b5e] bg-white w-12 h-12 inline-flex items-center justify-center relative right-0 top-1/2 font-semibold text-lg border border-gray-300 rounded-full"
                                                            >
                                                                <i className="fa-solid fa-angle-right"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className='bg-[#f6f6f6] p-[30px]'>
                                <div className="p-6 sticky top-6">
                                    {/* Form tìm kiếm */}
                                    <form action="#">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Enter your keywords..."
                                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 4.35z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>

                                    {/* Phần Category */}
                                    <div className="mt-20">
                                        <h3 className="text-lg font-semibold mb-4">Category</h3>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                                <span className="text-gray-700 font-medium">• Business</span>
                                                <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">10</span>
                                            </li>
                                            <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                                <span className="text-gray-700 font-medium">• Cleaning</span>
                                                <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">08</span>
                                            </li>
                                            <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                                <span className="text-gray-700 font-medium">• Consultant</span>
                                                <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">24</span>
                                            </li>
                                            <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                                <span className="text-gray-700 font-medium">• Creative</span>
                                                <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">37</span>
                                            </li>
                                            <li className="flex justify-between items-center border border-gray-200 rounded-md p-2">
                                                <span className="text-gray-700 font-medium">• Technology</span>
                                                <span className="bg-gray-100 text-gray-500 font-semibold text-sm rounded-full px-3 py-1">103</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Recent Post */}
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
                                        <div className="space-y-4">
                                            {/* Post 1 */}
                                            <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                                <img
                                                    src="image1.jpg"
                                                    alt="Business meeting 2021 in San Francisco"
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />
                                                <div>
                                                    <h4 className="text-gray-700 font-semibold">Business meeting 2021 in San Francisco</h4>
                                                    <p className="text-sm text-gray-500 flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7v2m4 8h8v2m-9-2h2V7m-4 0a9 9 0 110-18 9 9 0 0118 0 9 9 0 01-18 0zm4 0h4"
                                                            ></path>
                                                        </svg>
                                                        July 21, 2022
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Post 2 */}
                                            <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                                <img
                                                    src="image2.jpg"
                                                    alt="Developing privacy user-centric apps"
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />
                                                <div>
                                                    <h4 className="text-gray-700 font-semibold">Developing privacy user-centric apps</h4>
                                                    <p className="text-sm text-gray-500 flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7v2m4 8h8v2m-9-2h2V7m-4"
                                                            ></path>
                                                        </svg>
                                                        July 21, 2022
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Post 3 */}
                                            <div className="flex space-x-4 items-start border border-gray-200 rounded-md p-4">
                                                <img
                                                    src="image3.jpg"
                                                    alt="Starting and Growing Web Design in 2022"
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />
                                                <div>
                                                    <h4 className="text-gray-700 font-semibold">Starting and Growing Web Design in 2022</h4>
                                                    <p className="text-sm text-gray-500 flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7v2m4 8h8v2m-9-2h2V7m-4"
                                                            ></path>
                                                        </svg>
                                                        July 21, 2022
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="mt-20">
                                        <h3 className="text-lg font-semibold mb-4">Tags</h3>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Technology</span>
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Food</span>
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Personality</span>
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Life Style</span>
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Travel</span>
                                            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm border border-gray-300">Nature</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
};

export default BlogClassic;
