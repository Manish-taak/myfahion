import Icons from "@/icons/Index";
import React from "react";
import { savedaddress } from "@/interFaces/type";

/**
 * AddressCard component displays a card with name, contact details, and address.
 * Allows for editing and deleting addresses.
 *
 * @param {Object} props - Component props.
 * @param {string} props.name - Name to display on the address card.
 * @param {string} props.contact - Contact information to display (e.g., mobile number).
 * @param {string} props.useraddress - Address information to display.
 * @param {Function} props.deleteaddress - Function to handle delete address action.
 * @param {Function} props.editadress - Function to handle edit address action.
 * @returns {JSX.Element} JSX.Element representing the AddressCard component.
 */
const AddressCard = ({ name, contact, useraddress, deleteaddress, editadress }: savedaddress): JSX.Element => {
  return (
    <>
      {/* Address Card Container */}
      <div className="p-[10px] md:p-[30px] border-[1px] border-blue_gray_50 rounded-[14px]">
        {/* Card Header with Name and Work Button */}
        <h3 className="text_20_16 text-blue_gray_700 flex justify-between items-center capitalize">
          {name}
          <button className="bg-[#02a77d14] text-light_secondary_main py-[4px] px-4 rounded-[13px]">
            Work
          </button>
        </h3>
        {/* Contact and Address Details Section */}
        <div className="mt-[14px] md:mt-5 border-b-[1px] border-blue_gray_50 mb-[14px] pb-[14px] md:mb-5 md:pb-5">
          {/* Mobile Number */}
          <p className="flex gap-x-[6px] text-blue_gray_400 text_16_1_12 items-start md:items-center flex-col md:flex-row">
            <span className="text-blue_gray_500 text_16_2_10">Mobile :-</span>
            {contact}
          </p>
          {/* User Address */}
          <p className="mt-[10px] flex gap-x-[6px] text-blue_gray_400 text_16_1_12 items-start md:items-center flex-col md:flex-row">
            <span className="text-blue_gray_500 text_16_2_10">Address :-</span>
            {useraddress}
          </p>
        </div>
        {/* Edit and Delete Buttons Section */}
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center justify-between md:justify-end w-full">
            {/* Edit Button */}
            <h4 onClick={editadress} className="flex group items-center cursor-pointer hover:text-light_primary gap-x-[6px] p-[2px] border-r-[2px] pr-4 mr-4 text-blue_gray_300 text_16_1 w-full justify-center md:w-auto">
              <Icons
                type="edit"
                className="group-hover:fill-light_primary fill-[#90A4AE]"
              /> 
              Edit
            </h4>
            {/* Delete Button */}
            <h4 onClick={deleteaddress} className="flex group items-center cursor-pointer hover:text-light_primary gap-x-[6px] p-[2px] text-blue_gray_300 text_16_1 w-full justify-center md:w-auto">
              <Icons
                type="delete"
                className="group-hover:fill-light_primary fill-[#90A4AE]"
              /> 
              Delete
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
