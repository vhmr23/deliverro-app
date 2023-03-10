import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CartegoryCard from './CartegoryCard'
import client from '../sanity.client'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`
    *[ _type == 'category']
    `).then((res) => {
      setCategories(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
    >
      {categories?.map((category) => (
        <CartegoryCard 
          key={category._id}
          imgUrl={category.image}
          title={category.title}
        />
      ))}
    </ScrollView>
  )
}

export default Categories