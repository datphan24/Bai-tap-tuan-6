const urlOrders = 'http://localhost:5000/orders'
const urlUsers = 'http://localhost:5000/accounts'

const addOrder = (data) => ({
  type: 'orders/addOrder',
  payload: data
})
const deleteOrder = () => ({
  type: 'orders/deleteOrder'
})
const getOrderId = (data) => ({
  type: 'orders/editOrder',
  payload: data
})
const addUser = (data) => ({
  type: 'users/addUser',
  payload: data
})
export const addUserAction = (data) => {
  return dispatch => {
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
export const addOrderAction = (data) => {
  return dispatch => {
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
export const deleteOrderAction = (id) => {
  return dispatch => {
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
export const getOrderIdAction = (id) => {
  return dispatch => {
    fetch(urlOrders+'/'+id)
      .then(res => res.json())
      .then(response => dispatch(getOrderId(response)))
  }
}
