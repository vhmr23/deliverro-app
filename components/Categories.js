import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CartegoryCard from './CartegoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
    >
      <CartegoryCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CartegoryCard  imgUrl="https://links.papareact.com/gn7" title="testing"/>

    </ScrollView>
  )
}

export default Categories