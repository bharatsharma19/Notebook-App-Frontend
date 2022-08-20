import React from 'react'

const NoteItem = (props) => {
    const { note } = props

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
                        <h4 className="card-title">{note.title}</h4>
                        <div className="mx-3">
                            <i className="far fa-trash-alt p-2 bd-highlight" style={{ cursor: "pointer" }}></i>
                            <i className="far fa-edit p-2 bd-highlight" style={{ cursor: "pointer" }}></i>
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
