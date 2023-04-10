import React, { useState } from 'react'

function Quiz1() {

  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState('Change to MidnightBlue');

  const onClick = () => {
    setIsClicked((prevState) => !prevState )
    if(isClicked) setText('Change to MidnightBlue')
    else setText('Change to MediumVioletRed')
  }
  const handleOnChange = (e) => {
    setIsChecked((prevState) => !prevState)
  }
  const color = () => {
    if(isChecked) return { backgroundColor:'gray' }
    else if(isClicked) return { backgroundColor:'MidnightBlue' }
    else return { backgroundColor:'MediumVioletRed'  }
  }
  return (
	<div>
    <button 
      disabled = { isChecked } 
      onClick = { () => onClick() }
      style = { color() }
    >
      { text }
    </button>

    <input
      id = 'disable button'
      type = "checkbox"
      checked = { isChecked }
      onChange = { handleOnChange }
    />  
      <label htmlFor='disable button'>
        disable button
      </label>
  </div>
  )

}

export default Quiz1