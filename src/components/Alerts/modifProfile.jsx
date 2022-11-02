import React from "react";
import { Alert } from 'react-native';

const modifProfile = () =>
{
    Alert.alert(
        '¿Estas seguro que quieres modificar tu perfil?',

        'No se podrán revertir los cambios',
        [
            {
                text: 'Aceptar y modificar perfil',
                style: 'cancel',
                onPress: () =>
                {
                    console.log('aceptado')
                }
            }
        ]
    )
}

export default modifProfile