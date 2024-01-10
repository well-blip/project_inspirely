import { useState } from 'react'
import './App.css'
import Spaces from "./pages/spaces"
import { Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
// test
  return (
    <Spaces />
  )
}

export default App
