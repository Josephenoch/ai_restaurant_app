export type ResponseReturnType<T> = {
    data: T,
    message: string,
    status: "success" | "error",
} 

export type MenuItemType = {
    id: string;
    name: string;
    price: number;
    calories: number;
    description: string;
    ingredients: string[];
    restaurantId: string;
}

export type OrderType = {
    id: string;
    items: string;
    totalPrice: number;
    restaurantId: string
}

export type UserType = {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
    password: string;
    phoneNumber: string;
    
}