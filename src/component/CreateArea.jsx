import React, { useState } from 'react'

const CreateArea = ({onAdd}) => {
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
      <form>
      <input type="text"  onChange={handleChange} value={note.title} placeholder="Title" name="title" />
      <textarea type="text" onChange={handleChange}  value={note.content} placeholder="Take a note... " name="content"  rows="3" />
      <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea