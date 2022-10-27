import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.scss";
type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>

      {children}
      <Footer/>
    </>
  );
};

export default Layout;
