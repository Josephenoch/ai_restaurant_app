import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText, ThemedView } from '@/components'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import CartItem from '@/components/CartItem'

const cart = () => {
    const cart = useSelector((state: RootState) => state.cart)
  return (
    <>
    <ParallaxScrollView>
          <ThemedView style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                <Ionicons  onPress={()=>router.back()} name="chevron-back" size={20} color="black" />
                <ThemedText style={{marginLeft: 8, fontSize: 18, fontWeight: "600"}}>Order Summary</ThemedText>
            </ThemedView>
        <ThemedView>
        <FlatList
            data={cart.cartItems}
            renderItem={({item, index})=> <CartItem cartItem={item}/>}
        />

        </ThemedView>
    </ParallaxScrollView>
    <ThemedView style={styles.bottomTabContainer}>
            <ThemedView style={{backgroundColor: "white", justifyContent: "space-between", flexDirection: "row", width: "100%", marginBottom:8}}>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginRight: 10}}>Total items</ThemedText>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>{cart.totalNumberOfItems ?? 0}</ThemedText>
            </ThemedView>
            <ThemedView style={{backgroundColor: "white", justifyContent: "space-between", flexDirection: "row", width: "100%", marginBottom:8}}>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginRight: 10}}>Sub total</ThemedText>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>₦ {cart.totalPrice ?? 0}</ThemedText>
            </ThemedView>
            <ThemedView style={{backgroundColor: "white", justifyContent: "space-between", flexDirection: "row", width: "100%", marginBottom:8}}>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginRight: 10}}>Vat</ThemedText>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>₦ 2000</ThemedText>
            </ThemedView>
            <ThemedView style={{backgroundColor: "white", justifyContent: "space-between", flexDirection: "row", width: "100%", marginBottom:8}}>
                <ThemedText style={{color: "black", marginRight: 10}}>Total</ThemedText>
                <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>₦ {cart.totalPrice ?  cart.totalPrice + 2000 : 0}</ThemedText>
            </ThemedView>
            <Link href="/(tabs)/orderConfirmed" asChild>
                <Pressable style={styles.button}>
                    <ThemedText style={{color:"white", fontWeight: "bold"}}>Place Order</ThemedText>
                </Pressable>
            </Link>
        </ThemedView>
    </>
  )
}

export default cart

const styles = StyleSheet.create({
    bottomTabContainer:{
        bottom: 0,
        height: 240,
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