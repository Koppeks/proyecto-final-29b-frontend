import * as yup from 'yup';
/*
  Yup es una libreria que controla los campos de los formularios con un esquema predefinido de sus valores 
  y envia mensajes de error si no se cumplen 
*/
export const basicSchema = yup.object().shape({
    fullName: yup.string("El nombre solo debe contener letras")
      .min(3,"El nombre es demaciado corto")
      .max(40, "El nombre es demaciado largo")
      .required("Campo requerido"),
    email: yup.string()
      .email("Por favor, ingrese un email valido")
      .required("Campo requerido"),
    phoneNumber: yup.number("El teléfono necesita ser un número")
      .min(5, "El teléfono es demaciado corto")
      .positive()
      .integer()
      .required("Campo requerido"),
    password: yup.string()
      .trim().min(5, "La contraseña es demaciado corta")
      .required("Campo requerido"),
    confirmPassword: yup.string()
      .equals([yup.ref("password")], "Las contraseñas no son iguales")
      .required("Campo requerido"),
    occupation: yup.string()
      .required("Campo requerido"),
    description: yup.string()
      .min(30, "La descripción es demaciado corto, mínimo de caracteres es 50")
      .max(255, "La descripción es demaciado larga, máximo de caracteres es 255")
      .required("Campo requerido"),
    pricing: yup.number("Solo se permiten números")
      .min(10, "El precio debe ser mayor a 10")
      .max(60, "El precio debe ser menor a 60")
      .required("Campo requerido"),
    address: yup.string()
      .required("Campo requerido"),
    image: yup.string()
      .matches(/(http(s?):\/\/.*\.(?:png|jpg))/i,'Esa no es una imagen correcta')
      .required('Campo requerido, pega una URL/dirección')
})