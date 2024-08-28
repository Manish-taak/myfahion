"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Icons from '@/icons/Index';
import shoppingCardData from "@/json/paymentcard.json";
import Paymentcard from '@/components/ui/PaymentCard';

/**
 * Page component for managing saved payment cards and adding new cards.
 * @returns {JSX.Element} JSX element containing the payment card UI.
 */
const Page = () => {
    const [newaddress, setnewaddress] = useState(false);

    return (
        <>
            <div>
                <div className="tab:p-[30px] tab:border-[1px] border-blue_gray_50 rounded-[10px] max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-center">
                    {/* Header with title and "Add New Card" button */}
                    <div className='tab:flex hidden gap-[30px] justify-between items-center border-b-[1px] border-blue_gray_50 pb-[30px] mb-[30px]'>
                        <h2 className='text_24 text-blue_gray_600'>Saved Cards</h2>
                        <h3
                            onClick={() => setnewaddress(true)}
                            className='whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase tab:flex items-center gap-2 text-light_primary text_16_2_10 cursor-pointer'
                        >
                            <Icons className='fill-light_primary' type="plus" /> Add New Card
                        </h3>
                    </div>

                    {/* List of saved payment cards */}
                    <div className='max-[991px]:flex max-[991px]:justify-center'>
                        <div className='flex tab:flex-row flex-col gap-[30px] max-w-[375px] tab:max-w-[48vw] xl:max-w-[56vw] w-full tab:overflow-scroll max-[991px]:py-[20px]'>
                            {shoppingCardData.map((card, index) => (
                                <Paymentcard
                                    key={index}
                                    bankname={card.bankname}
                                    digit1={card.digit1}
                                    digit2={card.digit2}
                                    digit3={card.digit3}
                                    digit4={card.digit4}
                                    expirymonth={card.expirymonth}
                                    expiryyear={card.expiryyear}
                                    holdername={card.holdername}
                                    className={card.className}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Payment form and "Pay" button */}
                    <div className='hidden tab:flex justify-between gap-[30px] pt-5 md:pt-[30px] items-end lg:flex-row flex-col'>
                        <div className='flex flex-col gap-2 w-full'>
                            <Input inputclass='w-full' inputparent='border-[1px] border-blue_gray_100 rounded-[6px]' placeholder='dummy@bankname' label='Your UPI ID' />
                        </div>
                        <Button className='max-w-[224px] w-full h-fit py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='primary'>Pay $25.00</Button>
                    </div>

                    {/* Mobile payment form */}
                    <div className='tab:hidden'>
                        <Input inputclass='w-full' className='mb-[20px]' inputparent='border-[1px] border-blue_gray_100 rounded-[6px]' placeholder='1234' label='Enter Cvv' />
                        <Button className='w-full py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='primary'>Continue</Button>
                    </div>
                </div>

                {/* Add New Card form */}
                {newaddress && (
                    <div className="tab:block hidden p-[10px] tab:p-[30px] border-[1px] border-blue_gray_50 rounded-[10px] mt-[30px]">
                        {/* Add New Card header */}
                        <div className='flex gap-[30px] justify-between items-center border-b-[1px] border-blue_gray_50 pb-[30px] mb-[30px]'>
                            <h2 className='text_24 text-blue_gray_600'>Add New Card</h2>
                        </div>

                        {/* Add New Card form fields */}
                        <div className='flex gap-[30px] xl:flex-row flex-col'>
                            <Input inputclass='border-[1px] border-blue_gray_100 w-full' className='w-full' placeholder='Raj Kumar' label='Card Holder Name' />
                            <Input inputclass='border-[1px] border-blue_gray_100 w-full' className='w-full' placeholder='1234 5678 9123 4567' label='Card Number' />
                            <div className='flex gap-[30px]'>
                                <Input inputclass='border-[1px] border-blue_gray_100 w-[152px]' placeholder='03 / 24' label='Expiry Date' />
                                <Input inputclass='border-[1px] border-blue_gray_100 w-[152px]' placeholder='1234' label='CVV' />
                            </div>
                        </div>

                        {/* Form actions */}
                        <div className='flex justify-end items-end pt-[30px] gap-[30px]'>
                            <div onClick={() => setnewaddress(false)}>
                                <Button className='border-none py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='gray'>Cancel</Button>
                            </div>
                            <Button varient='primary' className='py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16'>Save Card</Button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default Page;
