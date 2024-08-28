"use client";

import Icons from '@/icons/Index';
import Link from 'next/link';
import React, { useState } from 'react';

/**
 * BottomTabs component for displaying a fixed bottom navigation bar with icons and links.
 * 
 * @returns {JSX.Element} BottomTabs component JSX.
 */
const BottomTabs = () => {
    // Initialize state for active button and define click handler to update it
    const [activeButton, setActiveButton] = useState(2);

    /**
     * Handles click on bottom tab buttons.
     * 
     * @param {number} buttonNumber - Number representing the button clicked.
     */
    const handleClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    return (
        <>
            {/* Bottom navigation bar */}
            <div className="items-center md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px] fixed z-40 bottom-0 w-[95%] left-[50%] right-0 transform translate-x-[-50%] py-[6px]">
                {/* Home tab */}
                <div
                    onClick={() => handleClick(1)}
                    className={`btn ${activeButton === 1 ? "active" : ""} pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
                >
                    <Icons
                        type={"home"}
                        fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}
                    />
                    <Link href="/" className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
                        Home
                    </Link>
                    <span className={`${activeButton === 1 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900 border-[1px] w-[10px] h-[1px]"}`} />
                </div>
                {/* Separator */}
                <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]" />

                {/* My Wishlist tab */}
                <div
                    onClick={() => handleClick(2)}
                    className={`btn ${activeButton === 2 ? "active" : ""} pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
                >
                    <Icons
                        type={"heart"}
                        fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"}
                    />
                    <Link href="/wishlist" className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
                        My Wishlist
                    </Link>
                    <span className={`${activeButton === 2 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900 border-[1px] w-[10px] h-[1px]"}`} />
                </div>
                {/* Separator */}
                <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]" />

                {/* My Cart tab */}
                <div
                    onClick={() => handleClick(3)}
                    className={`btn ${activeButton === 3 ? "active" : ""} pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
                >
                    <Icons
                        type={"cartcarry"}
                        fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"}
                    />
                    <Link href="/cart" className={`text_10 ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
                        My Cart
                    </Link>
                    <span className={`${activeButton === 3 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900 border-[1px] w-[10px] h-[1px]"}`} />
                </div>
                {/* Separator */}
                <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]" />

                {/* Login tab */}
                <div
                    onClick={() => handleClick(4)}
                    className={`btn ${activeButton === 4 ? "active" : ""} pb-[1px] btn w-[71px] flex flex-col gap-[1px] justify-center items-center`}
                >
                    <Icons
                        type={"loginavtar"}
                        fill={activeButton === 4 ? "#F57E5D" : "#FFFFFF"}
                    />
                    <Link href="/login" className={`text_10 ${activeButton === 4 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
                        Login
                    </Link>
                    <span className={`${activeButton === 4 ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900 border-[1px] w-[10px] h-[1px]"}`} />
                </div>
            </div>
        </>
    );
};

export default BottomTabs;
