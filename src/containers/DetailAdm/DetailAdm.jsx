import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProId, deleteProEmail, getPro } from "../../redux/actions/index";
import { clear, deleteProf } from "../../redux/reducers/profetionalSlice";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const DetailAdm = (id) => {
  const dispatch = useDispatch();
  const { professionalId } = useSelector((state) => state.professionalId);
  const [loading, setLoading] = useState(false);

  const gifLoading =
    "https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-barra-de-progresso-24.gif";

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProId(id.route.params.id));
    dispatch(deleteProf());
    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  const handleLoadDel = (email) => {
    setLoading(true);
    setTimeout(() => {
      handleDelete(email);
    }, 6000);
  };

  const handleDelete = async (email) => {
    navigation.navigate("HomeAdm");
    dispatch(deleteProEmail(email))
      .then((res) => res)
      .cath((e) => console.log(e));
    setLoading(false);
    dispatch(getPro());
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
        onPress: () => handleLoadDel(email),
      },
    ]);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate("EditUser", {
        email: professionalId.email,
      });
      setLoading(false);
    }, 6000);
  };

  const alertEdit = () =>
    Alert.alert("Editar Usuario", "Desea editar el usuario?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelar Proceso"),
        style: "cancel",
      },
      {
        text: "Editar",
        onPress: () => handleLoad(),
      },
    ]);

  return (
    <View>
      <View style={tw`flex items-center`}>
        <View style={tw`flex-row m-3 items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeAdm")}>
            <AntDesign name="caretleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`pl-5 text-lg`}>Detalles de Usario</Text>
        </View>
        <View style={tw`flex-row`}>
          {loading === false ? (
            <TouchableOpacity
              onPress={() => alertEdit()}
              style={tw`flex-row m-3 items-center`}
            >
              <Text style={tw`p-1 text-lg`}>Editar</Text>
              <Ionicons style={tw`pl-2`} size={24} name="create" />
            </TouchableOpacity>
          ) : (
            <View style={tw`flex items-center mt-10`}>
              <Image source={{ uri: gifLoading }} style={tw`w-25 h-15 m-3`} />
            </View>
          )}

          {loading === false ? (
            <TouchableOpacity
              onPress={() => createTwoButtonAlert(professionalId.email)}
              style={tw`flex-row m-3 items-center`}
            >
              <Text style={tw`p-1 text-lg`}>Eliminar</Text>
              <Ionicons style={tw`pl-2`} size={24} name="trash" />
            </TouchableOpacity>
          ) : (
            <View style={tw`flex items-center mt-10`}>
              <Image source={{ uri: gifLoading }} style={tw`w-25 h-15 m-3`} />
            </View>
          )}
        </View>
      </View>
      <View style={tw`flex-row m-2 border-4 border-indigo-500/50 rounded-lg`}>
        <View>
          <Image
            style={tw`w-20 h-20 m-2 border-2 border-indigo-500/50 rounded-full `}
            source={{ uri: professionalId.image }}
          />
        </View>
        <View style={tw`m-2 flex-1 justify-center `}>
          <Text style={tw`p-1 text-lg`}>{professionalId.fullName}</Text>
          <Text style={tw`p-1 text-lg`}>
            {professionalId.isProfessional === true ? (
              <Text>Profesional</Text>
            ) : (
              <Text>Cliente</Text>
            )}
          </Text>
        </View>
      </View>
      <ScrollView style={tw`h-56 m-2  border-black rounded-lg`}>
        <View style={tw``}>
          <Text style={tw`pl-1 text-lg`}>Email</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>{professionalId.email}</Text>
          <Text style={tw`pl-1 text-lg`}>Numero Telefonico</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>
            {professionalId.phoneNumber}
          </Text>
          <Text style={tw`pl-1 text-lg`}>Direccion</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>
            {professionalId.address}
          </Text>
          <Text style={tw`pl-1 text-lg`}>Cumpleaños</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>
            {professionalId.birthday}
          </Text>
          <Text style={tw`pl-1 text-lg`}>Ocupaciones</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>
            {professionalId.occupation}
          </Text>
          <Text style={tw`pl-1 text-lg`}>Descripcion</Text>
          <Text style={tw`p-1 text-lg border-b-2`}>
            {professionalId.description}
          </Text>
        </View>
      </ScrollView>
      <View style={tw`flex items-center`}>
        <AntDesign name="downcircleo" size={24} color="black" />
      </View>
    </View>
  );
};

export default DetailAdm;
