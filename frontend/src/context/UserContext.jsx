import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();

 
const UserProvider = (props) => {

    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });
    const [registerValues, setRegisterValues] = useState({  /* TODO: lo hacemos por separado para en un futuro añadir repeat password y demás. */
        username: '',
        password: '',
        showPassword: false,
    });

    const validateForm = () => {
        return (loginValues.username != '' && loginValues.password != '');
    }
    const validateRegisterForm = () => {    /* TODO: lo hacemos por separado para en un futuro añadir repeat password y demás. */
        return (registerValues.username != '' && registerValues.password != '');
    }

    const login = () => {
        //si todo es OK, redirect a home
        
    }
    const register = () => {
        //si todo es OK, redirect a home
        
    }
    

	/*const getCountries = async () => {
		const api = await fetch("https://restcountries.eu/rest/v2/all?fields=name");
		const result = await api.json();
		setCountries(result);
	}*/

	return(
	<UserContext.Provider
		value={{
			loginValues,
			setLoginValues,
            registerValues,
			setRegisterValues,
            validateForm,
            login,
            register
		}}
	>
		{props.children}
	</UserContext.Provider>
	)
}
export default UserProvider;