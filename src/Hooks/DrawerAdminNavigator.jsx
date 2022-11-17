import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminStack from "./AdminStack";
import HomeNavigation from "./HomeNavigation";
import Profile from "../screen/Profile/Profile";

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Admin Dashboard" component={AdminStack} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerAdminNavigator;
