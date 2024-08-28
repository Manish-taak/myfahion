// components/ScrollToTop.tsx
"use client";

import Icons from '@/icons/Index';
import React, { useEffect, useState } from 'react';

/**
 * ScrollEffect component manages the visibility of a scroll-to-top button and handles scrolling functionality.
 * It listens to the scroll event and displays a button when the user scrolls down a certain amount.
 * Clicking the button scrolls the page to the top smoothly.
 * 
 * @returns {JSX.Element} - ScrollEffect component UI.
 */
const ScrollEffect: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    /**
     * toggleVisibility function toggles the visibility of the scroll-to-top button based on scroll position.
     */
    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight * 0.12) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    /**
     * scrollToTop function scrolls the window to the top of the page smoothly when triggered.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            // Clean up scroll event listener when component unmounts
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div>
            {/* Render the scroll-to-top button when isVisible state is true */}
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="fixed bottom-[70px] md:bottom-5 right-5 p-3 rounded-full bg-light_primary z-[20] text-white shadow-md hover:bg-light_primary transition"
                >
                    <Icons type='downicon' />
                </button>
            )}
        </div>
    );
};

export default ScrollEffect;
