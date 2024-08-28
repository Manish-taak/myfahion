import { useEffect } from "react";

/**
 * Custom hook to handle outside click events.
 * @param {React.RefObject<HTMLElement>} ref - Reference to the DOM element to detect outside clicks.
 * @param {() => void} callback - Callback function to invoke when an outside click is detected.
 */
const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {

        /**
         * Handle mousedown events outside the referenced element.
         * @param {MouseEvent} event - The mousedown event object.
         */
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref, callback]);
};

export default useOutsideClick;
