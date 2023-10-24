import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = ({onAdd}) => {
  const [shown , setShown ] = useState(false);
    const [note , setNote] = useState({
        title: "",
        content: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setNote(preNote => {
          return   {
            ...preNote,
            [name] : value,
          }
        })

    }
    const SubmitNote = (event) => { 
        event.preventDefault();
        onAdd(note)
    }
  return (
    <div>
      <form className="create-note">
        {
          shown && (<input type="text"  onChange={handleChange} value={note.title} placeholder="Title" name="title"  />)
        }
      
     
      <textarea type="text" onChange={handleChange}  value={note.content} placeholder="Take a note... " name="content"  rows={shown? '3' : '1'} onClick={() => setShown(true)} />
      <Zoom in={shown}>
       <Fab onClick={SubmitNote}>
        <AddIcon/>
      </Fab>
      </Zoom>
      </form>
    </div>
  )
}

export default CreateArea