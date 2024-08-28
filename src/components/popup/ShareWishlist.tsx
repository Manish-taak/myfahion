"use client";

// components/Sharewishlist.tsx

import React, { useState, useRef, forwardRef } from "react";
import Icons from "@/icons/Index";
import { closepopup } from "@/interFaces/type";
import Link from "next/link";

/**
 * ShareWishlist component to handle sharing wishlist functionality.
 * 
 * @component
 * @param {Function} closepopup Function to close the popup
 * @param {React.RefObject<HTMLDivElement>} ref Reference to the component's DOM element
 * @returns {JSX.Element} ShareWishlist component JSX
 */
const ShareWishlist = forwardRef<HTMLDivElement, { closepopup: () => void }>(({ closepopup }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Function to handle copying the input value to clipboard
    const handleCopy = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand("copy");
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        }
    };

    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] w-full smalltab:max-w-[510px] ">
            <div className="p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full">
                {/* Header section */}
                <div className="flex flex-col gap-[10px] justify-between mb-[30px] items-start">
                    <div className="flex gap-[10px] items-center justify-between w-full border-b border-blue_gray_50 pb-[30px] mb-[30px]">
                        <h3 className="text-24 text-blue_gray_800">Share Wishlist To</h3>
                        <div className="cursor-pointer" onClick={closepopup}>
                            <Icons className="w-[23px] h-[24px]" type="popupclose" />
                        </div>
                    </div>
                    {/* Input section for sharing link */}
                    <div className="flex flex-col gap-3 relative">
                        <div className="flex gap-[6px] items-center border border-blue_gray_50 py-[12px] px-[14px]">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                className="outline-none border-none w-full"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <h2 className="text-light_primary text-nowrap cursor-pointer" onClick={handleCopy}>
                                Copy Link
                            </h2>
                            {copied && (
                                <span className="absolute right-[10px] top-[35px] bg-black text-white rounded-[10px] p-2">
                                    Copied!
                                </span>
                            )}
                        </div>
                        {/* Description text */}
                        <p className="text-16 text-blue_gray_200">
                            With this link users can edit or view your wishlist, invitation users can add items or remove.
                        </p>
                    </div>
                    {/* Social media share buttons */}
                    <div className="grid max-[500px] grid-cols-1 md:grid-cols-2 gap-5 pt-[30px] w-full">
                        <Link href={"https://www.facebook.com/"} target="_blank">
                            <button className="border w-full border-blue_gray_50 rounded-[6px] py-[14px] px-5 flex gap-2 text-16 text-blue_gray_300 hover:text-blue_gray_300 hover:bg-extra_4">
                                <Icons type="facebookblue" />
                                <span className="text-nowrap">Share on Facebook</span>
                            </button>
                        </Link>
                        <Link href={"https://www.google.com/"} target="_blank">
                            <button className="border border-blue_gray_50 w-full rounded-[6px] py-[14px] px-5 flex gap-2 text-16 text-blue_gray_300 hover:text-blue_gray_300 hover:bg-extra_4">
                                <Icons type="google" />
                                <span className="text-nowrap">Share on Google</span>
                            </button>
                        </Link>
                        <Link href={"https://twitter.com/"} target="_blank">
                            <button className="border border-blue_gray_50 rounded-[6px] py-[14px] px-5 flex gap-2 text-16 w-full text-blue_gray_300 hover:text-blue_gray_300 hover:bg-extra_4">
                                <Icons type="twiterblue" />
                                <span className="text-nowrap">Share on Twitter</span>
                            </button>
                        </Link>
                        <Link href={"https://mail.google.com/"} target="_blank">
                            <button className="border w-full border-blue_gray_50 rounded-[6px] py-[14px] px-5 flex gap-2 text-16 text-blue_gray_300 hover:text-blue_gray_300 hover:bg-extra_4">
                                <Icons type="mailoriginal" />
                                <span className="text-nowrap">Share Via Gmail</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ShareWishlist;
