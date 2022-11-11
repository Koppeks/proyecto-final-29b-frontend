import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from '@expo/react-native-action-sheet';
import tw from "twrnc";

const JobImageUpload = ({ label, value, onSelect }) =>
{
    const { showActionSheetWithOptions } = useActionSheet();
    const [images, setImages] = useState(value);

    const displayMenu = (index = -1) =>
    {
        console.log('Menu for index: ' + index);
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

                        if (index === -1) // Agregando una nueva imagen
                        {
                            const newImages = [...images, result.uri];
                            setImages(newImages);
                            onSelect(newImages);
                        }
                        else // Reemplazando una imagen existente
                        {
                            const newImages = [...images];
                            newImages[index] = result.uri;
                            setImages(newImages);
                            onSelect(newImages);
                        }
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
            <View style={tw`flex flex-row`}>
                {
                    images.map((image, index) =>
                        <TouchableOpacity onPress={() => displayMenu(index)} key={index}>
                            <Image source={{ uri: image }} style={tw`w-20 h-20 m-3`} />
                        </TouchableOpacity>
                    )
                }
                {
                    images.length < 3 &&
                    <TouchableOpacity style={tw`flex flex-row justify-center`} onPress={() => displayMenu(-1)} key={images.length}>
                        <View style={tw`flex flex-col justify-center`}>
                            <Text style={tw` border-2 border-sky-600 text-sky-600  text-center font-bold text-2xl w-20 h-20 `}>+</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default JobImageUpload;