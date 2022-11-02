import React from "react";
import { Alert } from 'react-native';

const logOut = () =>
{
    Alert.alert(
        '¿Estas seguro que deseas cerrar tu sesión?',

        'Elige una opción',
        [
            {
                text: 'Cancelar',
                style: 'cancel',
                onPress: () =>
                {
                    console.log('cancelar')
                }
            },
            {
                text: 'Cerrar',
                style: 'destructive',
                onPress: () =>
                {
                    console.log('cerrar sesion')
                }
            }
        ]
    )
}

export default logOut