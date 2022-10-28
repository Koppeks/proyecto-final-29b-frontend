import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Categories = () => {
  return (
    <View>
      <Text style={tw`p-1 mt-5`}>Categorias</Text>

      <ScrollView horizontal={true} style={tw`bg-gray-300`}>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Jardineria</Text>
        </View>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Macotas</Text>
        </View>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Electrico</Text>
        </View>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Limpieza</Text>
        </View>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Derecho</Text>
        </View>
        <View style={tw`flex items-center pb-2`}>
          <Image
            style={tw`w-15 h-15 m-4`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <Text>Enseñanza</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
