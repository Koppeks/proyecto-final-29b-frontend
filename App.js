import Home from "./src/screen/Home/Home";
import HomeCardsProfessional from "./src/screen/Home/HomeCardsProfessional";
import EditProfession from "./src/screen/Home/EditProfession";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Home Cards Professional"
          component={HomeCardsProfessional}
        />
        <Stack.Screen
          name="Edit Professional Profile"
          component={EditProfession}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
