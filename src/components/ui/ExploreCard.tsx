import React from "react";
import { explorecard } from "@/interFaces/type";
import Image from "next/image";
import Link from "next/link";

/**
 * ExploreCard component displays an image and details of a product for exploration,
 * with a link to navigate to the products page.
 * @param {explorecard} props - Props containing data for the explore card.
 * @param {string} props.data.image - Image filename for the product.
 * @param {string} props.data.name - Name or title of the product.
 * @param {string} props.data.discount - Discount information for the product.
 * @returns {JSX.Element} JSX for the ExploreCard component.
 */
const ExploreCard = ({ data }: explorecard) => {
  return (
    <Link href={"/products"}>
      <div className="border-[1px] p-[10px] md:p-5 w-full rounded-t-[40px]">
        <div className="flex h-[42vw] lg:h-[300px] xl:h-[400px] justify-center items-center w-full pt-[5px] pb-[13px] md:py-[19px] bg-light_primary_shades_4p rounded-t-[40px]">
          {/* Product Image */}
          <Image
            className="w-full h-full object-contain"
            src={`/images/${data?.image}`}
            alt="Product Image"
            width={335}
            height={261}
          />
        </div>
        <div className="pt-[10px] md:pt-[16px] text-center">
          {/* Product Name */}
          <h2 className="text_24_16 text-blue_gray_700 pb-[2px] md:pb-[4px]">
            {data?.name}
          </h2>
          {/* Product Discount */}
          <h3 className="text_16_1_12 text-light_primary">{data?.discount}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;
