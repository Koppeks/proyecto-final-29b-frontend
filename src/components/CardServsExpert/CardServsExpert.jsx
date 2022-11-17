import { View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import tw from "twrnc";
import { getProId } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CardServsExpert = ({ navigation, elem }) => {
   const dispatch = useDispatch();

   const onPressId = (e) => {
    dispatch(getProId(e));
   };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={tw` shadow-2xl bg-white rounded-md ml-2 mr-2 mt-4 flex-row items-center w-100`}
        onPress={() => {
          navigation.navigate("UserDetails", { name: "UserDetails" });
          onPressId(elem.id);
        }}
      >
        <View>
          <Image
            style={tw`h-28 w-28 m-6 mt-7 md:h-80 md:h-80 rounded-md`}
            source={{ uri: elem.image}}
          />
        </View>
        <View>
          <View style={tw`flex flex-row-reverse`}>
            {/* <Heart height={20} width={20} fill={'#9CA3AF'} /> */}
          </View>
          <View style={tw`justify-center mt-3`}>
            <Text style={tw` text-gray-500 mb-1`}>{elem.fullName}</Text>
            <Text style={tw` font-bold  text-black mb-1`}> {elem.email}  </Text>
            <Text style={tw`text-indigo-400  mb-1`}>{elem.description}</Text>

            <Text style={tw` text-black`}>
              {/* <Star height={17} width={17} fill={'#818CF8'} /> */}
             Rating: {elem.rating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      </ScrollView>

  );
};

export default CardServsExpert;
