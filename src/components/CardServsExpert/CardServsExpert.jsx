import { View, Image, Text, TouchableOpacity } from 'react-native';
import Star from '../../svg/star.svg';
import Heart from '../../svg/heart.svg';
import image from '../../images/limpiezaPersona.png';
import tw from 'twrnc';

const CardServsExpert = () =>
{
    return (

        <TouchableOpacity style={tw`bg-white rounded-md mr-5 mt-2 px-2 flex-row items-center w-auto`}>
            <View >
                <Image style={tw`h-28 w-28 m-3 mt-5 mb-5 md:h-80 md:w-80 rounded-md`} source={image} />
            </View>
            <View>
                <View style={tw`flex flex-row-reverse`}>
                    <Heart height={20} width={20} fill={'#9CA3AF'} />
                </View>
                <View style={tw`mt-3 mr-2`}>
                    <Text style={tw`font-sans text-gray-500 mb-1`}>Tania Sanchez</Text>
                    <Text style={tw`font-bold font-sans text-black mb-1`}>Limpieza del hogar</Text>
                    <Text style={tw`text-indigo-400 font-sans mb-1`}>$8/hora</Text>

                    <Text style={tw`font-sans text-black`}>
                        <Star height={17} width={17} fill={'#818CF8'} />
                        4,7
                    </Text>
                </View>
            </View>

        </TouchableOpacity>

    )
}

export default CardServsExpert;