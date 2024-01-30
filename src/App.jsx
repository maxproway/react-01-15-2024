import { restaurants } from "../materials/mock";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";

export const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
