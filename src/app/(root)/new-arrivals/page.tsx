import React from "react";
import Featuredsection from "@/components/FeaturedSection";
import ArrivalSec from "./component/ArrivalSec";

/**
 * Page component represents the main page layout including ArrivalSec and Featuredsection.
 * @component
 */
const Page = () => {
  return (
    <>
      {/* Render the ArrivalSec component */}
      <ArrivalSec />

      {/* Render the Featuredsection component */}
      <Featuredsection />
    </>
  );
};

export default Page;
