import Featuredsection from "@/components/FeaturedSection";
import DealonSec from "./component/DealOnSec";

/**
 * Page component rendering DealonSec and Featuredsection components.
 * 
 * @returns {JSX.Element} JSX for rendering the Page component.
 */
const Page = () => {
  return (
    <>
      {/* Renders DealonSec component */}
      <DealonSec />
      {/* Renders Featuredsection component */}
      <Featuredsection />
    </>
  );
};

export default Page;
