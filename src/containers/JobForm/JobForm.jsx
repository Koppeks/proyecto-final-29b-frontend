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
import { getoccupation } from "../../redux/actions/index"
import SpecialitiesDynamicForm from './SpecialitiesDynamicForm'
import tw from "twrnc";
import JobImageUpload from "./JobImageUpload"
import { postJob } from "../../redux/actions/index"
import alertPostJob from "../../components/Alerts/alertPostJob";

const calendarDateFormat = 'YYYY-MM-DD';
const dateFormat = 'DD-MM-YYYY';

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
        dispatch(getoccupation());
    }, []);

    const { Ocupacion } = useSelector((state) => state.Ocupacion);

    const jobUserInfo = {
        email: '',
        occupation: '',
        generalDescription: '',
        availableDays: {},
        images: null,
        specialities: [
            { title: '', description: '', cost: '' }
        ]
    };

    const confirmSubmit = async (values, { resetForm }) =>
    {
        const imageRemoteUri = await uploadImage(values.images);
        const availableDays = Object.keys(values.availableDays)
            .filter(date => values.availableDays[date].selected === true)
            .map(date => moment(date, calendarDateFormat).format(dateFormat));

        const data = { ...values, availableDays, images: [imageRemoteUri] };
        console.log(data);

        dispatch(postJob(data));
        resetForm();
    }

    return (
        <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
            <Text style={tw`text-center font-bold mb-3 w-full p-2 text-lg`}>Postea una profesión aquí </Text>
            <Formik
                initialValues={jobUserInfo}
                validationSchema={jobFormSchema}
                onSubmit={(values, formikActions) =>
                {
                    formikActions.setSubmitting(true);
                    alertPostJob(confirmSubmit, values, formikActions);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) =>
                {
                    const { email, occupation, generalDescription, availableDays, images } = values

                    return (
                        <>
                            <FormInput
                                value={email}
                                error={touched.email && errors.email}
                                placeholder="introduce tu correo electronico"
                                label="E-mail:"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur("email")}

                            />
                            <View style={tw`flex-row`}>

                                <Text style={tw`text-base mr-1 ml-2`}>Ocupación:</Text>
                                <SelectDropdown
                                    name='occupation'
                                    defaultButtonText={'Elegir'}
                                    buttonStyle={tw`bg-white ml-2 w-28 h-7 border-2 border-indigo-300 rounded`}
                                    dropdownStyle={tw`rounded w-34`}
                                    data={Ocupacion}
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
                                minDate={moment().add(1, 'days').format(calendarDateFormat)}
                                maxDate={moment().add(30, 'days').format(calendarDateFormat)}
                                onSelect={selectedDates => setFieldValue('availableDays', selectedDates)}
                            />

                            <JobImageUpload
                                label='Imagen:'
                                value={images}
                                onSelect={selectedImage => setFieldValue('images', selectedImage)}
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