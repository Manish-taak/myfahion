// components/Firstrefresh.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import Overlay from './ui/Overlay';
import Offercard from './popup/OfferCard';
import useOutsideClick from '@/lib/hooks/useOutsideclick ';

/**
 * Functional component for managing the first visit popup.
 * Displays an overlay and an offer card popup when a user visits for the first time.
 * Closes the popup when clicked outside.
 * @returns {JSX.Element} JSX for FirstRefresh component.
 */
export default function FirstRefresh() {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the user has visited before using localStorage
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            // If not visited before, show the popup and set localStorage
            setShowPopup(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    /**
     * Function to close the popup.
     */
    const closepopup = () => {
        setShowPopup(false);
    }

    // Hook to handle outside click to close the popup
    useOutsideClick(popupRef, closepopup);

    return (
        <>
            {showPopup && (
                <>
                    {/* Overlay component to dim the background */}
                    <Overlay isOpen={true} />
                    {/* Offercard component for the popup offer */}
                    <Offercard closepopup={closepopup} ref={popupRef} />
                </>
            )}
        </>
    );
}
