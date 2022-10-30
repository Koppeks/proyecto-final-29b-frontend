import {useState} from 'react'

export function useLocalStorageId( key , initialValue){

    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const item =  window.localStorage.setItem(key)
            return item ? JSON.parse(item): initialValue
        }catch(error){
            return initialValue

        }
    })

    const setValue = value=>{
        try{
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
    
        }catch(error){
          console.log(error)
        }

    }
    return[storedValue,setValue]
}
