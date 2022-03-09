import { Link } from "react-router-dom";
  
import styles from './nav.module.css'


function Container(props){
    return(
    <nav className={styles.container}>
        <Link to="/home">
            <img src="" alt="logo"></img>
        </Link>
        <ul className={styles.navbar}>
            <li className={styles.item}> 
                <Link to="/home">home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Project">projeto</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato">contato</Link>
            </li>
            <li className={styles.item}>
                <Link to="/company">Empresa</Link>
            </li>
           
        </ul>
    </nav>
    )
}
export default Container;