"use client";

import Dropdown from '@/components/ui/Dropdown';
import React, { Fragment, useRef, useState } from 'react';
import headerdata from "@/json/header.json";
import Image from 'next/image';
import useOutsideClick from '@/lib/hooks/useOutsideclick ';

/**
 * CountryLanguageDropdown component for displaying dropdowns to select currency and language.
 * 
 * @returns {JSX.Element} CountryLanguageDropdown component JSX.
 */
const CountryLanguageDropdown = () => {
  // State for currency and language selection, with dropdown refs and outside click handlers
  const [currency, setcurrency] = useState("$ USD");
  const [language, setlanguage] = useState("eng");

  // State for dropdown visibility
  const [centurydropdown, setcenturydropdown] = useState(false);
  const [languagedropdown, setlanguagedropdown] = useState(false);

  // Refs for dropdown menus
  const dropdownReflanguagedropdown = useRef<HTMLDivElement>(null);
  const dropdownRefcenturydropdown = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useOutsideClick(dropdownReflanguagedropdown, () => {
    setlanguagedropdown(false);
  });

  // Close century dropdown when clicking outside
  useOutsideClick(dropdownRefcenturydropdown, () => {
    setcenturydropdown(false);
  });

  return (
    <>
      <div className="flex xl:gap-[10px] w-full max-w-[172px] items-center justify-end">
        {/* Currency dropdown */}
        <div
          ref={dropdownRefcenturydropdown}
          onClick={() => { setcenturydropdown(!centurydropdown); setlanguagedropdown(false) }}
          className="rounded-l-[6px]"
        >
          <Dropdown
            arrowimageclass={`${centurydropdown === true ? "rotate-180" : "rotates-0"
              } transition-all duration-300 `}
            onclick={true}
            arrow="top-[-11px] right-[51px] "
            className="gap-[6px] items-center py-[6px] px-[8px]"
            testclass="text-blue_gray_500 text_12_1"
            image="dropdownarrow"
            heading={currency}
          >
            {/* Currency dropdown content */}
            <div
              className={`z-[1] relative duration-300 ${centurydropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible"
                }`}
            >
              <ul className="rounded-[8px] shadow-2xl flex gap-[8px] left-[-110px] top-[12px] py-[12px] px-[10px] bg-white w-[200px] flex-col absolute">
                <span
                  className={`block w-5 h-5 absolute bg-white rotate-45 z-[1] top-[-9px] right-[42px]`}
                ></span>
                {/* Render currency items */}
                {headerdata?.centuryList?.map((item, index) => (
                  <Fragment key={Date.now() + index}>
                    <li onClick={() => setcurrency(item.century)} className="p-[10px] group rounded-[4px] flex justify-between w-full gap-[10px] items-center truncate">
                      <span className="text_14_3 bg-hf_extra group-hover:text-light_primary text-blue_gray_300">
                        {item.century}
                      </span>
                      <Image width={28} height={20} src={`/images/${item.image}`} alt="currency" />
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </Dropdown>
        </div>
        <span className="border-[1px] border-blue_gray_100 h-[20px]"></span>
        {/* Language dropdown */}
        <div
          ref={dropdownReflanguagedropdown}
          onClick={() => { setlanguagedropdown(!languagedropdown); setcenturydropdown(false) }}
          className="rounded-l-[6px]"
        >
          <Dropdown
            arrowimageclass={`${languagedropdown === true ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
            onclick={true}
            arrow="top-[-11px] right-[51px] "
            className="gap-[6px] items-center py-[6px] px-[8px] uppercase"
            testclass="text-blue_gray_500 text_12_1"
            image="dropdownarrow"
            heading={language}
          >
            {/* Language dropdown content */}
            <div
              className={`z-[1] relative duration-300 ${languagedropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible"
                }`}
            >
              <ul className="rounded-[8px] shadow-2xl flex gap-[8px] top-[12px] bg-white left-[-127px] w-[200px] flex-col absolute px-[10px] py-[12px]">
                <span
                  className={`block w-5 h-5 absolute bg-white rotate-45 z-[1] top-[-9px] right-[42px]`}
                ></span>
                {/* Render language items */}
                {headerdata?.language?.map((item, index) => (
                  <Fragment key={Date.now() + index}>
                    <li onClick={() => { setlanguage(item.language) }} className="p-[10px] hover:bg-hf_extra group rounded-[4px] flex justify-between w-full gap-[10px] items-center">
                      <span className="text-blue_gray_300 group-hover:text-light_primary text_14_3">
                        {item.language}
                      </span>
                      <Image
                        width={28}
                        height={20}
                        src={`/images/${item.image}`}
                        alt="language"
                      />
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default CountryLanguageDropdown;
