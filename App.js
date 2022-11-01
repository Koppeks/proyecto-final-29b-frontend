
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationBar from "./src/containers/Navigation/NavigationBar";
import store from "./src/redux/store"
import { Provider } from "react-redux"

export default function App()
{
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavigationBar />
      </Provider>
    </NavigationContainer>
  );
}
