import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JobForm from "../containers/JobForm/JobForm";

import HomeNavigation from './HomeNavigation';

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () =>
{
    return (
        <Drawer.Navigator useLegacyImplementation={true}>
            <Drawer.Screen name="Home" component={HomeNavigation} />
            <Drawer.Screen name="Post Job" component={JobForm} />
        </Drawer.Navigator>
    );
}

export default DrawerAdminNavigator;