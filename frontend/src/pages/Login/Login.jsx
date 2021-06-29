import './Login.scss';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState, useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useHistory } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Login() {
  const {loginValues, setLoginValues, validateForm, login} = useContext(UserContext);
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setLoginValues({ ...loginValues, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (validateForm() && login()) ? history.push("/home") : showError(); //si es OK, redirect a la home de la app, sino, mostramos error
  }

  const handleClickShowPassword = () => {
    setLoginValues({ ...loginValues, showPassword: !loginValues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const showError = () => {
    alert('Datos incorrectos');
  }

  return (
    <main className="login">
      <div className="login__wrapper container">
        <h1 className="mb-8">Introduce tus datos</h1>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          helperText=""
          onChange={handleChange('email')}
        />
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={loginValues.showPassword ? 'text' : 'password'}
            value={loginValues.password}
            onChange={handleChange('password')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {loginValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={70}
          />
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
          ENTRAR
        </Button>

        <span className="login__message text--grey mt-4">
          ¿No tienes cuenta?
          <Link
            className="ml-1"
            style={{ textDecoration: 'none', color: '#0361b7' }}
            to="/register"
          >
            Regístrate

          </Link>
        </span>
      </div>
    </main>
  );
}

export default Login;
