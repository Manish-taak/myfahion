import React from "react";
import Headingsection from "@/components/HeadingSection";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Budgetbdals from "@/json/BudgetDeals.json"; // Importing data for budget deals

/**
 * BudgetDeals component renders a section displaying budget deals with images and links.
 *
 * @returns {JSX.Element} JSX for rendering the BudgetDeals component.
 */
const BudgetDeals = () => {
  const router = useRouter();

  return (
    <>
      <section className="py-10 md:py-[60px] xl:py-[80px]">
        <div className="container">
          <div className="flex justify-center md:justify-start">
            {/* Headingsection component for displaying the section heading */}
            <Headingsection
              smtext="Budget"
              lgtext="Best Deals In Budget"
              testclass="text-center md:text-start"
            />
          </div>
          <div className="mt-[30px] md:mt-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] md:gap-5 lg:gap-[30px]">
            {
              Budgetbdals.map((item, index) => {
                return (
                  <>
                    <div key={Date.now() + index} className="relative flex justify-center cursor-pointer group overflow-hidden rounded-md">
                      <div className="group-hover:scale-[1.1] duration-700">
                        {/* Image component for displaying deal image */}
                        <Image
                          width={375}
                          height={480}
                          className="rounded-md"
                          src={`/images/${item.image}`}
                          alt="image"
                        />
                      </div>
                      <Link href={"/products"}>
                        <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5">
                          <p className="text_20_12 text-blue_gray_600 text-center">
                            {/* Button title */}
                            {item.btntitle}
                          </p>
                          <h3 className="text_34_20 text-blue_gray_800 text-center mt-[2px]">
                            {/* Discount information */}
                            {item.discount}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default BudgetDeals;
