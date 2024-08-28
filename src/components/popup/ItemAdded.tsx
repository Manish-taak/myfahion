import Icons from '@/icons/Index';
import React, { forwardRef } from 'react';
import Input from '../ui/Input';
import { closepopup } from '@/interFaces/type';

/**
 * ItemAdded component for finding delivery address.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} ItemAdded component JSX
 */
const ItemAdded = forwardRef<HTMLDivElement, closepopup>(({ closepopup }, ref) => {
    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[510px] w-full">
            <div className="p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full">
                {/* Header */}
                <div className="flex flex-col gap-[10px] justify-between items-start">
                    <div className="flex gap-[10px] items-center justify-between w-full border-b pb-[30px] mb-[30px] border-blue_50">
                        <h3 className="text_24 text-blue_gray_800">
                            Find Delivery Address
                        </h3>
                        {/* Close icon */}
                        <div className="cursor-pointer" onClick={closepopup}>
                            <Icons className="w-[23px] h-[24px]" type="popupclose" />
                        </div>
                    </div>
                    {/* Input section */}
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text_16_1 text-blue_gray_600">Enter Pincode</span>
                        <div className="flex gap-[10px] justify-between border border-blue_gray_50 py-[14px] px-4 items-center">
                            <input className="outline-none border-none w-full" placeholder="160059" type="text" />
                            <span className="text-light_primary text-nowrap cursor-pointer">Find Address</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ItemAdded;
