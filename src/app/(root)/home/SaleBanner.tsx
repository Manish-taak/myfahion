import React from "react";
import Link from "next/link";
import Icons from "@/icons/Index";
import Button from "@/components/ui/Button";

/**
 * SaleBanner component displays a promotional banner for a sale event.
 * @returns {JSX.Element} JSX element of the SaleBanner component.
 */
const SaleBanner = () => {
  return (
    <>
      <section className="py-10 md:py-[40px] xl:py-[80px]">
        <div className="container">
          {/* Background image section */}
          <div className="bg-[url('/images/salebg.png')] gap-[20px] md:gap-[40px] bg-center bg-cover bg-text_custom rounded-lg flex flex-col items-center py-[33px] md:pt-[55px] lg:pt-[74px] md:pb-[50px] xl:pb-[61px] xl:h-[420px]">
            <div className="relative">
              {/* Background box icon */}
              <Icons type="bgBox" />
              {/* Sale date text */}
              <h3 className="absolute top-[8px] left-[25%] text-light_primary text-center">
                20th - 24th Sep
              </h3>
            </div>
            {/* Sale information */}
            <div className="text-center">
              <h2 className="text-white text_48_20">
                Hurry Up! The Sale is Live Now
              </h2>
              <h6 className="text_20_12 text-white mt-[6px]">
                Grab Upto 40% Off on Fashion
              </h6>
            </div>
            {/* Button for shopping */}
            <div className="max-w-[148px] md:max-w-[180px] w-full">
              <Button navroute="/products" varient="primary" icon={true} className="gap-2 items-center">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleBanner;
