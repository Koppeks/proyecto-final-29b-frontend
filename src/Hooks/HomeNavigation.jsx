import Home from "../screen/Home/Home"
import HomeCardsProfessional from "../screen/Home/HomeCardsProfessional";
import EditProfession from "../screen/Home/EditProfession";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from '../images/logo.png'
import { Image } from "react-native";
import { View } from "react-native";
import tw from 'twrnc'
import Search from '../components/Serach/Search'
import Filtros from '../screen/Filter/Filtros'
import ButtonNav from '../components/button/ButtonNav'

const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) =>
{
    return (
        <Stack.Navigator>
              <Stack.Screen 
            name=" " 
            component={Home} 
            options={{
                headerLeft:()=><Image source={logo} style={tw`w-12 h-10 ml-5`}/>,
                headerRight:()=>
                <View style={tw`flex-row`}>

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
            <Stack.Screen
                name="Edit Professional Profile"
                component={EditProfession}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigation;