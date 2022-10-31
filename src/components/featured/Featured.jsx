import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';
import  {useEffect,useState}from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getPro } from '../../redux/actions'


const Featured = ({ navigation }) =>
{
  const dispatch = useDispatch()

  const{professional}=useSelector(state=>state.professional)

  useEffect(()=>{
    dispatch(getPro())
   
},[])

  return (
<>
 
    <View>
    <Text style={tw`mt-5 text-lg font-bold`}>Destacados</Text>


    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


    { professional.length>0 ? professional.map((elem,i)=>{ 
  return(
    
      <CardServsExpert key={i} navigation={navigation} elem={elem} />
  )
}): <Text>hola</Text>
}
    </ScrollView>
  </View>
  

    
    </>
  );
};

export default Featured;
