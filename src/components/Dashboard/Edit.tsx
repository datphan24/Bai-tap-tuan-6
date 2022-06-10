import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderIdAction,editOrderAction } from '../../app/action'
import { useDispatch,useSelector } from 'react-redux'
import { order,editOrder } from '../interface/interface'
import Title from './Title'
import { useFormik } from 'formik'
import * as yup from 'yup'

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
  validate: {
    color: 'red',
    margin: 0
  }
}))
export default function Edit() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = useParams().id
  const getOrder = useSelector((state: any) => state.order)
  const [order, setOrder] = useState({
    date: '',
    nameCustomer: '',
    shipTo: '',
    phone: ''
  })
  useEffect(() => {
    dispatch(getOrderIdAction(id as string) as any)
  }, [])
  useEffect(() => {
    setOrder({ ...getOrder })
  }, [getOrder])
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      date: order.date,
      nameCustomer: order.nameCustomer,
      shipTo: order.shipTo,
      phone: order.phone
    },
    onSubmit: (values: editOrder) => {
      dispatch(editOrderAction(id as string, values as order) as any)
      navigate('/dashboard')
    },
    validationSchema: yup.object({
      date: yup.date().required('Date is required'),
      nameCustomer: yup
        .string()
        .required('Name is required'),
      shipTo: yup
        .string()
        .required('Location is required'),
      phone: yup
        .number()
        .typeError("That doesn't look like a phone number")
        .integer("A phone number can't include a decimal point")
        .required('Phone number is required'),
    })
  })
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Title>Edit orders</Title>
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit} >
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
              value={formik.values.date || ''}
              onChange={formik.handleChange}
              />
              {formik.errors.date && formik.touched.date && (
                <p className={classes.validate}>{(formik.errors.date) as string}</p>
              )}
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
                value={formik.values.nameCustomer || ''}
                onChange={formik.handleChange}
              />
              {formik.errors.nameCustomer && formik.touched.nameCustomer && (
                <p className={classes.validate}>{(formik.errors.nameCustomer) as string}</p>
              )}
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
                value={formik.values.shipTo || ''}
                onChange={formik.handleChange}
              />
              {formik.errors.shipTo && formik.touched.shipTo && (
                <p className={classes.validate}>{(formik.errors.shipTo) as string}</p>
              )}
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
                value={formik.values.phone || ''}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className={classes.validate}>{(formik.errors.phone) as string}</p>
              )}
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
