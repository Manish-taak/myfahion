import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';

/**
 * Page component displaying an image and a button.
 * 
 * @returns {JSX.Element} React component representing the Page.
 */
const Page = () => {
    return (
        <div className="tab:p-[30px] flex gap-[30px] tab:border-[1px] border-blue_gray_50 rounded-[10px] flex-wrap items-center">
            <Image width={374} height={102} src="/images/recapture.png" alt="recapture" />
            {/* Button component for confirming order */}
            <Button className='max-[1130px]:w-full py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16' varient='primary'>Confirm Order</Button>
        </div>
    );
}

export default Page;
