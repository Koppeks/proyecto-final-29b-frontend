import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  )
}

// import {useStripe} from '@stripe/stripe-react-native'
// import {  Text, View } from 'react-native'
// import React from 'react'
// import { useState } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
// import {CardField}from '@stripe/stripe-react-native'

// export default function Payment() {
// const [name, setName] = useState(" ")
// const stripe= useStripe()

//   return (
//     <View>
//       <Text>
//         <TextInput 
//         value={name}
//         placeholder="name"
//         onChangeText={text=>setName(text)}
//         />

//         <CardField/>

//       </Text>
//     </View>
//   )
// }
