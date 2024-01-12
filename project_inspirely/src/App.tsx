import { useState } from 'react'
import Spaces from "./pages/spaces"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Spaces/>
  )
}

export default App
