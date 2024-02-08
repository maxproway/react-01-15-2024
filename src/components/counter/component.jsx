import { Button } from "../button/component";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Counter = ({ value, min = 0, max = 5, onChange }) => {
  return (
    <div>
      <Button onClick={() => onChange(value - 1)} disabled={value === min} className={classNames(styles["dish-btn"])}>
        -
      </Button>
      {value}
      <Button onClick={() => onChange(value + 1)} disabled={value === max} className={classNames(styles["dish-btn"])}>
        +
      </Button>
    </div>
  );
};
