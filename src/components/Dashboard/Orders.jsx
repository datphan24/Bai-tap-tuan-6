import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
// import { onclick, orders } from '../interface/interface'
import Button from '@material-ui/core/Button';
import { deleteOrderAction } from '../../app/action';
import { useDispatch } from 'react-redux';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  buttonEdit: {
    padding: theme.spacing(1.2),
    borderRadius: theme.spacing(0.7),
    backgroundColor: 'blue',
    color: 'white',
    marginRight: theme.spacing(2),
  },
  buttonDelete: {
    backgroundColor: 'red',
    color: 'white',
  }
}));

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [orders])
  const dispatch = useDispatch()
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
              <TableCell align="center">
                <Link href="#" className={classes.buttonEdit} underline="none">EDIT</Link>
                <Button id={order.id} variant="contained" className={classes.buttonDelete} onClick={() => handleDelete(order.id)}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
