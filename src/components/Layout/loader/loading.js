import Styles from './loading.module.css'
import loader from '../../../img/loading.svg'
export default function Loader() {
 return (
   <div className={Styles.loader_container}>
       <img className={Styles.loader} src={loader} alt="carregando"/>
   </div>
  );
}