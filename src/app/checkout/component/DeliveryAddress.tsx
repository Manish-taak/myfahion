"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputSelect from "@/components/InputSelect";
import Addresscard from "@/components/ui/AddressCard";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Icons from "@/icons/Index";
import { datatype } from "@/interFaces/type";
import { DelivaryAddressSchema } from "@/validationSchema/checkoutSchema/DelivaryAddressSchema";

/**
 * DeliveryAddress component for managing user delivery addresses.
 * @returns {JSX.Element} JSX element containing the delivery address UI.
 */
const DeliveryAddress: React.FC = () => {

  // State hooks for toggling visibility and managing address form state
  const [show, setShow] = useState(false); // State hook for toggling visibility of the address form section
  const [address, setAddress] = useState(false); // State hook for managing whether to show the address form

  // State hook for managing checkbox state
  const [checked, Setchecked] = useState(false); // State hook for managing checkbox state

  /**
   * Function to toggle the visibility of the delivery address section.
   */
  const delivaryshowhide = () => {
    setShow(!show);
    setAddress(false);
    Setchecked(!checked);
  };

  // Mock user login state
  const user = "login"; // Mock user login state

  // State hook for managing selected country
  const [selectecountry, setSelectecountry] = useState<string>(''); // State hook for managing the selected country

  // Form handling using react-hook-form and yup for validation
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(DelivaryAddressSchema),
  }); // React-hook-form hook for handling form state and validation

  // State hook for managing address data array
  const [dataArray, setDataArray] = useState<datatype[]>([]); // State hook for managing the array of address data

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    if (storedData) {
      setDataArray(JSON.parse(storedData));
    }
  }, []); // Load data from localStorage when the component mounts

  /**
   * Function to handle form submission.
   * @param {Object} data - Form data submitted by the user.
   */
  const onSubmit = (data: any) => {
    // Check if data already exists in the array
    const isDuplicate = dataArray.some(
      (item) => JSON.stringify(item) === JSON.stringify(data)
    );
    console.log(dataArray, "dataArray");
    if (!isDuplicate) {
      const newDataArray = [...dataArray, data];
      setDataArray(newDataArray);
      localStorage.setItem("dataArray", JSON.stringify(newDataArray));
    } else {
      console.log("Data already exists!");
    }
  };

  // State hook for managing selected address checkbox
  const [addresscheckbox, setAddresscheckbox] = useState(null); // State hook for managing the selected address checkbox

  /**
   * Function to handle address selection.
   * @param {number} index - Index of the selected address.
   */
  const selectaddress = (index: any) => {
    setAddresscheckbox(index === addresscheckbox ? null : index);
  };
  return (
    <>
      <div className="bg-extra_bg flex flex-col gap-[10px] tab:gap-[30px]  ">
        <div className="bg-white py-5 px-[10px] tab:p-[30px]  rounded-[10px]  ">
          <div
            className={` ${show === true && " pb-[30px]"} flex gap-[10px] justify-between items-center `}
          >
            <div
              onClick={() => delivaryshowhide()}
              className="w-full cursor-pointer"
            >
              {/* Checkbox for Delivery Address */}

              <Checkbox checked={checked} Setchecked={Setchecked} value="Delivery Address" />
            </div>
            {show && (
              <h3
                onClick={() => setAddress(true)}
                className={`whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase tab:flex items-center gap-2 text-light_primary text_16_2_10 cursor-pointer hidden md:block`}
              >
                <Icons className="fill-light_primary" type="plus" /> add new
                address
              </h3>
            )}
            <h3
              onClick={() => setAddress(true)}
              className={` ${user === "login" && "hidden"} text_10_14 text-blue_gray_400 whitespace-nowrap`}
            >
              + New Address
            </h3>
          </div>
          <div className={`${show === true ? "block" : "hidden"}`}>
            {/* address card  */}
            <Addresscard
              name={"Raj Kumar"}
              contact={"+91 12345 67890"}
              useraddress={
                "3rd Floor, Sarv Elanza Building, Hanumangarh Rd, Abohar, Punjab 152116"
              }
            />
          </div>
        </div>
        <div className={` ${address === true ? "block" : "hidden"} bg-extra_bg`}>
          <div className="p-4 md:p-[30px] bg-white rounded-[14px]">
            <div className="flex justify-between items-center max-[991px]:pb-5">
              <div className="text_24_20 text-blue_gray_800 tab:border-b-[1px] border-blue_gray_50 tab:pb-5 tab:mb-5 tab:md:pb-[30px] md:mb-[30px] flex justify-between items-center w-full">
                Add New Address
                <h3
                  onClick={() => setAddress(true)}
                  className={` ${show === true ? "block" : "hidden"} whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase hidden tab:flex items-center gap-2 text-light_primary text_16_2_10 cursor-pointer`}
                >
                  <Icons fill="#f57e5d" type="location" /> Use current location
                </h3>
              </div>
              <h3 className="tab:hidden block whitespace-nowrap text_10_14 text-blue_gray_400">
                Find Location
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-5 tab:gap-[30px]">
                {/* Full Name field */}
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
                {/* Mobile field */}
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
                {/* Pincode field */}
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

                {/* City/Distt/Town field */}

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
                {/* Full Address */}

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
                  {/* Landmark Address */}

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
                  {/* State Address */}

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
                <label htmlFor="" className="text-blue_gray_600 text_16_1">
                  Address Type
                </label>
                <div className="grid mt-[10px] gap-x-[30px] border-b-[1px] border-blue_gray_50 pb-[30px] mb-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-[10px]">
                  {dataArray.map((item, index) => (
                    <div key={index}>
                      <div className="flex text_16_2 text-blue_gray_300 items-center">
                        <div key={Date.now() + index} onClick={() => selectaddress(index)}>
                          <div className='flex gap-[6px] justify-between items-center cursor-pointer'>
                            <div className={"flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full"}>
                              <label className='cursor-pointer'>
                                {item?.landmark}
                              </label>
                              <div className='relative flex'>
                                <input
                                  type="checkbox"
                                  checked={index === addresscheckbox}
                                  readOnly
                                  className={"hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"}
                                />
                                {index === addresscheckbox && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-[30px] justify-end flex-col-reverse md:flex-row gap-y-5">
                {/* CANCEL button */}
                <Button
                  onClick={() => setAddress(false)}
                  varient="liquid"
                  className="border-none py-[14px] px-[18px] text_18"
                >
                  CANCEL
                </Button>
                {/* save address Button  */}
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
      </div>
    </>
  );
};

export default DeliveryAddress;
