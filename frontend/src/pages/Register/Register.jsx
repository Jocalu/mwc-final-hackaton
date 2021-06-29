import './Register.scss';
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

function Register() {
  const {registerValues, setRegisterValues, validateRegisterForm, register} = useContext(UserContext);
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setRegisterValues({ ...registerValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setRegisterValues({ ...registerValues, showPassword: !registerValues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (validateRegisterForm() && register()) ? history.push("/home") : showError(); //si es OK, redirect a la home de la app, sino, mostramos error
  }

  const showError = () => {
    alert('Datos incorrectos');
  }

  return (
    <main className="login">
      <div className="login__wrapper container">
        <h1 className="mb-8">Regístrate aquí</h1>

        <TextField
          id="outlined-basic"
          label="Nombre de usuario"
          variant="outlined"
        />
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={registerValues.showPassword ? 'text' : 'password'}
            value={registerValues.password}
            onChange={handleChange('password')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {registerValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={70}
          />
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>    
          REGISTRAR
        </Button>

      </div>
    </main>
  );
}

export default Register;
