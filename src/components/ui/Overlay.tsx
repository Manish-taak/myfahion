import React from "react";
import { OverlayProps } from "@/interFaces/type";

/**
 * Overlay component renders a semi-transparent background overlay when isOpen is true.
 * 
 * @param {OverlayProps} props - Props object for configuring the Overlay component.
 * @param {boolean} props.isOpen - Boolean indicating whether the overlay is open or closed.
 * @returns {JSX.Element | null} - Overlay component UI.
 */
const Overlay: React.FC<OverlayProps> = ({ isOpen = false }) => {
  return isOpen ? (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[51]`} />
  ) : null;
};

export default Overlay;
