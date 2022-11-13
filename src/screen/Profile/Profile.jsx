import { View, Text, ScrollView,Image } from 'react-native';
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import Usuario from '../../images/usuario.png';
import { getProId } from "../../redux/actions";


const Profile = () =>
{   
    const dispatch = useDispatch();
    const { professionalId } = useSelector((state) => state.professional);

    useEffect(() => {
        dispatch(getProId(3));
      
      }, [dispatch]);

    console.log(professionalId)

    return (


        <ScrollView >



            <View>   
            <View style={tw`flex items-center mx-2 my-1`}>
          <Image style={tw` rounded-full w-50 h-50`} source={ professionalId.image} />
      
          <Text style={tw`font-bold mt-2`}>{professionalId.fullName}</Text>
          <Text> Correo Electronico: {professionalId.email}</Text>
          <Text> Telefono: {professionalId.phoneNumber}</Text>
          <Text> </Text>
        </View>

        <View>

            
        </View>


        
            </View>
           

            

        </ScrollView>



    )
}

export default Profile;