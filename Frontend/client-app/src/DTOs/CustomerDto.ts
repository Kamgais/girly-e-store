export interface CustomerDto {
    id?: number|null,
    userId?: number|null,
    firstname?:string|null,
    lastname?:string|null,
    postalCode?: number,
    region?:string,
    city?:string,
    street?:string,
    houseNr?:number,
    countryName?:string
}