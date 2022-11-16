import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminStack from "./AdminStack";
=======
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import HomeAdm from "../containers/ContainerHome/HomeAdm";

import HomeNavigation from "./HomeNavigation";
import Profile from "../screen/Profile/Profile";
import { Text } from "react-native";
import tw from "twrnc";
import ButtonDrawer from "../components/button/ButtonDrawer";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authSlice";
 

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator 
    useLegacyImplementation={true} 
    drawerContent={(props)=>< MenuItems {...props}/>}>

      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="HomeAdm" component={HomeAdm} />
      <Drawer.Screen name="Perfil" component={Profile} />

    </Drawer.Navigator>
  ); 
};


export default DrawerAdminNavigator;

const MenuItems =({navigation})=>{

  const dispatch=useDispatch()

  return(
  <DrawerContentScrollView style={tw`p-5`}>
    <Text style={tw`text-lg font-bold mb-4`}>Mi menú</Text >

    <ButtonDrawer
    text="Perfil"
    onPress={()=>navigation.navigate('Perfil')}
    />
    <ButtonDrawer
    text="Home"
    onPress={()=>navigation.navigate('Home')}
    />
     <ButtonDrawer
    text="HomeAdm"
    onPress={()=>navigation.navigate('HomeAdm')}
    />
    
    <Drawer.Screen name="Admin Dashboard" component={AdminStack} />

    <ButtonDrawer
    text="Cerrar sesión"
    onPress={()=>dispatch(logout())}
    />

  </DrawerContentScrollView>
  )
}

export default DrawerAdminNavigator;

