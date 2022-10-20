export interface CartItemDto {
    id?: number|null,
    qty?: number|null,
    productId?: number|null,
    options?: string[],
    totalPrice?: number
}