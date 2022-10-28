import Home from "../screen/Home/Home"
import HomeCardsProfessional from "../screen/Home/HomeCardsProfessional";
import EditProfession from "../screen/Home/EditProfession";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeNavigation = () =>
{
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
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