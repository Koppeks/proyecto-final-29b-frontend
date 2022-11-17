import Home from "../screen/Home/Home";
import EditProfession from "../screen/EditProfession/EditProfession";
import CategoryItems from "../components/CategoryItems/CategoryItems";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "../images/logo.png";
import { Image } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import Search from "../components/Search/Search";
import Filtros from "../screen/Filter/Filtros";
import ButtonNav from "../components/button/ButtonNav";
import CameraHook from "./CameraHook";
import SeeSpecialties from "../screen/SeeSpecialties/SeeSpecialties";
import { UserDetails } from "../screen/UserDetail/UserDetails";
import Favs from "../screen/Favs/Favs";
import Profile from "../screen/Profile/Profile";
import EditProfile from "../screen/Profile/EditProfile";
import SpecialDetail from "../screen/SpecialDetail/specialDetail";
import ButtonLogout from "../components/button/ButtonLogout";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const HomeNavigation = ({ navigation }) =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        component={Home}
        options={{
          headerLeft: () => (
            <View style={tw`flex-row items-center`}>
              <Image source={logo} style={tw`w-12 h-10`} />
              <Text style={tw`ml-3 text-lg `}>Vinculando</Text>
            </View>
          ),
          headerRight: () => (
            <View style={tw`flex-row items-center justify-between m-3 `}>
              {/* <Search /> */}
              {/* <View style={tw`mr-2`}>
                <ButtonNav navigation={navigation} />
              </View> */}
              <ButtonLogout/>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Filtros" component={Filtros} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen
        name="SeeSpecialties"
        component={SeeSpecialties}
        options={{ title: "Propuestas" }}
      />
      <Stack.Screen name="SpecialDetail" component={SpecialDetail} />
      <Stack.Screen name="Favs" component={Favs} />
      <Stack.Screen name="Home Cards Professional" component={CategoryItems} />
      <Stack.Screen name="Editar Pefil" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Perfil profesional" component={EditProfession} />
      <Stack.Screen
        name="TakePhoto"
        component={CameraHook}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
