"use client";

import { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Ralph Edwards",
      role: "UI/UX Designer",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      stars: 4,
    },
    {
      name: "Jerome Bell",
      role: "Web Designer",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      stars: 4,
    },
    {
      name: "Albert Flores",
      role: "Graphic Designer",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      stars: 4,
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      stars: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Giá trị mặc định là 3 cho Desktop

  // Cập nhật số lượng cards hiển thị dựa trên kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1); // Mobile
      else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet
      else setCardsToShow(3); // Desktop
    };

    handleResize(); // Kiểm tra kích thước ngay khi component được gắn vào
    window.addEventListener("resize", handleResize);

    // Cleanup listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Tính toán các testimonial được hiển thị
  const displayedTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  return (
    <div
      className="w-full h-max mx-auto px-8 py-10 min-h-[682px] flex flex-col items-center justify-start"
      style={{
        backgroundImage:
          "url('img/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-[50px] mt-16">
        <h2 className="text-xl font-semibold uppercase text-white bg-gray-800 p-2 inline-block rounded">
          Testimonials
        </h2>
        <h1 className="text-5xl font-bold text-white">Client Feedback</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`furniture-testimonial__item bg-white p-10 ${
              index === 0 ? "active" : ""
            }`}
          >
            <div className="ft-head flex items-center mb-5 justify-between">
              <div className="ft-info flex-grow">
                <div className="fs-rating flex">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < testimonial.stars ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h5 className="font-semibold">{testimonial.name}</h5>
                <span className="text-gray-500">{testimonial.role}</span>
              </div>
              <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_276_28)">
                  {/* SVG Content */}
                </g>
              </svg>
            </div>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={prevTestimonial}
          className="flex items-center justify-center w-12 h-12 border border-[#B29A80] rounded-full hover:bg-[#B29A80] transition-all duration-300"
        >
          <i className="fas fa-chevron-left text-[#B29A80] hover:text-white" />
        </button>

        <button
          onClick={nextTestimonial}
          className="flex items-center justify-center w-12 h-12 border border-[#B29A80] rounded-full hover:bg-[#B29A80] transition-all duration-300"
        >
          <i className="fas fa-chevron-right text-[#B29A80] hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
