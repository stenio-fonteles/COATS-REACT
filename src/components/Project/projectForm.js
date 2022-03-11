import Input from '../form/input/input'
import Select from '../form/select/select'
import Button from '../form/button/button'

function ProjectForm({btnText}){
    return(
        <form>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento"/>
            <Select name="category_id" text="Selecione a categoria"/>
            <Button text={btnText}/>
        </form>
    )
}

export default ProjectForm;