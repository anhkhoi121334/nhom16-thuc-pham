"use client";
import Image from 'next/image';

const TrendyCollection = () => {
  return (
    <div className="container mx-auto mt-14">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center flex-col md:flex-row">
        <div className="mr-8 mb-4 md:mb-0">
          <span className="bg-[#F5F1E6] text-[#B18B5E] px-4 py-2 text-sm font-semibold">
            THIS MONTH
          </span>
          <h1 className="text-5xl font-bold mt-4">Trendy Collection</h1>
        </div>
        <div
          className="bd-product__filter-style furniture-trendy__tab nav nav-tabs flex flex-wrap"
          role="tablist"
        >
          <button className="nav-link relative text-gray-700 font-semibold px-4 py-2 transition-colors duration-300 flex items-center mr-2 mb-2">
            <span className="absolute -top-2 -right-2 bg-[#B18B5E] text-white text-xs font-bold py-1 px-2 rounded-full">
              8
            </span>
            All Collection
            <span className="border-b-2 border-b-[#b18b5e] w-full absolute bottom-0 left-0 transition-all duration-300"></span>
          </button>
          <button className="nav-link text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors duration-300 mr-2 mb-2">
            New In
          </button>
          <button className="nav-link text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors duration-300 mr-2 mb-2">
            Top Rated
          </button>
          <button className="nav-link text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors duration-300 mr-2 mb-2">
            Tensing Items
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Product Card */}
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="product-item overflow-hidden transition-shadow duration-300 relative mb-4"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-yellow-400 text-white text-xs font-semibold py-1 px-2 rounded">
                  10% off
                </span>
              </div>

              {/* Product Image */}
              <div className="product-thumb bg-[#f5f1e6] relative p-4 sm:p-8 lg:p-10 pb-8 overflow-hidden max-w-[500px] mx-auto group">
                <a href="product-details.html" className="relative group">
                <Image
                    src="/img/product/product1.png" // Đường dẫn từ thư mục public
                    alt="Product Image"
                    width={500} // Chiều rộng
                    height={500} // Chiều cao
                    style={{ objectFit: 'cover' }}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Product Action Buttons */}
                  <div className="product-action-item flex justify-center absolute bottom-[-20px] left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-x-8">
                    {/* Add to Cart Button */}
                    <div className="relative">
                      <button
                        type="button"
                        className="product-action-btn relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md text-sm md:text-base"
                      >
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 21 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.0625 10.6C14.0625 12.5883 12.4676 14.2 10.5 14.2C8.53243 14.2 6.9375 12.5883 6.9375 10.6M1 5.8H20M1 5.8V13C1 20.6402 2.33946 22 10.5 22C18.6605 22 20 20.6402 20 13V5.8M1 5.8L2.71856 2.32668C3.12087 1.5136 3.94324 1 4.84283 1H16.1571C17.0568 1 17.8791 1.5136 18.2814 2.32668L20 5.8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[10px] sm:text-[12px] md:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100 whitespace-nowrap">
                          Add to Cart
                        </span>
                      </button>
                    </div>

                    {/* Quick View Button */}
                    <div className="relative">
                      <button
                        type="button"
                        className="product-action-btn relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md text-sm md:text-base"
                      >
                        <i className="fa-solid fa-eye text-white"></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[10px] sm:text-[12px] md:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100">
                          Quick View
                        </span>
                      </button>
                    </div>

                    {/* Wishlist Button */}
                    <div className="relative">
                      <button
                        type="button"
                        className="product-action-btn relative flex justify-center items-center w-10 h-10 bg-[#b18b5e] border-none rounded-full shadow-md text-sm md:text-base"
                      >
                        <i className="fa-regular fa-heart text-white"></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 font-medium text-[10px] sm:text-[12px] md:text-[14px] text-white bg-black inline-block min-w-[100px] text-center leading-none py-1 px-2 rounded opacity-0 transition-opacity duration-200 hover:opacity-100 whitespace-nowrap">
                          Add to Wishlist
                        </span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>

              {/* Product Details */}
              <div className="product-content p-4">
                <h4 className="text-lg font-bold mb-1">
                  <a href="#" className="text-inherit hover:text-[#b18b5e]">
                    Alexander Sofa
                  </a>
                </h4>
                <div className="flex items-center mb-1">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-gray-300"></i>
                  <i className="fas fa-star text-gray-300"></i>
                </div>
                <span className="text-lg text-[#b18b5e] font-medium">
                  USD 150.00
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendyCollection;
