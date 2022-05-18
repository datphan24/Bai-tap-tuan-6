const initialState = {
  orders: [
    {}
  ]
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'orders/addOrder':
    //   return {
    //     ...state,
    //     orders: [
    //       ...state.orders,
    //       action.payload
    //     ]
    //   }
    default: {
      return state
    }
  }
}
export default rootReducer
