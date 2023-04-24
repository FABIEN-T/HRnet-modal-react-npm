import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import styles from '../App.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h1>Essai modal</h1>
      <main>
        <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            firstName={'Quentin'}
            lastName={'Du Roi'}
            modalBgColor={'white'}
            modalBorder={'3px solid green'}
            modalBorderRadius={'20px'}
            crossCloseBg={'pink'}
            crossCloseColor={'red'}
            crossCloseBorder={'3px solid green'}
            fontFamily={'Trebuchet MS'}
            fontSize={'20px'}
            fontColor={'blue'}
            textAlign={'left'}
          />
        )}
      </main>
    </>
  )
}
