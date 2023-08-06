import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';

function Note(probs){

function handleClick(){
    probs.onDelete(probs.id);
}

    return(
        <div className="note">
            <h1>{probs.title}</h1>
            <p>{probs.content}</p>
            <button className="delete" onClick={handleClick}>
                {/* <DeleteIcon /> */}
                Delete
            </button>
        </div>
    )
}

export default Note;