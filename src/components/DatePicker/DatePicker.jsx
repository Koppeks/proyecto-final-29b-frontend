import React, { useState } from "react";
import { View } from "react-native";
import {Calendar} from "react-native-calendars"
import {LocaleConfig} from "react-native-calendars"

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ener.', 'Febr.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio.', 'Agos.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
}
LocaleConfig.defaultLocale = 'es';

const DatePicker = ({handleDate, label}) =>{

  const [dateValue, setDate] = useState("")

  return(
    <View>
      <Text>{label}</Text>
      <Calendar 
        initialDate={dateValue}
        minDate={'1960-01-01'}
        enableSwipeMonths={true}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        onDayPress={date => {
          setDate(date.dateString)
          const newDate = `${date.day}-${date.month}-${date.year}`
          handleDate(newDate)
        }}
        theme={{
          selectedDayBackgroundColor: '#6C77F6',
          selectedDayTextColor: '#f4f4f4',
          todayTextColor: '#00adf5',
        }}
      />
    </View>
  )
}

export default DatePicker