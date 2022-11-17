import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { removeToList } from "../../redux/reducers/shopList";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";


const RequestList = () => {
    const {shopList} = useSelector(state=> state.shopList)
    console.log(shopList[0])
    const deleteItemShopList = (e) =>{
		dispatch(removeToList(e))
	}
  return (
    <View style={tw` my-2`}>
       
      
    <View style={tw` items-center  `}>
    <Text style={tw`font-bold text-lg pt-2`}>Trabajos Pedidos</Text>
   </View>
   <ScrollView  style={tw` pl-4 pr-4 mx-4 h-60 border-4 rounded-md border-indigo-500/100`}  showsVerticalScrollIndicator={false}   >
   {
							shopList.length > 0 ? shopList.map(item =>
								<View key={item.id} style={tw`bg-[#F1F1F1] mx-5 my-2`}>
									<Text style={tw`p-1 text-center font-bold border-b`}>{item.name}</Text>
									<View style={tw`p-2`}>
										<Text style={tw`text-center`}>{item.description}</Text>
										<View>
											<Text>- Dias disponibles:</Text>
												<View style={tw`flex flex-col flex-wrap`}>
													{
														item.availableDays.map((day, i) => <Text key={i} > - {day}</Text>)
													}
												</View>
										</View>
										<View style={tw`flex justify-center w-full`}>
											{
												item.pictures?.length > 0 ? item.pictures.map((pic, i)=>
													<Image key={i} style={tw`h-25 w-25 m-1`} source={{ uri: pic}} />
											) : <View style={tw`w-100 h-25 flex align-center justify-center`}>
														<Text style={tw`text-center`}>No hay imagenes</Text>
													</View>
											}
										</View>
										<TouchableOpacity onPress={() =>
											{deleteItemShopList(item.id), Toast.show({
												type:'error',
												text1:'Eliminado',
												text2:'La especialidad ha sido removida con exito'
											})}}
											style={tw`w-full py-2`}>
											<Text style={tw`text-center text-base text-white bg-blue-400 rounded-lg w-35 p-1`}>Eliminar</Text>
										</TouchableOpacity>
									</View>
								</View>
								) : <Text style={tw`p-1 text-center`}>Aun no tienes nada en el carrito</Text>
						}
  </ScrollView>
  </View>
  )
}

export default RequestList