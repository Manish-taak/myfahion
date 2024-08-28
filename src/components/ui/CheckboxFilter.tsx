import Icons from "@/icons/Index";
import { checkboxprops } from "@/interFaces/type";
import React from "react";

/**
 * CheckboxFilter component renders a checkbox input with label for filtering items.
 *
 * @param {checkboxprops} props - Component props.
 * @param {string} props.labelclass - Additional classes for the label.
 * @param {string} props.className - Additional classes for customization.
 * @param {string} props.value - Label text for the checkbox.
 * @param {string} props.color - Color variant of the checkbox ("green" for green theme).
 * @param {string} props.id - HTML id attribute for the checkbox input.
 * @param {(items: string[]) => void} props.setItems - State setter function for filtered items.
 * @param {string[]} props.items - Array of currently filtered items.
 * @returns {JSX.Element} CheckboxFilter component.
 */
const CheckboxFilter = ({
  labelclass,
  className,
  value,
  color,
  id,
  setItems,
  items,
}: checkboxprops) => {
  // Determine if the checkbox is checked based on whether value is in items array
  const isChecked = items.includes(value);

  // Handle checkbox change event
  const handleCheckboxChange = () => {
    if (isChecked) {
      // Remove item from filter if already checked
      setItems(items.filter((item) => item !== value));
    } else {
      // Add item to filter if not checked
      setItems([...items, value]);
    }
  };

  return (
    <div className="inline-flex relative items-center">
      <label
        className={`flex ${labelclass} flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full cursor-pointer`}
        htmlFor={id + "id"}
        onClick={handleCheckboxChange}
      >
        {/* Render checkbox label */}
        {value}
        <div
          className={`relative ${isChecked ? "checked" : ""} w-[20px] h-[20px] border-solid border ${
            isChecked
              ? color === "green"
                ? "bg-green-600"
                : "bg-light_primary"
              : ""
          } rounded-md before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity`}
        >
          {/* Hidden checkbox input */}
          <input
            id={id + "id"}
            type="checkbox"
            className={`hidden ${className}`}
            checked={isChecked}
            onChange={() => {}}
          />
          {/* Render checked icon if checkbox is checked */}
          <Icons type="checkedicon" className="absolute top-[2px] right-[3px] h-3.5 w-3.5" />
        </div>
      </label>
    </div>
  );
};

export default CheckboxFilter;
