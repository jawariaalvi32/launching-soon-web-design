import React from 'react'
import BackIcon from '../../assets/images/backArrow.svg'
const BackButton = ({onClick}) => {
  return (
    <button className='icon-button' onClick={() => onClick()}><img src={BackIcon} alt="back"/></button>
  )
}

export default BackButton