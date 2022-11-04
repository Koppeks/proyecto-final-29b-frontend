import React from 'react'
import TabBar from "../../containers/TabBar/TabBar";
import { Provider, useSelector } from "react-redux";
import LandingPage from "../../screen/LandinPage/LandingPage";
import Login from "../../screen/Login/Login";
import CheckIn from "../../screen/CheckIn/CheckIn";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const NoAuthStack= createStackNavigator();
const AuthStack=createStackNavigator()

function NoAutenticatedhNavigator() {
    return(
        <NoAuthStack.Navigator>
            <NoAuthStack.Screen
                options={{
                    headerShown: false,
                }}
                name="Landing"
                component={LandingPage}
            />
            <NoAuthStack.Screen
                options={{
                    headerShown: false,
                }}
                name="Login"
                component={Login}
            />
            <NoAuthStack.Screen
                options={{
                    headerShown: false,
                }}
                name="Registro"
                component={CheckIn}
            />
        </NoAuthStack.Navigator>
    )
}

function AuthenticatedNavigator() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Inicio"
                component={TabBar}
                options={{
                headerShown: false,
                }}
            />
        </AuthStack.Navigator>

    )
}

export default function MainContainer() {

    const { auth } = useSelector((state) => state.auth);

    console.log(auth)
    
  return (

    <Stack.Navigator>
        {
        auth.jwt? (
            <Stack.Screen
            name={"Authenticated"}
            component={AuthenticatedNavigator}
            options={{
                headerShown: false,
                }}
            />
    ):(
        <Stack.Screen
        name={"NoAuthenticated"}
        component={NoAutenticatedhNavigator}
        options={{
            headerShown: false,
            }}
        />
      
  )
        } 



       
         </Stack.Navigator>
  )
}
