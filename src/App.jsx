import { restaurants } from "../materials/mock";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </Layout>
  );
};
