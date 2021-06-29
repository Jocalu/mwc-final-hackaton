import React, {useCallback, useContext, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { FilesContext } from '../../context/FilesContext';
import './DragAndDrop.css'

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
            ? <p>Drop the files here ...</p>
            : <p>Drag 'n' drop some files here, or click to select files</p>
        }
        </div>
    )
}

export default DragAndDrop
