import Productdata from "@/json/products.json";
import Headingsection from "@/components/HeadingSection";
import FeaturedCard from "@/components/ui/FeaturedCard";

/**
 * Component rendering the Best Selling Products section.
 * @returns {JSX.Element} The BestProducts component.
 */
const BestProducts = () => {
  return (
    <section className="mt-[161px]">
      <div className="bg-extra_4">
        <div className="container">
          <div className="py-[40px] md:py-[80px]">
            {/* Heading section for the best selling products */}
            <Headingsection
              smtext="Best"
              lgtext="Best Selling Products"
              headingmainclass="justify-center pb-[30px] md:pb-[60px]"
              testclass="text-center"
            />
            {/* Grid to display the featured product cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] md:gap-[30px]">
              {Productdata.map((item, index) => {
                return (
                  <FeaturedCard
                    key={Date.now() + index} // Unique key for each product card
                    bg={"md:bg-extra_bg"} // Background style for the card
                    custompaddingboxbottom="p-[10px] md:p-0s" // Custom padding for the card
                    card="vertical" // Layout style for the card
                    star={true} // Show star rating
                    data={item} // Product data passed to the card
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;

