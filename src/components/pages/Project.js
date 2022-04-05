import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import Message from "../Layout/messege/messege";
import LinkProjects from '../Layout/linkProjects/linkprojects'
import styles from './projects.module.css'
import ProjectCard from '../Project/projectCard'
import Loader from "../Layout/loader/loading";
function Project(){

    //GET DO BD
    const [projects, setProjects] = useState([])
    const [removeLoading,setRemoveLoding] = useState(false)
    
    useEffect(()=>{
        fetch('http://localhost:5000/project',{
            method: 'GET',
            Headers:{
                'Content-Type' : 'application/json',
            },

        })
        .then((resp) => resp.json())
        .then((data)=> {
            setProjects(data)
            setRemoveLoding(true)
        })
        .catch((err) => console.log(err))
    },[])

    //.....//.....
    const localizacao = useLocation()
    let message = "";
    if(localizacao.state){
        message = localizacao.state.message
    }

    return ( 
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkProjects to="/NewProject/" text="Criar Projeto"/>
            </div>
                {message && <Message type="success" msg={message}/>}
            <div className={styles.containerCards}  >
                <div className={styles.cards} >
                    {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                        name = {project.name}
                        id = {project.id}
                        budget={project.budget}
                        category={project.category.name}
                        kay={project.id}
                        />
                    ))}
                    {!removeLoading && <Loader/>}
                    {removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}

                </div>

            </div>
                
        </div>
    )
}

export default Project;
