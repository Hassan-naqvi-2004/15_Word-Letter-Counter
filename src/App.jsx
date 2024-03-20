import React, { useEffect } from 'react'
import {useState} from 'react'

const App = () => {
  const [value, setValue] = useState('')
  const [theme, setTheme] = useState('lighttheme')
  const lightTheme = ()=>{
    setTheme('darktheme')
    document.body.style.backgroundColor = 'darktheme'
  }
  const darkTheme = ()=>{
    setTheme('lighttheme') 
    
  }
  


  const handleClear =()=>{
    setValue('')
  console.log('click button')
  }
  const handleCopy=()=>{
 
    navigator.clipboard.writeText(value)


    
  }
  const clearSpace = ()=>{
    let  tm = value.split(/[ ]+/)
    setValue(tm.join(' '))
    // console.log(tm)
    // // setValue(tm.join('-'))
    // console.log(tm.join('--'))
  }
 
  const upperCase =()=>{
   setValue(value.toUpperCase())
  }

  const lowerCase=()=>{
    setValue(value.toLowerCase())
  }
  useEffect(()=>{
    document.body.className=theme
  })



  return (
    <div className={theme}>


  <div className='main'>  
      <div className='header'>
        <h1>Word Letter Counter</h1>
      </div>
      <div className='text'>
        <h1>Enter Your Text Here</h1>
        <textarea className={theme} placeholder='Type your text' value={value} onChange={(e)=> setValue(e.target.value)}></textarea>
      </div>
      <div className='btn'>
        <button onClick={handleClear}>Clear Text</button>
        <button onClick={upperCase}>Upper Case</button>
        <button onClick={lowerCase}>Lower Case</button>
        <button onClick={clearSpace} >Remove Space</button>
        <button onClick={handleCopy}>Copy Text</button>
        <button onClick={lightTheme}>Dark Theme</button>
        <button onClick={darkTheme}>Light Theme</button>
      </div>
  </div>

    </div>
  )
}

export default App
