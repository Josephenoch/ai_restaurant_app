import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import isValidURL from '@/scripts/validate-url';
import { fetchRestaurantMenu } from '@/requests/menu';
import { MenuItem, ParallaxScrollView, ThemedText, ThemedView } from '@/components';
import { MenuItemType } from '@/type';



const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const item = useLocalSearchParams<{restaurantAPIURL: string}>();

  const handleFetchMenu = async  (url: string) => {
    try{
      const restaurantIdentifier = isValidURL(url)
      const {data: {data}} = await fetchRestaurantMenu(restaurantIdentifier)
      console.log(data)
      setMenuItems(data)
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    if(item.restaurantAPIURL){
      handleFetchMenu(item.restaurantAPIURL)
    }
  },[item.restaurantAPIURL])

 
  

  
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.headerText}>
        <ThemedText style={styles.welcomeText}>Welcome!</ThemedText>
        <ThemedText style={styles.scanText}>scan again</ThemedText>
      </ThemedView>
      <ThemedView style={styles.menuItemsContainer}>
        {menuItems.map((item, index) => (
          <MenuItem idx={index} description={item.description} name={item.name} price={item.price}/>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },welcomeText: {
    fontSize: 18,
    fontWeight: "600"
  },scanText:{
    fontSize: 14,
    color: "#DA3365"
  },menuItemsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  }
})