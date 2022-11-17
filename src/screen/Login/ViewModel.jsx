import {  Text, View } from 'react-native'
import React, { useState } from 'react'

 const  LogInViewModel=()=> {
    const [values, setValues] = useState({
        email: '',
        password:'',
    })
    
    const onChange= (property,value)=>{
        setValues({
            ...values,[property]:value
        })
    }
  return {
    ...values,
    onChange
  }
}

export default LogInViewModel

