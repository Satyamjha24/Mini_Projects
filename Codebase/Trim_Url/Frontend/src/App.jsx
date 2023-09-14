import { useState } from 'react'
import './App.css'
import ShortURL from './ShortURL'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShortURL/>
    </>
  )
}

export default App
