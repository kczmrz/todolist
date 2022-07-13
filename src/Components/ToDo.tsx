import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
type ToDoProps = {
    activity?: string,
    deleteBtn?: VoidFunction,
    


}

function ToDo(props:ToDoProps)
{
    
   return(<div className="text-center justify-center tablet:py-2">
   
        <div className="hover:text-red-500 hover:line-through"> 
        
        <h2 className="text-3xl text-white break-all font-Lato todo-anim desktop:text-5xl">{props.activity} &nbsp;
        <button onClick={props.deleteBtn}>
        <FontAwesomeIcon className="text-2xl desktop:text-3xl hover:text-red-500" icon={faTrash} color={'white'}/>
        </button>
        </h2> 
       
       
        </div>
    
   
   </div>)
}

export default ToDo;