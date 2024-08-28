import Link from "next/link";
import Headingsection from "@/components/HeadingSection";
import Icons from "@/icons/Index";
import { Fragment } from "react";
import exploredata from "@/json/explorebycategory.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * Explore component renders a section for exploring categories with images and names.
 * @returns {JSX.Element} JSX element of the Explore component.
 */
const Explore = () => {
  const router = useRouter();

  return (
    <>
      <section className="bg-hf_extra md:bg-white py-10 md:py-[60px] xl:py-[80px]">
        <div className="container">
          {/* Heading section for Explore By Categories */}
          <Headingsection
            testclass="text-center md:text-start"
            lgtextclass="whitespace-nowrap"
            headingmainclass="justify-center md:justify-between w-full"
            smtext="Categories"
            lgtext="Explore By Categories"
          >
            {/* View All button */}
            <button className="py-[10px] px-[16px] gap-[10px] hidden md:flex items-center hover:bg-light_primary hover:bg-opacity-[0.1] rounded-md">
              <span className="text-light_primary">
                {/* Link to view all categories */}
                <Link href={"/explore-by-categories"}>VIEW ALL</Link>
              </span>
              <Icons type="viewallarrow" />
            </button>
          </Headingsection>
          {/* Grid of category items */}
          <div className="grid grid-cols-2 gap-[13px] md:gap-5 lg:gap-6 xl:gap-[30px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-[30px] md:mt-[60px]">
            {exploredata.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  {/* Link wrapper for each category */}
                  <Link href={"/explore-by-categories"}>
                    <div>
                      <div className="overflow-hidden rounded-t-[50px] cursor-pointer">
                        {/* Image for category */}
                        <Image
                          width={240}
                          height={280}
                          className="rounded-t-[50px] transition-all duration-[0.8s] hover:scale-[1.1]"
                          src={`/images/${item.image}`}
                          alt="image"
                        />
                      </div>
                      {/* Category name */}
                      <h4 className="text-center text-blue_gray_700 md:text-blue_gray_600 text_20_16_medium my-[10px] md:my-5">
                        {item.name}
                      </h4>
                    </div>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
