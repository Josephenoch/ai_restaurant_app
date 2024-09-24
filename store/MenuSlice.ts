import { MenuItemType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MenuState = {
    restuarants: RestaurantWithMenu[]
}

export type RestaurantWithMenu = {
    name: string
    menuItems: MenuItemType[]
}

const initialState: MenuState = {
    restuarants: []
}

export const menuSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
        addRestaurant: (state, action: PayloadAction<RestaurantWithMenu>) => {
            const restuarantExistsIdx = state.restuarants.findIndex(item=> item.name === action.payload.name)
            if(restuarantExistsIdx < 0){
                state.restuarants.push(action.payload)
                return
            }
            state.restuarants[restuarantExistsIdx] = action.payload
        }
    }
})

export const { addRestaurant } = menuSlice.actions

const menuReducer = menuSlice.reducer

export default menuReducer