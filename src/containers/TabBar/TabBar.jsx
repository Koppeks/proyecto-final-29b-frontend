import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartShop from '../../screen/CartShop/CartShop';
import Favs from '../../screen/Favs/Favs';
// import Message from '../../screen/Message/Message';
import JobForm from '../JobForm/JobForm'
import SignUp from '../../screen/SignUp/SignUp';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import HomeNavigation from '../../Hooks/HomeNavigation';

const Tab = createBottomTabNavigator();

const TabBar = () =>
{
    return (

        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: '#818CF8',
                headerShown: false
            }}
        >

            <Tab.Screen
                name="Inicio"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-person-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="jobpost"
                component={JobForm}
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

export default TabBar;