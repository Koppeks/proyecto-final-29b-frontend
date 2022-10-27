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
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-person-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Message}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favs"
                component={Favs}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Coche"
                component={CartShop}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default NavigationBar;