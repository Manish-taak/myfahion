import React, { forwardRef } from 'react';
import Button from '../ui/Button';
import Icons from '@/icons/Index';
import { closepopup } from '@/interFaces/type';
import Image from 'next/image';
import Link from 'next/link';

/**
 * OfferCard component for displaying promotional offers.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} OfferCard component JSX
 */
const OfferCard = forwardRef<HTMLDivElement, closepopup>(({ closepopup }, ref) => {
    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] tab:max-w-[840px] w-full">
            <div className="bg-white flex flex-col tab:flex-row gap-[30px] rounded-[10px] relative overflow-hidden">
                {/* Close button */}
                <div onClick={closepopup} className="absolute top-[20px] right-[20px] tab:top-[30px] tab:right-[30px] p-1 shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] rounded-[50%] cursor-pointer">
                    <Icons type='popupclose' />
                </div>
                {/* Images */}
                <Image width={380} height={460} className='hidden tab:block' src="/images/offergrilimage.png" alt="girl" />
                <Image width={303} height={320} className='tab:hidden' src="/images/resgirloffferimage.png" alt="girl" />
                {/* Content */}
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-[40px] max-[991px]:pb-[30px]'>
                        {/* Logos */}
                        <div className='flex gap-[30px] items-center justify-center'>
                            <Image width={100} height={50} className='w-[80px] tab:w-[100px]' src="/images/BurberryLogo.png" alt="" />
                            <Image width={104} height={50} className='w-[80px] tab:w-[100px]' src="/images/levis.png" alt="" />
                        </div>
                        {/* Offer text */}
                        <h3 className='text_60_48 text-blue_gray_800 gap-[10px] flex items-center'>
                            <span className='text_24_16 text-blue_gray_600'>
                                Get Upto
                            </span>
                            50% Off
                        </h3>
                        {/* Button */}
                        <div className='flex items-start'>
                            <Button navroute='/products' className='w-full tab:w-auto' varient='primary'>
                                Start Shopping
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default OfferCard;
