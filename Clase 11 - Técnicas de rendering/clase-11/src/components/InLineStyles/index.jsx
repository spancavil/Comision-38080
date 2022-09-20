import React from 'react'

const InLineStyles = ({condition}) => {
  return (
    <div style={{
        width: 300,
        height: 400,
        backgroundColor: condition ? "green" : "gray"   
    }}>

    </div>
  )
}

export default InLineStyles