import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/containers/TabBar/TabBar";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import LandingPage from "./src/screen/LandinPage/LandingPage";
import Login from "./src/screen/Login/Login";
import CheckIn from "./src/screen/CheckIn/CheckIn";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Landing"
            component={LandingPage}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Registro"
            component={CheckIn}
          />
          <Stack.Screen
            name="Inicio"
            component={TabBar}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
