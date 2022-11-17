import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeAdm from "../containers/ContainerHome/HomeAdm";
import DetailAdm from "../containers/DetailAdm/DetailAdm";
import EditForm from "../containers/RegisterForm/EditForm";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeAdm"
        component={HomeAdm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailUser"
        component={DetailAdm}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="EditUser" component={EditForm} />
    </Stack.Navigator>
  );
};

export default AdminStack;
