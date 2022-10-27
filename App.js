import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import SignUp from "./src/screen/SignUp/SignUp";
import NavigationBar from './src/components/NavigationBar';
import store from './src/redux/store';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Stack = createNativeStackNavigator()

export default function App()
{
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded)
    return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen
          name="SignUp(form)"
          component={SignUp}
          options={{ title: 'Formulario de ingreso' }} />
        </Stack.Navigator> */}
        <NavigationBar />
      </NavigationContainer>
    </Provider>
  );
}
