import { Modal } from './components/Modal'
import React, { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const name = 'Tony  Stark'
  console.log(isOpen)
  return (
    <div className="App">
      <h1>Modal Test</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          text={'Hello ' + name}
          modalBgColor={'midnightblue'}
          modalBorder={'3px solid white'}
          modalBorderRadius={'20px'}
          crossCloseBg={'red'}
          crossCloseColor={'white'}
          crossCloseBorder={'3px solid white'}
          fontFamily={'Trebuchet MS'}
          fontSize={'20px'}
          fontColor={'white'}
          textAlign={'left'}
        />
      )}
    </div>
  )
}

// export default App
