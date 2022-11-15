import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
// import { Button } from 'react-native-elements'
import { logout } from '../../redux/reducers/authSlice'

export default function ButtonLogout() {

    const dispatch= useDispatch()

  return (
<View>
    <TouchableOpacity
    title='Cerrar secion'
    onPress={()=>dispatch(logout())}
    />
</View>

 
  )
}