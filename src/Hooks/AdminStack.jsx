import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeAdm from "../containers/ContainerHome/HomeAdm";
import DetailAdm from "../containers/DetailAdm/DetailAdm";
import EditForm from "../containers/RegisterForm/EditForm";

const Stack = createNativeStackNavigator();

const AdminStack = () =>
{
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Tablero'
                component={HomeAdm}
            />
            <Stack.Screen
                name='Detalle de Usuario'
                component={DetailAdm}
            />

            <Stack.Screen
                name='Editar Usuario'
                component={EditForm}
            />
        </Stack.Navigator>
    );
};

export default AdminStack;