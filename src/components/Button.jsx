import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='button' onClick={handleNewQuote}>Probar mi suerte</button>
  )
}

export default Button