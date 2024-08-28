import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import OtpInput from "./component/InputOtp";

/**
 * Page Component
 * 
 * This component renders a page for OTP login. It includes a header,
 * OTP input field, and buttons for verifying the OTP and resending the code.
 */
const Page: React.FC = () => {
  return (
    <>
      {/* Main Section */}
      <section className="bg-hf_extra pb-[251px] lg:pb-[362px]">
        {/* Header Link to Home */}
        <Link href={"/"}>
          <h1 className="text-light_primary text-center text_28 pt-[40px]">
            FashionCart
          </h1>
        </Link>

        {/* Content Container */}
        <div className="md:mt-[265px] mt-[168px]">
          <div className="py-[20px] px-[16px] md:p-[30px] bg-white max-w-[343px] md:max-w-[510px] w-full m-auto mt-[168px] lg:mt-[265px] text-center">
            <div>
              <h2 className="text-start text_24_20 text-blue_gray_700">
                Login Via OTP
              </h2>
              <p className="py-4 md:py-[20px] text_16_2_14 text-blue_gray_400 text-left border-b">
                Enter otp, we sent on your mobile number on (1234567890)
              </p>
            </div>

            {/* OTP Input */}
            
            <div className="py-5">
              <OtpInput />
            </div>

            {/* Verify Button */}
            <Button
              varient="primary"
              className={"w-full rounded-[6px] text_20_2"}
            >
              Verify
            </Button>

            {/* Resend Code Information */}
            <div className="mt-[14px]">
              <p className="text_16_2 text-blue_gray_500">
                <span className="text-light_primary">
                  Resend Code &nbsp;
                </span>
                After (40 Sec)
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
