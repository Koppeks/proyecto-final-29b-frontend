import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import tw from "twrnc"
import GoBack from "../../components/button/GoBack"

const CartShop = ({navigation}) => {

  return (
    <View>
			<Header
				containerStyle={{
					backgroundColor:'#f8f8f8',
				}}
				leftComponent={<GoBack navigation={navigation} title={"Ir atras"}/>}
				centerComponent={{ text: 'Carrito', style: { color: '#333'} }}
			/>
			<View style={tw`flex`}>
				<Text style={tw`text-5 text-center`}>Lista de compra</Text>
				<View>
					
				</View>
			</View>
    </View>
  );
};

export default CartShop;
