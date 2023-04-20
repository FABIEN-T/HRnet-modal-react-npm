import React from 'react'
import styles from './Modal.module.css'
import PropTypes from 'prop-types'

export function Modal({ setIsOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <span
          className={styles.close}
          onClick={() => {
            setIsOpen(false)
          }}
        ></span>
        <div className={styles.modalContent}>Employee Created !</div>
      </div>
    </>
  )
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
}
