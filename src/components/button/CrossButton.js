import React from 'react'
import CrossIcon from '../../assets/images/cross.svg'
const CrossButton = ({onClick}) => {
  return (
    <button className='icon-button' onClick={() => onClick()}><img src={CrossIcon} alt="back"/></button>
  )
}

export default CrossButton