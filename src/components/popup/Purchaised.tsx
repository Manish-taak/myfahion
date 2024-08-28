import Icons from '@/icons/Index';
import React, { forwardRef } from 'react';
import Button from '../ui/Button';
import { closepopup } from '@/interFaces/type';

/**
 * Purchaised component displaying a message for users who haven't purchased an item.
 * 
 * @component
 * @param {Function} closepopup Function to close the popup
 * @param {React.RefObject<HTMLDivElement>} ref Reference to the component's DOM element
 * @returns {JSX.Element} Purchaised component JSX
 */
const Purchaised = forwardRef<HTMLDivElement, { closepopup: () => void }>(({ closepopup }, ref) => {
    return (
        <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
            <div className='p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full'>
                <div className='flex gap-[10px] justify-between mb-[30px] items-start'>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <h3 className='text-24 text-blue-gray-800'>
                            Haven't Purchased item?
                        </h3>
                        <p className='text-blue-gray-700'>
                            You will not be able to leave a review unless you have purchased it.
                        </p>
                    </div>
                    <div className='cursor-pointer' onClick={closepopup}>
                        <Icons className='w-[23px] h-[24px]' type="popupclose" />
                    </div>
                </div>
                <Button className='w-full' varient='primary'>Ok, Do Later</Button>
            </div>
        </div>
    );
});

export default Purchaised;
