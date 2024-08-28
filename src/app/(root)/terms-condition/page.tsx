import PolicySection from "@/components/PolicySection";
import Policytittle from "@/components/ui/PolicyTittle";
import React, { Fragment } from "react";
import policydata from "@/json/policydata.json";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * Page component renders the Terms & Condition section with related details.
 * @component
 */
const Page = () => {
  return (
    <>
      <section className="mt-[159px]">
        <div className="py-5 md:py-[30px] bg-extra_bg">
          {/* Breadcrumb component */}
          <NextBreadcrumb
            className="p-[0px_!important] hidden md:block"
            bgcolor="bg-extra_bg"
          />
          {/* Policy title component */}
          <Policytittle title="Terms & Condition" className="md:mt-[60px]" />
        </div>
        {/* Mapping over termsdata to render PolicySection for each item */}
        {policydata?.termsdata.map((item, index) => (
          <Fragment key={Date.now() + index}>
            <PolicySection data={item} />
          </Fragment>
        ))}
      </section>
    </>
  );
};

export default Page;
