import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity.client';

const HomeScreens = () => {
    const navigation = useNavigation()
    const [featured, setFeatured] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    
    useEffect(() => {
        client.fetch(`
        *[ _type == 'featured']{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }
        `).then((res) => {
            setFeatured(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{ uri: 'https://links.papareact.com/wru'}}
                className="rounded-full h-7 w-7 bg-gray-300 p-4" 
            />
    
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Delivery Now!
                </Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00ccbb"/>
                </Text>
            </View>
            <UserIcon size={30} color="#00ccbb"/>
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon size={20} color="gray"/>
                <TextInput 
                    placeholder="Search for food or restaurants"
                    keyboardType='default'
                />
            </View>
            <AdjustmentsVerticalIcon size={30} color="#00ccbb"/>
        </View>
        <ScrollView 
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            <Categories />
            {featured.map((item) => (
                <FeaturedRow
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    desc={item.short_description}
                />
            ))}

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreens