import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with conditional and array inputs.
 * 
 * @param {...ClassValue[]} args - Classes to be merged. Can include strings, arrays, objects, or falsy values.
 * @returns {string} - Merged class names as a single string.
 */

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
