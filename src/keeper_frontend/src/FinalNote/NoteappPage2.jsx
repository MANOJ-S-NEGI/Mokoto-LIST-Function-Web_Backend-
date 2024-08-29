import { useEffect, useState } from "react"
import React from "react"
import Fnlapp from "./Noteapp"
import { keeper_backend } from "declarations/keeper_backend";


function Notetag(){
    let [notes, setNotes] = useState([]);
    
    function addNote(isValue) {
        keeper_backend.createNote(isValue.title, isValue.content);
        setNotes(prevNotes => {
            return [isValue,...prevNotes];
        });
    }

    useEffect(()=>{
        fetchData();
        console.log("useEffect is triggered")
    }, []);

    async function fetchData(){
        const notesArray =await keeper_backend.readNotes();
        setNotes(notesArray);
    };

    function deleteNote(id) {
        keeper_backend.delNotes(id);
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return <div>
        <Fnlapp onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            
            return <div key={index} className="note">
                <div className="finalNoteHeader">                
                    <button  className="FinalnoteDelbutton" onClick={() => deleteNote(index)}> X </button>
                    <h1>{noteItem.title}</h1>
                </div>
                <div>
                    <p>{noteItem.content}</p>
                </div>
            
                </div>})}
        </div>
}
export default Notetag;
