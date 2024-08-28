import { buttonpropshelpcenter } from '@/interFaces/type';
import { cn } from '@/utils/cn'; // Assuming this is a utility function for classNames
import React from 'react';

/**
 * Button component for Help Center with different variants.
 * @param {Object} props - Props for the ButtonHelpCenter component.
 * @param {string} props.variant - Variant of the button (fasterDelivery, productInfo, cancelOrder).
 * @param {Function} props.onClick - Click event handler for the button.
 * @param {React.ReactNode} props.children - Child elements to be rendered inside the button.
 */
const ButtonHelpCenter: React.FC<buttonpropshelpcenter> = ({ variant, onClick, children }) => {
    // Common base styles for all button variants
    const baseStyles = 'max-w-fit w-full tab:py-[14px] p-2 tab:px-[10px] whitespace-nowrap border-[1px] rounded-[4px] tab:rounded-[8px] tab:text_14_2 text_10_14';

    // Styles for different button variants
    const variantStyles = {
        fasterDelivery: 'border-[#2e7d321f] text-[#81C784]',
        productInfo: 'border-[#ed6c021f] text-[#FF9800]',
        cancelOrder: 'border-[#f85b5b1f] text-[#EF5350]',
    };

    return (
        <button className={cn(baseStyles, variantStyles[variant])} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonHelpCenter;
