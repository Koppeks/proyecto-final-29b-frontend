import { View, Image, Text } from 'react-native';
import image from './images/gasfitero.jpg';
import tw from '../lib/tailwind';

const CardServsExpert = () =>
{
    return (
        <View style={tw`flex h-full items-center  bg-gray-100`}>
            <View >
                <Image style={tw`h-56 w-56 m-6 md:h-80 md:h-80 rounded-md`} source={image} />
            </View>
            <View>
                <Text style={tw`font-sans text-gray-400`}> Tania Sanchez</Text>
                <Text style={tw`font-sans text-black`}>Limpieza del hogar</Text>
                <Text style={tw`font-sans text-black`}>$8/hora</Text>
                <Text style={tw`font-sans text-black`}>4,7</Text>
            </View>

        </View>

    )
}

export default CardServsExpert;