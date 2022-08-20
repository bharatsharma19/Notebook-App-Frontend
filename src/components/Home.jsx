import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'
import Alert from './Alert';

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "60px" }}>
        <Alert message="Alert" />
      </div>
      <div className="container my-4">
        <Notes />
      </div>

    </div>
  )
}

export default Home
