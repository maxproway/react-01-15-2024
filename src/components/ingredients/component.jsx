import styles from "./styles.module.scss";

export const Ingredients = ({ ingredients }) => {
  return (
    <span>
      &nbsp; (ingredients:
      <span className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <span>
            {ingredient}
            <span className={styles.devider}> + </span>
          </span>
        ))}
      </span>
      )
    </span>
  );
};
