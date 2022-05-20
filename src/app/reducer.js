const initialState = {
  orders: [
    {}
  ],
  order: {

  },
  users: [
    {}
  ]
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/addUser':
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      }
    case 'orders/addOrder':
    case 'orders/deleteOrder':
      return {
        ...state,
        orders: [
          ...state.orders,
          action.payload
        ]
      }
    case 'orders/getOrderId':
      return {
        ...state,
        order: action.payload
      }
    case 'orders/editOrder':
      return {
        ...state,
        orders: [
          ...state.orders,
          action.payload
        ]
      }
    default: {
      return state
    }
  }
}
export default rootReducer
