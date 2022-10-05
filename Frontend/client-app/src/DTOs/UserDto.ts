export interface UserDto  {
  username:string,
  email_address?:string,
  password:string,
  phone_number?:number | null
}