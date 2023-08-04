import React, { useState } from 'react'
import './App.css'
import Form from "./components/Form"
import BoxDisplay from "./components/BoxDisplay"

function App() {

const [currentBoxes, setCurrentBoxes] = useState([])

// const createNewBox = ( newBox ) => {
//   setCurrentBoxes (currentBoxes.push(newBox))
// }

  return (
    <div className='boxes'>
      <h1>Box Generator</h1>
      <Form currentBoxes={ currentBoxes } setCurrentBoxes={ setCurrentBoxes }/>
      {/* <div className='boxes' style={{display: flex}} >
        <div className='box'></div> */}
      <BoxDisplay currentBoxes = {currentBoxes}/>
      {/* </div> */}
    </div>
  )
}

export default App
