import { useState } from "react";
import { Button } from "../button/component";
import { Ingredients } from "../ingredients/component";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.root}>
      <div>
        {dish.name}, <strong>${dish.price}</strong>,
        <Ingredients ingredients={dish.ingredients} />
      </div>
      <div>
        <Button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          disabled={count === 0}
          className={classNames(styles["dish-btn"])}
        >
          -
        </Button>
        {count}
        <Button
          onClick={() => {
            if (count < 5) {
              setCount(count + 1);
            }
          }}
          disabled={count === 5}
          className={classNames(styles["dish-btn"])}
        >
          +
        </Button>
      </div>
    </div>
  );
};
