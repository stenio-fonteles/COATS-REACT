import {useEffect, useState, } from 'react'


import Input from '../form/input/input'
import Select from '../form/select/select'
import Button from '../form/button/button'

function ProjectForm({btnText,handleSubmit, projectData}){
    const [categories, setCategories] = useState([])
    const [project,setProject] = useState (projectData || {})


    useEffect(() => {

        fetch('http://localhost:5000/categories',{
            method:'GET',
            headers:{
                'Content-type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[])

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
      
    }
    function handleOnChange(e){
        setProject({...project,[e.target.name]:e.target.value})
    }
    function handleCategory(e){
        setProject({...project,category:{
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },
    })
    }
    return(
        <form onSubmit={submit} >
            <Input value={project.name ? project.name :''} type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleOnChange}/>
            <Input value={project.budget ? project.budget : ''} type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento" handleOnChange={handleOnChange}/>
            <Select value={project.category ? project.category.id : ''} name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory}/>
            <Button text={btnText} />
        </form>
    )
}

export default ProjectForm;