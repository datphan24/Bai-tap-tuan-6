import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
// import { onclick, orders } from '../interface/interface'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { deleteOrderAction } from '../../app/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  groupButton: {
    justifyContent: 'center'
  }
}));

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()
  const getOrder = useSelector(state=>state.orders)
  let navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [getOrder])
  const handleDelete = (id) => {
    dispatch(deleteOrderAction(id))
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
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.name}</TableCell>
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
    </React.Fragment>
  );
}
