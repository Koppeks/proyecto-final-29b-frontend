import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import tw from "twrnc";
import logo from "../../images/logo.png";
import linked from "../../images/linked.png";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions";

const { manifest } = Constants;

const LandingPage = ({ navigation }) =>
{
  const dispatch = useDispatch();

  const api = (typeof manifest.packagerOpts === 'object') && manifest.packagerOpts.dev ?
    manifest.debuggerHost.split(':').shift().concat(':3001') :
    'localhost:3001';
  // Cuando funcione el elephant
  //const api = 'https://proyecto-final-29b-backend-production.up.railway.app';

  const linkedinSignIn = async () =>
  {
    try
    {
      let result = await WebBrowser.openAuthSessionAsync(
        `http://${api}/user/linkedin?returnTo=${Linking.createURL('/')}`
      );

      console.log('Result');
      console.log(result);
      let data = {};
      if (result.url)
        data = Linking.parse(result.url);
      dispatch(logIn({ ...data.queryParams }));
    }
    catch (error)
    {
      console.log(error);
    }
  }

  return (
    <View style={tw`flex h-full justify-center items-center bg-white`}>
      <View style={tw`flex-row items-center mb-12`}>
        <Image style={tw`h-12 w-12`} source={logo} />
        <Text style={tw`m-5 font-bold text-4xl`}>Vinculando</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={tw`rounded mb-2 bg-blue-500 `}>
          <Text style={tw`text-center text-lg text-white  w-48 p-2`}>Ingresar con correo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={tw`text-center text-base mb-6`}>¿Aun no tienes cuenta?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={linkedinSignIn}>
        <View style={tw` flex-row bg-white rounded w-72 p-2 mt-4 border-2 border-black`}>
          <Image style={tw`h-8 w-8 ml-2 mr-2`} source={linked} />
          <Text style={tw`text-center text-lg text-black `}>Iniciar sesión con Linkedin</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default LandingPage;
