import Swipercardsectioncommon from '@/components/Swiper'
import React from 'react'
import Productdata from "@/json/products.json";
const ProductDealcard = () => {
  return (
    <>
      <Swipercardsectioncommon
        cardData={Productdata}
        card="Dealcards"
        pagination={true}
        smtext="Together"
        lgtext="Buy Together"
        topbtn={true}
        headingmainclass=" justify-center md:justify-between  text-center md:text-start md:items-center pb-[30px] md:pb-[60px] "
      />
    </>
  )
}

export default ProductDealcard