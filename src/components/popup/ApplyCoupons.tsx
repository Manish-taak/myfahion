import Icons from '@/icons/Index';
import React, { forwardRef } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

import { applycouponstype } from '@/interFaces/type';
import useCheckbox from '@/lib/hooks/useCheckbox';

/**
 * ApplyCoupons component for applying coupons.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.cancelcoupon - Function to cancel applying coupons
 * @param {Array} props.data - Array of coupon data to display
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} ApplyCoupons component JSX
 */
const ApplyCoupons = forwardRef<HTMLDivElement, applycouponstype>(({ cancelcoupon, data }, ref) => {

    // Destructuring state and function from useCheckbox hook
    const { checkedIndex, handleCheck } = useCheckbox();

    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
            <div className='p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full'>
                <div className='flex flex-col gap-[10px] justify-between mb-[30px] items-start'>
                    <div className='flex gap-[10px] items-center justify-between w-full border-b border-blue_gray_50 pb-[30px] mb-[30px]'>
                        <h3 className='text_24 text-blue_gray_800'>Apply Coupons</h3>
                        {/* Close icon */}
                        <div onClick={cancelcoupon} className='cursor-pointer'>
                            <Icons className='w-[23px] h-[24px]' type="popupclose" />
                        </div>
                    </div>
                    {/* Input field for entering coupon */}
                    <Input label='Enter Coupons' className='w-full' inputclass='w-full border border-blue_gray_50' placeholder='Type'></Input>
                </div>
                {/* List of coupons */}
                <div className='mb-[30px] py-[10px] px-2 bg-light_primary_shades_4p'>
                    {data?.map((item, index) => (
                        <div key={index}>
                            {/* Checkbox and coupon information */}
                            <div key={index}>
                                <div className="flex text_16_2 text-blue_gray_300 items-center">
                                    {/* Checkbox section */}
                                    <div key={Date.now() + index} onClick={() => handleCheck(index)}>
                                        <div className='flex gap-[6px] justify-between items-center cursor-pointer'>
                                            <div className={"flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full"}>
                                                {/* Checkbox label */}
                                                <label className=' border border-dashed border-light_primary_light py-2 px-[14px] rounded-[4px] text-light_primary_light ml-[7px] cursor-pointer'>
                                                    {item?.checkboxValue}
                                                </label>
                                                <div className='relative flex'>
                                                    {/* Actual checkbox */}
                                                    <input
                                                        type="checkbox"
                                                        checked={index === checkedIndex}
                                                        readOnly
                                                        className={"hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"}
                                                    />
                                                    {/* Checked icon */}
                                                    {index === checkedIndex && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Coupon details */}
                            <div className='pl-[45px] pt-4 border-b border-blue_gray_100 pb-5 mb-5'>
                                <p className='text_14_1 text-blue_gray_700 pb-[6px]'>{item.promotionText}</p>
                                <span className='text_12_1 text-blue_gray_400'>{item.offerExpiry}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Savings information */}
                <div>
                    <p className='text_14_1 text-blue_gray_500 pb-[14px] text-center'>You Will Saving $20.00 With This Offer</p>
                    {/* Apply Coupon button */}
                    <Button varient='primary' className='w-full'>Apply Coupon</Button>
                </div>
            </div>
        </div>
    );
})

export default ApplyCoupons;
