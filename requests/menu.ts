import { http } from "@/config/axios.config"
import { MenuItemType, ResponseReturnType } from "@/type"
import { AxiosPromise } from "axios"

export const fetchRestaurantMenu = (restaurantIdentifier: string) => {
    return http.get(`menu/${restaurantIdentifier}`)  as AxiosPromise<ResponseReturnType<MenuItemType[]>>
}