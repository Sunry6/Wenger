import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ButtonSize, ButtonType } from './components/Button/interface'
import { Button } from './components/Button/button'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button>Button</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
          Button
        </Button>
        <Button btnType={ButtonType.Link} href='www.google.com'>
          Button
        </Button>
        <Button disabled={true}>Button</Button>
        <Button disabled={true} btnType={ButtonType.Link} href='www.google.com'>
          Button
        </Button>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
