import React from 'react'

const ColouredButton = ({ btnText, onClick }) => {
  return (
    <button className='coloured-button' onClick={() => onClick()}>{btnText}</button>
  )
}

export default ColouredButton