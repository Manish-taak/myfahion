import PolicySection from "@/components/PolicySection";
import Policytittle from "@/components/ui/PolicyTittle";
import React, { Fragment } from "react";
import policydata from "@/json/policydata.json";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * Page component renders the Privacy Policy section with a breadcrumb and policy sections.
 * @component
 */
const Page = () => {
  return (
    <>
      <section className="mt-[159px]">
        {/* Container with padding and background for the breadcrumb and policy title */}
        <div className="py-5 md:py-[30px] bg-extra_bg">
          {/* Breadcrumb component visible on medium screens and above */}
          <NextBreadcrumb
            className="p-[0px_!important] hidden md:block"
            bgcolor="bg-extra_bg"
          />

          {/* Policy title component for Privacy Policy */}
          <Policytittle title="Privacy Policy" className="md:mt-[60px]" />
        </div>

        {/* Mapping through privacy policy data and rendering PolicySection components */}
        {policydata?.privacydata.map((item, index) => (
          <Fragment key={Date.now() + index}>
            {/* Render PolicySection component with each policy item */}
            <PolicySection data={item} />
          </Fragment>
        ))}
      </section>
    </>
  );
};

export default Page;
