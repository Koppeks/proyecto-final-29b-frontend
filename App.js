
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/containers/TabBar/TabBar";
import store from "./src/redux/store"
import { Provider } from "react-redux"

export default function App()
{
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabBar />
      </Provider>
    </NavigationContainer>
  );
}
