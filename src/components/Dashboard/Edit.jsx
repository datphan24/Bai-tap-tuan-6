import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link,useParams } from 'react-router-dom'
import { getOrderIdAction } from '../../app/action';
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
  editLink: {
    textDecoration: 'none',
    color: 'white',
  },
}));
export default function Edit() {
  const classes = useStyles();
  const id = useParams().id
  const dispatch = useDispatch();
  const getOrder = useSelector(state=>state.orders)
  const [order, setOrder] = useState([{id: '', date: '', name: '',shipTo: '', phone: ''}])
  useEffect(() => {
    dispatch(getOrderIdAction(id))
    setOrder(getOrder)
  }, [])
  console.log(order);
  const { date, name, shipTo, phone } = order
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              label="Day"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value={date}
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
                value={name}
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
                value={shipTo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="off"
                type="phone"
                value={phone}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Link to='/dashboard' className={classes.editLink}>SUBMIT</Link>
          </Button>
        </form>
      </div>
    </Container>
  )
}
