import React, {useCallback, useContext, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { FilesContext } from '../../context/FilesContext';
import './DragAndDrop.scss'
import { useHistory } from "react-router-dom";

function DragAndDrop() {
    const history = useHistory();

    const {data, setData, readFiles} = useContext(FilesContext);

    const onDrop = useCallback(acceptedFiles => {
        readFiles(acceptedFiles);
        history.push('/result');
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const handleChange = e => {
        readFiles(e.target.files);
        History.push('/result');
    };

    return (
        <>
        {isDragActive ?
        <div {...getRootProps()} className="dragAndDrop dragAndDrop--green">
        <input {...getInputProps()} onChange={handleChange}/>
             <p>Suelta aquí el archivo para calcular...</p>
        </div> 
        : 
        <div {...getRootProps()} className="dragAndDrop ">
        <input {...getInputProps()} onChange={handleChange}/>
             <p>Arrastra aquí el archivo, o navega para seleccionarlo</p>
        </div>} 
        </>
    )
}

export default DragAndDrop
