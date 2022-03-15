import { useLocation } from "react-router-dom";

import Message from "../Layout/messege/messege";


function Project(){
    
    const localizacao = useLocation()
    let message = "";
    if(localizacao.state){
        message = localizacao.state.message
    }

    return ( 
        <div>

            <h1>projetoss</h1>
                {message && <Message type="success" msg={message}/>}
        </div>
    )
}

export default Project;