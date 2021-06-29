import React, {createContext, useState} from 'react';
export const FilesContext = createContext();
 
const FilesProvider = (props) => {

    const [data, setData] = useState(null);
    const [result, setResult] = useState(null);

    const readFiles = acceptedFiles => {
        const fileReader = new FileReader();
        fileReader.readAsText(acceptedFiles[0], "UTF-8"); /* TODO: Read more than one file at time */
        fileReader.onload = e => {
            console.log(JSON.parse(e.target.result));
            setData(JSON.parse(e.target.result));

            //TODO: Llamada API para pasarle data

        };
    }

    const calculateECM = () => {
        
    }

    const computeECM = () => {
        var url = '/computeECM';

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => setResult(null))
        .then(response => setResult(response));
    }

	return(
	<FilesContext.Provider
		value={{
			data,
			setData,
            readFiles,
            computeECM,
            result,
            setResult
		}}
	>
		{props.children}
	</FilesContext.Provider>
	)
}
export default FilesProvider;