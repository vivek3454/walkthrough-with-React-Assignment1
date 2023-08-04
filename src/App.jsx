import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Button from './components/Button'
import Person from './components/Person'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header title="Welcome to my website!" />
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center'}}>
        <Person name="John" age="30" />
        <Button text="Click me!" onClick={() => console.log("Button clicked")} />
      </div>
        <List items={['apple', 'banana', 'orange']} />
    </>
  )
}

export default App
