"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import React, { useState } from "react";

/**
 * Page Component
 * 
 * This component renders a reset password page with a form to enter the user's email or phone number.
 * It also includes a button to submit the form and a link to resend the code.
 */
const Page: React.FC = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <section className="bg-hf_extra h-[100vh]">
        <Link href={"/"}>
          <h1 className="text-light_primary text-center text_28 pt-[40px]">
            FashionCart
          </h1>
        </Link>
        <div className="md:mt-[295px] mt-[194px] ">
          <div className=" py-[20px] px-[16px] md:p-[30px] bg-white  max-w-[343px] md:max-w-[510px] w-full m-auto  text-center flex flex-col gap-[30px]">
            <h2 className=" text_24_20 text-blue_gray_700">
              Reset Your Password
            </h2>
            {/* Email or Phone field */}
            <Input
              placeholder="+91 98765 43210"
              label="Email or Phone"
              inputparent="border-[1px] - w-full py-[14px] px-4 rounded-[6px]"
              inputclass="p-0"
              className="text_16_1 text-blue_gray_600 text-start"
              type={`${show === true ? "text" : "password"}`}
              showtype={show}
              show={true}
              setshow={setshow}
            />
            <div className="flex flex-col gap-5">
              {/* forget btn */}
              <Button
                varient="primary"
                className={"w-full py-[14px] px-[18px] text_18 rounded-[6px]"}
              >
                Forgot
              </Button>
              <span className="text-light_primary text_16_2 cursor-pointer">
                Resend Code
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
