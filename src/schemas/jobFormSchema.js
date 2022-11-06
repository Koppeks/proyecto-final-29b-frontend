import * as yup from 'yup';

export const jobFormSchema = yup.object().shape({

    generalDescription: yup.string("El campo solo debe contener letras")
        .min(10, "La descripción es demasiado corta")
        .max(70, "La descripción es demasiado larga")
        .required("Campo requerido"),
    // availableDays: yup.date("Los días disponibles necesitan ser fechas")
    //     .required("Campo requerido"),
    // images: yup.string()
    //     .matches(/(https?:\/\/.+\.(?:png|jpg))/i, 'Esa no es una imagen correcta')
    //     .required('Campo requerido, pega una URL/dirección'),
    specialities: yup.array()
        .of(
            yup.object().shape({
                title: yup.string("El campo solo debe contener letras")
                    .min(5, "el título es demasiado corto")
                    .max(25, "el título es demasiado largo")
                    .required("Campo requerido"),
                description: yup.string("La descripción solo debe contener letras")
                    .min(10, "La descripción es demasiado corta")
                    .max(70, "La descripción es demasiado larga")
                    .required("Campo requerido"),
                cost: yup.number("Solo se permiten números")
                    .min(7, "El precio debe ser mayor a 7")
                    .max(61, "El precio debe ser menor a 61")
                    .required("Campo requerido"),
            })
        )
        .required('Tiene que tener al menos una especialidad')
        .min(1, 'Tiene que tener al menos una especialidad')
        .max(5, 'No seas acaparador')


})