import Home from "../screen/Home/Home"
import EditProfession from "../screen/EditProfession/EditProfession";
import CategoryItems from '../components/CategoryItems/CategoryItems'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from '../images/logo.png'
import { Image } from "react-native";
import { View } from "react-native";
import tw from 'twrnc'
import Search from '../components/Search/Search'
import Filtros from '../screen/Filter/Filtros'
import ButtonNav from '../components/button/ButtonNav'
import {UserDetails} from '../screen/UserDetail/UserDetails'
import Profile from '../screen/Profile/Profile'


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
               <Stack.Screen name="UserDetails"
                      component={UserDetails} />

                      <Stack.Screen
                name="Home Cards Professional"
                component={CategoryItems}
            />

                     <Stack.Screen
                name="Profile"
                component={Profile}
            />

            <Stack.Screen
                name="Edit Professional Profile"
                component={EditProfession}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigation;