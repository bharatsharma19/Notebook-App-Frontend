import React from 'react'

const NoteItem = (props) => {
    const { note } = props

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">
                        {note.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
