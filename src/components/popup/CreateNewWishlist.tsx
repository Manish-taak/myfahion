import Icons from '@/icons/Index';
import React, { forwardRef } from 'react';
import Button from '../ui/Button';
import { closepopup } from '@/interFaces/type';
import Input from '../ui/Input';

/**
 * CreateNewWishlist component for creating a new wishlist.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {Function} props.viewwishlist - Function to view the wishlist
 * @param {Function} props.cancelcreatenew - Function to cancel creating a new wishlist
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} CreateNewWishlist component JSX
 */
const CreateNewWishlist = forwardRef<HTMLDivElement, closepopup>(({ closepopup, viewwishlist, cancelcreatenew }, ref) => {
    return (
        <div
            ref={ref}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full"
        >
            <div className="p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full">
                {/* Header */}
                <div className="flex flex-col gap-[10px] justify-between mb-[30px] items-start">
                    <div className="flex gap-[10px] items-center justify-between w-full border-b border-blue_gray_50 pb-[30px] mb-[30px]">
                        <h3 className="text_24 text-blue_gray_800">Create New WishList</h3>
                        {/* Close icon */}
                        <div className="cursor-pointer" onClick={closepopup}>
                            <Icons className="w-[23px] h-[24px]" type="popupclose" />
                        </div>
                    </div>
                    {/* Input field for list name */}
                    <Input placeholder="Type Here" inputclass="border border-blue_gray_50 w-full" label="List name" className="pb-[30px] w-full" />
                    {/* Success message */}
                    <h3 className="text_16 text-blue_gray_500">
                        Your item has been successfully added to your wishlist. Thank you!!!
                    </h3>
                </div>
                {/* Buttons */}
                <div className="flex gap-[30px] md:flex-row flex-col w-full">
                    <div className="w-full" onClick={cancelcreatenew}>
                        <Button className="md:max-w-[210px] w-full rounded-[8px]" varient="thirdly">
                            Cancel
                        </Button>
                    </div>
                    <div onClick={viewwishlist} className="w-full">
                        <Button className="md:max-w-[210px] uppercase w-full" varient="primary">
                            Create List
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CreateNewWishlist;
