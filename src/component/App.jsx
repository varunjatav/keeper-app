import Notes from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function AppComp() {
  const [note, setNote] = useState([]);

  const addNote = (newNote) => {
    console.log(newNote);
    setNote((preNotes) => {
      return [...preNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    console.log("Delete func Called");
      setNote((preNotes) => {
     return preNotes.filter((noteItem , index) => {
        return index !== id;
      })
      
    });
  }
  return (
    <div>
      <CreateArea onAdd={addNote} />
      {note.map((eachNote , index) => {
       return <Notes
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          onDelete={deleteNote}
        />;
      })}
    </div>
  );
}

export default AppComp;
