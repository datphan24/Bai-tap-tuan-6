import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch } from 'react-redux'
import { addOrderAction } from '../../app/action'
import { v4 } from 'uuid'
import Title from './Title'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { order } from '../interface/interface'

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

export default function OrderEntry() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      date: '',
      nameCustomer: '',
      shipTo: '',
      phone: '',
    },
    onSubmit: (values: order) => {
      dispatch(addOrderAction({
        id: v4(),
        date: values.date,
        nameCustomer: values.nameCustomer,
        shipTo: values.shipTo,
        phone: values.phone
      }) as any)
      formik.resetForm()
    },
    validationSchema: yup.object({
      date: yup
        .date()
        .required('Date is required'),
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
  } as any)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Title>Order entry</Title>
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.date && formik.touched.date && (
                <p className={classes.validate}>{(formik.errors.date) as string}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="nameCustomer"
                label="Name Customer"
                name="nameCustomer"
                autoComplete="off"
                value={formik.values.nameCustomer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nameCustomer && formik.touched.nameCustomer && (
                <p className={classes.validate}>{(formik.errors.nameCustomer) as string}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="shipTo"
                label="Ship To"
                name="shipTo"
                autoComplete="off"
                value={formik.values.shipTo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.shipTo && formik.touched.shipTo && (
                <p className={classes.validate}>{(formik.errors.shipTo) as string}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="off"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}
