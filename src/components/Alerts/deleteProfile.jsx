import React from "react";
import { Alert } from 'react-native';

const deleteProfile = () =>
{
    Alert.alert(
        '¿Estás seguro que deseas eliminar tu cuenta?',

        'No se podrán revertir los cambios, tu cuenta estará en suspención pero puedes reabrirla si deseas',
        [
            {
                text: 'Aceptar y eliminar perfil',
                style: 'destructive',
                onPress: () =>
                {
                    console.log('perfil eliminado')
                }
            }
        ]
    )
}

export default deleteProfile