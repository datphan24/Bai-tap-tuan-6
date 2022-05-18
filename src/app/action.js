export const addOrderAction = (data) => {
  return dispatch => {
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }
}
