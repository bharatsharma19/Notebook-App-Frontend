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
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new Note");

    const note = {
      _id: "62ff85e7a488ffbbea0a880021",
      user: "62f4044bc3cd607dac73ec4c",
      title: title,
      desc: description,
      tag: tag,
      date: "2022-08-19T12:45:30.241Z",
      __v: 0,
    };
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
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNDA0NGJjM2NkNjA3ZGFjNzNlYzRjIn0sImlhdCI6MTY2MDkxMzA1NH0.6LrJRoLuuAM4dkJ5DyPbWoyZ5A4lsEho3OUBPwGyIcU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
