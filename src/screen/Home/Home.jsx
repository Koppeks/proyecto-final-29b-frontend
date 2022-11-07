
import { ScrollView } from "react-native";
import React from "react";
import ContainerHome from "../../containers/ContainerHome/ContainerHome";
import { Button } from "react-native-elements";
import { logout } from "../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {

  const dispatch= useDispatch()

  return (
    <ScrollView>
      <Button 
      onPress={()=>dispatch(logout())}
      title="Cerrar sesion" />
      <ContainerHome navigation={navigation} />
    </ScrollView>
  );
};

export default Home;


