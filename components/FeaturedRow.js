import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity.client'

const FeaturedRow = ({ id, title, desc }) => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    client.fetch(`
      *[ _type == 'featured' && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            title
          }
        }
      }[0]
    `, { id }).then((res) => {
      setRestaurants(res.restaurants)
    }).catch((err) => {
      console.log(err)
    })
  }, [id])

  return (
    <View className="w-auto">
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
        {restaurants?.map((restaurant) => (
          <RestaurantCard 
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.title}
            address={restaurant.address}
            short_desc={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow