import { ScrollView, Text } from 'react-native'
import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import tw from "twrnc";
import EditPerfil from "../../containers/RegisterForm/EditPerfil"

export default function EditProfile() {

    const  {informationToken}  = useSelector((state) => state.informationToken);
    const  id= informationToken?.id
        console.log(id)
  return (
    <ScrollView style={tw`h-screen`}>
     
      <EditPerfil id={id}/>

    </ScrollView>
  )
}