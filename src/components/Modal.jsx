import React from 'react'
// import './modal.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DarkBg = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`

const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 500px;
  height: fit-content;
  background: ${(props) => props.modalBgColor || 'white'};
  color: white;
  border: ${(props) => props.modalBorder || ''};
  border-radius: ${(props) => props.modalBorderRadius || '8px'};
`

const CrossClose = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -13px;
  margin-right: -13px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.crossCloseBg || 'black'};
  border: ${(props) => props.crossCloseBorder || ''};
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;
  :before,
  :after {
    position: absolute;
    top: 8px;
    left: 14px;
    content: ' ';
    height: 14px;
    width: 2px;
    background-color: ${(props) => props.crossCloseColor || 'white'};
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`

const ModalContent = styled.div`
  padding: 15px 30px;
  font-family: ${(props) => props.fontFamily || 'arial'};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || ''};
  color: ${(props) => props.fontColor || 'black'};
  text-align: ${(props) => props.textAlign || 'center'};
`

export function Modal({
  setIsOpen,
  firstName,
  lastName,
  modalBgColor,
  modalBorder,
  modalBorderRadius,
  crossCloseBg,
  crossCloseColor,
  crossCloseBorder,
  fontFamily,
  fontWeight,
  fontSize,
  fontColor,
  textAlign,
}) {
  return (
    <>
      <DarkBg onClick={() => setIsOpen(false)} />
      {/* <div className="darkBG" onClick={() => setIsOpen(false)} /> */}
      {/* <div className="centered"> */}
      <ModalBg
        modalBgColor={modalBgColor}
        modalBorder={modalBorder}
        modalBorderRadius={modalBorderRadius}
      >
        {/* <span
          className="close"
          onClick={() => {
            setIsOpen(false)
          }}
        ></span> */}
        <CrossClose
          crossCloseBg={crossCloseBg}
          crossCloseColor={crossCloseColor}
          crossCloseBorder={crossCloseBorder}
          onClick={() => {
            setIsOpen(false)
          }}
        ></CrossClose>
        <div className="modalContent"></div>
        {/* <div className="modalContent"> */}
        <ModalContent
          textAlign={textAlign}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consectetur aliquid eveniet debitis quis doloribus maxime repudiandae
          ipsum exercitationem a nisi quas quasi doloremque explicabo, ratione
          accusantium distinctio! Officia, nostrum? */}
          {firstName} {lastName} is saved.
        </ModalContent>
        {/* </div> */}
      </ModalBg>
    </>
  )
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
}

{
  /* <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <span
          className={styles.close}
          onClick={() => {
            setIsOpen(false)
          }}
        ></span>
        <div className={styles.modalContent}>Employee Created !</div>
      </div> */
}
