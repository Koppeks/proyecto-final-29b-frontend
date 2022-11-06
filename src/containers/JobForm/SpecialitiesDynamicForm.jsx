import React from 'react';
import { Button, View, Text } from 'react-native';
import FormInput from '../../components/FormInput/FormInput';
import tw from "twrnc";

const SpecialitiesDynamicForm = ({
    push, remove, form
}) =>
{
    const { values, touched, errors, handleChange, handleBlur } = form;
    const { specialities } = values;

    return (
        <View>
            {specialities.length > 0 &&
                specialities.map((_, index) => (
                    <View key={`speciality${index}`}>
                        <Text>Especialidad {index}</Text>
                        <FormInput
                            value={specialities[index].title}
                            error={touched.specialities && touched.specialities[index]?.title && errors.specialities && errors.specialities[index]?.title}
                            placeholder="Resumen de especialidad"
                            label="Título:"
                            onChangeText={handleChange(`specialities.${index}.title`)}
                            onBlur={handleBlur(`specialities.${index}.title`)}
                        />
                        <FormInput
                            value={specialities[index].description}
                            error={touched.specialities && touched.specialities[index]?.description && errors.specialities && errors.specialities[index]?.description}
                            placeholder="Descripción de la especialidad"
                            label="Descripción:"
                            onChangeText={handleChange(`specialities.${index}.description`)}
                            onBlur={handleBlur(`specialities.${index}.description`)}
                        />
                        <FormInput
                            value={specialities[index].cost}
                            error={touched.specialities && touched.specialities[index]?.cost && errors.specialities && errors.specialities[index]?.cost}
                            placeholder="precio"
                            label="Costo/hora:"
                            onChangeText={handleChange(`specialities.${index}.cost`)}
                            onBlur={handleBlur(`specialities.${index}.cost`)}
                        />
                        <Button
                            title="X"
                            onPress={() => remove(index)}
                        />
                    </View>
                ))}
            {typeof errors.specialities === 'string' ? <Text style={tw`mr-2 text-red-600`}>{errors.specialities}</Text> : null}
            <Button
                title="Agregar especialidad"
                onPress={() =>
                {
                    if (specialities.length < 5)
                        push({ title: '', description: '', cost: '' });
                }}
            />

        </View>
    );
};

export default SpecialitiesDynamicForm;