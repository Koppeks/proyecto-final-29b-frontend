import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

const Featured = () => {
  return (
    <View>
      <Text style={tw`mt-5`}>Destacados</Text>
      <ScrollView horizontal={true} style={tw`bg-gray-300`}>
        <View style={tw`flex-row bg-gray-300`}>
          <Image
            style={tw`w-25 h-25 m-5 bg-sky-500`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <View>
            <View style={tw`flex-row justify-end`}></View>
            <View style={tw`flex-row mt-6 w-40`}>
              <Text>Usuario destacado</Text>
              <Image
                style={tw`w-5 h-5 ml-3`}
                source={{
                  uri: "https://us.123rf.com/450wm/giamportone/giamportone2005/giamportone200500021/146157788-vector-de-forma-de-coraz%C3%B3n-icono-lineal-s%C3%ADmbolo-de-amor-.jpg?ver=6",
                }}
              />
            </View>
            <View style={tw`w-40`}>
              <Text>Titulo del servicio realizado</Text>
              <Text>$ 8/hora</Text>
            </View>
            <View style={tw`flex-row`}>
              <Image
                style={tw`w-5 h-5 mr-3`}
                source={{
                  uri: "https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-star-icon-png-image_1577370.jpg",
                }}
              />
              <Text>4,7</Text>
            </View>
          </View>
        </View>
        <View style={tw`flex-row bg-gray-300`}>
          <Image
            style={tw`w-25 h-25 m-5 bg-sky-500`}
            source={{
              uri: "https://i.pinimg.com/736x/7a/4a/19/7a4a1959f78c12cd09b020b3575e3068--design-patterns-logo-design.jpg",
            }}
          />
          <View>
            <View style={tw`flex-row justify-end`}></View>
            <View style={tw`flex-row mt-6 w-40`}>
              <Text>Usuario destacado</Text>
              <Image
                style={tw`w-5 h-5 ml-3`}
                source={{
                  uri: "https://us.123rf.com/450wm/giamportone/giamportone2005/giamportone200500021/146157788-vector-de-forma-de-coraz%C3%B3n-icono-lineal-s%C3%ADmbolo-de-amor-.jpg?ver=6",
                }}
              />
            </View>
            <View style={tw`w-40`}>
              <Text>Titulo del servicio realizado</Text>
              <Text>$ 8/hora</Text>
            </View>
            <View style={tw`flex-row`}>
              <Image
                style={tw`w-5 h-5 mr-3`}
                source={{
                  uri: "https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-star-icon-png-image_1577370.jpg",
                }}
              />
              <Text>4,7</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Featured;
