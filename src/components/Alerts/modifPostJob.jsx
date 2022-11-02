import React from "react";
import { Alert } from 'react-native';

const modifPostJob = () =>
{
    Alert.alert(
        '¿Estas seguro de modificar esta publicación?',

        'No se podrán revertir los cambios',
        [
            {
                text: 'Aceptar y modificar publicación',
                style: 'cancel',
                onPress: () =>
                {
                    console.log('aceptado')
                }
            }
        ]
    )
}

export default modifPostJob