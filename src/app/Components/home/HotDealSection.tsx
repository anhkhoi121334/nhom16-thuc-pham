"use client";
import Image from 'next/image';

const HotDealSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-[#f5f1e6] flex items-center justify-end">
        <div className="bg-[#b18b5e] p-12 mr-8 flex justify-center mt-4">
          <div className="bg-[#b18b5e] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 border border-white max-w-[520px]">
            <h2 className="text-white text-sm mb-2">HOT DEAL FURNITURE</h2>
            <h1 className="text-white text-4xl font-bold mb-4">Live Furniture</h1>
            <h1 className="text-white text-4xl font-bold mb-4">Your Love</h1>
            <button className="bg-white text-[#000000] font-bold px-8 py-4 mt-4 hover:scale-105 transition-transform duration-300">
              BUY NOW <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
        <Image
          alt="Living room with a green sofa, a coffee table, and a side table with books"
          className="w-full h-full object-cover"
          height={540}
          src="/img/bg-image.png" // Đường dẫn bắt đầu từ thư mục public
          width={960}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg">
          <h3 className="text-black text-lg font-bold">Dining Table</h3>
          <div className="flex items-center mb-2">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-gray-300"></i>
            <i className="fas fa-star text-gray-300"></i>
          </div>
          <p className="text-[#B18B5E] text-lg">USD 190.00</p>
        </div>
      </div>
    </div>
  );
};

export default HotDealSection;
