import styles from '../pages/newproject.module.css'
import ProjectForm from '../Project/projectForm'

function NewProject(){
    return (
        <div className={styles.newproject_container}> 
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject;