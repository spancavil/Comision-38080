import React from 'react'

const InLineTernary = ({condition}) => {
  return (
    <span>{condition ? "Feliz Navidad": "Felices Pascuas"}</span>
  )
}

export default InLineTernary