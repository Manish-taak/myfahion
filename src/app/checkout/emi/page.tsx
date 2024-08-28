"use client";

// Import necessary components and libraries
import React, { useState } from 'react';
import Checkbox from '@/components/ui/Checkbox';
import Emicard from '@/components/ui/EmiCard';
import Image from 'next/image';
import Emidata from '@/json/emi.json';
import banks from "@/json/banksname.json";
import { bank, Item } from '@/interFaces/type';
import Icons from '@/icons/Index';
import { cn } from '@/utils/cn';
import useCheckbox from '@/lib/hooks/useCheckbox';

/**
 * Page component for displaying Easy Monthly Installments (EMI) details.
 * @returns JSX.Element
 */

const Page: React.FC = () => {
    // State for managing the checkbox status
    const [debitcardcheckbox, Setdebitcardcheckbox] = useState(false);
    const [creditdebitcheckbox, Setcreditdebitcheckbox] = useState(false);

    // State for managing the currently selected bank and EMI index
    const [currentIndexemi, SetcurrentIndexemi] = useState<number | null>(null);

    // Destructuring state and function from useCheckbox hook
    const { checkedIndex, handleCheck } = useCheckbox();

    /**
     * Handles click event to toggle EMI card display.
     * @param {number} index - Index of the EMI card to toggle.
     */
    const currentdiv = (index: number) => {
        SetcurrentIndexemi(index === currentIndexemi ? null : index);
    }

    return (
        <>
            <div className="p-[10px] tab:p-[30px] tab:border-[1px] border-blue-50 rounded-[10px]">
                {/* Header section with title and switch */}
                <div className='tab:flex hidden gap-[30px] justify-between items-center border-b-[1px] border-blue_gray_50 pb-[30px] mb-[30px] flex-wrap'>
                    <h2 className='text_24 text-blue_gray_600'>Easy Monthly Installments</h2>
                    <div className="hidden tab:flex items-center gap-[34px]">
                        <div className="switch">
                            <input id="checkbox1" className="look" type="checkbox" />
                            <label htmlFor="checkbox1"></label>
                        </div>
                        <p className="text_16 text-blue_gray_500">Show Only Differences</p>
                    </div>
                </div>
                {/* Checkbox options for EMI types */}
                <div className='flex gap-[30px] pb-[30px] md:flex-row flex-col'>
                    <div onClick={() => Setdebitcardcheckbox(!debitcardcheckbox)} className='cursor-pointer p-3 w-full rounded-[6px] border-[1px] border-extra_4'>
                        <Checkbox checked={debitcardcheckbox} Setchecked={Setdebitcardcheckbox} value='Debit Card EMI' />
                    </div>
                    <div onClick={() => Setcreditdebitcheckbox(!creditdebitcheckbox)} className='cursor-pointer p-3 w-full rounded-[6px] border-[1px] border-extra_4'>
                        <Checkbox checked={creditdebitcheckbox} Setchecked={Setcreditdebitcheckbox} value='Credit Card EMI' />
                    </div>
                </div>
                {/* Bank selection and EMI details section */}
                <div className='flex gap-[30px] flex-col xl:flex-row'>
                    <div className='flex gap-[20px] flex-col w-full xl:max-w-[338px]'>
                        {banks.map((option: bank, index: number) => (
                            <div key={option?.id} onClick={() => handleCheck(index)} className='p-3 w-full cursor-pointer rounded-[6px] border-[1px] border-extra_4 flex gap-[6px] justify-between items-center'>
                                <div className='flex gap-[6px] justify-between items-center cursor-pointer'>
                                    <div className={"flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full"}>
                                        <label className='cursor-pointer'>{option?.name}</label>
                                        <div className='relative flex'>
                                            <input
                                                type="checkbox"
                                                checked={index === checkedIndex}
                                                readOnly
                                                className={cn(
                                                    "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
                                                    "checked:bg-light_primary checked:before:bg-light_primary",
                                                )}
                                            />
                                            {index === checkedIndex && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                                        </div>
                                    </div>
                                </div>
                                <Image className='w-[30px] h-[30px]' src={`${option?.logoSrc}`} height={30} width={30} alt='logo' />
                            </div>
                        ))}
                    </div>
                    {/* EMI details table */}
                    <div className='border border-blue-50 rounded-[10px] max-w-[697px] w-full'>
                        <div className='border-b-[1px] pb-[11px] mb-[11px] md:flex hidden'>
                            {['EMI (Month)', 'Interest (Amount)', 'Total Post', 'Status'].map((item, index) => (
                                <h3 key={index || Date.now() + index} className='max-w-[174px] w-full py-4 pl-4 text_14_2 text-blue_gray_700 whitespace-nowrap'>
                                    {item}
                                </h3>
                            ))}
                        </div>
                        {Emidata?.map((item: Item, index: number) => (
                            <div onClick={() => currentdiv(index)} key={item?.id} className='pb-[11px]'>
                                <div className="flex gap-2 hover:bg-light_secondary_shades_4p">
                                    <div className='flex gap-[6px] justify-between items-center cursor-pointer'>
                                        <div className={"flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full"}>
                                            <div className='relative flex'>
                                                <input
                                                    type="checkbox"
                                                    checked={index === currentIndexemi}
                                                    readOnly
                                                    className={cn(
                                                        "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
                                                        "checked:bg-light_primary checked:before:bg-light_primary",
                                                    )}
                                                />
                                                {index === currentIndexemi && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex w-full'>
                                        <div className='py-[14px] px-[10px] max-w-[165px] w-full text_14_1 text-blue_gray_700'>{item?.price}</div>
                                        <div className='py-[14px] px-[10px] max-w-[165px] w-full text_14_1 text-blue_gray_700'>{item?.rate}</div>
                                        <div className='py-[14px] px-[10px] max-w-[165px] w-full text_14_1 text-blue_gray_700'>{item?.total}</div>
                                        <div className='py-[14px] px-[10px] max-w-[165px] w-full text_14_1 text-blue_gray_700 md:block hidden'>
                                            <span className={`border py-[3px] px-[10px] ${item?.available ? 'border-Dark_primary_main text-Dark_primary_main' : 'border-Dark_error_shades_50p text-Dark_error_main'} rounded-[16px] hover:bg-light_secondary_shades_4p`}>
                                                {item?.availability}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* EMI Card component displayed conditionally */}
                                <div className={`h-0 overflow-hidden duration-500 ${index === currentIndexemi && 'h-[200px] tab:h-[277px]'}`}>
                                    <Emicard />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
