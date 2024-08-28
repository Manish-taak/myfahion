import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import React from "react";
import { customner } from "@/interFaces/type";
import Buttonhelpcenter from "../component/ButtonHelpCenter";
const Customer = ({ className, closebtncustomer }: customner) => {
  return (
    <div className={`${className} w-full  rounded-[14px]  `}>
      <div className=" shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[1280px]:hidden py-[20px] px-[16px] flex  items-center justify-between">
        <h2 onClick={closebtncustomer} className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]" >
          <Icons type="leftarrowback" />
          My Orders
        </h2>
        <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
      </div>
      <div className="px-4 py-5 bg-extra_4 tab:p-0" >
        <div className="relative z-[12] tab:p-0  ">
          <div className=" py-5 px-4 tab:p-[30px] flex gap-[10px] items-center border-b-[1px] border-blue_gray_50  tab:absolute top-0 bg-white rounded-[6px] xl:rounded-none w-full">
            <div className="p-2 bg-blue_gray_200 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center ">
              <span className="text_20_3" >op</span>
            </div>
            <h2 className="text_24 text-blue_gray_800 ">Customer Service</h2>
          </div>
          <div className="tab:px-[30px] flex flex-col gap-5 overflow-scroll h-screen px-4 py-5 tab:pt-[131px] pb-[270px] max-h-[cals(100%_-10px)] bg-white ">
            <div className="flex flex-col">
              <span className="pb-[6px] text_10_14 text-blue_gray_300 ">
                2:30 pm
              </span>
              <div className="  flex flex-col gap-[20px]">
                <div className=" px-[24px] py-[15px] border-[1px] w-fit rounded-[10px_10px_10px_0px] ">
                  <h2>Hi, Im the Support Assistant 🙂</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="pb-[6px] text_10_14 text-blue_gray_300 text-end">
                2:30 pm
              </span>
              <div className="  flex flex-col justify-end items-end gap-[20px]">
                <div className=" px-[24px] py-[15px] border-[1px] w-fit rounded-[10px_10px_10px_0px] ">
                  <h2>Hi, Im the Support Assistant 🙂</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="pb-[6px] text_10_14 text-blue_gray_300 ">
                2:30 pm
              </span>
              <div className="  flex flex-col gap-[20px]">
                <div className=" px-[24px] py-[15px] border-[1px] w-fit rounded-[10px_10px_10px_0px] ">
                  <h2>Hi, Im the Support Assistant 🙂</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="pb-[6px] text_10_14 text-blue_gray_300 text-end">
                2:30 pm
              </span>
              <div className="  flex flex-col justify-end items-end gap-[20px]">
                <div className=" px-[24px] py-[15px] border-[1px] w-fit rounded-[10px_10px_10px_0px] ">
                  <h2>Hi, Im the Support Assistant 🙂</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="pb-[6px] text_10_14 text-blue_gray_300 ">
                2:30 pm
              </span>
              <div className="  flex flex-col gap-[20px]">
                <div className=" px-[24px] py-[15px] border-[1px] w-fit rounded-[10px_10px_10px_0px] ">
                  <h2>Hi, Im the Support Assistant 🙂</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[170px] tab:bottom-[70px] xl:bottom-0 bg-white w-full">
            <div className="tab:py-[24px] tab:px-[30px] py-4 px-[10px] flex flex-wrap gap-[4px] tab:gap-[30px] ">
              <Buttonhelpcenter variant="fasterDelivery">  Faster Delivery Request  </Buttonhelpcenter>
              <Buttonhelpcenter variant="productInfo">  Product Information  </Buttonhelpcenter>
              <Buttonhelpcenter variant="cancelOrder">  Cancel Order </Buttonhelpcenter>
            </div>
            <div className="flex gap-[12px] py-3 px-[10px] tab:py-5 tab:px-[30px] justify-between w-full items-center ">
              <input
                className="w-full outline-none text-blue_gray_400 "
                placeholder="Your Message...."
                type="text"
              />
              <div className="flex gap-3 w-full items-center justify-end  max-w-fit ">
                <Icons type="emojiicon" className="hover:bg-hf_image cursor-pointer rounded-full" />
                <Icons type="galleryicon" className="hover:bg-hf_image cursor-pointer rounded-full" />
                <Button varient="primary"> SEND </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
