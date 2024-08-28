
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Icons from "@/icons/Index";
import Checkbox from "@/components/ui/Checkbox";
import { registeruser } from "@/interFaces/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterSchema } from "@/validationSchema/authSchema/RegisterSchema";

/**
 * Page Component
 * 
 * This component handles user registration. It renders a form for the user to enter their details,
 * validates the input using Yup and react-hook-form, and manages state with React hooks.
 */
const Page: React.FC = () => {
  const [register, setregister] = useState<registeruser[]>([]);

  /**
   * Retrieves data from local storage on component mount.
   */
  useEffect(() => {
    const storedData = localStorage.getItem("registerdata");
    storedData === "[]" ||
      (storedData === "{}" && setregister(JSON.parse(storedData)));
  }, []);

  // react-hook-form control
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  /**
   * Handles form submission.
   * 
   * @param {any} data - Data from the form.
   */
  const onSubmit = (data: any) => {
    console.log(data);
    const isDuplicate = register.some(
      (item) => JSON.stringify(item) === JSON.stringify(data)
    );

    if (!isDuplicate) {
      const newDataArray = [...register, data];
      setregister(newDataArray);
      localStorage.setItem("registerdata", JSON.stringify(newDataArray));
      reset();
      toast.success("Your account created successfully");
    } else {
      toast.error("User already exists");
      console.log("Data already exists!");
    }
  };

  const [checked, Setchecked] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="bg-hf_extra pb-[110px] lg:pb-[221px]">
        <Link href={"/"}>
          <h1 className="text-light_primary text-center text_28 pt-[40px]">
            FashionCart
          </h1>
        </Link>
        <div className="bg-white roumded-[10px] max-w-[343px] md:max-w-[510px] container w-full lg:mt-[47px]">
          <div className="md:mt-[47px] mt-[52px] text-center">
            <div className="md:p-[30px] py-[20px] px-[16px] flex gap-[30px] flex-col">
              <h2 className="text_24_20 text-blue_gray_700">Register Here</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5 md:gap-[30px]">
                  {/* First Name Input Field */}
                  <Controller
                    name="firstname"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="John"
                        label="First Name"
                        inputclass="w-full"
                        className="text_16_1 text-blue_gray_600 text-start"
                        inputparent="rounded-[6px] border-[1px]"
                        error={errors.firstname?.message}
                      />
                    )}
                  />
                  {/* Last Name Input Field */}
                  <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Doe"
                        label="Last Name"
                        inputclass="w-full"
                        className="text_16_1 text-blue_gray_600 text-start"
                        inputparent="rounded-[6px] border-[1px]"
                        error={errors.lastname?.message}
                      />
                    )}
                  />
                  <div className="col-[1_/_span_2]">
                    {/* Email Address Input Field */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="dummyemail@gmail.com"
                          label="Email Address"
                          inputclass="w-full"
                          className="text_16_1 text-blue_gray_600 text-start"
                          inputparent="rounded-[6px] border-[1px]"
                          error={errors.email?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="col-[1_/_span_2]">
                    {/* Mobile Input Field */}
                    <Controller
                      name="mobileno"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="+91 12345 67890"
                          label="Mobile"
                          inputclass="w-full"
                          className="text_16_1 text-blue_gray_600 text-start"
                          inputparent="rounded-[6px] border-[1px]"
                          error={errors.mobileno?.message}
                        />
                      )}
                    />
                  </div>
                  {/* Password Input Field */}
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="xxxxxxx"
                        label="Password"
                        inputclass="w-full"
                        className="text_16_1 text-blue_gray_600 text-start"
                        inputparent="rounded-[6px] border-[1px]"
                        error={errors.password?.message}
                      />
                    )}
                  />
                  {/* Confirm Password Input Field */}
                  <Controller
                    name="confirmpassword"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="xxxxxxx"
                        label="Confirm Password"
                        inputclass="w-full"
                        className="text_16_1 text-blue_gray_600 text-start"
                        inputparent="rounded-[6px] border-[1px]"
                        error={errors.confirmpassword?.message}
                      />
                    )}
                  />
                  <div className="col-[1_/_span_2] flex mb-[30px]">
                    {/* Checkbox  */}
                    <Checkbox
                      checked={checked}
                      Setchecked={Setchecked}
                      labletextclass="text-sm md:text-base"
                      value="Privacy Policy and Terms of Service apply"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <Button
                  btntype="submit"
                  varient="primary"
                  className={"w-full text_20_2 rounded-[6px]"}
                >
                  Register
                </Button>
              </form>
              <div className="flex flex-col gap-[30px]">
                {/* Request OTP Link */}
                <span className="text-light_primary">
                  <Link href="/otp">Request OTP </Link>
                </span>
                <div className="flex justify-between gap-[30px]">
                  {/* Facebook Login Button */}
                  <div className="md:max-w-[130px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra w-[97px] py-[14px] px-[20px] md:w-full border-[1px] flex justify-center cursor-pointer">
                    <Icons type="fb" />
                  </div>

                  {/* Google Login Button */}
                  <div className="md:max-w-[130px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra w-[97px] py-[14px] px-[20px] md:w-full border-[1px] flex justify-center cursor-pointer">
                    <Icons type="google" />
                  </div>
                  {/* Apple Login Button */}
                  <div className="md:max-w-[130px] rounded-[6px] hover:bg-hf_extra hover:border-hf_extra py-[14px] px-[20px] w-[97px] md:w-full border-[1px] flex justify-center cursor-pointer">
                    <Icons type="apple" />
                  </div>
                </div>
                <p className="text_16_2 text-blue_gray_500">
                  Already A Member?
                  {/* login Link */}
                  <span className="text-light_primary">
                    <Link href="/login"> Sign In </Link>
                  </span>
                  here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
