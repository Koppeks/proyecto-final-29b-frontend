import { View, Image, Text } from 'react-native';
import image from '../../images/gasfitero.jpg';
import tw from '../../lib/tailwind';

const DetailServiceExpert = () =>
{
    return (
        <View style={tw`flex h-full items-center  bg-gray-100`}>
            <View >
                <Image style={tw`h-56 w-56 m-6 md:h-80 md:h-80 rounded-md`} source={image} />
            </View>
            <Text style={tw`font-sans text-cyan-700`}>About Me</Text>
        </View>

    )
}

export default DetailServiceExpert;