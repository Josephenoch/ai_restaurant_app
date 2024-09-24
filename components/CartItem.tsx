import React, { FC } from "react"
import { Pressable, StyleSheet, View, } from "react-native"
import {ThemedText, ThemedView} from "."
import { MenuItemType } from "@/type"
import { useDispatch } from "react-redux"
import { addItemToCart, CartItemType, removeItemFromCart } from "@/store/CartSlice"
import { Link } from "expo-router"
import { AntDesign } from "@expo/vector-icons"

type PropsType = {
    idx: number
    cartItem: CartItemType
}

const CartItem:FC<PropsType> = ({
    idx,
    cartItem,
}) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addItemToCart({menuItem: cartItem.menuItem}))
    }
    const handleRemoveFromCart = () => {
        dispatch(removeItemFromCart({menuItemId: cartItem.menuItem.id}))
    }
    return (
    <Link href={{
        pathname: "/menuItem",
        params: {
            id: cartItem.menuItem.id,
            // restaurantIdentifier
        }
        }}
        asChild
    >
        <Pressable style={{...styles.container}}>
            <ThemedView style={{ backgroundColor: "#EBEBF599", flexDirection: "row", justifyContent: "space-between"}}>
                <ThemedText style={{fontSize:18}}>{cartItem.menuItem.name}</ThemedText>
                <ThemedText style={{color: "#DA3365", fontWeight: "600"}}>₦{cartItem.menuItem.price.toLocaleString()}</ThemedText>
            </ThemedView>
            <View style={styles.priceContainer}>
                <ThemedView style={{backgroundColor: "#EBEBF599", flexDirection: "row", alignItems: "center"}}>
                    <AntDesign onPress={handleRemoveFromCart} name="minuscircleo" size={16} color="black" />
                    <ThemedText style={{fontWeight: 200, color: "#737373", marginHorizontal: 10}}>{cartItem?.numberOfItems ?? 0}</ThemedText>
                    <AntDesign onPress={handleAddToCart} name="pluscircleo" size={16} color="#DA3365" />
                </ThemedView>
            </View>
        </Pressable>
    </Link>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: "#EBEBF599"
    },priceContainer: {
        marginTop: 12,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 6,
        backgroundColor: "#EBEBF599",
        justifyContent: "space-between",
    },addButton:{
        height: "auto", 
        paddingHorizontal: 4,
        alignItems: "center",
    }
})