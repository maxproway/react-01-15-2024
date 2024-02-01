import { restaurants } from "../materials/mock";

import { Layout } from "./components/layout/component";
import { RestaurantsTabs } from "./components/restaurants-tabs/component";
// import { Restaurants } from "./components/restaurants/component";
import { Restaurant } from "./components/restaurant/component";

import { useState } from "react";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  return (
    <Layout>
      <RestaurantsTabs restaurants={restaurants} onSelect={setActiveRestaurant} />
      <Restaurant restaurant={restaurants[activeRestaurant]} />
    </Layout>
  );
};
