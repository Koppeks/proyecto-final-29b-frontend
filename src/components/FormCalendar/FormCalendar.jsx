import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

const FormCalendar = ({ minDate, maxDate }) =>
{
    const [selectedDates, setSelectedDates] = useState({});

    const onDaySelect = (day) =>
    {
        const selectedDay = day.dateString;
        let selected = selectedDates[selectedDay]?.selected ? false : true;
        setSelectedDates({ ...selectedDates, ...{ [selectedDay]: { selected, selectedColor: '#6C62FF' } } });
    };

    return (
        <View>
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