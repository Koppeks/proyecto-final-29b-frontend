import { Text, View,ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";

const JobList = ()=>{
    return (
        <View style={tw` my-2`}>
       
      
        <View style={tw` items-center  `}>
        <Text style={tw`font-bold text-lg`}>Trabajos Pendientes</Text>
       </View>
       <ScrollView  style={tw` pl-2 pr-2 mx-4 h-60 border-4 rounded-md border-indigo-500/100`}  showsVerticalScrollIndicator={false}   >
        
         <View  style={tw` my-2 pl-1 pr-1  border-4 rounded-md border-indigo-500/100`}>
            <Text  style={tw`font-bold text-sm`}> Reparacion de Muebles de madera</Text>
            <Text  style={tw`text-left`}>Repato Muebles de madera cillas y mesas a encargo     HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA   HAHAHA</Text>
        </View>
        

      </ScrollView>
      </View>
    )
  }


export default JobList