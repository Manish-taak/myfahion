import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React from "react";
import upiuser from "@/json/upiuser.json";

/**
 * Interface for the component props.
 * @typedef {Object} upitype
 * @property {boolean} [show] - Determines if the UPI address form is shown.
 * @property {boolean|string|undefined|any} [setshow] - Function or value to toggle the visibility of the form.
 */
interface upitype {
  show?: boolean;
  setshow?: boolean | string | undefined | any;
}

/**
 * Functional component to render and manage UPI addresses.
 *
 * @param {upitype} props - Component properties.
 * @returns {JSX.Element} The UPI address management component.
 */
const UpiAddress: React.FC<upitype> = ({ show, setshow }) => {
  return (
    <div className="p-4 lg:p-[30px] bg-white rounded-[14px] mt-[10px] md:mt-[30px]">
      {/* Section for displaying saved UPI addresses */}
      <h2 className="text_20 text-blue_gray_700  border-b-[1px] border-blue_gray_50 mb-5 pb-5 md:pb-[30px] md:mb-[30px] ">
        Saved Upi Address
      </h2>
      <div className="grid md:grid-cols-2 tab:grid-cols-1 xl:grid-cols-2 gap-y-5 md:gap-x-5 md:gap-y-[30px]">
        {upiuser?.map((item, index) => {
          return (
            // Container for each UPI address
            <div key={index} className="p-3 flex items-center justify-between rounded-[6px] border-[1px] border-extra_4">
              <span className="flex items-center gap-x-[6px]">
                {/* Radio button for selecting UPI address */}
                <input
                  type="radio"
                  name="payment"
                  id=" "
                  className=" dark:accent-orange-600 cursor-pointer"
                />
                {/* UPI name display */}
                <h4 className="text_20_16 text-blue_gray_600">
                  {item.upiname}
                </h4>
              </span>
              {/* Display bank logo */}
              <Image
                width={30}
                height={30}
                src="/images/hdfc.png"
                className="max-w-[30px] w-full"
                alt="logo"
              />
            </div>
          );
        })}
      </div>
      {/* Button to show form for adding new UPI address */}
      <div className="mt-5 md:mt-[30px]">
        <button
          onClick={() => setshow(true)}
          className="w-full p-[30px] border-[2px] border-hf_image border-dashed rounded-lg"
        >
          + Add UPI
        </button>
      </div>
      {show === true && (
        // Form for adding a new UPI address
        <div className="p-4 lg:p-[30px] bg-white rounded-[14px] mt-5 lg:mt-[30px] border-[1px] border-extra_4">
          <h2 className="text_20 text-blue_gray_700 border-b-[1px] border-blue_gray_50 pb-5 mb-5 md:pb-[30px] md:mb-[30px]">
            Add New UPI Address
          </h2>
          <div>
            {/* Input field for UPI ID */}
            <Input
              label="Your UPI ID"
              placeholder="dummy@bankname"
              inputparent="w-full"
              inputclass="w-full border-[1px] border-extra_4"
            />
            <div className="flex gap-x-[30px] justify-end flex-col-reverse md:flex-row gap-y-5 md:gap-[30px] mt-5 md:mt-[30px]">
              {/* Cancel button to hide the form */}
              <Button
                onClick={() => setshow(false)}
                varient="liquid"
                className="border-none text_18 py-[14px] px-[18px] text-blue_gray_400 hover:bg-hf_image rounded-md"
              >
                CANCEL
              </Button>
              {/* Save button to save the new UPI address */}
              <Button
                className="uppercase text_18 py-[14px] px-[18px]"
                varient="primary"
              >
                save UPI Address
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpiAddress;
