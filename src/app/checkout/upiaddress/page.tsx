"use client"

import React, { useState } from 'react'
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox'
import { sidebarAccordion } from '@/utils/funcation';
import Image from 'next/image';
import Upiaddressdata from "@/json/upiaddress.json"
import { cn } from '@/utils/cn';
import Icons from '@/icons/Index';

/**
 * Page component for rendering options and functionalities related to UPI addresses.
 * @component
 * @returns {JSX.Element} JSX element representing the Page component.
 */
const Page = () => {

    // State for managing checkbox status and current selected index
    const [checked, Setchecked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    // Handle click event to toggle the selected index
    const handleDivClick = (index: number) => {
        setCurrentIndex(index === currentIndex ? null : index);
    };

    return (
        <div className='tab:p-4 lg:p-[30px] tab:border-[1px] rounded-[10px] border-blue-50'>
            {/* Section header */}
            <h2 className='hidden tab:block tab:border-b-[1px] tab:pb-[30px] tab:mb-[30px] border-blue_gray_50 text_24_14 text-blue_gray_700'>
                Choose Option
            </h2>

            {/* List of UPI addresses */}
            <div className='flex flex-col gap-y-5 md:gap-y-[30px]'>
                {Upiaddressdata?.map((option, index) => (
                    <div key={option?.id || Date.now() + index} className='p-3 border-[1px] border-extra_4 rounded-[6px]'>
                        <div onClick={() => handleDivClick(index)} className='flex gap-[6px] justify-between items-center cursor-pointer'>
                            <div className='flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full'>
                                {/* UPI address label */}
                                <label className='cursor-pointer'>
                                    {option?.value}
                                </label>
                                <div className='relative flex'>
                                    {/* Checkbox for selecting UPI address */}
                                    <input
                                        type="checkbox"
                                        checked={index === currentIndex}
                                        readOnly
                                        className={cn(
                                            "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
                                            "checked:bg-light_primary checked:before:bg-light_primary",
                                        )}
                                    />
                                    {/* Icon displayed when UPI address is selected */}
                                    {index === currentIndex && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                                </div>
                            </div>
                            {/* UPI address logo */}
                            <Image src={`/images/${option.imageSrc}`} className='max-w-[30px] w-full h-[30px]' width={30} height={30} alt='logo' />
                        </div>
                        {/* Hidden section that expands when UPI address is selected */}
                        <div className={`h-0 overflow-hidden duration-500 ${index === currentIndex ? 'tab:h-[76px]' : ''}`}>
                            <div className='justify-end tab:flex hidden pt-[20px]'>
                                {/* Continue button */}
                                <Button className='w-full max-w-[180px] py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='primary'>Continue</Button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Section for entering new UPI ID */}
                <div className='p-3 border-[1px] border-extra_4 rounded-[6px]'>
                    <div onClick={(e) => { sidebarAccordion(e); Setchecked(!checked) }} className='flex gap-[6px] justify-between items-center'>
                        {/* Checkbox for adding new UPI ID */}
                        <Checkbox checked={checked} Setchecked={Setchecked} value='Your UPI Id' />
                    </div>
                    <div className='tab:h-0 tab:overflow-hidden duration-500'>
                        <div className='flex justify-between gap-[30px] py-5 items-end lg:flex-row flex-col'>
                            <div className='flex flex-col gap-2 w-full'>
                                {/* Label for UPI ID input */}
                                <h3 className='text_16_1 text-blue_gray_600'>Your UPI ID</h3>
                                <div className='flex border-[1px] border-blue_gray_100 py-[14px] px-4 rounded-[6px]'>
                                    {/* Input field for UPI ID */}
                                    <input className='w-full outline-none' placeholder='dummy@bankname' type="text" />
                                    {/* Verify button */}
                                    <span className='text-light_primary cursor-pointer'>Verify</span>
                                </div>
                            </div>
                            {/* Pay button */}
                            <Button className='md:max-w-[224px] w-full h-fit py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='primary'>Pay $25.00</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Page;
