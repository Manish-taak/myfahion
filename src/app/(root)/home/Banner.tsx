import React from "react";
import BannerSection from "@/components/BannerSection";

/**
 * Banner component displays a promotional banner section with specific content and styling.
 *
 * @returns {JSX.Element} JSX for rendering the Banner component.
 */
const Banner = () => {
  return (
    <BannerSection
      smallheading="Hurry Up Grab 40% Off"           // Small heading text for the banner.
      maintextfirst="New"                              // Main text indicating new arrivals.
      spantext="Arrivals"                            // Span text for additional emphasis.
      maintextlast="For Summer Wear"                // Main text indicating the purpose of new arrivals.
      ptext={
        "We Try Our Best Product For Shipping, Along With Tracking Info. We Inform Order Within 24hours In Your Email Address."
      }                                             // Paragraph text providing additional information about the offer.
      btndata="Shop Now"                            // Button text for the banner call-to-action button.
      banner={true}                                // Boolean indicating if it's a banner section.
      image="bannergirlimage.png"                   // Image filename for the banner.
      sectionclass="bg-[#02a77d0a] py-[30px] pt-7 md:pt-[60px] md:pb-10 md:mt-[160px] mt-[141px]" // CSS classes for styling the banner section.
      imageclass="lg:max-w-[550px] md:max-h-[821px] md:h-full" // CSS classes for styling the banner image.
      gap="md:gap-[30px] xl:gap-[120px]"              // Spacing gap between elements within the banner section.
      linkto="/products"                             // Link URL for the Shop Now button.
    />
  );
};

export default Banner;
