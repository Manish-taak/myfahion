import React from "react";
import { ordersummaryprops } from "@/interFaces/type";

/**
 * Order Summary Section Component.
 * Renders a section displaying order summary details.
 * 
 * @param {ordersummaryprops} props - The props object containing title, items, total, savings, and customStyles.
 * @param {string} props.title - The title of the order summary section.
 * @param {Array<{ label: string, value: string, valueClass?: string }>} props.items - Array of items to display with label and value.
 * @param {string} props.total - The total value to display.
 * @param {string} props.savings - The savings information to display.
 * @param {string} props.customStyles - Custom styles to apply to the component.
 * @returns {JSX.Element} React component representing the Order Summary section.
 */
const OrderSummarySec: React.FC<ordersummaryprops> = ({ title, items, total, savings, customStyles }) => {
  return (
    <div className={`rounded-[2px] tab:rounded-[8px] py-5 px-[10px] tab:p-[15px] lg:p-5 xl:p-[30px] bg-white tab:max-w-[375px] w-full h-fit ${customStyles}`}>
      <h3 className="text-blue_gray_700 text_20_16 pb-3">{title}</h3>
      <div className="flex flex-col gap-y-[10px] md:gap-y-[18px] border-t-[1px] pt-6">
        {items?.map((item: any, index: number) => (
          <div className="flex justify-between" key={index}>
            <h6 className="text_14_1 text-blue_gray_400">{item?.label}</h6>
            <h6 className={`text_14_1 ${item.valueClass}`}>{item?.value}</h6>
          </div>
        ))}
        <div className="flex justify-between border-t-[1px] pt-[10px]">
          <h6 className="text-blue_gray_700 text_16_2">Total</h6>
          <h6 className="text-blue_gray_700 text_16_2">{total}</h6>
        </div>
      </div>
      <div className='p-[8px] bg-[#02A77D14] text-center rounded-[8px] mt-6'>
        <h3 className='text-light_secondary_main text_16_2_14'>{savings}</h3>
      </div>
    </div>
  );
};

export default OrderSummarySec;
