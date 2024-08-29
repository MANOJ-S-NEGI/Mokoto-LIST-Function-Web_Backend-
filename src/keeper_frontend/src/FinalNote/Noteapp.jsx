import React from "react"
import { useState } from "react";

function Fnlapp(prop){
    let [isValue,setValue] = useState({
        title : "",
        content : "",
    });

    function handleChange(event) {
        const { name, value } = event.target;  
        setValue(prevValue => ({
            ...prevValue,  [name]: value
        })
        );
    }
     
    function submitNote(event) {
        prop.onAdd(isValue);
        setValue({title: "", content: "" });
        event.preventDefault();
      }

    return <div class="d-flex justify-content-center">
    <div className=" outsidecontainer">        
            <div>
                <input className="titlenote" type="text" name="title" placeholder="Title" onChange={handleChange} value = {isValue.title}/><br/>
            </div>
            <div>
                <textarea className=" notetextarea " name="content" rows="40" cols="50" onChange={handleChange} placeholder="Take a Note..." value = {isValue.content}/>
                <button onClick = {submitNote} className="Finalnotebutton">ADD</button>
            </div>
        </div>
      </div>  
}

export default Fnlapp;
