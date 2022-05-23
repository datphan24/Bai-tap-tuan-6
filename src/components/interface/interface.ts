export interface order {
  id: string
  date: string
  nameCustomer: string
  shipTo: string
  phone: string
}
export interface editOrder {
  date: string
  nameCustomer: string
  shipTo: string
  phone: string
}
export interface loginStatus {
  setLogged: Function
}
export interface account {
  id: string
  nameUser: string
  emailUser: string
  passwordUser: string
}
interface addUserAction {
  type: 'users/addUser'
  payload: account
}
interface addOrderAction {
  type: 'orders/addOrder'
  payload: order
}
interface deleteOrder {
  type: 'orders/deleteOrder'
  payload: order
}
interface getOrderIdAction {
  type: 'orders/getOrderId'
  payload: order
}
interface editOrderAction {
  type: 'orders/editOrder'
  payload: order
}
export type Action =
  addUserAction | addOrderAction | deleteOrder | getOrderIdAction | editOrderAction
