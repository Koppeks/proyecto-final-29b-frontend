import { Text, View,ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";

const JobList = ()=>{
    return (
        <View style={tw` my-2`}>
       
      
        <View style={tw` items-center  `}>
        <Text style={tw`font-bold text-lg`}>Trabajos Pendientes</Text>
       </View>
       <ScrollView  style={tw` pl-4 pr-4 mx-4 h-60 border-4 rounded-md border-indigo-500/100`}  showsVerticalScrollIndicator={false}   >
        
         <View>
            <Text>   TiTulo   </Text>
        </View>
        

      </ScrollView>
      </View>
    )
  }


export default JobList