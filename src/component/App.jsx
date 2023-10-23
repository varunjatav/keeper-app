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
  return (
    <div>
      <CreateArea onAdd={addNote} />
      {note.map((eachNote) => {
       return <Notes
          key={1}
          title={eachNote.title}
          content={eachNote.content}
        />;
      })}
    </div>
  );
}

export default AppComp;
