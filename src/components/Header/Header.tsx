"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Dropdowns from "./Component/Dropdowns";
import BottomTabs from "./Component/BottomTabs";
import CategorybtnSearchbar from "./Component/CategorybtnSearchbar";
import CountryLanguageDropdown from "./Component/CountryLanguageDropdown";
import HeaderIcons from "./Component/HeaderIcons";
import Icons from "@/icons/Index";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import ItemAdded from "../popup/ItemAdded";
import SideBar from "../SideBar";
import Overlay from "../ui/Overlay";

/**
 * Header component representing the top navigation bar of the application.
 * Manages state for popup visibility, sidebar toggle, and scroll effects.
 * Fetches and displays cart and wishlist item counts from local storage.
 * 
 * @component
 * @returns {JSX.Element} Header component JSX.
 */
const Header = () => {
    const [findAddresspopup, setfindAddresspopup] = useState(false); // State for controlling find address popup visibility
    const [sidebar, setsidebar] = useState(false); // State for controlling sidebar visibility
    const [showOverlay, setshowOverlay] = useState(false); // State for controlling overlay visibility

    const popupRef = useRef<HTMLDivElement>(null); // Ref for the find address popup

    const [cartitem, setCartitem] = useState<number>(0); // State for storing cart item count
    const [wishitem, setWishitem] = useState<number>(0); // State for storing wishlist item count

    /**
     * Closes the find address popup and overlay.
     */

    const closepopup = () => {
        setshowOverlay(false); // Close overlay
        setfindAddresspopup(false); // Close find address popup
    };

    useOutsideClick(popupRef, closepopup); // Custom hook to handle clicks outside of the popup

    /**
     * Fetches cart and wishlist item counts from local storage on component mount.
     */
    useEffect(() => {
        const cartlistitem = localStorage.getItem("cartitem"); // Retrieve cart item count from localStorage
        const wishlistitem = localStorage.getItem("wishlist"); // Retrieve wishlist item count from localStorage

        if (wishlistitem) {
            setWishitem(parseInt(wishlistitem, 10)); // Parse and set wishlist item count
        }

        if (cartlistitem) {
            setCartitem(parseInt(cartlistitem, 10)); // Parse and set cart item count
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount



    // Scroll Effect / Header
    const [isScrolledDown, setIsScrolledDown] = useState(false); // State to track scroll direction

    useEffect(() => {
        let lastScrollTop = 0;

        /**
         * Handles scroll events to determine if the user is scrolling up or down.
         */
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position
            if (currentScrollTop > lastScrollTop) {
                setIsScrolledDown(true); // Downscroll
            } else {
                setIsScrolledDown(false); // Upscroll
            }

            lastScrollTop = currentScrollTop; // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup: Remove scroll event listener
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>
            {showOverlay && <Overlay isOpen={true} />} {/* Render overlay if showOverlay state is true */}
            {findAddresspopup && <ItemAdded closepopup={closepopup} ref={popupRef} />} {/* Render ItemAdded popup if findAddresspopup state is true */}
            <header
                className={cn`fixed shadow-md top-0 left-0 w-full pt-[20px] md:pt-[30px] pb-[20px] bg-white border-b border-gray-200 transition-transform duration-300 z-50 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                <div className="tab:hidden">
                    <SideBar setsidebar={setsidebar} sidebar={sidebar} /> {/* Render Sidebar component */}
                </div>
                <div className="container">
                    <div className="flex gap-[15px] lg:gap-[40px] xl:gap-[10px] 2xl:m-auto justify-between md:border-blue_gray_50 tab:border-b-[2px] md:pb-[14px] mb-[20px] md:mb-[14px_!important] items-center">
                        <Link href="/">
                            <Icons type="mainlogo" className="min-h-[36px]" /> {/* Render main logo icon with link to homepage */}
                        </Link>
                        {/* Category button and search bar */}
                        <CategorybtnSearchbar />
                        {/* Category button and search bar */}

                        {/* Cart, Wishlist, and Login icons */}
                        <HeaderIcons wishitem={wishitem} cartitem={cartitem} />
                        {/* Cart, Wishlist, and Login icons */}

                        <div className="tab:hidden" onClick={() => setsidebar(true)}>
                            <Icons type="togglebar" /> {/* Render toggle sidebar icon */}
                        </div>
                    </div>
                    <form className="tab:hidden flex gap-[6px] py-[12px] items-center px-[14px] border-[1px] border-blue_gray_50 rounded-[6px]">
                        <Icons type="search" className="tab:hidden" /> {/* Render search icon */}
                        <input
                            className="text-blue_gray_400 text_16_2 w-full outline-none border-none"
                            type="search"
                            placeholder="Search Brands..."
                            name=""
                            id=""
                        /> {/* Input field for searching brands */}
                    </form>
                    <div className="hidden tab:flex xl:gap-[40px] lg:gap-[20px] gap-[7px]">
                        {/* Dropdowns for Men, Women, and Kids */}
                        <Dropdowns />
                        {/* Dropdowns for Men, Women, and Kids */}

                        <div onClick={() => { setfindAddresspopup(!findAddresspopup); setshowOverlay(true) }} className="flex gap-[6px] whitespace-nowrap cursor-pointer p-[2px] items-center max-w-[115px] w-full">
                            <Icons type="location" className="fill-blue_gray_400" />
                            <h3 className="text_14_1 text-blue_gray_400">Find Address</h3>
                        </div>
                        <CountryLanguageDropdown /> {/* Render Country and Language dropdown */}
                    </div>
                </div>
            </header>
            {/* Bottom tabs */}
            <BottomTabs /> {/* Render BottomTabs component */}
        </>
    );
};

export default Header;
