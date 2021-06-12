import { Button, Divider, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import _ from 'lodash';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from '../../reducers/account/actions';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/assets/loginBackgound/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  form: {

  },
  containerIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    flexDirection: 'column'
  }
});
function Login() {
  const classes = useStyle();
  const [showPassword, setPassword] = useState(false);
  const [showState, setState] = useState({
    email: { value: '', error: false },
    password: { value: '', showPassword: false, error: false },
    errorMessage: ''
  });
  const [open, setOpen] = React.useState(false);

  const account = useAppSelector(state => state.account);

  const dispatch = useAppDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function handleChangePassword(event: any) {
    const password = event.target.value;
    setValueState('password', {
      ...showState.password, value: password, showPassword: password !== '' && true, error: false
    });
  }

  function handleChangeEmail(event: any) {
    const email = event.target.value;
    setValueState('email', { ...showState.email, value: email, error: false });
  }

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  async function handleLogin() {
    if (validateError()) {
      try {
        await dispatch(login(showState.email.value, showState.password.value));
        navigate('/');
      } catch (error) {
        setState({ ...showState, errorMessage: error.response.data.message });
        setOpen(true);
      }
    }
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { vertical, horizontal }: any = { vertical: 'top', horizontal: 'center' };

  function setValueState(name: string, value: any) {
    setState(state => ({
      ...state,
      [name]: value
    }));
  }

  function validateError() {
    let validate: boolean = true;
    if (_.isEmpty(showState.email.value)) {
      setValueState('email', { ...showState.email, error: true });
      validate = false;
    }
    if (_.isEmpty(showState.password.value)) {
      setValueState('password', { ...showState.password, error: true });
      validate = false;
    }
    return validate;
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning">
          {showState.errorMessage}
        </Alert>
      </Snackbar>
      <Paper style={{ width: 380, height: 380 }}>
        <Grid container style={{ padding: '0 35px' }}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            className={classes.containerIcon}
          >
            <Avatar style={{ backgroundColor: '#3f51b5' }} alt="Login">
              <VpnKeyIcon />
            </Avatar>
            <span style={{
              fontSize: 18,
              fontWeight: 500
            }}
            >
              Acessar
            </span>
          </Grid>
          <Grid item xs={12}>
            <form onClickCapture={preventDefault}>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  onChange={handleChangeEmail}
                  value={showState.email.value}
                  error={showState.email.error}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl variant="outlined" fullWidth required error={showState.password.error}>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                  >
                    Senha
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangePassword}
                    value={showState.password.value}
                    endAdornment={showState.password.showPassword && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )}
                    labelWidth={70}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 10 }}>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleLogin}>
                  Entrar
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 10
            }}
          >
            <Link
              style={{ fontSize: 14 }}
              href="/forgot-password"
            >
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button fullWidth variant="contained" color="secondary">
              Registrar-se
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;