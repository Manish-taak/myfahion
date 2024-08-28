"use client";

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
    endDate: string; // Props interface for endDate string
}

const CountTimerProducts: React.FC<CountdownTimerProps> = ({ endDate }) => {
    // Function to calculate time left until endDate
    const calculateTimeLeft = () => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // State to hold timeLeft object
    const [isClient, setIsClient] = useState(false); // State to track if component is rendered on client side

    useEffect(() => {
        setIsClient(true); // Set isClient to true once component mounts on client side

        // Update timeLeft every second using setInterval
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up setInterval on component unmount
        return () => clearInterval(timer);
    }, [endDate]); // Run effect whenever endDate prop changes

    // If component is not rendered on client side, return null
    if (!isClient) {
        return null;
    }

    // JSX to render countdown timer with hours, minutes, and seconds
    return (
        <div>
            <h4 className="text_16_2 flex flex-col gap-y-[6px] justify-center items-center md:flex-row text-blue_gray_700">
                Deals Ends In :
                <span className="text-light_secondary_shades_18p text_20 flex items-center ml-[14px] gap-x-[6px]">
                    {/* Display hours with leading zeros */}
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.hours).padStart(2, '0')[0]}
                    </span>
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.hours).padStart(2, '0')[1]}
                    </span>
                    :
                    {/* Display minutes with leading zeros */}
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.minutes).padStart(2, '0')[0]}
                    </span>
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.minutes).padStart(2, '0')[1]}
                    </span>
                    :
                    {/* Display seconds with leading zeros */}
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.seconds).padStart(2, '0')[0]}
                    </span>
                    <span className="bg-[rgba(2,167,125,0.08)] px-4 py-2 rounded-[6px]">
                        {String(timeLeft.seconds).padStart(2, '0')[1]}
                    </span>
                </span>
            </h4>
        </div>
    );
};

export default CountTimerProducts;
