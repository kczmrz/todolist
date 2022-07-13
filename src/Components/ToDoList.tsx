import { useState } from "react";
import ToDo from "./ToDo";



function ToDoList()
{
    const [activities, setActivities] = useState<string[]>([]);
    const [inputValue, setinputValue] = useState<string>("");
    const [borderColor, setBorderColor] = useState<string>('text-2xl border-b-2 border-white bg-transparent text-white w-9/12 desktop:w-4/12');
    const [infoTxtColor, setInfoTxtColor] = useState<string>('text-center text-white');
    const CatchInput = (event: { target: HTMLInputElement }) => {
        
        const  inpt_val   = event.target;
        setinputValue(inpt_val.value);
        
    };

   

    const AddToList = ()=> {
        if(inputValue)
        { setBorderColor('text-2xl border-b-2 border-white bg-transparent text-white w-9/12 desktop:w-4/12');
        setInfoTxtColor('text-center text-white');

            
            
            setActivities(lastState => [...lastState, inputValue]);
           
            
            setinputValue('');
            
            
        }
        else
         {
            
            setBorderColor('text-2xl border-b-2 border-red-500 bg-transparent text-white w-9/12 desktop:w-4/12');
            setInfoTxtColor('text-center text-red-500');
         }

        
       
    }
    

    const DeleteActivity = (todoValue:number) => {
        const NewList = activities.filter((todo) => todo !== activities[todoValue]);
        setActivities(NewList);
    }
    return(<div className="w-screen overflow"> 
   
       
        <h1 className="text-white text-3xl text-center mt-5 font-Lato desktop:text-5xl">  What are we doing today?</h1>
        <br/>
   
   
        <span> </span>
         <div className="w-screen flex justify-center"> 
           <input type='text' value={inputValue} onChange={CatchInput} className={borderColor} />
           
         </div>
         <p className={infoTxtColor}>Input task </p>
        <div className="w-screen flex justify-center 	"> 
         <button onClick={AddToList} className='mt-5 text-2xl text-white bg-blue-700 py-3 rounded-full w-7/12 hover:bg-blue-600 desktop:w-2/12 desktop:text-1xl'>Add task</button>
        </div>
      


        <br/>

        <div className="w-screen flex justify-center "> 
        

         <div className="grid grid-cols-1 w-10/12 desktop:w-6/12 "> 
           {activities.map((todo: string, key:number)=> <ToDo key={key} activity={activities[key]} deleteBtn={()=>DeleteActivity(key) }/>)}
         </div>
         
        </div>
     
        </div>)
}



export default ToDoList;