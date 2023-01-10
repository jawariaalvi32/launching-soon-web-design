import React from 'react'

const OutlinedButton = ({ btnText, onClick }) => {
  return (
    <button className='outlined-button' onClick={() => onClick()}>{btnText}</button>
  )
}

export default OutlinedButton