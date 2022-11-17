import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from "../CardServsExpert/CardServsExpert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPro } from "../../redux/actions/index";
import { Image } from "react-native";

const Featured = ({ navigation }) => {
  const dispatch = useDispatch();

  const { professional } = useSelector((state) => state.professional);

  const gifLoading =
    "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"


   useEffect(() => {
   dispatch(getPro());
   }, [dispatch]);

  return (
    <>
      <View>
        <Text style={tw`mt-5 text-lg font-bold`}>Destacados</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


     
           {professional.length > 0 ? (
           professional.map((elem, i) => {
              return (
                <CardServsExpert key={i} navigation={navigation} elem={elem} />
              );
            })
          ) : (
            <Image source={{ uri: gifLoading }} style={tw`mr-40 w-20 h-20 `} />
          )} 
        </ScrollView>
      </View>
    </>
  );
};

export default Featured;
