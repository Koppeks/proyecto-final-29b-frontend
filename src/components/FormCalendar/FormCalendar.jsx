import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const FormCalendar = ({ label, minDate, maxDate, value, onSelect }) =>
{
    const [selectedDates, setSelectedDates] = useState(value);
    const onDaySelect = (day) =>
    {
        const selectedDay = day.dateString;
        let selected = value[selectedDay]?.selected ? false : true;
        const updatedDates = { ...selectedDates, ...{ [selectedDay]: { selected, selectedColor: '#6C62FF' } } };
        setSelectedDates(updatedDates);
        onSelect(updatedDates);
    };

    return (
        <View>
            <Text>{label}</Text>
            <Calendar
                minDate={minDate}
                maxDate={maxDate}
                onDayPress={onDaySelect}
                markedDates={selectedDates}
            />
        </View>
    );
}

export default FormCalendar;