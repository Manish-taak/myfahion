import NextBreadcrumb from "@/components/ui/BreadCrumbs";
import ProfileSide from "./component/ProfileSide";
import Responsivesidebar from "./component/ResponsiveSidebar";

/**
 * Profilelayout component provides a structured layout for profile-related pages,
 * including a breadcrumb navigation, sidebar for desktop and mobile views, and
 * space for children components.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Profilelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main container with top margin, adapting to different screen sizes */}
      <div className="bg-extra_4 mt-[133px] md:mt-[165px] tab:mt-[162px] 2xl:mt-[162px]">

        {/* Breadcrumb navigation */}
        <NextBreadcrumb />

        {/* Content container for sidebar and main content */}
        <div className="container">

          {/* Flex container for responsive layout */}
          <div className="flex gap-[10px] md:gap-[20px] lg:gap-[30px] max-[768px]:py-[30px] tab:pb-[80px]">

            {/* Sidebar for larger screens (hidden on small screens) */}
            <div className="tab:block hidden">
              <ProfileSide />
            </div>

            {/* Sidebar for small screens (hidden on larger screens) */}
            <div className="tab:hidden w-full">
              <Responsivesidebar />
            </div>

            {/* Main content area where child components are rendered */}
            <div className="tab:block hidden w-full">
              {children}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
