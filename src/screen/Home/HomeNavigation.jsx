import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import HomeCardsProfessional from "./HomeCardsProfessional";
import EditProfession from "./EditProfession";
import { UserDetail } from "../UserDetail/UserDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeNavigation = () =>
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Home Cards Professional"
                component={HomeCardsProfessional}
            />

        <Stack.Screen name="UserDetail"
                      component={UserDetail} />

            <Stack.Screen
                name="Edit Professional Profile"
                component={EditProfession}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigation;//como era el comando si si pero el comando como era que ya sali