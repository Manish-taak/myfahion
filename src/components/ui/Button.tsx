import React from "react";
import { cn } from "@/utils/cn";
import { ButtonProps } from "@/interFaces/type";
import Icons from "@/icons/Index";
import Link from "next/link";

/**
 * Button component renders a button with different variants and optional icon.
 *
 * @param {ButtonProps} props - Component props.
 * @param {React.ReactNode} props.children - Button text or content.
 * @param {string} props.varient - Variant of the button ("primary", "secondary", "gray", "liquid", "thirdly").
 * @param {string} props.className - Additional classes for customization.
 * @param {() => void} props.onClick - Click handler function.
 * @param {string} props.icon - Optional icon type to display alongside the button text.
 * @param {string} props.navroute - Optional navigation route for the button.
 * @param {string} props.btntype - Button type attribute ("button", "submit", "reset").
 * @returns {JSX.Element} Button component.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  varient,
  className,
  onClick,
  icon,
  navroute,
  btnclass,
  btntype = "button",
}) => {
  let variantClasses: string | undefined = "";

  switch (varient) {
    case "secondary":
      variantClasses = `text_34 py-[20px] px-[50px] capitalize xl:px-[50px] rounded-lg bg-blue_gray_900 text-white ${className}`;
      break;
    case "gray":
      variantClasses = `text-[18px] font-semibold text-blue_gray_400 rounded-[6px] border-[1px] hover:bg-blue_gray_400 hover:bg-opacity-10 leading-[26px] uppercase py-[18px] px-[14px] ${className}`;
      break;
    case "primary":
      variantClasses = `py-[16px] px-[24px] rounded-[8px] uppercase bg-light_primary border-[1px] border-light_primary text-white transition-all duration-[0.5s] hover:bg-light_warning_main hover:border-light_warning_main ${className}`;
      break;
    case "liquid":
      variantClasses = `py-[16px] px-[24px] uppercase bg-transparent text-light_primary border-[1px] border-light_primary transition-all duration-[0.5s] ${className}`;
      break;
    case "thirdly":
      variantClasses = `py-[16px] px-[24px] uppercase bg-transparent text-light_primary border-[1px] border-light_primary transition-all duration-[0.5s] hover:bg-light_primary hover:text-white ${className}`;
      break;
    default:
      variantClasses =
        "py-[16px] px-[24px] rounded-[8px] uppercase bg-light_primary border-[1px] border-light_primary text-white transition-all duration-[0.5s] hover:bg-light_warning_main hover:border-light_warning_main";
      break;
  }

  return (
    <>
      {navroute !== undefined || null ? (
        // Render as a Link if navroute is defined
        <Link href={`${navroute}`}  className={`w-full ${btnclass}`}>
          <button
            type={btntype}
            onClick={onClick}
            className={cn`flex justify-center whitespace-nowrap ${variantClasses}`}
          >
            {children}
            {icon && (
              <Icons className="max-w-6 max-h-6 fill-white" type="Rightarrow" />
            )}
          </button>
        </Link>
      ) : (
        // Render as a standard button if navroute is not defined
        <button
          type={btntype}
          onClick={onClick}
          className={cn`flex justify-center whitespace-nowrap ${variantClasses}`}
        >
          {children}
          {icon && (
            <Icons className="max-w-6 max-h-6 fill-white" type="Rightarrow" />
          )}
        </button>
      )}
    </>
  );
};

export default Button;
