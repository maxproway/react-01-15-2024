import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>Restaurant {restaurant.name}</h2>
      <h3>Menu:</h3>
      <ul>
        {restaurant.menu.map((dish) => (
          <li>
            {dish.name}, <strong>${dish.price}</strong>, (ingredients:
            <span className={styles.ingredients}>
              {dish.ingredients.map((ingredient) => (
                <span>
                  {ingredient}
                  <span className={styles.devider}> + </span>
                </span>
              ))}
            </span>
            )
          </li>
        ))}
      </ul>

      <h3>Reviews:</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li>
            {review.text}, <strong>{review.user}</strong>, {review.rating}*
          </li>
        ))}
      </ul>
    </div>
  );
};
