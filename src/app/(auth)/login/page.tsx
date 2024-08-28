"use client";
import React, { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { loginuser } from "@/interFaces/type";
import loginSchema from "@/validationSchema/authSchema/LoginSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Login Page Component
 * 
 * This component handles user login using a form with email/phone and password fields.
 * It utilizes React Hook Form with Yup for validation, stores login data locally,
 * and displays toast messages using react-toastify.
 */


const Page: React.FC = () => {

  const [show, setshow] = useState(false); // State to toggle password visibility
  const [login, setlogin] = useState<loginuser[]>([]); // State to store login data retrieved from local storage

  // Retrieve data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("logindata");
    // Parse stored data if not empty
    storedData === "[]" || storedData === "{}" && setlogin(JSON.parse(storedData));
  }, []);

  // React Hook Form configuration
  const {
    control,                // Form control from react-hook-form
    handleSubmit,           // Function to handle form submission
    formState: { errors }, // Errors object containing validation errors
    reset,                 // Function to reset form fields after submission
  } = useForm({
    resolver: yupResolver(loginSchema), // Yup schema resolver for validation
  });

  /**
   * Handle form submission
   * @param {Object} data - Form data containing emailOrPhone and password fields.
   */

  const onSubmit = (data: any) => {
    console.log(data); // Log form data for debugging

    // Check if submitted data is already in login state
    const isDuplicate = login.some((item) => JSON.stringify(item) === JSON.stringify(data));

    if (!isDuplicate) {
      // Add new login data to state and local storage
      const newDataArray = [...login, data];
      setlogin(newDataArray);
      localStorage.setItem("logindata", JSON.stringify(newDataArray));
      toast.success("You have logged in"); // Display success toast message
      reset(); // Reset form fields
    } else {
      toast.error("Check your email or password"); // Display error toast message
      console.log("Data already exists!");
      reset(); // Reset form fields
    }
  };

  return (
    <>
      {/* Toast container for displaying toast messages */}
      <ToastContainer />

      {/* Login Section */}
      <section className="bg-hf_extra  pb-[110px] lg:pb-[221px]">
        {/* Logo with link to home page */}
        <Link href={"/"}>
          <h1 className="text-light_primary text-center text_28 pt-[40px]">
            FashionCart
          </h1>
        </Link>

        {/* Login Form Container */}
        <div className="bg-white rounded-[10px] max-w-[343px] md:max-w-[510px] w-full m-auto mt-[52px] lg:mt-[144px]">
          <div className="text-center">
            <div className="md:p-[30px] py-[20px] px-[16px] flex gap-[30px] flex-col">
              {/* Form Header */}
              <h2 className="text_24_20 text-blue_gray_700">
                Hi, Welcome Back!
              </h2>

              {/* Login Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5   md:gap-[30px] flex-col mb-[30px]">
                  {/* Email or Phone Input Field */}
                  <Controller
                    name="emailOrPhone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="+91 98765 43210"
                        label="Email or Phone"
                        inputclass="border-[1px]  w-full"
                        className="text_16_1 text-blue_gray_600 text-start"
                        error={errors.emailOrPhone?.message}
                      />
                    )}
                  />

                  {/* Password Input Field */}
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="xxxxxxx"
                        label="Password"
                        inputparent="border-[1px] - w-full py-[14px] px-4 rounded-[6px]"
                        inputclass="p-0"
                        className="text_16_1 text-blue_gray_600 text-start"
                        type={`${show === true ? "text" : "password"}`}
                        showtype={show}
                        show={true}
                        setshow={setshow}
                        error={errors.password?.message}
                      />
                    )}
                  />

                  {/* Forgot Password Link */}
                  <Link className="text-end" href="/reset-password">
                    <span className="text-blue_gray_500 text_14_1">
                      Forgot password?
                    </span>
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  btntype="submit"
                  varient="primary"
                  className={"w-full text_18 py-[14px] px-[18px] rounded-[6px] "}
                >
                  Login
                </Button>
              </form>

              {/* Request OTP Link */}
              <span className="text-light_primary">
                <Link href="/otp">Request OTP</Link>
              </span>

              {/* Social Media Login Buttons */}
              <div className="flex justify-between">
                {/* Facebook Login Button */}
                <div className="md:max-w-[130px] max-w-[92px] py-[14px] px-[20px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra w-full border-[1px] flex justify-center cursor-pointer">
                  <Icons type="fb" className="" />
                </div>

                {/* Google Login Button */}
                <div className="md:max-w-[130px] max-w-[92px] py-[14px] px-[20px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra w-full border-[1px] flex justify-center cursor-pointer">
                  <Icons className="" type="google" />
                </div>

                {/* Apple Login Button */}
                <div className="md:max-w-[130px] max-w-[92px] py-[14px] px-[20px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra w-full border-[1px] flex justify-center cursor-pointer">
                  <Icons type="apple" />
                </div>
              </div>

              {/* Register Link */}
              <p className="text_16_2 text-blue_gray_700">
                Don't Have An Account?
                <span className="text-light_primary text_16_2">
                  {/* Register Link */}
                  <Link href="/register"> Register</Link>
                </span>
                here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
