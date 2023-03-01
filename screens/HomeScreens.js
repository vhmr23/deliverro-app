import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreens = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">HomeScreens</Text>
    </SafeAreaView>
  )
}

export default HomeScreens