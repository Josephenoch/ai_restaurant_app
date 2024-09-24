import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setAuthToken } from '@/config/axios.config'
import { UserType } from '@/type'

type UserState = {
    token: string | null
    user: UserType | null,
    isAuthenticated: boolean
}

const initialState: UserState = {
	user: null,
	token: null,
	isAuthenticated: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<{user:UserType, token: string}>) => {
			state.isAuthenticated = true
			state.user = action.payload.user
			state.token = action.payload.token
			setAuthToken(action.payload.token)
		},
		refreshUser: (state, action: PayloadAction<{user: UserType}>) => {
			state.user = action.payload.user
		},
		updateUser: (state, action: PayloadAction<{user: UserType}>) => {
			state.user = action.payload.user
		}
	}
})

export const { loginUser, updateUser, refreshUser } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer