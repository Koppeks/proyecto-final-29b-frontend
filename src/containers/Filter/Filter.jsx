import { View } from 'react-native'
import React from 'react'
import CardServsExpert from '../../components/CardServsExpert/CardServsExpert'
import CategoryItems from '../../components/CategoryItems/CategoryItems'
import SelectFilter from '../../components/SelectFilter/SelectFilter'

export default function Filter() {
  return (
    <View>
        <CategoryItems/>
        <SelectFilter/>
       
    </View>
  )
}