import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import isValidURL from '@/scripts/validate-url';



const Menu = () => {
  const item = useLocalSearchParams<{restaurantAPIURL: string}>();

  const handleFetchMenu = (url: string) => {
    if (!isValidURL(url)) return 
    
  }

 
  

  
  return (
    <View>
      <Text>Menu</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})