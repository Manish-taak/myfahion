"use client";
import Accordion from "@/components/Accordion";
import Headingsection from "@/components/HeadingSection";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Policytittle from "@/components/ui/PolicyTittle";
import Icons from "@/icons/Index";
import React, { useEffect, useState } from "react";
import Checkbox from "@/components/ui/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Contactus from "@/validationSchema/ContactUsSchema";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * Contact page component.
 * Renders a form for contacting with inputs for full name, email, mobile, subject, description, and a submit button.
 * Uses react-hook-form for form handling and validation using ContactUs schema.
 * Displays contact details and a list of frequently asked questions.
 */
const Page = () => {
  // Initialize useForm hook from react-hook-form with ContactUs schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Contactus),
  });

  // Function to handle form submission
  const onSubmit = (data: any) => {
    console.log(data);
    // display form data on success
    //  alert data 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
  };

  // State to manage checkbox state
  const [checked, Setchecked] = useState(null);

  return (
    <>
      {/* Contact section */}
      <section className="mt-[159px]">
        <div className=" py-10 md:py-[30px] bg-extra_bg hidden md:block">
          {/* Breadcrumb and policy title */}
          <NextBreadcrumb
            bgcolor="bg-extra_bg"
            className="p-[0px_!important] hidden md:block"
          />
          <Policytittle
            title="Contact Us"
            className="md:mt-[60px] hidden md:block"
          />
        </div>
        {/* Main container */}
        <div className="container  md:py-[60px] xl:py-[80px] ">
          <div className=" grid lg:grid-cols-2">
            {/* Left section: Contact information */}
            <div className=" p-5 md:p-[30px] flex flex-col items-center lg:items-start lg:max-w-[645px]">
              <h2 className="text_34_24 text-light_primary">
                Get in Touch With Us
              </h2>
              <p className="text-blue_gray_400 text_16_1_12 mt-5 text-center lg:text-start">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              {/* Contact details */}
              <div className="mt-10 flex flex-col gap-y-[30px] max-w-[535px]">
                {/* Contact item: Phone */}
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <Icons className="max-w-6 w-full" type="darkcall" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    (180) 01800 180
                    <span className="text-blue_gray_400 text_14_1_10">
                      (Mon - Sat 10AM - 6PM)
                    </span>
                  </h4>
                </div>
                {/* Contact item: Email */}
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <Icons className="max-w-6 w-full" type="darkmail" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    dummyemail@gmail.com
                  </h4>
                </div>
                {/* Contact item: Address */}
                <div className="flex items-center flex-col  lg:flex-row gap-y-[10px] lg:gap-y-0 gap-x-5">
                  <Icons className="max-w-6 w-full " type="darklocation" />
                  <h4 className="text_20_16 text-blue_gray_500 text-center lg:text-start">
                    Akshya Colony 1st Block 1st Cross, Rammurthy Nagar,
                    Bangalore-560016
                  </h4>
                </div>
              </div>
            </div>
            {/* Right section: Contact form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Form grid */}
                <div className="grid md:grid-cols-2 gap-[30px]">
                  {/* Full Name input */}
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="type here"
                        label="Full Name"
                        inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                        error={errors.fullName?.message}
                      />
                    )}
                  />
                  {/* Email input */}
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="type here"
                        label="Email Address"
                        inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                        error={errors.email?.message}
                      />
                    )}
                  />
                  {/* Mobile input */}
                  <Controller
                    name="mobile"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="type here"
                        label="Mobile"
                        inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                        error={errors.mobile?.message}
                      />
                    )}
                  />
                  {/* Subject input */}
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="type here"
                        label="Subject"
                        inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4"
                        error={errors.subject?.message}
                      />
                    )}
                  />
                </div>
                {/* Description input */}
                <div className="mt-[30px]">
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="type here"
                        label="Description"
                        inputclass="w-full border-[1px] border-blue_gray_100 py-[14px] px-4  h-[80px]"
                        error={errors.description?.message}
                      />
                    )}
                  />
                </div>
                {/* Checkbox for terms */}
                <div className="flex items-center my-[30px]">
                  <Checkbox
                    checked={checked}
                    Setchecked={Setchecked}
                    value="I agree to the Privacy Policy and Terms and Conditions"
                  />
                </div>
                {/* Submit button */}
                <div className="flex justify-end">
                  <Button
                    btntype="submit"
                    className=" md:max-w-[240px] w-full rounded-md   py-[10px] px-4 md:py-4 md:px-6 text_20_16"
                    varient="primary"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* FAQ section */}
        <div className=" container py-[30px] md:py-[60px] lg:py-[80px]">
          <Headingsection
            smtext="FashionCart"
            lgtext="Frequently Asked Questions"
            smtextclass="text-center"
            lgtextclass="text-center"
            headingmainclass="justify-center mb-[30px] md:mb-[60px] "
          />
          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Page;
