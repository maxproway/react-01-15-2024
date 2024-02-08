import { useState } from "react";
import { Ingredients } from "../ingredients/component";
import styles from "./styles.module.scss";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={styles.root}>
      <div>
        {dish.name}, <strong>${dish.price}</strong>,
        <Ingredients ingredients={dish.ingredients} />
      </div>
      <Counter value={amount} onChange={setAmount} />
    </div>
  );
};
