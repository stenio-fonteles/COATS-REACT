import {
    Link
  } from "react-router-dom";
  
import styles from './container.module.css'

function Container(props){
    return(
    <div className={styles.container}>
        <Link to="/home">home</Link>
        <Link to="/contato">contato</Link>
        <Link to="/company">company</Link>
        <Link to="/NewProject">novo projeto</Link>
    </div>
    )
}
export default Container;