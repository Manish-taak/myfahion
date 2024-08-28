import Icons from "@/icons/Index";
import React, { forwardRef } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { closepopup } from "@/interFaces/type";

/**
 * ChangePassword component for changing user password.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} ChangePassword component JSX
 */


const ChangePassword = forwardRef<HTMLDivElement, closepopup>(({ closepopup }, ref) => {
  return (
    <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
      <div className="py-5 px-4 md:p-[30px] bg-white min-w-[343px] md:w-[510px] rounded-[8px]">
        {/* Header */}
        <div className="flex justify-between pb-[30px]">
          <h2 className="text_24 text-blue_gray_800">Change Password</h2>
          {/* Close icon */}
          <div onClick={closepopup} className="cursor-pointer">
            <Icons type="popupclose" />
          </div>
        </div>
        {/* Input fields for current password, new password, and confirm new password */}
        <div className="flex flex-col gap-5">
          <Input
            inputparent="border-[1px] border-blue_gray_100 rounded-[6px]"
            inputclass="w-full"
            placeholder="xxxxxxxx"
            label="Current Password"
          />
          <Input
            inputparent="border-[1px] border-blue_gray_100 rounded-[6px]"
            inputclass="w-full"
            placeholder="xxxxxxxx"
            label="New Password"
          />
          <Input
            inputparent="border-[1px] border-blue_gray_100 rounded-[6px]"
            inputclass="w-full"
            placeholder="xxxxxxxx"
            label="Confirm New Password"
          />
        </div>
        {/* Change password button */}
        <Button className="w-full mt-[30px]" varient="primary">
          Change Password
        </Button>
      </div>
    </div>
  );
});

export default ChangePassword;
