import Icons from '@/icons/Index';
import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

/**
 * OrderSuccess component displaying a success message after order purchase.
 * 
 * @component
 * @returns {JSX.Element} OrderSuccess component JSX
 */
const OrderSuccess = () => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101]">
            <div className='flex flex-col p-5 gap-[40px] tab:gap-[60px] text-center bg-white max-w-[963px] w-full justify-center items-center'>
                <Icons type='ordersuccess' />
                <div>
                    <h1 className='text_60_32_sec_heading text-blue_gray_800 pb-[10px] tab:pb-5'>Order purchase was successful!</h1>
                    <p className='text_24_16 text-blue_gray_500'>After supplier order confirmation, we'll send you tracking information to your registered email.</p>
                </div>
                <Button navroute='/' varient='primary'>Continue Shopping</Button>
            </div>
        </div>
    );
};

export default OrderSuccess;
