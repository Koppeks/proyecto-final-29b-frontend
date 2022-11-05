import { Text, View, Image, TouchableOpacity,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCat } from "../../redux/actions/index";
import { getOcupacions } from "../../redux/actions/index";
import { getPro } from "../../redux/actions/index";
import { byCategories } from "../../redux/reducers/categoriesSlice";
import SelectFilter from '../SelectFilter/SelectFilter'

import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert'




export default function CategoryItems({navigation}) {

  const dispatch = useDispatch();

  const { categoriesfilter  } = useSelector((state) => state.categories);
  const {  categories  } = useSelector((state) => state.categories);
  const { professional } = useSelector((state) => state.professional);
  const { Ocupacion } = useSelector((state) => state.Ocupacion);

  const [filtCateg, setFiltCateg] = useState(-1);

  useEffect(() => {
    dispatch(getCat());
    dispatch(getPro());
    dispatch(getOcupacions())
  }, [dispatch]);


  const handleFilter = (e) => {
    dispatch(byCategories(e));
  };


  
   console.log("en CI ",categoriesfilter)
   console.log("filtCate", filtCateg)
   //console.log("categorias P " ,professional )

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {Ocupacion.map( item => {return(
          <>
            <View key={item.id}
              style={tw`flex justify-items-center m-2 mt-4 mb-4 bg-gray-500`}
            >
              <Image style={tw`w-5 h-5 p-7 mb-2 mt-2`} source={{uri: item.image}} />
              <TouchableOpacity
              
              
                style={tw`bg-cyan-300`}
                onPress={() =>  {
                 {console.log(item.name) 
                  handleFilter(item.name)}
                  if(item.id===filtCateg){
                    setFiltCateg(0)
                  }else{
                    setFiltCateg(item.id)
                  }
                 }
                }
                
              >
                <Text style={tw`text-black font-bold mx-1 `}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </> )})}
      </ScrollView>

    <SelectFilter/>

      <View>
      <ScrollView  style={tw`h-120 `}>
        { filtCateg > 0 ? (

          categoriesfilter.map((elem, i) => {
            return (
              
              <CardServsExpert key={i} navigation={navigation} elem={elem} />
             
            );
          })
        ) : 
        
        (
           <ScrollView  style={tw`h-120 `}>
          {professional.length > 0 ? (
            
          professional.map((elem, i) => {
           return (
             <CardServsExpert key={i} navigation={navigation} elem={elem} />
           );
         })
          ) : (
          <Text>hola</Text>
            )} 
             </ScrollView> 
        )}</ScrollView>


    
      </View>
    </View>
  );
}
// (
//   <ScrollView  style={tw`h-120 `}>
// {professional.length > 0 ? (
//      <FlatList
//    data={professional}
//    renderItem={({ elem }) => (
//      <>
//        <CardServsExpert key={elem.id} navigation={navigation} elem={professional} />
//      </>
//    )}
//  />
//  ) : (
//  <Text>hola</Text>
//    )}

//     </ScrollView> 
// )

