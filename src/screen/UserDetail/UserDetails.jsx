import { Button, Text, View, Image,ScrollView,TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import React from "react";


 export const UserDetails = ({ navigation }) => {

  return (

    
    <ScrollView style={tw`flex `} >

    <Button
      title="Go to Test Home"
      onPress={() =>
        navigation.navigate('Home', { name: 'lo que sea' })
      }
    />
      <View style={tw`flex-row  justify-between pt-5 pb-3  px-3 `}>
              
            

                <Text  style={tw`pt-5 px-3 text-2xl  items-center`} >detalle</Text>

              <TouchableOpacity style={tw`w-12  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}>
            <Text>Share</Text>
            </TouchableOpacity>

         </View>

           <View   style={tw` items-center`}>  
           <Image  style={tw`h-44 w-90 rounded-b-15 `} source={ {uri: 'https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/documents/image/wcms_842756.jpg'}}/>
           </View>
          <View  style={tw` items-center` }>
          <Text style={tw`pt-5 px-3 text-2xl`} >
               Gasfiteria
           </Text >
          </View>
        
            
           <View  style={tw`flex-row justify-center`}>
              <View  style={tw`pl-1 pr-1 `}>
              <Text  style={tw`pl-2 pr-2 py-1 rounded bg-slate-200`}  >Henry M</Text>
              </View>
              <View style={tw`pl-1 pr-1`}> 
                <Text  style={tw`pl-2 pr-2 py-1 rounded bg-slate-200 `} >* 4,5</Text>
              </View>
              <View style={tw`pl-1 pr-1 ` }>
                <Text style={tw`pl-2 pr-2 py-1 rounded bg-slate-200`} >$15 (consto min) </Text>
                </View>
           </View >

           <View style={tw`justify-center p-4`}>
           <Text style={tw`pl-30 pr-30  `}>
              About me
              
           </Text>
           <Text  style={tw`pl-3 pr-1`}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
               de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias 
               desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
               desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro
                de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de 
                relleno en documentos electrónicos, quedando esencialmente igual al original.
              </Text>

           </View>
           
           <View  style={tw`flex px-8 py-3`}>
           <Text >
              Review
              </Text>

        
             <View  style={tw`flex `} >
              <View style={tw`flex-row`}>
              <View >
              <Image  style={tw`h-12 w-12 rounded-full mx-1`}
               source={{ uri:'https://dreamingbytes.com/wp-content/uploads/2014/09/dott.jpg'}}/>
              </View>
             

               <View >
                <Text>
                Diana Diaco
                </Text> 
                <Text>* * * *</Text>
                <Text>buen trabajo</Text>
                </View>
                </View>
             </View>

           </View>

           <View style={tw`flex-row justify-around  pt-5 pb-3  px-3 `}>
              
      <TouchableOpacity style={tw`w-20  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}>

            <Text>Mensaje</Text>
            </TouchableOpacity>
            
            

              <TouchableOpacity style={tw`w-20  h-7 rounded-lg border-2 border-rose-500 justify-center pl-1`}>
            <Text>Reservar</Text>
            </TouchableOpacity>
         </View>


    </ScrollView>
    
        
         
    
  );

};

