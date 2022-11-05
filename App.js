import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/containers/TabBar/TabBar";
import {store,persistor} from "./src/redux/store";
import { Provider } from "react-redux";
import LandingPage from "./src/screen/LandinPage/LandingPage";
import Login from "./src/screen/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./src/containers/MainContainer/MainContainer";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        
        <MainContainer/>

        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
