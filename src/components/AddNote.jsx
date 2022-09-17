import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", desc: "", tag: "General" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.desc, note.tag);
        setNote({ title: "", desc: "", tag: "" })
        props.showAlert("Note Created Successfully", "info")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container my-2">
                <h3 className='text-center'>Add a Note</h3>
                <form className='my-3'>
                    <div className="col s12">
                        <div className="row">
                            <div className="form-group col s6">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} minLength={3} required value={note.title} />
                            </div>
                            <div className="form-group col s6">
                                <label htmlFor="tag">Tag</label>
                                <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input type="text" className="form-control" id="desc" name="desc" onChange={onChange} minLength={5} required value={note.desc}
                        />
                    </div>
                    <button disabled={note.title.length < 3 || note.desc.length < 5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
