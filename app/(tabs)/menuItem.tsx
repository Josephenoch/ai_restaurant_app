import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText, ThemedView } from '@/components'
import { Link, useLocalSearchParams, router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import AntDesign from '@expo/vector-icons/AntDesign';
import { addItemToCart, removeItemFromCart } from '@/store/CartSlice'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
const MenuItem = () => {
  const dispatch = useDispatch()
  const params = useLocalSearchParams<{restaurantIdentifier: string, id: string}>();
  const menuItem = useSelector((state:RootState) => state.menu.restaurants
    ?.find(item=> item.id === params.restaurantIdentifier)?.menuItems
    ?.find(item=>item.id === params.id)) 
    const cartItem = useSelector((state: RootState) => state.cart.cartItems.find(item=> item.menuItem.id === params.id))

    const handleAddToCart = () => {
        if(!menuItem) return
        dispatch(addItemToCart({
            menuItem
        }))
    }

    const handleRemoveItemFromCart = () => {
        dispatch(removeItemFromCart({
            menuItemId: params.id
        }))
    }
  return (
    <>
        <ParallaxScrollView>
            <ThemedView style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                <Ionicons  onPress={()=>router.back()} name="chevron-back" size={20} color="black" />
                <ThemedText style={{marginLeft: 8, fontSize: 18, fontWeight: "600"}}>{menuItem?.name}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.container}>
                <ThemedView style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <ThemedText style={styles.priceText}>₦{menuItem?.price.toLocaleString()}</ThemedText>
                    <ThemedView style={{flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome5 name="fire" size={20} color="#A1B8C7" />
                        <ThemedText style={{color: "#A1B8C7", marginLeft: 8}}>{menuItem?.calories} cal</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.descriptionContainer}>
                    <ThemedText style={{fontSize: 18, fontWeight: "700", marginBottom: 10}}>Description</ThemedText>
                    <ThemedText style={{ fontWeight: "300",marginBottom: 10}}>{menuItem?.description}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.descriptionContainer}>
                    <ThemedText style={{fontSize: 18, fontWeight: "700", marginBottom: 10}}>Ingerdients</ThemedText>
                    <FlatList
                        data={menuItem?.ingredients}
                        renderItem={({item}) => <ThemedText style={styles.flatListText}>{item}</ThemedText>}
                    />
                </ThemedView>
            </ThemedView>
        
        </ParallaxScrollView>
        <ThemedView style={styles.bottomTabContainer}>
            <ThemedView style={{backgroundColor: "white", justifyContent: "space-between", flexDirection: "row", width: "100%"}}>
                <ThemedView style={{backgroundColor: "white", flexDirection: "row"}}>
                    <ThemedText style={{fontWeight: 200, color: "#737373", marginRight: 10}}>Total</ThemedText>
                    <ThemedText>₦{menuItem?.price.toLocaleString()}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: "white", flexDirection: "row", alignItems: "center"}}>
                    <AntDesign onPress={handleRemoveItemFromCart} name="minuscircleo" size={16} color="black" />
                    <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>{cartItem?.numberOfItems ?? 0}</ThemedText>
                    <AntDesign onPress={handleAddToCart} name="pluscircleo" size={16} color="#DA3365" />
                </ThemedView>
            </ThemedView>
            <Link href="/cart" asChild>
                <Pressable style={styles.button}>
                    <ThemedText style={{color:"white", fontWeight: "bold"}}>Go to cart</ThemedText>
                </Pressable>
            </Link>
        </ThemedView>
    </>

  )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: "#F9F9F9",

    },priceText: {
        fontSize: 18,
        color: "#DA3365",
        fontWeight: "700"
    },descriptionContainer:{
        marginTop: 20
    },flatListText: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: "300",
    },bottomTabContainer:{
        bottom: 0,
        height: 140,
        width: "100%",
        paddingVertical: 10,
        alignItems: "center",
        position: "absolute",
        paddingHorizontal: 32,
        backgroundColor: "white",
    },button: {
        width: 311,
        height: 48,
        padding: 4,
        marginTop: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DA3365"
      }
})