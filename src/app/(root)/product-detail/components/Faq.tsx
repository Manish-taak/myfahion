import Askquestion from '@/components/popup/AskQuestion'
import Overlay from '@/components/ui/Overlay'
import Button from '@/components/ui/Button'
import Icons from '@/icons/Index'
import useOutsideClick from '@/lib/hooks/useOutsideclick '
import React, { useRef, useState } from 'react'

const Faq = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [question , setquestion] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const openpopup = ()=>{
    setShowOverlay(true);
    setquestion(true)
  }

  const closepopup = ()=>{
    setShowOverlay(false)
    setquestion(false)
  }
  useOutsideClick(popupRef, closepopup);
  return (
    <>
    {question && <Askquestion closepopup={closepopup}  ref={popupRef}/> }
    {showOverlay && <Overlay isOpen={true} />}
      <div className= " mt-10">
        <div className="flex items-start flex-col 2xl:flex-row gap-y-[14px] xl:items-center justify-between  border-y-[1px] py-5">
          <h2 className="text-blue_gray_700 text-2xl min-[1550px]:text_34_20">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center max-[1280px]:w-full">
            <input
              className="px-[14px] py-3 placeholder:text_16_2 text-blue_gray_700 mr-[5px] border-[1px] 
             max-w-[327px]
                  w-full xl:w-[240px]  xl:mt-0 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search Questions..."
            />
            <Button onClick={openpopup}
              className="uppercase rounded-[4px] py-[10px] px-4 w-full hidden xl:block max-w-[151px]"
              varient="primary"
            >
              Ask question
            </Button>
          </div>
        </div>
        <div className="mt-5 border-b-[1px] pb-5">
          <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
            Q- Comfortable And Good Design
          </h3>
          <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
            Ans- Photographs are a way of preserving a moment in our lives
            for the rest of our lives. Many of us have at least been
            tempted at the flashy array of photo printers which seemingly
            leap off the shelves at even the least tech-savvy.
          </p>
          <div className="flex items-center justify-between">
            <h5 className="flex items-center gap-x-1 text_16_2_14 text-blue_gray_600">
              Mike Posner <Icons type="verified" />
            </h5>
            <div className="flex items-center gap-x-4">
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                <Icons type="like" />
                21 Likes
              </p>
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                <Icons type="dislike" />
                21 Likes
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 border-b-[1px] pb-5">
          <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
            Q- Comfortable And Good Design
          </h3>
          <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
            Ans- Photographs are a way of preserving a moment in our lives
            for the rest of our lives. Many of us have at least been
            tempted at the flashy array of photo printers which seemingly
            leap off the shelves at even the least tech-savvy.
          </p>
          <div className="flex items-center justify-between">
            <h5 className="flex items-center gap-x-1 text_16_2_14 text-blue_gray_600">
              Mike Posner <Icons type="verified" />
            </h5>
            <div className="flex items-center gap-x-4">
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                <Icons type="like" />
                21 Likes
              </p>
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                <Icons type="dislike" />
                21 Likes
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 border-b-[1px] pb-5">
          <h3 className="text_34_16 text-blue_gray_700 mt-[10px]">
            Q- Comfortable And Good Design
          </h3>
          <p className="text_14_1_12 text-blue_gray_300 pt-2 pb-5">
            Ans- Photographs are a way of preserving a moment in our lives
            for the rest of our lives. Many of us have at least been
            tempted at the flashy array of photo printers which seemingly
            leap off the shelves at even the least tech-savvy.
          </p>
          <div className="flex items-center justify-between">
            <h5 className="flex items-center gap-x-1 text_16_2_14 text-blue_gray_600">
              Mike Posner
              <Icons type="verified" />
            </h5>
            <div className="flex items-center gap-x-4">
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_400">
                <Icons type="like" />
                21 Likes
              </p>
              <p className="flex items-center gap-x-[5px] text_12_1 text-blue_gray_200">
                <Icons type="dislike" />
                21 Likes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq