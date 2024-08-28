"use client";

// Import necessary components and libraries
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { forgetpassword } from "@/interFaces/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ForgetPasswordSchema } from "@/validationSchema/authSchema/ForgetPasswordSchema";

/**
 * Page Component
 * 
 * This component renders a form for resetting the user's password. It includes fields
 * for entering a new password and confirming it, along with a submit button to save the new password.
 */
const Page: React.FC = () => {
  // State hooks for toggling password visibility and managing form data
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);

  // Set up form handling using react-hook-form and yup for validation
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgetPasswordSchema),
  });

  /**
   * Function to handle form submission
   * @param {any} data - Form data
   */
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      {/* Main section container */}
      <section className="bg-hf_extra pb-[251px] lg:pb-[362px]">
        <div className="container">
          {/* Link to home page */}
          <Link href={"/"}>
            <h1 className="text-light_primary text-center text_28 pt-[40px]">
              FashionCart
            </h1>
          </Link>

          {/* Form container */}
          <div className="py-[20px] px-[16px] md:p-[30px] bg-white max-w-[343px] mt-[166px] md:mt-[263px] md:max-w-[510px] w-full m-auto text-center">
            <h2 className="pb-[30px] text_24_20 text-blue_gray_700">
              Enter New Password
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* New Password Field */}
              <Controller
                name="newpassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="xxxxxxx"
                    label="  New Password"
                    inputparent="border-[1px] - w-full py-[14px] px-4 rounded-[6px]"
                    inputclass="p-0"
                    className="text_16_1 text-blue_gray_600 text-start"
                    type={`${show === true ? "text" : "password"}`}
                    showtype={show}
                    show={true}
                    setshow={setshow}
                    error={errors.newpassword?.message}
                  />
                )}
              />
              {/* Confirm New Password Field */}
              <Controller
                name="confirmpassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="xxxxxxx"
                    label="   Confirm New Password"
                    inputparent="border-[1px] - w-full py-[14px] px-4 rounded-[6px]"
                    inputclass="p-0"
                    className="text_16_1 text-blue_gray_600 text-start mt-5 md:mt-[30px]"
                    type={`${show1 === true ? "text" : "password"}`}
                    showtype={show1}
                    show={true}
                    setshow={setshow1}
                    error={errors.confirmpassword?.message}
                  />
                )}
              />

              {/* Submit Button */}
              <Button
                btntype="submit"
                varient="primary"
                className={
                  "w-full text_18 py-[14px] px-[18px] rounded-[6px] mb-[20px] mt-[30px]"
                }
              >
                Save New Password
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
