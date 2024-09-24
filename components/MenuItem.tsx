import React, { FC } from "react"
import { Pressable, StyleSheet, View, } from "react-native"
import {ThemedText, ThemedView} from "@/components"

type PropsType = {
    idx: number
    name: string,
    price: number,
    description: string,
}

const MenuItem:FC<PropsType> = ({
    idx,
    name,
    price,
    description
}) => {
  return (
    <ThemedView style={{...styles.container, marginLeft: idx % 2 === 1 ? "10%" : "0%"}}>
        <ThemedText style={{fontWeight: 600}}>{name}</ThemedText>
        <ThemedText style={{fontWeight: 200, fontSize: 12}}>{description}</ThemedText>
        <View style={styles.priceContainer}>
            <ThemedText style={{fontSize: 12}}>₦{price.toLocaleString()}</ThemedText>
            <Pressable style={styles.addButton}>
                <ThemedText>+</ThemedText>
            </Pressable>
        </View>
    </ThemedView>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        width: "45%",
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: "#EBEBF599"
    },priceContainer: {
        marginTop: 8,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 6,
        backgroundColor: "#F9F9F9",
        justifyContent: "space-between",
    },addButton:{
        height: "auto", 
        paddingHorizontal: 4,
        alignItems: "center",
    }
})