export interface ProductDto {
    id:number,
    name: string,
    price: number,
    description:string,
    product_image?:string,
    rating?:number,
    qtyInStock:number
}