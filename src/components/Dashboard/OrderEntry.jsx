import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { addOrderAction } from '../../app/action';
import { v4 } from 'uuid'

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
  }
}));

export default function OrderEntry() {
  const classes = useStyles();
  const [date, setDate] = React.useState('')
  const [name, setName] = React.useState('')
  const [shipTo, setShipTo] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const dispatch = useDispatch()
  const handleSubmitOrder = (e) => {
    e.preventDefault()
    dispatch(addOrderAction({
      id: v4(),
      date: date,
      name: name,
      shipTo: shipTo,
      phone: phone
    }))
    setDate('')
    setName('')
    setShipTo('')
    setPhone('')
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmitOrder}>
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
              onChange={e => setDate(e.target.value)}
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
                onChange={e => setName(e.target.value)}
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
                onChange={e => setShipTo(e.target.value)}
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
                value={phone}
                onChange={e => setPhone(e.target.value)}
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
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
