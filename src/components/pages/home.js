import Img from '../../img/savings.svg'
import Styles from '../pages/home.module.css'
import LinkProjects from '../Layout/linkProjects/linkprojects'

function Home(){
    return ( 
        <section className={Styles.home_container}>
            <h1> Bem-vindo ao <span>Costss</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkProjects to="/NewProject/" text="Criar Projeto"/>
            <img src={Img} alt="imagemCosts"/>
        </section>
    )
}

export default Home;
