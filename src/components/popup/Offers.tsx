import Icons from '@/icons/Index';
import { closepopup } from '@/interFaces/type';
import React, { forwardRef } from 'react';

/**
 * Offers component displaying a list of special offers.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} Offers component JSX
 */
const Offers = forwardRef<HTMLDivElement, closepopup>(({ closepopup }, ref) => {
    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] md:max-w-[780px] w-full">
            <div className='p-5 tab:p-[30px] bg-white rounded-[8px]'>
                <div className='items-center border-b border-blue_gray_50 flex justify-between pb-[30px] mb-[30px]'>
                    <h3 className='text_24 text-blue_gray_800'>
                        Offers
                    </h3>
                    <div className='cursor-pointer' onClick={closepopup}>
                        <Icons type="popupclose" />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {/* Example offer block */}
                    <div className='flex gap-[6px] items-center flex-wrap'>
                        <Icons type='localoffer' />
                        <span className='text_14_3 text-blue_gray_700'>Special Offer</span>
                        <p className='text_14_1 text-blue_gray_500'>Claim Extra 10% Off Above Rs. 599 (Only on First Purchase)</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Offers;
