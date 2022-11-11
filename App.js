import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import MainContainer from "./src/containers/MainContainer/MainContainer";
import { PersistGate } from "redux-persist/integration/react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App()
{
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ActionSheetProvider>
            <StripeProvider publishableKey="pk_test_51LzTtJAKjLUan6A1mMCTSdQi9LCCDsXyEJOw71xdnXMTlmHwTpkEnHM8e8T7YNLoysTj2FXg6BaT92uG16AE0Op000o1Y7iA9s">

              <MainContainer />

            </StripeProvider>

          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
