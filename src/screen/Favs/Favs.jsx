import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import UploadImage from "../../containers/Upload/UploadImage";
import TakePhotoButton from "../../components/button/TakePhotoButton";

export default function Favs({ navigation }) {
  return (
    <View style={tw`flex-1 bg-sky-300 justify-center items-center pb-15`}>
      <UploadImage />
      <TakePhotoButton navigation={navigation} />
    </View>
  );
}
