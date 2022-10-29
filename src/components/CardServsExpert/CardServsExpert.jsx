import { View, Image, Text, TouchableOpacity } from 'react-native';
// import Star from '../../svg/star.svg';
// import Heart from '../../svg/heart.svg';
import image from '../../images/limpiezaPersona.png';
import tw from 'twrnc';
import {useState} from 'react'




const CardServsExpert = ({ navigation, elem}) =>
{
   
    const [id , setId] = useState('')

    const setLocalStorage= value =>{
        try{
            setId(value)
            window.localStorage.setItem('text', value)
    
        }catch(error){
          console.log(error)
        }
        console.log(value)
      }
   
    return (

        <>

        <TouchableOpacity style={tw`bg-white rounded-md mr-7 mt-2 flex-row items-center w-80`}
        
        onPress={() =>   
        { navigation.navigate("UserDetails", { name: "UserDetails"}) , 
        setLocalStorage(elem.id)
            console.log(elem.id)}    
        }
        >
            <View >
                <Image style={tw`h-28 w-28 m-6 mt-7 md:h-80 md:h-80 rounded-md`} source= {{uri:elem.image}} />
            </View>
            <View>
                <View style={tw`flex flex-row-reverse`}>
                    {/* <Heart height={20} width={20} fill={'#9CA3AF'} /> */}
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`font-sans text-gray-500 mb-1`}>{elem.name}</Text>
                    <Text style={tw`font-bold font-sans text-black mb-1`}>{elem.species}</Text>
                    <Text style={tw`text-indigo-400 font-sans mb-1`}>$8/hora</Text>

                    <Text style={tw`font-sans text-black`}>
                        {/* <Star height={17} width={17} fill={'#818CF8'} /> */}
                        4,7 
                    </Text>
                </View>
            </View>

        </TouchableOpacity></>

    )
}

export default CardServsExpert;