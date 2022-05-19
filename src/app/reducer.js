const initialState = {
  orders: [
    {}
  ],
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
      return {
        ...state,
        orders: [
          ...state.orders,
          action.payload
        ]
      }
    case 'orders/deleteOrder':
      return {
        ...state
      }
    case 'orders/editOrder':
      return {
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
