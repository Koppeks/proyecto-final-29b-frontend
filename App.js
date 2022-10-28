
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationBar from "./src/components/NavigationBar/NavigationBar";



export default function App()
{
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}
