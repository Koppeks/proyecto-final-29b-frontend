import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import { useSelector } from "react-redux";
import tw from "twrnc"
import GoBack from "../../components/button/GoBack"

const CartShop = ({navigation}) => {

	const {shopList} = useSelector(state=> state.shopList)

  return (
    <ScrollView >
			<Header
				containerStyle={{
					backgroundColor:'#f8f8f8',
				}}
				leftComponent={<GoBack navigation={navigation}/>}
				centerComponent={{ text: 'Carrito', style: { color: '#333', fontWeight:"700"} }}
			/>
			<View style={tw`flex `}>
				<Text style={tw`text-5 text-center`}>Lista de compra</Text>
				<ScrollView>
					{
						shopList.length > 0 ? shopList.map(item =>
							<View style={tw`bg-gray-200 m-2`}>
								<Text style={tw`p-1 text-center font-bold border-b`}>{item.occupation}</Text>
								<Text style={tw`p-1 text-center`}>{item.generalDescription}</Text>
									<View style={tw`p-2`}>
										<Text style={tw``} >- Dias disponibles:</Text>
											<View style={tw`flex flex-row flex-wrap`}>
												{
													item.availableDays.map((day, i) => <Text key={i} >{day}</Text>)
												}
											</View>
									</View>
									<View style={tw`p-2`}>
										{
											item.images?.length > 0 ? item.images.map((image, i) =>
												<Image key={i}
												style={tw`h-25 w-25`} source={{ uri: image}}
												/>
											) : <View style={tw`w-100 h-25 flex align-center justify-center`}><Text style={tw`text-center`}>No hay imagenes</Text></View>
										}
									</View>
									<View style={tw`p-2`}>
										{
											item.specialities.length > 0 ? item.specialities.map((e, i) => 
												<View key={i} style={tw`p-1 m-1 bg-blue-200`}>
													<Text>Titulo: {e.title}</Text>
													<Text>Descripcion: {e.description}</Text>
													<Text>Costo del trabajo: {e.cost}$</Text>
												</View>
											) : <Text>No hay especialidades</Text>
										}
									</View>
								{/* {console.log(item)} */}
							</View>
							) : <Text>Aun no tienes nada en el carrito</Text>
					}
				</ScrollView>
				{
					shopList.length > 0 ? 
					<TouchableOpacity style={tw`flex items-center w-full pt-7`}>
          	<Text style={tw`text-center text-base text-white bg-blue-400 rounded-lg w-40 p-4`}>Finaliza la compra</Text>
        	</TouchableOpacity>
					:
					null
				}
				
			</View>
    </ScrollView>
  );
};

export default CartShop;
