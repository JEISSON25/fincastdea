import { useState } from 'react'
import Autentication from './views/Autentication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Autentication />
    </>
  )
}

export default App
