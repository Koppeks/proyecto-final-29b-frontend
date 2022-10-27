import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from  './src/screen/Home/Home';

import { UserDetail } from './src/screen/Home/UserDetail';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Perfil"
          component={UserDetail}
          options={{ title: 'Detail' }}
        />
       <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
           
    </NavigationContainer>

      
    
    

  );
}

