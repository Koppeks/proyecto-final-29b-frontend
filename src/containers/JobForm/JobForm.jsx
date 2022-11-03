import React, { useEffect } from "react"
import { ScrollView, Text } from "react-native"
import { Formik } from "formik"
import { basicSchema } from "../../schemas"
import FormInput from "../../components/FormInput/FormInput"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux"
import { postJob, getCategories } from "../../redux/actions/index"

import tw from "twrnc"

const JobForm = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getCategories());
    }, [dispatch]);

    const { categories } = useSelector((state) => state.categories);

    const jobUserInfo = {
        occupation: '',
        generalDescription: '',
        availableDays: [],
        images: [],
        specialities: []
    };

    return (
        <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
            <Text style={tw`text-center w-full p-2 text-lg`}>Completa tu oferta de trabajo aqui </Text>
            <Formik
                initialValues={jobUserInfo}
                onSubmit={(values, formikActions) =>
                {
                    console.log(values);
                    // const data = {
                    //     occupation: values.occupation,
                    //     generalDescription: values.generalDescription,
                    //     availableDays: values.availableDays,
                    //     images: values.images,
                    //     specialities: values.specialities
                    // }

                    // dispatch(postJob(data));

                    // setTimeout(() =>
                    // {
                    //     formikActions.resetForm()
                    //     formikActions.setSubmitting(false)
                    // }, 3000);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) =>
                {
                    const { occupation, generalDescription, availableDays, images, specialities } = values

                    return (
                        <>
                            <SelectDropdown
                                name='occupation'
                                defaultButtonText={'Elegir'}
                                buttonStyle={tw`bg-white ml-2 w-28 h-8 border-2 border-indigo-300 rounded`}
                                dropdownStyle={tw`rounded`}
                                data={categories}
                                buttonTextAfterSelection={selectedItem => selectedItem.name}
                                rowTextForSelection={item => item.name}
                                defaultValue={occupation}
                                onSelect={selectedItem => setFieldValue('occupation', selectedItem.name)}
                                onblur={() => setFieldTouched('occupation', true)}
                            />
                            <FormInput
                                value={generalDescription}
                                error={touched.generalDescription && errors.generalDescription}
                                placeholder="Comenta tu experiencia en el rubro"
                                label="Descripcion general:"
                                onChangeText={handleChange('generalDescription')}
                                onBlur={handleBlur("generalDescription")}

                            />
                            {/* <FormInput
                                value={availableDays}
                                error={touched.availableDays && errors.availableDays}
                                placeholder="DD/MM"
                                label="Dias disponibles (calendario)"
                                onChangeText={handleChange('availableDays')}
                                onBlur={handleBlur("availableDays")}
                            /> */}

                            <FormInput
                                value={images}
                                error={touched.images && errors.images}
                                placeholder="png o jpg"
                                label="images"
                                onChangeText={handleChange('images')}
                                onBlur={handleBlur("images")}
                            />


                            <FormSubmitButton error={errors} submitting={isSubmitting} onPress={handleSubmit} title="Enviar" />
                        </>
                    )
                }}
            </Formik>
        </ScrollView>
    )
}

export default JobForm;