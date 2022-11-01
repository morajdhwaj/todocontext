import React, { useState } from "react";
import { insertToDB } from "./PuochDb";
import TODOList from "./TODOList";


const TODOInput = () => {

    const[inputList, setInputList]= useState(""); 

    const [inputsTasks, setInputTasks] = useState([])


    
    const itemEvent = (e) =>{
        setInputList(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setInputTasks((prev)=>[inputList,...prev]);
      const  prev ={task:inputList}
      setInputList (insertToDB(prev))
      setInputList("");
      
    }  

   
    return (
    <div>
      <div>
        <h1>TODO</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="mytodo"
            type="text"
            required={React}
            className="border"
            placeholder="Add task"
            onChange={itemEvent}
            value={inputList}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <TODOList  input={inputsTasks}  />
     
    </div>
  );
};

export default TODOInput;
