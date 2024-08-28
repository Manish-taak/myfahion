"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Policytittle from "@/components/ui/PolicyTittle";
import Icons from "@/icons/Index";
import React from "react";
import Image from "next/image";
import InputSelect from "@/components/InputSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { JobApplySchema } from "@/validationSchema/JobApplySchema";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";


/**
 * Page component for job application form.
 * @component
 * @returns {JSX.Element} Job application form component
 */


const Page = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(JobApplySchema),
  });

  /**
   * Handles form submission.
   * @async
   * @function onSubmit
   * @param {Object} data - The form data
   */
  const onSubmit = async (data: any) => {

    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/jobForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const result = await response.json();
      console.log(result);

      reset();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      {/* Main section for the job application form */}
      <section className="mt-[159px]">

        {/* Breadcrumb component for navigation, visible only on medium screens and above */}
        <NextBreadcrumb
          className="hidden md:block"
          bgcolor="bg-extra_bg"
        />

        {/* Container for form content with responsive padding */}
        <div className="container py-10 md:py-[60px] xl:py-[80px]">
          <div className="p-3 md:p-0">

            {/* Job title section */}
            <div>
              <Policytittle
                title="Software Dev Engineer Job, FashionCart Bussiness (India)"
                className="text_34_24 text-blue_gray_800"
              />
            </div>

            {/* Job details section */}
            <div>
              <div className="grid grid-cols-2 gap-y-[10px] md:flex items-center justify-center gap-x-5 mt-5 md:mt-[30px] p-4 md:p-0">

                {/* Job location */}
                <h4 className="text_16_1_12 text-blue_gray_500 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                  <p className="text_20 text-blue_gray_500 mb-[2px]">
                    Location -
                  </p>
                  New Delhi, India
                </h4>

                {/* Job type */}
                <h4 className="text_16_1_12 text-blue_gray_500 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                  <p className="text_20 text-blue_gray_500 mb-[2px]">
                    Job Type -
                  </p>
                  Full Time
                </h4>

                {/* Experience required */}
                <h4 className="text_16_1_12 text-blue_gray_500 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                  <p className="text_20 text-blue_gray_500 mb-[2px]">
                    Experience -
                  </p>
                  0 to 4 Years
                </h4>

                {/* Job posting date */}
                <h4 className="text_16_1_12 text-blue_gray_500 flex flex-col text-start md:flex-row md:items-center lg:border-r-[1px] lg:pr-5">
                  <p className="text_20 text-blue_gray_500 mb-[2px]">
                    Posted on -
                  </p>
                  20 Aug, 2022
                </h4>

              </div>
            </div>
          </div>

          {/* Job application form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Form fields for user input */}
            <div className="mt-[30px] md:mt-10 lg:mt-[50px] xl:mt-[60px] grid md:grid-cols-2 gap-5 md:gap-[30px]">

              {/* First Name */}
              <Controller
                name="firstname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Raj"
                    label="First Name"
                    inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.firstname?.message}
                  />
                )}
              />

              {/* Last Name */}
              <Controller
                name="lastname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Kumar"
                    label="Last Name"
                    inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.lastname?.message}
                  />
                )}
              />

              {/* Email Address */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="dummyemail@gmail.com"
                    label="Email Address"
                    inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.email?.message}
                  />
                )}
              />

              {/* Mobile Number */}
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="+91 98765 43210"
                    label="Mobile"
                    inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.mobile?.message}
                  />
                )}
              />

              {/* Current Location */}
              <Controller
                name="currentlocation"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="3rd Floor, Sarv Elanza, Abohar - Hanumangarh Rd, Abohar, Punjab 152116"
                    label="Current Location"
                    inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.currentlocation?.message}
                  />
                )}
              />

              {/* Gender */}
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
                      { id: 1, name: "Male" },
                      { id: 2, name: "Female" },
                      { id: 3, name: "Other" },
                    ]}
                    error={errors.gender?.message}
                  />
                )}
              />

              {/* Resume Upload */}
              <div>
                <p className="text_16_1 text-blue_gray_500 mb-[14px]">
                  Resume / CV
                </p>
                <label
                  htmlFor="file1"
                  className="text-light_primary text_16_3 uppercase py-5 md:py-[30px] border-[1px] border-dashed border-blue_gray_200 flex justify-center rounded-lg cursor-pointer"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-x-2 justify-center py-[10px] px-4 rounded-md transition-all hover:bg-light_primary hover:bg-opacity-5">
                      <Icons type="plusred" />
                      Choose File
                    </div>
                    <div>
                      <p className="text_12 text-blue_gray_200 text-center">
                        For best results, upload *.doc/*.docx/*.pdf/*.txt format
                        files only (File size should be ≤ 2MB)
                      </p>
                    </div>
                  </div>
                  <Controller
                    name="resume"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="file"
                        className="hidden"
                        id="file1"
                      />
                    )}
                  />
                </label>
                <p className="text-red-600 text-sm">{errors.resume?.message}</p>
              </div>

              {/* Cover Letter Upload */}
              <div>
                <p className="text_16_1 text-blue_gray_500 mb-[14px]">
                  Cover Letter
                </p>
                <label
                  htmlFor="file2"
                  className="text-light_primary text_16_3 uppercase py-5 md:py-[30px] border-[1px] border-dashed border-blue_gray_200 flex justify-center rounded-lg cursor-pointer"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-x-2 justify-center py-[10px] px-4 rounded-md transition-all hover:bg-light_primary hover:bg-opacity-5">
                      <Icons type="plusred" />
                      Choose File
                    </div>
                    <div>
                      <p className="text_12 text-blue_gray_200 text-center">
                        For best results, upload *.doc/*.docx/*.pdf/*.txt format
                        files only (File size should be ≤ 2MB)
                      </p>
                    </div>
                  </div>
                  <Controller
                    name="coverletter"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="file"
                        className="hidden"
                        id="file2"
                      />
                    )}
                  />
                </label>
                <p className="text-red-600 text-sm">
                  {errors.coverletter?.message}
                </p>
              </div>

            </div>

            {/* Description field */}
            <div className="mt-5 md:mt-[30px]">
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Type Here"
                    label="Description (Optional)"
                    inputclass="w-full h-[130px] border-[1px] border-blue_gray_100 py-[14px] px-4"
                    error={errors.description?.message}
                  />
                )}
              />
            </div>

            {/* Submit button and captcha image */}
            <div className="flex flex-col items-center mt-[30px]">
              <Image
                width={374}
                height={102}
                src="/images/captcha.png"
                className="max-w-[156px] md:max-w-[376px]"
                alt="captchaimg"
              />
              <Button
                btntype="submit"
                varient="primary"
                className="uppercase rounded-lg xl:max-w-[240px] w-full md:w-auto mt-5 md:mt-10 py-[14px] px-[18px] text_20_16 md:py-4 md:px-6"
              >
                Apply This Job
              </Button>
            </div>

          </form>
        </div>
      </section>

    </>
  );
};

export default Page;
