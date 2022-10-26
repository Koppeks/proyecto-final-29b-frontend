import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc'
import CardServsExpert from '../components/CardServsExpert';

const Tab = createBottomTabNavigator();

const NavigationBar = ({ navigation, route }) =>
{
    return (
        // <View>
        //     <Button
        //         title="Home"
        //         onPress={() =>
        //             navigation.navigate('Detail', { name: 'DetailServiceExpert' })
        //         }
        //     />
        // </View>
        <Tab.Navigator>
            <Tab.Screen name="CardServs" component={CardServsExpert} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

export default NavigationBar;