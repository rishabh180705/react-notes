import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './lectures/intro.jsx'
import Project from './projects/project.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <Project/>
    </>
  )
}

export default App
