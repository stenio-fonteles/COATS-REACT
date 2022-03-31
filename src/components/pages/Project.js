import { useLocation } from "react-router-dom";

import Message from "../Layout/messege/messege";
import LinkProjects from '../Layout/linkProjects/linkprojects'
import styles from './projects.module.css'
function Project(){
    
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
            <div>
                <h3>Projetos...</h3>

            </div>
                
        </div>
    )
}

export default Project;