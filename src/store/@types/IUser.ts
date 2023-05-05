export interface IUser {
  data:UserType
  success:string


}
type UserType ={
  avatar:string
  email:string

  name:string

  is_subscription_active:boolean

  registration_data:string

  subscription_paid_until_date:any
}
export interface RootState{
  version:string
}