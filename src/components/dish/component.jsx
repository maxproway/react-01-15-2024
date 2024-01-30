import { Ingredients } from "../ingredients/component";

export const Dish = ({ dish }) => {
  return (
    <div>
      {dish.name}, <strong>${dish.price}</strong>,
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
