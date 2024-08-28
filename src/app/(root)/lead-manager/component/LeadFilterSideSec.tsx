import Icons from "@/icons/Index";
import { rotate, sidebarAccordion } from "@/utils/funcation";
import React, { ChangeEvent, Fragment, useState } from "react";
import leaddata from "@/json/leaddata.json";
import { filterside } from "@/interFaces/type";
//  country json data use npm i country-json
import countriesByAbbreviation from 'country-json/src/country-by-abbreviation.json';

/**
 * LeadFilterSideSec component for filtering lead data.
 * @param {object} props - Component props.
 * @param {string} props.className - CSS class name.
 * @param {filtersideleadmanager} props.filtersideleadmanager - Lead manager filters.
 * @returns {JSX.Element} LeadFilterSideSec component.
 */
const LeadFilterSideSec = ({
  className,
  filtersideleadmanager,
}: filterside): JSX.Element => {

  /**
   * State for managing job type checkboxes.
   */
  const [jottypecheckbox, Setjottypecheckbox] = useState<number | null>(null);

  /**
   * Handles click event for job type checkbox.
   * @param {number} index - Index of the checkbox.
   */
  const jobtypehandle = (index: number) => {
    Setjottypecheckbox(index === jottypecheckbox ? null : index);
  }

  /**
   * State for managing Job Categories checkboxes.
   */
  const [JobCategorieschecknox, SetJobCategorieschecknox] = useState<number | null>(null);

  /**
   * Handles click event for Job Categories checkbox.
   * @param {number} index - Index of the checkbox.
   */
  const JobCategories = (index: number) => {
    SetJobCategorieschecknox(index === JobCategorieschecknox ? null : index);
  }

  /**
   * State for managing location checkboxes.
   */
  const [locationcheckbox, Setlocationcheckbox] = useState<number | null>(null);

  /**
   * Handles click event for location checkbox.
   * @param {number} index - Index of the checkbox.
   */
  const location = (index: number) => {
    Setlocationcheckbox(index === locationcheckbox ? null : index);
  }

  /**
   * State for managing city checkboxes.
   */
  const [citycheckbox, Setcitycheckbox] = useState<number | null>(null);

  /**
   * Handles click event for city checkbox.
   * @param {number} index - Index of the checkbox.
   */
  const city = (index: number) => {
    Setcitycheckbox(index === citycheckbox ? null : index);
  }

  // searchbar city/state 

  /**
   * State for managing the visibility of location dropdown.
   */
  const [locationdropopen, setLocationdropopen] = useState<boolean>(false);

  /**
   * Toggles the visibility of location dropdown.
   */
  const togglelocationdrop = () => {
    setLocationdropopen(!locationdropopen);
  }

  /**
   * State for managing the search term in the city/state search bar.
   */
  const [searchTerm, setSearchTerm] = useState<string>('');

  /**
   * Handles changes in the city/state search bar input.
   * @param {ChangeEvent<HTMLInputElement>} e - Change event from the input field.
   */
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Filters cities based on the search term.
   */
  const filteredCities = leaddata?.cityState?.filter((item) =>
    item.citystate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // searchbar location

  /**
   * State for managing the visibility of city dropdown.
   */
  const [citydropopen, setCitydropopen] = useState<boolean>(false);

  /**
   * Toggles the visibility of city dropdown.
   */
  const toggle = () => {
    setCitydropopen(!citydropopen);
  }

  /**
   * State for managing the search term in the location search bar.
   */
  const [searchTermlocation, setSearchTermlocation] = useState<string>('');

  /**
   * Handles changes in the location search bar input.
   * @param {ChangeEvent<HTMLInputElement>} e - Change event from the input field.
   */
  const handleSearchChangelocation = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTermlocation(e.target.value);
  };

  /**
   * Filters countries based on the search term.
   */
  const filteredLocations = countriesByAbbreviation?.filter((item: any) =>
    item.country.toLowerCase().includes(searchTermlocation.toLowerCase())
  );

  return (
    <>
      <div className={`flex flex-col ${className} w-full max-w-[375px] bg-white border-[1px] border-blue_gray_100 rounded-[10px] pb-[123px] md:pb-0 ${filtersideleadmanager === 1 ? "fixed top-[60px] left-0 z-10 bg-white pb-[150px] overflow-scroll" : ""}`}>
        {/* Filters Header */}
        <div className="p-[20px] flex gap-[20px] flex-col border-b-[1px] border-[blue_gray_5]">
          <h2 className="text_20 text-blue_gray_800">Filters</h2>
        </div>

        {/* Job Type Section */}
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px] border-[blue_gray_5]">
          <div onClick={(e) => {
            sidebarAccordion(e);
            rotate(e, 180);
          }} className="flex justify-between cursor-pointer">
            <h2 className="text_16_2 text-blue_gray_500 select-none">Job Type</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className={`h-0 overflow-hidden duration-500 flex flex-col gap-[8px] ${locationdropopen ? "h-[400px]" : ""}`}>
            <div className="pr-[4px]">
              <div className="grid grid-cols-1">
                {/* Job Type Items */}
                {leaddata?.jobtype?.map((item, index) => (
                  <Fragment key={item?.id}>
                    <div onClick={() => jobtypehandle(index)} className="p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center">
                      <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                        <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                          <label className="cursor-pointer">{item?.time}</label>
                          <div className="relative flex">
                            <input
                              type="checkbox"
                              checked={index === jottypecheckbox}
                              readOnly
                              className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                            />
                            {index === jottypecheckbox && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Categories Section */}
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px] border-[blue_gray_5]">
          <div onClick={(e) => {
            sidebarAccordion(e);
            rotate(e, 180);
          }} className="flex justify-between cursor-pointer">
            <h2 className="text_16_2 text-blue_gray_500 select-none">Job Categories</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className="h-0 overflow-hidden duration-500">
            {/* Job Categories Items */}
            {leaddata?.JobCategories?.map((item, index) => (
              <Fragment key={item?.id}>
                <div onClick={() => JobCategories(index)} className="p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center">
                  <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                    <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                      <label className="cursor-pointer">{item?.category}</label>
                      <div className="relative flex">
                        <input
                          type="checkbox"
                          checked={index === JobCategorieschecknox}
                          readOnly
                          className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                        />
                        {index === JobCategorieschecknox && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px] border-[blue_gray_5]">
          <div onClick={(e) => {
            togglelocationdrop();
            rotate(e, 180);
          }} className="flex justify-between cursor-pointer">
            <h2 className="text_16_2 text-blue_gray_500 select-none">Location</h2>
            <Icons type="dropdownarrow" />
          </div>
          <div className={`${locationdropopen ? "h-[400px]" : "h-0"} overflow-hidden duration-500 overflow-y-scroll`}>
            {/* Location Search */}
            <form className="flex gap-[6px] py-[6px] px-[12px] mb-[14 border-[1px] border-blue_gray_50 rounded-[6px]">
              <Icons type="searchbarlocationstate" />
              <input
                className="text-blue_gray_400 text_16_2 w-full outline-none border-none"
                type="search"
                placeholder="Search Brands..."
                value={searchTermlocation}
                onChange={handleSearchChangelocation}
              />
            </form>
            <div className="flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                <div className="grid grid-cols-1">
                  {/* Location Items */}
                  {filteredLocations?.map((item, index) => (
                    <Fragment key={Date.now() + index}>
                      <div
                        onClick={() => location(index)}
                        className="p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center"
                      >
                        <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                          <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                            <label className="cursor-pointer">{item.country}</label>
                            <div className="relative flex">
                              <input
                                type="checkbox"
                                checked={index === locationcheckbox}
                                readOnly
                                className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                              />
                              {index === locationcheckbox && (
                                <Icons
                                  type="checkedicon"
                                  className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City/State Section */}
        <div className="p-[20px] flex flex-col gap-[14px] border-b-[1px] border-[blue_gray_5] ">
          <div
            onClick={(e) => {
              toggle();
              rotate(e, 180);
            }}
            className="flex justify-between cursor-pointer "
          >
            <h2 className="text_16_2 text-blue_gray_500 select-none ">
              City / State
            </h2>
            <Icons type="dropdownarrow" />
          </div>

          <div className={` ${citydropopen === true ? "h-[400px] " : "h-0 "}  duration-500 overflow-y-scroll`}>
            {/* City/State Search */}
            <form className="flex gap-[6px] py-[6px] px-[12px] mb-[14px] items-center border-[1px] border-blue_gray_50 rounded-[6px]">
              <Icons type="searchbarlocationstate" />
              <input
                className="text-blue_gray_400 text_16_2 w-full outline-none border-none"
                type="search"
                placeholder="Search Brands..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
            <div className="flex flex-col gap-[8px]">
              <div className="pr-[4px]">
                <div className="grid grid-cols-1">
                  {/* City/State Items */}
                  {filteredCities?.map((item, index) => (
                    <Fragment key={item.id}>
                      <div
                        onClick={() => city(index)}
                        className="p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center"
                      >
                        <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                          <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                            <label className="cursor-pointer">{item.citystate}</label>
                            <div className="relative flex">
                              <input
                                type="checkbox"
                                checked={index === citycheckbox}
                                readOnly
                                className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                              />
                              {index === citycheckbox && (
                                <Icons
                                  type="checkedicon"
                                  className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadFilterSideSec;
