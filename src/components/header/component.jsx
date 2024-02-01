import classNames from "classnames";
import styles from "./styles.module.scss";
import { Button } from "../button/component";

export const Header = ({ isHighlighted }) => {
  return (
    <header
      className={classNames(styles.root, styles.header, {
        [styles.highlighted]: isHighlighted,
      })}
    >
      <h1>Header:</h1>
      <Button className={styles.pageLink} onClick={() => console.log("Open Menu Page")}>
        <span>Menu 1</span>
      </Button>
      <Button className={styles.pageLink} onClick={() => console.log("Open Menu Page 2")}>
        <span>Menu 2</span>
      </Button>
    </header>
  );
};
