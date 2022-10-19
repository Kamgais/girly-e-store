export interface UserDto  {
  id?:number
  username:string,
  email_address?:string,
  password?:string,
  phone_number?:number | null
}