import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc"
import GoBack from "../../components/button/GoBack"
import { removeToList } from "../../redux/reducers/shopList";
import Toast from "react-native-toast-message"

const CartShop = ({navigation}) => {
	
	const dispatch = useDispatch()

	const {shopList} = useSelector(state=> state.shopList)

	const totalCost = (data) =>{
		let total = 0
		for (let i = 0; i < data.length; i++) {
			total += data[i].pricing
		}
		return total
	}

	const deleteItemShopList = (e) =>{
		dispatch(removeToList(e))
	}

  return (
    <ScrollView >
			<Header
				containerStyle={{
					backgroundColor:'#f8f8f8',
				}}
				leftComponent={<GoBack navigation={navigation}/>}
				centerComponent={{ text: 'Carrito', style: { color: '#333', fontWeight:"700"} }}
			/>
			<ScrollView style={tw`h-full bg-gray-200`}>
					<Text style={tw`p-3 text-5 text-center`}>Carrito({shopList.length})</Text>
					<ScrollView style={tw`h-screen`}>
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
						{
							shopList.length > 0 ? 
							<View>
								<View style={tw`flex flex-row justify-between items-center w-screen m-3 p-3 border-b border-blue-400`}>
									<Text>Total del envio</Text>
									<Text>${totalCost(shopList)}</Text>
								</View>
								<TouchableOpacity style={tw`flex items-center w-full pt-7`}>
									<Text style={tw`text-center text-base text-white bg-blue-400 rounded-lg w-40 p-4`}>Finaliza la compra</Text>
								</TouchableOpacity>
							</View>
							:
							null
						}
			</ScrollView>
			<Toast ref={(ref) => Toast.setRef(ref)}/>
    </ScrollView>
  );
};

export default CartShop;


