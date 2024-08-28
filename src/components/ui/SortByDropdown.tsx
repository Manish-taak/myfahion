// Dropdown.tsx

import Icons from '@/icons/Index';
import { sortbydropdowntype } from '@/interFaces/type';
import { cn } from '@/utils/cn';
import React, { useState, useRef, useEffect } from 'react';

/**
 * SortByDropdown component provides a dropdown menu with customizable heading and content.
 * It toggles visibility of the dropdown menu and handles click events outside the dropdown to close it.
 * 
 * @param {sortbydropdowntype} props - Props object containing heading, children, className, arrowImageClass, and width.
 * @returns {JSX.Element} - SortByDropdown component UI.
 */
const SortByDropdown: React.FC<sortbydropdowntype> = ({ heading, children, className, arrowImageClass, width }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    /**
     * toggleDropdown function toggles the visibility of the dropdown menu.
     */
    const toggleDropdown = () => setIsOpen(!isOpen);

    /**
     * handleClickOutside function checks if a click event occurs outside the dropdown menu and closes it.
     * 
     * @param {MouseEvent} event - The mouse event object.
     */
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener to handle clicks outside the dropdown
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Set default dropdown width if width prop is undefined, otherwise use prop value
    const dropdownWidth = width === undefined ? 'w-[200px]' : `w-[${width}px]`;

    return (
        <div ref={dropdownRef} onClick={toggleDropdown} className={className}>
            <div className={` ${dropdownWidth} bg-white border-[1px] border-blue_gray_100 rounded-[4px] py-[14px] px-[18px] hover:bg-hf_extra flex justify-between items-center cursor-pointer`}>
                <span className="text-[18px] leading-[26px] font-normal text-blue_gray_400 capitalize truncate">
                    {heading}
                </span>
                <Icons
                    type='dropdownarrow'
                    className={cn(arrowImageClass, { 'rotate-180': isOpen, 'rotate-0': !isOpen }, 'transition-all duration-300 min-w-[18px]')} />
            </div>
            <div
                className={cn(
                    'top-[56px] shadow-2xl  w-[200px] rounded-[6px] py-[14px] px-[12px] z-[4] absolute bg-white transition-opacity duration-300',
                    {
                        'opacity-100': isOpen,
                        'opacity-0 z-[-1] invisible': !isOpen,
                    }
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default SortByDropdown;
