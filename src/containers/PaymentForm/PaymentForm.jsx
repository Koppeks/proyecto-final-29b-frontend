import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Formik } from "formik";
import { basicSchema } from "../../schemas";
import FormInput from "../../components/FormInput/FormInput";
import FormSubmitButton from "../../components/button/FormSubmitButton";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/index";
import tw from "twrnc";
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from "react";

const PaymentForm = () => {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false)

  const userInfo = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
  };

  const handleConfirm = (handleSubmit) => {
    setShowAlert(false)
    setTimeout(()=> {
      handleSubmit()
    }, 600)
  }

  return (
    <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
      <Text style={tw`text-center w-full p-2 text-lg`}> Formulario de Pago </Text>
      <Formik
        initialValues={userInfo}
        validationSchema={basicSchema}
        onSubmit={(values, formikActions) => {
          const data = {
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            description: values.description,
          };

          dispatch(registerUser(data));
          formikActions.setSubmitting(false);
          formikActions.resetForm();

        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
        }) => {
          const {
            fullName,
            phoneNumber,
            email,
            password,
            confirmPassword,
            description,
          } = values;

          return (
            <View style={tw`flex justify-center items-center w-screen`}>
              <FormInput
                value={fullName}
                error={touched.fullName && errors.fullName}
                placeholder="Escribe tu nombre completo aquí"
                label="Nombre completo"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
              />
              <FormInput
                value={phoneNumber}
                error={touched.phoneNumber && errors.phoneNumber}
                placeholder="Escribe tu numero de telefono aquí"
                label="Teléfono"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                placeholder="Escribe tu email aquí"
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                placeholder="Escribe tu contraseña aquí"
                label="Contraseña"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <FormInput
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                placeholder="Escribe tu contraseña aquí"
                label="Repita su contraseña"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              <FormInput
                value={description}
                error={touched.description && errors.description}
                placeholder="Escribe tu descripción aquí"
                label="Descripción"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
              />
              <FormSubmitButton
                error={errors}
                submitting={isSubmitting}
                onPress={() => setShowAlert(true)}
                title="Compra"
              />
              <AwesomeAlert
                show={showAlert}
                showProgress={false}
                animatedValue= {0}
                titleStyle={tw`font-bold`}
                title="Confirma tus datos"
                message="¿Estás seguro de que tus datos están correctos?"
                cancelText="No"
                confirmText="Si, quiero comprar"
                confirmButtonColor="#6C77F6"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                onCancelPressed={() => setShowAlert(false)}
                onConfirmPressed={() => handleConfirm(handleSubmit)}
              />
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default PaymentForm;