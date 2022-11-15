import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeAdm from "../containers/ContainerHome/HomeAdm";

import HomeNavigation from "./HomeNavigation";

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="HomeAdm" component={HomeAdm} />
    </Drawer.Navigator>
  );
};

export default DrawerAdminNavigator;
