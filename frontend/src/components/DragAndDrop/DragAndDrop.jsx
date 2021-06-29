import React, {useCallback, useContext, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { FilesContext } from '../../context/FilesContext';
import './DragAndDrop.scss'

function DragAndDrop() {

    const {data, setData, readFiles} = useContext(FilesContext);

    const onDrop = useCallback(acceptedFiles => {
        readFiles(acceptedFiles);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const handleChange = e => {
        readFiles(e.target.files);
    };

    return (
        <div {...getRootProps()} className="dragAndDrop">
        <input {...getInputProps()} onChange={handleChange}/>
        {isDragActive
            ? <p>Arrastra aquí el archivo ...</p>
            : <p>Arrastra aquí el archivo, o navega para seleccionarlo</p>
        }
        </div>
    )
}

export default DragAndDrop
