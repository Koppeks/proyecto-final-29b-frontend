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
    const  {informationToken}  = useSelector((state) => state.informationToken);
    const  name= informationToken?.fullName
    useEffect(() => {
        dispatch(getProId(informationToken.id));
      
      }, [dispatch]);


    console.log(informationToken)

    return (

       <ScrollView >
         
            <View style={tw`flex items-center mx-2 my-1 p-0`}>
                 <Image style={tw` rounded-full w-25 h-25 border-2 border-indigo-500/100`} source={{uri: informationToken?.image}} />
                 <Text style={tw`font-bold  text-base`}>{name}</Text>
                 <Text style={tw`font-bold `}>{informationToken?.occupation}</Text>
                 <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Correo Electronico: </Text>
                 <Text style={tw ` `}>{informationToken?.email}</Text>
                </View>
                <View style={tw `flex-row `} >
                 <Text style={tw `font-bold `} > Telefono: </Text>
                 <Text style={tw ``}>{informationToken?.phoneNumber}</Text>
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