import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import MainContainer from "./src/containers/MainContainer/MainContainer";
import { PersistGate } from "redux-persist/integration/react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function App()
{
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ActionSheetProvider>
            <MainContainer />
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}