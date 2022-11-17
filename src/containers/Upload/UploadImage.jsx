import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../../config";
import tw from "twrnc";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadImg, setDownloadImg] = useState(null);
  console.log(downloadImg);

  const gifLoading =
    "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif";

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = { uri: result.uri };
    setImage(source);
  };

  const uploadImage = async () => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    setLoading(true);

    try {
      var ref = firebase
        .storage()
        .ref()
        .child("perfil/" + filename);
      await ref
        .put(blob)
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          console.log(downloadURL);
          setDownloadImg(downloadURL);
          Alert.alert("Foto subida!");
          setImage(null);
          setLoading(null);
          return downloadURL;
        });
      return null;
    } catch (error) {
      return null;
    }
  };

  return (
    <SafeAreaView>
      <View style={tw`mt-10 mb-10 justify-center items-center`}>
        <Image source={{ uri: downloadImg }} style={tw`w-20 h-20 m-3`} />
      </View>
      <TouchableOpacity
        style={tw`w-60 h-15 bg-blue-600 justify-center items-center rounded-md`}
        onPress={() => selectImage()}
      >
        <Text style={tw`font-bold text-white text-lg`}>
          Selecciona una imagen
        </Text>
      </TouchableOpacity>

      <View style={tw`mt-10 mb-10 justify-center items-center`}>
        {image && (
          <Image source={{ uri: image.uri }} style={tw`w-20 h-20 m-3`} />
        )}
        {image !== null ? (
          <TouchableOpacity
            style={tw`w-60 h-15 bg-blue-600 justify-center items-center rounded-md`}
            onPress={uploadImage}
          >
            <Text style={tw`font-bold text-white text-lg`}>Cargar Imagen</Text>
          </TouchableOpacity>
        ) : (
          <Text>No hay imagen para guardar</Text>
        )}
        {loading === true ? (
          <Image source={{ uri: gifLoading }} style={tw`w-20 h-20 m-3`} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default UploadImage;
