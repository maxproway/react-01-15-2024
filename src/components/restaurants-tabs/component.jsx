import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const RestaurantsTabs = ({ restaurants, onSelect }) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ name, id }) => (
        <Tab
          title={name}
          onClick={() => {
            onSelect(id);
          }}
        />
      ))}
    </div>
  );
};
