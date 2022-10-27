import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc'
import CartShop from '../screen/CartShop/CartShop';
import Favs from '../screen/Favs/Favs';
import Home from '../screen/Home/Home';
import Message from '../screen/Message/Message';
import Profile from '../screen/Profile/Profile';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavigationBar = ({ navigation, route }) =>
{
    return (

        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: '#818CF8'
            }}
        >

            <Tab.Screen
                name="Inicio"
                component={Home}
                option={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Perfil" component={Profile} />
            <Tab.Screen name="Chat" component={Message} />
            <Tab.Screen name="Favs" component={Favs} />
            <Tab.Screen name="Coche" component={CartShop} />
        </Tab.Navigator>
    )
}

export default NavigationBar;