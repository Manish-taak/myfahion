"use client"
import React, { useState } from 'react'
import Addandcreatewishlist from './AddAndCreateWishlist';
import Createnewwishlist from './CreateNewWishlist';
import Overlay from '../ui/Overlay';
import { wishlistpopup } from '@/interFaces/type';

/**
 * WishlistCompletePopup Component - Manages the state and rendering of wishlist popups.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.setCreatenewlist - Function to set the state for creating a new wishlist
 * @param {boolean} props.Createnewlist - State indicating whether a new wishlist is being created
 * @returns {JSX.Element} The WishlistCompletePopup component
 */
const WishlistCompletePopup = (
    { setCreatenewlist, Createnewlist }: wishlistpopup
) => {
    // states to manages all popups
    const [newList, setNewList] = useState(false);
    const [viewlist, setviewlist] = useState(false);
    const [addtowishlist, setAddtowishlist] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    /**
     * Handle creating a new wishlist.
     */
    const CreatenewList = () => {
        setNewList(true);
        setShowOverlay(true);
    };

    /**
     * Switch to the new wishlist creation view.
     */
    const Createnew = () => {
        setNewList(false);
        setCreatenewlist(true);
    };

    /**
     * Handle adding a new list.
     */
    const newlist = () => {
        setAddtowishlist(true);
        setNewList(false);
        setCreatenewlist(false);
    };

    /**
     * Handle viewing the wishlist.
     */
    const viewwishlist = () => {
        setviewlist(true);
        setNewList(false);
        setCreatenewlist(false);
        setAddtowishlist(false);
    };

    /**
     * Close all popups.
     */
    const closePopup = () => {
        setShowOverlay(false);
        setNewList(false);
        setCreatenewlist(false);
        setAddtowishlist(false);
        setviewlist(false);
    };

    return (
        <>
            {newList && (
                <Addandcreatewishlist
                    newlist={newlist}
                    Createnew={Createnew}
                    closepopup={closePopup}
                />
            )}
            {/* {Createnewlist && <Addtowishlist closepopup={closePopup} />} */}
            {
                addtowishlist && (
                    <Createnewwishlist
                        viewwishlist={viewwishlist}
                        closepopup={closePopup}
                    />
                )
            }
            {/* {viewlist && <Addtowishlist closepopup={closePopup} />} */}
            {showOverlay && <Overlay isOpen={true} />}
        </>
    )
}

export default WishlistCompletePopup;
