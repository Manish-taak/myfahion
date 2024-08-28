import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { layoutprops } from "@/interFaces/type";

/**
 * Layout component renders the main structure of the application,
 * optionally including a header and footer based on the prop `showHeaderFooter`.
 * 
 * @param {layoutprops} props - Props object for configuring the Layout component.
 * @param {boolean} props.showHeaderFooter - Boolean to determine whether to show Header and Footer components.
 * @param {ReactNode} props.children - The nested content to be rendered within the Layout.
 * @returns {JSX.Element} - Layout component UI.
 */
const Layout: React.FC<layoutprops> = ({ children, showHeaderFooter }) => {
  return (
    <div>
      {/* Conditionally render Header if showHeaderFooter is true */}
      {showHeaderFooter && <Header />}

      <main>{children}</main>

      {/* Conditionally render Footer if showHeaderFooter is true */}
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
