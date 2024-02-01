import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header isHighlighted />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
