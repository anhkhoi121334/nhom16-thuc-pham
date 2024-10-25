"use client";

import { useEffect, useState } from "react";

const AdCards = () => {
  // State cho timer
  const [time, setTime] = useState({
    days: 72,
    hours: 22,
    minutes: 57,
    seconds: 21,
  });

  // Hàm đếm ngược
  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="container mx-auto p-4 my-16">
      <div className="grid grid-cols-1 md:grid-cols-[2.3fr_1.7fr] gap-6 mx-auto max-w-7xl">
        {/* Left Card */}
        <div
          className="relative bg-cover bg-center min-h-[400px]"
          style={{ backgroundImage: "url('img/ad-discount.png')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative p-10 text-white border border-[#ffffff] w-full h-full flex flex-col justify-center">
              <h2 className="text-lg font-semibold">HOT DEAL FURNITURE</h2>
              <h1 className="text-5xl font-bold mt-4">Furniture Limit Offer</h1>
              <h3 className="text-4xl font-bold mt-4 mb-4">30% Off</h3>
              <button className="mt-6 px-6 py-3 text-white font-semibold border border-white hover:border-transparent hover:bg-[#B18B5E] duration-300 ease-in-out transition w-40">
                BUY NOW <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="relative bg-cover bg-center min-h-[400px]"
          style={{ backgroundImage: "url('img/ad-timer.png')" }}
        >
          <div className="relative h-full flex items-center justify-center p-10 text-white">
            <div className="relative p-10 text-white border border-[#ffffff] w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold text-center">
                HOT DEAL FURNITURE
              </h2>
              <h1 className="text-4xl font-bold mt-4 text-center">
                Deals Of The Week
              </h1>
              <div className="flex space-x-6 mt-6">
                <div className="text-center">
                  <div id="days" className="text-5xl font-bold">
                    {time.days}
                  </div>
                  <div className="text-lg mt-2">DAYS</div>
                </div>
                <div className="text-center">
                  <div id="hours" className="text-5xl font-bold">
                    {time.hours}
                  </div>
                  <div className="text-lg mt-2">HRS</div>
                </div>
                <div className="text-center">
                  <div id="minutes" className="text-5xl font-bold">
                    {time.minutes}
                  </div>
                  <div className="text-lg mt-2">MINS</div>
                </div>
                <div className="text-center">
                  <div id="seconds" className="text-5xl font-bold">
                    {time.seconds}
                  </div>
                  <div className="text-lg mt-2">SECS</div>
                </div>
              </div>
              <button className="mt-6 px-8 py-3 text-white font-semibold border border-white hover:bg-[#B18B5E] hover:border-transparent duration-300 ease-in-out transition">
                BUY NOW <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCards;
