import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();

 
const UserProvider = (props) => {

    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const validateForm = () => {
        return (loginValues.username != '' && loginValues.password != '');
    }

    const login = () => {
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
            validateForm,
            login
		}}
	>
		{props.children}
	</UserContext.Provider>
	)
}
export default UserProvider;