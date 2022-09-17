import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                    }}
                >
                    <span className="badge rounded-pill bg-info"> {note.tag} </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        position: "absolute",
                        left: "0",
                    }}
                >
                    <span className="badge rounded-pill bg-secondary"> {note.date} </span>
                </div>
                <div className="card-body my-2">
                    <div className="d-flex align-items-centerbd-highlight mb-3">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="mx-3">
                            <i className="far fa-trash-alt p-2 bd-highlight" style={{ cursor: "pointer" }} onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "info") }}></i>
                            <i className="far fa-edit p-2 bd-highlight" style={{ cursor: "pointer" }} onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">
                        {note.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
