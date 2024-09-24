import {thunk} from "redux-thunk"
import userReducer from "./UserSlice"
import menuReducer from "./MenuSlice"
import { persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { configureStore, combineReducers, AnyAction, Tuple } from "@reduxjs/toolkit"
import orderReducer from "./OrderSlice"
import cartReducer from "./CartSlice"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

export const appReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  menu: menuReducer,
  order: orderReducer
})

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  if (action.type === "SIGNOUT_REQUEST") {
    // for all keys defined in your persistConfig(s)
    AsyncStorage.removeItem("persist:root")
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(thunk)
   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch