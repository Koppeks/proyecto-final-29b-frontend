import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getCategories } from "../../redux/actions/index";
import { getCategoriesLocal } from "../../redux/actions/index";
// import { byCategories } from "../../redux/reducers/categoriesSlice";
// import { ScrollView } from "react-native";
// import { Buttons } from "../button/Buttons";
// import electricista from "../../images/electricista.png";
// import todos from "../../images/todos.png";
// import albanil from "../../images/albanil.png";
// import medicina from "../../images/medicina.png";
// import abogado from "../../images/abogado.png";
// import limpieza from "../../images/limpieza.png";
// import tw from "twrnc";
// import category from "../../Hooks/categories";

const categ = category();
console.log(categ);

export default function CategoryItems() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [filtCateg, setFiltCateg] = useState([]);
  console.log(filtCateg);

  useEffect(() => {
    //dispatch(getCategories());
    dispatch(getCategoriesLocal());
  }, [dispatch]);

  const handleFilter = (e) => {
    dispatch(byCategories(e));
    setFiltCateg(categories);
  };

  return (
    <View>
      <FlatList
        data={categ}
        horizontal={"true"}
        renderItem={({ item }) => (
          <>
            <View
              style={tw`flex justify-items-center items-center m-2 mt-4 mb-4 bg-gray-500`}
            >
              <Image style={tw`w-5 h-5 p-7 mb-2 mt-2`} source={item.img} />
              <TouchableOpacity
                disabled={filtCateg.length < 1 ? false : true}
                style={tw`bg-cyan-300`}
                onPress={() => handleFilter(item.name)}
              >
                <Text style={tw`text-black font-bold mx-1 `}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      />
      <View>
        {filtCateg.length > 0 ? (
          <FlatList
            data={categories}
            horizontal={"true"}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  style={tw`bg-white rounded-md mr-5 mt-2 px-2 flex-row items-center w-auto`}
                >
                  <View>
                    <Image
                      style={tw`h-18 w-18 m-3 mt-5 mb-5 md:h-80 md:w-80 rounded-md`}
                      source={item.image}
                    />
                  </View>
                  <View>
                    <View style={tw`flex flex-row-reverse`}>
                      {/* <Heart height={20} width={20} fill={"#9CA3AF"} /> */}
                    </View>
                    <View style={tw`mt-3 mr-2`}>
                      <Text style={tw`font-sans text-gray-500 mb-1`}>
                        {item.fullName}
                      </Text>
                      <Text style={tw`font-bold font-sans text-black mb-1`}>
                        {item.occupation}
                      </Text>
                      <Text style={tw`text-indigo-400 font-sans mb-1`}>
                        {item.price}
                      </Text>

                      <Text style={tw`font-sans text-black`}>
                        {/* <Star height={17} width={17} fill={"#818CF8"} /> */}
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        ) : (
          <Text>{"No hay filtros"}</Text>
        )}
      </View>
    </View>
  );
}
//
