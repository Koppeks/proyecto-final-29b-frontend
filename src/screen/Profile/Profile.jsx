import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native';
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import Usuario from '../../images/usuario.png';
import { getProPerfil } from "../../redux/actions";
import JobList from '../../components/JobsList/JobList';
import RequestList from '../../components/RequestList/RequestList';


const Profile = ({navigation}) =>
{   
    const dispatch = useDispatch();
    const { professionalPerfil } = useSelector((state) => state.professional);
    const  {informationToken}  = useSelector((state) => state.informationToken);
    const  name= informationToken?.fullName
    useEffect(() => {
        dispatch(getProPerfil(informationToken.id));
      
      }, [dispatch]);


    console.log(professionalPerfil)

    return (

       <ScrollView >
         
            <View style={tw`flex items-center mx-2 my-1 p-0`}>
                 <Image style={tw` rounded-full w-25 h-25 border-2 border-indigo-500/100`} source={{uri: professionalPerfil.image}} />
                 <Text style={tw`font-bold  text-base`}>{professionalPerfil.fullName}</Text>
                 <Text style={tw`font-bold `}>{professionalPerfil?.occupation}</Text>
                 <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Correo Electronico: </Text>
                 <Text style={tw ` `}>{professionalPerfil?.email}</Text>
                </View>
                <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Telefono: </Text>
                 <Text style={tw ``}>{professionalPerfil?.phoneNumber}</Text>
                </View>
               <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Direccion: </Text>
                 <Text style={tw ` `}>{professionalPerfil.address}</Text>
                </View> 
             </View>  
 

        <JobList/>
          
        <RequestList/>

          
        <TouchableOpacity style={tw`flex flex-row align-center justify-items-center bg-blue-300 w-25 p-2 m-2 `}
                             onPress={() =>{ navigation.navigate("Editar Pefil")}}>
                  <Text>Editar Perfil</Text>
               
                </TouchableOpacity>
        
       
         
        </ScrollView>



    )
}

export default Profile;