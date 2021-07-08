import React, {useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){

    const [notes, notesFunction] = useState([]);

    function addNote(content){
        console.log(content);
        notesFunction((preValues) => {
           return [...preValues, content];
        })
    }

    function deleteNote(id){
        notesFunction(preValues => {
            return preValues.filter((data, index) => {
                return index !== id;
            });
        });
    }

    return(<div>
        <Header />
        <CreateArea onAdd = {addNote}/>
        {notes.map((data, index) => (
            <Note 
               title = {data.title}
               content = {data.note}
               key = {index}
               id = {index}
               onDelete = {deleteNote}
            />))}
        <Footer />
    </div>);
}

export default App;