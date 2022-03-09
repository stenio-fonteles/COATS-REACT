import style from '../Footer/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return (
        <footer className={style.Footer}>
            <ul className={style.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className={styke.copy_right}><span>COSTS</span> &copy;2022</p>
        </footer>
    )
}
export default Footer;