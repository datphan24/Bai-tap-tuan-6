import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderIdAction,editOrderAction } from '../../app/action';
import { useDispatch,useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(-3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function Edit() {
  const classes = useStyles();
  const id = useParams().id
  const getOrder = useSelector(state=>state.order)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    date: '',
    name: '',
    shipTo: '',
    phone: ''
  })
  const { date, nameCustomer, shipTo, phone } = order
  useEffect(() => {
    dispatch(getOrderIdAction(id))
  }, [])
  useEffect(() => {
    setOrder({ ...getOrder })
  }, [getOrder])
  const handleInputChange = (e) => {
    let { name, value } = e.target
    setOrder({...order, [name]: value})
  }
  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editOrderAction(id, order))
    navigate('/dashboard')
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleEdit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              label="Day"
              type="date"
              name='date'
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value={date || ''}
              onChange={handleInputChange}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name Customer"
                name="nameCustomer"
                autoComplete="off"
                value={nameCustomer || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="shipTo"
                label="Ship To"
                name="shipTo"
                autoComplete="off"
                value={shipTo || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phone"
                autoComplete="off"
                type="phone"
                value={phone || ''}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  )
}
