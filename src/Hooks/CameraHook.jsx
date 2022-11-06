import { View, Text, Image, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraButton from "../components/button/CameraButton";
import tw from "twrnc";

const CameraImg = ({ navigation }) => {
  const [permisoCamara, setPermisoCamara] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermisoCamara(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Imagen Guardada!");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (permisoCamara === false) {
    return <Text>No tiene acceso a la camara</Text>;
  }

  return (
    <View style={tw`flex-1 bg-zinc-800`}>
      {!image ? (
        <Camera
          style={tw`flex-1`}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={tw`p-10 flex-row justify-between mx--5`}>
            <CameraButton
              style={tw``}
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
            <Button title="Atras" onPress={() => navigation.navigate("Favs")} />
            <CameraButton
              color={flash === Camera.Constants.FlashMode.off ? "red" : "green"}
              icon={"flash"}
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={tw`flex-1`} />
      )}
      <View>
        {image ? (
          <View style={tw`flex-row justify-between px-15`}>
            <CameraButton
              title={"Re-take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <CameraButton title={"Save"} icon="check" onPress={saveImage} />
          </View>
        ) : (
          <View style={tw`bg-cyan-500 items-center`}>
            <CameraButton icon="camera" onPress={takePicture} />
          </View>
        )}
      </View>
    </View>
  );
};

export default CameraImg;
