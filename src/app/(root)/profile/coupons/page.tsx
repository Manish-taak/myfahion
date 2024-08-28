import Icons from "@/icons/Index"; // Importing Icons component from icons/Index.tsx
import { cn } from "@/utils/cn"; // Importing cn function from utils/cn.ts
import React from "react"; // Importing React and its components
import { couponcardprops, profileinterface } from "@/interFaces/type"; // Importing types/interfaces from interFaces/type.ts
import CouponCard from "@/components/CouponsCard"; // Importing CouponCard component from components/CouponsCard.tsx
import couponsData from "@/json/coupons.json"; // Importing coupons data from json/coupons.json

/**
 * Page Component
 * Renders a page to display user's coupons.
 * @param classname - CSS class name for styling purposes.
 * @param closebtn - Function to close the sidebar or component.
 * @param profilesidebar - Indicates the current active sidebar item.
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  return (
    <>
      {/* Main container with dynamic class names using cn utility function */}
      <div className={cn`flex flex-col gap-y-5 tab:p-[30px] bg-white w-full max-[991px]:overflow-scroll max-[991px]:h-screen  tab:rounded-[14px] ${classname}`} >
        {/* Fixed header section */}
        <div
          className={`  ${profilesidebar === 7 ? "fixed right-0 left-0 top-0 " : "static"
            } bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] py-5 px-4 min-[991px]:hidden  flex gap-[14px] items-center justify-between`}
        >
          {/* Header title with back button */}
          <h2
            onClick={closebtn}
            className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]"
          >
            <Icons type="leftarrowback" /> {/* Back arrow icon */}
            My Coupons {/* Header title */}
          </h2>
          <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" /> {/* Heart icon */}
        </div>
        {/* Static header for large screens */}
        <div className="w-full border-b-[1px] border-blue_gray_50 pb-[30px] hidden min-[991px]:block">
          <h2 className="text_24 text-blue_gray_800">My Coupons</h2> {/* Static header title */}
        </div>
        {/* Main content section */}
        <div className="max-[990px]:pt-[90px] max-[990px]:px-4 max-[990px]:pb-5  max-[990px]:bg-extra_bg">
          <div className="flex flex-col gap-y-[10px] md:gap-y-5 bg-white  rounded-[6px] ">
            {/* Mapping over couponsData to render CouponCard component */}
            {couponsData.map((coupon: couponcardprops, index: number) => (
              <CouponCard
                key={index}
                discount={coupon.discount}
                extraDiscount={coupon.extraDiscount}
                maxDiscount={coupon.maxDiscount}
                expiryDate={coupon.expiryDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
