import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='button' onClick={handleNewQuote}>Try my luck</button>
  )
}

export default Button