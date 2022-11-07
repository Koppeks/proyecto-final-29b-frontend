import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getspecial } from "../../redux/actions/index";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addToList } from "../../redux/reducers/shopList";

const SeeSpecialties = () => {

  const dispatch = useDispatch();
  const { Special } = useSelector((state) => state.Special);

  
  useEffect(() => {
    dispatch(getspecial());
  }, [dispatch]);

  const handleBuy = (e) =>{
    dispatch(addToList(e))
  }

  return (
    <ScrollView>
      {Special.map( e => 
        <View style={tw`bg-gray-200 m-2`} key={e.id}>
              <Text style={tw`text-center p-1 m-1`}>{e.occupation}</Text>
              <Text style={tw`text-center p-1 m-1`}>{e.generalDescription}</Text>
              <ScrollView style={tw`bg-gray-400 flex align-center`} horizontal={true} showsHorizontalScrollIndicator={true}> 
              {
                e.images?.length > 0 ? e.images.map((image, i) =>
                  <Image key={i}
                  style={tw`h-25 w-25`} source={{ uri: image}}
                  />
                ) : <View style={tw`w-100 h-25 flex align-center justify-center`}><Text style={tw`text-center`}>No hay imagenes</Text></View>
              }
              </ScrollView>
            <TouchableOpacity onPress={() => handleBuy(e)} style={tw`flex flex-row align-center justify-center bg-blue-300 w-25 p-2`}>
              <Text>Compra</Text>
              <MaterialCommunityIcons name="cart-outline" size={20} />
            </TouchableOpacity>
        </View> 
      )}
    </ScrollView>
  );
};

export default SeeSpecialties



/*
  {"availableDays": ["2022-11-14", "2022-11-17", "2022-11-23", "2022-11-15", "2022-11-25", "2022-11-26"],
    "createdAt": "2022-11-07T02:49:40.172Z",
    "generalDescription": "Soy abogado de hace más de 20 años",
    "id": 2,
    "images": null,
    "occupation": "Legal",
    "specialities": [
      {
        "cost": "12",
        "description": "Te separo de tu esposa",
         "title": "Resuelvo divorcios"
      },
      {"cost": "15",
       "description": "soy abogado penal",
        "title": "Te saco de la cárcel "
      }], 
    "updatedAt": "2022-11-07T02:49:40.172Z",
    "userId": null}
*/