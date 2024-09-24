import { MenuItemType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MenuState = {
    restaurants: RestaurantWithMenu[]
}

export type RestaurantWithMenu = {
    id: string
    menuItems: MenuItemType[]
}

const initialState: MenuState = {
    restaurants: []
}

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
        addRestaurantMenu: (state, action: PayloadAction<RestaurantWithMenu>) => {
            const restuarantExistsIdx = state.restaurants.findIndex(item=> item.id === action.payload.id)
            if(restuarantExistsIdx < 0){
                state.restaurants.push(action.payload)
                return
            }
            state.restaurants[restuarantExistsIdx] = action.payload
        }
    }
})

export const { addRestaurantMenu } = menuSlice.actions

const menuReducer = menuSlice.reducer

export default menuReducer