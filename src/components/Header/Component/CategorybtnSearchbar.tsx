import Dropdown from '@/components/ui/Dropdown';
import React, { Fragment, useRef, useState } from 'react'
import headerdata from "@/json/header.json"
import useOutsideClick from '@/lib/hooks/useOutsideclick ';
import Icons from '@/icons/Index';

/**
 * CategorybtnSearchbar component for displaying a search bar with category dropdown.
 * 
 * @returns {JSX.Element} CategorybtnSearchbar component JSX.
 */
const CategorybtnSearchbar = () => {
    // Ref for category dropdown menu
    const dropdownRefcateDropdown = useRef<HTMLDivElement>(null);

    // State for currently selected category and dropdown visibility
    const [category, setcategory] = useState("All Categories");
    const [allcateDropdown, setallcateDropdown] = useState(false);

    // Close dropdown when clicking outside of it
    useOutsideClick(dropdownRefcateDropdown, () => {
        setallcateDropdown(false);
    });

    return (
        <>
            {/* Category and search bar container */}
            <div
                ref={dropdownRefcateDropdown}
                className="hidden md:flex gap-[10px] relative max-w-[1089px] w-full bg-extra_bg h-[48px] rounded-l-[6px]">
                {/* Category dropdown */}
                <div className="rounded-l-[6px]" onClick={() => setallcateDropdown(!allcateDropdown)}>
                    <Dropdown
                        arrowimageclass={`${allcateDropdown === true ? "rotate-180" : "rotate-0"
                            }  transition-all duration-300 `}
                        onclick={true}
                        testclass=" whitespace-nowrap text-blue_gray_600 text_16_1 w-[100px]  truncate  "
                        className="gap-[6px] items-center  w-[152px] py-[13px] px-[12px]   text-blue_gray_600 bg-extra_4 rounded-l-[6px] "
                        image="dropdownarrow"
                        heading={category}
                    >
                        <div className={`shadow-2xl rounded-[10px] z-[1] relative duration-300 bg-white ${allcateDropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible"}`} >
                            <span className={`block w-5 h-5  absolute  bg-white  rotate-45 z-[1] top-[-9px] left-[61px]`}></span>
                            <ul
                                className="flex gap-[8px] flex-col  rounded-[4px] shadow-2xl p-4 absolute w-[200px] bg-white ">
                                {/* Render category items */}
                                {headerdata?.allcategoryList.map((item, index) => {
                                    return (
                                        <Fragment key={Date.now() + index}>
                                            <li
                                                onClick={() => {
                                                    setallcateDropdown(false)
                                                    setcategory(item.categoryName)
                                                }}
                                                className="p-[10px] hover:bg-hf_extra  hover:text-light_primary rounded-[4px] flex justify-between w-full text-blue_gray_500  gap-[10px] items-center " >
                                                <span className="">{item.categoryName}  </span>
                                            </li>
                                        </Fragment>
                                    );
                                })}
                            </ul>
                        </div>
                    </Dropdown>
                </div>
                {/* Search bar */}
                <form className="bg-extra_bg max-w-[857px] w-full">
                    <input
                        placeholder="Search Brands..."
                        className="outline-none text_16_2 pt-[12px] text-blue_gray_400 w-full bg-extra_bg"
                        type="search"
                        name="search"
                        id="search"
                    />
                </form>
                {/* Search button */}
                <div className="bg-light_primary flex justify-center items-center w-full max-w-[60px] rounded-r-[6px] cursor-pointer">
                    <Icons type="searchwhite" />
                </div>
            </div >
        </>
    );
};

export default CategorybtnSearchbar;
