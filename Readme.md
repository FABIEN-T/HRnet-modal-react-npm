# Customizable modal package creation repository : fv-modal-react

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REACT](https://img.shields.io/badge/React-303540?style=for-the-badge&logo=react&logoColor=61DAFB)
![STYLEDCOMPONENTS](https://img.shields.io/badge/Styled--Components-b758ad?style=for-the-badge&logo=styled--components&logoColor=61DAFB)

![Author](<https://img.shields.io/badge/Author-Fabien Varlet-"?style=for-the-badge&color=darkgoldenrod>)
![size](https://img.shields.io/github/repo-size/FABIEN-T/P14-modal-react?style=for-the-badge)

## Presentation

![SNAPSHOT](/src/assets/fv-modal-react.png "Titre de l'image")
This is the repository of the modal package : fv-modal-react.
View the composant Modal.jsx in `src/components/Modals.jsx`

## Installing the package

### 1/ Install package :

`npm i fv-modal-react`

### 2/Import the component from the library :

`import { Modal } from 'fv-modal-react'`

### 3/ Place this state hook (concerning the opening/closing of the modal) at the start of the function that uses the Modal component :

`const [isOpen, setIsOpen] = useState(false)`

### 4/ In the return of the function, call the Modal component with at least the `setIsOpen` and `text` props :

`{isOpen && <Modal setIsOpen={setIsOpen} text={'Hello ' + name} />}`

### 5/ Example :

```js
import React, { useState } from 'react'
import { Modal } from '../components/Modal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const name = 'John Smith'

  return (
    <>
      <h1>Modal Test</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} text={'Hello ' + name} />}
    </>
  )
}
```

### 6/ Customize the modal by adding props :

```js
<Modal
  setIsOpen={setIsOpen}
  text={'Hello ' + name}
  // Custom the background of the modal
  modalBgColor={'midnightblue'}
  modalBorder={'3px solid white'}
  modalBorderRadius={'20px'}
  // Custom the closing cross
  crossCloseBg={'red'}
  crossCloseColor={'white'}
  crossCloseBorder={'3px solid white'}
  // Custom the font
  fontFamily={'Trebuchet MS'}
  fontSize={'20px'}
  fontColor={'white'}
  textAlign={'center'}
/>
```

## Prerequisites

![npm](https://img.shields.io/badge/npm-9.1.3-%23000000?style=flat-square&logo=npm&logoColor=white)

![yarn](https://img.shields.io/badge/yarn-1.22.19-%232C8EBB?style=flat-square&logo=yarn&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-16.14.0-43853D?style=flat-square&logo=node.js&logoColor=white)

## Dependencies

![GitHub package.json dependencies (dev)](https://img.shields.io/github/package-json/dependency-version/FABIEN-T/P14-modal-react/react?label=REACT&logo=react&logoColor=61DAFB&color=303540&style=flat-square)

![GitHub package.json dependencies (dev)](https://img.shields.io/github/package-json/dependency-version/FABIEN-T/P14-modal-react/react-dom?label=REACT-DOM&logo=react&logoColor=61DAFB&color=303540&style=flat-square)

![GitHub package.json dependencies (dev)](https://img.shields.io/github/package-json/dependency-version/FABIEN-T/P14-modal-react/styled-components?label=Styled-Components&logo=styled-components&logoColor=b758ad&color=b758ad&style=flat-square)

### DevDependencies

<!-- ![GitHub package.json devDependencies version (dev)](https://img.shields.io/github/package-json/devDependency-version/FABIEN-T/P14-modal-react/prop-types?label=Prop-types&color=303540&style=flat-square) -->

![Prop-types](https://img.shields.io/badge/Prettier-^2.8.2-blue?style=flat-square)

![Prettier](https://img.shields.io/badge/Prettier-^15.8.1-blue?style=flat-square)

![Vite](https://img.shields.io/badge/Vite-^4.3.5-blue?style=flat-square)

<br>
<br>
