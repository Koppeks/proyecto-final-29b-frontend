import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const FilterAdmin = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const handleRating = (e) => {
    dispatch(byRating(e));
  };
  const handlePrice = (e) => {
    dispatch(byPrice(e));
  };

  return (
    <View>
      <Text>FilterAdmin</Text>
    </View>
  );
};

export default FilterAdmin;
