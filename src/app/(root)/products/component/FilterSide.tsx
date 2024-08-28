"use client";
import React, { Fragment, useState } from "react";
import CheckboxFilter from "@/components/ui/CheckboxFilter";
import Icons from "@/icons/Index";
import { filterproducts } from "@/interFaces/type";
import { firstrotate, rotate, sidebarAccordion } from "@/utils/funcation";
import filterside from "@/json/filterside.json";
import InputRange from "@/components/ui/InputRange";
const FilterSide = ({ filter }: filterproducts) => {

  /**
 * Removes an item from the items array at the specified index.
 * @param {number} index - The index of the item to remove.
 */

  const [items, setItems] = useState<string[]>([]);
  const removeItem = (index: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };


  return (
    <>
      <div
        className={`flex flex-col w-full max-w-[375px] bg-white rounded-[10px]   ${filter === true
          ? "fixed top-[130px]  left-0  z-[51] bg-white h-[100vh] pb-[150px]  overflow-scroll  "
          : ""
          } duration-1000 `}
      >

        <div className="p-[20px] flex gap-[20px] flex-col  border-b-[1px]  border-[blue_gray_5]  ">
          {/* Filters section */}
          <div className="flex justify-between items-center">
            <h2 className="text_20 text-blue_gray_800 ">Filters</h2>
            {/* Clear All button */}
            <p className="text_14_1  text-light_primary cursor-pointer">Clear All</p>
          </div>
          {/* List of selected items with remove functionality */}
          <div className="flex flex-wrap gap-[10px]">
            {items.map((item, index) => {
              return (
                <div
                  key={Date.now() + index}
                  className="border-[1px] border-[rgba(0, 0, 0, 0.16)] rounded-[16px] py-[3px] px-[4px] flex items-center w-full max-w-max "
                >
                  <span className="whitespace-nowrap px-[6px] text-Light_Text_Secondary  ">
                    {item}
                  </span>
                  {/* Remove icon for each item */}
                  <div
                    className="cursor-pointer"
                    onClick={() => removeItem(index)}
                  >
                    <Icons type="cuticon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[8px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Categories section */}
          <div className="flex justify-between">
            <h2 className="text_16_2 text-blue_gray_500 ">Categories</h2>
          </div>
          {/* Mapping through category items */}
          {filterside?.category.map((item, index) => {
            return (
              <Fragment key={Date.now() + index}>
                <div className="flex flex-col gap-[8px]">
                  <div className="pr-[4px]">
                    {/* Category header with accordion functionality */}
                    <div
                      onClick={(e) => {
                        sidebarAccordion(e);
                        firstrotate(e, -90);
                      }}
                      className="flex  gap-1 items-center"
                    >
                      <Icons className="rotate-0" type="categoryarrow" />
                      <span className="text_16_2 text-blue_gray_300 cursor-pointer select-none ">
                        {item.subcategoryName}
                      </span>
                    </div>
                    {/* Subcategory list with toggle effect */}
                    <ul className=" w-full pl-[50px] h-0 overflow-hidden duration-500   flex flex-col gap-[8.5px] ">
                      {item?.productsName?.map((item, index) => {
                        return (
                          <div
                            key={Date.now() + index}
                          // onClick={() => addItemToList(item)}
                          >
                            <li className="cursor-pointer text-blue_gray_500">
                              {item}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Gender section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Gender</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className=" h-0 overflow-hidden duration-500  dsdsadsad flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              {/* Grid layout for gender checkboxes */}
              <div className="grid grid-cols-1 gap-y-[8.5px]">
                {filterside?.gender?.map((item, index) => {
                  return (
                    <div key={Date.now() + index}>
                      {/* Checkbox filter for gender options */}
                      <CheckboxFilter
                        labelclass="gap-[10px]"
                        color={`green`}
                        value={item?.gender}
                        id={item?.gender}
                        setItems={setItems}
                        items={items}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Price Range section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Price Range</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className=" h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            <div className="pr-[4px]">
              <form action="">
                {/* Input range for selecting price range */}
                <InputRange className="max-w-[335px]" />
                {/* Label showing range values */}
                <label className="flex justify-between" htmlFor="">
                  <span className="text-blue_gray_400 text_14_1 ">0</span>
                  <span className="text-blue_gray_400 text_14_1 ">100</span>
                </label>
              </form>
            </div>
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Discount section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Discount</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            {/* Flex column layout for discount checkboxes */}
            <div className="pr-[4px]">
              {/* Grid layout for discount checkboxes */}
              <div className="grid grid-cols-2 gap-y-[8.5px]">
                {filterside?.Discount.map((item, index) => {
                  return (
                    <div key={Date.now() + index}>
                      {/* Checkbox filter for discount options */}
                      <CheckboxFilter
                        labelclass="gap-[10px]"
                        color={`green`}
                        value={item?.discount}
                        id={item?.discount}
                        setItems={setItems}
                        items={items}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Brands section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Brands</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500  ">
            {/* Form for searching brands */}
            <form className=" rounded-[6px] bg-extra_4  flex gap-[6px] py-[6px] px-[12px] mb-[14px]">
              <input
                className="text-blue_gray_400 bg-extra_4 text_16_2 w-full outline-none border-none "
                type="search"
                placeholder="Search Brands..."
                name=""
                id=""
              />
              <Icons type="searchicond9" />
            </form>
            {/* Flex column layout for brand checkboxes */}
            <div className="  flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                {/* Grid layout for brand checkboxes */}
                <div className="grid grid-cols-2 gap-y-[8.5px]">
                  {filterside?.brands.map((item: any, index: number) => {
                    return (
                      <div key={Date.now() + index}>
                        {/* Checkbox filter for brands */}
                        <CheckboxFilter
                          labelclass="gap-[10px]"
                          color={`green`}
                          value={item?.brandName}
                          id={item?.brandName}
                          setItems={setItems}
                          items={items}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Colors section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Colors</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500  ">
            {/* Flex column layout for color options */}
            <div className="  flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                {/* Grid layout for color checkboxes */}
                <div className="grid grid-cols-1 gap-y-[8.5px]">
                  {filterside?.colordata.map((item, index) => {
                    return (
                      <div key={Date.now() + index}>
                        {/* Checkbox filter for colors */}
                        <CheckboxFilter
                          labelclass="gap-[10px]"
                          color={`green`}
                          value={item?.colorName}
                          id={item?.colorName}
                          setItems={setItems}
                          items={items}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px]  border-[blue_gray_5] ">
          {/* Size Chart section */}
          <div
            onClick={(e) => {
              sidebarAccordion(e);
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 ">Size Chart</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500 flex flex-col gap-[8px]">
            {/* Grid layout for size options */}
            <div className="pr-[4px] grid gap-y-[8.5px]">
              {filterside?.SizeChart.map((item, index) => {
                return (
                  <div key={Date.now() + index}>
                    {/* Checkbox filter for size */}
                    <CheckboxFilter
                      labelclass="gap-[10px]"
                      color={`green`}
                      value={item?.size}
                      id={item?.size}
                      setItems={setItems}
                      items={items}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FilterSide;

