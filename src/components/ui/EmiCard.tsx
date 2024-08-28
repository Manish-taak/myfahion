import React from 'react'
import Button from './Button'

/**
 * EMI Card component for displaying EMI details and providing an option to choose a plan.
 * @returns {JSX.Element} JSX for the EMI Card component.
 */
const EmiCard = () => {
    return (
        <div className="p-[10px] tab:p-5 bg-light_primary_shades_4p w-full max-w-[577px] m-auto">
            <div>
                <div className="flex justify-between pb-[10px]">
                    <h2 className="text_16_2_14 text-blue_gray_400">Value of EMI</h2>
                    <h2 className="text_16_2_14 text-blue_gray_600">$80.00</h2>
                </div>
                <div className="flex justify-between pb-[10px]">
                    <h2 className="text_16_2_14 text-blue_gray_400">Extra Charges</h2>
                    <h2 className="text_16_2_14 text-blue_gray_600">$8.00</h2>
                </div>
            </div>
            <div className="border-t border-blue-50 flex justify-between pt-[10px] pb-5">
                <h2 className="text_20_16 text-blue_gray_800">3 Months Total</h2>
                <h2 className="text_20_16 text-blue_gray_800">$88.00</h2>
            </div>
            <Button className="w-full py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16" varient="primary">
                Choose Plan
            </Button>
        </div>
    )
}

export default EmiCard;
