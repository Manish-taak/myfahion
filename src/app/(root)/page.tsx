"use client";

import React from "react";
import Featuredsection from "@/components/FeaturedSection";
import Banner from "./home/Banner";
import Bestsellingproduct from "./home/BestSellingProduct";
import BiggestSalecard from "./home/BiggestSaleCard";
import Brandtag from "./home/BrandTag";
import BudgetDeals from "./home/BudgetDeals";
import Dealscard from "./home/DealsCardSection";
import DiscountRange from "./home/DiscountRange";
import Explore from "./home/Explore";
import Salebanner from "./home/SaleBanner";
import UserThoughts from "./home/UserThougths";
import Wearcollection from "./home/WearCollection";
import Footer from "@/components/Footer";

/**
 * Home component renders the main content for the home page.
 * @component
 */
export default function Home() {
  return (
    <>
      {/* Render the Banner component */}
      <Banner />

      {/* Render the Brandtag component */}
      <Brandtag />

      {/* Render the Wearcollection component */}
      <Wearcollection />

      {/* Render the Bestsellingproduct component */}
      <Bestsellingproduct />

      {/* Render the BiggestSalecard component */}
      <BiggestSalecard />

      {/* Render the Explore component */}
      <Explore />

      {/* Render the DiscountRange component */}
      <DiscountRange />

      {/* Render the BudgetDeals component */}
      <BudgetDeals />

      {/* Render the Dealscard component */}
      <Dealscard />

      {/* Render the Salebanner component */}
      <Salebanner />

      {/* Render the UserThoughts component */}
      <UserThoughts />

      {/* Render the Featuredsection component */}
      <Featuredsection />
      {/* <Footer/> */}
    </>
  );
}
