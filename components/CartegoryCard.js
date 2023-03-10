import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity.client'

const CartegoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image 
        source={{
            uri: urlFor(imgUrl).url()
        }}
        className="h-20 w-20 rounded"
      />  
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CartegoryCard