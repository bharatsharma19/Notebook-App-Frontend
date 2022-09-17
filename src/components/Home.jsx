import React from 'react'
import Notes from './Notes'

const Home = (props) => {

  const { showAlert } = props

  return (
    <div>
      <div className="container my-4" style={{ marginTop: "60px" }}>
        <Notes showAlert={showAlert} />
      </div>

    </div>
  )
}

export default Home
