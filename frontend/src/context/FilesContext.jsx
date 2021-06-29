import React, {createContext, useState} from 'react';
import { useEffect } from 'react';
export const FilesContext = createContext();
 
const FilesProvider = (props) => {

    const [data, setData] = useState(null);

    const readFiles = acceptedFiles => {
        const fileReader = new FileReader();
        fileReader.readAsText(acceptedFiles[0], "UTF-8"); /* TODO: Read more than one file at time */
        fileReader.onload = e => {
            const data = JSON.parse(e.target.result);
            console.log(data);
            setData(data);
            //TODO: Llamada API para pasarle data
        };
    }

	/*const getCountries = async () => {
		const api = await fetch("https://restcountries.eu/rest/v2/all?fields=name");
		const result = await api.json();
		setCountries(result);
	}*/

	return(
	<FilesContext.Provider
		value={{
			data,
			setData,
            readFiles
		}}
	>
		{props.children}
	</FilesContext.Provider>
	)
}
export default FilesProvider;