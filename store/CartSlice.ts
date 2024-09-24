import { MenuItemType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
    cartItems: CartItem[]
}

export type CartItem = {
    menuItem: MenuItemType
    numberOfItems: number
}

const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
        addItemToCart: (state, action: PayloadAction<{menuItem: MenuItemType}>) => {
            const menuItemIdx = state.cartItems.findIndex(item=> item.menuItem.id === action.payload.menuItem.id)
            // if the item is not in cart, add it to cart
            if(menuItemIdx < 0){
                state.cartItems.push({numberOfItems: 1, menuItem: action.payload.menuItem})
                return
            }
            // if its in, increase the number of items
            state.cartItems[menuItemIdx] = {...state.cartItems[menuItemIdx], numberOfItems: state.cartItems[menuItemIdx].numberOfItems + 1}

        },removeItemFromCart: (state, action: PayloadAction<{menuItemId: string}>) => {
            const menuItemIdx = state.cartItems.findIndex(item=> item.menuItem.id === action.payload.menuItemId)
            const menuItem = state.cartItems[menuItemIdx]
            if(!menuItem){
                return
            }
            if(menuItem.numberOfItems <= 1){
                state.cartItems.splice(menuItemIdx, 1)
                return
            }
            state.cartItems[menuItemIdx] = {...state.cartItems[menuItemIdx], numberOfItems: state.cartItems[menuItemIdx].numberOfItems - 1}
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

const cartReducer = cartSlice.reducer

export default cartReducer