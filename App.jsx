import Toggle from './components/Toggle'
import { useState } from 'react'
import './App.css'
import useLocalStorage from 'use-local-storage'


const App = () => {
  // get user preference from their machine
  const preference = window.matchMedia("(preferes-color-shema: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference)

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <img src="logo.png" alt="" style={{ height:'200px' }} />
      <h1 className='title' style={{ marginTop: '-38px' }}>Welcome To Azizi Soft</h1>
      <div className="box">
        <h2>Our website is launching soon...</h2>
      </div>
    </div>
  )
}

export default App
