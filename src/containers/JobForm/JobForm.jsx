import React, { useEffect } from "react"
import moment from "moment"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ScrollView, Text, View } from "react-native"
import { Formik } from "formik"
import { jobFormSchema } from "../../schemas/jobFormSchema"
import FormInput from "../../components/FormInput/FormInput"
import FormCalendar from "../../components/FormCalendar/FormCalendar"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import SelectDropdown from "react-native-select-dropdown";
import { firebase } from "../../../config";
import { useDispatch, useSelector } from "react-redux"
import { getoccupation } from "../../redux/actions/index"
import tw from "twrnc";
import JobImageUpload from "./JobImageUpload"
import { postJob } from "../../redux/actions/index"
import alertPostJob from "../../components/Alerts/alertPostJob";

const calendarDateFormat = 'YYYY-MM-DD';
const dateFormat = 'DD-MM-YYYY';

const JobForm = () =>
{
    const uploadImage = async (picture) =>
    {
        const response = await fetch(picture);
        const blob = await response.blob();
        try
        {
            var ref = firebase.storage().ref().child("job/" + uuidv4());
            return await ref.put(blob).then(snapshot => snapshot.ref.getDownloadURL());
        } catch (error)
        {
            throw error;
        }
    };

    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getoccupation());
    }, []);

    const { Ocupacion } = useSelector((state) => state.Ocupacion);

    const jobUserInfo = {
        categoryId: '',
        description: '',
        availableDays: {},
        pictures: [],
        name: '',
        pricing: ''
    };

    const confirmSubmit = async (values, { resetForm }) =>
    {
        const pictures = await Promise
            .all(values.pictures.map(async picture => await uploadImage(picture)))
            .catch(err => console.log(err));

        const availableDays = Object.keys(values.availableDays)
            .filter(date => values.availableDays[date].selected === true)
            .map(date => moment(date, calendarDateFormat).format(dateFormat));

        // El userId debe venir del usuario logueado, ahora esta hardcodeado
        const data = { ...values, pricing: Number(values.pricing), availableDays, pictures, userId: 3 };
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
                    const { description, availableDays, pictures, name, pricing } = values

                    return (
                        <>

                            <View style={tw`flex-row`}>

                                <Text style={tw`text-base mr-1 ml-2`}>Ocupación:</Text>
                                <SelectDropdown
                                    name='categoryId'
                                    defaultButtonText={'Elegir'}
                                    buttonStyle={tw`bg-white ml-2 w-28 h-7 border-2 border-indigo-300 rounded`}
                                    dropdownStyle={tw`rounded w-34`}
                                    data={Ocupacion}
                                    buttonTextAfterSelection={selectedItem => selectedItem.name}
                                    rowTextForSelection={item => item.name}
                                    onSelect={selectedItem => setFieldValue('categoryId', selectedItem.id)}
                                    onblur={() => setFieldTouched('categoryId', true)}
                                />
                            </View>
                            <FormInput
                                value={name}
                                error={touched.name && errors.name}
                                placeholder="Resumen de especialidad"
                                label="Título:"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                            />
                            <FormInput
                                value={description}
                                error={touched.description && errors.description}
                                placeholder="Comenta tu experiencia en el rubro"
                                label="Descripcion general:"
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur("description")}

                            />
                            <FormCalendar
                                label="Dias disponibles"
                                value={availableDays}
                                minDate={moment().add(1, 'days').format(calendarDateFormat)}
                                maxDate={moment().add(7, 'days').format(calendarDateFormat)}
                                onSelect={selectedDates => setFieldValue('availableDays', selectedDates)}
                            />

                            <FormInput

                                value={pricing}
                                error={touched.pricing && errors.pricing}
                                placeholder="precio"
                                label="costo/h:"
                                onChangeText={handleChange('pricing')}
                                onBlur={handleBlur('pricing')}
                            />

                            <JobImageUpload
                                label='Imagen:'
                                value={pictures}
                                onSelect={pictures => setFieldValue('pictures', pictures)}
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