import React, { useEffect } from "react"
import moment from "moment"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ScrollView, Text, View } from "react-native"
import { FieldArray, Formik } from "formik"
import { jobFormSchema } from "../../schemas/jobFormSchema"
import FormInput from "../../components/FormInput/FormInput"
import FormCalendar from "../../components/FormCalendar/FormCalendar"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import SelectDropdown from "react-native-select-dropdown";
import { firebase } from "../../../config";
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../redux/actions/index"
import SpecialitiesDynamicForm from './SpecialitiesDynamicForm'
import tw from "twrnc";
import JobImageUpload from "./JobImageUpload"

const dateFormat = 'YYYY-MM-DD';

const JobForm = () =>
{
    const uploadImage = async (image) =>
    {
        const response = await fetch(image);
        const blob = await response.blob();
        try
        {
            var ref = firebase.storage().ref().child("job/" + uuidv4());
            return await ref.put(blob).then(snapshot => snapshot.ref.getDownloadURL());
        } catch (error)
        {
            console.log(error);
            return null;
        }
    };

    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getCategories());
    }, [dispatch]);

    const { categories } = useSelector((state) => state.categories);

    const jobUserInfo = {
        occupation: '',
        generalDescription: '',
        availableDays: {},
        image: null,
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
                onSubmit={async (values, formikActions) =>
                {
                    const imageRemoteUri = await uploadImage(values.image);
                    const availableDays = Object.keys(values.availableDays).filter(date => values.availableDays[date].selected === true);
                    const data = { ...values, availableDays, image: imageRemoteUri };
                    console.log(data);

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
                    const { occupation, generalDescription, availableDays, image } = values

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
                                label="Dias disponibles"
                                value={availableDays}
                                minDate={moment().add(1, 'days').format(dateFormat)}
                                maxDate={moment().add(30, 'days').format(dateFormat)}
                                onSelect={selectedDates => setFieldValue('availableDays', selectedDates)}
                            />

                            <JobImageUpload
                                label='Imagen:'
                                value={image}
                                onSelect={selectedImage => setFieldValue('image', selectedImage)}
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