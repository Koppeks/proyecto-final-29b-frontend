import { View } from "react-native";
import React from "react";
import tw from "twrnc";
import { byRating, byPrice } from "../../redux/reducers/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";

export default function SelectFilter() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const handleRating = (e) => {
    dispatch(byRating(e));
  };
  const handlePrice = (e) => {
    dispatch(byPrice(e));
  };

  const rating = ["MaxRating", "MinRating"];
  const price = ["MaxPrecio", "MinPrecio"];

  return (
    <View style={tw`z-40 flex-row mt-3`}>
      <View>
        <SelectDropdown
          disabled={categories.length < 10 ? false : true}
          data={rating}
          onSelect={(selectedItem) => {
            handleRating(selectedItem);
          }}
        />
      </View>
      <View>
        <SelectDropdown
          disabled={categories.length < 10 ? false : true}
          data={price}
          onSelect={(selectedItem) => {
            handlePrice(selectedItem);
          }}
        />
      </View>
    </View>
  );
}
