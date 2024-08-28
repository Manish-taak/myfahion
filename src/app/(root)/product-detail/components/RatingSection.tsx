
import Icons from '@/icons/Index';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Purchaised from '@/components/popup/Purchaised';
import Overlay from '@/components/ui/Overlay';
import { ratingsdata } from '@/interFaces/type';
import useOutsideClick from '@/lib/hooks/useOutsideclick ';

/**
 * Component for displaying rating and reviews section.
 * @returns {JSX.Element} RatingSection component JSX.
 */
const RatingSection = () => {
  // state to manage overlay
  const [overlay, setOverlay] = useState(false);
// state to manage parchaised
  const [purchaised, setPurchaised] = useState(false);
  // state to manage is open popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const mulitipalsimage = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // openpoopup
  const openpopup = () => {
    setOverlay(true)
    setPurchaised(true)
  }
  // closepopup
  const closepopup = () => {
    setOverlay(false)
    setPurchaised(false)
  }

  // closing popups on outsilde click
  useOutsideClick(mulitipalsimage, () => {
    setIsPopupOpen(false);
  });

  // handlepopupopen
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  // handlepopupclose
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  // closepopups on outside click
  useOutsideClick(popupRef, closepopup);

  // Dummy image paths
  const images = [
    '/images/cart2.png',
    '/images/cart3.png',
    '/images/cart4.png',
    '/images/cart5.png',
    '/images/cart4.png',
    '/images/cart5.png',
    '/images/cart5.png',
    '/images/cart5.png',
    '/images/cart5.png',
    // add more image paths as needed
  ];

  // Ratings data for displaying stars and percentages
  const ratingsData: ratingsdata = {
    "5_star": 5,
    "4_star": 4,
    "3_star": 3,
    "2_star": 2,
    "1_star": 1,
  };

  return (
    <>
      {/* Overlay for modal */}
      {overlay && <Overlay isOpen={true} />}
      {/* Purchaised popup */}
      {purchaised && <Purchaised closepopup={closepopup} ref={popupRef} />}

      <div className="border-y-[1px] py-5 mt-10 mb-5 ">
        <div className="flex justify-between items-center md:mb-5">
          <h2 className="text_34_20 text-blue_gray_700">
            Rating & Reviews
          </h2>
          <button
            onClick={openpopup}
            className="uppercase border-transparent text-light_primary rounded-md text-xs md:text-lg leading-[26px] font-semibold p-0 md:py-[14px] md:px-[18px] md:border-[1px] md:border-light_primary hover:bg-light_primary hover:bg-opacity-10">Write Review
          </button>
        </div>
        <div className='flex flex-col' >
          <div className="hidden md:flex flex-col 2xl:flex-row 2xl:justify-between my-5 w-full items-center min-[500px]:items-start max-[500px]:max-w-[93px]   ">
            <div className="flex items-center xl:gap-x-5 md:p-2 mb-2 xl:mb-0 ">
              <div className="flex gap-x-[6px]">
                <Icons type="star" className="hidden 2xl:block" />
                <Icons type="star" className="hidden 2xl:block" />
                <Icons type="star" className="hidden 2xl:block" />
                <Icons type="star" className="hidden 2xl:block" />
                <Icons type="star" />
              </div>
              <h5 className="text_24_16_medium text-blue_gray_600">
                4.5 Star
              </h5>
            </div>
            <p className="text_20_14 text-blue_gray_400">120 Reviews</p>
          </div>
          <div className='grid  grid-cols-1 md:grid-cols-[40%_58%]' >
            <div className="flex min-[500px]:flex-col  lg:flex-row 2xl:flex-col border-[1px] tab:border-none border-blue_gray_50 md:border-none p-2 md:p-0 rounded-md mt-[10px] md:mt-0 gap-x-10">
              {/* Reviews and Ratings section */}
              <div className="flex w-full ">
                <div className="w-full">
                  <div className="flex justify-end items-start w-full flex-row-reverse">
                    <div className="flex flex-col gap-1.5 w-full max-w-[259px]  ">
                      {Object.entries(ratingsData).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between gap-2">
                          <div className="bg-[#FFB400] bg-opacity-[0.5]  w-full relative h-1">
                            <div className="bg-[#FFB400] h-1 rounded-sm " style={{ width: `${value * 20}%` }}  ></div>
                          </div>
                          <p className="text-sm text-gray-500 min-w-[50px]">
                            {key.replace('_', ' ')}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* Mobile view ratings */}
                    <div className="md:hidden flex flex-col 2xl:flex-row 2xl:justify-between my-5 w-full ">
                      <div className="flex items-center xl:gap-x-5 md:p-2 mb-2 xl:mb-0 ">
                        <div className="flex gap-x-[6px]">
                          <Icons type="star" className="hidden 2xl:block" />
                          <Icons type="star" className="hidden 2xl:block" />
                          <Icons type="star" className="hidden 2xl:block" />
                          <Icons type="star" className="hidden 2xl:block" />
                          <Icons type="star" />
                        </div>
                        <h5 className="text_24_16_medium text-blue_gray_600">
                          4.5 Star
                        </h5>
                      </div>
                      <p className="text_20_14 text-blue_gray_400">120 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Images */}
            <div>
              <div className="flex items-center gap-x-2 mt-2">
                {/* Displaying up to 5 images */}
                {images.slice(0, 5).map((src: any, index: number) => (
                  <Image
                    key={index}
                    width={80}
                    height={80}
                    className="max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px]"
                    src={src}
                    alt={`Product image ${index + 1}`}
                  />
                ))}
                {/* Displaying more images if available */}
                {images.length > 5 && (
                  <div
                    className="relative max-w-[42px] md:max-w-[62px] xl:max-w-[80px] rounded-[4px] bg-orange-600 flex items-center justify-center text-white cursor-pointer"
                    style={{ width: 80, height: 80 }}
                    onClick={handlePopupOpen}
                  >
                    <span>+{images.length - 5}</span>
                  </div>
                )}
              </div>
              {/* Popup for additional images */}
              {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
                    <div className="flex justify-between pb-[30px] ">
                      <h2 className="text_24 text-blue_gray_800">Reviews</h2>
                      {/* Close button for popup */}
                      <div ref={mulitipalsimage} onClick={handlePopupClose} className="cursor-pointer">
                        <Icons type="popupclose" />
                      </div>
                    </div>
                    {/* Grid for displaying multiple images */}
                    <div className="grid grid-cols-2 gap-2 h-[500px] overflow-y-scroll  ">
                      {images.map((src, index) => (
                        <Image
                          key={index}
                          width={200}
                          height={200}
                          className="rounded-[4px] w-full h-full object-contain "
                          src={src}
                          alt={`Product image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RatingSection;
