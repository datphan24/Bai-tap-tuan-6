import { order,account,Action } from '../components/interface/interface'
import { Dispatch } from 'redux'
const urlOrders = 'http://localhost:5000/orders'
const urlUsers = 'http://localhost:5000/accounts'

const addUser = (data: account): Action => ({
  type: 'users/addUser',
  payload: data
})
const addOrder = (data: order): Action => ({
  type: 'orders/addOrder',
  payload: data
})
const deleteOrder = (data: order): Action => ({
  type: 'orders/deleteOrder',
  payload: data
})
const getOrderId = (data: order): Action => ({
  type: 'orders/getOrderId',
  payload: data
})
const editOrder = (data: order): Action => ({
  type: 'orders/editOrder',
  payload: data
})

export const addUserAction = (data: account) => {
  return (dispatch: Dispatch<Action>) => {
    fetch(urlUsers, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(response => dispatch(addUser(response)))
  }
}
export const addOrderAction = (data: order) => {
  return (dispatch: Dispatch<Action>) => {
    fetch(urlOrders, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(response => dispatch(addOrder(response)))
  }
}
export const deleteOrderAction = (id: string) => {
  return (dispatch: Dispatch) => {
    fetch(urlOrders+'/'+id, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(response => dispatch(deleteOrder(response)))
  }
}
export const getOrderIdAction = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    fetch(urlOrders+'/'+id)
      .then(res => res.json())
      .then(response => dispatch(getOrderId(response)))
  }
}
export const editOrderAction = (id: string, order: order) => {
  return (dispatch: Dispatch<Action>) => {
    fetch(urlOrders+'/'+id, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(response => dispatch(editOrder(response)))
  }
}
