import React from "react";
import { ScrollView, Text, View } from "react-native"
import { Formik } from "formik"
import FormInput from "../../components/FormInput/FormInput"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import SelectDropdown from "react-native-select-dropdown";
import { postDispute } from "../../redux/actions";
import tw from "twrnc";

const DisputForm = () =>
{
    const disputeTypes = [
        {
            id: 1,
            name: 'No se presento'
        },
        {
            id: 2,
            name: 'No termino el trabajo'
        },
        {
            id: 3,
            name: 'Hizo mal el trabajo'
        },
        {
            id: 4,
            name: 'Tuvo un mal comportamiento'
        }
    ];

    const dispute = {
        disputeType: '',
        description: ''
    }

    return (
        <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
            <Text style={tw`text-center font-bold mb-3 w-full p-2 text-lg`}>Formulario de disputa</Text>
            <Formik
                initialValues={dispute}
                onSubmit={async (values, formikActions) =>
                {
                    await postDispute(values);
                    // formikActions.setSubmitting(true);
                    // alertPostJob(confirmSubmit, values, formikActions);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) =>
                {
                    const { description } = values

                    return (
                        <>

                            <View style={tw`flex-row`}>

                                <Text style={tw`text-base mr-1 ml-2`}>Qué ocurrió?:</Text>
                                <SelectDropdown
                                    name='disputeType'
                                    defaultButtonText={'Elegir'}
                                    buttonStyle={tw`bg-white ml-2 w-28 h-7 border-2 border-indigo-300 rounded`}
                                    dropdownStyle={tw`rounded w-34`}
                                    data={disputeTypes}
                                    buttonTextAfterSelection={selectedItem => selectedItem.name}
                                    rowTextForSelection={item => item.name}
                                    onSelect={selectedItem => setFieldValue('disputeType', selectedItem.id)}
                                    onblur={() => setFieldTouched('disputeType', true)}
                                />
                            </View>
                            <FormInput
                                value={description}
                                error={touched.description && errors.description}
                                placeholder="Comenta que paso exactamente"
                                label="Descripcion del problema:"
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur("description")}

                            />

                            <FormSubmitButton error={errors} submitting={isSubmitting} onPress={handleSubmit} title="Enviar" />

                        </>
                    )
                }}
            </Formik>
        </ScrollView>
    )
}

export default DisputForm;