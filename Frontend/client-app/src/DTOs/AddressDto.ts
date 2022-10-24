import { CountryDto } from "./CountryDto";
import { CustomerDto } from "./CustomerDto";

export interface AddressDto {
    id:number,
    postal_code:number,
    region:string,
    city:string,
    street: string,
    house_nr:number,
    country:Partial<CountryDto>,
    customer:Partial<CustomerDto>
}