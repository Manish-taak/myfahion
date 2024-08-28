"use client";

import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icons from "@/icons/Index";
import Overlay from "@/components/ui/Overlay";
import ChangePassword from "@/components/popup/ChangePassword";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import InputSelect from "@/components/InputSelect";
import Calendar from "@/components/calender/Calender";
import { profileinterface } from "@/interFaces/type";
import Image from "next/image";
import { BasicInformatiom } from "@/validationSchema/profileSchema/BasicInformatiom";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * Page Component
 * @param {profileinterface} props - Props containing closebtn and profilesidebar
 */
const Page: React.FC<profileinterface> = ({ closebtn, profilesidebar }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(BasicInformatiom),
  });

  const popupRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  /**
   * Closes the overlay and related components
   */
  const closePopup = () => setShowOverlay(false);

  // Hook to handle clicks outside a specified element (popupRef)
  useOutsideClick(popupRef, closePopup);

  /**
   * Handles form submission
   * @param {Object} data - Form data object
   */
  const onSubmit = (data: any) => {
    console.log(data, "This data is link='/profile/basic-Information");
    // Additional logic can be added here for form submission
  };

  return (
    <div className={`${profilesidebar === 1 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static w-full h-[100vh] tab:h-full`}>
      {/* Overlay component conditionally rendered based on showOverlay state */}
      {showOverlay && <Overlay isOpen={true} />}
      <div className={`${profilesidebar === 1 ? " right-0 duration-500 fixed left-0 top-0 " : "static"} bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] tab:hidden py-[20px] px-[16px] flex gap-[14px] items-center`}>
        <div onClick={closebtn}>
          <Icons type="leftarrowback" /> {/* Icon component for back navigation */}
        </div>
        <h2 className="text_20 text-blue_gray_600">Account Setting</h2> {/* Heading for account settings */}
      </div>
      <div className="flex flex-col gap-[10px] tab:gap-[30px] py-[20px] max-[990px]:overflow-scroll max-[990px]:h-full tab:py-0 max-[991px]:bg-hf_extra max-[991px]:mt-[70px]">
        {/* Container for user profile details */}
        <div className="tab:bg-white w-full flex-col tab:flex-row tab:p-3 xl:p-[30px] flex tab:gap-[40px] rounded-[14px] justify-between items-center">
          <div className="bg-white rounded-[6px] flex gap-5 items-center justify-center lg:justify-normal w-[91%] tab:w-full p-4 lg:p-0">
            <Image width={100} height={100} className="max-w-[100px] w-full" src="/images/userimage.png" alt="user" /> {/* User profile image */}
            <div className="hidden lg:block">
              <h2 className="text_24 text-blue_gray_600">Raj Kumar</h2> {/* User's name */}
              <p className="text_20 text-blue_gray_500">+91 12345 67890</p> {/* User's phone number */}
            </div>
          </div>
          <div className="max-w-[210px] w-full">
            <label htmlFor="choosefile" className="hidden cursor-pointer tab:flex md:hover:bg-light_secondary_main md:hover:bg-opacity-10 md:text-light_secondary_main justify-center md:border-[1px] py-[10px] px-[16px] items-center gap-[8px] rounded-[4px] border-light_secondary_main h-[44px]">
              <Icons type="download" /> {/* Icon for file upload */}
              Upload photo
            </label>
            <input type="file" className="hidden" id="choosefile" /> {/* Hidden file input for photo upload */}
          </div>
        </div>
        {/* Form section for basic information */}
        <div className="p-4 md:p-[30px] flex flex-col tab:bg-white rounded-[14px] pb-[75px]">
          <div className="max-[991px]:p-4 flex flex-col bg-white rounded-[6px]">
            <div className="flex justify-between w-full">
              <h2 className="text_24_20 text-blue_gray_800">Basic Information</h2> {/* Section heading */}
              <button className="md:py-[10px] md:px-4 uppercase text_16_2_10 text-blue_gray_400 hover:bg-hf_image rounded-md">
                deactivate account
              </button> {/* Button to deactivate account */}
            </div>
            <span className="border-[1px] my-5 tab:my-[30px]"></span> {/* Divider line */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Form fields for basic information */}
              <div className="grid lg:grid-cols-2 tab:gap-x-[30px] gap-[20px] tab:gap-y-[20px] bg-white">
                {/* Controller for first name input */}
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      inputparent={"border-[1px] border-blue_gray_100 rounded-[6px]"}
                      placeholder="Raj"
                      inputclass="w-full"
                      label="First Name"
                      error={errors.firstName?.message}
                    />
                  )}
                />
                {/* Controller for last name input */}
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      inputparent={"border-[1px] border-blue_gray_100 rounded-[6px]"}
                      placeholder="Kumar"
                      inputclass="w-full"
                      label="Last Name"
                      error={errors.lastName?.message}
                    />
                  )}
                />
                {/* Controller for email input */}
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      inputparent={"border-[1px] border-blue_gray_100 rounded-[6px]"}
                      placeholder="dummyemail@gmail.com"
                      inputclass="w-full"
                      label="Email Address"
                      error={errors.email?.message}
                    />
                  )}
                />
                {/* Controller for mobile number input */}
                <Controller
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      inputparent={"border-[1px] border-blue_gray_100 rounded-[6px]"}
                      placeholder="+91 12345 67890"
                      inputclass="w-full"
                      label="Mobile"
                      error={errors.mobile?.message}
                    />
                  )}
                />
                <Calendar /> {/* Calendar component */}
                {/* Controller for gender selection */}
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <InputSelect
                      {...field}
                      label="Gender"
                      placeholder="Select"
                      value={field.value}
                      onChange={field.onChange}
                      options={[
                        { id: 1, name: 'Male' },
                        { id: 2, name: 'Female' },
                        { id: 3, name: 'Other' },
                      ]}
                      error={errors.gender?.message}
                    />
                  )}
                />
              </div>
              {/* Save changes and change password button section */}
              <div className="flex flex-col lg:flex-row-reverse gap-5 md:gap-[30px] justify-start mt-[30px] bg-white">
                <Button varient="primary" btntype="submit" className="py-[14px] px-[18px] text_18 font-semibold">
                  Save Changes
                </Button> {/* Button to save changes */}
                <div className="tab:block hidden" onClick={() => setShowOverlay(true)}>
                  <Button className="w-full py-[14px] px-[18px] text_18" varient="gray">
                    Change Password
                  </Button> {/* Button to change password */}
                </div>
                <button onClick={() => setShowOverlay(true)} className="tab:hidden text_14_1 text-blue_gray_400">
                  Change Password
                </button> {/* Alternative button for changing password */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Popup for changing password */}
      {showOverlay && <ChangePassword closepopup={closePopup} ref={popupRef} />}
    </div>
  );
};

export default Page;
