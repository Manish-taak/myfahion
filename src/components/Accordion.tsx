import React from 'react';
import Faq from './Faq';

/**
 * Accordion component
 * 
 * This component renders a grid of FAQ items, divided into two columns.
 * 
 * @component
 * @returns {React.Element} The rendered Accordion component.
 */
const Accordion = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:p-[30px] gap-[14px] md:gap-[30px] bg-white md:bg-hf_extra rounded-lg">
        
        <div className='flex flex-col gap-[14px] md:gap-[30px]'>
          {/** 
           * FAQ item
           * 
           * @element
           */}
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
        </div>
        <div className='flex flex-col gap-[14px] md:gap-[30px]'>
          {/** 
           * FAQ item
           * 
           * @element
           */}
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
          <Faq icontype="downarrow" question="How I Track The Progress of An My Orders?" questionclass="" answerclass="" answer="1. The bedding was hardly able to cover it." />
        </div>
      </div>
    </>
  )
}

export default Accordion;
