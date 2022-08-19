import React from "react";
import noteContext from "./noteContext";

const NoteState = () => {
  const state = {
    name: "Bharat",
  };

  return (
    <NoteState.provider value={state}>{props.children}</NoteState.provider>
  );
};

export default NoteState;
