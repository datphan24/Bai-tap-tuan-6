import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import Grid from '@material-ui/core/Grid'
import { deleteOrderAction } from '../../app/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { order } from '../interface/interface'
const useStyles = makeStyles((theme) => ({
  groupButton: {
    justifyContent: 'center'
  },
  pagination: {
    justifyContent: 'center',
    marginTop: '20px'
  }
}))

export default function Orders() {
  const classes = useStyles()
  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const getOrder = useSelector((state: any) => state.orders)
  let navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [getOrder])
  const handleDelete = (id: string) => {
    dispatch(deleteOrderAction(id) as any)
  }

  const itemsPerPage = 5
  const maxPage = Math.ceil(orders.length / itemsPerPage)

  const beginData = (currentPage - 1) * itemsPerPage
  const endData = beginData + itemsPerPage

  const handleChange = (e: React.ChangeEvent<unknown> , page: number) => {
    setCurrentPage(page)
  }
  return (
    <React.Fragment>
      <Title>Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.slice(beginData,endData).map((order: order) => (
            <TableRow key={order.id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.nameCustomer}</TableCell>
              <TableCell>{order.shipTo}</TableCell>
              <TableCell align="right">{order.phone}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={1} className={classes.groupButton}>
                  <Button variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={()=> navigate(`/edit/${order.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(order.id)}
                  >DELETE</Button>
                </ Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container className={classes.pagination}>
        <Pagination count={maxPage} color="primary" onChange={handleChange} />
      </Grid>
    </React.Fragment>
  )
}
