"use client";
import { useState, useEffect } from 'react';
import ProductSlider from './ProductSlider';
import HotDealSection from './HotDealSection';
import TopFeatures from './TopFeatures';
import TrendyCollection from './TrendyCollection';
import AdCards from './AdCards';
import Testimonials from './Testimonials';
import BestSellers from './BestSellers';
import InfoCards from './InfoCards';
import BlogSection from './BlogPostProps';
import BrandSection from './BrandSection';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Homes = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Elevate Your Home Aesthetics",
      description: "A furniture e-commerce company operates in the digital space, offering a wide range of furniture products for sale through an online platform.",
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/banner/chair1.png",
    },
    {
      id: 2,
      title: "Enhance Your Living Room",
      description: "Get the best deals on modern furniture for your living room.",
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/banner/chair2.png",
    },
    {
      id: 3,
      title: "Modernize Your Space",
      description: "Find top-rated furniture items for a contemporary look.",
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/banner/chair3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white text-gray-800 mt-8">
      {/* Slider */}
      <div className="relative w-full h-[800px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/banner/bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgb(245, 241, 230)',
            }}
          >
            <div className="container mx-auto pt-16 pb-16 flex flex-col lg:flex-row items-center justify-between">
              {/* Nội dung văn bản */}
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0 px-4">
                <span className="text-[#B29A80] text-lg font-semibold">NEW ARRIVAL...</span>
                <h2 className="text-4xl font-extrabold leading-tight mt-4">{slide.title}</h2>
                <p className="text-lg text-[#333] mt-4">{slide.description}</p>
                <div className="mt-6 flex space-x-4">
                  <button className="bg-[#B29A80] text-white px-6 py-3 border border-[#B29A80] hover:bg-[#F5F1E6] hover:border-[#B29A80] hover:text-[#B29A80] transition-all duration-300 ease-in-out">
                    Buy Now <i className="fas fa-angle-right"></i>
                  </button>
                  <button className="border border-[#B29A80] text-[#B29A80] px-6 py-3 hover:bg-[#B29A80] hover:text-white transition-all duration-300 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>

              {/* Hình ảnh ghế và hình tròn */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                {/* Hình tròn phía sau */}
                <div className="absolute top-0 right-0 w-full h-full z-0 hidden lg:block">
                  <img
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/ecommerce-html-template-2024-03-12-18-03-53-utc/addina/assets/imgs/furniture/banner/circle.png"
                    alt="Hình tròn"
                    className="max-w-full h-auto"
                  />
                </div>

                {/* Hình ảnh ghế */}
                <img
                  src={slide.image}
                  alt="Ghế"
                  className="max-w-full h-auto z-10 relative"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#B29A80]' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Các thành phần khác */}
      <TopFeatures />
      <ProductSlider />
      <HotDealSection />
      <TrendyCollection />
      <AdCards />
      <Testimonials />
      <BestSellers />
      <BlogSection />
      <InfoCards />
      <BrandSection />
    </div>
  );
};

export default Homes;
