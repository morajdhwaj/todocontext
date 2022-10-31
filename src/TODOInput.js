import React, { useState } from "react";
import TODOList from "./TODOList";


const TODOInput = () => {

    const[inputList, setInputList]= useState(""); 
    
    const itemEvent = (e) =>{
        setInputList(e.target.value)
    }

    const handleSubmit = () =>{

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
      <TODOList/>
    </div>
  );
};

export default TODOInput;
