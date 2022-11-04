import { Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logo from '../../images/logo.png'
import tw from 'twrnc'
import correo from '../../images/correo.png'
import contrasena from '../../images/contrasena.png'
import FormInputLogIn from '../../components/FormInputLogIn/FormInputLogIn'
import ButtonLogIn from '../../components/button/ButtonLogIn'
import useViewModel from './ViewModel'
import { ScrollView } from 'react-native-gesture-handler'
import { logIn } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Login({navigation}) {
    const dispatch= useDispatch()

    const { email,password,onChange }=useViewModel();
    const {auth}= useSelector

  return (
    <ScrollView >
        <View style={tw`mt-40 items-center`}>
        <Image source={logo} style={tw`w-24 h-24`}/>
        <Text style={tw`font-bold text-6`}>Vinculando</Text>
        </View>

        <View style={tw`sm:shadow-md p-5 mt-5 rounded-lg w-100% h-90  `}>
            <Text style={tw`font-bold`}>INGRESAR</Text>
    
         
        
            <FormInputLogIn
            image={correo}
            placeholder="Correo Electronico"
            keyboardType="email-adderss"
            value={email}
            property='email'
            onChangeText={onChange}
            secureTextEntry={false}

            />
            <FormInputLogIn
            image={contrasena}
            placeholder="Contraseña"
            keyboardType="default"
            value={password}
            property='password'
            onChangeText={onChange}
            secureTextEntry={true}

            />
        
               
            <View style={tw`mt-5`}>
             
             <ButtonLogIn 
             text="Entrar"
             onPress={ () =>{
                 
                 console.log("first", {email,password}) 
                dispatch( logIn({email,password})) 
             }
            }
             />
                
            </View>

            <View style={tw` mt-5 flex-row items-center`}>
                
                <Text style={tw`text-lg `}>No tienes cuenta? </Text>

                <TouchableOpacity onPress={ () => navigation.navigate('Registro') }>
                    <Text style={tw`text-lg text-blue-600`}>Registrate</Text>
                </TouchableOpacity>

            </View>

        </View>

    </ScrollView>
  )
}
