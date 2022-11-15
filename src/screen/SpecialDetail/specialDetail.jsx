import { View, Text, ScrollView,Image } from 'react-native';
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getspecial } from "../../redux/actions/index";


const SpecialDetail = () =>{

    const dispatch = useDispatch();

    const { professionalId } = useSelector((state) => state.professional);
      const { Special } = useSelector((state) => state.Special);
      const { SpecialId } = useSelector((state) => state.Special);
      

    useEffect(() => {
        dispatch(getspecial());
      }, [dispatch]);


     
     
      console.log("user" ,professionalId)
      console.log("Filtro" ,SpecialId)
    return (


        <ScrollView style={tw`rounded-sm bg-white m-3 border-2 border-indigo-500/100`}>
             <View style={tw`flex items-center mx-2 my-1 p-0`}>
              
                 <Text style={tw`font-bold `}>{SpecialId.name}</Text>
                </View>  
                 <View  >
                 <Text style={tw `font-bold `} >  </Text>
                </View>

                <View >
                 <Text style={tw ``}>{professionalId.fullName}</Text>
                </View>
                <View >
                 <Text style={tw ``}>{professionalId.occupation}</Text>
                </View>
                <View style={tw `flex-row `}> 
                <Text style={tw `font-bold`} >Costo: </Text>
                <Text >${SpecialId.pricing}</Text> 
                </View>

                <View  style={tw` my-2 pl-1 pr-1  border-1 rounded-md border-indigo-500/100`}>
            <Text  style={tw`font-bold text-sm`}> </Text>
            <Text  style={tw`flex items-center mx-2 my-1 p-0`}>{SpecialId.description} </Text>
             </View>

             <View  style={tw`flex flex-row `}>
            {
                SpecialId.pictures?.length > 0 ? SpecialId.pictures.map((image, i) =>
                  <Image key={i}
                  style={tw` bottom-0  p-1 m-1 left-0 h-50 w-50 `} source={{ uri: image}}
                  />
                ) : <View > </View>
              }
             
              
            </View>
             
           
        </ScrollView>



    )
}

export default SpecialDetail;