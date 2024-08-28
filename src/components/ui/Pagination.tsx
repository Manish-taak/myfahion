import Icons from "@/icons/Index";
import React, { useState } from "react";

/**
 * Pagination component renders a pagination control with navigation arrows and clickable page numbers.
 * 
 * @returns {JSX.Element} - Pagination component UI.
 */
const Pagination = () => {
  const [pagination, setpagination] = useState(1);
  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Pagination section visible on medium screens and hidden on others */}
      <div className="md:block hidden">
        <div className="flex justify-center items-center gap-[6px]">
          {/* Left arrow icon for pagination */}
          <Icons
            className="rotate-180 cursor-pointer"
            type="breadcrumbrighticon"
          />
          {/* List of page numbers */}
          <ul className="flex gap-[6px]">
            {pages?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setpagination(item)}
                  className={`${
                    pagination === item
                      ? "bg-light_primary text-white hover:bg-light_primary"
                      : ""
                  } flex justify-center items-center w-[40px] h-[40px] rounded-[50%] text_14_1 cursor-pointer hover:bg-hf_image`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          {/* Right arrow icon for pagination */}
          <Icons type="breadcrumbrighticon" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Pagination;
