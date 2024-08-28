

import Icons from '@/icons/Index'
import React from 'react'

/**
 * ProductDescription component displays detailed information about a product,
 * including style, sleeve, color, print, fit, size, quantity, ideal use, suitable wear, and fabric care.
 * 
 * @returns {JSX.Element} The product description component
 */
const ProductDescription = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex justify-between items-center">
          <h2 className="text_34_20 text-blue_gray_700">
            Product Details
          </h2>
          <Icons type="Downarrow" />
        </div>
        <p className="text-blue_gray_600 mt-5 text_16_1_12 border-b-2 pb-5 mb-5">
          Take the sporty look to the streets with the HRX Mens Active
          T-shirt. This black solid T-shirt can be styled in a million
          ways to create a look that will be remembered.
        </p>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Style:
            </h6>
            <h6 className="text-blue_gray_400">Round Neck</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Sleeve:
            </h6>
            <h6 className="text-blue_gray_400">Short Sleeves</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Colour:
            </h6>
            <h6 className="text-blue_gray_400">Grey</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Print:
            </h6>
            <h6 className="text-blue_gray_400">Solid</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Fit:
            </h6>
            <h6 className="text-blue_gray_400">Regular</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Size:
            </h6>
            <h6 className="text-blue_gray_400">
              S (Chest 36” - Shoulder 16”)
            </h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Qty:
            </h6>
            <h6 className="text-blue_gray_400">1 T-Shirt</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Ideal For:
            </h6>
            <h6 className="text-blue_gray_400">Mens Fashion</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Suitable For:
            </h6>
            <h6 className="text-blue_gray_400">Western Wear</h6>
          </div>
          <div className="flex gap-x-5 items-center">
            <h6 className="text_16_1_14 text-blue_gray_600 max-w-[140px] w-full text-start">
              Fabric Care:
            </h6>
            <h6 className="text-blue_gray_400">100% Cotton</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDescription
