import { useState } from "react";
import { UserContext } from "./components/context/user";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";

export const App = () => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <RestaurantPage />
      </Layout>
    </UserContext.Provider>
  );
};
