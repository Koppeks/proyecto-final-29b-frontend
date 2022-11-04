import React from "react";
import { Alert } from 'react-native';


const productAdded = () =>
{
    Alert.alert(

        'Agregado al carrito exitosamente!',
        'Elige una opción',

        [
            {
                text: 'Ir al carrito',
                onPress: () =>
                {
                    console.log('ir al carrito')
                }
            },
            {
                text: 'Seguir comprando',
                style: 'cancel',
                onPress: () =>
                {
                    console.log('Seguir comprando')
                }
            }
        ]
    )
}

export default productAdded