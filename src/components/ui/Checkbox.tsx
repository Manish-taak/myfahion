"use client";
import { cn } from "@/utils/cn";
import React from "react";
import Icons from "@/icons/Index";
import { checkboxtype } from "@/interFaces/type";

/**
 * Checkbox component renders a checkbox input with label and optional error message.
 *
 * @param {checkboxtype} props - Component props.
 * @param {string} props.value - Label text for the checkbox.
 * @param {string} props.color - Color variant of the checkbox ("green" for green theme).
 * @param {string} props.Checkbox - Additional classes for the checkbox container.
 * @param {string} props.diraction - Flex direction for checkbox and label ("row-reverse" for reversed order).
 * @param {string} props.id - HTML id attribute for the checkbox input.
 * @param {string} props.className - Additional classes for customization.
 * @param {string} props.labelclass - Additional classes for the label.
 * @param {string} props.labletextclass - Additional classes for the label text.
 * @param {() => void} props.onclick - Click handler function for the checkbox.
 * @param {(checked: boolean) => void} props.Setchecked - State setter function for checked state.
 * @param {boolean} props.checked - State indicating whether the checkbox is checked.
 * @param {string} props.error - Optional error message to display below the checkbox.
 * @param {string} props.name - HTML name attribute for the checkbox input.
 * @returns {JSX.Element} Checkbox component.
 */
const Checkbox = ({
  value,
  color,
  Checkbox,
  diraction,
  id,
  className,
  labelclass,
  labletextclass,
  onclick,
  Setchecked,
  checked,
  error,
  name,
}: checkboxtype) => {
  /**
   * Handles checkbox change event.
   * Toggles the checked state.
   */
  const handleCheckboxChange = () => {
    Setchecked(!checked);
  };

  return (
    <div
      onClick={handleCheckboxChange}
      className={cn(
        "inline-flex relative flex-col justify-start",
        diraction,
        "items-start"
      )}
    >
      <div
        className={cn(
          "flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full cursor-pointer",
          labelclass
        )}
      >
        <label className={`${cn(labletextclass)} cursor-pointer`}>
          {value}
        </label>
        <div className={cn("relative flex", Checkbox)}>
          <input
            name={name}
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            className={cn(
              // Default styles for checkbox
              "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
              // Conditional styles based on color variant
              color === "green"
                ? "checked:bg-green-600 checked:before:bg-green-600 checked:border-blue_gray_500 checked:border-[2px]"
                : "checked:bg-light_primary checked:before:bg-light_primary",
              className
            )}
          />
          {/* Render check icon if checked */}
          {checked && (
            <Icons
              type="checkedicon"
              className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
            />
          )}
        </div>
      </div>
      {/* Display error message if present */}
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};

export default Checkbox;
