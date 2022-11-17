import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getspecial } from "../../redux/actions/index";
import { getProId } from "../../redux/actions";


const SpecialDetail = ({navigation}) =>{

    const dispatch = useDispatch();

    const { professionalId } = useSelector((state) => state.professional);
    
      const { SpecialId } = useSelector((state) => state.Special);
      const { Ocupacion } = useSelector((state) => state.Ocupacion);
      

    useEffect(() => {
        dispatch(getspecial());
      }, [dispatch]);

      const onPressId = (e) => {
        dispatch(getProId(e));
       };

     
     
    
      console.log("user" ,SpecialId)
    
     
    return (


        <ScrollView style={tw`rounded-sm bg-white m-3 border-2 border-indigo-500/100`}>
             <View style={tw` mx-2 my-1 p-0`}>
                 <Text style={tw`font-bold `}>Detalle</Text>
                  <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}   >
                    {
                      SpecialId.pictures?.length > 0 ? SpecialId.pictures.map((image, i) =>
                      <Image key={i} style={tw` bottom-0  p-1 m-1 left-0 h-50 w-50 `} source={{ uri: image}} />) 
                      :null
                     }
                        {
                      SpecialId.pictures?.length > 0 ? SpecialId.pictures.map((image, i) =>
                      <Image key={i} style={tw` bottom-0  p-1 m-1 left-0 h-50 w-50 `} source={{ uri: image}} />) 
                      : null
                     }
                        {
                      SpecialId.pictures?.length > 0 ? SpecialId.pictures.map((image, i) =>
                      <Image key={i} style={tw` bottom-0  p-1 m-1 left-0 h-50 w-50 `} source={{ uri: image}} />) 
                      : null
                     }
                  </ScrollView>  
              </View> 
          
            
                <View style={tw `flex-row pl-7 `}> 
                <Text style={tw ``}>{professionalId.fullName}    </Text>
                <Text style={tw `font-bold`} >Costo: </Text>
                <Text >${SpecialId.pricing}  </Text> 
                <Text  style={tw`font-bold`}>   Rating :   </Text>
                </View>

                <View  style={tw` my-2 mx-3 h-50  border-2 rounded-md border-indigo-500/100`}>
            <Text  style={tw`font-bold text-sm`}>Info...</Text>
            <Text  style={tw`flex items-center mx-2 my-1 p-0`}>{SpecialId.description} </Text>
             </View>

             <View style={tw`flex-row justify-center p-4`}>

             <TouchableOpacity style={tw`flex flex-row align-center justify-items-center bg-blue-300 w-25 p-2 mr-2 `}>
                  <Text>Compra</Text>
                <MaterialCommunityIcons name="cart-outline" size={20} />
                </TouchableOpacity> 

                <TouchableOpacity style={tw`flex flex-row align-center justify-items-center bg-blue-300 w-25 p-2 ml-2 `}
                                    onPress={() => {
                                      navigation.navigate("UserDetails", { name: "UserDetails" });
                                      onPressId(professionalId.id);
                                    }}>
                  <Text>Ver Perfil</Text>
                </TouchableOpacity>
             </View>
        
           
        </ScrollView>



    )
}

export default SpecialDetail;