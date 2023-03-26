import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import Header from './containers/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header__bg'>
        <Header />
      </div>
    </div>
  )
}

export default App
