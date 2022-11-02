import React from "react";
import { Alert } from 'react-native';

const successfulPurchase = () =>
{
    Alert.alert(
        'Compra exitosa!',

        'Tu compra se realizó correctamente',
        [
            {
                text: 'Ok',
                style: 'cancel',
                onPress: () =>
                {
                    console.log('ok')
                }
            }
        ]
    )
}

export default successfulPurchase