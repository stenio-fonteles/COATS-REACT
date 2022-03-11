import styles from '../button/button.module.css'

function Button({ text}){
    return(
         <div >
             <button className={styles.btn}>{text}</button>
            
         </div>
    )
}
export default Button;