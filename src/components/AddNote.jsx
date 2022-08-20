import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", desc: "", tag: "General" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.desc, note.tag);
        setNote({ title: "", desc: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container my-2">
                <h2 className='text-center'>Add a Note</h2>
                <form className='my-3'>
                    <div className="col s12">
                        <div className="row">
                            <div className="form-group col s6">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                            </div>
                            <div className="form-group col s6">
                                <label htmlFor="tag">Tag</label>
                                <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input type="text" className="form-control" id="desc" name="desc" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
