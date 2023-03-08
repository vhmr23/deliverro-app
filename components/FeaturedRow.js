import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, desc, featuredCategory}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" size={20} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="YO! Sushi"
          rating={4.3}
          genre="Japanese"
          address="123 Main St."
          short_desc="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="YO! Sushi"
          rating={4.3}
          genre="Japanese"
          address="123 Main St."
          short_desc="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="YO! Sushi"
          rating={4.3}
          genre="Japanese"
          address="123 Main St."
          short_desc="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow