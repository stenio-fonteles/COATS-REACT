import { useNavigate } from "react-router-dom"

import styles from '../pages/newproject.module.css'
import ProjectForm from '../Project/projectForm'

function NewProject(){

    var navigate = useNavigate();


    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []
        fetch("http://localhost:5000/project", {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
           
            navigate('/project', {message: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }
    
    return (
        <div className={styles.newproject_container}> 
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost}  btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject;