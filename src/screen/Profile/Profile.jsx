import { View, Text, ScrollView,Image } from 'react-native';
import tw from "twrnc";
import Usuario from '../../images/usuario.png';

const Profile = () =>
{
    return (


        <ScrollView >


            <View>   
            <View style={tw`flex items-center mx-2 my-1`}>
          <Image style={tw` rounded w-50 h-50`} source={Usuario} />
      
          <Text style={tw`font-bold mt-2`}>UserName</Text>
        </View>
            </View>
           

            

        </ScrollView>



    )
}

export default Profile;