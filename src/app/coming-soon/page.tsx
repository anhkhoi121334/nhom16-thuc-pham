// pages/index.tsx
"use client";
import { useEffect, useRef } from 'react';

const Countdown = () => {
    // Create refs for each time unit
    const daysRef = useRef<HTMLSpanElement | null>(null);
    const hoursRef = useRef<HTMLSpanElement | null>(null);
    const minutesRef = useRef<HTMLSpanElement | null>(null);
    const secondsRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        // Countdown Timer Function
        const countdown = () => {
            const countDate = new Date("October 31, 2024 00:00:00").getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(gap / day);
            const hours = Math.floor((gap % day) / hour);
            const minutes = Math.floor((gap % hour) / minute);
            const seconds = Math.floor((gap % minute) / second);

            // Update the ref elements safely
            if (daysRef.current) daysRef.current.innerText = days.toString();
            if (hoursRef.current) hoursRef.current.innerText = hours.toString();
            if (minutesRef.current) minutesRef.current.innerText = minutes.toString();
            if (secondsRef.current) secondsRef.current.innerText = seconds.toString();
        };

        const intervalId = setInterval(countdown, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="bg-teal-800 text-white flex justify-center items-center h-screen" style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c46b206a563e77b6410e542f079f1dad?rik=L4rO%2fQrqUuJ0fg&pid=ImgRaw&r=0')", backgroundPosition: 'center' }}>
            <div className="text-center bg-white bg-opacity-30 p-16 shadow-lg w-10/12">
                <h1 className="text-5xl font-bold mb-10">We Are Coming Very Soon</h1>
                <div className="flex justify-center space-x-12 text-6xl font-bold mb-10">
                    <div className="flex flex-col items-center">
                        <span ref={daysRef}>00</span>
                        <span className="text-lg">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span ref={hoursRef}>00</span>
                        <span className="text-lg">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span ref={minutesRef}>00</span>
                        <span className="text-lg">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span ref={secondsRef}>00</span>
                        <span className="text-lg">Seconds</span>
                    </div>
                </div>
                <a href="#" className="bg-yellow-600 text-white py-3 px-8 text-2xl rounded hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600 hover:backdrop-blur-md transition duration-300 ease-in-out border border-transparent">
                    Get In Touch
                </a>
            </div>
        </div>
    );
};

export default Countdown;
