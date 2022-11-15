import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartShop from '../../screen/CartShop/CartShop';
import Favs from '../../screen/Favs/Favs';
import DisputForm from '../DisputForm/DisputForm';
import SignUp from '../../screen/SignUp/SignUp';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import DrawerAdminNavigator from '../../Hooks/DrawerAdminNavigator';
import { useSelector } from 'react-redux';
import HomeNavigation from '../../Hooks/HomeNavigation';

const Tab = createBottomTabNavigator();

const TabBar = () =>
{
    const { informationToken } = useSelector(state => state.informationToken);
    const ADMIN = 9;
    return (

        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: '#818CF8',
                headerShown: false
            }}
        >
            {
                informationToken?.role === ADMIN ?
                    <Tab.Screen
                        name="Inicio"
                        component={DrawerAdminNavigator}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home-sharp" size={size} color={color} />
                            )
                        }}
                    /> :
                    <Tab.Screen
                        name="Inicio"
                        component={HomeNavigation}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home-sharp" size={size} color={color} />
                            )
                        }}
                    />
            }
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
                name="Chat"
                component={DisputForm}
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