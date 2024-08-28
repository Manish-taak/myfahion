import React from "react";
import Swipercardsectioncommon from "@/components/Swiper";
import userthoughtdata from "@/json/userthoughtdata.json";

/**
 * UserThougths component displays a section with user thoughts using a swiper component.
 * @returns {JSX.Element} JSX element of the UserThougths component.
 */
const UserThougths = () => {
  return (
    <>
      <section className="py-10 md:py-[60px] xl:py-[80px]">
        <div className="container">
          <div className="">
            {/* Swiper component for user thoughts */}
            <Swipercardsectioncommon
              UserThoughtcarddata={userthoughtdata} // Data for user thoughts
              card="userthoughtcard" // Type of card to render
              headingmainclass="items-center justify-center md:justify-between" // Main class for heading
              smtext="Thought" // Small text for heading
              lgtext="Our Users Thoughts" // Large text for heading
              topbtn={true} // Show top button
              custombttombtnclass={"block md:hidden pt-[30px]"} // Custom class for bottom button on mobile
              customtopbtnclass={"md:block hidden"} // Custom class for top button on desktop
              testclass="text-center md:text-start" // Test class for alignment of text
              bottombtn={true} // Show bottom button
              pagination={true} // Enable pagination for swiper
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserThougths;
