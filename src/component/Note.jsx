import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = ({id, title, content ,onDelete}) => {

  const handledelete = () => {
   return  onDelete(id);
  }
  return (
   
    <div className='note' >
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handledelete}>
        <DeleteIcon/>
      </button>
      </div>

   
      
   
  )
}

export default Notes