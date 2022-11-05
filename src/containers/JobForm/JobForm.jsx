import React, { useEffect } from "react"
import moment from "moment"
import { ScrollView, Text, View } from "react-native"
import { FieldArray, Formik } from "formik"
import { jobFormSchema } from "../../schemas/jobFormSchema"
import FormInput from "../../components/FormInput/FormInput"
import FormCalendar from "../../components/FormCalendar/FormCalendar"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux"
import { postJob, getCategories } from "../../redux/actions/index"
import SpecialitiesDynamicForm from './SpecialitiesDynamicForm'
import tw from "twrnc";

const dateFormat = 'YYYY-MM-DD';

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
        specialities: [
            { title: '', description: '', cost: '' }
        ]
    };

    return (
        <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
            <Text style={tw`text-center font-bold mb-3 w-full p-2 text-lg`}>Completa tu oferta de trabajo aquí </Text>
            <Formik
                initialValues={jobUserInfo}
                validationSchema={jobFormSchema}
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
                            <View style={tw`flex-row`}>
                                <Text style={tw`text-base mr-1 ml-2`}>Ocupación:</Text>
                                <SelectDropdown
                                    name='occupation'
                                    defaultButtonText={'Elegir'}
                                    buttonStyle={tw`bg-white ml-2 w-28 h-7 border-2 border-indigo-300 rounded`}
                                    dropdownStyle={tw`rounded w-34`}
                                    data={categories}
                                    buttonTextAfterSelection={selectedItem => selectedItem.name}
                                    rowTextForSelection={item => item.name}
                                    defaultValue={occupation}
                                    onSelect={selectedItem => setFieldValue('occupation', selectedItem.name)}
                                    onblur={() => setFieldTouched('occupation', true)}
                                />
                            </View>
                            <FormInput
                                value={generalDescription}
                                error={touched.generalDescription && errors.generalDescription}
                                placeholder="Comenta tu experiencia en el rubro"
                                label="Descripcion general:"
                                onChangeText={handleChange('generalDescription')}
                                onBlur={handleBlur("generalDescription")}

                            />
                            <FormCalendar
                                minDate={moment().add(1, 'days').format(dateFormat)}
                                maxDate={moment().add(30, 'days').format(dateFormat)}
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
                                label="imagen(es):"
                                onChangeText={handleChange('images')}
                                onBlur={handleBlur("images")}
                            />

                            <FieldArray
                                name="specialities"
                                component={SpecialitiesDynamicForm}
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