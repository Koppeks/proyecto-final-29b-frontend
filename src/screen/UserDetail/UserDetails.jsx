import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getspecial } from "../../redux/actions/index";

export const UserDetails = ({ navigation }) => {

  const dispatch = useDispatch();

  const { professionalId } = useSelector((state) => state.professional);

  

  return (
    <ScrollView style={tw`flex `}>
      <View style={tw`flex-row  justify-between pt-5 pb-3  px-3 `}>
        <Text style={tw`pt-5 px-3 text-2xl  items-center`}>
          {professionalId.fullName}
        </Text>

        <TouchableOpacity
          style={tw`w-12  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}
        >
          <Text>Reportar</Text>
        </TouchableOpacity>
      </View>

      <View  >
        <Image
          style={tw`h-70 w-80
            md:h-80 md:h-80 rounded-md`}
          source={{ uri: professionalId.image }}
        />
      
      </View>
      <View style={tw` items-center`}>
        <Text style={tw`pt-5 px-3 text-2xl`}>{professionalId.occupation}</Text>
      </View>

      {/* <View style={tw`flex-row justify-center`}>
        <View style={tw`pl-1 pr-1 `}>
          <Text style={tw`pl-2 pr-2 py-1 rounded bg-slate-200`}>Henry M</Text>
        </View>
        <View style={tw`pl-1 pr-1`}>
          <Text style={tw`pl-2 pr-2 py-1 rounded bg-slate-200 `}>* 4,5</Text>
        </View>
        <View style={tw`pl-1 pr-1 `}>
          <Text style={tw`pl-2 pr-2 py-1 rounded bg-slate-200`}>
            $15 (consto min){" "}
          </Text>
        </View>
      </View> */}

      <View style={tw`justify-center p-4`}>
      <Text style={tw`mt-5 text-lg font-bold`}>Descripcion</Text>
        <Text style={tw`pl-3 pr-1`}>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </Text>
      </View>
      <View style={tw`justify-center pl-24 pr-24`}> 
      <Text style={tw`mt-5 text-lg font-bold`}>Especializaciones</Text>
      </View>
     

      <ScrollView style={tw`h-screen `}>
          <Text>No tiene Especializaciones publicadas</Text>
            
      {/* {Special.map( item => {return(
          <>
            <View key={item.id}
              style={tw`flex justify-items-center m-2 mt-4 mb-4 bg-gray-500`}
            >
        
             <TouchableOpacity >

                <Text style={tw`text-black font-bold mx-1 `}>{item.occupation}</Text>
              </TouchableOpacity>
            </View>
          </> )})} */}


        

        
      </ScrollView>

      {/* <View style={tw`flex-row justify-around  pt-5 pb-3  px-3 `}>
        <TouchableOpacity
          style={tw`w-20  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}
        >
          <Text>Mensaje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`w-20  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}
        >
          <Text>Reservar</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};
