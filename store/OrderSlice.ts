import { OrderType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OrderState = {
    orders: OrderType[]
}

const initialState: OrderState = {
    orders: []
}

export const orderSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
        addOrders: (state, action: PayloadAction<{order: OrderType}>) => {
            state.orders.push(action.payload.order)
        },fetchOrders:(state, action: PayloadAction<{orders: OrderType[]}>) => {
            state.orders = action.payload.orders
        }
    }
})

export const { addOrders, fetchOrders } = orderSlice.actions

const orderReducer = orderSlice.reducer

export default orderReducer