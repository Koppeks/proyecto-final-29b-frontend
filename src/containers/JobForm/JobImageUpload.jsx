import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from '@expo/react-native-action-sheet';
import tw from "twrnc";

const JobImageUpload = ({ label, value, onSelect }) =>
{
    const { showActionSheetWithOptions } = useActionSheet();

    const displayMenu = () =>
    {
        const options = ['Escoger imagen', 'Cancelar'];
        const cancelButtonIndex = options.length - 1;
        const cancelButtonTintColor = 'red';

        showActionSheetWithOptions({ options, cancelButtonIndex, cancelButtonTintColor },
            async selectedIndex =>
            {
                switch (selectedIndex)
                {
                    case 0: // Escoger imagen
                        let result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                            allowsEditing: true,
                            aspect: [4, 3],
                            quality: 1,
                        });
                        onSelect(result.uri);
                        break;
                    case 1: // Cancelar
                        console.log('Salir');
                        break;
                }
            }
        );
    }

    return (
        <View>
            <Text>{label}</Text>
            {
                value &&
                (
                    <Image source={{ uri: value }} style={tw`w-20 h-20 m-3`} />
                )
            }
            <Button title={value ? 'Cambiar Imagen' : 'Seleccionar Imagen'} onPress={displayMenu} />
        </View>
    )
}

export default JobImageUpload;