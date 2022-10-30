import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView} from 'react-native'
import {Buttons} from '../button/Buttons'
import electricista from '../../images/electricista.png'
import todos from '../../images/todos.png'
import albanil from '../../images/albanil.png'
import medicina from '../../images/medicina.png'
import abogado from '../../images/abogado.png'
import limpieza from '../../images/limpieza.png'
import tw from 'twrnc'

export default function CategoryItems() {
  return (
<ScrollView horizontal={true} style={tw`flex-row`} >
    <View style={tw`mt-5 ml-8 mb-5 `}>
    <Buttons onPress={()=>alert("boton uno")} image={todos}></Buttons>
    <Text>Todos</Text>
    </View>
    <View style={tw`mt-5 ml-8 mb-5`}>
    <Buttons onPress={()=>alert("boton dos")} image={electricista}></Buttons>
    <Text>Electricista</Text>
    </View>
    <View style={tw`mt-5 ml-8 mb-5 `}>
    <Buttons onPress={()=>alert("boton tres")} image={albanil}></Buttons>
    <Text>Albañil</Text>
    </View>
    <View style={tw`mt-5 ml-8 mb-5 `}>
    <Buttons onPress={()=>alert("boton cuatro")} image={medicina}></Buttons>
    <Text>Medicina</Text>
    </View>
    <View style={tw`mt-5 ml-8 mb-5 `}>
    <Buttons onPress={()=>alert("boton cinco")} image={abogado}></Buttons>
    <Text>Abogado</Text>
    </View>
    <View style={tw`mt-5 ml-8 mb-5 `}>
    <Buttons onPress={()=>alert("boton siete")} image={limpieza}></Buttons>
    <Text>limpieza</Text>
    </View>
 
</ScrollView>
  )
}
