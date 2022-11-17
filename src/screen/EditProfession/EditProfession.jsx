import { ScrollView } from "react-native";
import React from "react";
import JobForm from "../../containers/JobForm/JobForm";

const EditProfession = ({ navigation }) =>
{
  return (
    <ScrollView>
      <JobForm />
    </ScrollView>
  );
};

export default EditProfession;
