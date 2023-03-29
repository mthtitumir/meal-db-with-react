import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainBody from './components/MainBody/MainBody'
import Meals from './components/Meals/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <MainBody></MainBody>
    </div>
  )
}

export default App
