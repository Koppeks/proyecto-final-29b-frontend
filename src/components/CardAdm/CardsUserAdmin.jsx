import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProEmail, getPro } from "../../redux/actions/index";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useIsFocused } from "@react-navigation/native";

const CardsUserAdmin = ({ navigation }) => {
  const dispatch = useDispatch();
  const { professional } = useSelector((state) => state.professional);
  const isFocused = useIsFocused();

  const gifLoading =
    "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif";

  useEffect(() => {
    if (isFocused) dispatch(getPro());
    if (isFocused) dispatch(deleteProEmail());
  }, [isFocused]);

  const handleDelete = (email) => {
    navigation.navigate("HomeAdm");
    dispatch(deleteProEmail(email))
      .then((res) => res)
      .catch((e) => console.log(e));
  };

  const createTwoButtonAlert = (email) =>
    Alert.alert("Elimiar Usuario", "Desea eliminar el usuario?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelar Proceso"),
        style: "cancel",
      },
      {
        text: "Eliminar",
        onPress: () => handleDelete(email),
      },
    ]);

  return (
    <ScrollView style={tw`mt-1 h-56 `}>
      {professional.length > 0 ? (
        professional.map((user) => {
          return (
            <View key={user.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailUser", { id: user.id })
                }
              >
                <View
                  style={tw`flex-row m-2 border-4 border-indigo-500/50 rounded-lg`}
                >
                  <View>
                    <Image
                      style={tw`w-20 h-20 m-2 border-2 border-indigo-500/50 rounded-full `}
                      source={{ uri: user.image }}
                    />
                  </View>
                  <View style={tw`m-2 flex-1 justify-center `}>
                    <Text style={tw`p-1 text-lg`}>{user.fullName}</Text>
                    <Text style={tw`p-1 text-lg`}>
                      {user.isProfessional === true ? (
                        <Text>Profesional</Text>
                      ) : (
                        <Text>Cliente</Text>
                      )}
                    </Text>
                  </View>
                  <View style={tw`mr-4 flex justify-center `}>
                    <TouchableOpacity
                      onPress={() => createTwoButtonAlert(user.email)}
                    >
                      <Ionicons size={30} name="trash" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <View style={tw`flex items-center mt-10`}>
          <Image source={{ uri: gifLoading }} style={tw`w-20 h-20 m-3`} />
        </View>
      )}
    </ScrollView>
  );
};

export default CardsUserAdmin;
