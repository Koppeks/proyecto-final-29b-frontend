import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminStack from "./AdminStack";
import HomeNavigation from "./HomeNavigation";

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Admin Dashboard" component={AdminStack} />
    </Drawer.Navigator>
  );
};

export default DrawerAdminNavigator;
