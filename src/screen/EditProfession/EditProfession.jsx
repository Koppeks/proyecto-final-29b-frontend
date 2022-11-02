import { ScrollView, Text, Button } from "react-native";
import React from "react";
import ProForm from "../../containers/ProForm/ProForm"

const EditProfession = ({navigation}) => {
  return (
    <ScrollView>
      <Button 
        title="Vuelve al inicio"
        onPress={()=> navigation.goBack()}
        />
      <ProForm/>
    </ScrollView>
  );
};

export default EditProfession;
