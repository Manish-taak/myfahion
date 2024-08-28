"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { breadcrumb, nextbreadcrumbprops } from '@/interFaces/type';
import { cn } from '@/utils/cn';

/**
 * BreadCrumbs component renders breadcrumbs based on the current pathname.
 *
 * @param {nextbreadcrumbprops} props - Component props.
 * @param {string} props.bgcolor - Background color class for the breadcrumb section.
 * @param {string} props.className - Additional classes for customization.
 * @param {React.ReactNode} props.children - Optional children elements to include within the breadcrumbs.
 * @returns {JSX.Element} BreadCrumbs component.
 */
const BreadCrumbs: React.FC<nextbreadcrumbprops> = ({ children, bgcolor, className }) => {
  const pathname = usePathname();

  // Split the pathname to get each breadcrumb segment
  const pathnames = pathname.split('/').filter((x: any) => x);

  // Create a breadcrumb item for each segment
  const breadcrumbs: breadcrumb[] = pathnames.map((path: any, index: any) => {
    // Create the URL for each breadcrumb segment
    const href = '/' + pathnames.slice(0, index + 1).join('/');
    // Capitalize the breadcrumb segment
    const label = path.charAt(0).toUpperCase() + path.slice(1);

    return { href, label };
  });

  return (
    <>
      <section className={cn(`${bgcolor} hidden md:block`)}>
        <nav className='container' aria-label="breadcrumb">
          <div className={`flex justify-between items-center ${className}`}>
            <div className="py-[30px] flex">
              {/* Home Link */}
              <li className='list-none'>
                <Link href="/">
                  <h1 className="text-blue_gray_600 hover:underline">Home</h1>
                </Link>
              </li>
              {/* Dynamic Breadcrumbs */}
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href={breadcrumb.href}>
                    <h1 className="text-blue_gray_800 hover:underline">{breadcrumb.label}</h1>
                  </Link>
                </li>
              ))}
            </div>
            {/* Optional Children */}
            {children}
          </div>
        </nav>
      </section>
    </>
  );
};

export default BreadCrumbs;
