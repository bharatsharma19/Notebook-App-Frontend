import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "672ff85e688ffbbea0a88001f",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 1 Updated",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:26.929Z",
      __v: 0,
    },
    {
      _id: "627ff85ea88ffbbea0a880021",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 2",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:30.241Z",
      __v: 0,
    },
    {
      _id: "62f7f85e688ffbbea0a88001f",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 1 Updated",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:26.929Z",
      __v: 0,
    },
    {
      _id: "62ff857ea88ffbbea0a880021",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 2",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:30.241Z",
      __v: 0,
    },
    {
      _id: "62ff85e7688ffbbea0a88001f",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 1 Updated",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:26.929Z",
      __v: 0,
    },
    {
      _id: "62ff85e7a88ffbbea0a880021",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 2",
      desc: "Second",
      tag: "General",
      date: "2022-08-19T12:45:30.241Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "62ff85e7a488ffbbea0a880021",
      user: "62f4044bc3cd607dac73ec4c",
      title: "Note 3",
      desc: "Addeddasaaaaaa",
      tag: "General",
      date: "2022-08-19T12:45:30.241Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  };

  // Delete a Note
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
