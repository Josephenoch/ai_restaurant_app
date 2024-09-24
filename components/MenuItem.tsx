import React, { FC } from "react"
import { Pressable, StyleSheet, View, } from "react-native"
import {ThemedText, ThemedView} from "."
import { MenuItemType } from "@/type"
import { useDispatch } from "react-redux"
import { addItemToCart } from "@/store/CartSlice"
import { Link } from "expo-router"

type PropsType = {
    idx: number
    menuItem: MenuItemType
    restaurantIdentifier: string,
}

const MenuItem:FC<PropsType> = ({
    idx,
    menuItem,
    restaurantIdentifier
}) => {
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch(addItemToCart({menuItem}))
    }
    return (
    <Link href={{
        pathname: "/menuItem",
        params: {
            id: menuItem.id,
            restaurantIdentifier
        }
        }}
        asChild
    >
        <Pressable style={{...styles.container, marginLeft: idx % 2 === 1 ? "10%" : "0%"}}>
            <ThemedText style={{fontWeight: 600}}>{menuItem.name}</ThemedText>
            <ThemedText style={{fontWeight: 200, fontSize: 12}}>{menuItem.description}</ThemedText>
            <View style={styles.priceContainer}>
                <ThemedText style={{fontSize: 12}}>₦{menuItem.price.toLocaleString()}</ThemedText>
                <Pressable onPress={handlePress} style={styles.addButton}>
                    <ThemedText>+</ThemedText>
                </Pressable>
            </View>
        </Pressable>
    </Link>
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