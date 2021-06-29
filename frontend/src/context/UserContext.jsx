import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();

 
const UserProvider = (props) => {

    const [error, setError] = useState(false);

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
        setError(false)
        /*var url = '/url/api/login';
        var data = loginValues;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => setError(true))
        .then(response => setError(false));*/
    }
    const register = () => {
        setError(false);
        /*var url = '/url/api/register';
        var data = registerValues;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => setError(true))
        .then(response => setError(false));*/
    }

	return(
	<UserContext.Provider
		value={{
			loginValues,
			setLoginValues,
            registerValues,
			setRegisterValues,
            validateForm,
            validateRegisterForm,
            login,
            register
		}}
	>
		{props.children}
	</UserContext.Provider>
	)
}
export default UserProvider;