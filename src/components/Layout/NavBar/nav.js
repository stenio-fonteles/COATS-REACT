import { Link } from "react-router-dom";
  
import styles from './nav.module.css'

import Logo from '../../../img/moeda.png'

function Container(props){
    return(
    <nav className={styles.container}>
        <Link to="/home">
            <img src={Logo} alt="logo"></img>
        </Link>
        <ul className={styles.navbar}>
            <li className={styles.item}> 
                <Link to="/home">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Project">Projetos</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato">Contato</Link>
            </li>
            <li className={styles.item}>
                <Link to="/company">Empresa</Link>
            </li>
           
        </ul>
    </nav>
    )
}
export default Container;