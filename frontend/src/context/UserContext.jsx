import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();

 
const UserProvider = (props) => {

    const [loginValues, setLoginValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [registerValues, setRegisterValues] = useState({
        username: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const validateForm = () => {
        return (loginValues.email != '' && loginValues.password != '');
    }
    const validateRegisterForm = () => { 
        return (registerValues.username != '' && registerValues.email != '' && registerValues.password != '');
    }

    const login = async() => {
        //si todo es OK, redirect a home
        const api = await fetch("");
		const result = await api.json();
		setCountries(result);
        
    }
    const register = () => {
        //si todo es OK, redirect a home
        
    }

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