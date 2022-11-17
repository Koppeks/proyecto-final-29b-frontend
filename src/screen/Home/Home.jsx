
import { ScrollView } from "react-native";
import React from "react";
import ContainerHome from "../../containers/ContainerHome/ContainerHome";
import { Button } from "react-native-elements";
import { logout } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { information } from "../../redux/actions";
import { useEffect } from "react";

const Home = ({ navigation }) => {

  const dispatch= useDispatch()
  const { auth } = useSelector((state) => state.auth);

  console.log("token",auth)
        
    useEffect(() => {
      dispatch(information(auth));
    }, [dispatch]);

  return (
    <ScrollView>
      <ContainerHome navigation={navigation} />
    </ScrollView>
  );
};

export default Home;


