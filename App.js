import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import MainContainer from "./src/containers/MainContainer/MainContainer";
import { PersistGate } from "redux-persist/integration/react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as Linking from 'expo-linking';

export default function App()
{
  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        NoAuthenticated: {
          screens: {
            Landing: '',
            Login: 'login',
            Registro: 'signup'
          }
        }
      }
    }
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ActionSheetProvider>
          <NavigationContainer linking={linking}>
            <MainContainer />
          </NavigationContainer>
        </ActionSheetProvider>
      </PersistGate>
    </Provider>
  );
}