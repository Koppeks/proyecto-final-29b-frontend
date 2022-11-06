import React from "react"
import { ScrollView, Text } from "react-native"
import { Formik } from "formik"
import {basicSchema} from "../../schemas"
import FormInput from "../../components/FormInput/FormInput"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import { useDispatch } from "react-redux"
import { postPro } from "../../redux/actions/index"
import tw from "twrnc"
import DatePicker from "../../components/DatePicker/DatePicker"


const RegisterForm = () =>{

  const dispatch = useDispatch()

  const userInfo = { 
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      description: '',
      birthday: '',
      image:'',
      address: '',
  }

  return(
    <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
      <Text style={tw`text-center w-full p-2 text-lg`}>Formulario de registro</Text>
      <Formik
        initialValues={userInfo}
        validationSchema= {basicSchema}
        onSubmit={(values, formikActions)=>{

          const data ={
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            description: values.description,
            birthday: values.birthday,
            image: values.image,
            address: values.address,
          }

          dispatch(postPro(data))
          console.log(data)
          setTimeout(() => {
            formikActions.resetForm()
            formikActions.setSubmitting(false)
          }, 3000);
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) =>{
          
          const {
            fullName, 
            phoneNumber, 
            email, 
            password, 
            confirmPassword, 
            birthday, 
            description,
            image, 
            address} = values

          return(
            <>
              <FormInput 
                value={fullName}
                error={touched.fullName && errors.fullName}
                placeholder="Escribe tu nombre completo aquí"
                label="Nombre completo"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur("fullName")}
              />
              <FormInput 
                value={phoneNumber}
                error={touched.phoneNumber && errors.phoneNumber}
                placeholder="Escribe tu numero de telefono aquí"
                label="Teléfono"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur("phoneNumber")}
              />
              <FormInput 
                value={email}
                error={touched.email && errors.email}
                placeholder="Escribe tu email aquí"
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur("email")}
              />
              <FormInput 
                value={password}
                error={touched.password && errors.password}
                placeholder="Escribe tu contraseña aquí"
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur("password")}
              />
              <FormInput 
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                placeholder="Escribe tu contraseña aquí"
                label="Repita su contraseña"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur("confirmPassword")}
              />
              <FormInput 
                value={description}
                error={touched.description && errors.description}
                placeholder="Escribe tu descripción aquí"
                label="Descripción"
                onChangeText={handleChange('description')}
                onBlur={handleBlur("description")}
              />
              <FormInput 
                value={address}
                error={touched.address && errors.address}
                placeholder="Escribe tu dirección aquí"
                label="Dirección"
                onChangeText={handleChange('address')}
                onBlur={handleBlur("address")}
              />
              <FormInput 
                value={image}
                error={touched.image && errors.image}
                placeholder="Pega el URL de tu imagen aquí"
                label="Imagen"
                onChangeText={handleChange('image')}
                onBlur={handleBlur("image")}
              />
              <DatePicker 
                handleDate={(date) =>{ values.birthday = date}}
              />
              <FormSubmitButton error={errors} submitting={isSubmitting} onPress={handleSubmit} title="Enviar"/>
            </>
            )
          }
        }
      </Formik>
    </ScrollView>
  )
}

export default RegisterForm



/* 

{
\"fullName\":\"abedul\",
\"phoneNumber\":\"123456\",
\"email\":\"abedules@hotmail.com\",
\"password\":\"qwert\",
\"description\":\"El abedul es un bello árbol caducifolio originario del norte de Europa y Asia, donde crece en las riberas de ríos, arroyos y laderas húmedas.\",
\"birthdate\":\"1-11-2022\",
\"address\":\"El bosque :v\"
}

        !fullName ||
        !phoneNumber ||
        !email ||
        !address ||
        !password ||
        !description ||
        !birthday




*/