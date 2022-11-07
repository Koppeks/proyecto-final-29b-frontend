import React from "react";
import { Alert } from 'react-native';

const alertPostJob = (onPress, values, formikActions) =>
{
    Alert.alert(
        'Recuerda cumplir con las siguientes condiciones para continuar: no publicar ningún número telefónico, no usar palabras ofensivas, elegir la categoría adecuada',

        'De no cumplir con las condiciones, este posteo está sujeto a su eliminación por parte del staff',
        [
            {
                text: 'Aceptar y publicar',
                style: 'default',
                onPress: () => onPress(values, formikActions)
            },
            {
                text: 'Cancelar',
                style: 'cancel',
                onPress: () => formikActions.setSubmitting(false)
            }
        ]
    )
}

export default alertPostJob