

"use client";
import Headingsection from "@/components/HeadingSection";
import React, { useEffect, useState } from "react";
import Brandtag from "../home/BrandTag";
import UserThoughts from "../home/UserThougths";
import Swipercardsectioncommon from "@/components/Swiper";
import Button from "@/components/ui/Button";
import postcarddata from "@/json/blogpostcard.json";
import Image from "next/image";
import Counter from "./component/Counter";

/**
 * The main page component for FashionCart.
 * @returns {JSX.Element} The rendered page component.
 */
const Page = () => {
  return (
    <>
      <section className="container py-5 md:py-[60px] xl:py-[80px] mt-[159px]">
        <div className="mt-[10px]">
          {/* Main Heading */}
          <h2 className="text_60_32_sec_heading text-blue_gray_800 text-center">
            FashionCart is India Best For The Latest Fashion.
          </h2>
          <p className="text_20_16 text-blue_gray_400 text-center pt-5 md:pt-[30px]">
            Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="my-[30px] md:my-[60px]">
            {/* Desktop Image */}
            <Image
              className="w-full rounded-lg md:block hidden "
              src="/images/aboutbanner.png"
              alt="Description of the image"
              width={1590}
              height={540}
            />
            {/* Mobile Image */}
            <Image
              className="w-full rounded-lg md:hidden"
              src="/images/aboutbannerresponsive.png"
              alt="Description of the image"
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div>
            {/* Heading Section */}
            <Headingsection
              headingmainclass="justify-center text-center md:justify-start"
              smtext="FashionCart"
              lgtext="About Us FashionCart"
              lgtextclass="text-center md:text-start"
              smtextclass="text-center md:text-start"
            />
          </div>
          <p className="pt-5 md:pt-10 text_24_16 text-blue_gray_600">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage.
          </p>
          <div className="grid grid-cols-2 gap-y-[10px] gap-x-[13px] md:gap-y-[20px] md:gap-x-[20px] xl:gap-[30px] mt-[14px] md:mt-[25px] xl:mt-10">
            {/* List of Points */}
            <li className="text_20_14 text-blue_gray_400 ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              More recently desktop publishing software like PageMaker including
              versions Lorem Ipsum.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </li>
            <li className="text_20_14 text-blue_gray_400 ">
              More recently desktop publishing software like Aldus PageMaker
              versions of Lorem Ipsum.
            </li>
          </div>
        </div>
        {/* Brand Tag Component */}
        <Brandtag />
        <div className="py-10 md:py-[60px] xl:py-[80px] flex flex-col min-[1125px]:flex-row gap-x-[120px]">
          <div className="xl:max-w-[535px] 2xl:py-[57px] flex flex-col">
            {/* Heading Section */}
            <Headingsection
              headingmainclass="justify-center text-center md:justify-start"
              smtext="FashionCart"
              lgtext="Our Manufacture Process"
              lgtextclass="text-center md:text-start"
              smtextclass="text-center md:text-start"
            />
            <p className="text_20_16 text-blue_gray_600 text-center lg:text-justify mt-5 xl:mt-[30px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusanti doloremque laudantium, totam rem aperiam, eaque ipsa
              quae architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text_20_16 text-blue_gray_600 text-center lg:text-justify mt-[10px] xl:mt-5">
              Neque porro quisquam est, qui dolorem ipsum dolor sit amet,
              consectetur, tempora incidunt ut labore et dolore magnam.
            </p>
          </div>
          <div className="mt-5 w-full">
            {/* Image for Manufacture Process */}
            <Image
              width={956}
              height={638}
              src={"/images/video.png"}
              alt="processbg"
              className="min-[1125px]:max-w-[956px] w-full"
            />
          </div>
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px] grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[10px] md:gap-5 xl:gap-[30px]">
          {/* Counter Components */}
          <Counter
            start={0}
            end={5}
            numbertext="M"
            duration={2000}
            text="Registered Users"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Counter
            start={0}
            end={20}
            duration={2000}
            text="Cities Covered"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Counter
            start={0}
            end={80}
            duration={2000}
            text="Stores in India"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Counter
            start={0}
            end={500}
            duration={2000}
            text="Top Brands"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div>
            <div className="flex justify-center md:justify-start">
              {/* Heading Section */}
              <Headingsection
                smtext="FashionCart"
                lgtext="FashionCart Goals"
                smtextclass="md:text-start"
                lgtextclass="md:text-start"
              />
            </div>
            <p className="text-blue_gray_600 text_20_16 mt-5 xl:mt-10">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam. Quis autem eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
            <p className="text-blue_gray_600 text_20_16 mt-[10px] xl:mt-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="mt-10 md:mt-[60px] xl:mt-[80px] grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-[20px] xl:gap-x-[30px]">
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              {/* Mission Section */}
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-start">
                Our Mission
              </h4>
              <p className="text-blue_gray_500 text_16_1_14 mt-[10px] xl:mt-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
              </p>
            </div>
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              {/* Vision Section */}
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-start">
                Our Vision
              </h4>
              <p className="text-blue_gray_500 text_16_1_14 mt-[10px] xl:mt-5">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because its pain, because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of ever
                undertakes laborious physical exercise.
              </p>
            </div>
            <div className="border-b-[1px] pb-[10px] mb-[10px] md:border-none md:pb-0 md:mb-0">
              {/* Approach Section */}
              <h4 className="text-blue_gray_700 text_34_20 text-center md:text-start">
                Our Approach
              </h4>
              <p className="text-blue_gray_500 text_16_1_14 mt-[10px] xl:mt-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti corrupti quos dolores
                et quas molestias excepturi sint occaecati cupiditate non
                provident, similique in culpa qui officia deserunt mollitia
                animi, est laborum et dolorum fuga.
              </p>
            </div>
          </div>
        </div>
        {/* User Thoughts Component */}
        <div>
          <UserThoughts />
        </div>
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div className="pb-[30px]">
            {/* Swiper Card Section */}
            <Swipercardsectioncommon
              blogpostcard={postcarddata}
              card="blogcard"
              headingmainclass="items-center justify-center md:justify-between"
              smtext="Blog"
              lgtext="Newly Blog Posts"
              topbtn={true}
              custombttombtnclass={"block md:hidden pt-[30px]"}
              customtopbtnclass={"md:block hidden"}
              testclass="text-center md:text-start"
              bottombtn={true}
              pagination={true}
            />
          </div>
        </div>
        <div className="pt-10 px-5 md:py-[60px] xl:py-[80px] bg-[#DBDAD8] rounded-md lg:hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="flex justify-center flex-col">
              <div>
                {/* Heading Section */}
                <Headingsection
                  smtext="Newsletter"
                  lgtext="Get Updated Every Time With Our Blog Posts"
                  smtextclass="text-center md:text-start"
                  lgtextclass="text-center md:text-start"
                />
              </div>
              <div className="lg:max-w-[450px] mt-[60px] flex flex-col lg:flex-row gap-x-[10px]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 px-[14px] placeholder:text_16_2 placeholder:text-blue_gray_400 rounded-lg w-full"
                />
                <Button
                  varient="primary"
                  className="uppercase py-[14px] px-[18px] rounded-lg mt-[10px]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <Image src={"/images/subscribebg2.png"} width={1590} height={500} alt="image" />
          </div>
        </div>
        <div className="pt-10 md:pt-[60px] xl:pt-[80px] hidden lg:block">
          <div className="relative">
            <Image src={"/images/subscribebg.png"} width={1590} height={500} className="rounded-lg" alt="image" />
            <div className="max-w-[855px] absolute top-10 left-8 2xl:top-[104px] 2xl:left-[60px]">
              <div>
                {/* Heading Section */}
                <Headingsection
                  smtext="Newsletter"
                  lgtext="Get Updated Every Time With Our Blog Posts"
                  smtextclass="text-center md:text-start"
                  lgtextclass="text-center md:text-start md:text-[30px] xl:text-[60px]"
                />
              </div>
              <div className="max-w-[450px] mt-[60px] flex gap-x-[10px]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 px-[14px] placeholder:text_16_2 placeholder:text-blue_gray_400 rounded-lg w-full"
                />
                <Button
                  varient="primary"
                  className="uppercase py-[14px] px-[18px] rounded-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
