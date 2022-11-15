import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeAdm from "../containers/ContainerHome/HomeAdm";
import HomeNavigation from "./HomeNavigation";

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
  const { informationToken } = useSelector((state) => state.informationToken);
  console.log(informationToken);
  const name = informationToken?.fullName;
  console.log("name", name);

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      {informationToken.role === 9 ? (
        <>
          <Drawer.Screen name="Home" component={HomeNavigation} />
          <Drawer.Screen name="HomeAdm" component={HomeAdm} />
        </>
      ) : (
        <Drawer.Screen name="Home" component={HomeNavigation} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerAdminNavigator;
