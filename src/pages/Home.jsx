import React, { useState } from 'react'
import { Modal } from '../components/Modal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const firstname = 'Louis '
  const lastName = 'Seize '

  return (
    <>
      <h1>Essai modal</h1>
      <main>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            text={firstname + lastName + 'is saved'}
            modalBgColor={'white'}
            modalBorder={'3px solid green'}
            modalBorderRadius={'20px'}
            crossCloseBg={'white'}
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

// {
//   <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <span
//           className={styles.close}
//           onClick={() => {
//             setIsOpen(false)
//           }}
//         ></span>
//         <div className={styles.modalContent}>Employee Created !</div>
//       </div>
// }

{
  /* Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consectetur aliquid eveniet debitis quis doloribus maxime repudiandae
          ipsum exercitationem a nisi quas quasi doloremque explicabo, ratione
          accusantium distinctio! Officia, nostrum? */
}
// Modal.propTypes = {
//   setIsOpen: PropTypes.func,
// }
