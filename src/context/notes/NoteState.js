import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Fetch all Note
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, desc, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
      body: JSON.stringify({ title, desc, tag }),
    });

    const json = await response.json();
    console.log(json);

    const note = [
      {
        _id: "63011f5ab1b8f74fa21652f9",
        user: "62f4044bc3cd607dac73ec4c",
        title: title,
        desc: desc,
        tag: tag,
        date: "2022-08-20T17:52:26.719Z",
        __v: 0,
      },
    ];
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
    });
    const json = response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, desc, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
      body: JSON.stringify({ title, desc, tag }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in Client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].desc = desc;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
