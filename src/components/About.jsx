import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext)

    useEffect(() => {
        a.update()
    }, [])

    return (
        <div>
            <h1>About {a.state.name}</h1>
        </div>
    )
}

export default About
