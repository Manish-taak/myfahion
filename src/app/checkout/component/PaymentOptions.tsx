"use client";

import Checkbox from "@/components/ui/Checkbox";
import { sidebarAccordion } from "@/utils/funcation";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import Upiaddress from "../upiaddress/page";
import Cashondelivary from "../cashondelivery/page";
import Creditdebit from "../creditdebit/page";
import Netbanking from "../netbanking/page";
import Emi from "../emi/page";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { paymentoptionstype } from "@/interFaces/type";
import Checkoutnavlink from "@/json/checkoutnavlink.json";

/**
 * Payment Options Component.
 * Renders various payment options and manages their visibility.
 * 
 * @param {paymentoptionstype} children - The children components to render within PaymentOptions.
 * @returns {JSX.Element} React component representing the PaymentOptions section.
 */
const PaymentOptions = ({ children }: paymentoptionstype) => {
  // State variables for managing UI state
  const [paymentoptions, setpaymentoption] = useState(false); // Payment options accordion state
  const [upiaddress, setupiaddress] = useState(false); // UPI address section state
  const [creditdebit, setcreditdebit] = useState<boolean>(false); // Credit/debit card section state
  const [netbanking, setnetbanking] = useState(false); // Netbanking section state
  const [emi, setemi] = useState(false); // EMI section state
  const [cashondelivery, setcashondelivery] = useState(false); // Cash on delivery section state
  const [newaddaddress, setnewaddaddress] = useState<boolean>(false); // New address form state

  // Get current pathname using Next.js hook
  const pathname = usePathname();

  /**
   * Function to toggle new address form visibility.
   */
  const openNewaddress = () => {
    setnewaddaddress(!newaddaddress);
  };

  return (
    <>
      {/* Payment options container */}
      <div className="tab:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px]  flex-col">
        {/* Link to UPI address page */}
        <Link href={"/checkout/upiaddress"}>
          <div
            onClick={() => {
              setpaymentoption(!paymentoptions);
            }}
            className={` ${paymentoptions &&
              "  border-b-[1px] pb-5 mb-5 tab:pb-[30px] tab:mb-[30px]"
              }  border-blue_gray_50  cursor-pointer `}
          >
            {/* Checkbox for selecting payment option */}
            <Checkbox
              checked={paymentoptions}
              Setchecked={setpaymentoption}
              diraction="tab:flex hidden"
              value="Payment Option"
            />
            {/* Checkbox label for all payment options */}
            <Checkbox
              checked={paymentoptions}
              Setchecked={setpaymentoption}
              diraction="tab:hidden flex"
              value="All Payment Option"
            />
          </div>
        </Link>
        {/* Display payment options if expanded */}
        {paymentoptions && (
          <>
            {/* Desktop view: Display navigation links */}
            <div className="hidden  flex-col gap-[30px] tab:flex">
              <div className="flex tab:flex-row flex-col gap-[20px] max-[1280px]:overflow-scroll tab:max-w-[48vw] lg:w-full ">
                {/* Map through Checkoutnavlink to render links */}
                {Checkoutnavlink?.map((item: any, index: number) => {
                  // Check if current link is active
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <Fragment key={Date.now() + index}>
                      {/* Render link with conditional styles */}
                      <Link
                        className={`${isActive
                          ? "text-light_primary text-[16px] font-semibold leading-[24px] border-light_primary  "
                          : "text-blue_gray_400  border-white "
                          } whitespace-nowrap py-[11px] px-2  border-b-[2px] uppercase `}
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </Fragment>
                  );
                })}
              </div>
              {/* Render children components */}
              <div>{children}</div>
            </div>
            {/* Mobile view: Display collapsed sections */}
            <div className="tab:hidden">
              {/* UPI Address section */}
              <div
                className={`p-[10px] ${upiaddress
                  ? "border-[1px] border-blue_gray_50 rounded-md "
                  : ""
                  }`}
              >
                <div
                  onClick={() => {
                    setupiaddress(!upiaddress);
                  }}
                  className={`flex gap-[10px] text_16_2 text-blue_gray_600 border-b-[1px] border-blue_gray_50 pb-5 mb-5`}
                >
                  {/* Checkbox for UPI address */}
                  <Checkbox
                    checked={upiaddress}
                    Setchecked={setupiaddress}
                    id={36}
                    value="Upiaddress"
                  />
                </div>
                {/* Display UPI address component if selected */}
                {upiaddress && <Upiaddress />}
              </div>
              {/* Credit/Debit card section */}
              <div
                className={`p-[10px] ${creditdebit
                  ? "border-[1px] border-blue_gray_50 rounded-md"
                  : ""
                  }  `}
              >
                <div className="flex gap-[10px] justify-between items-center   border-b-[1px] border-blue_gray_50 pb-5 mb-5">
                  <div
                    onClick={() => {
                      setcreditdebit(!creditdebit);
                      setnewaddaddress(false);
                    }}
                    className={`  flex gap-[10px] text_16_2 text-blue_gray_600 w-full`}
                  >
                    {/* Checkbox for Credit/Debit card */}
                    <Checkbox
                      checked={creditdebit}
                      Setchecked={setcreditdebit}
                      id={37}
                      value="Creditdebit"
                    />
                  </div>
                  {/* Button to add new card */}
                  <h3
                    onClick={openNewaddress}
                    className={` ${creditdebit ? "block" : "hidden"
                      } text_12 text-blue_gray_500 whitespace-nowrap `}
                  >
                    + Add Card
                  </h3>
                </div>
                {/* Display Credit/Debit card form if selected */}
                {creditdebit && <Creditdebit />}
              </div>
              {/* New card address form */}
              {newaddaddress === true && (
                <div className=" tab:hidden p-[10px] tab:p-[30px] border-[1px] border-blue_gray_50 rounded-[10px] mt-[20px] ">
                  <div className="  flex gap-[30px] justify-between items-center border-b-[1px] border-blue_gray_50 pb-[20px] mb-[20px] ">
                    <h2 className="text_24_14 text-blue_gray_600">
                      Add New Card
                    </h2>
                  </div>
                  <div className="flex gap-[30px] xl:flex-row flex-col ">
                    {/* Input for card number */}
                    <Input
                      inputclass="border-[1px] border-blue_gray_100 w-full "
                      className="w-full"
                      placeholder="1234 5678 9123 4567"
                      label="Card Number"
                    />
                    <div className="flex gap-[10px]  ">
                      {/* Input for expiry date */}
                      <Input
                        inputclass="border-[1px]  border-blue_gray_100 w-[146px] "
                        label="Expiry Date"
                        placeholder="03 / 24"
                      />
                      {/* Input for CVV */}
                      <Input
                        inputclass="border-[1px]  border-blue_gray_100 w-[146px] "
                        placeholder="1234"
                        label="CVV"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end pt-[30px] gap-[30px]">
                    {/* Save card button */}
                    <Button className="w-full" varient="primary">
                      Save Card
                    </Button>
                    {/* Cancel button */}
                    <div onClick={openNewaddress} className="w-full">
                      <Button className="border-none w-full " varient="gray">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {/* Netbanking section */}
              <div
                className={`p-[10px] ${netbanking
                  ? "border-[1px] border-blue_gray_50 rounded-md"
                  : ""
                  }   `}
              >
                <div
                  onClick={() => {
                    setnetbanking(!netbanking);
                  }}
                  className={`  flex gap-[10px] text_16_2 text-blue_gray_600 border-b-[1px] border-blue_gray_50 pb-5 mb-5`}
                >
                  {/* Checkbox for Netbanking */}
                  <Checkbox
                    checked={netbanking}
                    Setchecked={setnetbanking}


                    value="Netbanking"
                  />
                </div>
                {netbanking && <Netbanking />}
              </div>
              <div
                className={`p-[10px] ${emi ? "border-[1px] border-blue_gray_50 rounded-md" : "  "
                  }  `}
              >
                <div
                  className={`  flex gap-[10px] text_16_2 text-blue_gray_600 border-b-[1px] border-blue_gray_50 pb-5 justify-between mb-5`}
                >
                  <div
                    className="w-full"
                    onClick={() => {
                      setemi(!emi);
                    }}
                  >
                    {/* Checkbox for emi */}
                    <Checkbox checked={emi} Setchecked={setemi} value="Emi" />
                  </div>
                  <div className="flex  items-center gap-[36px]  ">
                    <div className="switch">
                      <input id="checkbox1" className="look" type="checkbox" />
                      <label htmlFor="checkbox1"></label>
                    </div>
                    <p className=" text_10_14 text-blue_gray_500 whitespace-nowrap ">
                      Show No Cost EMI Options
                    </p>
                  </div>
                </div>
                {emi && <Emi />}
              </div>
              <div
                className={`p-[10px] ${cashondelivery
                  ? "border-[1px] border-blue_gray_50 rounded-md"
                  : ""
                  }  `}
              >
                <div
                  onClick={(e) => {
                    sidebarAccordion(e);
                    setcashondelivery(!cashondelivery);
                  }}
                  className={`  flex gap-[10px] text_16_2 text-blue_gray_600 border-b-[1px] border-blue_gray_50 pb-5 mb-5 `}
                >
                  {/* checkbox  Cash on delivary */}
                  <Checkbox
                    checked={cashondelivery}
                    Setchecked={setcashondelivery}
                    value="Cash on delivary"
                  />
                </div>
                <div className="h-0 overflow-hidden duration-500">
                  {/* Cashondelivary component  */}
                  <Cashondelivary />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentOptions;
