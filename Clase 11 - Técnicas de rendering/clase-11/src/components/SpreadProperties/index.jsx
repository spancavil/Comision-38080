import React from 'react';
import './styles.scss';

const SpreadProperties = ({additionalStyles}) => {
  return (
    <div
        className = "base"
        style={{
            ...additionalStyles
        }}
    >
        Prop styling
    </div>
  )
}

export default SpreadProperties