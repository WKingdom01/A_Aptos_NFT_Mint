import { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import styles from "./layout.module.scss";
type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      {children}
    </>
  );
};

export default Layout;
