import React, { useState } from "react";

function CreateArea(probs) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    probs.onAdd(note);
    setNote ({
      title: "",
      content: "",
    })
    event.preventDefault();
  }

  return (
    <div>
      <form className="addnote">
        <input
          onChange={handleChange}
          type="text"
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note"
          id=""
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
