"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Icons from '@/icons/Index';
import { rotate } from '@/utils/funcation';
import Image from 'next/image';
import Banks from '@/json/banks.json';
import { cn } from '@/utils/cn';
import useCheckbox from '@/lib/hooks/useCheckbox';


/**
 * Page component for selecting banks and managing bank-related functionalities.
 * @component
 * @returns {JSX.Element} JSX element representing the Page component.
 * 
 * 
 */


const Page = () => {
  // states to manages netbanking
  const [openotherbank, setopenotherbank] = useState(false);
  const [selectBank, setSelectBank] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedBankId, setSelectedBankId] = useState('');
  const [arrowRotation, setArrowRotation] = useState(0); // Initial rotation angle


  /**
   * Array of banks with their respective IDs and logos.
   * @type {Array<{ id: number, name: string, logo: string }>}
   */


  const banks = [
    { id: 27, name: 'HDFC Bank', logo: 'hdfc.png' },
    { id: 28, name: 'Punjab National Bank', logo: 'punjabbank.png' },
    { id: 29, name: 'Bank Of India', logo: 'bankofindiabank.png' },
    { id: 30, name: 'ICICI Bank', logo: 'icicbank.png' },
    { id: 31, name: 'Union Bank', logo: 'unionbank.png' },
  ];


  /**
   * Handles the selection of a bank.
   * @param {number} bankId - The ID of the bank.
   * @param {string} bankName - The name of the bank.
   */


  const handleBankSelection = (bankId: any, bankName: any) => {
    setSelectedBankId(bankId);
    setSelectedBank(bankName);
    setSelectBank(false); // Close the bank options
    setArrowRotation(0); // Reset arrow rotation
  };


  const { checkedIndex, handleCheck } = useCheckbox();

  return (
    <>
      <div className="tab:p-4 lg:p-[30px] tab:border-[1px] rounded-[10px] border-blue-50">
        {/* Section header */}
        <h2 className="hidden tab:block tab:border-b-[1px] tab:pb-[30px] tab:mb-[30px] border-blue_gray_50 text_24_14 text-blue_gray_700">
          Popular Banks
        </h2>

        {/* List of popular banks */}
        <div className="flex flex-col gap-y-5 md:gap-y-[30px]">
          {banks?.map((option, index) => (
            <div key={option?.id || Date.now() + index} className="p-3 border-[1px] border-extra_4 rounded-[6px]">
              <div onClick={() => handleCheck(index)} className="flex gap-[6px] justify-between items-center cursor-pointer">
                <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                  {/* Bank name label */}
                  <label className="cursor-pointer">
                    {option?.name}
                  </label>
                  <div className="relative flex">
                    {/* Checkbox for selecting bank */}
                    <input
                      type="checkbox"
                      checked={index === checkedIndex}
                      readOnly
                      className={cn(
                        "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
                        "checked:bg-light_primary checked:before:bg-light_primary",
                      )}
                    />
                    {/* Icon displayed when bank is selected */}
                    {index === checkedIndex && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
                  </div>
                </div>
                {/* Bank logo */}
                <Image src={`/images/${option.logo}`} className="max-w-[30px] w-full h-[30px]" width={30} height={30} alt="logo" />
              </div>
              <div className={`h-0 overflow-hidden duration-500 ${index === checkedIndex ? 'tab:h-[76px]' : ''}`}>
                <div className="justify-end tab:flex hidden pt-[20px]">
                  {/* Continue button */}
                  <Button className="w-full max-w-[180px] py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16" varient="primary">Continue</Button>
                </div>
              </div>
            </div>
          ))}

          {/* Separator */}
          <span className="max-[991px]:border-[1px]"></span>

          {/* Section for selecting other banks */}
          <div className="tab:p-[30px] tab:border-[1px] border-extra_4 rounded-[6px]">
            <div
              onClick={(e) => {
                setopenotherbank(!openotherbank);
                rotate(e, 180);
              }}
              className="flex justify-between cursor-pointer"
            >
              {/* Other banks header */}
              <h2 className="tab:block hidden text_24_16 text-blue_gray_700">
                Other Banks
              </h2>
              <h2 className="tab:hidden text_24_16 text-blue_gray_500">
                Choose Bank
              </h2>
              {/* Arrow icon */}
              <Icons type="downarrow" />
            </div>
            {openotherbank && (
              <div>
                <div className="tab:border-t-[1px] tab:pt-[30px] tab:mt-[30px] border-blue_gray_50 flex justify-between gap-[30px] pt-5 items-end lg:flex-row flex-col">
                  <div className="border-[1px] border-blue_gray_100 rounded-[6px] relative flex py-[14px] px-[16px] w-full">
                    {/* Input for selecting bank */}
                    <input
                      className="w-full outline-none text_16_1 text-blue_gray_300 cursor-pointer"
                      placeholder="Select bank"
                      type="text"
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      onClick={() => {
                        setSelectBank(!selectBank);
                        setArrowRotation(arrowRotation === 0 ? 180 : 0); // Rotate arrow on click
                      }}
                    />
                    <div onClick={() => {
                      setSelectBank(!selectBank);
                      setArrowRotation(arrowRotation === 0 ? 180 : 0); // Rotate arrow on click
                    }}>
                      {/* Down arrow icon */}
                      <div className="cursor-pointer" style={{ transform: `rotate(${arrowRotation}deg)` }}>
                        <Icons type="downarrow" />
                      </div>
                    </div>
                    {/* Dropdown for selecting bank */}
                    {selectBank && (
                      <div className="absolute top-[53px] left-0 z-[50] bg-white w-full flex flex-col py-[14px] px-[12px] rounded-[6px]">
                        {Banks.map((bank) => (
                          <div
                            key={bank.id}
                            className="flex gap-[6px] justify-between items-center cursor-pointer hover:bg-light_primary hover:bg-opacity-10"
                            onClick={() => handleBankSelection(bank.id, bank.name)}
                          >
                            <div className="flex gap-[10px] items-center">
                              {/* Checkbox for bank selection */}
                              <Checkbox
                                id={bank.id}
                                checked={Number(selectedBankId) === bank.id}
                                onChange={() => handleBankSelection(bank.id, bank.name)}
                              />
                              <span className="text-blue_gray_300">{bank.name}</span>
                            </div>
                            {/* Bank logo */}
                            {bank.logo && (
                              <Image
                                src={`/images/${bank.logo}`}
                                className="max-w-[30px] w-full h-[30px]"
                                width={30}
                                height={30}
                                alt="logo"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Pay button */}
                  <Button className="max-w-[224px] w-full h-fit py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16" varient="primary">Pay $25.00</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default Page;
