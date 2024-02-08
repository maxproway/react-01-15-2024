import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <div className={styles.info}>
        <h2>Restaurant {restaurant.name}</h2>
        <h3>Menu:</h3>
        <Menu menu={restaurant.menu} />
        <h3>Reviews:</h3>
        <Reviews reviews={restaurant.reviews} />
      </div>
      <ReviewForm />
    </div>
  );
};
