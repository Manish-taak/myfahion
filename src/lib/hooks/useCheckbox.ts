
import { useState } from 'react';

/**
 * Custom hook for managing checkbox state.
 * @param {*} initialState - Initial state for the checked index.
 * @returns {{ checkedIndex: any, handleCheck: (index: any) => void }} Object with checkedIndex and handleCheck function.
 */


const useCheckbox = (initialState = null) => {
    const [checkedIndex, setCheckedIndex] = useState(initialState);

    /**
     * Handles checkbox click event.
     * @param {any} index - Index of the checkbox.
     */
    const handleCheck = (index: any) => {
        setCheckedIndex(index === checkedIndex ? null : index);
    };

    return { checkedIndex, handleCheck };
};

export default useCheckbox;
