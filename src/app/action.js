const url = 'http://localhost:5000/orders'
export const addOrderAction = (data) => {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }
}
export const deleteOrderAction = (id) => {
  return dispatch => {
    fetch(url+'/'+id, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => res.json())
  }
}
