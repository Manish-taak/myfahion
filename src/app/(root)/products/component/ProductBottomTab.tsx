import Icons from '@/icons/Index';
import { ProductBottomTabtype } from '@/interFaces/type';
import Link from 'next/link';
import React, { useState } from 'react';


/**
 * Product bottom tab component for filtering, grid view, and sorting functionality.
 * @param {ProductBottomTabtype} props - Props for configuring the component.
 * @param {boolean} props.grid - Current grid view state.
 * @param {function} props.setgrid - Function to toggle grid view.
 * @param {boolean} props.filter - Current filter state.
 * @param {function} props.setfilter - Function to toggle filter.
 * @param {boolean} props.sortby - Current sort by state.
 * @param {function} props.setsortby - Function to toggle sort by.
 * @returns {JSX.Element} ProductBottomTab component JSX.
 */


const ProductBottomTab = ({ grid, setgrid, filter, setfilter, sortby, setsortby }: ProductBottomTabtype) => {
    const [activeButton, setActiveButton] = useState(2);

    /**
     * Handles click on tab buttons and updates the active state.
     * @param {number} buttonNumber - The number representing the button clicked.
     * @returns {void}
     */
    const handleClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    return (
        <div className="items-center tab:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px] fixed z-[99] bottom-0 w-[95%] left-[50%] right-0 transform translate-x-[-50%] py-[6px]">
            {/* Filter Button */}
            <div className="flex flex-col justify-center items-center py-[10px]">
                <div
                    onClick={() => {
                        handleClick(1);
                        setfilter(!filter);
                    }}
                    className={`btn ${activeButton === 1 ? "active" : ""} pb-[1px] btn py-[10px] flex flex-row-reverse w-[95px] gap-[10px] justify-center items-center`}
                >
                    <Icons type={"filter"} fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"} />
                    <Link href="#" className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"} `}>
                        Filter By
                    </Link>
                </div>
                <span className={`${activeButton === 1 ? "border-[1px] border-light_primary" : "border-blue_gray_900 border-[1px] "} w-[10px] h-[1px]`} />
            </div>

            {/* Grid View Button */}
            <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]" />

            <div className="flex flex-col justify-center items-center py-[10px]">
                <div
                    onClick={() => {
                        handleClick(2);
                        setgrid(!grid);
                    }}
                    className={`btn ${activeButton === 2 ? "active" : ""} pb-[1px] btn py-[10px] flex flex-row-reverse w-[95px] gap-[10px] justify-center items-center`}
                >
                    <Icons type={grid === true ? "gridrow" : "gridcol"} fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"} />
                    <Link href="#" className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"} `}>
                        Grid View
                    </Link>
                </div>
                <span className={`${activeButton === 2 ? "border-[1px] border-light_primary" : "border-blue_gray_900 border-[1px] "} w-[10px] h-[1px]`} />
            </div>

            {/* Sort By Button */}

            <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]" />

            <div className="flex flex-col justify-center items-center py-[10px]">
                <div
                    onClick={() => {
                        handleClick(3);
                        setsortby(!sortby);
                    }}
                    className={`btn ${activeButton === 3 ? "active" : ""} pb-[1px] btn py-[10px] flex flex-row-reverse w-[95px] gap-[10px] justify-center items-center`}
                >
                    <Icons type={"sortby"} fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"} />
                    <Link href="#" className={`text_10 ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"} `}>
                        Sort By
                    </Link>
                </div>
                <span className={`${activeButton === 3 ? "border-[1px] border-light_primary" : "border-blue_gray_900 border-[1px] "} w-[10px] h-[1px]`} />
            </div>
        </div>
    );
};

export default ProductBottomTab;
