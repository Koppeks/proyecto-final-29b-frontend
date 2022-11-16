import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getspecial } from "../../redux/actions/index";
import { getoccupation } from "../../redux/actions/index";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addToList } from "../../redux/reducers/shopList";
import { bySpecials } from "../../redux/reducers/specialSlice";
import Usuario from '../../images/usuario.png';
import { getProId } from "../../redux/actions";
import { getspecialByID } from "../../redux/actions";



const SeeSpecialties = ({navigation}) => {

  const dispatch = useDispatch();
  const { Special } = useSelector((state) => state.Special);
  const { Ocupacion } = useSelector((state) => state.Ocupacion);
  const { SpecialFilt } = useSelector((state) => state.Special);


  
  useEffect(() => {
    dispatch(getspecial());
    dispatch(getoccupation())
  }, [dispatch]);

  const [filt, setFilt] = useState(-1);

  const handleBuy = (e) =>{
    dispatch(addToList(e))
  }
  const onPressId = (e) => {
    dispatch(getProId(e));
   
   };

   const onPressIdSpecial = (e) => {
    dispatch(getspecialByID(e));
   };
  const handleFilter = (e) => {
    dispatch(bySpecials(e));
  };
  
console.log(Special)
  return (
    <ScrollView>

<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
      {Ocupacion && Ocupacion.map( item => {return(
        
            <View key={item.id}
              style={tw`flex justify-center m-2 mt-4 mb-4 bg-gray-500`}>
              <Image style={tw`w-5 h-5 p-7 mb-2 mt-2`} source={{uri: item.image}} />
              <TouchableOpacity
                style={tw`bg-cyan-300`}
                onPress={() =>  {
                  {
                   handleFilter(item.id)}
                   if(item.id===filt){
                     setFilt(-1)
                   }else{
                     setFilt(item.id)
                   }
                  }
                 }>
                <Text style={tw`text-black font-bold mx-1 `}>{item.name}</Text>
              </TouchableOpacity>
            </View>
       )})}
      </ScrollView>
        
    <ScrollView style={tw`h-screen`}>
      { filt < 0 && typeof  Special !== "string"  ? (Special.map( e => 
        <View style={tw`bg-gray-200 m-2`} key={e.id}>

          <TouchableOpacity onPress={() =>{ navigation.navigate("SpecialDetail")
                                            onPressId(e.userId);
                                            onPressIdSpecial(e.id)  }}> 
          <View  style={tw`flex flex-row `}>
          {
                e.pictures?.length > 0 ? e.pictures.map((image, i) =>
                  <Image key={i}
                  style={tw` bottom-0  p-1 m-1 left-0 h-16 w-16 rounded-full`} source={{ uri: image}}
                  />
                ) : <View ><Image style={tw`bottom-0  p-1 m-1  rounded w-16 h-16`} source={Usuario} /></View>
              }
              <Text style={tw`pt-5 m-2 font-bold text-center`}>{e.name}</Text>        
            </View>
            </TouchableOpacity>
              <Text style={tw`text-center p-1 m-1`}>{e.description}</Text>
              
             
            <TouchableOpacity onPress={() => handleBuy(e)} style={tw`flex flex-row align-center justify-center bg-blue-300 w-25 p-2`}>
              <Text>Compra</Text>
              <MaterialCommunityIcons name="cart-outline" size={20} />
            </TouchableOpacity>
        </View> 
      )): (  
        <ScrollView>
           {SpecialFilt.length > 0 ? 
           ( SpecialFilt.map((e) => {
              return(
                <View style={tw`bg-gray-200 m-2`} key={e.id}>

                <View  style={tw`flex flex-row `}>
                  {
                      e.pictures?.length > 0 ? e.pictures.map((image, i) =>
                        <Image key={i}
                        style={tw` bottom-0  p-1 m-1 left-0 h-16 w-16 rounded-full`} source={{ uri: image}}
                        />
                      ) : <View ><Image style={tw`bottom-0  p-1 m-1  rounded w-16 h-16`} source={Usuario} /></View>
                    }
                    <Text style={tw`pt-5 m-2 font-bold text-center`}>{e.name}</Text>
                    
                  </View>
                    <Text style={tw`text-center p-1 m-1`}>{e.description}</Text>
                    
                   
                  <TouchableOpacity onPress={() => handleBuy(e)} style={tw`flex flex-row align-center justify-center bg-blue-300 w-25 p-2`}>
                    <Text>Compra</Text>
                    <MaterialCommunityIcons name="cart-outline" size={20} />
                  </TouchableOpacity>
              </View>  )
           })):( <Text>No hay de esa categoria</Text> )}

          
            </ScrollView>)}
              </ScrollView>


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