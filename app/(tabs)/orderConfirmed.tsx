import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText, ThemedView } from '@/components'
import { Link, router } from 'expo-router'

const OrderConfirmed = () => {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.container}>
        <Image
            style={styles.image}
            source={require("@/assets/images/order-confirmed.png")}
        />
        <ThemedView style={styles.textContainer}>
            <ThemedText style={{fontSize:20, fontWeight: 700, color: "#DA3365", marginTop: 20}}>Order Confirmed</ThemedText>
            <ThemedText style={{textAlign: "center", marginVertical: 20}}>Your order has been received by the kitchen and would be ready in 20mins</ThemedText>
        </ThemedView>
        <ThemedView style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <Link href="/" asChild>
                <Pressable style={{...styles.button, borderWidth: 1, borderColor: "#737373"}}>
                    <ThemedText style={{fontWeight: "bold", color: "#737373"}}>Exit</ThemedText>
                </Pressable>
            </Link>
                <Pressable onPress={()=>router.back()} style={{...styles.button, width: 180,  backgroundColor: "#DA3365"}}>
                    <ThemedText style={{color:"white", fontWeight: "bold"}}>Place new Order</ThemedText>
                </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}

export default OrderConfirmed

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },image: {
        width: 170,
        height: 170
    },textContainer: {
        alignItems: "center"
    },button: {
        width: 150,
        height: 48,
        padding: 4,
        marginTop: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
       
      }
})