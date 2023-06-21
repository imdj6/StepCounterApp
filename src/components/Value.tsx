import { View, Text } from 'react-native'
import React from 'react'

type ValueProps={
    label:string,
    value:string,
}

const Value = ({label,value}:ValueProps) => {
    return (
        <View className='flex-col'>
            <Text className='text-white text-lg'>{label}</Text>
            <Text className='text-white text-2xl'>{value}</Text>
        </View>
    )
}

export default Value