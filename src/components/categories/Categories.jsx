import { View, Text, ScrollView, Image } from "react-native";
import React ,  {useEffect} from "react";
import tw from "twrnc";
import {useDispatch,useSelector} from 'react-redux'
import { getCat } from '../../redux/actions'
// import Jarden from '../../svg/jarden.svg';
// import Pets from '../../svg/pets.svg';
// import Electrico from '../../svg/electric.svg';
// import Clean from '../../svg/clean.svg';
// import Plumber from '../../svg/plumber.svg';
// import Trainer from '../../svg/trainer.svg';
// import Law from '../../svg/law.svg';
// import Baby from '../../svg/babySister.svg';
// import Beauty from '../../svg/beauty.svg';
import Jarden from '../../images/jarden.png';
import Pets from '../../images/pet.png';
import Electrico from '../../images/electric.png';
import Clean from '../../images/bucket.png';
import Plumber from '../../images/plumber.png';
import Trainer from '../../images/trainer.png';
import Law from '../../images/law.png';
import Baby from '../../images/baby.png';
import Beauty from '../../images/beauty.png';

const Categories = () =>
{

  const dispatch = useDispatch()

  const{Ocupacion}=useSelector(state=>state.Ocupacion)
  useEffect(()=>{
    dispatch(getCat())
   
},[])

console.log(Ocupacion)



  return (
    <View>
      <Text style={tw`p-1 mt-5 font-bold text-lg`}>Categorías</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={tw`flex items-center mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Jarden} />
          {/* <Jarden style={tw`bg-white `} height={70} width={70} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Jardineria</Text>
        </View>


        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Pets} />
          {/* <Pets style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Mascotas</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Electrico} />
          {/* <Electrico style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Electrico</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Clean} />
          {/* <Clean style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Limpieza</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Plumber} />
          {/* <Plumber style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Gasfitería</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Baby} />
          {/* <Baby style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Niñera</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Beauty} />
          {/* <Beauty style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Belleza</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Trainer} />
          {/* <Trainer style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Entrenador</Text>
        </View>

        <View style={tw`flex items-center  mx-2 my-1`}>
          <Image style={tw`bg-white rounded w-14 h-14`} source={Law} />
          {/* <Law style={tw`bg-white`} height={70} width={60} fill={'#000000'} /> */}
          <Text style={tw`font-bold mt-2`}>Legal</Text>
        </View>


      </ScrollView>
    </View>
  );
};

export default Categories;

