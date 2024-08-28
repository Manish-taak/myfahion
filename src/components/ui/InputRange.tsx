

"use client";

import React, { useState, useEffect } from "react";
import { Inputrange } from "@/interFaces/type";

/**
 * InputRange component renders an HTML input element of type range
 * with a linear gradient background based on the input value.
 * 
 * @param {Inputrange} props - Props object for configuring the InputRange component.
 * @param {string} props.className - Additional CSS classes for styling the input range element.
 * @returns {JSX.Element} - InputRange component UI.
 */
const InputRange = ({ className }:Inputrange) => {
  const [value, setValue] = useState(40);

  useEffect(() => {
    const progress = document.getElementById("progress");

    // Event listener to update the gradient background based on input value
    const handleInput = (e:any) => {
      const value = e.target.value;
      e.target.style.background = `linear-gradient(to right, #607D8B 0%, #607D8B ${value}%, #c2cdd3 ${value}%, #c2cdd3)`;
    };

    // Adding event listener on component mount
    progress?.addEventListener("input", handleInput);

    // Cleaning up event listener on component unmount
    return () => {
      progress?.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <>
      {/* Input range element with dynamic styling and value */}
      <input
        type="range"
        value={value}
        min="0"
        max="100"
        step="1"
        className={`progress ${className}`}
        id="progress"
        onChange={(e:any) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputRange;
