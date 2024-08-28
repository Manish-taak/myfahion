
import Featuredsection from "@/components/FeaturedSection";
import BestProducts from "./component/BestProducts";

/**
 * Main page component rendering Best Products and Featured Section.
 * @returns {JSX.Element} The Page component.
 */


const Page = () => {
  return (
    <>
      {/* Render Best Products component */}
      <BestProducts />
      {/* Render Featured Section component */}
      <Featuredsection />
    </>
  );
};

export default Page;

