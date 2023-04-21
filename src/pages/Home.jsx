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
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
    </>
  )
}
