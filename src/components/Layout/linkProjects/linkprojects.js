import { Link } from "react-router-dom"

import styles from '../linkProjects/linkprojects.module.css'

function LinkProjects ({to,text}){
    return(
        <Link className={styles.btn} to={to} >
            {text}
        </Link>
    )
}

export default LinkProjects;