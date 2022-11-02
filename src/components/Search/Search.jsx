
import { View } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'
import { getProName } from '../../redux/actions/index'
import { useDispatch } from 'react-redux'


export default function () {

  const dispatch = useDispatch()

  function searchState(e){
    dispatch(getProName(e.nativeEvent.text))
  }

  return (
    <View style={tw`flex-row items-baseline justify-between w-40 h-12`}>
      <Input 
      leftIcon={{name:"search"}}
      placeholder='Search...'
      onChange={(e) => searchState(e)}
      style={tw``}
      />
    </View>
  )
}