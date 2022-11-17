import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { byRating, byPrice } from "../../redux/reducers/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import { getCategories} from "../../redux/actions/index";
import image from '../../images/stars.png';

export default function SelectFilter()
{
  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.categories);
  
  // const handleRating = (e) =>
  // {
  //   dispatch(byRating(e));
  // };
  const handlePrice = (e) =>
  {
    dispatch(byPrice(e));
  };

  // const rating = ["MaxRating", "MinRating"];
  const price = ["MaxPrecio", "MinPrecio"];

  return (
    <View style={tw`flex-row mt-5 ml-2 z-50`}>

      {/* <View style={tw`flex-row`}>
        <Text style={tw`font-bold text-base`}>Rating</Text>
        <Image style={tw`w-5 h-5 ml-1 `} source={image} />
        <SelectDropdown
          defaultButtonText={'Elegir'}
          buttonStyle={tw`bg-white ml-2 w-28 h-8 border-2 border-indigo-300 rounded`}
          dropdownStyle={tw` h-14 w-32 border-8 border-gray-200 rounded`}  
          data={rating}
          onSelect={(selectedItem) =>
          {
            handleRating(selectedItem);
          }}
        />
      </View> */}

      <View style={tw`flex-row ml-3`}>
        <Text style={tw`font-bold text-base`}>Precio h/</Text>
        <SelectDropdown
          defaultButtonText={'Elegir'}
          buttonStyle={tw`bg-white ml-2 w-28 h-8 border-2 border-indigo-300 rounded`}
          dropdownStyle={tw` h-14 w-32 border-8 border-gray-200 rounded`}
          data={price}
          onSelect={(selectedItem) =>
          {
            handlePrice(selectedItem);
          }}
        />
      </View>
    </View>
  );
}
