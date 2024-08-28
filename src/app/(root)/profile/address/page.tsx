"use client";

import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import InputSelect from "@/components/InputSelect"; // Import InputSelect component
import Areyousure from "@/components/popup/AreYouSure"; // Import AreYouSure component
import Overlay from "@/components/ui/Overlay"; // Import Overlay component
import Addresscard from "@/components/ui/AddressCard"; // Import AddressCard component
import Button from "@/components/ui/Button"; // Import Button component
import Input from "@/components/ui/Input"; // Import Input component
import Icons from "@/icons/Index"; // Import Icons from icon index
import { datatype, profileinterface } from "@/interFaces/type"; // Import types from type interfaces
import { cn } from "@/utils/cn"; // Import cn utility function
import { ProfileAddressSchema } from "@/validationSchema/profileSchema/ProfileAddressSchema"; // Import ProfileAddressSchema for validation
import useOutsideClick from "@/lib/hooks/useOutsideclick "; // Import useOutsideClick hook
import useCheckbox from "@/lib/hooks/useCheckbox"; // Import useCheckbox custom hook
import { Controller, useForm } from "react-hook-form";

/**
 * Page Component
 * @param {profileinterface} props - Props containing classname, closebtn, profilesidebar
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  // all state
  const [dataArray, setDataArray] = useState<datatype[]>([]); // State for storing address data array

  const [show, setshow] = useState(false); // State for showing/hiding component
  const [showOverlay, setShowOverlay] = useState(false); // State for controlling overlay visibility
  const [deletepopup, setdeletepopup] = useState(false); // State for controlling delete popup visibility
  const [address, setAddress] = useState(false); // State for managing address
  const [selectecountry, setSelectecountry] = useState<string>(""); // State for selected country
  const [checklocalstorage, setchecklocalstorage] = useState<string>(); // State for checking local storage
  const [showToast, setShowToast] = useState(true); // State for managing toast visibility
  const popupRef = useRef<HTMLDivElement>(null); // Ref for popup element

  /**
   * Opens delete popup and shows overlay
   */
  const opendeletepopup = () => {
    setShowOverlay(true);
    setdeletepopup(true);
  };

  /**
   * Closes popup and overlay
   */
  const closepopup = () => {
    setShowOverlay(false);
    setdeletepopup(false);
  };

  // Custom hook to handle outside click
  useOutsideClick(popupRef, closepopup);

  /**
   * React Hook Form configuration
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ProfileAddressSchema), // Using Yup schema resolver for form validation
  });

  /**
   * useEffect to initialize component and check local storage for existing data
   */
  useEffect(() => {
    const storedData = localStorage.getItem("addressdata");
    if (!storedData || storedData === "[]" || storedData === "{}") {
      setchecklocalstorage("empty");
    } else {
      setchecklocalstorage("fill");
      setDataArray(JSON.parse(storedData));
    }
  }, []);

  /**
   * Function to show toast notification
   */
  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  /**
   * Form submit handler
   * @param {Object} data - Form data object
   */
  const onSubmit = (data: any) => {
    console.log(data, "data on submit");
    const isDuplicate = dataArray.some(
      (item) => JSON.stringify(item) === JSON.stringify(data)
    );
    if (!isDuplicate) {
      const newDataArray = [...dataArray, data]; // Adding new data to the array
      setDataArray(newDataArray); // Update state with new data
      localStorage.setItem("addressdata", JSON.stringify(newDataArray)); // Save data to localStorage
      setshow(false);
      showToastMessage(); // Show toast notification
      reset(); // Reset the form fields
    } else {
      console.log("Data already exists!");
    }
  };

  // Destructuring state and function from useCheckbox hook
  const { checkedIndex, handleCheck } = useCheckbox();

  return (
    <>
      {/* pop up code start */}
      {showOverlay && <Overlay isOpen={true} />}
      {deletepopup && (
        <Areyousure
          heading="Are You Sure"
          tittle="Are you sure to want to remove this address"
          buttontext="yes, remove"
          closepopup={closepopup}
          cancelnewlist={closepopup}
          ref={popupRef}
        />
      )}
      {/* {showToast && (
        <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
          Address saved successfully!
        </div>
      )} */}
      <section
        className={cn(
          `${profilesidebar === 2 ? "right-[0]" : "right-[-100%]"
          } fixed duration-500 max-[991px]:bg-white  top-0 z-[52] tab:static w-full  tab:flex flex-col max-[990px]:overflow-scroll h-full min-[990px]:gap-[30px] lg:h-fit`
        )}
      >
        <div
          onClick={closebtn}
          className={`z-50 ${profilesidebar === 2 ? "fixed right-0 left-0 top-0 " : "static"
            } bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] tab:hidden py-[20px] px-[16px] flex gap-[14px] items-center`}
        >
          {/* svg icon type leftarrowback */}
          <Icons type="leftarrowback" />
          <h2 className="text_20 text-blue_gray_600">My Address</h2>
        </div>
        {/* popup code end */}
        {show === true ? (
          <>
            <section className={cn`${classname} w-full  max-[1024px]`}>
              <div
                onClick={closebtn}
                className="  py-[20px] px-[16px] flex gap-[14px] items-center tab:hidden"
              >
                {/* svg icon type leftarrowback */}
                <Icons type="leftarrowback" />
                <h2 className="text_20 text-blue_gray_600 ">My Address</h2>
              </div>
              <div className="bg-extra_bg  ">
                <div className="p-4 md:p-[30px]  bg-white  rounded-[14px]">
                  <div>
                    <h3 className="text_24_20 text-blue_gray_800 border-b-[1px] border-blue_gray_50 pb-5 mb-5 md:pb-[30px] md:mb-[30px] flex justify-between items-center">
                      My Address
                      <div className="flex gap-[8px] items-center py-[10px] px-[16px] hover:bg-hf_image rounded-lg cursor-pointer">
                        <Icons type="location" className="fill-blue_gray_400" />
                        <span className="text_16_2_10 text-blue_gray_400">
                          Find Location
                        </span>
                      </div>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-5 tab:gap-[30px]">
                      {/* full name input  */}
                      <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Raj"
                            label="Full Name"
                            inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                            error={errors.fullName?.message}
                          />
                        )}
                      />
                      {/* mobile number input  */}
                      <Controller
                        name="mobile"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="91 98765 43210"
                            label="Mobile"
                            inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                            error={errors.mobile?.message}
                          />
                        )}
                      />
                      {/* pincode input  */}
                      <Controller
                        name="pincode"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="152116"
                            label="Pincode"
                            inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                            error={errors.pincode?.message}
                          />
                        )}
                      />
                      {/* City/Distt/Town input */}
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Abohar"
                            label="City/Distt/Town"
                            inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                            error={errors.city?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="mt-5">
                      {/* fullAddress  input field */}
                      <Controller
                        name="fullAddress"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="TheMadbrains, 3rd Floor, Sarv Elnza Building, Hanumangarh Rd."
                            label="Full Address"
                            inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4 h-[80px]"
                            error={errors.fullAddress?.message}
                          />
                        )}
                      />
                      <div className="grid md:grid-cols-2 gap-[30px] mt-5">
                        {/* landmark input */}
                        <Controller
                          name="landmark"
                          control={control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Near Hero Agency"
                              label="Landmark"
                              inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                              error={errors.landmark?.message}
                            />
                          )}
                        />
                        {/* country select input type */}
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <InputSelect
                              {...field}
                              label="State"
                              placeholder="State"
                              value={selectecountry}
                              onChange={(value) => {
                                field.onChange(value);
                                setSelectecountry(value);
                              }}
                              options={[
                                { id: 1, name: "Punjab" },
                                { id: 2, name: "Rajasthan" },
                                { id: 3, name: "Haryana" },
                              ]}
                              error={errors.state?.message}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <label
                        htmlFor=""
                        className="text-blue_gray_600 text_16_1 "
                      >
                        Address Type
                      </label>
                      <div className="grid mt-[10px] gap-x-[30px] border-b-[1px] border-blue_gray_50 pb-[30px] mb-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-[10px]">
                        {/* Mapping over dataArray to render each item */}
                        {dataArray.map((item, index) => (
                          <div key={index}>
                            <div className="flex text_16_2 text-blue_gray_300 items-center">
                              {/* Clickable checkbox area */}
                              <div
                                onClick={() => handleCheck(index)}
                                className="p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center"
                              >
                                <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                                  <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                                    {/* Label and checkbox */}
                                    <label className="cursor-pointer">{item.fullName}</label>
                                    <div className="relative flex">
                                      <input
                                        type="checkbox"
                                        checked={index === checkedIndex}
                                        readOnly
                                        className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                                      />
                                      {/* Checked icon */}
                                      {index === checkedIndex && (
                                        <Icons
                                          type="checkedicon"
                                          className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Additional information (commented out) */}
                              {/* <span className="text_16_2 text-blue_gray_500 ml-[9px]">
                                    {item.city}
                                  </span> */}
                              {/* {item.state} */}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                    <div className="flex gap-[30px] justify-end flex-col-reverse md:flex-row gap-y-5 ">
                      {/* button cencel */}
                      <Button
                        onClick={() => setshow(false)}
                        varient="liquid"
                        className="border-none  py-[14px] px-[18px] text_18"
                      >
                        CANCEL
                      </Button>
                      {/* button save address  */}
                      <Button
                        btntype="submit"
                        varient="primary"
                        className="py-[14px] px-[18px] text_18"
                      >
                        SAVE ADDRESS
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </>
        ) : null}
        <div className={`hidden lg:block `}>
          <div
            className={`   border-b-[1px] border-blue_gray_50 p-[30px] bg-white rounded-[14px]${show !== true ? " flex justify-between items-center" : " hidden"
              }`}
          >
            <h3 className="text_24_20 text-blue_gray_800  ">My Address</h3>
            <h3
              onClick={() => setshow(true)}
              className={` uppercase flex items-center gap-2 text-blue_gray_400 text_16_2_10 cursor-pointer py-[10px] px-4 hover:bg-hf_image rounded-lg`}
            >
              {/* svg icon type plus */}
              <Icons fill="#B0BEC5" type="plus" /> add new address
            </h3>
          </div>
        </div>
        <div className="max-[990px]:py-5 max-[990px]:px-4 max-[990px]:bg-extra_bg  mt-[70px] tab:mt-0 ">
          <div className=" p-4 md:p-[30px] bg-white  rounded-[14px]">
            <div className="flex justify-between items-center border-b-[1px] border-blue_gray_50 pb-5 mb-5 tab:pb-[30px] tab:mb-[30px] ">
              <h3 className="text_24_20 lg:text_20 text-blue_gray_700  ">
                Saved Address
              </h3>
              <h3
                onClick={() => setshow(true)}
                className={`uppercase flex items-center gap-2 text-blue_gray_400 text_16_2_10 cursor-pointer lg:hidden`}
              >
                {/* svg icon type plus */}
                <Icons fill="#B0BEC5" type="plus" /> add new address
              </h3>
            </div>
            <div className="flex flex-col gap-y-5 md:gap-y-[20px]">
              {/* Check if dataArray is empty */}
              {dataArray.length === 0 ? (
                // Render this block if dataArray is empty
                <div className="p-4 md:p-[30px] bg-white rounded-[14px] mt-[70px] tab:mt-0">
                  <h3 className="text_24_20 text-blue_gray_700">
                    No saved addresses found. Please add a new address.
                  </h3>
                </div>
              ) : (
                // Render each address card if dataArray has items
                dataArray.map((address: any, index: number) => (
                  <Addresscard
                    key={index}
                    name={address.fullName}
                    contact={`+91 ${address.mobile}`}
                    useraddress={`${address?.fullAddress}, ${address.landmark ? address.landmark + ", " : ""}${address.city}, ${address.state} ${address.pincode}`}
                    editadress={() => setshow(true)}
                    deleteaddress={() => opendeletepopup()}
                  />
                ))
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
