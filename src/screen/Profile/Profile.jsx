import { View, Text, ScrollView,Image } from 'react-native';
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import Usuario from '../../images/usuario.png';
import { getProId } from "../../redux/actions";
import JobList from '../../components/JobsList/JobList';
import RequestList from '../../components/RequestList/RequestList';


const Profile = () =>
{   
    const dispatch = useDispatch();
    const { professionalId } = useSelector((state) => state.professional);

    useEffect(() => {
        dispatch(getProId(5));
      
      }, [dispatch]);

    console.log(professionalId)

    return (

       <ScrollView >
         
            <View style={tw`flex items-center mx-2 my-1 p-0`}>
                 <Image style={tw` rounded-full w-50 h-50 border-2 border-indigo-500/100`} source={ professionalId.image} />
                 <Text style={tw`font-bold `}>{professionalId.fullName}</Text>
                 <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Correo Electronico: </Text>
                 <Text style={tw ` `}>{professionalId.email}</Text>
                </View>
                <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Telefono: </Text>
                 <Text style={tw ``}>{professionalId.phoneNumber}</Text>
                </View>
               <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Direccion: </Text>
                 <Text style={tw ` `}>{professionalId.address}</Text>
                </View> 
             </View>  
 

        <JobList/>
          
        <RequestList/>
        
         
        </ScrollView>



    )
}

export default Profile;