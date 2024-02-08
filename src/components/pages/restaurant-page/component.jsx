import { Restaurant } from "../../restaurant/component";
import { RestaurantsTabs } from "../../restaurants-tabs/component";
import { restaurants } from "../../constants/mock";

import { useState } from "react";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  return (
    <div>
      <RestaurantsTabs restaurants={restaurants} onSelect={setActiveRestaurantId} />
      {activeRestaurant ? <Restaurant restaurant={activeRestaurant} /> : "No active Restaurant"}
    </div>
  );
};
