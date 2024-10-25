"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const productItems = [
    {
      id: 1,
      imgSrc: "/img/product/product1.png", // Đường dẫn từ thư mục public
      name: "Alexander Sofa 1",
      price: "USD 150.00",
      discount: "10% Off",
    },
    {
      id: 2,
      imgSrc: "/img/product/product2.png",
      name: "Alexander Sofa 2",
      price: "USD 150.00",
      discount: "10% Off",
    },
    {
      id: 3,
      imgSrc: "/img/product/product3.png",
      name: "Alexander Sofa 3",
      price: "USD 150.00",
      discount: "10% Off",
    },
    {
      id: 4,
      imgSrc: "/img/product/product4.png",
      name: "Alexander Sofa 4",
      price: "USD 150.00",
      discount: "10% Off",
    },
  ];

  const totalProducts = productItems.length;

  // Xác định số sản phẩm hiển thị dựa trên kích thước màn hình
  const updateVisibleCount = () => {
    if (window.innerWidth < 640) {
      setVisibleCount(1); // Mobile
    } else if (window.innerWidth < 1024) {
      setVisibleCount(2); // Tablet
    } else {
      setVisibleCount(4); // Desktop
    }
  };

  // Hiển thị các sản phẩm tương ứng với visibleCount
  const visibleProducts = () => {
    return productItems.slice(currentIndex, currentIndex + visibleCount);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % totalProducts);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - visibleCount + totalProducts) % totalProducts);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-8 p-2 space-y-6">
        <span className="bg-[#B18B5E26] text-1xl font-bold text-[#B18B5E] p-1">
          TOP SALE
        </span>
        <h2 className="text-6xl font-bold">Featured Product</h2>
      </div>
      <div
        id="product-slider"
        className="flex justify-center items-center space-x-4 overflow-hidden"
      >
        <button
          id="prevBtn1"
          className="flex items-center justify-center w-16 h-16 border border-[#B29A80] bg-white rounded-full hover:bg-[#B29A80] transition duration-300"
          onClick={handlePrev}
        >
          <i className="fas fa-chevron-left text-[#B29A80] hover:text-white text-2xl"></i>
        </button>

        {visibleProducts().map((product) => (
          <div
            key={product.id}
            className="product-item overflow-hidden transition-shadow duration-300 relative"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-yellow-400 text-white text-xs font-semibold py-1 px-2 rounded">
                {product.discount}
              </span>
            </div>
            <div className="product-thumb bg-[#f5f1e6] relative p-[80px] overflow-hidden max-w-[370px] mx-auto group">
              <a href="#" className="relative group">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={370}
                  height={370}
                  style={{ objectFit: 'cover' }}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              {/* Các nút hành động */}
              <div className="product-action-item flex justify-center absolute left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-x-8">
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
                  </button>
                </div>
              </div>
            </div>
            <div className="product-content p-4">
              <h4 className="text-lg font-bold mb-1">
                <a href="#" className="text-inherit hover:text-[#b18b5e]">
                  {product.name}
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
                {product.price}
              </span>
            </div>
          </div>
        ))}

        <button
          id="nextBtn1"
          className="flex items-center justify-center w-16 h-16 border border-[#B29A80] bg-white rounded-full hover:bg-[#B29A80] transition duration-300"
          onClick={handleNext}
        >
          <i className="fas fa-chevron-right text-[#B29A80] hover:text-white text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
