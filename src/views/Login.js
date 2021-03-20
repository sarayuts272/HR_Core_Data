import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Formik } from "formik";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Link,
  Grid,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

import * as loginActions from "./../actions/login.action";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();

  const dispatch = useDispatch()

  function showForm({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) {
    return (
      <form
        className={classes.form}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginActions.login({...values, ...props}))
          // props.history.push("/KeyAddition");
          // dispatch(loginActions.login({ ...account, ...props }));
        }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          value={values.username}
          onChange={handleChange}
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Button
          onClick={() => props.history.push("/register")}
          fullWidth
          size="small"
          color="primary"
        >
          Register
        </Button>
      </form>
    );
  }

  //   const dispatch = useDispatch();
  //   const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/dogdog.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <Formik initialValues={{ username: "admin", password: "1234" }}>
          {(props) => showForm(props)}
        </Formik>
      </CardContent>
    </Card>
  );
}
