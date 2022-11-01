import Home from "../screen/Home/Home"
import HomeCardsProfessional from "../screen/Home/HomeCardsProfessional";
import EditProfession from "../screen/Home/EditProfession";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from '../images/logo.png'
import { Image } from "react-native";
import { View } from "react-native";
import tw from 'twrnc'
import Search from '../components/Search/Search'
import Filtros from '../screen/Filter/Filtros'
import ButtonNav from '../components/button/ButtonNav'
import {UserDetails} from '../screen/UserDetail/UserDetails'


const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) =>
{
    return (
        <Stack.Navigator>
              <Stack.Screen 
                name=" " 
                component={Home} 
                options={{
                    headerLeft:()=><Image source={logo} style={tw`w-12 h-10`}/>,
                    headerRight:()=>
                    <View style={tw`flex-row items-center justify-between w-70`}>
                        <Search/> 
                        <ButtonNav navigation={navigation} />
                    </View>
                }}
            />
              <Stack.Screen
                name="Filtros"
                component={Filtros}
            />

            <Stack.Screen
                name="Home Cards Professional"
                component={HomeCardsProfessional}
            />
               <Stack.Screen name="UserDetails"
                      component={UserDetails} />

             

            <Stack.Screen
                name="Edit Professional Profile"
                component={EditProfession}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigation;