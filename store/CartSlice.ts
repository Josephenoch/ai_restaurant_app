import { MenuItemType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
    totalPrice: number,
    cartItems: CartItemType[],
    totalNumberOfItems: number
}

export type CartItemType = {
    menuItem: MenuItemType
    numberOfItems: number
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    totalNumberOfItems: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
        addItemToCart: (state, action: PayloadAction<{menuItem: MenuItemType}>) => {
            const menuItemIdx = state.cartItems.findIndex(item=> item.menuItem.id === action.payload.menuItem.id)
            // if the item is not in cart, add it to cart
            state.totalNumberOfItems += 1 
            state.totalPrice += action.payload.menuItem.price
            if(menuItemIdx < 0){
                state.cartItems.push({numberOfItems: 1, menuItem: action.payload.menuItem})
                return
            }
            // if its in, increase the number of items
            state.cartItems[menuItemIdx] = {...state.cartItems[menuItemIdx], numberOfItems: state.cartItems[menuItemIdx].numberOfItems + 1}

        },removeItemFromCart: (state, action: PayloadAction<{menuItemId: string}>) => {
            const menuItemIdx = state.cartItems.findIndex(item=> item.menuItem.id === action.payload.menuItemId)
            const cartItem = state.cartItems[menuItemIdx]
            if(!cartItem){
                return
            }
            state.totalNumberOfItems > 0 ? state.totalNumberOfItems -= 1 : state.totalNumberOfItems = 0
            state.totalPrice >0 ? state.totalPrice -= cartItem.menuItem.price : 0
            if(cartItem.numberOfItems <= 1){
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