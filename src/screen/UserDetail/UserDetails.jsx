import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import React from "react";
import { useSelector } from "react-redux";

export const UserDetails = ({ navigation }) => {
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
          <Text>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
        <Image
          style={tw`h-70 w-80
            m-6 mt-7 md:h-80 md:h-80 rounded-md`}
          source={{ uri: professionalId.image }}
        />
        <Image
          style={tw`h-70 w-80
            m-6 mt-7 md:h-80 md:h-80 rounded-md`}
          source={{ uri: professionalId.image }}
        />
        <Image
          style={tw`h-70 w-80
            m-6 mt-7 md:h-80 md:h-80 rounded-md`}
          source={{ uri: professionalId.image }}
        />
      </ScrollView>
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
        <Text style={tw`pl-30 pr-30  `}>About me</Text>
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
      <Text>Especialidades</Text>
      <ScrollView style={tw`flex px-8 py-3 `}>

      {/* <View>
          <View style={tw`flex-row`}>
            <View>
              <Image
                style={tw`h-12 w-12 rounded-full mx-1`}
                source={{
                  uri: "https://dreamingbytes.com/wp-content/uploads/2014/09/dott.jpg",
                }}
              />
            </View>
            <View>
              <Text>Diana Diaco</Text>
              <Text>* * * *</Text>
              <Text>buen trabajo</Text>
            </View>
          </View>
        </View> */}
        <View style={tw` p-4`}>
          <View style={tw`flex-row`}>
            <View>
              <Text>Especialidad 1 </Text>
              
              <Text style={tw` p-4 pl-3 pr-1`} > Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500,</Text>
            </View>

          </View>
          <View style={tw`justify-center   items-center`}>
          <TouchableOpacity 
          style={tw`w-20  h-7  rounded-lg border-2 border-rose-500`}
        >
          <Text style={tw`items-center`} >constatar </Text>
        </TouchableOpacity>
        </View>
        </View>

        

        
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
