import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { v4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addUserAction } from '../app/action'
import { account } from './interface/interface'
import { useFormik } from 'formik'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  validate: {
    color: 'red',
    margin: 0
  }
}))
export default function SignUp() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      userPassword: '',
    },
    onSubmit: (values: account) => {
      dispatch(addUserAction({
        id: v4(),
        userName: values.userName,
        userEmail: values.userEmail,
        userPassword: values.userPassword
      }) as any)
      formik.resetForm()
      alert('You have created account successfully!')
    },
    validationSchema: yup.object({
      userName: yup
        .string()
        .required('Name is required'),
      userEmail: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      userPassword: yup
        .string()
        .required('Password is required')
        .min(6, 'Password is too short - should be 6 chars minimum.')
    })
  } as any)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate
        onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="userName"
                variant="outlined"
                fullWidth
                id="userName"
                label="Your Name"
                autoFocus
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.userName && formik.touched.userName && (
                <p className={classes.validate}>{(formik.errors.userName) as string}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="userEmail"
                label="Email Address"
                name="userEmail"
                autoComplete="off"
                value={formik.values.userEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.userEmail && formik.touched.userEmail && (
                <p className={classes.validate}>{(formik.errors.userEmail) as string}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="userPassword"
                label="Password"
                type="password"
                id="userPassword"
                autoComplete="current-password"
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.userPassword && formik.touched.userPassword && (
                <p className={classes.validate}>{(formik.errors.userPassword) as string}</p>
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
