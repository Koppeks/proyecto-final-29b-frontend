import React from 'react';
import { View, Text, Button } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';

const JobImageUpload = ({ label, title }) =>
{
    const { showActionSheetWithOptions } = useActionSheet();

    const displayMenu = () =>
    {
        const options = ['Escoger imagen', 'Tomar foto', 'Cancelar'];
        const cancelButtonIndex = 2;
        const cancelButtonTintColor = 'red';

        showActionSheetWithOptions({ options, cancelButtonIndex, cancelButtonTintColor },
            selectedIndex =>
            {
                switch (selectedIndex)
                {
                    case 0: // Escoger imagen
                        console.log('Abrir libreria');
                        break;
                    case 1: // Tomar foto
                        console.log('Abrir camara');
                        break;
                    case 2: // Cancelar
                        console.log('Salir');
                        break;
                }
            }
        );
    }

    return (
        <View>
            <Text>{label}</Text>
            <Button title={title} onPress={displayMenu} />
        </View>
    )
}

export default JobImageUpload;