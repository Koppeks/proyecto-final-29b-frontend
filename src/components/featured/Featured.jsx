import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';
import  {useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux'
import {getChar } from '../../redux/actions'

const Featured = ({ navigation }) =>
{
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getChar())
  },[])





  const{characters}=useSelector(state=>state.characters)

  
  return (
<>
  

 
    <View>
    <Text style={tw`mt-5 text-lg font-bold`}>Destacados</Text>


    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

    {characters && characters.map((elem,i)=>{
  return(
 
      <CardServsExpert key={i} navigation={navigation} elem={elem}/>

  )//
})
 

}
  
  
      
      
    </ScrollView>
  </View>
  

    
    </>
  );
};

export default Featured;
