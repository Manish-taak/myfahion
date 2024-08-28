import Icons from '@/icons/Index';
import { HeaderIconstype } from '@/interFaces/type';
import Link from 'next/link';
import React from 'react';

/**
 * HeaderIcons component for displaying header icons like Wishlist, Cart, and Login.
 * 
 * @param {HeaderIconstype} props - Props containing the counts for wishlist and cart items.
 * @returns {JSX.Element} HeaderIcons component JSX.
 */
const HeaderIcons = ({ wishitem, cartitem }: HeaderIconstype) => {
    return (
        <>
            <div className="hidden tab:flex gap-[10px] lg:gap-[20px] items-center">
                {/* Wishlist icon and link */}
                <Link
                    className="relative flex gap-[6px] flex-col items-center text-blue_gray_600 p-[2px]"
                    href="/wishlist"
                >
                    <Icons fill="#455A64" type="Wishlisticon" />
                    {wishitem > 0 && (
                        <div className="absolute flex justify-center items-center left-[35px] top-0 w-[20px] h-[18px] bg-light_primary rounded-full">
                            <span className="text-white text-[12px]">{wishitem}</span>
                        </div>
                    )}
                    <p className="text-[14px] leading-[20px] font-semibold">Wishlist</p>
                </Link>

                {/* Cart icon and link */}
                <Link
                    className="relative flex gap-[6px] flex-col text-blue_gray_600 items-center p-[2px]"
                    href="/cart"
                >
                    <Icons type="carticon" />
                    {cartitem > 0 && (
                        <div className="absolute flex justify-center items-center left-6 top-0 w-[20px] h-[18px] bg-light_primary rounded-full">
                            <span className="text-white text-[12px]">{cartitem}</span>
                        </div>
                    )}
                    <p className="text-[14px] leading-[20px] font-semibold">Cart</p>
                </Link>

                {/* Login icon and link */}
                <Link
                    className="flex gap-[6px] flex-col text-blue_gray_600 items-center p-[2px]"
                    href="/login"
                >
                    <Icons type="loginicon" />
                    <p className="text-[14px] leading-[20px] font-semibold">Login</p>
                </Link>
            </div>
        </>
    );
};

export default HeaderIcons;
