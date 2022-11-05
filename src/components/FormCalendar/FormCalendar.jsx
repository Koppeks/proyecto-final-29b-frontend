import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const FormCalendar = ({ label, minDate, maxDate, value, onSelect }) =>
{
    const onDaySelect = (day) =>
    {
        const selectedDay = day.dateString;
        let selected = value[selectedDay]?.selected ? false : true;
        onSelect({ ...value, ...{ [selectedDay]: { selected, selectedColor: '#6C62FF' } } });
    };

    return (
        <View>
            <Text>{label}</Text>
            <Calendar
                minDate={minDate}
                maxDate={maxDate}
                onDayPress={onDaySelect}
                markedDates={value}
            />
        </View>
    );
}

export default FormCalendar;