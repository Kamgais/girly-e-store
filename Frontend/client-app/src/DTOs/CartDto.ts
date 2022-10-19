import { CartItemDto } from "./CartItemDto";

export interface CartDto {
    id?:number|null,
    customerId?:number|null,
    items?: CartItemDto[]
}