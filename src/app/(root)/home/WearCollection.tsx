import React from "react";
import Link from "next/link";
import Headingsection from "@/components/HeadingSection";
import Button from "@/components/ui/Button";
import Image from "next/image";

/**
 * WearCollection component displays different collections with images and links to explore categories.
 * @returns {JSX.Element} JSX element of the WearCollection component.
 */
const WearCollection = () => {
  return (
    <>
      <section className="py-10 md:py-[60px] lg:py-[80px]">
        <div className="container">
          {/* Heading section for Explore Category */}
          <Headingsection
            headingmainclass="justify-center md:justify-start"
            smtext="Category"
            lgtext="Explore Category"
            testclass="text-center md:text-start"
          />
          {/* Collection grids for smaller screens (hidden on xl breakpoint) */}
          <div className="mt-[30px] md:mt-[60px]">
            <div className="grid grid-cols-3 gap-x-[13px] xl:hidden">
              {[
                { image: "/images/mencollection.png", label: "Mans", link: "/explore-by-categories" },
                { image: "/images/womencollection.png", label: "Womens", link: "/explore-by-categories" },
                { image: "/images/childcollection.png", label: "Kids", link: "/explore-by-categories" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="border-[2px] border-[#F57E5D80] p-[4px] rounded-t-[26px] flex justify-center">
                    <Image
                      width={490}
                      height={560}
                      className="w-full rounded-t-[22px] transition-all duration-[0.8s] hover:scale-[1.1]"
                      src={item.image}
                      alt="image"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text_34_16 text-blue_gray_700 mt-[3px] tab:mt-2">
                      <Link href={item.link}>{item.label}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Collection grids for larger screens (shown after xl breakpoint) */}
          <div className="hidden xl:block mt-[30px] md:mt-[60px]">
            <div className="grid grid-cols-3 place-items-center gap-x-[30px]">
              {[
                { image: "/images/mencollection.png", label: "Mans", link: "/explore-by-categories" },
                { image: "/images/womencollection.png", label: "Womens", link: "/explore-by-categories" },
                { image: "/images/childcollection.png", label: "Kids", link: "/explore-by-categories" },
              ].map((item, index) => (
                <div key={index} className="relative before:absolute before:content-[''] before:border-2 before:border-light_primary before:max-w-[390px] before:w-full before:z-[-1] before:bottom-10 before:h-[96%] before:rounded-t-[30px] before:md:rounded-t-[60px] before:lg:rounded-t-[90px] before:xl:rounded-t-[120px] before:-left-[19px]">
                  <div className="transition-all origin-bottom-right duration-[1s] hover:scale-[1.04]">
                    <Image
                      width={490}
                      height={560}
                      className="w-full xl:max-w-[490px] rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[90px] xl:rounded-t-[120px]"
                      src={item.image}
                      alt="image"
                    />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div>
                        <Button navroute={item.link} varient="secondary" className="w-full">
                          {`${item.label} Collection`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WearCollection;
