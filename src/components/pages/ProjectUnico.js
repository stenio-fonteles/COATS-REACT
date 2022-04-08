import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ProjectUnico.module.css'

export default function ProjectUnico() {
    const {id} = useParams;

    const [project, setProject] = useState ([])

    useEffect(() =>{
        fetch(`http://localhost:5000/project/${id}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'applicarion/json',
            },
        }).then( resp => resp.json())
        .then((data) => {
            setProject(data)
        }) 
        .catch ( 
            err => console.log(err) )
    })
 return (
    <>
        <h1>Testando</h1>
        <h1>{project.name}</h1>
    </>
  );
}