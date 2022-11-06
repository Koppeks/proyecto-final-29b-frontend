import React from "react";
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { View, Text } from "react-native";

const DatePicker = (props) =>{
  const { label, name, value, dateFormat, setFieldValue } = props
  return(
    <View>
      <Text>{label}</Text>
      <DateView id={name} selected={value} dateFormat={dateFormat} onChange={val => setFieldValue(name, val)}/>
    </View>
  )
}

export default DatePicker