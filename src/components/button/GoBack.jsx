import React from 'react'
import { Button } from 'react-native-elements'


const Buttons = ({navigation, title}) =>{
  
  return (
    <Button 
      icon={{
        name:'chevron-left',
        size:30
      }}
      onPress={()=> navigation.goBack()}
      title={title}
    />
  )
}

export default Buttons