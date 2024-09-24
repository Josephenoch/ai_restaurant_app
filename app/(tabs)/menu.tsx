import {  StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { fetchRestaurantMenu } from '@/requests/menu';
import { ThemedText, ThemedView } from '@/components';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { addRestaurantMenu } from '@/store/MenuSlice';
import MenuItem from '@/components/MenuItem';



const Menu = () => {
  const dispatch = useDispatch();
  const params = useLocalSearchParams<{identifier: string}>();
  const restaurant = useSelector((state: RootState) => state.menu.restaurants.find(item=> item.id === params.identifier));

  const handleFetchMenu = async  (restaurantIdentifier: string) => {
    try{
      const {data: {data}} = await fetchRestaurantMenu(restaurantIdentifier)
      dispatch(addRestaurantMenu({
        id: restaurantIdentifier,
        menuItems: data
      }))
    }catch(err:any){
    }

  }

  useEffect(()=>{
    if(params.identifier){
      handleFetchMenu(params.identifier)
    }
  },[params.identifier])

 
  

  
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.headerText}>
        <ThemedText style={styles.welcomeText}>Welcome!</ThemedText>
        <ThemedText style={styles.scanText}>scan again</ThemedText>
      </ThemedView>
      <ThemedView style={styles.menuItemsContainer}>
        {restaurant?.menuItems.map((item, index) => (
          <MenuItem key={item.id} restaurantIdentifier={restaurant.id} idx={index} menuItem={item}/>
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