import React from "react";
import { Alert } from 'react-native';

const deletePostJob = () =>
{
    Alert.alert(
        '¿Estás seguro en eliminar esta publicación?',

        'No se podrán revertir los cambios',
        [
            {
                text: 'Aceptar y eliminar publicación',
                onPress: () =>
                {
                    console.log(eliminado)
                }
            }
        ]
    )
}

export default deletePostJob